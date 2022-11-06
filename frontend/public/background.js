chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    console.log('wake me up');
});

chrome.alarms.create({ periodInMinutes: 4.9 });
chrome.alarms.onAlarm.addListener(() => {
  console.log('log for debug');
});

// const { convert } = require('html-to-text');

var decode = function (input) {
    // Replace non-url compatible chars with base64 standard chars
    input = input
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if (pad) {
        if (pad === 1) {
            throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
        }
        input += new Array(5 - pad).join('=');
    }

    return input;
}

/*global chrome*/
// chrome.storage.local.get(['gmail-token'], (result) => {
//     console.log(result);
// });

chrome.runtime.onMessage.addListener((data) => {
    if (data?.message?.type === 'gmail-login' && data?.message?.token) {
        let token = data?.message?.token;
        chrome.storage.local.set({
            gmail_token: token
        }, () => {
            getEmails();
        });
    }
});

const analyzeEmailSentiment = (text, type) => {
    return new Promise(async (resolve, reject) => {
        fetch(`https://language.googleapis.com/v1/documents:analyzeSentiment?key=${"AIzaSyCwgHoouSj6djXwYAsu7FKUra8140oqDNA"}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                document: {
                    type: type,
                    content: text
                }
            })
        })
            .then(res => res.json())
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        // let analysis = gapi.client.language.documents.analyzeSentiment({
        //     'document': {
        //         'type': type,
        //         'content': text
        //     }
        // });

        // console.log(analysis.result);
        // const document = {
        //     content: text,
        //     type: type,
        // };

        // // Detects the sentiment of the text
        // const [result] = await client.analyzeSentiment({document: document});
        // const sentiment = result.documentSentiment;

        // console.log(`Text: ${text}`);
        // console.log(`Sentiment score: ${sentiment.score}`);
        // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    });
}

const analyzeUrgency = (text) => {
    return new Promise((resolve, reject) => {
        const firstHalf = "sk-mGqEty8d7u47uwTvq0f";
        const secondHalf = "5T3BlbkFJMVcfZXfY4xf1mp4Lcycb";
        const openAIKey = firstHalf + secondHalf;

        fetch(`https://api.openai.com/v1/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openAIKey}`
            },
            body: JSON.stringify({
                "model": 'text-davinci-002',
                "temperature": 0,
                "max_tokens": 256,
                "prompt": `
                Score the email according to this criteria:

                The sentiment is very urgent - 5
                The sentiment is urgent - 4
                The sentiment is somewhat urgent - 3
                The sentiment is not very urgent - 2
                The sentiment is neutral - 1

                Email:
                ${text}

                Score:`
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res?.choices?.length > 0 && res.choices[0] !== undefined && Number.isInteger(+res.choices[0].text.trim().match(/\d+/g)[0])) {
                    console.log(`Text: "${text}" with urgency: ${+res.choices[0].text.trim().match(/\d+/g)[0]}`);
                    resolve(+res.choices[0].text.trim().match(/\d+/g)[0]);
                } else {
                    reject("not parsable");
                }
            })
            .catch(reject);
    });
}

const analyzeSummary = (text) => {
    return new Promise((resolve, reject) => {
        const firstHalf = "sk-mGqEty8d7u47uwTvq0f";
        const secondHalf = "5T3BlbkFJMVcfZXfY4xf1mp4Lcycb";
        const openAIKey = firstHalf + secondHalf;

        fetch(`https://api.openai.com/v1/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openAIKey}`
            },
            body: JSON.stringify({
                "model": 'text-davinci-002',
                "temperature": 0,
                "max_tokens": 256,
                "prompt": `
                Write a short summary of the following email:

                Email:
                ${text}

                Summary:
                `
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res?.choices?.length > 0) {
                    console.log(`Text: "${text}" with summary: ${res.choices[0].text.trim()}`);
                    resolve(res.choices[0].text.trim());
                }
            })
            .catch(reject);
    });
}

const analyzeEmails = (email, text) => {
    return new Promise(async (resolve, reject) => {
        let urgency = analyzeUrgency(text);
        let summary = analyzeSummary(text);

        try {
            urgency = await analyzeUrgency(text);
        } catch (e) {
            urgency = 1;
        }

        try {
            summary = await analyzeSummary(text);
        } catch (e) {
            summary = text;
        }

        resolve([email, text, urgency, summary]);
    });
}

const getEmails = async () => {
    chrome.storage.local.get(['gmail_token', 'emails'], (result) => {
        if (result?.gmail_token != undefined) {
            // Get most recent emails
            fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=15&q=${encodeURI('in:inbox is:unread category:primary')}`, {
                headers: {
                    'Authorization': 'Bearer ' + result.gmail_token
                }
            })
                .then(res => res.json())
                .then(res => {
                    let promises = [];

                    for (let message of res.messages) {
                        promises.push(
                            fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${message.id}`, {
                                headers: {
                                    'Authorization': 'Bearer ' + result.gmail_token
                                }
                            })
                                .then(res => res.json())
                        );
                        // fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${message.id}`, {
                        //     headers: {
                        //         'Authorization': 'Bearer ' + result.gmail_token
                        //     }
                        // })
                        // .then(res => res.json())
                        // .then(async res => {
                        //     if (res?.payload?.parts?.length > 1) {
                        //         let text = convert(atob(decode(res.payload.parts[1].body.data)));
                        //         text = text.replace(/\[.*\]/g, "").replace(/https?:\/\/.*?[\s+]/g, "").replace(/\n/g, " ");
                        //         console.log(text);

                        //         // let sentiment = await analyzeEmailSentiment(text, 'PLAIN_TEXT');
                        //         // ranks.push({
                        //         //     overall: sentiment.documentSentiment.magnitude * sentiment.documentSentiment.score,
                        //         //     text
                        //         // });
                        //     }
                        // })
                        // .catch(err => console.error(err));
                    }

                    Promise.all(promises)
                        .then(res => {
                            console.log(res);
                            let parsedEmails = [];
                            let analysisPromises = [];

                            let alreadyExistingEmails = {};

                            if (result?.emails?.length) {
                                for (let oldEmail of result.emails) {
                                    alreadyExistingEmails[oldEmail.id] = oldEmail;
                                }
                            }

                            console.log(alreadyExistingEmails);

                            for (let email of res) {
                                if (alreadyExistingEmails[email.id]) {
                                    parsedEmails.push(alreadyExistingEmails[email.id]);
                                } else if (email?.payload?.parts?.length > 0 && email?.payload?.parts[0]?.body?.data !== undefined) {
                                    let text = atob(decode(email.payload.parts[0].body.data)).replace(/\[.*\]/g, "").replace(/https?:\/\/.*?[\s+]/g, "");
                                    analysisPromises.push(analyzeEmails(email, text));
                                    // let urgencies = [1, 2, 3, 4, 5];
                                    // analyzeUrgency(text);

                                    // let parsedEmail = {
                                    //     timestamp: email.internalDate,
                                    //     subject: email.payload.headers.find(x => x.name.toLowerCase().trim() == 'subject').value,
                                    //     summary: "Coming soon!",
                                    //     urgency: await analyzeUrgency(text),
                                    //     url: `https://mail.google.com/mail/#inbox/${email.id}`,
                                    //     sender: email.payload.headers.find(x => x.name.toLowerCase().trim() == 'from').value,
                                    //     content: text,
                                    // };

                                    // parsedEmails.push(parsedEmail);
                                }
                            }

                            Promise.all(analysisPromises)
                                .then(res => {
                                    for (let data of res) {
                                        let email = data[0];
                                        let text = data[1];
                                        let urgency = data[2];
                                        let summary = data[3];

                                        let parsedEmail = {
                                            timestamp: email.internalDate,
                                            subject: email.payload.headers.find(x => x.name.toLowerCase().trim() == 'subject').value,
                                            summary: summary,
                                            urgency: urgency,
                                            url: `https://mail.google.com/mail/#inbox/${email.id}`,
                                            sender: email.payload.headers.find(x => x.name.toLowerCase().trim() == 'from').value,
                                            content: text,
                                            id: email.id
                                        };

                                        parsedEmails.push(parsedEmail);
                                    }

                                    chrome.storage.local.set({
                                        emails: parsedEmails
                                    });
                                })
                                .catch(err => console.error(err));
                        })
                        .catch(err => {
                            console.error(err);
                        });
                })
                .catch(err => console.error(err));
        }
    });
}

getEmails();
setInterval(getEmails, 40000);
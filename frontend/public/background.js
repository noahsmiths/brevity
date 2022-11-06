// const { convert } = require('html-to-text');

var decode = function(input) {
    // Replace non-url compatible chars with base64 standard chars
    input = input
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if(pad) {
      if(pad === 1) {
        throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
      }
      input += new Array(5-pad).join('=');
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

const getEmails = async () => {
    chrome.storage.local.get(['gmail_token'], (result) => {
        if (result?.gmail_token != undefined) {
            // Get most recent emails
            fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=25&q=${encodeURI('in:inbox is:unread category:primary')}`, {
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

                    for (let email of res) {
                        if (email?.payload?.parts?.length > 0 && email?.payload?.parts[0]?.body?.data !== undefined) {
                            let urgencies = [1, 2, 3, 4, 5];
                            let parsedEmail = {
                                timestamp: email.internalDate,
                                subject: email.payload.headers.find(x => x.name.toLowerCase().trim() == 'subject').value,
                                summary: "Coming soon!",
                                urgency: urgencies[Math.floor(Math.random() * urgencies.length)],
                                url: `https://mail.google.com/mail/#inbox/${email.id}`,
                                sender: email.payload.headers.find(x => x.name.toLowerCase().trim() == 'from').value,
                                content: atob(decode(email.payload.parts[0].body.data)).replace(/\[.*\]/g, "").replace(/https?:\/\/.*?[\s+]/g, "")
                            };

                            parsedEmails.push(parsedEmail);
                        }
                    }

                    chrome.storage.local.set({
                        emails: parsedEmails
                    });
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
setInterval(getEmails, 30000);
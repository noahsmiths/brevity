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
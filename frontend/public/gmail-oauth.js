/*global chrome*/
const params = new URLSearchParams(window.location.href.split("#")[1]);

if (params.has('access_token')) {
    chrome.runtime.sendMessage({
        message: {
            type: 'gmail-login',
            token: params.get('access_token')
        }
    });
}
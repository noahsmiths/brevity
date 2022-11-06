/*global gapi*/
/*global google*/
/*global chrome*/

import React, { useEffect, useState } from "react";

export default function EmailCard(props) {
  const { serviceName = "Email Service" } = props;
  const { serviceDesc = "Abbreviate your service description." } = props;
  const [isConnected, setIsConnected] = useState(false);
  const [tokenClient, setTokenClient] = useState(false);

  useEffect(() => {
    console.log('running!');

    chrome.storage.local.get(['gmail_token'], (result) => {
      if (result?.gmail_token != undefined) {
        setIsConnected(true);
      }
    });

    //https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&access_type=offline&response_type=code&client_id=343083463515-40339r3j4u4skibh2rse0mj3jtqsfgsk.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fnoahsmiths.github.io%2Fgmail_oauth_complete.html

    const CLIENT_ID = '343083463515-40339r3j4u4skibh2rse0mj3jtqsfgsk.apps.googleusercontent.com';
      const API_KEY = 'AIzaSyCwgHoouSj6djXwYAsu7FKUra8140oqDNA';

      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

    
  }, []);

  const handleGmailLogin = () => {
    window.open("https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&response_type=token&client_id=343083463515-40339r3j4u4skibh2rse0mj3jtqsfgsk.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fnoahsmiths.github.io%2Fgmail_oauth_complete.html");
  }

  const toggle = () => {
    if (isConnected) {
      chrome.storage.local.remove('gmail_token');
      setIsConnected(false);
    } else {
      handleGmailLogin();
    }
  }

  //psueodcode
  // let loginButton;
  // if (loggedIn) {
  //   <button>Connected</button>;
  // } else {
  //   <button>Sign Up</button>;
  // }

  return (
    <div className="card w-full mt-1 bg-base-100 scale-95 shadow-md p-3 flex-row hover:cursor-pointer border-0.2 border-softgray">
    <div className="w-11 pr-2 flex items-center justify-center">
      <div className="rounded-full h-9 w-9 bg-info"></div>
    </div>
    <div className="w-full">
      <p className="text-lg">{serviceName}</p>
      <p className="text-sm">{serviceDesc}</p>
      <div>
      </div>
    </div>
    <div className="flex items-center ">
      <div className="p-2 btn btn-info" onClick={() => {toggle()}}>
        {(isConnected) ? "Disconnect" : "Connect"}
      </div>
    </div>
    <div>{/* loginButton */}</div>
  </div>
  );
}

/*global gapi*/
/*global google*/
/*global chrome*/

import React, { useEffect, useState } from "react";
import gmailLogo from '../../assets/Gmail.svg';

export default function EmailCard(props) {
  const { serviceName = "GMail" } = props;
  const { serviceDesc = "Abbreviate your Gmail inbox." } = props;
  const [isConnected, setIsConnected] = useState(false);
  const [tokenClient, setTokenClient] = useState(false);

  useEffect(() => {
    console.log('running!');

    if (chrome?.storage?.local) {
      chrome.storage.local.get(['gmail_token'], (result) => {
        if (result?.gmail_token != undefined) {
          setIsConnected(true);
        }
      });
    }


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
      <div className="w-11 pr-2 flex items-center justify-center rounded-full">
        <img src={gmailLogo} class="w-9"></img>
      </div>
      <div className="w-full">
        <p className="text-lg">{serviceName}</p>
        <p className="text-sm">{serviceDesc}</p>
        <div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-2 btn btn-info text-gray-100" onClick={() => { toggle() }}>
          {(isConnected) ? "Disconnect" : "Connect"}
        </div>
      </div>
      <div>{/* loginButton */}</div>
    </div>
  );
}

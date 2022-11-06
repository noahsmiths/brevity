/*global chrome*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import EmailCard from "../../components/EmailCard";
import NavBar from "../../components/MainNav";

export default function Main() {

  const [emailData, setEmailData] = useState([]);
  const [hasEmailData, setHasEmailData] = useState(false);
  const [sortMethod, setSortMethod] = useState('urgency');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate();

  const sortEmails = () => {
    let newEmails = [...emailData];

    if (sortMethod === 'urgency') {
      newEmails.sort((a, b) => {
        return b.urgency - a.urgency;
      });
    } else if (sortMethod === 'recency') {
      newEmails.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    }

    setEmailData(newEmails);
  }

  useEffect(() => {
    function getEmailData() {
      if (chrome?.storage?.local) {
        chrome.storage.local.get(['emails', 'gmail_token'], (result) => {
          if (result?.gmail_token) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
          if (result?.emails?.length > 0) {
            // Do what you will with emails here

            // Code to sort by urgency
            let emails = result.emails;
            emails.sort((a, b) => {
              return b.urgency - a.urgency;
            });
            setEmailData(emails);

            //setEmailData(result.emails);
            setHasEmailData(true)
            console.log(result);
          } else {
            setHasEmailData(false);
            console.warn("Data couldn't be loadedß")
          }
        });
      }
    }

    getEmailData();
  }, [])

  useEffect(() => {
    sortEmails();
  }, [sortMethod]);

  return (
    <div className="p-3 pr-5">
      <NavBar />
      {isLoggedIn &&
        <Dropdown sortMethod={sortMethod} setSortMethod={setSortMethod} />
      }

      {emailData && isLoggedIn ? emailData.map((email, index) => {
        console.log(`key: ${index} \n pair: ${email}`);
        console.log(email);
        return (
          <div>
            <EmailCard props={email} />
          </div>
        )
      })
        : null
      }

      {!isLoggedIn ?
        <div>
          <h1 className="text-center">You're not logged in. Click <b className="link" onClick={() => navigate("/settings")}>here</b> to connect an account.</h1>
        </div>
        :
        null
      }

    </div>
  );
}

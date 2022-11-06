/*global chrome*/
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import EmailCard from "../../components/EmailCard";
import NavBar from "../../components/MainNav";


export default function Main() {

  const [emailData, setEmailData] = useState([]);
  const [hasEmailData, setHasEmailData] = useState(false);

  useEffect(() => {
    function getEmailData() {
      if (chrome?.storage?.local) {
        chrome.storage.local.get(['emails'], (result) => {
          if (result?.emails?.length > 0) {
            // Do what you will with emails here
            setEmailData(result.emails);
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





  return (
    <div className="p-3 pr-5">
      <NavBar />
      <Dropdown />
      {emailData ? emailData.map((email, index) => {
        console.log(`key: ${index} \n pair: ${email}`);
        <div>
          <EmailCard props={email} />
        </div>
      })
        : <h1>Loading Emails...</h1>
      }

      {!hasEmailData ?
        <div>
          <h1>You don't have any recent emails right now...</h1>
        </div>
        :
        null
      }

    </div>
  );
}

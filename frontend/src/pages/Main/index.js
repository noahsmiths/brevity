import Dropdown from "../../components/Dropdown";
import EmailCard from "../../components/EmailCard";
import NavBar from "../../components/MainNav";
import { useEffect, useState } from "react";


export default function Main() {

  const [emailData, setEmailData] = useState([]);
  const [hasEmailData, setHasEmailData] = useState(true);

  useEffect(() => {
    function getEmailData() {
      chrome.storage.local.get(['emails'], (result) => {
        if (result?.emails?.length > 0) {
          // Do what you will with emails here
          setEmailData(result);
        } else {
          setHasEmailData(false);
        }
      });
    }

    getEmailData();
  }, [])





  return (
    <div className="p-3 pr-5">
      <NavBar />
      <Dropdown />
      {emailData ? emailData.map((email, index) => {
        console.log(`key: ${index} \n pair: ${email}`);
        let sentimentValue =
          <div>
            <EmailCard props={email} />
          </div>
      })
        : <h1>Loading Emails...</h1>
      }

      {!hasEmailData ?
        <div>
          <h1>You don't have any recent emails right now...ß</h1>
        </div>
        :
        null
      }

    </div>
  );
}

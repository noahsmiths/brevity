import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function EmailCard(props) {
  const subject = props.subject;
  const summary = props.summary;
  const urgency = props.urgency
  const timestamp = props.timestamp;
  const sender = props.sender;
  const url = props.url;

  const [color, setColor] = useState("");

  const calculateUrgency = (urgency) => {
    switch (urgency) {
      case 1:
        setColor("bg-neutral-50");
        break;
      case 2:
        setColor("bg-yellow-500");
        break;
      case 3:
        setColor("bg-amber-500");
        break;
      case 4:
        setColor("bg-orange-500");
        break;
      case 5:
        setColor("bg-red-500");
        break;
      default:
        setColor("bg-neutral-50");
        break;
    }

  }



  return (
    <a href={url}>
      <div className="card w-full mt-1 bg-base-ß100 border-0.2 border-softgray shadow-xl p-3 flex flex-row scale-[.975] hover:scale-100 hover:underline hover:cursor-pointer">
        <div class="w-11 pr-2">
          <div class={`rounded-full mt-6 h-6 w-6 ml-1 ${calculateUrgency(urgency)}`}></div>
        </div>
        <div class="flex flex-col">
          <p class="text-lg font-bold">{subject}</p>
          <p class="text-sm w-full text-gray-500">{summary}</p>
        </div>
        <div className="">
          <div className="tooltip tooltip-left h-[10]" data-tip={timestamp}>
            <FontAwesomeIcon className="mr-1 mx-auto" icon={faCalendar} />
          </div>
        </div>
      </div>
    </a>

  );
}

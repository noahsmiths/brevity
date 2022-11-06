import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";

export default function EmailCard({ props }) {
  console.log(props);

  const calculateUrgency = (urgency) => {
    switch (urgency) {
      case 1:
        return "bg-base-300";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-amber-500";
      case 4:
        return "bg-orange-500";
      case 5:
        return "bg-red-500";
      default:
        return "bg-base-300";
    }
  };

  return (

    <div onClick={() => window.open(props.url)} className="card w-full mt-1 bg-base-ß100 border-0.2 border-softgray shadow-xl p-3 flex flex-row scale-[.975] hover:scale-100 hover:underline hover:cursor-pointer">
      <div class="w-11 pr-2 align-top">
        <div
          class={`rounded-full h-6 w-6 ml-1 ${calculateUrgency(
            props.urgency
          )}`}
        ></div>
      </div>
      <div class="flex-1 flex-col">
        <p class="text-sm font-bold">{props.subject}</p>
        <p class="text-sm w-full text-gray-500">{props.summary}</p>
      </div>
      <div className="flex-none">
        <div
          className="tooltip tooltip-left h-[10]"
          data-tip={format(new Date(+props.timestamp), 'yyyy-MM-dd')}
        >
          <FontAwesomeIcon className="mr-1 mx-auto" icon={faCalendar} />
        </div>
      </div>
    </div >
  );
}

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function EmailCard(props) {
  const subject = props.subject;
  const summary = props.summary;
  const score = props.score;
  const normMagnitude = props.normMagnitude;

  var color;
  if (score > 0) {
    color = "#4BB543";
  } else if (score === 0) {
    color = "#B8B8B8";
  } else {
    color = "#FF9494";
  }

  return (
    <div className="card w-full mt-1 bg-base-100 border-0.2 border-softgray shadow-xl p-3 flex flex-row scale-[.975] hover:scale-100 hover:underline hover:cursor-pointer">
      <div class="w-11 pr-2">
        <div class="rounded-full mt-6 h-6 w-6 ml-1 bg-success"></div>
      </div>
      <div class="flex flex-col">
        <p class="text-lg font-bold">Example subject</p>
        <p class="text-sm w-full">fdkjkjb s sdjk snd ksjbd skjk sdn sldkns lkdns lkdnsl dns dlksn dlsknd jdbsk jb </p>
      </div>
      <div className="">
        <div className="tooltip tooltip-left h-[10]" data-tip="January 24th, 2022">
          <FontAwesomeIcon className="mr-1 mx-auto" icon={faCalendar} />
        </div>
      </div>


    </div>
  );
}

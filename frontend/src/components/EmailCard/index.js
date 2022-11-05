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
    <div className="card w-full mt-2 bg-base-100 shadow-md p-3 flex flex-row hover:underline hover:cursor-pointer border-softgray border-0.2">
      
      <div class="flex-none w-11 pr-2">
        <div class="rounded-full mt-3 h-6 w-6 ml-1 bg-success"></div>
      </div>
      
      <div class="flex-1 w-full">
        <p class="text-lg text-black">Example subject</p>
        <p class="text-sm text-gray-700">Example summary</p>
      </div>

      <div class="flex-initial pt-1">
      <p class="text-sm text-gray-700">Tuesday, Sept. 4</p>
      </div>
      
    </div>
  );
}

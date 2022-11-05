import React, { useEffect, useState } from "react";

export default function EmailCard(props) {
  const subject = props.subject;
  const summary = props.summary;
  const score = props.score;
  const normMagnitude = props.normMangitude;

  var color;
  if (score > 0) {
    color = "#4BB543";
  } else if (score === 0) {
    color = "#B8B8B8";
  } else {
    color = "#FF9494";
  }

  return (
    <div className="card w-full mt-2 bg-base-300 scale-95 shadow-xl p-3 flex flex-row hover:underline hover:cursor-pointer hover:scale-100">
      <div class="w-11 pr-2">
        <div class="rounded-full mt-3 h-6 w-6 ml-1 bg-success"></div>
      </div>
      <div class="flex flex-col">
        <p class="text-lg font-bold">Example subject</p>
        <p class="text-sm ">Example summary</p>
      </div>
      <p class="ml-32">Tuesday, July 25th</p>

    </div>
  );
}

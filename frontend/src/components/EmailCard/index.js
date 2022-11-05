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
    <div className="card w-full mt-2 bg-base-300 scale-95 shadow-xl p-3 flex-row hover:underline hover:cursor-pointer hover:scale-100">
      <div class="w-11 pr-2">
        <div class="rounded-full h-9 w-9" style={{ backgroundColor: color }}></div>
      </div>
      <div class="bg-flex">
        <p class="text-lg text-black">Example subject</p>
        <p class="text-sm text-gray-700">Example summary</p>
        <div>
        </div>
      </div>
    </div>
  );
}

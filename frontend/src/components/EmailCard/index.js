import React, { useEffect, useState } from "react";

export default function EmailCard(props) {
  const { subject = "Email Subject" } = props;
  const { summary = "Email Summary" } = props;
  const { score = 0 } = props;
  const { normMagnitude = 1.00 } = props;
  const { link = "" } = props;

  var color;
  if (score > 0) {
    color = "#4BB543";
  } else if (score === 0) {
    color = "#B8B8B8";
  } else {
    color = "#FF9494";
  }

  return (
    <a href={link} target="_blank">
      <div className="card w-full mt-2 bg-base-100 scale-95 shadow-md p-3 flex-row hover:underline hover:cursor-pointer border-0.2 border-softgray">
        <div class="w-11 pr-2 flex items-center justify-center">
          <div class="rounded-full h-9 w-9" style={{ backgroundColor: color }}></div>
        </div>
        <div class="bg-flex">
          <p class="text-lg text-black">{subject}</p>
          <p class="text-sm text-gray-700">{summary}</p>
          <div>
          </div>
        </div>
      </div>
    </a>
  );
}

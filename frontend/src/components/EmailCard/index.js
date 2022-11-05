import React, { useState, useEffect } from "react";

export default function EmailCard(props) {
  const subject = props.subject;
  const summary = props.summary;
  const score = props.score;
  const normMagnitude = props.normMangitude;

  var color;
  if (score > 0) {
    color = "#4BB543";
  } else if (score == 0) {
    color = "#B8B8B8";
  } else {
    color = "#FF9494";
  }

  return (
    <div className="card w-96 bg-base-100 bg-white p-3 flex-row hover:underline hover:cursor-pointer">
      <div class="w-11 pr-2">
        <div class="rounded-full h-9 w-9" style={{ backgroundColor: color}}>&nbsp;</div>
      </div>
      <div class="bg-flex">
        <p class="text-lg text-black">{props.subject}</p>
        <p class="text-sm text-gray-700">{props.summary}</p>
        <div>
        </div>
      </div>
    </div>
  );
}


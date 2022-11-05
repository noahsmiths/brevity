import React, { useState, useEffect } from "react";

export default function LoginCard(props) {
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
    <div className="card w-96 bg-base-100 p-3 flex-row hover:underline hover:cursor-pointer">
      <div className="w-11 pr-2">
        <div
          className="rounded-full h-9 w-9"
          style={{ backgroundColor: color }}
        >
          &nbsp;
        </div>
      </div>
      <div className="bg-flex">
        <p className="text-lg text-black">Example subject</p>
        <p className="text-sm text-gray-700">Example summary</p>
        <div></div>
      </div>
    </div>
  );
}

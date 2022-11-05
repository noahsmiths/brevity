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
    <div>
      <div className="card w-96 bg-base-100 p-3 flex-row hover:underline hover:cursor-pointer">
        <div className="w-11 pr-2">
          <div>
            <link
              type="image/png"
              sizes="32x32"
              rel="icon"
              href=".../icons8-gmail-logo-16.png"
            ></link>
          </div>
        </div>
        <div className="bg-flex">
          <p className="text-lg text-black">Gmail</p>
          <p className="text-sm text-gray-700">Login for Gmail</p>
        </div>
        <div>
          <button>hey</button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 p-3 flex-row hover:underline hover:cursor-pointer">
        <div className="w-11 pr-2">
          <div>
            <link
              type="image/png"
              sizes="32x32"
              rel="icon"
              href=".../icons8-gmail-logo-16.png"
            ></link>
          </div>
        </div>
        <div className="bg-flex">
          <p className="text-lg text-black">Outlook</p>
          <p className="text-sm text-gray-700">Login for Outlook</p>
        </div>
        <div>
          <button>hey</button>
        </div>
      </div>
    </div>
  );
}

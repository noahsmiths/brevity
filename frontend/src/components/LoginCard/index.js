import React, { useEffect, useState } from "react";

export default function EmailCard(props) {
  const { serviceName = "Email Service" } = props;
  const { serviceDesc = "Abbreviate your service description." } = props;
  const { isConnected = false } = props;

  var color;
  if (isConnected == true) {
    // Connected -> Red
    color = "#FF9494";
  } else {
    // Not Connected -> Blue
    color = "#24A0ED";
  }

  return (
      <div className="card w-full mt-1 bg-base-100 scale-95 shadow-md p-3 flex-row hover:cursor-pointer border-0.2 border-softgray">
        <div class="w-11 pr-2 flex items-center justify-center">
          <div class="rounded-full h-9 w-9" style={{ backgroundColor: color }}></div>
        </div>
        <div class="w-full">
          <p class="text-lg text-black">{serviceName}</p>
          <p class="text-sm text-gray-700">{serviceDesc}</p>
          <div>
          </div>
        </div>
        <div class="bg-flex flex items-center justify-center">
          <button class="p-2 rounded-full" style={{backgroundColor: color}}>
            {(isConnected) ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>
  );
}

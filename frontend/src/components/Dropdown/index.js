import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-bottom border-black border-4">
      <label tabIndex={0} className="btn btn-ghost rounded-btn">
        <FontAwesomeIcon icon={faAngleDown} className="mr-1" />
        Sort By
      </label>
      <div>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <div>Urgency</div>
          </li>
          <li>
            <div>Recency</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

// p-2 shadow bg-base-100 rounded-box w-52 mt-4

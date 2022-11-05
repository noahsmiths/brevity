import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react";

const Dropdown = () => {
  return (
      <div className="dropdown dropdown-end border-black border-4">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">
          <FontAwesomeIcon icon={faAngleDown} className="mr-1" />
          Sort By
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <div>Item 1</div>
          </li>
          <li>
            <div>Item 2</div>
          </li>
        </ul>
      </div>

  );
};

export default Dropdown;

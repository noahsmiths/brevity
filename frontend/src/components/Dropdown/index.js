import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown dropdown-bottom border-black border-4">
      <label tabIndex={0} className="btn btn-ghost rounded-btn">
        <FontAwesomeIcon icon={faAngleDown} className="mr-1" />
        Sort By: {props.sortMethod.current.charAt(0).toUpperCase() + props.sortMethod.current.slice(1)}
      </label>
      <div>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <div onClick={() => { props.sortMethod.current = 'recency'; document.activeElement.blur(); props.sort()}}>Recency</div>
          </li>
          <li>
            <div onClick={() => { props.sortMethod.current = 'urgency'; document.activeElement.blur(); props.sort()}}>Urgency</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

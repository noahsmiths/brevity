import React, { useState, useEffect } from "react";

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost rounded-btn">
        <i class="fa-sharp fa-solid fa-angle-down"></i>
        Email Order
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Brevity</a>
        <img
          src="images/gearicon"
          alt="Brevity Icon"
          width="22"
          height="33"
        />{" "}
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
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
          <a className="btn btn-ghost rounded-btn">Gear Icon</a>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

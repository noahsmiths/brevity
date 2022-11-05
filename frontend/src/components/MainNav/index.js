import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-300 ">
      <div className="flex-1 px-2 lg:flex-none">
        <a href="/" className="text-lg font-bold">Brevity</a>
        <img src="images/logo" alt="Brevity Icon" width="22" height="33" />{" "}
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="">
            <Dropdown />
            <button
              className="btn btn-base-200 btn-sm btn-primary max-w-sm"
              onClick={() => navigate("/settings")}>
              <FontAwesomeIcon icon={faGear} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

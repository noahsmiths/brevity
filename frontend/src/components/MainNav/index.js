import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/Brevity.svg';

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-white p-0">
      <div className="flex-1 lg:flex-none">
        <img src={logo} alt="Brevity Icon" class="max-h-7" />{" "}
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="">
            <button
              className="btn btn-base-300 btn-sm btn-ghost max-w-sm"
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

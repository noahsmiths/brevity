import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Brevity.svg';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex navbar bg-white p-0">
      <div className="flex-none w-[50px]">
        &nbsp;
      </div>
      <div className="flex-1 flex justify-center">
        <img src={logo} alt="Brevity Icon" className="max-h-7" />{" "}
      </div>
      <div className="flex justify-end w-[50px] px-2">
        <div className="flex items-stretch">
          <div className="">
            <div className="tooltip tooltip-left" data-tip="Settings">
              <div
                className="btn p-1 btn-base-300  btn-sm btn-ghost max-w-sm"
                onClick={() => navigate("/settings")}>
                <FontAwesomeIcon className="text-lg" icon={faGear} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

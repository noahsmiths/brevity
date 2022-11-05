import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Brevity</a>
        <img src="images/logo" alt="Brevity Icon" width="22" height="33" />{" "}
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <Dropdown />
          <a href="https://www.w3schools.com">
            <i class="fa-solid fa-gear"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import { useHistory } from "react-router-dom";

export default function SettingsNav() {
  // const feather = require('feather-icons')
  const history = useHistory();

  return (
    <main>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <div className="btn btn-ghost">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <button
            onClick={() => history.push("/")}
            className="btn btn-ghost normal-case text-xl"
          >
            Settings
          </button>
        </div>
      </div>
    </main>
  );
}

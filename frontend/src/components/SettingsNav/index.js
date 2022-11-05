import { useNavigate } from "react-router-dom";

export default function SettingsNav() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <div
            onClick={() => navigate("/")}
            className="btn btn-ghost normal-case text-xl"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <button className="btn btn-ghost normal-case text-xl">
            Settings
          </button>
        </div>
      </div>
    </main>
  );
}

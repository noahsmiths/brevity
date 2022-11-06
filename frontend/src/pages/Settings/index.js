import LoginCard from "../../components/LoginCard";
import SettingsNav from "../../components/SettingsNav";

export default function Settings() {
  return (
    <div className="p-3 pr-5">
      <SettingsNav />
      <LoginCard />
    </div>
  );
}

import Dropdown from "../../components/Dropdown";
import EmailCard from "../../components/EmailCard";
import NavBar from "../../components/MainNav";


export default function Main() {
  return (
    <div className="p-3 pr-5">
      <NavBar />
      <Dropdown />
      <EmailCard />
      <EmailCard />
      <EmailCard />
    </div>
  );
}

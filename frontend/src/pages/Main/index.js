import EmailCard from "../../components/EmailCard";
import NavBar from "../../components/MainNav";
import Dropdown from "../../components/Dropdown";


export default function Main() {
  return (
    <div className="">
      <NavBar />
      <Dropdown />
      <EmailCard />
      <EmailCard />
      <EmailCard />
    </div>
  );
}

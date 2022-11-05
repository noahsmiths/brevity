import EmailCard from "../../components/EmailCard";
import NavBar from "../../components/MainNav";

export default function Main() {
  return (
    <div>
      <NavBar />
      <EmailCard props={
        props.subject: "test",
        } />
    </div>
  );
}

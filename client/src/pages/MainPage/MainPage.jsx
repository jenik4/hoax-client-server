import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to={"/createhoax"}>
        <p>Create hoax</p>
      </Link>
      <Link to={"/hoaxs"}>
        <p>hoaxs</p>
      </Link>
    </>
  );
}

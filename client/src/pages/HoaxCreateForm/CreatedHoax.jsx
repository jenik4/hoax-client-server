import { Link, useParams } from "react-router-dom";

export default function CreatedHoax() {
  const { id } = useParams();  

  return (
    <>
      <p>Created hoax: { id }</p>
      <Link to={`/hoax/${id}`}>
        <p>View hoax</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}

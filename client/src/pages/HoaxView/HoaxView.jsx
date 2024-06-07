import { Link, useParams, useNavigate } from "react-router-dom";
import { getHoax, deleteHoax } from "../../models/Hoax";
import { useState, useEffect } from "react";

export default function HoaxView() {
  const { id } = useParams();
  const [hoax, setHoax] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getHoax(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setHoax(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (hoax.title === formData) {
      const data = await deleteHoax(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Hoax not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Hoax is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Hoax view</h1>
      <p>{id}</p>
      <p>{hoax.title}</p>
      <p>{hoax.text}</p>
      <p>{hoax.date}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}

import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateHoax, getHoax } from "../../models/Hoax";

export default function HoaxUpdateForm() {
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
  };

  const postForm = async () => {
    const hoax = await updateHoax(id, formData);
    if (hoax.status === 200) {
      navigate(`/hoax/${id}`);
    } else {
      setInfo(hoax.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Hoax not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Hoax is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Hoax update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={hoax.title}
          name="title"
          required
          placeholder="Enter Hoax name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={hoax.text}
          name="text"
          required
          placeholder="Enter text"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="date"
          defaultValue={hoax.date}
          name="date"
          required
          placeholder="Enter publish date"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update Hoax</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}

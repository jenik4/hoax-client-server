import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createHoax } from "../../models/Hoax";

export default function HoaxCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const hoax = await createHoax(formData);
    if (hoax.status === 201) {
      redirectToSuccessPage(hoax.payload._id);
    } else {
      setInfo(hoax.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdhoax/${id}`)
  }

  return (
    <>
      <h1>Hoax create form</h1>
      <form>
        <input type="text" name="title" required placeholder="Enter hoax title" onChange={e => handleChange(e)}/>
        <input type="text" name="text" required placeholder="Enter text" onChange={e => handleChange(e)}/>
        <input type="date" name="date" required placeholder="Enter date" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create Hoax
        </button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}

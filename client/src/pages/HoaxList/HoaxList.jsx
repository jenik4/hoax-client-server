import { Link } from "react-router-dom";
import HoaxLink from "./HoaxLink";
import { useState, useEffect } from "react";
import { getHoaxs } from "../../models/Hoax";

export default function HoaxList() {
  const [hoaxs, setHoaxs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getHoaxs();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setHoaxs(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Hoaxs not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Hoaxs are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Hoax list</h1>
      {
        hoaxs.map((hoax, index) => (
          <HoaxLink key={index} {...hoax} />
        ))
      }
     
    </>
  );
}

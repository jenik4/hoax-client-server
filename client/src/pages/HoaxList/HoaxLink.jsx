import { Link } from "react-router-dom"

export default function HoaxLink(props) {
   
    return (
        <>
            <Link to={`/hoax/${props._id}`}>
                <p>{props.title}</p>
            </Link>
        </>
    )
}
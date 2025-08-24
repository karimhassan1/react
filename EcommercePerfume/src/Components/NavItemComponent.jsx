import { Link } from "react-router-dom";

function NavItemComponent(props) {
    return (
        <>
            <Link to={props.content.link} className="text-decoration-none text-black ms-5">{props.content.content}</Link>
        </>
    )
}

export default NavItemComponent;


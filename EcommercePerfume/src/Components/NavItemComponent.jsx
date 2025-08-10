import { Link } from "react-router-dom";

function NavItemComponent(props) {
    return (
        <>
            <Link to={props.content.link} className="text-decoration-none text-white">{props.content.content}</Link>
        </>
    )
}

export default NavItemComponent;


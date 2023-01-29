import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
			<NavLink to={'/'}>Home</NavLink>
			<NavLink to={'/categories'}>Categories</NavLink>
			<NavLink to={'/profile'}>Profile</NavLink>
        </div>
    );
}

export default Navbar;

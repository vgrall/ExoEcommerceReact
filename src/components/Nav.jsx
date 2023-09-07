import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/produits">Produits</NavLink></li>
        </ul>
    </nav>
    )
}

export default Nav
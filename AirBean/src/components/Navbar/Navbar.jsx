import { NavLink } from 'react-router-dom';
import Routing from '../Routing/Routing';
import './Navbar.scss';

export function Navbar () {
    return (
        
        <nav className="navbar">
            <Routing/>
            <div className="links">
                <NavLink to="/" exact onClick={(e) => e.preventDefault()}>Home</NavLink>
                <NavLink to="/about" onClick={(e) => e.preventDefault()}>About</NavLink>
                {/* <NavLink to="/status">Status</NavLink> */}
            </div>
        </nav>
    )
}
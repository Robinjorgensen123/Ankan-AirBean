import { Navlink } from 'react-router-dom';

export function Navbar () {
    return (
        <nav className="navbar">
            <div className="links">
                <Navlink to="/">Home</Navlink>
                <Navlink to="/about">About</Navlink>
                <Navlink to="/status">Status</Navlink>
            </div>
        </nav>
    )
}
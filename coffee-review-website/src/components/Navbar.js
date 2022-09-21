import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHome, faPerson } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-image">
                        {/*This will be replaced with a logo later but placeholder text and icon for now*/}
                        COFFEE RECIPES
                    </Link>
                    <Link to="/" className="navbar-image">
                        Home <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    </Link>
                    <Link to="/recipes" className="navbar-image">
                        Recipes <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    </Link>
                    <Link to="/profile" className="navbar-image">
                        Profile <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
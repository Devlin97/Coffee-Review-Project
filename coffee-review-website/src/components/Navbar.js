import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-image">
                        {/*This will be replaced with a logo later but placeholder text and icon for now*/}
                        COFFEE RECIPES <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
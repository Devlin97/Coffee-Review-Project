import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHome, faPerson } from "@fortawesome/free-solid-svg-icons"
import logo from '../images/logo.png'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul>
                        <Link to="/" className="navbar-image">
                            {/*This will be replaced with a logo later but placeholder text and icon for now*/}
                            <img src={logo} alt='not found' />
                        </Link>
                        <li>
                            <Link to="/" className="navbar-item">
                                Home <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipes" className="navbar-item">
                                Recipes <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="navbar-item">
                                Profile <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
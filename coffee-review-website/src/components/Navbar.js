import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHome, faPerson, faSignIn } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul>
                        <li>
                            <Link to="/" className="navbar-item">
                                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipes" className="navbar-item">
                                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="navbar-item">
                                <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signIn" className="navbar-item navbar-item-right">
                                <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                            </Link>
                        </li>
                        {/* Once user authentication is included make it so IF user is signed in, the signIn icon will change to signOut */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHome, faPerson, faSignIn } from "@fortawesome/free-solid-svg-icons"
import { Typography } from '@mui/material';
import School from '@mui/icons-material/School'
import { useState } from 'react';

function Navbar() {
    const [active, setActive] = useState(false);


    return (
        <>
            <nav className='navbar'>
                <a href='#' className='toggle-button' onClick={() => setActive(!active)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <div className={`navbar-container ${active ? 'active' : ''}`}>
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
                            <Link to="/About" className="navbar-item">
                                <School style={{ height: '18px', width: '18px' }}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signIn" className={`navbar-item ${!active ? 'navbar-item-right' : ''}`}>
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
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-image">
                        COFE <i class="fa fa-balance-scale" aria-hidden="true"></i>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
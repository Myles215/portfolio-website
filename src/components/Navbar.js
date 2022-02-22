import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/#about" className='navbar-logo'>
                        Myles Watkinson
                    </Link>
                    <div className='menu-icon' onClick = {handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/#projects' className='nav-links' onClick={closeMobileMenu}> 
                                Projects
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/#experience' className='nav-links' onClick={closeMobileMenu}> 
                                Experience
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/#contact' className='nav-links' onClick={closeMobileMenu}> 
                                Contact
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>

    );
}

export default Navbar;

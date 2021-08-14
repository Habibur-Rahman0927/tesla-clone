import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className="header">
            <div className="header_logo">
                <Link to='/'><img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" className="header_logoImg" alt="Logo" /></Link>
            </div>
            <div className="header_links">
                <Link to='/'>Model S</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model X</Link>
                <Link to='/'>Model Y</Link>
                <Link to='/'>Solar Roof</Link>
                <Link to='/'>Solar Panels</Link>
            </div>

            <div className="header_right">
                <Link to='/' className={isMenuOpen && 'header_links_hidden'}>Shop</Link>
                <Link to='/login' className={isMenuOpen && 'header_links_hidden'}>Tesla Account</Link>
                <div className="header_menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ? <CloseIcon /> : <MenuIcon />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
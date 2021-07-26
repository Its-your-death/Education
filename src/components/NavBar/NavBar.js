import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
                <NavLink activeClassName={s.activeLink} to="/dialogs">Message</NavLink>
                <a>News</a>
                <a>Music</a>
                <a>Settings</a>
            </ul>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-logo active' : 'nav-logo'}>
                <img src="/logo.png" alt="logo" />
            </NavLink>
            <div className="nav-menu">
                <NavLink to="/today" className={({ isActive }) => isActive ? 'active' : ''}>today</NavLink>
                <NavLink to="/feed" className={({ isActive }) => isActive ? 'active' : ''}>feed</NavLink>
                <NavLink to="/challenges" className={({ isActive }) => isActive ? 'active' : ''}>challenges</NavLink>
                <NavLink to="/calendar" className={({ isActive }) => isActive ? 'active' : ''}>calendar</NavLink>
                <NavLink to="/friends" className={({ isActive }) => isActive ? 'active' : ''}>friends</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
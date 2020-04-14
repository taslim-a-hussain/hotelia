import React from 'react';
import Social from '../Social/Social';
import Navigation from '../Navigation/Navigation';
import './sass/Navbar.scss';

export default () => {
    const date = new Date();
    return (
    <div className="navbar">
        <div className="sidebar">
            <div className="menu-icon">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            <Social />
            <div className="year">
                {date.getFullYear()}
            </div>
        </div>
        <Navigation year={date.getFullYear()}/>
    </div>
    );
};
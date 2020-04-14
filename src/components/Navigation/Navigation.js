import React from 'react';
import {Link} from 'react-router-dom';
import './sass/Navigation.scss';

export default () => (
    <nav className="navigation">
        <div className="navigation-header">
            <h1 className="navigation-heading">Hotelia</h1>
            <form className="navigation-search">
                <input type="text" className="navigation-search-input" placeholder="Search..." />
                <button><i className="fas fa-search"></i></button>
            </form>
        </div>

        <ul className="navigation-list">
            <li className="navigation-item">
                <Link className="navigation-link" to="/">Home</Link>
            </li>
            <li className="navigation-item">
                <Link className="navigation-link" to="/about">About</Link>
            </li>
            <li className="navigation-item">
                <Link className="navigation-link" to="/rooms">Rooms</Link>
            </li>
            <li className="navigation-item">
                <Link className="navigation-link" to="events">Events</Link>
            </li>
            <li className="navigation-item">
                <Link className="navigation-link" to="/customers">Customers</Link>
            </li>
            <li className="navigation-item">
                <Link className="navigation-link" to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);
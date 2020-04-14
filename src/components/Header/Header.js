import React from 'react';
import './Header.scss';

export default () => (
    <header>
        <div className="brand">
            <div className="logo">Hotelia</div>
        </div>
        <div className="banner">
            <h1>Welcome to Hotelia</h1>
            <p>Make your life luxurious</p>
            <button>Check It Out</button>
        </div>
    </header>
);
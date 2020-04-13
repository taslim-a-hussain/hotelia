import React from 'react';
import Social from '../Social/Social';

export default () => (
    <div className="navbar">
        <div className="sidebar">
            <div className="menu-icon">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        </div>
        <Social />
    </div>
);
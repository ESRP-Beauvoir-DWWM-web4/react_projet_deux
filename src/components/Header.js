import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Mon header</h1>
            <ul>
                <li><Link to="/users/list">Liste des utilisateurs</Link></li>
                <li><Link to="/posts/list">Liste des articles</Link></li>
            </ul>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
    return (
        <nav>
            <Link to='/'>Home   |</Link>
            <Link to='/candies'>|   Goodie Bag</Link>
        </nav>
    )
}
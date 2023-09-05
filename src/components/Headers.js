import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='header'>
                <h1>FRIENDS DATABASE</h1>
                <Link to="/login">LOGIN</Link>
                <Link to="/friends">FRIENDLIST</Link>
                <Link to="/friends/add">ADDFRIEND</Link>
                <Link to="/logout">LOGOUT</Link>
            </header>

        </div>
    )
}
export default Header
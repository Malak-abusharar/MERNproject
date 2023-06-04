
import React from 'react';
import logo from './logo.jpg'; 
import './Style.css';

const Header = () => {
    return (
        <header>
            <img style={{ height: 70, width: 70 }} src={logo} alt="logo" /> 
            <h1>To do List</h1> 
        </header>
    );
};

export default Header;

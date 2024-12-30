import React from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentView }) => {
    return (
        <nav>
            <a href="#home" onClick={() => setCurrentView('home')}>Home</a>
            <a href="#about" onClick={() => setCurrentView('about')}>About</a>
            <a href="#flashcards-container" onClick={() => setCurrentView('flashcards')}>Flashcards</a>
        </nav>
    );
};

export default Navbar;
import React from 'react';

const Navbar = ({ setCurrentSection}) => {
    return (
        <nav>
            <a href="#home" onClick={() => setCurrentSection('home')}>Home</a>
            <a href="#about" onClick={() => setCurrentSection('about')}>About</a>
            <a href="#flashcard-container" onClick={() => setCurrentSection('flashcards')}>Flashcards</a>
        </nav>
    );
};

export default Navbar;
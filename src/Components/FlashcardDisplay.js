import React, { useState } from 'react';
import './FlashcardDisplay.css';

const FlashcardDisplay = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const nextFlashcard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setFlipped(false);
    };

    const prevFlashcard = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1);

        setFlipped(false);
    };

    const flipCard = () => {
        setFlipped((prevFlipped) => !prevFlipped);
    };

    if (flashcards.length === 0) {
        return <p>No Flashcards Available</p>;
    }

    const currentCard = flashcards[currentIndex];

    return (
        <div className="flashcards">
            <h2>Flashcard {currentIndex + 1} of {flashcards.length}</h2>
            <div className={`flashcard-output ${flipped ? 'flipped' : ''}`}>
                <h3>{flipped ? currentCard.answer : currentCard.question}</h3>
            </div>

            <div className="flashcard-buttons">
                <button onClick={prevFlashcard}>Previous</button>
                <button onClick={flipCard}>{flipped ? 'Show Question' : 'Show Answer'}</button>
                <button onClick={nextFlashcard}>Next</button>
            </div>
        </div>
    );
};

export default FlashcardDisplay; 
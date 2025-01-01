import React, { useState } from 'react';
import './FlashcardDisplay.css';

const FlashcardDisplay = ({ flashcards, setFlashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false); /* FLIP CARD */
    const [editing, setEditing] = useState(false); /* STATE FOR EDITING CARD*/
    const [updatedQuestion, setUpdatedQuestion] = useState(''); /* STATE TO UPDATE QUESTION */
    const [updatedAnswer, setUpdatedAnswer] = useState(''); /* STATE TO UPDATE ANSWER */

    const nextFlashcard = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setFlipped(false);
        }
    };

    const prevFlashcard = () => {
        if (currentIndex > 0) {
           setCurrentIndex((prevIndex) => prevIndex - 1);
            setFlipped(false); 
        }
    };

    const flipCard = () => {
        setFlipped((prevFlipped) => !prevFlipped);
    };

    const handleEdit = () => { /* EDIT CARD */
        setEditing(true);
        setUpdatedQuestion(flashcards[currentIndex].question);
        setUpdatedAnswer(flashcards[currentIndex].answer);
    };

    const handleSaveEdit = () => { /* SAVE EDIT */
        const updatedFlashcards = flashcards.map((flashcard, index) =>
            index === currentIndex ? {...flashcard, question: updatedQuestion, answer: updatedAnswer}
            : flashcard);
        setFlashcards(updatedFlashcards);
        setEditing(false);
    };

    const handleDelete = () => { /*DELETE CARD */
        const filteredFlashcards = flashcards.filter((_, index) => index !==currentIndex);
        setFlashcards(filteredFlashcards);
        setCurrentIndex((prevIndex) => Math.min(prevIndex, filteredFlashcards.length - 1));
    };
    
    if (flashcards.length === 0) {
        return <p>No Flashcards Available</p>;
    }

    const currentCard = flashcards[currentIndex];

    return (
        <div className="flashcards">
            <h2>Flashcard {currentIndex + 1} of {flashcards.length}</h2>

            <div className="flashcard-buttons">
                <button onClick={prevFlashcard} disabled={currentIndex === 0}>Previous</button> {/*DISABLED WHEN AT FIRST CARD*/}
                <button onClick={flipCard} disabled={editing}>{flipped ? 'Show Question' : 'Show Answer'}</button> {/*DISABLED WHEN CARD BEING EDITED*/}
                <button onClick={nextFlashcard} disabled={currentIndex === flashcards.length - 1}>Next</button> {/*DISABLED WHEN AT LAST CARD*/}
            </div>

        {editing ? (
            <div className="flashcard-edit">
                <input type="text" value={updatedQuestion}
                onChange={(e) => setUpdatedQuestion(e.target.value)} 
                />
                <input type="text" value={updatedAnswer}
                onChange={(e) => setUpdatedAnswer(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button> {/* SAVES EDITED CARD */}
                <button onClick={() => setEditing(false)}>Cancel</button> {/* CANCEL EDIT OF CARD */}
            </div> 
        ) : ( 
            <div className={`flashcard-output ${flipped ? 'flipped' : ''}`}>
                <h3>{flipped ? currentCard.answer : currentCard.question}</h3>
            </div>
        )}

<div className="flashcard-buttons edit-delete-buttons">
                <button onClick={handleEdit}>Edit</button> {/* MOVE ABOVE FLASHCARD? */}
                <button onClick={handleDelete}>Delete</button> {/* MOVE ABOVE FLASHCARD? */}
            </div>
        </div>
    );
};

export default FlashcardDisplay; 
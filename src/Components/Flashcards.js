import React, { useState } from 'react';
import "./Flashcards.css";

function Flashcards() {
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    //FORM SUBMISSION TO ADD A NEW FLASHCARD
    const handleSubmit = (e) => {
        e.preventDefault();

        if (question && answer) {
            const newFlashcard = {
                question,
                answer,
            };

            setFlashcards([...flashcards, newFlashcard]);

            setQuestion("");
            setAnswer("");
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < flashcards.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const handleFlip = () => {
        const flashcard = document.getElementById('flashcard');
        flashcard.classList.toggle('flipped');
    };

    return (
        <div id="flashcards-container">
            {flashcards.length > 0 && (
                <div id="flashcards">
                    <div id="flashcard" className="flashcard" style={{transform: "rotate(0deg)"}}>
                
                    <div className="front">{flashcards[currentIndex].question}</div>
                    <div className="back">{flashcards[currentIndex].answer}</div>
                </div>
            </div>    
            )}
            <div className="controls">
                <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleFlip}>Flip</button>
                <button onClick={handleNext} disabled={currentIndex === flashcards.length -1}>Next</button>
            </div>

            {/* NEW FLASHCARDS */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} 
                placeholder="Enter question" required />
                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} 
                placeholder="Enter answer" required />
                <button type="submit">Add Flashcard</button>
            </form>
        </div>
    );
}

export default Flashcards;
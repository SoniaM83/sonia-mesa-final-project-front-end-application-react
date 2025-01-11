import React, { useState } from 'react';
import './FlashcardInput.css';

const FlashcardInput = ({ addFlashcard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question && answer) {
            addFlashcard(question, answer); // CALL FLASHCARD PASSED FROM PARENT
            setQuestion('');
            setAnswer('');
        }
    };

    return (
        <div className="flashcard-input-container">
            <h2>Add a Flashcard</h2>
            <form onSubmit={handleSubmit}>
                <div id="input-fields">
                    <input
                        type="text"
                        id="new-question"
                        placeholder="Enter question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="new-answer"
                        placeholder="Enter answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </div>
                <div id="add-button-container">
                    <button type="submit" id="add-button">Add flashcard</button>
                </div>
            </form>
        </div>
    );
};

export default FlashcardInput;  
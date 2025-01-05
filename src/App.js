import React, { useState, useEffect } from 'react'; //REACT AND HOOKS
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import FlashcardInput from './Components/FlashcardInput';
import FlashcardDisplay from './Components/FlashcardDisplay';
import About from './Components/About';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [flashcards, setFlashcards] = useState([]); //STORES FLASHCARDS

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards)); //SAVE FLASHCARDS TO LOCAL STORAGE
  }, [flashcards]);

  const addFlashcard = (question, answer) => { //ADD NEW FLASHCARD
    setFlashcards([...flashcards, { question, answer }]);
  };

  return (
    <div className="App"> {/* MAIN CONTAINER FOR THE APP */}
      <header className="App-header"> {/* HEADER */}
        <Navbar setCurrentView={setCurrentView} /> {/* NAVBAR TO SWITCH VIEWS */}
        {currentView === 'home' && <Home />} {/* HOME PAGE */}
        {currentView === 'flashcards' && ( 
          <div className="flashcard-container"> {/* CONTAINER FOR CARD COMPONENTS */}
            <FlashcardInput addFlashcard={addFlashcard} /> {/* FORM TO ADD FLASHCARDS */}
            <FlashcardDisplay flashcards={flashcards} setFlashcards={setFlashcards} /> {/*DISPLAY AND MANAGE FLASHCARDS */}
          </div>
        )}
        {currentView === 'about' && <About />} {/* ABOUT PAGE */}
      </header>
    </div>
  );
}

export default App;
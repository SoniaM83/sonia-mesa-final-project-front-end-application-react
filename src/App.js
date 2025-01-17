import React, { useState, useEffect, useRef } from 'react'; //REACT AND HOOKS
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import FlashcardInput from './Components/FlashcardInput';
import FlashcardDisplay from './Components/FlashcardDisplay';
import About from './Components/About';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [flashcards, setFlashcards] = useState([]); //STORES FLASHCARDS
  const isInitialMount = useRef(true); //TRACKS INITIAL MOUNT

  useEffect(() => {
    const savedFlashcards = localStorage.getItem('flashcards'); //GET FLASHCARDS FROM LOCAL STORAGE
    if (savedFlashcards) {
      console.log('Loaded from localStorage', JSON.parse(savedFlashcards));
      setFlashcards(JSON.parse(savedFlashcards));
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; //SKIP SAVING ON FIRST MOUNT
    } else {
    localStorage.setItem('flashcards', JSON.stringify(flashcards)); //SAVE FLASHCARDS TO LOCAL STORAGE
    }
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
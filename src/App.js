import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import FlashcardInput from './Components/FlashcardInput';
import FlashcardDisplay from './Components/FlashcardDisplay';
import About from './Components/About';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (question, answer) => {
    setFlashcards([...flashcards, { question, answer }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar setCurrentView={setCurrentView} />
        {currentView === 'home' && <Home />}
        {currentView === 'flashcards' && ( 
          <>
            <FlashcardInput addFlashcard={addFlashcard} />
            <FlashcardDisplay flashcards={flashcards} />
          </>
        )}
        {currentView === 'about' && <About />}
      </header>
    </div>
  );
}

export default App;
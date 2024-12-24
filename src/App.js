import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Flashcards from './Components/Flashcards';
import About from './Components/About';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "flashcards":
        return <Flashcards />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='App'>
      <Navbar setCurrentSection={setCurrentSection} />
      {renderSection()}
    </div>
  );
};

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
Digital Flashcards
------------------

A React-based web application that allows users to create, view, edit, and delete custom flashcards for study purposes. The app features a user-friendly interface with navigation between Home, About, and Flashcards sections. Flashcards are stored in the browser's local storage for persistence.

Features
--------
-Create Flashcards: Add custom questions and answers.
-View Flashcards: Navigate through flashcards using Previous/Next buttons.
-Flip Flashcards: Reveal the answer by flipping the card.
-Edit Flashcards: Update existing flashcards.
-Delete Flashcards: Remove unwanted flashcards.
-Navigation Bar: Seamlessly switch between Home, About, and Flashcards pages.
-Local Storage: Saves flashcards between sessions.

Project Structure
-----------------
    ├── public/
    ├── src/
    │   ├── Components/
    │   │   ├── About.js
    │   │   ├── FlashcardDisplay.js
    │   │   ├── FlashcardInput.js
    │   │   ├── Home.js
    │   │   └── Navbar.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   ├── index.css
    │   └── reportWebVitals.js
    ├── package.json
    └── README.md

Installation
------------
Clone the repository:
git clone https://github.com/SoniaM83/sonia-mesa-final-project-front-end-application-react.git

Navigate to the project directory:
cd sonia-mesa-final-project-front-end-application-react

Install dependencies:
npm install

Start the development server:
npm start

Usage
-----
-Home: Displays a welcome message.
-About: Provides information about the app.
-Flashcards: Allows users to add, view, edit, and delete flashcards.

Technologies Used:
-React
-JavaScript (ES6+)
-HTML5/CSS3
-Local Storage API

Components Overview
-------------------
-App.js: Manages app state and renders components.
-Navbar.js: Provides navigation links.
-Home.js: Displays a welcome message.
-About.js: Contains app information.
-FlashcardInput.js: Form to add new flashcards.
-FlashcardDisplay.js: Displays, edits, and deletes flashcards.

Styling
-------
-Consistent dark theme using custom CSS.
-Responsive layout with flexbox for side-by-side flashcard input and display.

Future Improvements
-------------------
-Add categories/tags for flashcards.
-Implement search functionality.

                            Enjoy studying with Digital Flashcards!
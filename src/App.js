import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <h1>
            <Link to="/">Books</Link>
          </h1>
        </nav>

        <Routes>
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/" element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://softwium.com/api/books/${id}`);
        setBook(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>ISBN: {book.isbn}</p>
      <p>Page Count: {book.pageCount}</p>
      <p>Authors: {book.authors.join(', ')}</p>
    </div>
  );
};

export default BookDetailsPage;
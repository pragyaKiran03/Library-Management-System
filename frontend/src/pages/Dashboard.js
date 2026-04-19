import React, { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import axios from 'axios';

function Dashboard({ onLogout }) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/books', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(res.data);
    } catch (err) {
      console.error('Failed to fetch books', err);
    }
  };

  const addBook = async (bookData) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/books', bookData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks([...books, res.data]);
    } catch (err) {
      console.error('Failed to add book', err);
    }
  };

  const deleteBook = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(books.filter(book => book._id !== id));
    } catch (err) {
      console.error('Failed to delete book', err);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <nav>
        <h2>Library Management</h2>
        <button onClick={onLogout}>Logout</button>
      </nav>
      <BookForm onAddBook={addBook} />
      <div className="form-group">
        <label>Search by Title:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <BookList books={filteredBooks} onDeleteBook={deleteBook} />
    </div>
  );
}

export default Dashboard;
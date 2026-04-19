import React from 'react';

function BookList({ books, onDeleteBook }) {
  return (
    <div>
      <h3>Your Books</h3>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map(book => (
          <div key={book._id} className="book-item">
            <h4>{book.title}</h4>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <button onClick={() => onDeleteBook(book._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState({ title: '', author: '', category: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(formData);
    setFormData({ title: '', author: '', category: '' });
  };

  return (
    <div>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
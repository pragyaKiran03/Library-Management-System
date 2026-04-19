const express = require('express');
const Book = require('../models/Book');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all books for the user
router.get('/', auth, async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a book
router.post('/', auth, async (req, res) => {
  const { title, author, category } = req.body;
  try {
    const book = new Book({ title, author, category, userId: req.user });
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a book
router.delete('/:id', auth, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book || book.userId.toString() !== req.user) {
      return res.status(404).json({ message: 'Book not found' });
    }
    await book.deleteOne();
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
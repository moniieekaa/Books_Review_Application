const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Search books by title, author, or genre
router.get("/search", bookController.searchBooks);

// Get all books
router.get("/", bookController.getAllBooks);

// Get book by ID
router.get("/:id", bookController.getBookById);

// Create a new book
router.post("/", bookController.createBook);

module.exports = router;

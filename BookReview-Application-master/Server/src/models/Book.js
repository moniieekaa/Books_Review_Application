const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);

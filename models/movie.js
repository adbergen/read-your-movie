const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  plot: { type: String, required: true },
  poster: { data: Buffer, contentType: String },
  director: { type: String },
  rating: { type: Number },
  link: { type: String },
  released: { type: Date, default: Date.now },
  genre: { type: String },
  userEmail: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
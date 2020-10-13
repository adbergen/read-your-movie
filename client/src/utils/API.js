import axios from "axios";

export default {
  // Gets all movies
  getMovies: function () {
    console.log("getMovies");
    return axios.get("/api/movies");
  },
  // Gets the movie with the given id
  getMovie: function (id) {
    console.log("getMovie", id);
    return axios.get("/api/movies/" + id);
  },
  // Deletes the movie with the given id
  deleteMovie: function (id) {
    return axios.delete("/api/movies/" + id);
  },
  // Saves a movie to the database
  saveMovie: function (movieData) {
    console.log("saveMovie", movieData);
    return axios.post("/api/movies", movieData);
  },
  getMoviesByUser: function (email) {
    console.log("user");
    return axios.get("/api/movies/user/" + email);
  },
  // getTitle: function (title, platform) {
  //   return axios.post("/api/movies/title", {
  //     title: title,
  //     platform: platform,
  //   });
  // },
};

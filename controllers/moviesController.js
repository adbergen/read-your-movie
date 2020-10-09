const db = require("../models");
const axios = require("axios");
const data = "";

async function movieSearch({ title, userEmail }) {
  // axios getting chicken coop api
  console.log("movieSearch title:", title);
  var URL =
    "https://chicken-coop.p.rapidapi.com/games/" +
    title;
  console.log(URL);
  var config = {
    method: "get",
    url: URL,
    headers: {
      "x-rapidapi-key": "e18bac34e3msha5b66c083be9958p166170jsnd89d26158b34",
    },
    data: data,
  };

  try {
    var apiResp = await axios(config);

    var result = apiResp.data.result;
    console.log("movieSearch apiResp result", result);
    var dbResult = await db.Movie.create({
      title: result.title,
      description: result.description,
      releaseDate: result.releaseDate,
      score: result.score,
      developer: result.developer,
      publisher: result.publisher[0],
      genre: result.genre[0],
      image: result.image,
      rating: result.rating,
      userEmail: userEmail,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("API Results", dbResult);
  return dbResult;

}

// Defining methods for the MoviesController
module.exports = {
  findAll: function (req, res) {
    console.log("findAll");
    db.Movie.find({})
      .sort({ date: -1 })
      .then((dbModel) => {
        console.log("Find All dbModel", dbModel);
        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  findAllbyUser: function (req, res) {
    console.log("findAllbyUser");
    db.Movie.find({ userEmail: req.params.email })
      .sort({ date: -1 })
      .then((dbModel) => {
        console.log("Find All dbModel", dbModel);
        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Movie.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Movie.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Movie.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Movie.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  saveMovie: async function (req, res) {
    console.log("saveMovie req.body", req.body);
    var dbResult = await movieSearch(req.body);
    console.log("saveMovie dbResult", dbResult);
    return res.json(dbResult);

  },
};

// const db = require("../models");
// const axios = require("axios");
// const data = "";

// async function bookSearch({ title, userEmail }) {
//   console.log("bookSearch title:", title);
//   var key = process.env.GOOGLE_API_KEY;
//   var URL = "https://www.googleapis.com/books/v1/volumes?q=" + title + key;
//   console.log(URL);
//   var config = {
//     method: "get",
//     url: URL,
//     data: data,
//   };

//   try {
//     var apiResp = await axios(config);

//     var result = apiResp.data.result;
//     console.log("bookSearch apiResp result", result);
//     var dbResult = await db.Book.create({
//       title: result.title,
//       plot: result.plot,
//       poster: result.poster,
//       director: result.director[0],
//       rating: result.rating,
//       link: result.link,
//       released: result.released,
//       genre: result.genre[0],
//       userEmail: userEmail,
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("API Results", dbResult);
//   return dbResult;
// }

// module.exports = {
//   findAll: function (req, res) {
//     console.log("findAll");
//     db.Book.find({})
//       .sort({ date: -1 })
//       .then((dbModel) => {
//         console.log("Find All dbModel", dbModel);
//         res.json(dbModel);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(422).json(err);
//       });
//   },
//   findAllbyUser: function (req, res) {
//     console.log("findAllbyUser");
//     db.Book.find({ userEmail: req.params.email })
//       .sort({ date: -1 })
//       .then((dbModel) => {
//         console.log("Find All dbModel", dbModel);
//         res.json(dbModel);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(422).json(err);
//       });
//   },
//   findById: function (req, res) {
//     db.Book.findById(req.params.id)
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
//   create: function (req, res) {
//     db.Book.create(req.body)
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
//   update: function (req, res) {
//     db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
//   remove: function (req, res) {
//     db.Book.findById({ _id: req.params.id })
//       .then((dbModel) => dbModel.remove())
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
//   saveBook: async function (req, res) {
//     console.log("saveBook req.body", req.body);
//     var dbResult = await bookSearch(req.body);
//     console.log("saveBook dbResult", dbResult);
//     return res.json(dbResult);
//   },
// };

const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");

// Matches with "/api/movies"
router.route("/").get(moviesController.findAll).post(moviesController.saveMovie);

// Matches with "/api/movies/title"
router
  .route("/title")
  .get(moviesController.findById)
  .post(moviesController.saveMovie)
  .put(moviesController.update)
  .delete(moviesController.remove);
    
  router
  .route("/user/:email")
  .get(moviesController.findAllbyUser);

// Matches with "/api/movies/:id"
router
  .route("/:id")
  .get(moviesController.findById)
  .put(moviesController.update)
  .delete(moviesController.remove);

module.exports = router;
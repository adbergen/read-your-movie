const router = require("express").Router();
const movieRoutes = require("./movies");

// Movie routes
router.use("/movies", movieRoutes);

module.exports = router;

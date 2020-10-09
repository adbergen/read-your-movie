const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.saveBook);

// Matches with "/api/books/title"
router
  .route("/title")
  .get(booksController.findById)
  .post(booksController.saveBook)
  .put(booksController.update)
  .delete(booksController.remove);
    
  router
  .route("/user/:email")
  .get(booksController.findAllbyUser);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
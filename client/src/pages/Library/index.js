import React, { Component } from "react";
import BookList from "../../components/BookList";
import API from "../../utils/API";

class Library extends Component {
  state = {
    books: [],
    // {
    //   authors     : [],
    //   _id         : "",
    //   title       : '',
    //   description : "",
    //   image       : "",
    //   link        : ""
    // }
  };

  //After component is mounted in React's DOM, populate the book list
  componentDidMount() {
    this.getSavedBooks();
  }

  //Custom method to retrieve all saved books in the db.
  getSavedBooks = () => {
    API.getBooks()
      .then((res) => {
        res.data.map((book, index) => {
          console.log("Library[33]" + JSON.stringify(book, "", 2));
        });
        this.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

  deleteBook = (bookId) => {
    console.log("Delete Button clicked. Book id :" + bookId);

    if (bookId) {
      API.deleteBook(bookId)
        .then((res) => {
          console.log("Book deleted: " + res.data);
          this.getSavedBooks();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <div className="row center">
            <BookList
              books={this.state.books}
              caller="library"
              onDelete={this.deleteBook}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Library;

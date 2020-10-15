import React, { Component } from "react";
import SearchBox from "../../components/SearchBox";
import BookList from "../../components/BookList";
import API from "../../utils/API.js";
import VideoBg from "reactjs-videobg";
import mp4 from "../../assets/moviereel.mp4";
import poster from "../../assets/poster.jpg";

class Search extends Component {
  state = {
    searchResults: [],
    message: "",
  };

  // When the form is submitted, prevent its default behavior, and search the books API
  searchBooks = (query) => {
    if (query) {
      API.search(query)
        .then((res) => {
          res.data.items.map((book, index) => {
            book.saved = false;
          });
          console.log(res.data);
          this.setState({ searchResults: res.data.items });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ message: err });
        });
    }
  };

  saveBook = (savedBook, bookIndex) => {
    console.log(
      "Save Button clicked. Book is :" + JSON.stringify(savedBook, "", 2)
    );
    if (savedBook) {
      const newBook = {
        volumeInfo: {
          title: savedBook.volumeInfo.title,
          authors: savedBook.volumeInfo.authors,
          description: savedBook.volumeInfo.description,
          imageLinks: {
            thumbnail: savedBook.volumeInfo.imageLinks.thumbnail,
          },
          infoLink: savedBook.volumeInfo.infoLink,
        },
      };
      console.log("Book to save: " + JSON.stringify(newBook, "", 2));
      API.saveBook(newBook)
        .then((res) => {
          savedBook.saved = true;
          let newSearchResults = this.state.searchResults.map((book, index) =>
            index === bookIndex ? savedBook : book
          );
          this.setState({ searchResults: newSearchResults });
          console.log("Book saved: " + res.data);
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
          <VideoBg poster={poster}>
            {/* <VideoBg.Source src={ogg} type="video/ogg" />
        <VideoBg.Source src={webm} type="video/webm" /> */}
            <VideoBg.Source src={mp4} type="video/mp4" />
          </VideoBg>
          <h1 className="header center black-text">Search a Book or Movie</h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Search the world's most comprehensive index of movies and
              full-text books.
            </h5>
          </div>
          <div className="row center">
            <SearchBox onSubmit={this.searchBooks} value={this.state.query} />
            <BookList
              books={this.state.searchResults}
              onBookSave={this.saveBook}
              caller="search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

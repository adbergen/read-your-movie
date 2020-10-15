import React from "react";
import Button from "../Button";
import CheckMark from "../../pages/CheckMark";
import "./style.css";

function previewBook(bookURL) {
  console.log(
    "Preview button clicked. Book URL: " + JSON.stringify(bookURL, "", 2)
  );
  const win = window.open(bookURL, "_blank");
  win.focus();
}

function BookList(props) {
  return (
    <div>
      {props.books.length === 0 ? (
        <h3>List is empty.</h3>
      ) : (
        <div>
          {props.books.map((book, index) => (
            <div className="row" key={index}>
              <div className="col">
                {book.volumeInfo.imageLinks ? (
                  <a
                    className="left"
                    href={book.volumeInfo.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={"book cover"}
                    />
                  </a>
                ) : (
                  <p>Image Not Available</p>
                )}
              </div>
              <a
                className="left"
                href={book.volumeInfo.infoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.volumeInfo.title}
              </a>
              <br></br>
              <div className="col">
                <span className="left">By: {book.volumeInfo.authors}</span>
              </div>
              <br></br>
              <div className="left-align">
                <span> {book.volumeInfo.description} </span>
              </div>
              <br></br>
              <div className="row" id="buttonRow">
                <div className="col">
                  {props.caller === "search" ? (
                    <div className="row">
                      <div className="col">
                        <Button
                          onClick={() => props.onBookSave(book, index)}
                          type="success"
                          className="input-lg"
                        >
                          <span>Save Book</span>
                        </Button>
                      </div>
                      <div className="col" id="checkmark">
                        <CheckMark rendered={book.saved} />
                      </div>
                      <div className="col" id="msgText">
                        {book.saved ? "Book Saved" : ""}
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={(e) => props.onDelete(book._id)}
                      type="danger"
                      className="input-lg red lighten-2"
                    >
                      Delete
                    </Button>
                  )}
                </div>
                <div className="col">
                  <Button
                    onClick={(e) => previewBook(book.volumeInfo.infoLink)}
                    type="success"
                    className="input-lg"
                  >
                    Preview
                  </Button>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;

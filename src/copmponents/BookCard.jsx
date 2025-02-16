import React, { useState } from "react";
import "../CSS/BookCard.css";
import { useBookContext } from "../contexts/BookContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../CSS/BookPop.css";

function BookCard({ book }) {
  const { isFavorites, addToFavorites, removeFromFavorites } = useBookContext();

  const favorite = isFavorites(book.id);

  function onFavoritesClick(e) {
    e.preventDefault();
    console.log("Favorite button clicked", book.id, favorite);

    if (favorite) {
      console.log("Removing from favorites:", book.id);
      removeFromFavorites(book.id);
    } else {
      console.log("Adding to favorites:", book);
      addToFavorites(book);
    }
  }

  return (
    <div className="book-card">
      <div className="book-poster">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          // src={URL} alt={book.titel}
        />
        <div className="book-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoritesClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="book-info">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
      <Popup
        trigger={<button className="button"> More Info </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> {book.volumeInfo.title} </div>
            <div className="content ">
              <p>
                {book.volumeInfo.description || "No description available."}
              </p>
              <p>
                <strong>Published on:</strong> {book.volumeInfo.publishedDate}
              </p>
              <p>
                <strong>Authors:</strong>{" "}
                {book.volumeInfo.authors?.join(", ") || "No authors available."}
              </p>
              <p>
                <strong>Volume Count:</strong>{" "}
                {book.bookshelf?.volumeCount || 0}
              </p>
              <p>
                <strong>Volumes Last Updated:</strong>{" "}
                {book.bookshelf?.volumesLastUpdated || "No update info"}
              </p>
              <p>
                <strong>Resource Link:</strong>{" "}
                <a
                  href={book.bookshelf?.selfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {book.bookshelf?.selfLink || "No link available"}
                </a>
              </p>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default BookCard;

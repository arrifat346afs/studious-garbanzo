import React from "react";
import "../CSS/BookCard.css";
import { useBookContext } from "../contexts/BookContext";
function BookCard({ book }) {
  const { favorites, isFavorites, addToFavorites, removeFromFavorites } = useBookContext();

  
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
          <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoritesClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="book-info">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
    </div>
  );
}

export default BookCard;

import React from "react";
import "../CSS/Favorites.css";
import { useBookContext } from "../contexts/BookContext";
import BookCard from "../copmponents/BookCard";

function Favorites() {
  const { favorites } = useBookContext();
  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
        <div className="book-grid">
          {favorites.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites Books Yet</h2>
      <p>Start adding books to your Favorites</p>
    </div>
  );
}

export default Favorites;

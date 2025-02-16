import React, { useEffect, useState } from "react";
import BookCard from "../copmponents/BookCard";
import "../CSS/Home.css";
import { getPopularBooks, searchBooks } from "../service/Api";

function Home() {
  const [scarchQuery, setScarchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [maxResults, setMaxResults] = useState(30);
  useEffect(() => {
    const loadPopularBooks = async () => {
      try {
        const popularBooks = await getPopularBooks();
        setBooks(popularBooks);
      } catch (err) {
        console.log(err);
        setError("Fail to load books...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularBooks();
  }, []);
  const handleScarch = async (e) => {
    e.preventDefault();
    if (!scarchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const scarchResults = await searchBooks(scarchQuery);
      setBooks(scarchResults);
      setError(null);
    } catch (err) {
      setError("Fail to load books.......");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleScarch} className="search-form">
        <input
          type="text"
          placeholder="Search for books"
          className="search-input "
          value={scarchQuery}
          onChange={(e) => setScarchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Scarch
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

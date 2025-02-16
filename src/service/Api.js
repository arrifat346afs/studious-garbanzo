const API_KEY = import.meta.env.VITE_API_KEY; // Add your Google API Key here if required
const BASE_URL = "https://www.googleapis.com/books/v1";

export const getPopularBooks = async (maxResults = 30) => {
  const response = await fetch(
    `${BASE_URL}/volumes?q=bestsellers&maxResults=${maxResults}&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items;
};

export const searchBooks = async (query, maxResults = 20) => {
  const response = await fetch(
    `${BASE_URL}/volumes?q=${encodeURIComponent(
      query
    )}&maxResults=${maxResults}&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items;
};

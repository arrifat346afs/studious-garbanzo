import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./copmponents/NavBar";
import { BookProvider } from "./contexts/BookContext";

function App() {
  return (
    <BookProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </BookProvider>
  );
}

export default App;

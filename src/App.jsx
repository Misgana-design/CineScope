import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

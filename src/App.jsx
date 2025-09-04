import { useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

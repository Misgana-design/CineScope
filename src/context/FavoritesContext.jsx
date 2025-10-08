import { createContext, useContext, useReducer, useEffect } from "react";

function favoritesReducer(state, action) {}

function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading favorites from local storage", error);
    return [];
  }
}

function saveToLocalStorage(data) {
  localStorage.setItem("favorites", JSON.stringify(data));
}


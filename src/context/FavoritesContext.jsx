import { createContext, useContext, useReducer, useEffect } from "react";
import { saveToLocalStorage } from "../hooks/useLocalStorage";
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
  try {
    localStorage.setItem("favorites", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving favorites to local storage", error);
  }
}

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    loadFromLocalStorage
  );

  useEffect(() => {
    saveToLocalStorage(favorites);
  }, [favorites]);

  const addToFavorites = (item) => {
    dispatch({ type: "ADD_FAVORITE", payload: item });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  return (
    <FavoritesContext.Provider value={{ addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useStorage() {}

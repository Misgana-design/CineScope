import { createContext, useContext, useReducer, useEffect } from "react";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../hooks/useLocalStorage";

// Reducer Function
function favoritesReducer(state, action) {
  
  switch (action.type) {
    case "ADD_FAVORTIE":
      if (state.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    case "REMOVE_FAVORITE":
      return state.filter((item) => item !== action.payload);

    default:
      return state;
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

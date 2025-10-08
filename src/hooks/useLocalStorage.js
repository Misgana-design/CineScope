export function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem("favorites");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading favorites from local storage", error);
  }
}

export function saveToLocalStorage(data) {
  try {
    localStorage.setItem("favorites", JSON.stringify(data));
  } catch (error) {
    console.error("Erro saving favorites to local storage", error);
  }
}

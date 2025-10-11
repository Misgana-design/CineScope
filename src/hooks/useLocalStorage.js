export function loadFromLocalStorage() {
  try {
    const data = window.localStorage.getItem("favorites");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading favorites from local storage", error);
  }
}

export function saveToLocalStorage(data) {
  try {
    window.localStorage.setItem("favorites", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving favorites to local storage", error);
  }
}

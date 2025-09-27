import { createContext } from "react";

export default function SearchBar({ setQuery }) {
  function handleSearch(event) {
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    const data = formData.get("movie");
    formElement.reset();
    if (data.trim()) {
      setQuery(data.trim());
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-30">
          <h1 className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text  text-7xl ml-5 font-black">
            Search for
          </h1>
          <h1 className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-7xl font-black">
            movies here
          </h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="movie"
              placeholder="🔍︎ Search for movies"
              className="mt-20 ml-6 pl-3 text-black font-medium rounded-4xl focus:outline-none focus:border-2 focus:border-green-600 bg-white w-90 h-12"
            />
            <button className="bg-blue-500 text-white rounded-4xl w-20 h-10">Search</button>
          </form>
        </div>
      </div>
    </>
  );
}

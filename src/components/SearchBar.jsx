export default function SearchBar({ query, setQuery, handleSearch }) {
  function handleSearch(formData) {
    const data = formData.get("movie");
    setQuery(data);
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-30">
          <h1 className=" text-green-400 font-extrabold text-7xl">
            🎬CineScope
          </h1>
          <form action={handleSearch}>
            <input
              type="text"
              name="movie"
              placeholder="🔍︎Search for movies"
              className="mt-25 ml-5 pl-3 text-black font-medium rounded-4xl focus:outline-none focus:border-2 focus:border-green-600 bg-white w-100 h-12"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

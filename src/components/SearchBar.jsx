export default function SearchBar() {
  function handleSearch(data) {
    const result = data.get("movie");
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
          </form>
        </div>
      </div>
    </>
  );
}

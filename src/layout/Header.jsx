import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <main className="fixed top-0 left-0 right-0 bg-black text-white flex justify-between p-8 ">
        <header className="ml-20 text-green-400 text-3xl font-extrabold font-mono">
          🎬CineScope
        </header>
        <ul className="flex gap-20 pr-5  text-xl text-shadow-sm text-shadow">
          <li>
            <Link to="/" className="py-2 px-2 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Search" className="py-2 px-2 hover:bg-gray-700">
              Search
            </Link>
          </li>
          <li>
            <Link to="/Favorites" className="py-2 px-2 hover:bg-gray-700">
              Favorites
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}

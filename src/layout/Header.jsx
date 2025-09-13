import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import Logo2 from "../assets/Images/Logo2.png";
import "./Header.css";
export default function Header() {
  return (
    <>
      <main className="bg-black text-white flex justify-between p-6 ">
        <header className="ml-20 text-green-400 text-3xl">🎬CineScope</header>
        <ul className="flex gap-20 pr-5  text-xl text-shadow-sm text-shadow">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import Logo2 from '../assets/Images/Logo2.png'
import './Header.css'
export default function Header() {
  return (
    <>
      <main className="flex p-8 justify-between items-center ">
        <header className="ml-20 text-purple-700 text-3xl">🎬CineScope</header>
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

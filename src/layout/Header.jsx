import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import './Header.css'
export default function Header() {
  return (
    <>
      <main className="flex justify-between items-center">
        <header>
          <img className="w-30 h-30" src={Logo} alt="" />
        </header>
        <ul className="flex gap-20 pr-5 font-">
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

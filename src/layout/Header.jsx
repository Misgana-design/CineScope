import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to='/Search'>Search</Link>
      </li>
      <li>
        <Link to="/Favorites">Favorites</Link>
      </li>
    </ul>
  );
}

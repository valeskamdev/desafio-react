import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/historia">História</NavLink></li>
        <li><NavLink to="/personagens">Personagens</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
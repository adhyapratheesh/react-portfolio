import { Link } from 'react-router-dom';
import './Nav.css'; // Make sure the CSS file is in the same folder

const Nav = () => (
  <nav className="navbar">
    <div className='logo'>ADHYA PRATHEESH</div>
    <ul className="nav-links">
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/projects">PROJECTS</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
    </ul>
  </nav>
);

export default Nav;

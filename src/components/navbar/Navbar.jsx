import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar(){
    return(
      <header className="header">
    <nav className="navbar">
      <div className="logo">👨‍💻✨</div>
      <div>
      <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/projects">Projects</Link>
          <Link className="navbar-item" to="/certifications">Certifications</Link>
          <Link className="navbar-item" to="/work">Work</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
      </div>
    </nav>
    
    </header>);
}

export default Navbar;
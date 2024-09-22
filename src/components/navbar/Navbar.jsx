import './Navbar.css'

function Navbar(){
    return(
    <>
    <nav className="navbar">
      <div className="logo">👨‍💻✨</div>
      <div>
        <a className="navbar-item" href="#home">Home</a>
        <a className="navbar-item" href="#about">Projects</a>
        <a className="navbar-item" href="#about">Certifications</a>
        <a className="navbar-item" href="#services">Work</a>
        <a className="navbar-item" href="#contact">Contact</a>

      </div>
    </nav>
    
    </>);
}

export default Navbar;
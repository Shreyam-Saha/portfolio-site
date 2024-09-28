import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">👨‍💻✨</div>

        {/* Desktop Menu */}
        <div className="navbar-items">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" to="/certifications">
            Certifications
          </Link>
          <Link className="navbar-item" to="/work">
            Work
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>

        {/* Mobile Drawer Menu */}
        <Drawer
          title="Navigation"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Link className="drawer-item" to="/" onClick={onClose}>
            Home
          </Link>
          <Link className="drawer-item" to="/projects" onClick={onClose}>
            Projects
          </Link>
          <Link className="drawer-item" to="/certifications" onClick={onClose}>
            Certifications
          </Link>
          <Link className="drawer-item" to="/work" onClick={onClose}>
            Work
          </Link>
          <Link className="drawer-item" to="/contact" onClick={onClose}>
            Contact
          </Link>
        </Drawer>
      </nav>
    </header>
  );
}

export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Home, Briefcase, Award, FolderOpen, Mail, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/certifications", label: "Certifications", icon: Award },
    { path: "/work", label: "Work", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">💻</span>
          <span className="logo-text">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-items">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-item ${isActive(item.path) ? "active" : ""}`}
              >
                <Icon className="nav-icon" />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu - Hidden on Desktop */}
        <div className="mobile-menu-wrapper">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mobile-menu-button">
                <Menu className="menu-icon" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="mobile-menu">
              <SheetHeader>
                <SheetTitle className="menu-title">
                  <span className="menu-logo">💻</span>
                  Navigation
                </SheetTitle>
              </SheetHeader>
              
              <Separator className="menu-separator" />
              
              <div className="mobile-nav-items">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`mobile-nav-item ${isActive(item.path) ? "active" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="mobile-nav-icon" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

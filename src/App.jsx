import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        YP<span>.</span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {navItems.map(([name, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}
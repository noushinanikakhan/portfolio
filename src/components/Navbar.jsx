import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    // close menu after clicking a link on mobile
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      {/* Left: Brand */}
      <a href="#hero" className="navbar-brand" onClick={handleNavClick}>
        <span>&lt;</span>Noushin<span> /&gt;</span>
      </a>

      {/* Center: Nav links (desktop) */}
      <nav>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right: Social buttons (desktop) */}
      <div className="nav-social">
        <a
          href="https://github.com/noushinanikakhan"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/noushin-anika-khan"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          LinkedIn
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="nav-toggle"
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="nav-links-mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}

          {/* mobile GitHub + LinkedIn */}
          <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.75rem" }}>
            <a
              href="https://github.com/noushinanikakhan"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/noushin-anika-khan"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

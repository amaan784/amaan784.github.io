import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const NAV_LINKS = [
  { to: "/home", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/opensource", label: "Open Source", flag: "showOpenSource" },
  { to: "/contact", label: "Contact" },
];

function ThemeToggle({ isDark, toggleTheme }) {
  if (typeof toggleTheme !== "function") return null;
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={`toggle-track ${isDark ? "is-dark" : "is-light"}`}>
        <span className="toggle-thumb">{isDark ? "🌙" : "☀️"}</span>
      </span>
    </button>
  );
}

export default function Header({ theme, isDark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homeLink = settings.isSplash ? "/splash" : "/home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = NAV_LINKS.filter((l) => !l.flag || settings[l.flag]);

  return (
    <>
      <SeoHeader />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header-inner">
          <NavLink to={homeLink} className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">AS</span>
            <span className="brand-name">{greeting.logo_name}</span>
          </NavLink>

          <nav className={`nav ${open ? "is-open" : ""}`}>
            <ul className="nav-list">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="nav-link"
                    activeClassName="is-active"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <a
                className="btn btn-primary nav-resume"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </nav>

          <div className="header-actions">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              type="button"
              className={`menu-toggle ${open ? "is-open" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      {open && <div className="nav-scrim" onClick={() => setOpen(false)} />}
    </>
  );
}

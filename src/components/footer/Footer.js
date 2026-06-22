import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";
import { greeting, settings } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

const FOOTER_LINKS = [
  { to: "/home", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/opensource", label: "Open Source", flag: "showOpenSource" },
  { to: "/contact", label: "Contact" },
];

export default function Footer(props) {
  const year = new Date().getFullYear();
  const links = FOOTER_LINKS.filter((l) => !l.flag || settings[l.flag]);
  return (
    <footer className="site-footer">
      <Fade bottom duration={900} distance="20px">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-mark">AS</span>
            <div>
              <p className="footer-name">{greeting.title}</p>
              <p className="footer-tagline">{greeting.subTitle}</p>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="footer-link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <SocialMedia theme={props.theme} />
        </div>

        <div className="container footer-bottom">
          <p className="footer-copy">
            © {year} {greeting.title} · Built with React
          </p>
          <a
            className="footer-source"
            href={greeting.portfolio_repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i> Source
          </a>
        </div>
      </Fade>
    </footer>
  );
}

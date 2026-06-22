import React, { useState } from "react";
import "./Greeting.css";
import { Link } from "react-router-dom";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, highlights } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting() {
  const [imgOk, setImgOk] = useState(true);
  const photo = `${process.env.PUBLIC_URL}${greeting.profileImage}`;

  return (
    <>
      <section className="hero" id="greeting">
        <div className="container hero-grid">
          <Fade bottom duration={800} distance="20px">
            <div className="hero-text">
              <span className="eyebrow">Hello, I'm</span>
              <h1 className="hero-name">
                Amaan <span className="grad-text">Sheikh</span>
              </h1>
              <p className="hero-role">{greeting.role}</p>
              <p className="hero-summary">{greeting.summary}</p>

              <div className="hero-cta">
                <a
                  className="btn btn-primary"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Résumé
                </a>
                <Link className="btn btn-ghost" to="/contact">
                  Get in touch
                </Link>
              </div>

              <SocialMedia />
            </div>
          </Fade>

          <Fade bottom duration={800} delay={120} distance="20px">
            <div className="hero-photo-wrap">
              <div className="hero-photo">
                {imgOk ? (
                  <img
                    src={photo}
                    alt="Amaan Sheikh"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <span className="hero-monogram" aria-label="Amaan Sheikh">
                    AS
                  </span>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="highlights" id="highlights">
          <div className="container">
            <div className="highlights-row">
              {highlights.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <p className="highlight-label">{h.label}</p>
                  <p className="highlight-value">{h.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

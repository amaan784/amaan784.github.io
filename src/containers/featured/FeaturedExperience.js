import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
import { experience } from "../../portfolio";
import { Fade } from "react-reveal";

function resolveLogo(name) {
  if (!name) return null;
  try {
    return require(`../../assets/images/${name}`);
  } catch (e) {
    return null;
  }
}

function initialsOf(company) {
  if (!company) return "•";
  const words = company.trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

// Score a role by how recently it was active (its END date), so current /
// recently-ended roles surface first. "Present" sorts to the very top.
function recencyScore(duration) {
  if (!duration) return 0;
  const parts = duration.split(/[-–]/);
  const end = (parts[1] || parts[0]).trim();
  if (/present|current|now/i.test(end)) return Number.MAX_SAFE_INTEGER;
  const m = end.match(/([A-Za-z]{3,})?\.?\s*(\d{4})/);
  if (!m) return 0;
  const year = parseInt(m[2], 10);
  const mon = m[1] ? MONTHS[m[1].slice(0, 3).toLowerCase()] ?? 0 : 0;
  return year * 12 + mon;
}

export default function FeaturedExperience({ theme }) {
  // Feature the 3 most recently-active roles across all sections (current first).
  const roles = experience.sections
    .flatMap((s) => s.experiences || [])
    .slice()
    .sort((a, b) => recencyScore(b.duration) - recencyScore(a.duration))
    .slice(0, 3);

  if (roles.length === 0) return null;

  return (
    <section className="section-tight featured" id="featured-experience">
      <div className="container">
        <Fade bottom duration={900} distance="20px">
          <div className="featured-head">
            <div>
              <span className="eyebrow">Experience</span>
              <h2 className="section-title" style={{ color: theme.text }}>
                Where I&rsquo;ve <span className="grad-text">worked</span>
              </h2>
            </div>
            <Link className="featured-link" to="/experience">
              View full experience <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Fade>

        <div className="featured-exp-grid">
          {roles.map((r, i) => (
            <Fade bottom key={i} duration={800} delay={i * 90} distance="20px">
              <article className="featured-exp-card card">
                <div className="featured-exp-logo">
                  {resolveLogo(r.logo_path) ? (
                    <img src={resolveLogo(r.logo_path)} alt={r.company} />
                  ) : (
                    <span
                      className="featured-exp-mono"
                      aria-label={r.company}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: "var(--text-muted)",
                      }}
                    >
                      {initialsOf(r.company)}
                    </span>
                  )}
                </div>
                <h3 className="featured-exp-title" style={{ color: theme.text }}>
                  {r.title}
                </h3>
                <a
                  className="featured-exp-company"
                  href={r.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {r.company}
                </a>
                <p className="featured-exp-meta">
                  {r.duration} · {r.location}
                </p>
                <p className="featured-exp-desc">{r.description}</p>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

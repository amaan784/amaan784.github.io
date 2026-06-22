import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

// Resolve a bundled logo, returning null if the file doesn't exist so the card
// can fall back to an initials monogram (and never crash the build/render).
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

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const isLast = index === totalCards - 1;
    const logo = resolveLogo(experience["logo_path"]);

    return (
      <Fade bottom duration={900} distance="24px" delay={index * 90}>
        <div className={`experience-entry${isLast ? " is-last" : ""}`}>
          <div className="experience-rail">
            <div className="experience-logo-tile">
              {logo ? (
                <img
                  className="experience-logo"
                  src={logo}
                  alt={experience["company"]}
                />
              ) : (
                <span
                  className="experience-logo-mono"
                  aria-label={experience["company"]}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  {initialsOf(experience["company"])}
                </span>
              )}
            </div>
            {!isLast && <span className="experience-connector" />}
          </div>

          <div className="experience-card card">
            <div className="experience-card-top">
              <div className="experience-card-headline">
                <h3
                  className="experience-card-title"
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                </h3>
                <a
                  className="experience-card-company"
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.accent }}
                >
                  {experience["company"]}
                </a>
              </div>
              <div className="experience-card-meta">
                <span className="experience-card-duration">
                  {experience["duration"]}
                </span>
                <span className="experience-card-location">
                  {experience["location"]}
                </span>
              </div>
            </div>
            <p
              className="experience-card-description"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ExperienceCard;

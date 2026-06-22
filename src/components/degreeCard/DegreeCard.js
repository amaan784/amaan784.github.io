import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={900} distance="24px">
        <article className="degree-card card">
          <div className="degree-card-head">
            {degree.logo_path && (
              <div className="degree-logo-tile">
                <img
                  src={require(`../../assets/images/${degree.logo_path}`)}
                  alt={degree.alt_name}
                />
              </div>
            )}
            <div className="degree-head-text">
              <h3 className="degree-title" style={{ color: theme.text }}>
                {degree.title}
              </h3>
              <p className="degree-subtitle" style={{ color: theme.secondaryText }}>
                {degree.subtitle}
              </p>
              {degree.duration && (
                <span className="chip degree-duration">{degree.duration}</span>
              )}
            </div>
          </div>

          {degree.descriptions && degree.descriptions.length > 0 && (
            <ul className="degree-points">
              {degree.descriptions.map((sentence, j) => (
                <li key={j} style={{ color: theme.secondaryText }}>
                  {sentence.replace(/^⚡\s*/, "")}
                </li>
              ))}
            </ul>
          )}

          {degree.coursework && degree.coursework.length > 0 && (
            <div className="degree-coursework">
              <p className="degree-coursework-label" style={{ color: theme.text }}>
                Relevant Coursework
              </p>
              <div className="degree-coursework-tags">
                {degree.coursework.map((course, k) => (
                  <span key={k} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {degree.website_link && (
            <a
              className="btn btn-ghost degree-link"
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          )}
        </article>
      </Fade>
    );
  }
}

export default DegreeCard;

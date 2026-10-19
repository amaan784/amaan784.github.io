import React from "react";
import { greeting } from "../../portfolio";
import "./PublicationCard.css";

// Wrap your own name in <strong> inside an author list.
function emphasizeName(authors, name) {
  if (!authors || !name || !authors.includes(name)) return authors;
  const parts = authors.split(name);
  return parts.reduce((acc, part, i) => {
    acc.push(part);
    if (i < parts.length - 1) {
      acc.push(
        <strong key={i} className="publication-me">
          {name}
        </strong>
      );
    }
    return acc;
  }, []);
}

// One paper in citation style: year | status, title, authors, venue,
// summary, link. Papers without a link render without one.
export default function PublicationCard({ pub, theme }) {
  const hasLink = pub.url && pub.url !== "#";
  // Tag style by meaning: accepted (navy), under review (neutral),
  // in progress (dashed).
  const status = (pub.status || "").toLowerCase();
  const statusClass = status.includes("review")
    ? " is-review"
    : status.includes("progress")
    ? " is-in-progress"
    : "";

  return (
    <li className="publication">
      <span className="publication-year">{pub.year}</span>

      <div className="publication-body">
        {pub.status && (
          <span className={`publication-status${statusClass}`}>
            {pub.status}
          </span>
        )}

        <h3 className="publication-name" style={{ color: theme.text }}>
          {hasLink ? (
            <a href={pub.url} target="_blank" rel="noopener noreferrer">
              {pub.name}
            </a>
          ) : (
            pub.name
          )}
        </h3>

        {pub.authors && (
          <p className="publication-authors">
            {emphasizeName(pub.authors, greeting.title)}
          </p>
        )}
        {pub.venue && <p className="publication-venue">{pub.venue}</p>}
        {pub.description && (
          <p className="publication-description">{pub.description}</p>
        )}

        {hasLink && (
          <a
            className="publication-link"
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pub.linkLabel || "Read paper"} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </li>
  );
}

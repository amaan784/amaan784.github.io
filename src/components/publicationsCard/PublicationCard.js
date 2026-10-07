import React from "react";
import "./PublicationCard.css";

export default function PublicationCard({ pub, theme }) {
  // Linked papers render as a real link (hover shows the URL, right-click /
  // middle-click / keyboard work). Papers not out yet render a static card.
  const hasLink = pub.url && pub.url !== "#";
  const Card = hasLink ? "a" : "div";
  const linkProps = hasLink
    ? { href: pub.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      className={`publication-card card${hasLink ? "" : " is-static"}`}
      {...linkProps}
    >
      {pub.status && (
        <span className="publication-status">
          <i className="fas fa-hourglass-half" aria-hidden="true"></i>
          {pub.status}
        </span>
      )}

      <h3 className="publication-name" style={{ color: theme.text }}>
        {pub.name}
      </h3>

      {pub.description && (
        <p className="publication-description">{pub.description}</p>
      )}

      {pub.createdAt && (
        <p className="publication-creation-date">
          Published on {pub.createdAt.split("T")[0]}
        </p>
      )}
    </Card>
  );
}

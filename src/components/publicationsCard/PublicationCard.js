import React from "react";
import "./PublicationCard.css";

export default function PublicationCard({ pub, theme }) {
  // Papers that aren't out yet have no link or date: render a static card.
  const hasLink = pub.url && pub.url !== "#";

  function openPubinNewTab(url) {
    var win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  return (
    <div
      className={`publication-card card${hasLink ? "" : " is-static"}`}
      onClick={hasLink ? () => openPubinNewTab(pub.url) : undefined}
    >
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
    </div>
  );
}

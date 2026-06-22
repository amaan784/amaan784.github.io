import React from "react";
import "./PublicationCard.css";

export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    var win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  return (
    <div
      className="publication-card card"
      onClick={() => openPubinNewTab(pub.url)}
    >
      <h3 className="publication-name" style={{ color: theme.text }}>
        {pub.name}
      </h3>

      {pub.description && (
        <p className="publication-description">{pub.description}</p>
      )}

      <p className="publication-creation-date">
        Published on {pub.createdAt.split("T")[0]}
      </p>
    </div>
  );
}

import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  return (
    <div
      className="repo-card card"
      onClick={() => openRepoinNewTab(repo.url)}
    >
      <div className="repo-card-head">
        <span className="repo-icon" aria-hidden="true">
          <svg
            className="repo-svg"
            height="18"
            role="img"
            viewBox="0 0 12 16"
            width="14"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
        </span>
        <h3 className="repo-name" style={{ color: theme.text }}>
          {repo.name}
        </h3>
      </div>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      <p className="repo-creation-date">
        Created on {repo.createdAt.split("T")[0]}
      </p>

      <ProjectLanguages logos={repo.languages} />
    </div>
  );
}

import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";

// Project card. The title is a stretched link to the code, so the whole card
// opens it (hover shows the URL, right-click / middle-click / keyboard work).
// Extra links such as demos and reports sit above that link in the actions row.
export default function GithubRepoCard({ repo, theme }) {
  const title = repo.title || repo.name;
  const year = (repo.createdAt || "").slice(0, 4);
  const links = repo.links || [];
  const external = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <article className="repo-card card">
      {(repo.award || year) && (
        <div className="repo-meta">
          {repo.award && (
            <span className="repo-award">
              <i className="fas fa-trophy" aria-hidden="true"></i>
              {repo.award}
            </span>
          )}
          {year && <span className="repo-year">{year}</span>}
        </div>
      )}

      <h3 className="repo-name" style={{ color: theme.text }}>
        <a className="repo-title-link" href={repo.url} {...external}>
          {title}
        </a>
      </h3>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      {repo.metric && (
        <p className="repo-metric">
          <span className="repo-metric-value">{repo.metric.value}</span>
          <span className="repo-metric-label">{repo.metric.label}</span>
        </p>
      )}

      <ProjectLanguages logos={repo.languages} />

      <div className="repo-actions">
        <a href={repo.url} {...external}>
          View code <span aria-hidden="true">↗</span>
        </a>
        {links.map((l) => (
          <a key={l.url} href={l.url} {...external}>
            {l.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}

import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectRow.css";

// Compact list row for smaller projects (notebook collections, early apps).
// Like the cards, the title is a stretched link, so the whole row opens the code.
export default function ProjectRow({ repo }) {
  const title = repo.title || repo.name;
  const year = (repo.createdAt || "").slice(0, 4);

  return (
    <li className="project-row">
      <h3 className="project-row-title">
        <a
          className="project-row-link"
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h3>
      {repo.description && (
        <p className="project-row-desc">{repo.description}</p>
      )}
      <div className="project-row-meta">
        <ProjectLanguages logos={repo.languages || []} iconsOnly />
        {year && <span className="project-row-year">{year}</span>}
        <span className="project-row-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </li>
  );
}

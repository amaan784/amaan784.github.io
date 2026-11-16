import React, { useRef, useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import ImageLightbox from "../../components/imageLightbox/ImageLightbox";
import "./GithubRepoCard.css";

// Project card. The title is a stretched link to the code, so the whole card
// opens it (hover shows the URL, right-click / middle-click / keyboard work).
// Extra links such as demos and reports sit above that link in the actions row.
// An optional `image` ({ src, alt, full? }, paths under public/) shows as a
// 16:10 strip at the top of the card; clicking it opens a full-screen view,
// using `full` (a larger file) when there is one.
export default function GithubRepoCard({ repo, theme }) {
  const [enlarged, setEnlarged] = useState(false);
  const mediaRef = useRef(null);
  const closeImage = () => {
    setEnlarged(false);
    // Back to the image, so keyboard users continue where they were.
    if (mediaRef.current) mediaRef.current.focus({ preventScroll: true });
  };
  const title = repo.title || repo.name;
  const year = (repo.createdAt || "").slice(0, 4);
  const links = repo.links || [];
  const external = { target: "_blank", rel: "noopener noreferrer" };
  const image = repo.image;
  const base = process.env.PUBLIC_URL;

  return (
    <article className={`repo-card card${image ? " has-media" : ""}`}>
      {image && (
        <button
          ref={mediaRef}
          type="button"
          className="repo-media"
          onClick={() => setEnlarged(true)}
          aria-label={`Enlarge image: ${image.alt || title}`}
        >
          <img
            src={`${base}${image.src}`}
            alt=""
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
          />
          <span className="repo-media-expand" aria-hidden="true">
            <i className="fas fa-expand"></i>
          </span>
        </button>
      )}
      {enlarged && (
        <ImageLightbox
          src={`${base}${image.full || image.src}`}
          alt={image.alt}
          title={title}
          onClose={closeImage}
        />
      )}

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

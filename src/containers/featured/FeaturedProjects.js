import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectsData from "../../shared/opensource/projects.json";
import { Fade } from "react-reveal";

export default function FeaturedProjects({ theme }) {
  const repos = ProjectsData.data.slice(0, 3);
  if (repos.length === 0) return null;

  return (
    <section className="section-tight featured" id="featured-projects">
      <div className="container">
        <Fade bottom duration={900} distance="20px">
          <div className="featured-head">
            <div>
              <span className="eyebrow">Projects</span>
              <h2 className="section-title" style={{ color: theme.text }}>
                Featured <span className="grad-text">work</span>
              </h2>
            </div>
            <Link className="featured-link" to="/projects">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Fade>

        <div className="featured-proj-grid">
          {repos.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

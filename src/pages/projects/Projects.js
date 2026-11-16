import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectRow from "../../components/projectRow/ProjectRow";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

// Filter categories, in display order. `tag` matches the tags in
// projects.json; `slug` is what appears in the URL (?focus=agents), so a
// filtered view can be linked to directly.
const CATEGORIES = [
  { slug: "agents", tag: "Agents & LLMs" },
  { slug: "vision", tag: "Computer Vision" },
  { slug: "inference", tag: "Inference & Efficiency" },
  { slug: "safety", tag: "AI Safety & Evaluation" },
  { slug: "ml-data", tag: "ML & Data" },
  { slug: "apps", tag: "Apps & Full-Stack" },
  { slug: "hackathons", tag: "Hackathons" },
];

function focusFromUrl() {
  const slug = new URLSearchParams(window.location.search).get("focus");
  return CATEGORIES.some((c) => c.slug === slug) ? slug : null;
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { focus: focusFromUrl() };
  }

  setFocus(slug) {
    this.setState({ focus: slug });
    const url = slug
      ? `${window.location.pathname}?focus=${slug}`
      : window.location.pathname;
    window.history.replaceState(null, "", url);
  }

  render() {
    const theme = this.props.theme;
    const { focus } = this.state;
    const repos = ProjectsData.data;
    const total = repos.length;

    const counts = {};
    repos.forEach((r) => (r.tags || []).forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
    const categories = CATEGORIES.filter((c) => counts[c.tag]);
    const active = categories.find((c) => c.slug === focus) || null;

    const shown = active
      ? repos.filter((r) => (r.tags || []).includes(active.tag))
      : repos;
    // Main projects get full cards; smaller ones (`more: true`) a compact list.
    const main = shown.filter((r) => !r.more);
    const more = shown.filter((r) => r.more);

    return (
      <div className="projects-main">
        <Header
          theme={theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />

        {/* ===== Projects ===== */}
        <section className="section" id="projects">
          <div className="container">
            <Fade bottom duration={1000} distance="20px">
              <div className="projects-header">
                <span className="eyebrow">Work</span>
                <h1 className="section-title" style={{ color: theme.text }}>
                  <span className="grad-text">Projects</span>
                </h1>
                <p className="section-lead">{projectsHeader.description}</p>
              </div>
            </Fade>

            <div className="projects-filter">
              <div className="filter-head">
                <p className="filter-label" id="filter-label">
                  <i className="fas fa-sliders" aria-hidden="true"></i>
                  Filter projects
                </p>
                <p className="filter-status" aria-live="polite">
                  {active ? (
                    <>
                      Showing <strong>{shown.length}</strong> of {total} projects
                      <button
                        type="button"
                        className="filter-clear"
                        onClick={() => this.setFocus(null)}
                      >
                        Show all projects
                      </button>
                    </>
                  ) : (
                    <>
                      Showing all <strong>{total}</strong> projects
                    </>
                  )}
                </p>
              </div>

              <div
                className="filter-options"
                role="group"
                aria-labelledby="filter-label"
              >
                <button
                  type="button"
                  aria-pressed={!active}
                  className={`filter-chip${!active ? " is-active" : ""}`}
                  onClick={() => this.setFocus(null)}
                >
                  All projects <span className="filter-count">{total}</span>
                </button>
                {categories.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    aria-pressed={focus === c.slug}
                    className={`filter-chip${focus === c.slug ? " is-active" : ""}`}
                    onClick={() => this.setFocus(c.slug)}
                  >
                    {c.tag} <span className="filter-count">{counts[c.tag]}</span>
                  </button>
                ))}
              </div>
            </div>

            {main.length > 0 && (
              <div className="projects-grid">
                {main.map((repo) => (
                  <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
                ))}
              </div>
            )}

            {more.length > 0 && (
              <div className="projects-more-list">
                <h2 className="projects-more-title" style={{ color: theme.text }}>
                  More projects
                </h2>
                <ul>
                  {more.map((repo) => (
                    <ProjectRow key={repo.id} repo={repo} />
                  ))}
                </ul>
              </div>
            )}

            <div className="projects-more">
              <a
                className="btn btn-ghost"
                href={greeting.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                More projects on GitHub
              </a>
            </div>
          </div>
        </section>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;

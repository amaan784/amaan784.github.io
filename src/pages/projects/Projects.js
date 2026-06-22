import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

// Preferred display order for the category filter.
const CATEGORY_ORDER = [
  "All",
  "GenAI",
  "Agentic",
  "NLP",
  "CV",
  "ML",
  "DL",
  "Full-Stack",
  "Data",
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "All" };
  }

  render() {
    const theme = this.props.theme;
    const { filter } = this.state;
    const repos = ProjectsData.data;

    const present = new Set();
    repos.forEach((r) => (r.tags || []).forEach((t) => present.add(t)));
    const categories = CATEGORY_ORDER.filter(
      (c) => c === "All" || present.has(c)
    );
    const shown =
      filter === "All"
        ? repos
        : repos.filter((r) => (r.tags || []).includes(filter));

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

            <div className="projects-filter" role="tablist" aria-label="Filter projects by category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={filter === c}
                  className={`filter-chip${filter === c ? " is-active" : ""}`}
                  onClick={() => this.setState({ filter: c })}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {shown.map((repo) => (
                <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
              ))}
            </div>

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

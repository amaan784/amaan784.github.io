import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <section className="section-tight issues-section">
        <div className="container">
          <Fade bottom duration={1000} distance="20px">
            <div className="os-section-header">
              <span className="eyebrow">Tracked &amp; resolved</span>
              <h2 className="section-title" style={{ color: theme.text }}>
                <span className="grad-text">Issues</span>
              </h2>
            </div>
          </Fade>
          <div className="issues-grid">
            {issuesData["data"].map((issue) => {
              return <IssueCard key={issue["id"]} issue={issue} theme={theme} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Issues;

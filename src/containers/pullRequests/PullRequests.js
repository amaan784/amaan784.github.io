import React, { Component } from "react";
import "./PullRequests.css";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";

class PullRequests extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <section className="section-tight pull-requests-section">
        <div className="container">
          <Fade bottom duration={1000} distance="20px">
            <div className="os-section-header">
              <span className="eyebrow">Code I shipped</span>
              <h2 className="section-title" style={{ color: theme.text }}>
                Pull <span className="grad-text">Requests</span>
              </h2>
            </div>
          </Fade>
          <div className="pull-request-grid">
            {pullRequestsData["data"].map((pullRequest) => {
              return (
                <PullRequestCard
                  key={pullRequest["id"]}
                  pullRequest={pullRequest}
                  theme={theme}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default PullRequests;

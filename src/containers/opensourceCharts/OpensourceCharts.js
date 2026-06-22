import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <section className="section-tight os-charts-section">
        <div className="container">
          <Fade bottom duration={1000} distance="20px">
            <div className="os-section-header">
              <span className="eyebrow">By the numbers</span>
              <h2 className="section-title" style={{ color: theme.text }}>
                <span className="grad-text">Contributions</span>
              </h2>
            </div>
          </Fade>
          <div className="os-charts-grid">
            <div className="os-chart-card card">
              <PullRequestChart theme={theme} />
            </div>
            <div className="os-chart-card card">
              <IssueChart theme={theme} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OpensourceCharts;

import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const theme = this.props.theme;
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [
            PullRequestData["open"],
            PullRequestData["merged"],
            PullRequestData["closed"],
          ],
          backgroundColor: ["#5b78e6", "#9aa1ad", "#cdd2da"],
          hoverBackgroundColor: ["#3f5fd6", "#828a97", "#b7bdc8"],
        },
      ],
    };

    return (
      <div className="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2
            className="pr-chart-header"
            style={theme ? { color: theme.text } : undefined}
          >
            Pull Request Distribution
          </h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;

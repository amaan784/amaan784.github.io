import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

class IssueChart extends Component {
  render() {
    const theme = this.props.theme;
    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [IssueData["open"], IssueData["closed"]],
          backgroundColor: ["#5b78e6", "#9aa1ad"],
          hoverBackgroundColor: ["#3f5fd6", "#828a97"],
        },
      ],
    };

    return (
      <div className="issue-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2
            className="issue-chart-header"
            style={theme ? { color: theme.text } : undefined}
          >
            Issue Distribution
          </h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            margin: "0",
            padding: "0",
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

export default IssueChart;

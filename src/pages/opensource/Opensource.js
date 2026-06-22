import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header
          theme={theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />

        <section className="section opensource-hero">
          <div className="container">
            <Fade bottom duration={1000} distance="20px">
              <div className="opensource-hero-inner">
                <span className="eyebrow">Community</span>
                <h1 className="section-title" style={{ color: theme.text }}>
                  Open <span className="grad-text">Source</span>
                </h1>
                <p className="section-lead">
                  Organizations, pull requests and issues from my open-source
                  activity.
                </p>
              </div>
            </Fade>
          </div>
        </section>

        <Organizations theme={theme} />
        <OpensourceCharts theme={theme} />
        <PullRequests theme={theme} />
        <Issues theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;

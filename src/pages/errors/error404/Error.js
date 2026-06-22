import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <Header
          theme={this.props.theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />
        <section className="section error-section">
          <div className="container error-inner">
            <Fade bottom duration={1100} distance="40px">
              <span className="eyebrow">Error 404</span>
              <h1 className="error-code grad-text">404</h1>
              <h2 className="error-woops" style={{ color: theme.text }}>
                Woops
              </h2>
              <p className="error-message section-lead">
                The requested page is unavailable at the moment!
              </p>
              <Link className="btn btn-primary error-home-btn" to="/home">
                Go Home
              </Link>
            </Fade>
          </div>
        </section>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

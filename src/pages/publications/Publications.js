import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";
import "./Publications.css";

class Publications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="publications-main">
        <Header
          theme={theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />
        <section className="section" id="publications">
          <div className="container">
            <Fade bottom duration={1000} distance="20px">
              <div className="publications-header">
                <h1 className="section-title" style={{ color: theme.text }}>
                  <span className="grad-text">Publications</span>
                </h1>
                <p className="section-lead">{publicationsHeader.description}</p>
              </div>
            </Fade>

            <div className="publications-grid">
              {publications.data.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} theme={theme} />
              ))}
            </div>
          </div>
        </section>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Publications;

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header
          theme={theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />
        <section className="section experience-hero">
          <div className="container">
            <Fade bottom duration={1000} distance="24px">
              <div className="experience-header">
                <span className="eyebrow">Career</span>
                <h1 className="section-title" style={{ color: theme.text }}>
                  Experi<span className="grad-text">ence</span>
                </h1>
                <p
                  className="experience-subtitle"
                  style={{
                    margin: "10px 0 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.04em",
                    color: "var(--text-faint)",
                  }}
                >
                  {experience.subtitle}
                </p>
                <p className="section-lead">{experience.description}</p>
              </div>
            </Fade>
          </div>
        </section>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header
          theme={this.props.theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />
        <section className="section education-section">
          <div className="container">
            <Fade bottom duration={1000} distance="20px">
              <div className="education-header">
                <span className="eyebrow">Education</span>
                <h1 className="section-title" style={{ color: theme.text }}>
                  Education &amp; <span className="grad-text">credentials</span>
                </h1>
                <p className="section-lead">
                  My academic background and the profiles where I practice.
                </p>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="20px" delay={120}>
              <div className="competitive-block">
                <h2 className="competitive-title" style={{ color: theme.text }}>
                  Competitive profiles
                </h2>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </Fade>

            <Educations theme={this.props.theme} />

            {certifications.certifications.length > 0 ? (
              <Certifications theme={this.props.theme} />
            ) : null}
          </div>
        </section>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;

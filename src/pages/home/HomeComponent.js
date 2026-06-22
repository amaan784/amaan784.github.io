import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import FeaturedExperience from "../../containers/featured/FeaturedExperience";
import FeaturedProjects from "../../containers/featured/FeaturedProjects";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import "./HomeComponent.css";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="home-page">
        <Header
          theme={theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />
        <Greeting theme={theme} />
        <FeaturedExperience theme={theme} />
        <FeaturedProjects theme={theme} />
        <Skills theme={theme} />

        <section className="section-tight home-cta-section">
          <div className="container">
            <Fade bottom duration={900} distance="20px">
              <div className="home-cta">
                <div className="home-cta-content">
                  <h2 className="home-cta-title" style={{ color: theme.text }}>
                    Let&rsquo;s <span className="grad-text">connect</span>
                  </h2>
                  <p className="home-cta-text">
                    I&rsquo;m always happy to talk about data, machine learning,
                    and building products. Reach out or grab my résumé.
                  </p>
                  <div className="home-cta-buttons">
                    <a
                      className="btn btn-primary"
                      href={greeting.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Résumé
                    </a>
                    <Link className="btn btn-ghost" to="/contact">
                      Contact me
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;

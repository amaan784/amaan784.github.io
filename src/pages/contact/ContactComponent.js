import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header
          theme={theme}
          isDark={this.props.isDark}
          toggleTheme={this.props.toggleTheme}
        />
        <section className="section contact-section">
          <div className="container">
            <Fade bottom duration={1000} distance="32px">
              <div className="contact-header">
                <span className="eyebrow">Say hello</span>
                <h1 className="section-title" style={{ color: theme.text }}>
                  Let&rsquo;s <span className="grad-text">connect</span>
                </h1>
                <p className="section-lead">{ContactData["description"]}</p>
                {greeting.location && (
                  <p className="contact-location">
                    <i className="fas fa-location-dot" aria-hidden="true"></i>
                    Based in {greeting.location}
                  </p>
                )}
              </div>

              <div className="card contact-card">
                <SocialMedia theme={theme} />
                <div className="contact-cta">
                  <a
                    className="btn btn-primary"
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                  <a className="btn btn-ghost" href="mailto:amaan784@gmail.com">
                    Email me
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;

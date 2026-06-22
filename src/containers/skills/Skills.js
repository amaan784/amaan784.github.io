import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <Fade bottom duration={1000} distance="20px">
          <div className="skills-header">
            <span className="eyebrow">What I do</span>
            <h2 className="section-title" style={{ color: theme.text }}>
              Skills &amp; <span className="grad-text">capabilities</span>
            </h2>
            <p className="section-lead">
              I build end-to-end systems across machine learning, full-stack
              engineering and cloud infrastructure.
            </p>
          </div>
        </Fade>
        <SkillSection theme={theme} />
      </div>
    </section>
  );
}

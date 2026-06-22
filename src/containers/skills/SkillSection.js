import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="skills-grid">
        {skills.data.map((skill, i) => (
          <Fade bottom key={i} duration={800} distance="20px" delay={i * 100}>
            <article className="skill-card card">
              <span className="skill-index">0{i + 1}</span>
              <h3 className="skill-title" style={{ color: theme.text }}>
                {skill.title}
              </h3>

              <ul className="skill-points">
                {skill.skills.map((sentence, j) => (
                  <li key={j} style={{ color: theme.secondaryText }}>
                    {sentence.replace(/^⚡\s*/, "")}
                  </li>
                ))}
              </ul>

              <SoftwareSkill logos={skill.softwareSkills} />
            </article>
          </Fade>
        ))}
      </div>
    );
  }
}

export default SkillSection;

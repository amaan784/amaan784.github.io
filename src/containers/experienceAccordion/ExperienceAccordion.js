import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Fade } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord section-tight">
        <div className="container">
          {this.props.sections.map((section) => {
            return (
              <div className="experience-group" key={section["title"]}>
                <Fade bottom duration={900} distance="20px">
                  <h2
                    className="experience-group-title"
                    style={{ color: theme.text }}
                  >
                    {section["title"]}
                  </h2>
                </Fade>
                <div className="experience-timeline">
                  {section["experiences"].map((experience, index) => {
                    return (
                      <ExperienceCard
                        key={index}
                        index={index}
                        totalCards={section["experiences"].length}
                        experience={experience}
                        theme={theme}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;

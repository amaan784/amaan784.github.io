import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="educations" id="educations">
        <Fade bottom duration={1000} distance="20px">
          <span className="eyebrow">Degrees</span>
          <h2 className="section-title" style={{ color: theme.text }}>
            Degrees <span className="grad-text">received</span>
          </h2>
        </Fade>
        <div className="educations-grid">
          {degrees.degrees.map((degree, i) => {
            return <DegreeCard key={i} degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;

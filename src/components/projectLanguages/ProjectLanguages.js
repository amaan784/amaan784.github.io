import React, { Component } from "react";
import "./ProjectLanguages.css";

class ProjectLanguages extends Component {
  render() {
    return (
      <ul className="repo-languages">
        {this.props.logos.map((logo) => (
          <li key={logo.name} className="chip repo-language-chip">
            <span
              className="iconify repo-language-icon"
              data-icon={logo.iconifyClass}
              data-inline="false"
            ></span>
            {logo.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ProjectLanguages;

import React, { Component } from "react";
import "./ProjectLanguages.css";

// `iconsOnly` shows just the glyphs (name in a tooltip), for compact rows.
class ProjectLanguages extends Component {
  render() {
    const { logos, iconsOnly } = this.props;
    return (
      <ul
        className={`repo-languages${iconsOnly ? " is-icons-only" : ""}`}
        aria-label="Languages"
      >
        {logos.map((logo) => (
          <li
            key={logo.name}
            className="repo-language"
            title={iconsOnly ? logo.name : undefined}
          >
            <span
              className="iconify repo-language-icon"
              data-icon={logo.iconifyClass}
              data-inline="false"
              aria-hidden={iconsOnly ? undefined : "true"}
              aria-label={iconsOnly ? logo.name : undefined}
            ></span>
            {!iconsOnly && logo.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ProjectLanguages;

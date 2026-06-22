import React from "react";
import "./CompetitiveSites.css";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites">
        {this.props.logos.map((logo) => {
          return (
            <a
              key={logo.siteName}
              className="competitive-site chip"
              href={logo.profileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="iconify competitive-site-icon"
                data-icon={logo.iconifyClassname}
                style={logo.style}
                data-inline="false"
              ></span>
              <span className="competitive-site-name">{logo.siteName}</span>
            </a>
          );
        })}
      </div>
    );
  }
}

export default CompetitiveSites;

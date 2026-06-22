import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <section className="section-tight organizations-section" id="organizations">
        <div className="container">
          <Fade bottom duration={1000} distance="20px">
            <div className="os-section-header">
              <span className="eyebrow">Communities</span>
              <h2 className="section-title" style={{ color: theme.text }}>
                Contributed <span className="grad-text">Organizations</span>
              </h2>
            </div>
          </Fade>
          <OrganizationList logos={OrganizationsData["data"]} />
        </div>
      </section>
    );
  }
}

export default Organizations;

import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className="organizations-inline" name={logo["login"]}>
                  <Fade bottom duration={1500} distance="24px">
                    <span className="organizations-tile card">
                      <img
                        className="organizations-img"
                        src={logo["avatarUrl"]}
                        alt={logo["login"]}
                      />
                    </span>
                  </Fade>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;

import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={media.name}
          title={media.name}
          style={{ "--brand": media.backgroundColor }}
        >
          {media.iconify ? (
            <span
              className="iconify"
              data-icon={media.iconify}
              data-inline="false"
            ></span>
          ) : (
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          )}
        </a>
      ))}
    </div>
  );
}

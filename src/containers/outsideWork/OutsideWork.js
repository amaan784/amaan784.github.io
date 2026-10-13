import React from "react";
import { Fade } from "react-reveal";
import { outsideWork } from "../../portfolio";
import "./OutsideWork.css";

export default function OutsideWork({ theme }) {
  if (!outsideWork || outsideWork.length === 0) return null;

  return (
    <section className="section-tight outside-work" id="outside-work">
      <div className="container">
        <Fade bottom duration={900} distance="20px">
          <h2 className="section-title" style={{ color: theme.text }}>
            Outside <span className="grad-text">work</span>
          </h2>
        </Fade>

        <ul className="outside-list">
          {outsideWork.map((item) => (
            <li key={item.title} className="outside-item">
              <h3 className="outside-title">{item.title}</h3>
              <p className="outside-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

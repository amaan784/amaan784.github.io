import React from "react";
import "./TopButton.css";

export default function TopButton() {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <button
      type="button"
      onClick={GoUpEvent}
      id="topButton"
      title="Go up"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </button>
  );
}

import React from "react";
import "./Button.css";

// Keeps the original API (text, className, href, newTab, theme) and adds an
// optional `variant` ("primary" | "ghost"). Defaults to the gradient primary.
export default function Button({ text, className, href, newTab, variant }) {
  const variantClass = variant === "ghost" ? "btn-ghost" : "btn-primary";
  return (
    <div className={`btn-wrap ${className || ""}`}>
      <a
        className={`btn ${variantClass}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}

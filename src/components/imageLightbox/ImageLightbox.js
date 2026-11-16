import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./ImageLightbox.css";

// Full-screen view of a project image. It closes with the Close button, Esc,
// a click outside the image, or the browser / phone Back gesture: opening it
// adds a history entry, so Back closes the image instead of leaving the page.
export default function ImageLightbox({ src, alt, title, onClose }) {
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const opener = document.activeElement;
    window.history.pushState({ lightbox: true }, "");

    const onPop = () => onCloseRef.current();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        window.history.back();
      } else if (e.key === "Tab") {
        // The Close button is the only control, so keep focus on it.
        e.preventDefault();
        if (closeRef.current) closeRef.current.focus();
      }
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();

    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (opener && opener.focus) opener.focus();
    };
  }, []);

  // Every way of closing goes through history, so the extra entry is removed.
  const close = () => window.history.back();

  return ReactDOM.createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title}, enlarged image` : "Enlarged image"}
      onClick={(e) => {
        if (e.target.tagName !== "IMG") close();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        <span aria-hidden="true">✕</span> Close
      </button>

      <figure className="lightbox-figure">
        <img src={src} alt={alt || ""} />
        {(title || alt) && (
          <figcaption>
            {title && <strong>{title}</strong>}
            {alt && <span>{alt}</span>}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body
  );
}

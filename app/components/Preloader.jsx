import React from "react";

export default function Preloader() {
  return (
    <div className="loader overflow-hidden">
      <div className="revealer"></div>
      <div className="loader-text-wrapper">
        <div className="loader-text">
          <h3>Axole</h3>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-line-wrapper">
          <span className="progress-line" id="progress-bar"></span>
        </div>
      </div>
    </div>
  );
}

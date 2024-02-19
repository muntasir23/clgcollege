import React from "react";

export default function Librarypush(props) {
  const { title, img, link } = props.value;

  return (
    <div className="book-card">
      <div className="book-card-image-container">
        <img alt="" src={img} />
      </div>
      <div className="book-card-content">
        <p>{title}</p>
        <button>
          <a href={link}>
            Visit Google Sheet
          </a>
        </button>
      </div>
    </div>
  );
}

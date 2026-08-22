import React from "react";

const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className={title}>saving money</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;

import React from "react";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="left">
        <div className="title">
          <h1>
            Full-Stack Junior <br /> Developper 📱
          </h1>
        </div>
        <div className="description">
          <p>
            Hi, I,m Valentin Massonnière. A passionate Full-Stack <br /> Junior
            Developper based in LePecq, France &#x1f1eb;&#x1f1f7;
          </p>
        </div>
        <div className="socials">
          <a href="" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="" target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: "url(/assets/img/header_pdp.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Presentation;

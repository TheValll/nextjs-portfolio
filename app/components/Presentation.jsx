import React from "react";

const Presentation = () => {
  return (
    <div className="presentation" id="home">
      <div className="left">
        <div className="title">
          <h1>
            Full-Stack Junior <br /> Developer 📱
          </h1>
        </div>
        <div className="description">
          <p>
            Hello, I'm Valentin Massonnière, an enthusiastic Junior <br />
            Full-Stack Developer hailing from Le Pecq, France 📍
          </p>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/valentin-massonniere/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/TheValll" target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
        <div className="tech">
          <h3>Tech Stack |</h3>
          <div className="icon">
            <img src="/assets/icon/js.png" alt="js logo" height="40px" />
            <img src="/assets/icon/ts.png" alt="ts logo" height="40px" />
          </div>
          <div className="icon">
            <img src="/assets/icon/react.png" alt="react logo" height="40px" />
            <img
              src="/assets/icon/nextjs.png"
              alt="nextjs logo"
              height="40px"
            />
          </div>
          <div className="icon">
            <img src="/assets/icon/php.png" alt="php logo" height="40px" />
            <img
              src="/assets/icon/symfony.png"
              alt="symfony logo"
              height="40px"
            />
          </div>
          <div className="icon">
            <img src="/assets/icon/sass.png" alt="sass logo" height="40px" />
            <img src="/assets/icon/git.png" alt="sass logo" height="40px" />
          </div>
        </div>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: "url(/assets/img/header_pdp.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <a href="#aboutScroll" id="scroll">
        <div className="scroll-down"></div>
      </a>
    </div>
  );
};

export default Presentation;

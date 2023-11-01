"use client";
import React, { useState } from "react";

const Projects = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const displayAll = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };
  return (
    <div className="projects" id="projectScroll">
      <div className="projects-container">
        <h3>Projects</h3>
        <div className="project">
          <div className="left">
            <img
              src="/assets/projects-img/airport.png"
              alt="airport map thumbail"
            />
          </div>
          <div className="right">
            <h3>Airport Map Searching</h3>
            <p>
              The Airport Map Searching website allows you to visualize all the
              airports on a map of a searched country! I was able to learn how
              to use Leaflet with this project. ✈️🌎🗺️
            </p>
            <div className="language">
              <img src="/assets/icon/js.png" alt="js logo" />
              <img src="/assets/icon/sass.png" alt="sass logo" />
              <img src="/assets/icon/git.png" alt="git logo" />
            </div>
            <div className="code">
              <a href="https://github.com/TheValll/airport-map" target="_blank">
                Code<i className="fa-brands fa-github"></i>
              </a>
              <a href="https://thevalll.github.io/airport-map/" target="_blank">
                Website<i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="responsive">
          <div className="right">
            <h3>Weather WebApp</h3>
            <p>
              This project is my very first React project, it's a weather web
              app that shows your current weather based on your location with
              some cool features. ☀️🌦🌨🌍
            </p>
            <div className="language">
              <img src="/assets/icon/react.png" alt="react logo" />
              <img src="/assets/icon/sass.png" alt="sass logo" />
              <img src="/assets/icon/git.png" alt="git logo" />
            </div>
            <div className="code">
              <a
                href="https://github.com/TheValll/react-weather-webapp"
                target="_blank"
              >
                Code<i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://react-weather-webapp-delta.vercel.app/"
                target="_blank"
              >
                Website<i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="left">
            <img
              src="/assets/projects-img/weather-app.png"
              alt="weather app thumbail"
            />
          </div>
        </div>
        <div className="project">
          <div className="left">
            <img
              src="/assets/projects-img/robottype.png"
              alt="robot type thumbail"
            />
          </div>
          <div className="right">
            <h3>Robot Type</h3>
            <p>
              The Robot Type game is a clone of the famous game MonkeyType,
              allowing you to improve and test your typing skills. This project
              allowed me to further enhance my competencies in JavaScript.
              💻👾🎮
            </p>
            <div className="language">
              <img src="/assets/icon/js.png" alt="js logo" />
              <img src="/assets/icon/sass.png" alt="sass logo" />
              <img src="/assets/icon/git.png" alt="git logo" />
            </div>
            <div className="code">
              <a href="https://github.com/TheValll/type-game" target="_blank">
                Code<i className="fa-brands fa-github"></i>
              </a>
              <a href="https://thevalll.github.io/type-game/" target="_blank">
                Website<i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        id="btn-all"
        onClick={displayAll}
        style={{ color: isDisplayed ? "#308dfb" : "rgb(85, 85, 85)" }}
      >
        All projects ? <i className="fa-solid fa-toggle-on"></i>
      </button>
      <div
        className="all-projects"
        style={{ display: isDisplayed ? "grid" : "none" }}
      >
        <div className="all-projects-container">
          <h3>All projects</h3>
          <div className="all">
            <a
              href="https://thevalll.github.io/card-generator/"
              target="_blank"
            >
              <img
                src="/assets/projects-img/cardGenerator.png"
                alt="card generator app"
              />
            </a>
            <a href="https://thevalll.github.io/calculator/" target="_blank">
              <img
                src="/assets/projects-img/calculator.jpg"
                alt="calculator app"
              />
            </a>
            <a href="https://thevalll.github.io/BankedApp/" target="_blank">
              <img src="/assets/projects-img/bankerapp.jpg" alt="banker app" />
            </a>
            <a href="https://thevalll.github.io/pig-game/" target="_blank">
              <img src="/assets/projects-img/piggame.jpg" alt="pig game app" />
            </a>
            <a href="https://thevalll.github.io/bubble-game/" target="_blank">
              <img
                src="/assets/projects-img/bullgenerator.png"
                alt="bull generator app"
              />
            </a>
            <a href="https://thevalll.github.io/guess-number/" target="_blank">
              <img
                src="/assets/projects-img/guessnumber.jpg"
                alt="guees my number app"
              />
            </a>
            <a
              href="https://thevalll.github.io/password-generator/"
              target="_blank"
            >
              <img
                src="/assets/projects-img/mdpgenerator.png"
                alt="mdp generator app"
              />
            </a>
            <a href="https://thevalll.github.io/morpion-game/" target="_blank">
              <img
                src="/assets/projects-img/morpionGame.jpg"
                alt="morpion game app"
              />
            </a>
            <a
              href="https://thevalll.github.io/pokemon-generator/"
              target="_blank"
            >
              <img src="/assets/projects-img/pokemon.png" alt="pokemon app" />
            </a>
            <a href="https://thevalll.github.io/To-Do-List/" target="_blank">
              <img
                src="/assets/projects-img/todolist.jpg"
                alt="to do list app"
              />
            </a>
            <a href="https://thevalll.github.io/weather-app/" target="_blank">
              <img
                src="/assets/projects-img/weatherApp.jpg"
                alt="weather app"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";

const Education = () => {
  return (
    <div className="education" id="educationScroll">
      <div className="education-container">
        <h3>Education</h3>
        <div className="school">
          <div className="left">
            <img src="/assets/img/konexio.jpg" alt="konexio logo" />
          </div>
          <div className="right">
            <div className="right-container">
              <h3>Konexio formation - Web Developer</h3>
              <p>Sorbonne Nouvelle</p>
              <p>
                Development of responsive and dynamic applications with Vanilla
                🧪💻
              </p>
              <p>
                Maintenance and improvement of websites or web applications 🛠️⚙️
              </p>
              <p>Database design (MySQL) 📊🔍</p>
              <p>
                Preparation for the RNCP Level 5 professional title (Bac+2) 📜🎓
              </p>
            </div>
          </div>
        </div>
        <div className="school" id="responsive">
          <div className="right">
            <div className="right-container">
              <h3>
                Scientific refresher course - University of Cergy-Pontoise
              </h3>
              <p>Mathematics, Physics-Chemistry</p>
              <p>
                📚 I undertook a scientific refresher course at the University
                of Cergy-Pontoise to enhance my knowledge and skills in key
                scientific subjects.
              </p>
              <p>
                📊 The course covered essential topics in Mathematics and
                Physics-Chemistry, providing a comprehensive overview and
                in-depth understanding of these subjects. This experience not
                only solidified my foundation in science but also fueled my
                passion for continuous learning and exploration in the field.
                🧪🧮
              </p>
            </div>
          </div>
          <div className="left">
            <img src="/assets/img/cy.jpg" alt="konexio logo" />
          </div>
        </div>
        <div className="school">
          <div className="left">
            <img src="/assets/img/bia.jpg" alt="konexio logo" />
          </div>
          <div className="right">
            <div className="right-container">
              <h3>
                Aeronautical Initiation Certificate - With honors, Self-taught
              </h3>
              <p>Learning the basics of aeronautics</p>
              <p>(Regulations, Meteorology, Aerodynamics, History)</p>
              <p>
                🛫 I successfully obtained the Aeronautical Initiation
                Certificate with honors as a self-taught individual.
              </p>
              <p>
                📚 My self-study journey involved delving deep into the
                essentials of aeronautics, which included understanding
                regulations, meteorology, aerodynamics, and the rich history of
                aviation.
              </p>
              <p>
                ✈️ This self-driven educational pursuit not only enriched my
                knowledge of aeronautics but also honed my ability to
                independently seek and absorb complex information. 🌥️📜
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

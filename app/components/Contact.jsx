import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contactScroll">
      <div className="contact-container">
        <h3>Contact</h3>
        <p className="contact-title">Feel free to contact me! 😊</p>
        <div className="content">
          <div className="left">
            <div className="contacts">
              <div className="mail">
                <p>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  valentin78.massonniere
                  <br />
                  @gmail.com
                </p>
              </div>
              <div className="discord">
                <p>
                  <i className="fa-brands fa-discord"></i> jesaispasfrere
                </p>
              </div>
              <div className="linkedin">
                <p>
                  <i className="fa-brands fa-linkedin"></i> Valentin MASSONNIERE
                </p>
              </div>
              <div className="phone">
                <p>
                  <i className="fa-solid fa-phone"></i> +33 6 50 30 93 26
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/assets/img/contact.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

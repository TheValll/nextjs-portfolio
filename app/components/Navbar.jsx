"use client";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 150,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <div className="navbar">
      <h2>Valentin MASSONNIERE</h2>
      <div className="navbar-container">
        <a href="#home">Home</a>
        <a href="#aboutScroll">About</a>
        <a href="#projectScroll">Projects</a>
        <a href="#educationScroll">Education</a>
        <a href="#contactScroll">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;

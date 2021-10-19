import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-3 text-white text-center">
      <p className="mb-0">
        &copy; Copyright By{" "}
        <span className="footer-site-title fw-bolder">
          Success Medical Care
        </span>{" "}
        2021
      </p>
    </div>
  );
};

export default Footer;

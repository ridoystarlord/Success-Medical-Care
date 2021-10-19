import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footerwidget.css";
import { Link } from "react-router-dom";

const Footerwidget = () => {
  return (
    <Container fluid className="py-5 footer-widget">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
            <h3 className="fw-bold footer-widget-site-title">
              Success Medical Care
            </h3>
            <p>Genius in Healthcare</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
            <h3 className="mb-4">Usefull Links</h3>
            <Link
              className="d-block text-decoration-none text-dark mb-2"
              to="/"
            >
              Home
            </Link>
            <Link
              className="d-block text-decoration-none text-dark mb-2"
              to="/our-doctors"
            >
              Our Doctors
            </Link>
            <Link
              className="d-block text-decoration-none text-dark mb-2"
              to="/fix-appointement"
            >
              Fix Appointement
            </Link>
            <Link
              className="d-block text-decoration-none text-dark mb-2"
              to="/about-us"
            >
              About Us
            </Link>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
            <h3 className="mb-4">Our Departments</h3>
            <p>Dental Surgery</p>
            <p>Orthopaedic</p>
            <p>General Surgery</p>
            <p>Neurology</p>
            <p>Women's Care</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
            <h3 className="mb-4">Get In Touch</h3>
            <p>+880171 00 987256</p>
            <p>support@successmedicalcare.Com</p>
            <p>Tangail, Bangladesh</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footerwidget;

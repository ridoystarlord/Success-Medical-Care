import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bannerimg from "../../../images/banner-img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <Container fluid className="bg-banner pt-5">
      <Container>
        <Row className="g-4">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <h1 className="fw-bold banner-title mb-5">
                <span className="d-block banner-title-span">We take care</span>{" "}
                your healthy life
              </h1>
              <p>
                Better Care and Better Understanding. Empowering People to
                Improve Their Lives. Known for our expertise. Chosen for our
                care.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img className="img-fluid" src={bannerimg} alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;

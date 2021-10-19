import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Ourquality.css";
import doctor from "./../../../images/doctor.png";
import hours from "./../../../images/24-hours.png";
import emergency from "./../../../images/emergency.png";

const Ourquality = () => {
  return (
    <Container className="my-5">
      <h1 className="special-quality mb-5 text-center fw-bolder">
        Our <span>Special</span> Quality
      </h1>
      <Row className="g-3">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img width="50%" src={doctor} alt="" />
              </div>
              <Card.Title className="mt-3 text-center fw-bold">
                Qualified Doctors
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img width="50%" src={hours} alt="" />
              </div>
              <Card.Title className="mt-3 text-center fw-bold">
                24 Hours Service
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img width="50%" src={emergency} alt="" />
              </div>
              <Card.Title className="mt-3 text-center fw-bold">
                Need Emergency
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ourquality;

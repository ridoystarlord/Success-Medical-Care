import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faBone,
  faUserMd,
  faBrain,
  faCapsules,
  faFlask,
  faHeartbeat,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";
import "./Servicedepartment.css";

const Servicedepartment = () => {
  return (
    <Container className="my-3">
      <h1 className="specialist-department mb-5 text-center fw-bolder">
        Our <span>Specialist</span> Department For <span>Patients</span>
      </h1>
      <Row className="g-3">
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faTooth} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                Dental Sugery
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faBone} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                Orthopaedic
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faUserMd} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                General Surgery
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faBrain} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                Neurology
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faCapsules} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                Dermatology
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faFlask} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                Labrotory Testing
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faHeartbeat} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                Women's Care
              </Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mx-auto icon-background">
                <FontAwesomeIcon className="icon-size" icon={faProcedures} />
              </div>
              <Card.Title className="mt-3 text-center fw-bold service-department-title">
                CT Scan Service
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

export default Servicedepartment;

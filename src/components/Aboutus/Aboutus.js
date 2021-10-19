import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Aboutus.css";
import hospital from "../../images/hospital.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faUsers,
  faClipboardList,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const Aboutus = () => {
  return (
    <Container className="my-3">
      <img className="w-50 d-block mx-auto" src={hospital} alt="" />
      <h2 className="text-center mt-3 about-title fw-bolder">
        Quality <span>Healthcare</span> Starts With <span>Quality</span> Doctors
      </h2>
      <p>
        As any doctor can tell you, the most crucial step toward healing is
        having the ridiagnosis. If the disease is precisely identified, a good
        resolution is far more likely. Conversely, a bad diagnosis usually means
        a bad outcome, no matter how skilled the physician.
      </p>
      <Row xs={1} md={4} className="g-4 my-3">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="achivement-card rounded text-white p-5 text-center">
                <FontAwesomeIcon
                  className="achivement-icon mb-3"
                  icon={faStethoscope}
                />
                <h1>240</h1>
                <h5 className="mb-0">Quality Doctors</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="achivement-card rounded text-white p-5 text-center">
                <FontAwesomeIcon
                  className="achivement-icon mb-3"
                  icon={faUsers}
                />
                <h1>1450</h1>
                <h5 className="mb-0">Our Patients</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="achivement-card rounded text-white p-5 text-center">
                <FontAwesomeIcon
                  className="achivement-icon mb-3"
                  icon={faClipboardList}
                />
                <h1>1.1M</h1>
                <h5 className="mb-0">Medical Filled</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="achivement-card rounded text-white p-5 text-center">
                <FontAwesomeIcon
                  className="achivement-icon mb-3"
                  icon={faSmile}
                />
                <h1>2.3M</h1>
                <h5 className="mb-0">Happy Patient</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;

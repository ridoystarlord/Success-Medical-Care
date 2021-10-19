import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUserMd } from "@fortawesome/free-solid-svg-icons";
import "./Testdetails.css";

const Testdetails = () => {
  const { id } = useParams();
  const [test, setTest] = useState([]);
  const { name, price, description, img, report } = test;
  useEffect(() => {
    fetch("/servicespricing.json")
      .then((res) => res.json())
      .then((data) =>
        setTest(data.find((singleTest) => singleTest.key === id))
      );
  }, [id]);
  return (
    <Container className="my-5">
      <Row className="g-3">
        <Col xs="12" md={8}>
          <Card className="shadow-sm border-0 p-3">
            <Card.Img className="rounded" variant="top" src={img} />
            <Card.Body>
              <Card.Title className="fs-1">{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>
                <span className="fw-bold">Delivery Report:</span> {report}
              </Card.Text>
              <div>
                <h1 className="text-center test-price fw-bold">$ {price}</h1>
              </div>
            </Card.Body>
            <Card.Footer className="text-center border-0 test-details-footer">
              <Link to="/placeorder">
                <Button
                  className="view-details-btn border-0 rounded-pill px-5"
                  variant="success"
                >
                  Place Order
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs="12" md={4}>
          <Card className="shadow-sm mb-3">
            <Card.Body className="d-flex align-items-center ">
              <Card.Title>Dental Sugery</Card.Title>
              <FontAwesomeIcon className="ms-auto" icon={faChevronRight} />
            </Card.Body>
          </Card>
          <Card className="shadow-sm mb-3">
            <Card.Body className="d-flex align-items-center ">
              <Card.Title>Orthopaedic</Card.Title>
              <FontAwesomeIcon className="ms-auto" icon={faChevronRight} />
            </Card.Body>
          </Card>
          <Card className="shadow-sm mb-3">
            <Card.Body className="d-flex align-items-center ">
              <Card.Title>General Surgery</Card.Title>
              <FontAwesomeIcon className="ms-auto" icon={faChevronRight} />
            </Card.Body>
          </Card>
          <Card className="shadow-sm mb-3">
            <Card.Body className="d-flex align-items-center ">
              <Card.Title>Neurology</Card.Title>
              <FontAwesomeIcon className="ms-auto" icon={faChevronRight} />
            </Card.Body>
          </Card>
          <Card className="shadow-sm mb-3">
            <Card.Body className="d-flex align-items-center ">
              <Card.Title>Dermatology</Card.Title>
              <FontAwesomeIcon className="ms-auto" icon={faChevronRight} />
            </Card.Body>
          </Card>
          <Card className="shadow-sm mb-5">
            <Card.Body className="d-flex align-items-center ">
              <Card.Title>Labrotory Testing</Card.Title>
              <FontAwesomeIcon className="ms-auto" icon={faChevronRight} />
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="support-card rounded text-white p-5 text-center">
                <FontAwesomeIcon
                  className="support-icon mb-3"
                  icon={faUserMd}
                />
                <h1>Online Help</h1>
                <h2>24/7</h2>
                <h5 className="mb-0">+(123) 456-78-90</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testdetails;

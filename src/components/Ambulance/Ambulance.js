import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import img1 from "../../images/air-ambulence.jpg";
import img2 from "../../images/Fridzing-ambulence.jpg";
import img3 from "../../images/ambulence.jpg";

const Ambulance = () => {
  return (
    <Container className="my-5">
      <h1 className="specialist-department mb-5 text-center fw-bolder">
        Our <span>Ambulance</span> List
      </h1>
      <Row xs={1} md={3} className="g-4">
        <Col className="h-100">
          <Card className="h-100 shadow-sm p-2">
            <Card.Img
              className="rounded"
              height="250px"
              variant="top"
              src={img1}
            />
            <Card.Body className="px-0">
              <Card.Title className="text-center fw-bolder test-name">
                Air ambulence
              </Card.Title>
              <Card.Text>
                We also Provide Air Ambulance Service.We have OMNI Ambulance. It
                has help to go traffical areas.
              </Card.Text>
              <div>
                <h1 className="text-center test-price fw-bold">$ 1250</h1>
              </div>
            </Card.Body>
            <Card.Footer className="text-center border-0 test-details-footer">
              <Button
                className="view-details-btn border-0 rounded-pill px-5"
                variant="success"
              >
                Book Now
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="h-100">
          <Card className="h-100 shadow-sm p-2">
            <Card.Img
              className="rounded"
              height="250px"
              variant="top"
              src={img2}
            />
            <Card.Body className="px-0">
              <Card.Title className="text-center fw-bolder test-name">
                Fridzing Ambulence
              </Card.Title>
              <Card.Text>
                We also Provide Fridzing ambulence Service.We have OMNI
                Ambulance. It has help to go traffical areas.
              </Card.Text>
              <div>
                <h1 className="text-center test-price fw-bold">$ 750</h1>
              </div>
            </Card.Body>
            <Card.Footer className="text-center border-0 test-details-footer">
              <Button
                className="view-details-btn border-0 rounded-pill px-5"
                variant="success"
              >
                Book Now
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="h-100">
          <Card className="h-100 shadow-sm p-2">
            <Card.Img
              className="rounded"
              height="250px"
              variant="top"
              src={img3}
            />
            <Card.Body className="px-0">
              <Card.Title className="text-center fw-bolder test-name">
                Mini Ambulence
              </Card.Title>
              <Card.Text>
                We also Provide Mini Ambulance Service.We have OMNI Ambulance.
                It has help to go traffical areas.
              </Card.Text>
              <div>
                <h1 className="text-center test-price fw-bold">$ 250</h1>
              </div>
            </Card.Body>
            <Card.Footer className="text-center border-0 test-details-footer">
              <Button
                className="view-details-btn border-0 rounded-pill px-5"
                variant="success"
              >
                Book Now
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ambulance;

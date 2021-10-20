import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import img from "../../images/appointment.png";
import "./Fixappointment.css";

const Fixappointment = () => {
  const { user } = useAuth();
  return (
    <Container className="my-5">
      <h1 className="specialist-department mb-5 text-center fw-bolder">
        Make An <span>Appointement</span>
      </h1>
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div>
            <img src={img} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  defaultValue={user.displayName}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  defaultValue={user.email}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Number</Form.Label>
              <Form.Control placeholder="Enter Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Doctor</Form.Label>
              <Form.Control placeholder="Doctor Name" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Department</Form.Label>
                <Form.Control placeholder="Department" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  placeholder="Enter Message"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Row>

            <Button variant="success" type="submit">
              Submit Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Fixappointment;

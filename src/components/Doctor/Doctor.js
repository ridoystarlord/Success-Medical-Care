import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Doctor.css";

const Doctor = (props) => {
  const { name, specialist, img } = props.doctor;
  return (
    <div>
      <Col className="h-100">
        <Card className="h-100 shadow-sm p-2">
          <Card.Img
            className="rounded"
            height="250px"
            variant="top"
            src={img}
          />
          <Card.Body className="px-0">
            <Card.Title className="text-center fw-bolder doctor-name">
              {name}
            </Card.Title>
            <Card.Text className="text-center">
              <span className="fw-bold">Specialist:</span> {specialist}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center border-0 doctor-details-footer">
            <Button
              className="view-profile-btn border-0 rounded-pill "
              variant="success"
            >
              View Profile
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;

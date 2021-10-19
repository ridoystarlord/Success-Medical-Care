import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Singletest.css";

const Singletest = (props) => {
  const { key, name, price, description, img } = props.test;
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
            <Card.Title className="text-center fw-bolder test-name">
              {name}
            </Card.Title>
            <Card.Text>{description.slice(0, 100)}</Card.Text>
            <div>
              <h1 className="text-center test-price fw-bold">$ {price}</h1>
            </div>
          </Card.Body>
          <Card.Footer className="text-center border-0 test-details-footer">
            <Link to={`/testlist/${key}`}>
              <Button
                className="view-details-btn border-0 rounded-pill "
                variant="success"
              >
                View Details
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Singletest;

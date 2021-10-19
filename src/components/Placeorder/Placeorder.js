import React from "react";
import { Container } from "react-bootstrap";
import placeorder from "../../images/thumbs-up.gif";

const Placeorder = () => {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <img src={placeorder} alt="" />
    </Container>
  );
};

export default Placeorder;

import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfoundimg from "../../images/404.png";
import "./Notfound.css";

const Notfound = () => {
  return (
    <Container className=" my-5">
      <div className="d-flex justify-content-center">
        <img width="50%" src={notfoundimg} alt="" />
      </div>
      <Link className="mt-5 d-block text-center" to="/">
        <Button variant="success">Back to home</Button>
      </Link>
    </Container>
  );
};

export default Notfound;

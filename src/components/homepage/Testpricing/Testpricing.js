import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Singletest from "../Singletest/Singletest";
import "./Testpricing.css";

const Testpricing = () => {
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    fetch("./servicespricing.json")
      .then((res) => res.json())
      .then((data) => setTestList(data));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="test-pricing-title mb-5 fw-bolder text-center">
        Show Our Test <span>Pricing Plans</span>
      </h2>
      <Row xs={1} md={3} lg={4} className="g-4">
        {testList.map((test) => (
          <Singletest key={test.key} test={test}></Singletest>
        ))}
      </Row>
    </Container>
  );
};

export default Testpricing;

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import "./Ourdoctors.css";

const Ourdoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="doctors-list mb-5 fw-bolder text-center">
        Our Specialist <span>Doctors</span>
      </h2>
      <Row xs={1} md={3} lg={4} className="g-4">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
    </Container>
  );
};

export default Ourdoctors;

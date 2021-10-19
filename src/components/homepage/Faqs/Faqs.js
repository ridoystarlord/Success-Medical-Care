import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./Faqs.css";
import faq from "../../../images/faq.png";

const Faqs = () => {
  return (
    <Container className="my-5">
      <Row className="g-3">
        <h1 className="faq-title text-center fw-bolder mb-5">
          Frequently Asked <span>Questions</span>
        </h1>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div>
            <img className="img-fluid" src={faq} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is One Medical’s approach to prenatal services?
              </Accordion.Header>
              <Accordion.Body>
                Primary care addresses your health at every cycle of life,
                including pregnancy. Our providers will empower you with
                evidence-based knowledge each step of the way, provide thorough,
                individualized counseling throughout your pregnancy, and support
                a wide variety of approaches to pregnancy and childbirth,
                including natural options.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What is primary care?</Accordion.Header>
              <Accordion.Body>
                The term primary care refers to the kind of medical care you
                need first — before you get sick, before you need to see a
                specialist, before you need to go to a hospital. With an
                emphasis on family practice and internal medicine, as your
                primary care providers we at One Medical will address your
                essential health needs by:
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do I need to select a primary care provider (PCP)?
              </Accordion.Header>
              <Accordion.Body>
                Although we don’t require our members to pick a PCP, we strongly
                recommend finding a practitioner you feel comfortable with and
                who can collaborate with you on important decisions in order to
                coordinate and optimize your long-term care.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Does Success Medical Care offer urgent care?
              </Accordion.Header>
              <Accordion.Body>
                Success Medical Care providers can address a wide range of
                urgent and acute concerns. Because we offer same-day appointment
                availability and 24/7 access to our clinical team, we are a
                great option for urgent needs. If you have a concern after-hours
                or are unsure whether you should go straight to an urgent care
                facility or the nearest emergency room, please call our office
                to be connected with a member of the Success Medical Care team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What insurance plans do you accept?
              </Accordion.Header>
              <Accordion.Body>
                Success Medical Care accepts health plans from most insurance
                carriers as well as Medicare. Some of the more popular plans
                that we accept are listed on our Insurance page, but since the
                list periodically changes, we encourage you to call us if you
                don’t see your plan. We believe that quality health care should
                be accessible to everyone, so if you have a high-deductible
                health plan or are not insured, we also offer affordable options
                for working together.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faqs;

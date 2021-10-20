import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="fw-bolder fs-1 site-title">
            Success Medical Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold align-items-center">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ambulance">
                Book Ambulance
              </Nav.Link>
              <Nav.Link as={NavLink} to="/our-doctors">
                Our Doctors
              </Nav.Link>
              <Nav.Link as={NavLink} to="/fix-appointement">
                Fix Appointement
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                About Us
              </Nav.Link>
              {user.email
                ? [
                    <p key="namekey" className="mb-0 mx-3 mb-lg-0 mb-3">
                      {user.displayName}
                    </p>,
                    <Button
                      key="logoutkey"
                      onClick={logOut}
                      className="rounded-pill"
                      variant="success"
                    >
                      Logout
                    </Button>,
                  ]
                : [
                    <Nav.Link key="loginkey" as={NavLink} to="/login">
                      Login
                    </Nav.Link>,
                    <Nav.Link key="registerkey" as={NavLink} to="/register">
                      <Button className="rounded-pill" variant="success">
                        Register
                      </Button>
                    </Nav.Link>,
                  ]}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

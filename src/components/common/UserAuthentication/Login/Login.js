import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const {
    loginWithEmailAndPassword,
    readDatabase,
    signInUsingGoogle,
    setUser,
    setIsLoading,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        readDatabase(user, user.uid);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSignInBtnClick = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}></Col>
        <Col xs={12} md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="fs-1 mb-5 login-title text-center">
                Login
              </Card.Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                  <input
                    className="w-100 p-2"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </p>
                <p>
                  <input
                    placeholder="Password"
                    className="w-100 p-2"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">Password is required</span>
                  )}
                </p>
                <p className="text-center">
                  <input
                    className="bg-success rounded border-0 text-white p-2 w-100"
                    type="submit"
                    value="Login"
                  />
                </p>
              </form>
              <Link className="text-decoration-none" to="/register">
                <p className="text-center text-danger">Create an account?</p>
              </Link>
              <h2 className="text-center or">OR</h2>
              <div className="text-center mt-3">
                <Button
                  onClick={handleSignInBtnClick}
                  className="rounded-pill google-btn text-white border-0 px-5"
                >
                  Google Sign In
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Login;

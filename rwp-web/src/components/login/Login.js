import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

import "assets/css/index.css";

const Login = () => {
  return (
    <>
      <Container>
        <Row className="mt-lg-5 justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4 mt-lg-xl">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fas fa-user all_icons"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fas fa-lock all_icons"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Link to="/admin/product">
                          <Button color="primary" className="px-4">
                            Login
                          </Button>
                        </Link>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-dark bg-primary py-5 d-md-down-none mt-lg-xl">
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      You can sign up as an retailer in our system and start adding products. 
                    </p>
                    <Link to="/register">
                      <Button
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;

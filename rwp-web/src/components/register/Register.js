import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "assets/css/index.css";
const Register = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center register_row">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
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
                     <Input
                      type="text"
                      placeholder="Manufactrer Name"
                      autoComplete="manufactrername"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-envelope all_icons"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-lock all_icons"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
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
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <Link to="/login">
                    <Button color="primary" block>
                      Create Account
                    </Button>
                  </Link>

                  <Row>
                    <Col xs="8">
                      <h5 className="h5_already_account">Already Have an Account?</h5>
                    </Col>
                    <Col xs="4">
                      <Link to="/login">
                        <Button color="link" className="px-0">Login Here</Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="p-4">
                <Row>
                  <Col xs="12" sm="6">
                    <Button color="info" block>
                      <span>facebook</span>
                    </Button>
                  </Col>
                  <Col xs="12" sm="6">
                    <Button color="info" block>
                      <span>twitter</span>
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;

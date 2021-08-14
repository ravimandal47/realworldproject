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
                    <Input
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Email"
                      autoComplete="email" 
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <Link to='/login'>
                  <Button color="primary" block>
                    Create Account
                  </Button>
                  </Link>

                  <Row>
                    <Col xs="8">
                      <h5 className="mt-2">Already Have an Account?</h5>
                    </Col>
                    <Col xs="4">
                      <Link to="/login">
                        <Button color="link">Login Here</Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="p-4">
                <Row>
                  <Col xs="12" sm="6">
                    <Button className="btn-facebook mb-1" color="info" block>
                      <span>facebook</span>
                    </Button>
                  </Col>
                  <Col xs="12" sm="6">
                    <Button className="btn-twitter mb-1" color="info" block>
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

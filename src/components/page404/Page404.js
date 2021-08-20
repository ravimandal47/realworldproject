import React from "react";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

const Page404 = () => {
  return (
    <div>
      <Container className="page_404_center">
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-muted float-left">
                The page you are looking for was not found.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
          <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i class="fas fa-search all_icons"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="text" placeholder="What are you looking for?" />
            </InputGroup>
            
          </Col>
          <Col md="2" className="ml-n4 mt-n1"> 
          <Button color="primary" className="search-btn">Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page404;

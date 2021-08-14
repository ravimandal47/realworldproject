import React from 'react'
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap'


const Page404 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{'\''}re lost.</h4>
              <p className="text-muted float-left">The page you are looking for was not found.</p>
            </div>
            <InputGroup className="input-prepend">
              <InputGroupAddon>
                <InputGroupText>
                 
                </InputGroupText>
              </InputGroupAddon>
              <Input size="16" type="text" placeholder="What are you looking for?" />
              <InputGroupAddon>
                <Button color="info">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page404; 

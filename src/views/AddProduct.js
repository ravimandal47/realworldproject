import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import "assets/css/index.css";

function AddProduct() {
  return (
    <>
      <div className="content">
        <Row >
          <Col md="12">
            <Card>
              <CardHeader>
                <h3 className="title">Product Details</h3>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                         
                          placeholder="Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col  md="6">
                      <FormGroup>
                        <label>Category</label>
                        <Input
                          placeholder="Category"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label className="pr-md-1">Price</label>
                        <Input
                          placeholder="Price"
                          type="text" 
                        />
                      </FormGroup>
                    </Col>

                    <Col  md="6">
                      <FormGroup>
                        <label>Serial Number</label>
                        <Input
                         
                          placeholder="Serial Number"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                   
                    <Col md="12">
                    <label>Qr Code</label>
                      <FormGroup>
                        
                       <img src="https://duckduckgo.com/i/87701897.png" alt="" width="10%" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                    
                        <label for="file">Image</label>
                     
                        {/* <Input type="file"  /> */}
                        <Input type="file" id="file" accept="image/*" />

                      
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="mx-auto">
              <Row>
                <Col xs="12" sm="6">
                <Button color="primary" type="submit" block>
                  Save
                </Button>
                </Col>
                <Col xs="12" sm="6">
                <Button  color="primary" type="submit" block>
                  Print
                </Button>
                </Col>
              </Row> 
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default AddProduct;
 
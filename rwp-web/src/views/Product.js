import React from "react";
import {Link} from 'react-router-dom' 
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,Button, Form,FormGroup, Input, CardFooter
} from "reactstrap";

function Tables() {

  return (
    <>
  
      <div className="content">
       {/* manufacturer product details */}
        <Row>
          <Col md="12">
            <Card>
            <CardHeader>
              <Link to="/admin/addproduct">
              <Button color="info" block>Add Product</Button>
              </Link>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">All Product Details</CardTitle>
              </CardHeader>
              
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>Ready To Ship</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td >Shipped To Retailer</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td >Sold To Customer</td>
                    </tr>  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

         {/* retailer product details */}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h3 className="title">All Product Details</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label>Manufacturer</label>
                        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col  md="12">
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
                  <Col  md="12">
                      <FormGroup>
                        <label>Status</label>
                        <Input type="select" name="select" id="exampleSelect">
          <option>Ready To Ship</option>
          <option>Shipped To Retailer</option>
          <option>Sold To Customer</option>
        
        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                 
                 
                 
                </Form>
              </CardBody>
              <CardFooter className="mx-auto">
              <Row>
                <Col>
                <Button color="primary" type="submit" block>
                  Save
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

export default Tables;

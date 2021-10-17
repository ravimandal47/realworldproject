import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, Button, Form, FormGroup, Input, CardFooter
} from "reactstrap";

function Tables() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3010/getProducts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
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
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Manufacturer Name</th>
                        <th>Serial Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {items.map(item => (
                        <tr key={item.Id}>
                        <td>{item.Id}</td>
                        <td>{item.ProductName}</td>
                        <td>NPR {item.Price}</td>
                        <td>{item.Name}</td>
                        <td>{item.SerialCode}</td>
                      </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* retailer product details
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
          
        </Row> */}
        </div>

      </>
    );
  }
}

export default Tables;

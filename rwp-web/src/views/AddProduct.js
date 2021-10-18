import React, { useState } from "react";

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

function AddProduct(props) {
  const [product, setProduct] = useState({})
  const [qrCode, setQRCode] = useState('')

  const submit = e => {
    e.preventDefault()
    fetch('http://localhost:3010/addProducts', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setQRCode(json.qrcode))
  }
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
                  <Form onSubmit={submit}>

                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Name</label>
                          <Input

                            placeholder="Name"
                            type="text"
                            value={product.productName}
                            onChange={e => setProduct({ ...product, productName: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
      
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label className="pr-md-1">Price</label>
                          <Input
                            placeholder="Price"
                            type="number"
                            value={product.price}
                            onChange={e => setProduct({ ...product, price: e.target.value })}
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>
                          <label>Serial Number</label>
                          <Input

                            placeholder="Serial Number"
                            type="text" 
                            value={product.serialCode}
                            onChange={e => setProduct({ ...product, serialCode: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col md="12">
                   <label>QR Code</label>
                     <FormGroup>
                       
                      <img src={qrCode} alt=""  />
                     </FormGroup>
                   </Col>
                    <Col xs="4" sm="1">
                      <Button color="primary" type="submit" block>
                        Save
                      </Button>
                    </Col>
                    <Row>
                   
                   
                 </Row>
                  </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </div>
    </>
  );
}

export default AddProduct;

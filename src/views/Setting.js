import React from "react";
import {Link} from 'react-router-dom' 
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,Button
} from "reactstrap";

function Setting() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
            <CardHeader>
              <Link to="/admin/addcategory">
              <Button color="info" block>Add Category</Button>
              </Link>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">All Category Details</CardTitle>
              </CardHeader>
              
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th >Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td >$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td >$23,789</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Setting;

import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "reactstrap";
//import "../assets/style/style.css";
//import "bootstrap/dist/css/bootstrap.min.css";

export class OurMission extends Component {
  render() {
    return (
      <div>
        <Container className="d-flex justify-content-center pt-5 pb-5">
          <Row>
            <Col lg="12" className="d-flex justify-content-center pt-4">
              <h4>
                Eliminate costly human errors with our Ecommerce Saas Platform
              </h4>
            </Col>
            <Col lg="12" className="d-flex justify-content-center p-4">
              <h4>Download data in both .pdf and excel formats.</h4>
            </Col>
            <Col lg="12" className="d-flex justify-content-center">
              <Button color="primary">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurMission;

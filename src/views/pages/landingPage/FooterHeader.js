import React, { Component } from "react";
import { Row, Input, Container, InputGroup, Button } from "reactstrap";

export class FooterHeader extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="p-3" style={{ background: "#1877f2" }}>
          <div className="col-sm-5" style={{ padding: "6px" }}>
            <h2 style={{ color: "white" }}>Get Started With Newsletter</h2>
            <p style={{ padding: "3px", margin: "7px", color: "white" }}>
              Get Started With Newsletter Get Started With Newsletter.
            </p>
          </div>
          <div className="col-sm-2" style={{ padding: "6px" }}></div>
          <div className="col-sm-5" style={{ padding: "10px" }}>
            <InputGroup>
              <Input type="search" id="gsearch" name="gsearch" />
              <Button color="primary" style={{ background: "black" }}>
                SUBSCRIBE
              </Button>
            </InputGroup>
            <p style={{ padding: "3px", margin: "7px", color: "white" }}>
              Get Started With Newsletter Get Started With.
            </p>
          </div>
        </Row>
      </Container>
    );
  }
}

export default FooterHeader;

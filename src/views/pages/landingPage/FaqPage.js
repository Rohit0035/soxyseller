import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "../../../components/reactstrap/collapse/Accordion";
import Footer from "./Footer";
export class FaqPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Accordion open="1" toggle={function noRefCheck() {}}>
            <Accordion targetId="2"></Accordion>
            <Accordion targetId="3"></Accordion>
          </Accordion>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default FaqPage;

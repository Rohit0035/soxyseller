import React, { Component } from "react";
import Store from "../../../assets/img/store/store.jpg";
import { Button, Container, Form } from "reactstrap";
import "../../../assets/scss/pages/users.scss";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import { history } from "../../../history";

export class AddStorePage extends Component {
  render() {
    return (
      <div>
        <Form className="m-1">
          <Container className="mb-0">
            <img src={Store} className="photo" alt="A store" />
          </Container>
          <Container className="d-flex justify-content-center">
            <Button
              color="primary"
              className="mr-1 mb-1"
              onClick={() => history.push("/app/myStore/addMyStore")}
            >
              Add Store
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}
export default AddStorePage;

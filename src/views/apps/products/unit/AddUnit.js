import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      units_title: "",
      value: "",
      sortorder: "",
      desc: "",
      status: "",
    };
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axiosConfig
      .post("/addunits", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/products/unit/unitList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Unit
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/products/unit/unitList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Unit Title</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Unit Title"
                      name="units_title"
                      value={this.state.units_title}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Value</Label>
                    <Input
                      required
                      type="number"
                      placeholder="Value"
                      name="value"
                      value={this.state.value}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Sort Order</Label>
                    <Input
                      required
                      type="number"
                      placeholder="Sort Order"
                      name="sortorder"
                      value={this.state.sortorder}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      required
                      type="textarea"
                      placeholder="Description"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Inactive"
                      />
                      <span style={{ marginRight: "3px" }}>Inactive</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="danger"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Unit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddUnit;

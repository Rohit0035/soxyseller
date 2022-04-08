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
import "react-toastify/dist/ReactToastify.css";

export class EditUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      units_title: "",
      value: "",
      desc: "",
      sortorder: "",
      status: "",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewoneunits/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          units_title: response.data.data.units_title,
          desc: response.data.data.desc,
          sortorder: response.data.data.sortorder,
          value: response.data.data.value,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.props.match.params , this.state);
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/editunits/${id}`, this.state, {
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
                Edit
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
                      type="number"
                      placeholder="5"
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
                  Update Unit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditUnit;

import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

export default class AddWarehouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warehousename: "",
      email: "",
      phone_no: "",
      address1: "",
      address2: "",
      city: "",
      pin: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/addwarehouse", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/warehouse/warehouseList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/warehouse/warehouseList" tag="a">
                  Warehouse List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Warehouse</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Warehouse
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/warehouse/warehouseList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>WareHouse Name</Label>
                  <Input
                    required
                    type="text"
                    name="warehousename"
                    placeholder="Enter Name"
                    value={this.state.warehousename}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Phone Number</Label>
                  <Input
                    required
                    type="number"
                    name="phone_no"
                    placeholder="Enter Phone No."
                    value={this.state.phone_no}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address Line 1</Label>
                  <Input
                    required
                    type="textarea"
                    name="address1"
                    placeholder="Enter Address Line 1"
                    value={this.state.address1}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address Line 2</Label>
                  <Input
                    required
                    type="textarea"
                    name="address2"
                    placeholder="Enter Address Line 2"
                    value={this.state.address2}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>City</Label>
                  <Input
                    required
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={this.state.city}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>PinCode</Label>
                  <Input
                    required
                    type="number"
                    name="pin"
                    placeholder="Enter Pin Code"
                    value={this.state.pin}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

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
import swal from "sweetalert";

export class AddSupplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
      company: "",
      address_one: "",
      address_two: "",
      state: "",
      city: "",
      postcode: "",
      gst_no: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/addsupplier", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/contactUs/supplier/supplierList");
      })
      .catch((error) => {
        swal("Error!", "Error Received", "error");
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
                Add New Supplier
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/contactUs/supplier/supplierList")
                }
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
                    <Label>FirstName</Label>
                    <Input
                      required
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>LastName</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Supplier Email</Label>
                    <Input
                      required
                      type="email"
                      placeholder="Supplier Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      required
                      type="number"
                      placeholder="Phone Number"
                      name="phone_no"
                      value={this.state.phone_no}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Company</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Company"
                      name="company"
                      value={this.state.company}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Address 1</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Address 1"
                      name="address_one"
                      value={this.state.address_one}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Address 2</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Address 2"
                      name="address_two"
                      value={this.state.address_two}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>State</Label>
                    <Input
                      required
                      type="text"
                      placeholder="State"
                      name="state"
                      value={this.state.state}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      required
                      type="text"
                      placeholder="City"
                      name="city"
                      value={this.state.city}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Post Code</Label>
                    <Input
                      required
                      type="number"
                      placeholder="Post Code"
                      name="postcode"
                      value={this.state.postcode}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>GST Number</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Gst Number"
                      name="gst_no"
                      value={this.state.gst_no}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="danger"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Supplier
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddSupplier;

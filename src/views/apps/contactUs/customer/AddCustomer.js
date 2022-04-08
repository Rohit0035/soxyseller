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
  CustomInput,
  FormGroup,
} from "reactstrap";
import { history } from "../../../../history";
import axios from "axios";
import swal from "sweetalert";

export class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      cnfrmPassword: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler2 = (e) => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://35.154.86.59/api/user/addcustomerbyseller", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/contactUs/customer/customerList");
      })
      .catch((error) => {
        console.log(error);
        swal("Error!", "Error Received", "error");
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Customer
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/contactUs/customer/customerList")
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
                      name="firstname"
                      value={this.state.firstname}
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
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Customer Email</Label>
                    <Input
                      required
                      type="email"
                      placeholder="Customer Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number</Label>
                    <Input
                      required
                      type="number"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.changeHandler2}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Confirm Password</Label>
                    <Input
                      required
                      type="password"
                      placeholder=" Confirm Password"
                      name="cnfrmPassword"
                      value={this.state.cnfrmPassword}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Add Customer
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddCustomer;

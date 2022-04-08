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
import axios from "axios";

export class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      // password: "",
      // cnfrmPassword: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://35.154.86.59/api/user/getonecusByseller/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          // password: response.data.data.password,
          // cnfrmPassword: response.data.data.cnfrmPassword,
        });
      })
      .catch((error) => {
        console.log(error.response);
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
    let { id } = this.props.match.params;
    axios
      .post(
        `http://35.154.86.59/api/user/editcustomerbyseller/${id}`,
        this.state,
        {
          headers: {
            "auth-adtoken": localStorage.getItem("auth-adtoken"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        swal("Success!", "Updated SuccessFull!", "success");
        this.props.history.push("/app/contactUs/customer/customerList");
      })
      .catch((error) => {
        swal("Error!", "Error Received", "error");
        console.log(error.response);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Customer
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
                      type="number"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.changeHandler2}
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

export default EditCustomer;

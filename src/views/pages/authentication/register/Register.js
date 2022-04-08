import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardHeader,
  Card,
  Col,
  Row,
  Container,
} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import glogo from "../../../../assets/img/pages/glogo.png";
import axios from "axios";
import { history } from "../../../../history";
import swal from "sweetalert";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      cnfrm_password: "",
      otp: true,
      otpnumber: "",
      token: "",
    };
  }

  otpHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("http://35.154.86.59/api/admin/verifyOtp", {
        mobile: this.state.mobile,
        otp: this.state.otpnumber,
      })

      .then((response) => {
        console.log(response);

        localStorage.setItem("auth-adtoken", this.state.token);
        this.props.history.push(`/app/myStore/addStorePage`);
      })
      .catch((error) => {
        console.log(error.status);
        console.log(error.response);
      });
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  // otp = true;
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    this.setState({ otp: false });
    axios
      .post("http://35.154.86.59/api/admin/signup", this.state)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "hasSubscribed",
          response.data.user?.hasSubscribed
        );
        this.setState({
          token: response.data.token,
        });
        if (
          response.data.msg != "Already Exists" &&
          response.data.msg !== "Already Exists" &&
          response.data.msg != undefined
        ) {
          axios
            .post("http://35.154.86.59/api/admin/sendOtp", {
              mobile: this.state.mobile,
            })
            .then((response) => {
              console.log(response);
              // localStorage.setItem("token", response.data.token);
              // this.props.history.push("/");
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (
          error.response.data.msg == "Already Exists" &&
          error.response.data.msg === "Already Exists"
        ) {
          this.props.history.push("/pages/login");
          swal("Error!", "Email / Number Already Exists", "error");
        }
      });

    // axios
    //   .post("http://35.154.86.59/api/admin/sendOtp", {
    //     mobile: this.state.mobile,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // localStorage.setItem("token", response.data.token);
    //     // this.props.history.push("/");
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };

  render() {
    return (
      <Container>
        {this.state.otp ? (
          <Row className="m-0 justify-content-center">
            <Col
              sm="8"
              xl="7"
              lg="10"
              md="8"
              className="d-flex justify-content-center"
            >
              <Col lg="8" md="12" className="p-1">
                <Card className="rounded-0  px-2 pb-3 login-tabs-container">
                  <CardHeader className="pb-1 justify-content-center">
                    <img src={glogo} class="img-fluid" alt="..." />
                    {/* <img src={glogo} alt="glogo" /> */}
                    <br />
                  </CardHeader>
                  <Form onSubmit={this.submitHandler}>
                    <Label>Seller Name</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="text"
                        placeholder="Seller Name"
                        required
                        name="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <Label>Email</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="email"
                        placeholder="E-mail"
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <Label>Mobile No.</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="number"
                        placeholder="Mobile No."
                        required
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.changeHandler}
                      />
                      <Label>Status</Label>
                    </FormGroup>
                    <Label>Password</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <Label>Confirm Password</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        name="cnfrm_password"
                        value={this.state.cnfrm_password}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>

                    <div className="d-flex justify-content-between">
                      <Button.Ripple
                        color="primary"
                        outline
                        onClick={() => {
                          history.push("/pages/login");
                        }}
                      >
                        Login
                      </Button.Ripple>
                      <Button.Ripple color="primary" type="submit">
                        Register
                      </Button.Ripple>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Col>
          </Row>
        ) : (
          <Row className="m-0 justify-content-center">
            <Col
              sm="8"
              xl="7"
              lg="10"
              md="8"
              className="d-flex justify-content-center"
            >
              <Col lg="8" md="12" className="p-1">
                <Card className="rounded-0  px-2 pb-3 login-tabs-container">
                  <CardHeader className="pb-1 justify-content-center">
                    <img src={glogo} class="img-fluid" alt="..." />
                    {/* <img src={glogo} alt="glogo" /> */}
                    <br />
                  </CardHeader>
                  <Form onSubmit={this.otpHandler}>
                    <Label>Enter OTP</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="number"
                        name="otpnumber"
                        placeholder="OTP No"
                        value={this.state.otpnumber}
                        onChange={this.handlechange}
                      />
                    </FormGroup>

                    <div className="d-flex justify-content-between">
                      <Button.Ripple color="primary" type="submit">
                        Verify
                      </Button.Ripple>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default Register;

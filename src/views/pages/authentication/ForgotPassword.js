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
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import glogo from "../../../assets/img/pages/glogo.png";
import axios from "axios";
import { history } from "../../../history";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: "",
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
        //localStorage.setItem("user", response.data.data._id);
        //localStorage.setItem("auth-adtoken", this.state.token || "null");
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
    // axios
    //   .post("http://35.154.86.59/api/admin/signup", this.state)
    //   .then((response) => {
    //     console.log(response);
    //     // localStorage.setItem("token", response.data.token);
    //     this.setState({
    //       "auth-adtoken": response.data.token,
    //     });
    //     //this.props.history.push("/");
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });

    axios
      .post("http://35.154.86.59/api/admin/sendotp", {
        email: this.state.email,
      })
      .then((response) => {
        console.log(response);
        // localStorage.setItem("token", response.data.token);
        // this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
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
                    </FormGroup>
                    {/* <Label>Mobile No.</Label>
                    <FormGroup className="form-label-group">
                      <Input
                        type="number"
                        placeholder="Mobile No."
                        required
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.changeHandler}
                      /> 
                      
                    </FormGroup>*/}
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
                        Submit
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

export default ForgotPassword;

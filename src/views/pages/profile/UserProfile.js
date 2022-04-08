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
  CustomInput,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import img from "../../../assets/img/portrait/small/avatar-s-11.jpg";

export class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      cnfrm_password: "",
      image: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  componentDidMount() {
    axiosConfig
      .get(`/getoneseller`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.data.data.name,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          password: response.data.data.password,
          cnfrm_password: response.data.data.cnfrm_password,
          image: response.data.data.image,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("cnfrm_password", this.state.cnfrm_password);
    data.append("mobile", this.state.mobile);
    if (this.state.selectedFile !== null) {
      data.append("image", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    axiosConfig
      .post("/editseller", data, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        //this.props.history.push("/analyticsDashboard");
      })
      .catch((error) => {
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
                Edit Profile
              </h1>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="4" md="6">
                  <img
                    src={this.state.image || img}
                    className="rounded mb-3"
                    height="240"
                    width="240"
                    alt="avatar"
                  />
                  <FormGroup>
                    <Label>User Image</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>
                <Col lg="8" md="6" sm="12">
                  <Col lg="12" md="6">
                    <FormGroup>
                      <Label>Name</Label>
                      <Input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="12" md="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="6">
                    <FormGroup>
                      <Label>Password</Label>
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="6">
                    <FormGroup>
                      <Label>Confirm Password</Label>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        name="cnfrm_password"
                        value={this.state.cnfrm_password}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="12" md="6">
                    <FormGroup>
                      <Label>Mobile</Label>
                      <Input
                        type="number"
                        placeholder="Mobile No."
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                </Col>

                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Brand Image / Logo</Label>
                    <Input type="file" onChange={this.onChangeHandler} />
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
                </Col> */}
              </Row>
              <Row>
                <Button.Ripple
                  color="danger"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Update
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserProfile;

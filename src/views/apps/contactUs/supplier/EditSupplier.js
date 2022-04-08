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

export class EditSupplier extends Component {
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

  componentDidMount() {
    //console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonesupplier/${id}`,{
        headers:{
          "auth-adtoken" :localStorage.getItem("auth-adtoken")
        }
      })
      .then((response) => {
        console.log(response);
        this.setState({
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          email: response.data.data.email,
          phone_no: response.data.data.phone_no,
          company: response.data.data.company,
          address_one: response.data.data.address_one,
          address_two: response.data.data.address_two,
          state: response.data.data.state,
          city: response.data.data.city,
          gst_no: response.data.data.gst_no,
          postcode: response.data.data.postcode,
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    //console.log(this.props.match.params, this.state);

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/edit_supplier/${id}`, this.state,{
        headers:{
          "auth-adtoken" : localStorage.getItem("auth-adtoken")
        }
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Updated SuccessFull!", "success");
        this.props.history.push("/app/contactUs/supplier/supplierList");
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
                Edit Supplier
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
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Update Supplier
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditSupplier;

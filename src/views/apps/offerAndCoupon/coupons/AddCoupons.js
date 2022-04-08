import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";

export class AddCoupons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coupon_title: "",
      offer_code: "",
      product: "",
      description: "",
      startDate: "",
      expireOn: "",
      amount: "",
      status: "",
    };
    this.state = {
      productS: [],
    };
  }

  async componentDidMount() {
    //Product List
    axiosConfig
      .get("/productbysellerbytoken", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ productS: response.data.data });
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

    axiosConfig
      .post("/addcoupon", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/offerAndCoupon/coupons/couponsList");
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
                Add Coupons
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/offerAndCoupon/coupons/couponsList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label>Coupon Title </Label>
                  <Input
                    required
                    type="text"
                    name="coupon_title"
                    value={this.state.coupon_title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Offer Code </Label>
                  <Input
                    required
                    type="text"
                    name="offer_code"
                    placeholder="Offer Code"
                    value={this.state.offer_code}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Product </Label>
                  <CustomInput
                    required
                    type="select"
                    name="product"
                    value={this.state.product}
                    onChange={this.changeHandler}
                  >
                    <option>Select Product</option>
                    {this.state.productS.map((productH) => (
                      <option key={productH._id} value={productH._id}>
                        {productH.product_name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Description </Label>
                  <Input
                    required
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label> Coupon Start Date</Label>
                  <Input
                    required
                    type="date"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Coupon Expire date </Label>
                  <Input
                    required
                    type="date"
                    name="expireOn"
                    value={this.state.expireOn}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Amount </Label>
                  <Input
                    required
                    type="text"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2 ">
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
                    <span
                      className="font-weight-bolder"
                      style={{ marginRight: "20px" }}
                    >
                      Active
                    </span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span
                      className="font-weight-bolder"
                      style={{ marginRight: "3px" }}
                    >
                      Inactive
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Coupon
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddCoupons;

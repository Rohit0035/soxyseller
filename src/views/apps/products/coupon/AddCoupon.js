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
} from "reactstrap";
import { history } from "../../../../history";
//import axiosConfig from "../../../../../axiosConfig";

export class AddCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_title: "",
      product_img: "",
      selectedFile: null,
      selectedName: "",
    };
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
    data.append("product_title", this.state.product_title);
    if (this.state.selectedFile !== null) {
      data.append(
        "product_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }

    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    // axiosConfig
    //   .post("/add_Img", data)
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push("/app/admin/website/websiteProduct/websiteProImg");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Coupon
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/admin/products/coupon/coupon")
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
                  <Label>Coupon Code </Label>
                  <Input
                    type="text"
                    name="product_title"
                    value={this.state.product_title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Discount Type </Label>
                  <Input
                    type="text"
                    name="product_title"
                    value={this.state.product_title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Amount</Label>
                  <Input
                    type="text"
                    name="product_title"
                    value={this.state.product_title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    name="product_title"
                    value={this.state.product_title}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
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

export default AddCoupon;

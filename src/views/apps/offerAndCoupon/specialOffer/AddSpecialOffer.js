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
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";

export class AddSpecialOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offerTitle: "",
      product: "",
      percentageOff: "",
      sortorder: "",
      status: "",
    };
    this.state = {
      productS: [],
    };
  }

  async componentDidMount() {
    //Product Category
    axiosConfig
      .get("/getproduct")
      .then(response => {
        console.log(response);
        this.setState({ productS: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();

    axiosConfig
      .post("/addOffer", this.state)
      .then(response => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(
          "/app/offerAndCoupon/specialOffer/specialOfferList"
        );
      })
      .catch(error => {
        swal("Error!", "Error Received", "error");
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
                <BreadcrumbItem
                  href="/app/offerAndCoupon/specialOffer/specialOfferList"
                  tag="a"
                >
                  Offers List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Offer</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Offer
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push(
                    "/app/offerAndCoupon/specialOffer/specialOfferList"
                  )
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
                  <Label>Offer Title</Label>
                  <Input
                    type="text"
                    name="offerTitle"
                    value={this.state.offerTitle}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Offer On Product</Label>
                  <CustomInput
                    type="select"
                    placeholder="Link By..."
                    name="product"
                    value={this.state.product}
                    onChange={this.changeHandler}
                  >
                    <option>Select Product.......</option>
                    {this.state.productS.map(productList => (
                      <option key={productList._id} value={productList._id}>
                        {productList.product_name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Percentage Off</Label>
                  <Input
                    type="text"
                    name="percentageOff"
                    value={this.state.percentageOff}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Sort Order</Label>
                  <Input
                    type="number"
                    name="sortorder"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={e => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span className="mr-2 font-weight-bold">Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span className="mr-2 font-weight-bold">Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Special Offer
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddSpecialOffer;

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

export class EditOffers extends Component {
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
      productL: [],
    };
  }

  async componentDidMount() {
    //Product List
    axiosConfig
      .get("/getproduct")
      .then(response => {
        console.log(response.data.data);
        this.setState({ productL: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewoneoffer/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          offerTitle: response.data.data.offerTitle,
          product: response.data.data.product,
          percentageOff: response.data.data.percentageOff,
          sortorder: response.data.data.sortorder,
          status: response.data.data.status,
        });
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
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/edit_offer/${id}`, this.state)
      .then(response => {
        console.log(response);
        console.log(this.state);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(
          "/app/offerAndCoupon/specialOffer/specialOfferList"
        );
      })
      .catch(error => {
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
                <BreadcrumbItem active>Edit Offer</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Offer
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
                    {this.state.productL.map(productName => (
                      <option key={productName._id} value={productName._id}>
                        {productName.product_name}
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
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditOffers;

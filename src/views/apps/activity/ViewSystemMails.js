import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
// import {
//   Truck,
//   DollarSign,
//   ShoppingCart,
//   Heart,
//   Facebook,
//   Twitter,
//   Youtube,
//   Instagram,
// } from "react-feather";

//import classnames from "classnames";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";

class ViewSystemMails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewoneproduct/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
        console.log(response.data.data.rate[0].rate);
        //console.log(this.state.rate[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // state = {
  //   selectedColor: 1,
  // };
  // toggleSelectedColor = (color) => this.setState({ selectedColor: color });
  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                System Mails Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/products/productsList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data.product_img}
                  alt="Google Home"
                  height="250"
                  width="250"
                />
              </Col>
              <Col md="7" sm="12">
                <h3>{this.state.data.item_name}</h3>
                <h6 className="">by {this.state.data.brand?.name}</h6>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">
                    {/* {this.state.data?.rate[0]?.rate} */}
                  </h3>
                </div>
                <hr />
                <h4>Short Description </h4>
                <h6>{this.state.data.short_desc}</h6>
                <hr />
                <h4>Product Description </h4>
                <h6>{this.state.data.desc}</h6>
                <hr />
                <h4>Product Code</h4>
                <h6>{this.state.data.code}</h6>
                <hr />
                <h4>HSN Code</h4>
                <h6>{this.state.data.hsn_code}</h6>
                <hr />
                <h4>Brand</h4>
                <h6>{this.state.data.brand?.name}</h6>
                <hr />
                <h4>Product Category</h4>
                <h6>{this.state.data.productcategory?.name}</h6>
                <hr />
                <h4>Product Sub Category </h4>
                <h6>{this.state.data.productsubcategory?.name}</h6>
                <hr />
                <h4>Stock Quantity </h4>
                <h6>{this.state.data.stock_qty}</h6>
                <hr />
                <h4>Size</h4>
                <h6>{this.state.data.size}</h6>
                <hr />
                <h4>Color </h4>
                <h6>{this.state.data.colour}</h6>
                <hr />
                <h4>Material </h4>
                <h6>{this.state.data.material}</h6>
                <hr />
                <h4>BarCode </h4>
                <h6>{this.state.data.barcode}</h6>
                <hr />
                {/* <h4>Colors</h4>
                <div
                  className={classnames(
                    "color-radio color-radio-primary mr-50",
                    {
                      selected: this.state.selectedColor === 1,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(1)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames(
                    "color-radio color-radio-success mr-50",
                    {
                      selected: this.state.selectedColor === 2,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(2)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames(
                    "color-radio color-radio-danger mr-50",
                    {
                      selected: this.state.selectedColor === 3,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(3)}
                >
                  <div className="radio-content"></div>
                </div>{" "}
                <div
                  className={classnames("color-radio color-radio-info mr-50", {
                    selected: this.state.selectedColor === 4,
                  })}
                  onClick={() => this.toggleSelectedColor(4)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames(
                    "color-radio color-radio-warning mr-50",
                    {
                      selected: this.state.selectedColor === 5,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(5)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames("color-radio color-radio-dark", {
                    selected: this.state.selectedColor === 6,
                  })}
                  onClick={() => this.toggleSelectedColor(6)}
                >
                  <div className="radio-content"></div>
                </div>
                <hr /> */}
                <h6 className="my-50">
                  <span>Available</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">In Stock</span>
                </h6>
                {/* <div className="action-btns">
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    <ShoppingCart size={15} />
                    <span className="align-middle ml-50">ADD TO CART</span>
                  </Button.Ripple>
                  <Button.Ripple className="mb-1" color="danger" outline>
                    <Heart size={15} />
                    <span className="align-middle ml-50">WISHLIST</span>
                  </Button.Ripple>
                </div> */}
                {/* <div className="d-flex flex-wrap social-media-btns">
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="primary"
                    outline
                  >
                    <Facebook size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="info"
                    outline
                  >
                    <Twitter size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="danger"
                    outline
                  >
                    <Youtube size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    color="primary"
                    outline
                  >
                    <Instagram size={15} />
                  </Button.Ripple>
                </div> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewSystemMails;
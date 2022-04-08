import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import { history } from "../../../../history";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../../axiosConfig";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "../../../../assets/scss/plugins/extensions/swiper.scss";
import Carousel from "react-elastic-carousel";

const params = {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
class ViewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getoneproduct/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
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
                Product Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/products/product/productsList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            <Card>
              <div>
                <Carousel>
                  {this.state.data?.product_img?.map((i) => (
                    <img
                      className="border-black m-0"
                      src={i}
                      alt="user avatar"
                      height="400"
                    />
                  ))}
                </Carousel>
              </div>
            </Card>
            <Row className="mb-5 mt-2">
              {/* <Col lg="5">
                <Card>
                   <CardBody>
                    <Swiper {...params}>
                      <div>
                        {this.state.data.product_img?.map((i) => (
                          <img
                            src={i}
                            alt="Google Home"
                            height="350"
                            width="350"
                          />
                        ))}
                      </div>
                    </Swiper>
                  </CardBody> 
                </Card>
              </Col> */}
              {/* <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data.product_img?.[0]}
                  alt="Google Home"
                  height="300"
                  width="250"
                />
              </Col> */}

              <Col md="7" sm="12">
                <h4>Product Name</h4>
                <h6>{this.state.data.product_name}</h6>
                <hr />
                <h4>Cost Price</h4>
                <h6>{this.state.data.cost_price}</h6>
                <hr />
                <h4>Selling Price </h4>
                <h6>{this.state.data.sell_price}</h6>
                <hr />
                <h4>GSt Rate </h4>
                <h6>{this.state.data.gst}</h6>
                <hr />
                <h4>SKU No.</h4>
                <h6>{this.state.data.sku_no}</h6>
                <hr />
                <h4>HSN/SAC</h4>
                <h6>{this.state.data.hsn_sac_no}</h6>
                <hr />
                <h4>Short Description </h4>
                <h6>{this.state.data.short_desc}</h6>
                <hr />
                <h4>Product Description </h4>
                <h6>{ReactHtmlParser(this.state.data.long_desc)}</h6>
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
                <h4>Size</h4>
                <h6>
                  {this.state.data?.size?.map((item) => (
                    <span>{item?.sizeName}</span>
                  ))}
                </h6>
                <hr />
                <h4>Colour </h4>
                <h6>
                  {this.state.data?.color?.map((item) => (
                    <span style={{ color: item?.colorName }}>
                      {item?.colorName}
                    </span>
                    // <Button style={{background-color:item?.colorName!important;}}>{item?.colorName}</Button>
                  ))}
                </h6>

                <hr />
                <h4>Material </h4>
                <h6>{this.state.data.material}</h6>
                <hr />
                <h4>Stock Quantity </h4>
                <h6>{this.state.data.qty}</h6>
                <hr />
                <h4>Re-Order Level</h4>
                <h6>{this.state.data.reorder_level}</h6>
                <hr />
                <h4>Stock Available </h4>
                <h6>{this.state.data.stock}</h6>
                <hr />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewProducts;

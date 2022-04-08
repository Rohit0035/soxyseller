import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { history } from "../../../../history";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../../axiosConfig";

class ViewBrand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonebrand/${id}`)
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
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewBrand;

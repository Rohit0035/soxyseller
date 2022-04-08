import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";

class ViewCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getone_productcategory/${id}`, {
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

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Category Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/category/categoryList")}
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
                  height="300"
                  width="250"
                />
              </Col>
              <Col md="7" sm="12">
                <h4>Product Category Name </h4>
                <h6>{this.state.data.name}</h6>

                <hr />
                <h4>Category Description </h4>
                <h6>{this.state.data.desc}</h6>
                <hr />
                <h4>Status </h4>
                <h6>{this.state.data.status}</h6>
                <hr />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewCategory;

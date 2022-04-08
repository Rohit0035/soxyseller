import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";
class ViewSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonesize/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        // console.log(response.data);
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
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/app/size/sizeList" tag="a">
                    Size List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View Size</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Size
                </h1>
              </Col>
              <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/size/sizeList")}
                >
                  Back
                </Button>
              </Col>
            </Row>
            <CardBody className="pb-0">
              <Row className="mb-5 mt-2">
                <Col md="6" sm="12" className="mb-4">
                  <h4>Size</h4>
                  <h6 className=""> {this.state.data.sizeName}</h6>
                </Col>
                {/* <Col md="6" sm="12" className="mb-4">
                  <h4>Value</h4>
                  <h6 className=""> {this.state.data.value}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Description</h4>
                  <h6 className=""> {this.state.data.desc}</h6>
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewSize;

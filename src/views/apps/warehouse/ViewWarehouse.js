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

class ViewWarehouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonewarehouse/${id}`, {
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
                  <BreadcrumbItem href="/app/warehouse/warehouseList" tag="a">
                    Warehouse List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View Warehouse</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Warehouse
                </h1>
              </Col>
              <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/warehouse/warehouseList")}
                >
                  Back
                </Button>
              </Col>
            </Row>
            <CardBody className="pb-0">
              <Row className="mb-5 mt-2">
                <Col md="6" sm="12" className="mb-4">
                  <h4>Warehouse Name</h4>
                  <h6 className=""> {this.state.data.warehousename}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Email</h4>
                  <h6 className=""> {this.state.data.email}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Phone No.</h4>
                  <h6 className=""> {this.state.data.phone_no}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Address 1</h4>
                  <h6 className=""> {this.state.data.address1}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Address 2</h4>
                  <h6 className=""> {this.state.data.address2}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>City</h4>
                  <h6 className=""> {this.state.data.city}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Pin Code</h4>
                  <h6 className=""> {this.state.data.pin}</h6>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewWarehouse;

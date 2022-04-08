import React from "react";
import { Card, CardBody, Row, Col, Button, Table } from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";

class ViewStockAdjustment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonestockadjustment/${id}`, {
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

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Stock Adjustment Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/stockControl/stockAdjustment")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            <Row className="pt-2">
              <Col md="6" sm="12">
                <h5>Reference</h5>
                <p>{this.state.data.reference_no}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Warehouse</h5>
                <p>{this.state.data.warehouse?.warehousename}</p>
              </Col>

              <Col md="6" sm="12">
                <h5>Adjustment Date</h5>
                <p>{this.state.data.adjustment_date}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Adjustment Quantity</h5>
                <p>{this.state.data.adjusted_qty}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Adjustment Value</h5>
                <p>{this.state.data.adjusted_value}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Reason</h5>
                <p>{this.state.data.reason?.reason}</p>
              </Col>
            </Row>
            <div className="invoice-items-table pt-1">
              <Row>
                <Col sm="12">
                  <Table responsive borderless>
                    <thead>
                      <tr>
                        <th>Product Nane</th>
                        <th>Available Quantity </th>
                        <th>Quantity</th>
                        <th>Value</th>
                        <th>Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.product?.map((prod) => (
                        <tr>
                          <td>{prod.product?.product_name}</td>
                          <td>{prod.availableqty}</td>
                          <td>{prod.qty}</td>
                          <td>{prod.value}</td>
                          <td>{prod.comment}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>Grand Total - {this.state.data.grandTotal}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewStockAdjustment;

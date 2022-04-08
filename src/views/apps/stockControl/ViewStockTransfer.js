import React from "react";
import { Card, CardBody, Row, Col, Button, Table } from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";

class ViewStockTransfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonestocktransfer/${id}`, {
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
                Stock Transfer Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/stockControl/stockTransferRequest")
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
                <h5>From Warehouse</h5>
                <p>{this.state.data.from_warehouse?.warehousename}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>To Warehouse</h5>
                <p>{this.state.data.to_warehouse?.warehousename}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Transfer Date</h5>
                <p>{this.state.data.transfer_date}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Delivery Date</h5>
                <p>{this.state.data.delivery_duedate}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Total Quantity</h5>
                <p>{this.state.data.total_qty}</p>
              </Col>
              <Col md="6" sm="12">
                <h5>Transfer Type</h5>
                <p>{this.state.data.transfer_type}</p>
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
                        <th>SKU </th>
                        <th>HSN</th>
                        <th>Quantity</th>
                        <th>GST</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.product?.map((prod) => (
                        <tr>
                          <td>{prod.productname}</td>
                          <td>{prod.sku}</td>
                          <td>{prod.hsn}</td>
                          <td>{prod.qty}</td>
                          <td>{prod.gst}</td>
                          <td>{prod.amount}</td>
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
export default ViewStockTransfer;

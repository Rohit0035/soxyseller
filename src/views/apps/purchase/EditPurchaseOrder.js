import React from "react";
import {
  Card,
  CardBody,
  Form,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  CustomInput,
  Label,
} from "reactstrap";
//import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

import "moment-timezone";
import moment from "moment";
import logo from "../../../assets/img/logo/ilogo.png";
import { Mail, Phone, FileText, Download } from "react-feather";
import "../../../assets/scss/pages/invoice.scss";

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
class EditPurchaseOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      selectedFile: null,
      selectedName: "",
      purchase: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonepurchaseorder/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ purchase: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "upload_Invoice",
        this.state.selectedFile,
        this.state.selectedName
      );
    }

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/updateOrderStatusbyseller/${id}`, data, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push(
          "/app/purchase/purchaseInvoice/purchaseInvoiceList"
        );
      })
      .catch((error) => {
        console.log(error.error);
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Breadcrumbs breadCrumbTitle="Invoice" /> */}

        <Row>
          <Col className="" sm="12">
            <Card className="">
              <CardBody>
                <Row>
                  <Col md="6" sm="12" className="pt-1">
                    <h1>Edit Purchase Order</h1>
                  </Col>
                  <Col>
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/purchase/purchaseOrderList")
                      }
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
                <Form onSubmit={this.submitHandler}>
                  <Row className="my-3">
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label>Change Order Status</Label>
                        <CustomInput
                          type="select"
                          placeholder="Order Status"
                          name="status"
                          value={this.state.status}
                          onChange={this.changeHandler}
                        >
                          <option>Select Status.....</option>
                          <option value="Pending">Pending</option>
                          <option value="Approve">Approve</option>
                          <option value="Decline">Decline</option>
                        </CustomInput>
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label>Upload Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8" sm="12">
                      <Button color="primary" type="submit">
                        Update
                      </Button>
                    </Col>
                  </Row>
                </Form>

                <Card>
                  <Row className="mt-3">
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">ORDER ID</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{this.state.purchase?.orderId}</h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">ORDER STATUS</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{this.state.purchase?.status}</h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">ORDER DATE</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {moment(this.purchase?.createdAt).format("ll")}
                      </h6>
                    </Col>
                    {/* <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">SHIPPING DATE</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{purchase?.orderId.shipping_date}</h6>
                    </Col> */}
                    {/* <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">ORDER TYPE</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{purchase?.orderId.order_type}</h6>
                    </Col> */}
                    {/* <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">PAYMENT TYPE</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.payment_type}
                      </h6>
                    </Col> */}
                  </Row>
                  <div>
                    <Row>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h5 className="m-2">SUPPLIER NAME</h5>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h6 className="m-2">
                          {this.state.purchase?.supplier?.first_name}{" "}
                          {this.state.purchase?.supplier?.last_name}
                        </h6>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h5 className="m-2">EMAIL</h5>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h6 className="m-2">
                          {this.state.purchase?.supplier?.email}
                        </h6>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h5 className="m-2">COMPANY</h5>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h6 className="m-2">
                          {this.state.purchase?.supplier?.company}
                        </h6>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h5 className="m-2">PHONE</h5>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="shadow">
                        <h6 className="m-2">
                          {this.state.purchase?.supplier?.phone_no}
                        </h6>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">STOCK DUE</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{this.state.purchase?.stock_due}</h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">GSTIN NO.</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{this.state.purchase?.gstIn}</h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">PAYMENT DUE</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.payment_due}
                      </h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">TRANSPORT COST</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.transportation_cost}
                      </h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">TRANSPORT COST</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.transportation_cost}
                      </h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">TRANSPORT COST</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.transportation_cost}
                      </h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">AMOUNT</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">{this.state.purchase?.amount}</h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">INSTRUCTION</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.instructions}
                      </h6>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h5 className="m-2">GRAND TOTAL</h5>
                    </Col>
                    <Col lg="6" md="6" sm="12" className="shadow">
                      <h6 className="m-2">
                        {this.state.purchase?.grand_total}
                      </h6>
                    </Col>
                  </Row>
                </Card>

                <Card className="invoice-items-table pt-1">
                  <h3>Product Detail</h3>
                  <Row>
                    <Col sm="12">
                      <Table responsive borderless>
                        <thead>
                          <tr>
                            <th>
                              <h6>PRODUCT NAME</h6>
                            </th>
                            <th>
                              <h6>HSN</h6>
                            </th>
                            <th>
                              <h6>QUANTITY</h6>
                            </th>
                            <th>
                              <h6>DISCOUNT</h6>
                            </th>
                            <th>
                              <h6>GST%</h6>
                            </th>
                            <th>
                              <h6>COST PRICE</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.purchase?.product?.map((produ) => (
                            <tr>
                              <td>
                                <h5>{produ?.productname}</h5>
                              </td>
                              <td>
                                <h5>{produ?.hsn}</h5>
                              </td>
                              <td>
                                <h5>{produ?.qty}</h5>
                              </td>
                              <td>
                                <h5>{produ?.discount}</h5>
                              </td>
                              <td>
                                <h5>{produ?.gst}</h5>
                              </td>
                              <td>
                                <h5>{produ?.cost_price}</h5>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg="10" md="10" sm="12">
                      <h5 className="text-right">GRAND TOTAL</h5>
                    </Col>
                    <Col lg="2" md="2" sm="12">
                      <h5 className="">{this.state.purchase?.product_price}</h5>
                    </Col>
                  </Row>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EditPurchaseOrder;

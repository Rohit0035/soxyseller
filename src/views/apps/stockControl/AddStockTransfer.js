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
  FormGroup,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
export class AddStockTransfer extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        addTextbox: [{}],
        reference_no: "",
        from_warehouse: "",
        to_warehouse: "",
        transfer_date: "",
        delivery_duedate: "",
        transfer_type: "",
        reason: "",
        grandTotal: "",
        productC: [],
        productG: [""],
        skuG: [""],
        hsmG: [""],
        amountG: [""],
        qtyG: [""],
        gstG: [""],
      };
    }
  }
  addControls() {
    this.setState({
      productG: [...this.state.productG, ""],
      skuG: [...this.state.skuG, ""],
      hsmG: [...this.state.hsmG, ""],
      amountG: [...this.state.amountG, ""],
      qtyG: [...this.state.qtyG, ""],
      gstG: [...this.state.gstG, ""],
      addTextbox: [...this.state.addTextbox, ""],
    });
  }
  delControl(i) {
    console.log(this.state);
    this.state.addTextbox.splice(i, 1);
    this.state.productG.splice(i, 1);
    this.state.skuG.splice(i, 1);
    this.state.hsmG.splice(i, 1);
    this.state.amountG.splice(i, 1);
    this.state.qtyG.splice(i, 1);
    this.state.gstG.splice(i, 1);
    this.setState({});
  }

  changeHandlerG = (e, i) => {
    // console.log(i);
    // console.log(e.target);
    var dum = this.state[e.target.name];
    console.log(dum);
    dum[i] = e.target.value;
    this.setState({ [e.target.name]: dum });
  };

  submitHandler = (e) => {
    e.preventDefault();
    var product = [];
    for (var i = 0; i < this.state.productG.length; i++) {
      product.push({
        productname: this.state.productG[i],
        sku: this.state.skuG[i],
        hsn: this.state.hsmG[i],
        qty: this.state.qtyG[i],
        gst: this.state.gstG[i],
        amount: this.state.amountG[i],
      });
    }
    var option = this.state;
    option.product = product;
    console.log("Option", option);
    axiosConfig
      .post("/addstocktransfer", option, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/stockControl/stockTransferRequest");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  async componentDidMount() {
    //Warehouse List
    axiosConfig
      .get("/getwarehouse", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ warehouseL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Reason List
    axiosConfig
      .get("/getReason", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ reasonL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    //Product Add
    axiosConfig
      .get("/productbysellerbytoken", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ productC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   axiosConfig
  //     .post("/addstocktransfer", option)
  //     .then((response) => {
  //       console.log(response);
  //       swal("Success!", "Submitted SuccessFull!", "success");
  //       this.props.history.push("/app/stockControl/StockTransferRequest");
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Stock Transfer
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
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Referance Number</Label>
                  <Input
                    required
                    type="number"
                    name="reference_no"
                    value={this.state.reference_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Select From Warehouse</Label>
                  <CustomInput
                    required
                    type="select"
                    name="from_warehouse"
                    value={this.state.from_warehouse}
                    onChange={this.changeHandler}
                  >
                    {this.state.warehouseL?.map((warehouseList) => (
                      <option key={warehouseList._id} value={warehouseList._id}>
                        {warehouseList.warehousename}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Select To Warehouse</Label>
                  <CustomInput
                    required
                    type="select"
                    name="to_warehouse"
                    value={this.state.to_warehouse}
                    onChange={this.changeHandler}
                  >
                    {this.state.warehouseL?.map((warehouseList) => (
                      <option key={warehouseList._id} value={warehouseList._id}>
                        {warehouseList.warehousename}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Transfer Date</Label>
                  <Input
                    required
                    type="date"
                    name="transfer_date"
                    value={this.state.transfer_date}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Delivery Due Date</Label>
                  <Input
                    required
                    type="date"
                    name="delivery_duedate"
                    value={this.state.delivery_duedate}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Transfer Type</Label>
                  <CustomInput
                    required
                    type="select"
                    name="transfer_type"
                    value={this.state.transfer_type}
                    onChange={this.changeHandler}
                  >
                    <option value="ABC">ABC</option>
                    <option value="XYZ">XYZ</option>
                    <option value="ABCD">ABCD</option>
                    <option value="EFG">EFG</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Reason</Label>
                  <CustomInput
                    required
                    type="select"
                    name="reason"
                    value={this.state.reason}
                    onChange={this.changeHandler}
                  >
                    {this.state.reasonL?.map((reasonList) => (
                      <option key={reasonList._id} value={reasonList._id}>
                        {reasonList.reason}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
              </Row>
              <Row>
                <div>
                  {this.state.addTextbox.map((item, index) => (
                    <div>
                      {/* {index ? ( */}
                      <div id="btn">
                        <Row>
                          <Col
                            lg="6"
                            md="6"
                            sm="6"
                            className="mb-2 d-flex align-items-start"
                          >
                            <Button
                              color="primary"
                              onClick={() => this.addControls()}
                            >
                              Add
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      {/* ) : null} */}

                      <Row>
                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> Product Name </Label>
                            <CustomInput
                              required
                              type="select"
                              name="productG"
                              placeholder=" Product Name"
                              value={this.state.productG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            >
                              <option>Select Product</option>
                              {this.state.productC?.map((prod) => (
                                <option key={prod._id} value={prod._id}>
                                  {prod.product_name}
                                </option>
                              ))}
                            </CustomInput>
                          </FormGroup>
                        </Col>
                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> SKU </Label>
                            <Input
                              required
                              type="number"
                              name="skuG"
                              placeholder="SKU"
                              value={this.state.skuG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> HSN </Label>
                            <Input
                              required
                              type="number"
                              rows="5"
                              name="hsmG"
                              placeholder="HSN"
                              value={this.state.hsmG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="1" sm="12">
                          <FormGroup>
                            <Label> Quantity </Label>
                            <Input
                              required
                              type="number"
                              rows="5"
                              name="qtyG"
                              placeholder="Quantity"
                              value={this.state.qtyG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>

                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> GST </Label>
                            <Input
                              required
                              type="text"
                              rows="5"
                              name="gstG"
                              placeholder="GST"
                              value={this.state.gstG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> Amount </Label>
                            <Input
                              required
                              type="number"
                              rows="5"
                              name="amountG"
                              placeholder="Amount"
                              value={this.state.amountG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col
                          md="1"
                          sm="6"
                          className="p-2 d-flex justify-content-end"
                        >
                          <Button
                            color="danger"
                            onClick={() => this.delControl(index)}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </Row>
              <Row className="d-flex justify-content-end">
                <Col lg="4">
                  <FormGroup>
                    <Label>Grand Total</Label>
                    <Input
                      required
                      type="number"
                      name="grandTotal"
                      placeholder="Grand Total"
                      value={this.state.grandTotal}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button color="danger" type="submit" className="mr-1 mb-1">
                  Submit
                </Button>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddStockTransfer;

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

export class AddStockAdjustment extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        addTextbox: [{}],
        reference_no: "",
        adjustment_date: "",
        warehouse: "",
        adjusted_qty: "",
        adjusted_value: "",
        reason: "",
        grandTotal: "",
        productC: [],
        productG: [""],
        availableqtyG: [""],
        qtyG: [""],
        commentG: [""],
        valueG: [""],
      };
    }
  }
  addControls() {
    this.setState({
      productG: [...this.state.productG, ""],
      availableqtyG: [...this.state.availableqtyG, ""],
      qtyG: [...this.state.qtyG, ""],
      commentG: [...this.state.commentG, ""],
      valueG: [...this.state.valueG, ""],

      addTextbox: [...this.state.addTextbox, ""],
    });
  }
  delControl(i) {
    console.log(this.state);
    this.state.addTextbox.splice(i, 1);
    this.state.productG.splice(i, 1);
    this.state.availableqtyG.splice(i, 1);
    this.state.qtyG.splice(i, 1);
    this.state.commentG.splice(i, 1);
    this.state.valueG.splice(i, 1);
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
        availableqty: this.state.availableqtyG[i],
        qty: this.state.qtyG[i],
        value: this.state.valueG[i],
        comment: this.state.commentG[i],
      });
    }
    var option = this.state;
    option.product = product;
    console.log("Option", option);
    axiosConfig
      .post("/addstockadjustment", option, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/stockControl/stockAdjustment");
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
                Add New Stock Adjustment
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
                  <Label>Warehouse</Label>
                  <CustomInput
                    required
                    type="select"
                    name="warehouse"
                    value={this.state.warehouse}
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
                  <Label>Adjustment Date</Label>
                  <Input
                    required
                    type="date"
                    name="adjustment_date"
                    value={this.state.adjustment_date}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Adjustment Qty</Label>
                  <Input
                    required
                    type="text"
                    name="adjusted_qty"
                    value={this.state.adjusted_qty}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Adjustment Value</Label>
                  <Input
                    required
                    type="text"
                    name="adjusted_value"
                    value={this.state.adjusted_value}
                    onChange={this.changeHandler}
                  />
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
                      {/* <div id="btn">
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
                      </div> */}
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
                            <Label> Available Qty </Label>
                            <Input
                              required
                              type="number"
                              name="availableqtyG"
                              placeholder="Available Qty"
                              value={this.state.availableqtyG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> Quantity </Label>
                            <Input
                              required
                              type="number"
                              rows="5"
                              name="qtyG"
                              placeholder="QTY"
                              value={this.state.qtyG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="1" sm="12">
                          <FormGroup>
                            <Label> Value </Label>
                            <Input
                              required
                              type="text"
                              rows="5"
                              name="valueG"
                              placeholder="Value"
                              value={this.state.valueG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2" sm="12">
                          <FormGroup>
                            <Label> Comment </Label>
                            <Input
                              required
                              type="text"
                              rows="5"
                              name="commentG"
                              placeholder="Comment"
                              value={this.state.commentG[index]}
                              onChange={(e) => {
                                this.changeHandlerG(e, index);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col
                          md="1"
                          sm="6"
                          className="p-1 ml-4  d-flex justify-content-end"
                        >
                          <Button
                            className="ml-1"
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
              <div id="btn">
                <Row>
                  <Col
                    lg="12"
                    md="12"
                    sm="12"
                    className="mb-2 d-flex align-items-sm-end justify-content-end"
                  >
                    <Button color="primary" onClick={() => this.addControls()}>
                      Add
                    </Button>
                  </Col>
                </Row>
              </div>
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
export default AddStockAdjustment;

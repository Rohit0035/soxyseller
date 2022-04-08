import React, { Component } from "react";

import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
export class AddPurchaseInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sortorder: "",
      desc: "",
      brand_img: "",
      status: "",
      selectedFile: null,
      selectedName: "",
      supplierList: [],
    };
  }

  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //     this.setState({ selectedName: event.target.files[0].name });
  //     console.log(event.target.files[0]);
  //   };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    //Supplier List
    axiosConfig
      .get("/Getsupplier")
      .then((response) => {
        console.log(response);
        this.setState({ supplierList: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //   submitHandler = (e) => {
  //     e.preventDefault();
  //     const data = new FormData();
  //     // data.append("name", this.state.name);
  //     // data.append("desc", this.state.desc);
  //     // data.append("sortorder", this.state.sortorder);
  //     // data.append("status", this.state.status);
  //     if (this.state.selectedFile !== null) {
  //       data.append(
  //         "brand_img",
  //         this.state.selectedFile,
  //         this.state.selectedName
  //       );
  //     }
  //     //   for (var value of data.values()) {
  //     //     console.log(value);
  //     //  }
  //     axiosConfig
  //       .post("/addbrand", data)
  //       .then((response) => {
  //         console.log(response);
  //         this.props.history.push("/app/products/brand/brandList");
  //         alert("New Brand Added !");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                New Purchase Order Invoice
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push(
                    "/app/purchase/purchaseInvoice/purchaseInvoiceList"
                  )
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
                  <FormGroup>
                    <Label>Select Purchase Order Image</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <Label>Select Purchase Order</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Select Purchase Order"
                    name=""
                    // value={this.state.city}
                    // onChange={this.changeHandler}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <Label>Select Supplier</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Select Supplier"
                    name="supplier"
                    value={this.state.supplier}
                    onChange={this.changeHandler}
                  >
                    <option>Add Supplier</option>
                    {this.state.supplierList?.map((supply) => (
                      <option key={supply._id} value={supply._id}>
                        {supply.company}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Invoice Date</Label>
                    <Input
                      type="date"
                      placeholder="Invoice Date"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>SKU</Label>
                    <Input
                      type="number"
                      placeholder="SKU"
                      name=""
                      //  value={this.state.name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>HSN</Label>
                    <Input
                      type="number"
                      placeholder="Brand Name"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      placeholder="Quantity"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Cost Price</Label>
                    <Input
                      type="number"
                      placeholder="Cost Price"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>GST</Label>
                    <Input
                      type="number"
                      placeholder="GST"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Grand Total</Label>
                    <Input
                      type="number"
                      placeholder="Grand Total"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Payment Mode</Label>
                    <Input
                      type="number"
                      placeholder=" Payment Mode"
                      name=""
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Inactive"
                      />
                      <span style={{ marginRight: "3px" }}>Inactive</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="col-sm-12 text-right">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 "
                  >
                    Cancel
                  </Button.Ripple>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 text-right "
                  >
                    Create Purchase order invoice
                  </Button.Ripple>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddPurchaseInvoice;

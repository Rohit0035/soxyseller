import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  CustomInput,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
export default class AddActivityLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: "",
      short_name: "",
      desc: "",
      code: "",
      hsn_code: "",
      productcategory: "",
      productsubcategory: "",
      unit: "",
      alt_unit: "",
      gst_rate: "",
      type_of_supply: "",
      varient: "",
      material: "",
      stock_qty: "",
      stock_clearance_limit: "",
      //rate:"",
      size: "",
      colour: "",
      brand: "",
      barcode: "",
      std_package: "",
      inc_duty_tax: "",
      product_img: "",
      selectedFile: null,
      selectedName: "",
      // makecompany: "",
      // mrp: "",
      // for_dealer: {},
    };
    this.state = {
      productC: [],
      productSC: [],
      units: [],
      altUnits: [],
      gstRate: [],
      pBrand: [],
    };
  }
  componentDidMount() {
    //Product Category
    axiosConfig
      .get("/allproductcategory")
      .then((response) => {
        console.log(response);
        this.setState({ productC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Product Sub Category
    axiosConfig
      .get("/allproductsubcategory")
      .then((response) => {
        console.log(response);
        this.setState({ productSC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Units
    axiosConfig
      .get("/viewallunits")
      .then((response) => {
        console.log(response);
        this.setState({ units: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Alternative Units
    axiosConfig
      .get("/allaltunit")
      .then((response) => {
        console.log(response);
        this.setState({ altUnits: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Gst rate
    axiosConfig
      .get("/viewallgst")
      .then((response) => {
        console.log(response);
        this.setState({ gstRate: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Brand
    axiosConfig
      .get("/allbrand")
      .then((response) => {
        console.log(response);
        this.setState({ pBrand: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    //console.log(this.state);

    const data = new FormData();
    data.append("item_name", this.state.item_name);
    data.append("short_name", this.state.short_name);
    data.append("desc", this.state.desc);
    data.append("code", this.state.code);
    data.append("hsn_code", this.state.hsn_code);
    data.append("productcategory", this.state.productcategory);
    data.append("productsubcategory", this.state.productsubcategory);
    data.append("unit", this.state.unit);
    data.append("alt_unit", this.state.alt_unit);
    data.append("gst_rate", this.state.gst_rate);
    data.append("brand", this.state.brand);
    data.append("type_of_supply", this.state.type_of_supply);
    data.append("varient", this.state.varient);
    data.append("material", this.state.material);
    data.append("stock_qty", this.state.stock_qty);
    data.append("stock_clearance_limit", this.state.stock_clearance_limit);
    data.append("colour", this.state.colour);
    data.append("size", this.state.size);
    data.append("inc_duty_tax", this.state.inc_duty_tax);
    data.append("std_package", this.state.std_package);
    data.append("barcode", this.state.barcode);
    data.append("status", this.state.status);
    data.append(
      "product_img",
      this.state.selectedFile,
      this.state.selectedName
    );

    // for (var value of data.values()) {
    //   console.log(value);
    // }

    // for (var key of data.keys()) {
    //   console.log(key);
    // }
    axiosConfig
      .post("/addproduct", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Activity Logs
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/activity/activityLogs")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Name</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Short Name</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="short_name"
                    value={this.state.short_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Description</Label>
                  <Input
                    required
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                    rows="1"
                    placeholder="Textarea"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Code</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Product Code"
                    name="code"
                    value={this.state.code}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>HSN Code</Label>
                  <Input
                    required
                    type="text"
                    placeholder="HSN Code"
                    name="hsn_code"
                    value={this.state.hsn_code}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Category</Label>
                  <CustomInput
                    type="select"
                    name="productcategory"
                    value={this.state.productcategory}
                    onChange={this.changeHandler}
                  >
                    {this.state.productC.map((productCategory) => (
                      <option
                        value={productCategory._id}
                        key={productCategory._id}
                      >
                        {productCategory.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Sub Category</Label>
                  <CustomInput
                    required
                    type="select"
                    name="productsubcategory"
                    value={this.state.productsubcategory}
                    onChange={this.changeHandler}
                  >
                    {this.state.productSC.map((productSCategory) => (
                      <option
                        value={productSCategory._id}
                        key={productSCategory._id}
                      >
                        {productSCategory.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Manufacture Name</Label>
                  <Input required 
                    type="text"
                    placeholder="Manufacture Name"
                    name="makecompany"
                    value={this.state.makecompany}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Units</Label>
                  <CustomInput
                    type="select"
                    name="unit"
                    value={this.state.unit}
                    onChange={this.changeHandler}
                  >
                    {this.state.units.map((dUnits) => (
                      <option value={dUnits._id} key={dUnits._id}>
                        {dUnits.units_title}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Alternative Units</Label>
                  <CustomInput
                    type="select"
                    name="alt_units"
                    value={this.state.alt_units}
                    onChange={this.changeHandler}
                  >
                    {this.state.altUnits.map((altunits) => (
                      <option key={altunits._id} value={altunits._id}>
                        {altunits.alt_unit_title}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>GST Rate</Label>
                  <CustomInput
                    type="select"
                    name="gst_rate"
                    value={this.state.gst_rate}
                    onChange={this.changeHandler}
                  >
                    {this.state.gstRate.map((gRate) => (
                      <option key={gRate._id} value={gRate._id}>
                        {gRate.gst_title}-{gRate.value}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Brand</Label>
                  <CustomInput
                    type="select"
                    name="brand"
                    value={this.state.brand}
                    onChange={this.changeHandler}
                  >
                    {this.state.pBrand.map((brandp) => (
                      <option value={brandp._id} key={brandp._id}>
                        {brandp.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Type Of Supply</Label>
                  <CustomInput
                    type="select"
                    name="type_of_supply"
                    value={this.state.type_of_supply}
                    onChange={this.changeHandler}
                  >
                    <option>Goods</option>
                    <option>Services</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Varient</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Varient"
                    name="varient"
                    value={this.state.varient}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Material</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Material"
                    name="material"
                    value={this.state.material}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Stock Quantity</Label>
                  <Input
                    required
                    type="number"
                    placeholder="Stock Quantity"
                    name="stock_qty"
                    value={this.state.stock_qty}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Stock Clearance Limit</Label>
                  <Input
                    required
                    type="number"
                    placeholder="Stock Clearance"
                    name="stock_clearance_limit"
                    value={this.state.stock_clearance_limit}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Rate For:</Label>
                  <CustomInput
                    type="select"
                    name="for_dealer"
                    value={this.state.for_dealer}
                    onChange={this.changeHandler}
                  >
                    <option value="rate_builder_contractor">
                      For Builder and Contractor
                    </option>
                    <option value="rate_customer">For Customer</option>
                    <option value="rate_dealer">For Dealer</option>
                    <option value="rate_distributer">For Distributer</option>
                    <option value="rate_manufacturer">For Manufacturer</option>
                    <option value="rate_retailer">For Retailer</option>
                    <option value="rate_sp_retailer">
                      For Special Retailer
                    </option>
                    <option value="rate_stocklist">For Stock List</option>
                    <option value="rate_supplier">For Supplier</option>
                  </CustomInput>
                </Col> */}

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Colour</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Colour"
                    name="colour"
                    value={this.state.colour}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Size</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Size"
                    name="size"
                    value={this.state.size}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>MRP</Label>
                  <Input required 
                    type="number"
                    placeholder="MRP"
                    name="mrp"
                    value={this.state.mrp}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Inclusive of Duties and Taxes</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Duties and Taxes"
                    name="inc_duty_tax"
                    value={this.state.inc_duty_tax}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Standard Packing</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Standard Packing"
                    name="std_package"
                    value={this.state.std_package}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Image</Label>
                  <Input required type="file" onChange={this.onChangeHandler} />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Barcode</Label>
                  <Input
                    required
                    type="number"
                    placeholder="BarCode"
                    name="barcode"
                    value={this.state.barcode}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
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
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Activity Logs
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
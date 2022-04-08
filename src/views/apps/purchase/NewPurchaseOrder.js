import React from "react";
import Wizard from "./FormComponent";
import {
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  Container,
} from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import axiosConfig from "../../../axiosConfig";
//import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";

class NewPurchaseOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addTextbox: [{}],
      supplier: "",
      stock_due: "",
      gstIn: "",
      payment_due: "",
      amount: "",
      transportation_cost: "",
      grand_total: "",
      instructions: "",
      supplierC: [],
      productC: [],
      productG: [""],
      skuG: [""],
      hsmG: [""],
      costG: [""],
      qtyG: [""],
      gstG: [""],
      discountG: [""],
    };
  }

  addControls() {
    this.setState({
      productG: [...this.state.productG, ""],
      skuG: [...this.state.skuG, ""],
      hsmG: [...this.state.hsmG, ""],
      costG: [...this.state.costG, ""],
      qtyG: [...this.state.qtyG, ""],
      gstG: [...this.state.gstG, ""],
      discountG: [...this.state.discountG, ""],
      addTextbox: [...this.state.addTextbox, ""],
    });
  }
  delControl(i) {
    console.log(this.state);
    this.state.addTextbox.splice(i, 1);
    this.state.productG.splice(i, 1);
    this.state.skuG.splice(i, 1);
    this.state.hsmG.splice(i, 1);
    this.state.costG.splice(i, 1);
    this.state.qtyG.splice(i, 1);
    this.state.gstG.splice(i, 1);
    this.state.discountG.splice(i, 1);
    this.setState({});
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
        discount: this.state.discountG[i],
        gst: this.state.gstG[i],
        cost_price: this.state.costG[i],
      });
    }
    var option = this.state;
    option.product = product;
    console.log("Option", option);
    axiosConfig
      .post("/addnewpurchaseorder", option, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/purchase/purchaseOrderList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  async componentDidMount() {
    axiosConfig
      .get("/Getsupplier", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ supplierC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

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

  render() {
    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Supplier </Label>
                <CustomInput
                  required
                  type="select"
                  name="supplier"
                  placeholder="Select Supplier"
                  value={this.state.supplier}
                  onChange={this.changeHandler}
                >
                  <option>Add Supplier</option>
                  {this.state.supplierC?.map((supply) => (
                    <option key={supply._id} value={supply._id}>
                      {supply.company}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> GSTIN </Label>
                <Input
                  required
                  type="text"
                  placeholder="GSTIN"
                  name="gstIn"
                  onChange={this.changeHandler}
                  value={this.state.gstIn}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Amount </Label>
                <Input
                  required
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.changeHandler}
                >
                  <option>Select</option>
                  <option>Tax Includive</option>
                  <option>Tax Excludive</option>
                  <option>Add Supplier</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Stock Due </Label>
                <Input
                  required
                  type="number"
                  name="stock_due"
                  placeholder="Stock Due"
                  value={this.state.stock_due}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Payment Due </Label>
                <Input
                  required
                  type="number"
                  name="payment_due"
                  placeholder="Payment Due"
                  value={this.state.payment_due}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },

      {
        title: "2",
        content: (
          <div>
            {this.state.addTextbox.map((item, index) => (
              <div>
                {/* {index ? ( */}
                <div id="btn">
                  <Row>
                    <Col flax="left" lg="6" md="6" sm="6" className="mb-2">
                      <Button
                        color="primary"
                        onClick={() => this.addControls()}
                      >
                        Add
                      </Button>
                    </Col>
                    <Col flax="left" lg="6" md="6" sm="6" className="mb-2">
                      <Button
                        color="danger"
                        onClick={() => this.delControl(index)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </div>
                {/* ) : null} */}

                <Row>
                  <Col md="4" sm="12">
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
                        <option>Add Product</option>
                        {this.state.productC?.map((prod) => (
                          <option key={prod._id} value={prod.product_name}>
                            {prod.product_name}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col md="4" sm="12">
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
                  <Col md="4" sm="12">
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
                  <Col md="3" sm="12">
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
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Cost price </Label>
                      <Input
                        required
                        type="number"
                        rows="5"
                        name="costG"
                        placeholder="Cost price"
                        value={this.state.costG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
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
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Discount </Label>
                      <Input
                        required
                        type="number"
                        rows="5"
                        name="discountG"
                        placeholder="Discount"
                        value={this.state.discountG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Transportation Cost </Label>
                <Input
                  required
                  type="number"
                  name="transportation_cost"
                  placeholder="Transportation Cost"
                  value={this.state.transportation_cost}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Tax </Label>
                <Input
                  required
                  type="number"
                  placeholder="Tax"
                  name="gst"
                  value={this.state.gst}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label> Grand Total </Label>
                <Input
                  required
                  type="number"
                  placeholder="Grand Total"
                  name="grand_total"
                  value={this.state.grand_total}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label> Instructions </Label>
                <Input
                  required
                  type="text"
                  placeholder="Instructions"
                  name="instructions"
                  value={this.state.instructions}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ];
    return (
      <Card>
        <CardHeader>
          <h1>New Purchase Order</h1>
        </CardHeader>
        <CardBody>
          <Wizard enableAllSteps onFinish={this.submitHandler} steps={steps} />

          {/* <Wizard
            enableAllSteps
            onFinish={() => alert("submitted")}
            steps={steps}
          /> */}
        </CardBody>
      </Card>
    );
  }
}

export default NewPurchaseOrder;

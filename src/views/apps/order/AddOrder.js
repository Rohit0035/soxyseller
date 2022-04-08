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
import axios from "axios";

//import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";

class AddOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addTextbox: [{}],
      customer: "",
      supplier: "",
      product: "",
      stock_due: "",
      gstIn: "",
      payment_due: "",
      amount: "",
      transportation_cost: "",
      grand_total: "",
      instructions: "",
      productname: [],
      supplierC: [],
      sellerC: [],
      sku: [],
      hsn: [],
      qty: [],
      gst: [],
      cost_price: [],
      discount: [],
      customer: [],
    };
  }

  addControls() {
    this.setState({
      addTextbox: [...this.state.addTextbox, {}],
    });
  }
  delControl(i) {
    this.state.addTextbox.splice(i, 1);
    this.setState({});
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    //Customer
    axios
      .get("http://35.154.86.59/api/user/allcustomer", {
        headers: {
          "auth-token": localStorage.getItem("auth-adtoken"),
        },
      })

      .then((response) => {
        console.log(response);
        this.setState({ customer: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/addnewpurchaseorder", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/purchase/purchaseOrderList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select Customer</Label>
                <CustomInput
                  type="select"
                  name="customer"
                  placeholder="Customer"
                  onChange={this.changeHandler}
                  value={this.state.customer}
                >
                  {this.state.customer?.map((custom) => (
                    <option key={custom._id} value={custom._id}>
                      {custom.firstname} {custom.lastname}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            {/* <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Supplier </Label>
                <Input
                  type="text"
                  name="supplier"
                  placeholder="Select Supplier"
                  value={this.state.supplier}
                  onChange={this.changeHandler}
                >
                  {/* <option>Add Supplier</option>
                      {this.state.supplierC?.map((supplierS) => (
                        <option key={supplier._id}>{supplierS.company}</option>
                      ))} 
                </Input>
              </FormGroup>
            </Col> */}
            {/* <Col md="6" sm="12">
              <FormGroup>
                <Label> GSTIN </Label>
                <Input
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
                  type="number"
                  name="payment_due"
                  placeholder="Payment Due"
                  value={this.state.payment_due}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col> */}
          </Row>
        ),
      },

      {
        title: "2",
        content: (
          <div>
            {this.state.addTextbox.map((index) => (
              <div>
                {index ? (
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
                ) : null}

                <Row>
                  <Col md="4" sm="12">
                    <FormGroup>
                      <Label> Product Name </Label>
                      <Input
                        type="text"
                        name="product"
                        placeholder=" Product Name"
                        value={this.state.product}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" sm="12">
                    <FormGroup>
                      <Label> SKU </Label>
                      <Input
                        type="number"
                        name="sku"
                        placeholder="SKU"
                        value={this.state.sku}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" sm="12">
                    <FormGroup>
                      <Label> HSN </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="hsn"
                        placeholder="HSN"
                        value={this.state.hsn}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Quantity </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="qty"
                        placeholder="Quantity"
                        value={this.state.qty}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Cost price </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="cost_price"
                        placeholder="Cost price"
                        value={this.state.cost_price}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> GST </Label>
                      <Input
                        type="text"
                        rows="5"
                        name="gst"
                        placeholder="GST"
                        value={this.state.gst}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Discount </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="discount"
                        placeholder="Discount"
                        value={this.state.discount}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        ),
      },
      // {
      //   title: 3,
      //   content: (
      //     <Row>
      //       <Col md="6" sm="12">
      //         <FormGroup>
      //           <Label> Transportation Cost </Label>
      //           <Input
      //             type="number"
      //             name="transportation_cost"
      //             placeholder="Transportation Cost"
      //             value={this.state.transportation_cost}
      //             onChange={this.changeHandler}
      //           />
      //         </FormGroup>
      //       </Col>
      //       <Col md="6" sm="12">
      //         <FormGroup>
      //           <Label> Tax </Label>
      //           <Input
      //             type="number"
      //             placeholder="Tax"
      //             name="gst"
      //             value={this.state.gst}
      //             onChange={this.changeHandler}
      //           />
      //         </FormGroup>
      //       </Col>

      //       <Col md="6" sm="12">
      //         <FormGroup>
      //           <Label> Grand Total </Label>
      //           <Input
      //             type="number"
      //             placeholder="Grand Total"
      //             name="grand_total"
      //             value={this.state.grand_total}
      //             onChange={this.changeHandler}
      //           />
      //         </FormGroup>
      //       </Col>

      //       <Col md="6" sm="12">
      //         <FormGroup>
      //           <Label> Instructions </Label>
      //           <Input
      //             type="text"
      //             placeholder="Instructions"
      //             name="instructions"
      //             value={this.state.instructions}
      //             onChange={this.changeHandler}
      //           />
      //         </FormGroup>
      //       </Col>

      //       {/* <div id="btn">     <Button type="submit" class="btn btn-outline-primary">Back</Button>
      //      <Button type="submit" class="btn btn-primary">Create Purchase order</Button></div>        */}
      //     </Row>
      //   ),
      // },
    ];
    return (
      <Card>
        <CardHeader>
          <h1>Create Order</h1>
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

export default AddOrder;

{
  /* <Col md="6" sm="12">
              <FormGroup>
                <Label> Grand Total </Label>
                <CustomInput type="select" name="select" id="status">
                  <option>Planning</option>
                  <option>In Process</option>
                  <option>Finished</option>
                </CustomInput>
              </FormGroup>
            </Col> */
}
{
  /* <Col md="6" sm="12">
              <FormGroup>
                <Label> Tax </Label>
                <CustomInput type="select" name="select" id="location">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col> */
}
{
  /* <Col md="6" sm="12">
              <FormGroup>
                <Label> Event Status </Label>
                <Label className="mr-2">Requirements :</Label>
                <div className="stacked-checkbox">
                  <div className="d-inline-block mr-2">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Staffing"
                      defaultChecked={false}
                    />
                  </div>
                  <div className="d-inline-block">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Catering"
                      defaultChecked={false}
                    />
                  </div>
                </div>
              </FormGroup>
            </Col> */
}

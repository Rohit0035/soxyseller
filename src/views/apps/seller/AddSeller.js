import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import  axiosConfig from "../../../axiosConfig";
export default class AddSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerId:"",
      seller_name: "",
      selleremail: "",
      mobile_no: "",
      store_img: "",
      business_type: "",
      store_name: "",
      store_address: "",
      gstin_no: "",
      state: "",
      city: "",
      selectedFile: null,
      status: ""
    };
  }
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
    const data = new FormData();
    data.append("sellerId", this.state.sellerId);
    data.append("seller_name", this.state.seller_name);
    data.append("selleremail", this.state.selleremail);
    data.append("mobile_no", this.state.mobile_no);
    // data.append("store_img", this.state.store_img);
    data.append("business_type", this.state.business_type);
    data.append("store_name", this.state.store_name);
    data.append("store_address", this.state.store_address);
    data.append("gstin_no", this.state.gstin_no);
    data.append("city", this.state.city);
    data.append("state", this.state.state);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "store_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }

    
   
    axiosConfig.post("/add_seller", data)
      .then((response) => {
        console.log(response);
        alert("Seller Added Successful")
        this.props.history.push("/app/seller/sellerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Create A Seller</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Seller Name</Label>
                  <Input   
                    required 
                    type="text" 
                    name="seller_name"
                    placeholder="Enter Seller Name" 
                    value={this.state.seller_name}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Seller Id</Label>
                  <Input   
                    required 
                    type="text" 
                    name="sellerId"
                    placeholder="Enter Seller Id"  
                    value={this.state.sellerId}
                    onChange={this.changeHandler}>
                  </Input> 
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Seller Email</Label>
                  <Input  
                    required 
                    type="email" 
                    name="selleremail"
                    placeholder="Email"  
                    value={this.state.selleremail}
                    onChange={this.changeHandler} >
                  </Input>    
                </Col>
             
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input  
                    required 
                    type="number" 
                    name="mobile_no"
                    placeholder="Mobile No." 
                    value={this.state.mobile_no}
                    onChange={this.changeHandler}>
                  </Input>    
                </Col>
              </Row>
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>VAT/GSTIN No.</Label>
                  <Input
                    type="text"
                    name="gstin_no"
                    value={this.state.gstin_no}
                    onChange={this.changeHandler}
                  />
                </Col> 
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Store Address </Label>
                  <Input  
                    type="text"  
                    required
                    name="store_address"
                    placeholder="Store Adderss"  
                    value={this.state.store_address}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Business Type</Label>
                  <Input  
                    required  
                    type="select" 
                    name="business_type"
                    placeholder="Business Type"  
                    value={this.state.business_type}
                    onChange={this.changeHandler}>
                        <option value="type of business">type of business</option>
                        <option value="medicing">Medicing</option>
                        <option value="kiddily">Kiddily</option>
                        <option value="shipplier">Shipplier</option>
                        <option value="digimail">Digimail</option>
                  </Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Store Name</Label>
                  <Input  
                    required 
                    type="text" 
                    name="store_name"
                    placeholder="Store Name"  
                    value={this.state.store_name}
                    onChange={this.changeHandler} />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2" >
                  <Label>city</Label>
                  <Input 
                    required 
                    type="select" 
                    name="city"
                    placeholder="City" 
                    value={this.state.city}
                    onChange={this.changeHandler}>
                        
                        <option value="indore">Indore</option>
                        <option value="sagar">Sagar</option>
                        <option value="jabalpur">Jabalpur</option>
                        <option value="delhi">Delhi</option>
                  </Input>
                </Col> 
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>State</Label>
                  <Input 
                    required  
                    type="select"
                    name="state" 
                    placeholder="State" 
                    value={this.state.state}
                    onChange={this.changeHandler}>
                        
                        <option value="mp">MP</option>
                        <option value="goa">Goa</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="gujarat">Gujarat</option>
                  </Input>    
                </Col> 
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Store Image</Label>
                  <CustomInput  
                    required 
                    type="file"
                   
                    onChange={this.onChangeHandler}
                  />    
                </Col>
              </Row> 
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
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1">
                    Add Seller
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

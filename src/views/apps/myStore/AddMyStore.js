import React from "react";
import Wizard from "./StoreFormComponent";
import {
  // Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
} from "reactstrap";
import { Check } from "react-feather";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

class AddMyStore extends React.Component {
  fileObj = [];
  fileArrayLogo = [];
  fileArrayShop = [];
  fileArrayGST = [];
  fileArrayTLIC = [];
  fileArrayPersonal = [];
  fileArrayPersonal = [];
  fileArrayCompany = [];
  fileArrayProof = [];

  constructor(props) {
    super(props);

    this.state = {
      store_name: "",
      store_desc: "",
      websiteUrl: "",
      store_email: "",
      phone_no: "",
      altphone_no: "",
      openingTym: "",
      closingTym: "",
      address_line1: "",
      address_line2: "",
      landmark: "",
      state: "",
      city: "",
      pincode: "",
      gst_no: "",
      business_type: "",
      pan_no: "",
      company_panno: "",
      address_proof: "",
      storeImg: "",
      shoplogo_img: "",
      gstImg: "",
      storepan_img: "",
      tradelicence_img: "",
      companypan_img: "",
      address_proof_img: "",
      sortorder: "",
      selectedFile: undefined,
      selectedName: "",
      selectedFile1: undefined,
      selectedName1: "",
      selectedFile2: undefined,
      selectedName2: "",
      selectedFile3: undefined,
      selectedName3: "",
      selectedFile4: undefined,
      selectedName4: "",
      selectedFile5: undefined,
      selectedName5: "",
      selectedFile6: undefined,
      selectedName6: "",
      status: "",
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thrusday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      day: [],
      file: [null],
      imgSrc: [],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeHandler1 = this.onChangeHandler1.bind(this);
    this.onChangeHandler2 = this.onChangeHandler2.bind(this);
    this.onChangeHandler3 = this.onChangeHandler3.bind(this);
    this.onChangeHandler4 = this.onChangeHandler4.bind(this);
  }

  handleClick = (event) => {
    const { name, checked } = event.target;
    var day = this.state.day;
    if (day.indexOf(name) != -1) {
      day.splice(day.indexOf(name), 1);
    } else {
      day.push(name);
    }
    console.log(day);
    this.setState({
      day,
    });

    this.setState((prevState) => {
      const days = prevState.days;
      days[name] = checked;
      return days;
    });
  };

  onChangeHandler = (event) => {
    var imgSrc = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayShop.push(reader.result);
        imgSrc.push([reader.result]);

        this.setState({
          imgSrc: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc);
    this.setState({
      selectedFile: event.target.files,
      imgSrc,
    });
    this.setState({
      selectedName: event.target.files.name,
    });
    console.log(event.target.files);
  };

  onChangeHandler1 = (event) => {
    var imgSrc1 = [];

    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      console.log(file);
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        this.fileArrayLogo.push(reader.result);
        imgSrc1.push([reader.result]);
        this.setState({
          imgSrc1: [reader.result],
        });
      }.bind(this);
    }

    console.log(imgSrc1);
    this.setState({
      selectedFile1: event.target.files,
      imgSrc1,
    });
    this.setState({
      selectedName1: event.target.files.name,
    });
    console.log(event.target.files);
  };
  onChangeHandler2 = (event) => {
    var imgSrc2 = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayGST.push(reader.result);
        imgSrc2.push([reader.result]);
        this.setState({
          imgSrc2: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc2);
    this.setState({
      selectedFile2: event.target.files,
      imgSrc2,
    });
    this.setState({
      selectedName2: event.target.files.name,
    });
    console.log(event.target.files);
  };
  onChangeHandler3 = (event) => {
    var imgSrc3 = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayPersonal.push(reader.result);
        imgSrc3.push([reader.result]);
        this.setState({
          imgSrc3: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc3);
    this.setState({
      selectedFile3: event.target.files,
      imgSrc3,
    });
    this.setState({
      selectedName3: event.target.files.name,
    });
    console.log(event.target.files);
  };
  onChangeHandler4 = (event) => {
    var imgSrc4 = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayTLIC.push(reader.result);
        imgSrc4.push([reader.result]);
        this.setState({
          imgSrc4: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc4);
    this.setState({
      selectedFile4: event.target.files,
      imgSrc4,
    });
    this.setState({
      selectedName4: event.target.files.name,
    });
    console.log(event.target.files);
  };
  onChangeHandler5 = (event) => {
    var imgSrc5 = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayCompany.push(reader.result);
        imgSrc5.push([reader.result]);
        this.setState({
          imgSrc5: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc5);
    this.setState({
      selectedFile5: event.target.files,
      imgSrc5,
    });
    this.setState({
      selectedName5: event.target.files.name,
    });
    console.log(event.target.files);
  };
  onChangeHandler6 = (event) => {
    var imgSrc6 = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayProof.push(reader.result);
        imgSrc6.push([reader.result]);
        this.setState({
          imgSrc6: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc6);
    this.setState({
      selectedFile6: event.target.files,
      imgSrc6,
    });
    this.setState({
      selectedName6: event.target.files.name,
    });
    console.log(event.target.files);
  };

  changeHandler1 = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  changeHandler2 = (e) => {
    if (e.target.value.length < 7)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  changeHandler3 = (e) => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  changeHandler4 = (e) => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };

  submitHandler = () => {
    // e.preventDefault();
    //console.log(this.state);

    const data = new FormData();
    data.append("store_name", this.state.store_name);
    data.append("store_desc", this.state.store_desc);
    data.append("websiteUrl", this.state.websiteUrl);
    data.append("store_email", this.state.store_email);
    data.append("phone_no", this.state.phone_no);
    data.append("altphone_no", this.state.altphone_no);
    data.append("day", this.state.day.toString());
    data.append("openingTym", this.state.openingTym.toString());
    data.append("closingTym", this.state.closingTym.toString());
    data.append("address_line1", this.state.address_line1);
    data.append("address_line2", this.state.address_line2);
    data.append("landmark", this.state.landmark);
    data.append("state", this.state.state);
    data.append("city", this.state.city);
    data.append("pincode", this.state.pincode);
    data.append("gst_no", this.state.gst_no);
    data.append("business_type", this.state.business_type);
    data.append("pan_no", this.state.pan_no);
    data.append("company_panno", this.state.company_panno);
    data.append("address_proof", this.state.address_proof);
    data.append("sortorder", this.state.sortorder);
    data.append("status", this.state.status);
    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("storeImg", file, file.name);
      }
    }
    for (const file of this.state.selectedFile1) {
      if (this.state.selectedFile1 !== null) {
        data.append("shoplogo_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile2) {
      if (this.state.selectedFile2 !== null) {
        data.append("gstImg", file, file.name);
      }
    }
    for (const file of this.state.selectedFile3) {
      if (this.state.selectedFile3 !== null) {
        data.append("storepan_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile4) {
      if (this.state.selectedFile4 !== null) {
        data.append("tradelicence_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile5) {
      if (this.state.selectedFile5 !== null) {
        data.append("companypan_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile6) {
      if (this.state.selectedFile6 !== null) {
        data.append("address_proof_img", file, file.name);
      }
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    for (var value of data.values()) {
      console.log(value);
    }

    axiosConfig
      .post("/addstore", data, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/myStore/storeList");
      })
      .catch((error) => {
        swal("Error!", "Error Received", "error");
        console.log(error);
      });
  };

  render() {
    const favColors = Object.keys(this.state.days)
      .filter((key) => this.state.days[key])
      .join(", ");

    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Store Name </Label>
                <Input
                  required
                  type="text"
                  name="store_name"
                  placeholder="Enter Store Name"
                  value={this.state.store_name}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Store image </Label>
                <CustomInput
                  required
                  type="file"
                  multiple
                  onChange={this.onChangeHandler}
                />

                <div>
                  {this.fileArrayShop?.map((value) => (
                    <img
                      src={value}
                      style={{
                        padding: "3px",
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  ))}
                </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Store Description </Label>
                <Input
                  required
                  type="text"
                  name="store_desc"
                  placeholder="Store description"
                  value={this.state.store_desc}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Website Url </Label>
                <Input
                  required
                  type="text"
                  name="websiteUrl"
                  placeholder="Enter Website Url"
                  value={this.state.websiteUrl}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Store Email </Label>
                <Input
                  required
                  type="email"
                  name="store_email"
                  placeholder="Email"
                  value={this.state.store_email}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Phone No. </Label>
                <Input
                  required
                  type="number"
                  name="phone_no"
                  placeholder="Phone No."
                  value={this.state.phone_no}
                  onChange={this.changeHandler3}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Alt Phone No. </Label>
                <Input
                  required
                  type="number"
                  name="altphone_no"
                  placeholder="Alt Phone No."
                  value={this.state.altphone_no}
                  onChange={this.changeHandler4}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <div>
                <Label> Store Working Days </Label>
                <div>
                  <Input
                    checked={this.state.days.monday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="monday"
                  />
                  Monday
                </div>
                <div>
                  <Input
                    checked={this.state.days.tuesday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="tuesday"
                  />
                  Tuesday
                </div>
                <div>
                  <Input
                    checked={this.state.days.wednesday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="wednesday"
                  />
                  Wednesday
                </div>
                <div>
                  <Input
                    checked={this.state.days.thrusday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="thrusday"
                  />
                  Thrusday
                </div>
                <div>
                  <Input
                    checked={this.state.days.friday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="friday"
                  />
                  Friday
                </div>
                <div>
                  <Input
                    checked={this.state.days.saturday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="saturday"
                  />
                  Saturday
                </div>
                <div>
                  <Input
                    checked={this.state.days.sunday}
                    onChange={this.handleClick}
                    type="checkbox"
                    name="sunday"
                  />
                  Sunday
                </div>
              </div>
              <p
                className="text-primary"
                style={{ fontWeight: 800, textTransform: "capitalize" }}
              >
                {favColors}
              </p>
            </Col>
            <Col>
              <FormGroup>
                <Label> Opening Time </Label>
                <Input
                  required
                  type="time"
                  name="openingTym"
                  placeholder="Opening Time"
                  value={this.state.openingTym}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Closing Time </Label>
                <Input
                  required
                  type="time"
                  name="closingTym"
                  min="12:00"
                  placeholder="Closing Time"
                  value={this.state.closingTym}
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
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Address Line1 </Label>
                <Input
                  required
                  type="textarea"
                  name="address_line1"
                  placeholder="Adderss Line1"
                  value={this.state.address_line1}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Address Line2 </Label>
                <Input
                  required
                  type="textarea"
                  name="address_line2"
                  placeholder="Adderss Line2"
                  value={this.state.address_line2}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Landmark </Label>
                <Input
                  required
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                  value={this.state.landmark}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> State </Label>
                <Input
                  required
                  type="text"
                  name="state"
                  placeholder="State"
                  value={this.state.state}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> City </Label>
                <Input
                  required
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Pin Code </Label>
                <Input
                  required
                  type="number"
                  name="pincode"
                  value={this.state.pincode}
                  onChange={this.changeHandler2}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Store GST No. </Label>
                <Input
                  required
                  type="text"
                  name="gst_no"
                  maxLength="15"
                  value={this.state.gst_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Business Type </Label>
                <CustomInput
                  required
                  type="select"
                  name="business_type"
                  placeholder="Business Type"
                  value={this.state.business_type}
                  onChange={this.changeHandler}
                >
                  <option> Select </option>
                  <option value="Personal"> Personal </option>
                  <option value="Proprietorship"> Proprietorship </option>
                </CustomInput>
              </FormGroup>
            </Col>
            {this.state.business_type !== "Proprietorship" ? (
              <Col md="6" sm="12">
                <FormGroup>
                  <Label> Personal Pan No. </Label>
                  <Input
                    required
                    type="text"
                    name="pan_no"
                    value={this.state.pan_no}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
              </Col>
            ) : (
              <>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label> Personal Pan No. </Label>
                    <Input
                      required
                      type="text"
                      name="pan_no"
                      value={this.state.pan_no}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label> Company Pan No. </Label>
                    <Input
                      required
                      type="text"
                      name="company_panno"
                      value={this.state.company_panno}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </>
            )}
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Address Proof ID </Label>
                <CustomInput
                  required
                  type="select"
                  name="address_proof"
                  placeholder="Adderss Proof"
                  value={this.state.address_proof}
                  onChange={this.changeHandler}
                >
                  <option> Select </option>
                  <option value="Address Proof ID"> Address Proof ID </option>
                  <option value="Electricity Bill"> Electricity Bill </option>
                  <option value="Telephone Bill"> Telephone Bill </option>
                  <option value="Rental Agreementy"> Rental Agreement </option>
                </CustomInput>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 4,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Shop Logo Image </Label>
                <CustomInput
                  required
                  type="file"
                  multiple
                  onChange={this.onChangeHandler1}
                />
                <div>
                  {this.fileArrayLogo?.map((value) => (
                    <img
                      src={value}
                      height="80vh"
                      width="100px"
                      style={{ margin: "3px" }}
                    />
                  ))}
                </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> GST Image </Label>
                <CustomInput
                  required
                  type="file"
                  multiple
                  onChange={this.onChangeHandler2}
                />
                <div>
                  {this.fileArrayGST?.map((value) => (
                    <img
                      src={value}
                      height="80vh"
                      width="100px"
                      style={{ margin: "3px" }}
                    />
                  ))}
                </div>
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label> Trade Licence Image </Label>
                <CustomInput
                  required
                  type="file"
                  multiple
                  onChange={this.onChangeHandler4}
                />
                <div>
                  {this.fileArrayTLIC?.map((value) => (
                    <img
                      src={value}
                      height="80vh"
                      width="100px"
                      style={{ margin: "3px" }}
                    />
                  ))}
                </div>
              </FormGroup>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-2">
              <Label> Personal Image </Label>
              <CustomInput
                required
                type="file"
                multiple
                onChange={this.onChangeHandler3}
              />
              <div>
                {this.fileArrayPersonal?.map((value) => (
                  <img
                    src={value}
                    height="80vh"
                    width="100px"
                    style={{ margin: "3px" }}
                  />
                ))}
              </div>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Company Pan Image </Label>
                <CustomInput
                  required
                  type="file"
                  multiple
                  onChange={this.onChangeHandler5}
                />
                <div>
                  {this.fileArrayCompany?.map((value) => (
                    <img
                      src={value}
                      height="80vh"
                      width="100px"
                      style={{ margin: "3px" }}
                    />
                  ))}
                </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Address Proof Image </Label>
                <CustomInput
                  required
                  type="file"
                  multiple
                  onChange={this.onChangeHandler6}
                />
                <div>
                  {this.fileArrayProof?.map((value) => (
                    <img
                      src={value}
                      height="80vh"
                      width="100px"
                      style={{ margin: "3px" }}
                    />
                  ))}
                </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Sort Oder </Label>
                <Input
                  required
                  type="number"
                  name="sortorder"
                  placeholder="Sort Order"
                  value={this.state.sortorder}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label className="mb-1"> Status </Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <Input
                    required
                    style={{
                      marginRight: "3px",
                    }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span
                    style={{
                      marginRight: "20px",
                      fontWeight: 800,
                    }}
                  >
                    Active
                  </span>
                  <Input
                    required
                    style={{
                      marginRight: "3px",
                    }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span
                    style={{
                      marginRight: "3px",
                      fontWeight: 800,
                    }}
                  >
                    Inactive
                  </span>
                </div>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ];
    //
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Add My Store
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() => history.push("/app/myStore/storeList")}
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Wizard enableAllSteps onFinish={this.submitHandler} steps={steps} />
        </CardBody>
      </Card>
    );
  }
}

export default AddMyStore;

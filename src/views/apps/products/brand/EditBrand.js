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

export class EditBrand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      brand_img: "",
      desc: "",
      sortorder: "",
      status: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  onChangeHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonebrand/${id}`,{
        headers:{
          "auth-adtoken" : localStorage.getItem("auth-adtoken")
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          brand_img: response.data.data.brand_img,
          name: response.data.data.name,
          desc: response.data.data.desc,
          sortorder: response.data.data.sortorder,
          status: response.data.data.status,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    //console.log(this.props.match.params, this.state);
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("desc", this.state.desc);
    data.append("sortorder", this.state.sortorder);
    data.append("status", this.state.status);
    // console.log(this.state.selectedFile);
    if (this.state.selectedFile !== null) {
      data.append(
        "brand_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/editbrand/${id}`, data,{
        headers:{
          "auth-adtoken" : localStorage.getItem("auth-adtoken")
        }
      })
      .then(response => {
        console.log(response);
        this.props.history.push("/app/products/brand/brandList");
      })
      .catch(error => {
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
                Edit Brand
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/products/brand/brandList")}
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
                    <Label>Brand Name</Label>
                    <Input
                      type="text"
                      placeholder="Brand Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Sort Order</Label>
                    <Input
                      type="number"
                      placeholder="Sort Order"
                      name="sortorder"
                      value={this.state.sortorder}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      placeholder="Description"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Brand Image / Logo</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={e => this.changeHandler1(e)}
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
                <Button.Ripple
                  color="danger"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Update Brand
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditBrand;

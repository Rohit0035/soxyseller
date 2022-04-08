import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  CustomInput,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

export default class AddUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addemp: "",
      emp: "",
      tabs: {
        dashboard: false,
        store: false,
        contacts: false,
        inventory: false,
        stockControl: false,
        coupons: false,
        subscription: false,
        billing: false,
        order: false,
        purchase: false,
        reports: false,
        rolesPermission: false,
        setting: false,
      },
      employeeD: [],
    };
  }

  handleClick = (event) => {
    const { name, checked } = event.target;
    this.setState((prevState) => {
      const tabs = prevState.tabs;
      tabs[name] = checked;
      return tabs;
    });
    console.log(this.state);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    //Employee
    axiosConfig
      .get("/getemployecreatedbyseller", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ employeeD: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axiosConfig
      .post("/addrole", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/roleAndPermission/roleList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    const favtabs = Object.keys(this.state.tabs)
      .filter((key) => this.state.tabs[key])
      .join(", ");
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Assign Tabs Permission
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/roleAndPermission/RoleList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="12">
                  <Row className="m-2">
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label>Select Employee</Label>
                        <CustomInput
                          type="select"
                          name="emp"
                          placeholder="Employee"
                          onChange={this.changeHandler}
                          value={this.state.emp}
                        >
                          <option>Select Employee....</option>
                          {this.state.employeeD?.map((emp) => (
                            <option key={emp?._id} value={emp?._id}>
                              {emp?.name}
                            </option>
                          ))}
                        </CustomInput>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.dashboard}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="dashboard"
                        />{" "}
                        Dashboard
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.store}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="store"
                        />{" "}
                        Store
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.contacts}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="contacts"
                        />{" "}
                        Contacts
                      </div>
                    </Col>

                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.inventory}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="inventory"
                        />{" "}
                        Inventory
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.stockControl}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="stockControl"
                        />{" "}
                        Stock Control
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.coupons}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="coupons"
                        />{" "}
                        Coupons
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.subscription}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="subscription"
                        />{" "}
                        Subscription
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.billing}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="billing"
                        />{" "}
                        Billing
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.order}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="order"
                        />{" "}
                        Order
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.purchase}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="purchase"
                        />{" "}
                        Purchase
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.reports}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="reports"
                        />{" "}
                        Reports
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.rolesPermission}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="rolesPermission"
                        />{" "}
                        Permissions
                      </div>
                    </Col>
                    <Col lg="3" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.setting}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="setting"
                        />{" "}
                        Setting
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Permission
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

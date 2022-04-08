import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardHeader,
  Card,
  Col,
  Row,
  Container,
} from "reactstrap";
import glogo from "../../../../assets/img/pages/glogo.png";

import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import { connect } from "react-redux";
import { signupWithFirebase } from "../../../../redux/actions/auth/registerActions";
import { history } from "../../../../history";
class RegisterFirebase extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    confirmPass: "",
  };

  handleRegister = (e) => {
    e.preventDefault();
    this.props.signupWithFirebase(
      this.state.email,
      this.state.password,
      this.state.name
    );
  };

  render() {
    return (
      <Container>
        <Row className="m-0 justify-content-center">
          <Col
            sm="8"
            xl="7"
            lg="10"
            md="8"
            className="d-flex justify-content-center"
          >
            <Col lg="8" md="12" className="p-1">
              <Card className="rounded-0  px-2 pb-3 login-tabs-container">
                <CardHeader className="pb-1 justify-content-center">
                  <img src={glogo} class="img-fluid" alt="..." />
                  {/* <img src={glogo} alt="glogo" /> */}
                  <br />
                </CardHeader>
                <Form onSubmit={this.handleRegister}>
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <div class="form-group">
                      <Label>Name</Label>
                      <Input
                        type="text"
                        class="form-control mt-1 mb-3"
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                        required
                        name="name"
                      />
                    </div>
                  </FormGroup>
                  {/* <FormGroup className="form-label-group position-relative has-icon-left">
          <Input
            type="text"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Label>Name</Label>
        </FormGroup> */}

                  {/* <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup> */}
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <div class="form-group">
                      <Label>Gmail</Label>
                      <Input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        required
                        name="email"
                      />
                    </div>
                  </FormGroup>

                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <div class="form-group">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        required
                      />
                    </div>
                  </FormGroup>

                  {/* <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup> */}
                  <FormGroup className="form-label-group">
                    <div class="form-group">
                      <Label>Confirm Password</Label>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={this.state.confirmPass}
                        onChange={(e) =>
                          this.setState({ confirmPass: e.target.value })
                        }
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label=" I accept the terms & conditions."
                      defaultChecked={true}
                    />
                  </FormGroup>
                  <div className="d-flex justify-content-between">
                    <Button.Ripple
                      onClick={() => history.push("/pages/login")}
                      color="primary"
                      outline
                    >
                      Login
                    </Button.Ripple>
                    <Button.Ripple color="primary" type="submit">
                      Register
                    </Button.Ripple>
                  </div>
                </Form>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.register,
  };
};
export default connect(mapStateToProps, { signupWithFirebase })(
  RegisterFirebase
);

// import React from "react"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Nav,
//   NavItem,
//   NavLink,
//   TabContent,
//   TabPane
// } from "reactstrap"
// import classnames from "classnames"
// import RegisterFirebase from "./RegisterFirebase"
// //import RegisterAuth0 from "./RegisterAuth0"
// import RegisterJWT from "./RegisterJWT"
// import registerImg from "../../../../assets/img/pages/register.jpg"
// import "../../../../assets/scss/pages/authentication.scss"

// class Register extends React.Component {
//   state = {
//     activeTab: "1"
//   }
//   toggle = tab => {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab
//       })
//     }
//   }
//   render() {
//     return (
//       <Row className="m-0 justify-content-center">
//         <Col
//           sm="8"
//           xl="7"
//           lg="10"
//           md="8"
//           className="d-flex justify-content-center"
//         >
//           <Card className="bg-authentication rounded-0 mb-0 w-100">
//             <Row className="m-0">
//               <Col
//                 lg="6"
//                 className="d-lg-block d-none text-center align-self-center px-1 py-0"
//               >
//                 <img className="mr-1" src={registerImg} alt="registerImg" />
//               </Col>
//               <Col lg="6" md="12" className="p-0">
//                 <Card className="rounded-0 mb-0 p-2">
//                   <CardHeader className="pb-1 pt-50">
//                     <CardTitle>
//                       <h4 className="mb-0">Create Account</h4>
//                     </CardTitle>
//                   </CardHeader>
//                   <p className="px-2 auth-title mb-0">
//                     Fill the below form to create a new account.
//                   </p>
//                   <Nav tabs className="px-2">
//                     <NavItem>
//                       <NavLink
//                         className={classnames({
//                           active: this.state.activeTab === "1"
//                         })}
//                         onClick={() => {
//                           this.toggle("1")
//                         }}
//                       >
//                         JWT
//                       </NavLink>
//                     </NavItem>
//                     <NavItem>
//                       <NavLink
//                         className={classnames({
//                           active: this.state.activeTab === "2"
//                         })}
//                         onClick={() => {
//                           this.toggle("2")
//                         }}
//                       >
//                         Firebase
//                       </NavLink>
//                     </NavItem>
//                     <NavItem>
//                       {/* <NavLink
//                         className={classnames({
//                           active: this.state.activeTab === "3"
//                         })}
//                         onClick={() => {
//                           this.toggle("3")
//                         }}
//                       >
//                         Auth0
//                       </NavLink> */}
//                     </NavItem>
//                   </Nav>
//                   <CardBody className="pt-1 pb-50">
//                     <TabContent activeTab={this.state.activeTab}>
//                       <TabPane tabId="1">
//                         <RegisterJWT />
//                       </TabPane>
//                       <TabPane tabId="2">
//                         <RegisterFirebase />
//                       </TabPane>
//                       <TabPane tabId="3">
//                         {/* <RegisterAuth0 /> */}
//                       </TabPane>
//                     </TabContent>
//                   </CardBody>
//                 </Card>
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//       </Row>
//     )
//   }
// }
// export default Register;

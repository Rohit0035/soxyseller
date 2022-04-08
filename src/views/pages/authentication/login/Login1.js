import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import glogo from "../../../../assets/img/pages/glogo.png";
//import loginImg from "../../../../assets/img/pages/login.png";
import "../../../../assets/scss/pages/authentication.scss";
import LoginAuth0 from "./LoginAuth0";
import LoginFirebase from "./LoginFirebase";
import LoginJWT from "./LoginJWT";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    activeTab: "1",
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={glogo} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 login-tabs-container">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      <h4 className="mb-0">Login</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title">
                    Welcome back, please login to your account.
                  </p>
                  <Nav tabs className="px-2">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1",
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        JWT
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2",
                        })}
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        Firebase
                      </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "3",
                        })}
                        onClick={() => {
                          this.toggle("3");
                        }}
                      >
                        Auth0
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <LoginJWT />
                    </TabPane>
                    <TabPane tabId="2">
                      <LoginFirebase />
                    </TabPane>
                    <TabPane tabId="3">
                      <LoginAuth0 />
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps)(Login);

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   CardHeader,
//   Card,
//   FormGroup,
//   Form,
//   Input,
//   Button,
//   Label,
//   Col,
//   Row,
//   Container,
// } from "reactstrap";
// import glogo from "../../../../assets/img/pages/glogo.png";
// import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
// import { Mail, Lock, Check } from "react-feather";
// import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
// import { connect } from "react-redux";
// //import { history } from "../../../../history";

// class Login extends React.Component {
//   state = {
//     email: "demo@demo.com",
//     password: "demo",
//     remember: false,
//   };

//   handleLogin = (e) => {
//     e.preventDefault();
//     this.props.loginWithJWT(this.state);
//   };

//   render() {
//     return (
//       <Container>
//         <Row className="m-0 justify-content-center">
//           <Col
//               sm="8"
//               xl="7"
//               lg="10"
//               md="8"
//               className="d-flex justify-content-center"
//            >
//            <Col lg="7" md="12" className="p-1">
//             <Card className="rounded-0 mb-0 px-2 login-tabs-container">
//               <CardHeader className="pb-1 justify-content-center">
//                 <img src={glogo} class="img-fluid" alt="glogo" />
//                   {/* <img src={glogo} alt="glogo" /> */}
//                 <br/>
//               </CardHeader>

//               <div className="mt-0 mb-3 ">
//                 <Form action="/" onSubmit={this.handleLogin}>
//                   <FormGroup className="form-label-group position-relative has-icon-left">
//                     <div class="form-group">
//                       <Label>Gmail</Label>
//                         <Input type="text"
//                                class="form-control mt-1 mb-3"
//                                placeholder="Email"
//                                name="email"
//                                value={this.state.email}
//                                onChange={(e) => this.setState({ email: e.target.value })}
//                                required
//                                />
//                     </div>
//                   </FormGroup>
//                   <FormGroup className="form-label-group position-relative has-icon-left">
//                     <div class="form-group">
//                       <Label>Password</Label>
//                         <Input  type="password"
//                                 placeholder="Password"
//                                 value={this.state.password}
//                                 onChange={(e) =>
//                                 this.setState({ password: e.target.value })}
//                                 required />
//                     </div>
//                   </FormGroup>

//                   <FormGroup className="d-flex justify-content-between align-items-center">
//                     <Checkbox   color="primary"
//                                 icon={<Check className="vx-icon" size={16} />}
//                                 label="Remember me"
//                                 defaultChecked={false}
//                                 onChange={this.handleRemember}/>

//                       <div className="float-right">
//                         <Link to="/pages/forgot-password">Forgot Password?</Link>
//                       </div>
//                   </FormGroup>
//                   <div className="d-flex justify-content-between">
//                     {/* <Button.Ripple color="primary" outline
//                           onClick={() => {history.push("/pages/register");}}>
//                           Register
//                         </Button.Ripple> */}
//                     <Button.Ripple color="primary" type="submit">Login</Button.Ripple>
//                   </div>
//                 </Form>
//               </div>
//             </Card>
//           </Col>
//         </Col>
//       </Row>
//     </Container>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     values: state.auth.login,
//   };
// };
// export default connect(mapStateToProps, { loginWithJWT })(Login);

// import React from "react";
// import {
//   Card,
//   CardHeader,
//   Form,
//   FormGroup,
//   Button,
//   Input,
//   Label,
//   Row,
//   Col,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { Lock, Check, Mail } from "react-feather";
// import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
// //import classnames from "classnames";
// import wlogo from "../../../../assets/img/pages/wlogo.png";
// import "../../../../assets/scss/pages/authentication.scss";
// import { history } from "../../../../history";
// import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
// import { connect } from "react-redux";

// //import LoginAuth0 from "./LoginAuth0";
// //import LoginFirebase from "./LoginFirebase";
// //import LoginJWT from "./LoginJWT";

// class Login extends React.Component {
//   state = {
//     email: "demo@demo.com",
//     password: "demodemo",
//     remember: false,
//   };

//   handleLogin = (e) => {
//     e.preventDefault();
//     this.props.loginWithJWT(this.state);
//   };
//   render() {
//     return (
// <Row className="m-0 justify-content-center">
//   <Col
//     sm="8"
//     xl="7"
//     lg="10"
//     md="8"
//     className="d-flex justify-content-center"
//   >
//     <Col lg="7" md="12" className="p-1">
//       <Card className="rounded-0 mb-0 px-2 login-tabs-container">
//         <CardHeader className="pb-1 justify-content-center">
//           <img src={wlogo} alt="wlogo" />
//         </CardHeader>
//         <div className="mt-3">
//           <Form action="/" onSubmit={this.handleLogin}>
//             <FormGroup className="form-label-group position-relative has-icon-left">
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={this.state.email}
//                 onChange={(e) => this.setState({ email: e.target.value })}
//                 required
//               />
//               <div className="form-control-position">
//                 <Mail size={15} />
//               </div>
//               <Label>Email</Label>
//             </FormGroup>
//             <FormGroup className="form-label-group position-relative has-icon-left">
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 value={this.state.password}
//                 onChange={(e) =>
//                   this.setState({ password: e.target.value })
//                 }
//                 required
//               />
//               <div className="form-control-position">
//                 <Lock size={15} />
//               </div>
//               <Label>Password</Label>
//             </FormGroup>
//             <FormGroup className="d-flex justify-content-between align-items-center">
//               <Checkbox
//                 color="primary"
//                 icon={<Check className="vx-icon" size={16} />}
//                 label="Remember me"
//                 defaultChecked={false}
//                 onChange={this.handleRemember}
//               />
//               <div className="float-right">
//                 <Link to="/pages/forgot-password">Forgot Password?</Link>
//               </div>
//             </FormGroup>
//             <div className="d-flex justify-content-between">
//               <Button.Ripple
//                 color="primary"
//                 outline
//                 onClick={() => {
//                   history.push("/pages/register");
//                 }}
//               >
//                 Register
//               </Button.Ripple>
//               <Button.Ripple color="primary" type="submit">
//                 Login
//               </Button.Ripple>
//             </div>
//           </Form>
//         </div>
//       </Card>
//     </Col>
//   </Col>
// </Row>
//     );
//   }
// }
// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Container,
} from "reactstrap";
//import glogo from "../../../../assets/img/pages/glogo.png";
//import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
//import { Mail, Lock, Check } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
//import Select from "../../../forms/form-elements/select/Select";
//import { history } from "../../../../history";
class Subs extends React.Component {
  state = {
    // email: "demo@demo.com",
    // password: "demo",
    // remember: false,
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.loginWithJWT(this.state);
  };

  render() {
    return (
      <Container>
          
        <Row className="m-0 justify-content-center">
          {/* <Col
              sm="8"
              xl="7"
              lg="10"
              md="8"
              className="d-flex justify-content-center"
           > */}
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <hgroup>
                   
                   Subscribe for
                   <select id="">
                       <option value="option">Option</option>
                       <option value="0">daily</option>
                       <option value="1" selected>weekly</option>
                       <option value="2">monthly</option>
                    </select>
                    gominSeller
                    
                  {/* <h1 class="free">For Free</h1> */}
                </hgroup>
                <div class="well">
                  <Form action="/" onSubmit={this.handleLogin}>
                    <div class="input-group">
                      <Input 
                            class="btn btn-lg" 
                            name="email" 
                            id="email" 
                            type="email" 
                            placeholder="Your Email" 
                            required
                     />
                    <Button class="btn btn-info btn-lg" type="submit">Submit</Button>
                </div>
              </Form>
            </div>
            <small class="promise"><em>We won't send spam.</em></small>
          </div>
        </div>
      </div>
    {/* </Col> */}
  </Row>
</Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(Subs);

//   <Container>
    //     <Row className="m-0 justify-content-center">
    //       <Col
    //           sm="8"
    //           xl="7"
    //           lg="10"
    //           md="8"
    //           className="d-flex justify-content-center"
    //        >
    //        <Col lg="7" md="12" className="p-1">
    //         <Card className="rounded-0 mb-0 px-2 login-tabs-container">
    //           <CardHeader className="pb-1 justify-content-center">
    //             <img src={glogo} class="img-fluid" alt="glogo" />
    //               {/* <img src={glogo} alt="glogo" /> */}
    //             <br/>
    //           </CardHeader>
              
    //           <div className="mt-0 mb-3 ">
    //             <Form action="/" onSubmit={this.handleLogin}>
    //               <FormGroup className="form-label-group position-relative has-icon-left">
    //                 <div class="form-group">
    //                   <Label>Gmail</Label>
    //                     <Input type="text"
    //                            class="form-control mt-1 mb-3"
    //                            placeholder="Email"
    //                            name="email"
    //                            value={this.state.email}
    //                            onChange={(e) => this.setState({ email: e.target.value })}
    //                            required
    //                            />
    //                 </div>
    //               </FormGroup>
    //               <FormGroup className="form-label-group position-relative has-icon-left">
    //                 <div class="form-group">
    //                   <Label>Password</Label>
    //                     <Input  type="password"
    //                             placeholder="Password"
    //                             value={this.state.password}
    //                             onChange={(e) =>
    //                             this.setState({ password: e.target.value })}
    //                             required />
    //                 </div>
    //               </FormGroup> 

    //               <FormGroup className="d-flex justify-content-between align-items-center">
    //                 <Checkbox   color="primary"
    //                             icon={<Check className="vx-icon" size={16} />}
    //                             label="Remember me"
    //                             defaultChecked={false}
    //                             onChange={this.handleRemember}/>

    //                   <div className="float-right">
    //                     <Link to="/pages/forgot-password">Forgot Password?</Link>
    //                   </div>
    //               </FormGroup>
    //               <div className="d-flex justify-content-between">
    //                 {/* <Button.Ripple color="primary" outline
    //                       onClick={() => {history.push("/pages/register");}}>
    //                       Register
    //                     </Button.Ripple> */}
    //                 <Button.Ripple color="primary" type="submit">Login</Button.Ripple>
    //               </div>
    //             </Form>
    //           </div>
    //         </Card>
    //       </Col>
    //     </Col>
    //   </Row>
    // </Container>
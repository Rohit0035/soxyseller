import React from "react";
import { Card, CardBody, Media, Row, Col, Button } from "reactstrap";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
//import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";

//import userImg from "../../../assets/img/portrait/small/avatar-s-18.jpg";
import "../../../assets/scss/pages/users.scss";
import { history } from "../../../history";

class ViewSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    //console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewoneseller/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.data)

    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    Seller Detail
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/seller/sellerList")}
                  >
                    Back
                  </Button>
                </Col>
              </Row>

              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" lg="6">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={this.state.data.staffImage}
                          alt="Generic placeholder image"
                          height="180"
                          width="180"
                        />
                      </Media>
                      <Media body>
                        <Row className="ml-4">
                          <Col sm="9" md="12" lg="12">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  User Id
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.staffID}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Name
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.staffname}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.data.email}</span>
                                </div>
                              </div>
                            </div>
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Status
                                </div>
                                <div>{this.state.data.status}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Role
                                </div>
                                <div>{this.state.data.role}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Description
                                </div>
                                <div>
                                  <span>{this.state.data.desc}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Edit</span>
                      </Link>
                    </Button.Ripple>
                    {/* <Button.Ripple color="danger" outline>
                      <Trash size={15} />
                      <span className="align-middle ml-50">Delete</span>
                    </Button.Ripple> */}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          {/* <Col sm="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1>Information</h1>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Birth Date
                    </div>
                    <div>{this.state.data.date_of_birth}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Mobile No
                    </div>
                    <div>{this.state.data.mobile_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Phone No.
                    </div>
                    <div>{this.state.data.phone_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">City</div>
                    <div>{this.state.data.city}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      State
                    </div>
                    <div>{this.state.data.state}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Country
                    </div>
                    <div>{this.state.data.country}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Pin Code
                    </div>
                    <div>{this.state.data.pincode}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Marriage Anniversary
                    </div>
                    <div>{this.state.data.marriage_anniversary}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Technician Associate Number
                    </div>
                    <div>{this.state.data.technician_assot_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      GST Number
                    </div>
                    <div>{this.state.data.gstin_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Udhyog Aadhar Number
                    </div>
                    <div>{this.state.data.udhyog_adhar_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      License Number
                    </div>
                    <div>{this.state.data.licence_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Government Licence
                    </div>
                    <div>{this.state.data.gov_licence_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Aadhar Number
                    </div>
                    <div>{this.state.data.aadhar_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      PAN Number
                    </div>
                    <div>{this.state.data.pancard_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Bank Name
                    </div>
                    <div>{this.state.data.bank_name}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Account Holder Name
                    </div>
                    <div>{this.state.data.bank_user_name}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Bank Account Number
                    </div>
                    <div>{this.state.data.bank_account_no}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      IFSC Code
                    </div>
                    <div>{this.state.data.ifsc_code}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col> */}
          <Col sm="12" md="6">
            {/* <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Twitter
                    </div>
                    <div className="text-truncate">
                      <span>https://twitter.com/crystal</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Facebook
                    </div>
                    <div className="text-truncate">
                      <span>https://www.facebook.com/crystal</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Instagram
                    </div>
                    <div className="text-truncate">
                      <span>https://www.instagram.com/crystal</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Github
                    </div>
                    <div className="text-truncate">
                      <span>https://github.com/crystal</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      CodePen
                    </div>
                    <div className="text-truncate">
                      <span>https://codepen.io/crystal</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Slack
                    </div>
                    <div className="text-truncate">
                      <span>@crystal</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card> */}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ViewSeller;

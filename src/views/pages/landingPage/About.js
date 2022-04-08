import React from "react";
import "../../../assets/style/style.css";
import logo1 from "../../../assets/img/landing/images.png";
import logo2 from "../../../assets/img/landing/cstomer.png";
import logo3 from "../../../assets/img/landing/subscription.png";
import logo4 from "../../../assets/img/landing/invenory.png";
import logo5 from "../../../assets/img/landing/automate.png";
import logo6 from "../../../assets/img/landing/order.png";
import logo7 from "../../../assets/img/landing/purchase.png";
import logo8 from "../../../assets/img/landing/visibility.png";
import logo9 from "../../../assets/img/landing/location.png";

import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardTitle,
  CardText,
} from "reactstrap";

const About = () => {
  return (
    <div>
      <Container className="pt-5 ">
        <Row>
          <Col lg="12" className="d-flex justify-content-center pb-5">
            <h1>Why Use Buynaa Stock Management Solution ?</h1>
          </Col>
        </Row>
        <CardGroup className="pcard">
          <Row>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    Give access to features based upon employee role or
                    designation.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo2}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Customer Management</CardTitle>
                  <CardText>
                    Manage your customers, send timely reminders & promotions,
                    and increase your sales.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo3}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Subscriptions Management and Billing
                  </CardTitle>
                  <CardText>Start managing your business right away</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo4}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Inventory & Stock Management</CardTitle>
                  <CardText>
                    Manage your inventory and control your stock on a real -
                    time basis.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo5}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Automated order workflow</CardTitle>
                  <CardText>Fewer clicks, faster order processing.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo6}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Order Billing</CardTitle>
                  <CardText>
                    Process Unlimited orders & create GST based professional
                    invoices.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo7}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Purchase Order Management</CardTitle>
                  <CardText>
                    Create PO, reach out to your suppliers and replenish your
                    inventory. Never regret low stocks or go out of stock again!
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo8}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Visibility</CardTitle>
                  <CardText>
                    Dedicated Store Profile with revlews& ratings.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3 w-100 h-100">
                <img
                  src={logo9}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Location based profile discovery by customer
                  </CardTitle>
                  <CardText>
                    Make better decisions based on 10+ reports.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default About;

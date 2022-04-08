import React from "react";
import "../../../assets/style/style.css";
import { FaUser } from "react-icons/fa";
import tax from "../../../assets/img/landing/tax.png";
import bank from "../../../assets/img/landing/bank.png";
import pan from "../../../assets/img/landing/pan.png";
import { Row, Col, Container, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FunData = () => {
  return (
    <Card className="" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <Container className=" d-flex justify-content-center align-items-center pt-5">
        <Row>
          <Col lg="12" className="pb-4">
            <h2 className="" style={{ color: "#1877f2", fontWeight: 700 }}>
              What Do You Need To Get Started?
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center align-items-center">
        <Row style={{ marginLeft: "5rem" }}>
          <Col
            lg="3"
            className="d-flex flex-column justify-content-center align-items-center mx-3"
          >
            <img src={tax} className="mb-3" height={70} />
            <h6 className="text-center font-weight-bolder lh-base">
              Goods & Servces Tax Identification Number
            </h6>
          </Col>
          <Col
            lg="3"
            className="d-flex flex-column justify-content-center align-items-center mx-3"
          >
            <img src={bank} className="mb-3" height={70} />
            <h6 className="text-center font-weight-bolder lh-base">
              Bank Accounts <br /> Details
            </h6>
          </Col>
          <Col
            lg="3"
            className="d-flex flex-column justify-content-center align-items-center mx-3"
          >
            <img src={pan} className="mb-3" height={70} />
            <h6 className="text-center font-weight-bolder lh-base">
              Permanent Account <br /> Number
            </h6>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default FunData;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WonderNavbar from "./WonderNavbar";
import About from "./About";
import OurVision from "./OurVision";
import OurMission from "./OurMission";
import FunData from "./FunData";
import FooterHeader from "./FooterHeader";
import Footer from "./Footer";
import { Button, Col, Container, Row } from "reactstrap";
import banner from "../../../assets/img/landing/banner.png";
import "../../../assets/style/style.css";
import { history } from "../../../history";

export class Home extends Component {
  async componentDidMount() {
    var token = localStorage.getItem("auth-adtoken");
    if (token != null && token != undefined && token != "") {
      this.props.history.push("/analyticsDashboard");
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <>
        <WonderNavbar />
        <section className="bg-light">
          <Container>
            <Row>
              <Col lg="6">
                <div className="" style={{}}>
                  <div className="slider-item">
                    <div
                      className="slider-text"
                      style={{ paddingLeft: "", paddingTop: "3rem" }}
                    >
                      <h1 className="sttitle">
                        Manage your Stock the 
                        <spn className=""> right way </spn>
                      </h1>
                      <p className="font-weight-bold fs-2x">
                        Do MORE with Buynaa Inventory  Mangement & Billing
                        Solution
                      </p>

                      <div className="slider-btn">
                        <Button color="dark">GET STARTED</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                {" "}
                <div>
                  <img
                    src={banner}
                    alt="First slide"
                    className="seller-img   "
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <Quality /> */}
        {/* <ProductCategory /> */}
        {/* <Product /> */}
        {/* <Video />
        <BlogSection />
        <NewsSection />
        <Brochure />
        <Subscribe />*/}
        <About />
        <OurVision />
        <OurMission />
        <FunData /> 
        {/* <FooterHeader /> */}
        <Footer />
      </>
    );
  }
}

export default Home;

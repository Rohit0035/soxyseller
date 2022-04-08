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
import banner2 from "../../../assets/img/landing/banner.png";
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
          <Container fluid>
            <Row>
              <Col lg="4">
                <div className="" style={{}}>
                  <div className="slider-item">
                    <div
                      className="slider-text"
                      style={{ paddingLeft: "50px", paddingTop: "15rem" }}
                    >
                      <h1 className="font-weight-bold">
                        Manage <br /> your Stock the <br />
                        <spn className="text-primary">the right way </spn>
                      </h1>
                      <p className="font-weight-bold fs-2x">
                        Do MORE with Buynaa Inventory <br /> Mangement & Billing
                        Solution
                      </p>

                      <div className="slider-btn">
                        <Button color="dark">GET STARTED</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="8">
                {" "}
                <div>
                  <img
                    src={banner2}
                    alt="First slide"
                    className=""
                    style={{ width: "60rem", height: "90vh" }}
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

import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions";
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker";
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders";
import SalesStat from "../../ui-elements/cards/analytics/Sales";
import ActivityTimeline from "./ActivityTimeline";
import "../../../assets/scss/pages/dashboard-analytics.scss";
// import SalesCard from "./SalesCard";
// import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained";
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived";
// import StatisticsCards from "../../ui-elements/cards/statistics/StatisticsCards";
// import DispatchedOrders from "./DispatchedOrders";
// import productsList from "../../apps/products/ProductsList";

import {
  Eye,
  // Monitor,
  // UserCheck,
  // Mail,
  // MessageSquare,
  // ShoppingBag,
  // Heart,
  // Smile,
  // Truck,
  // Cpu,
  // Server,
  // Activity,
  // AlertOctagon,
} from "react-feather";

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff";

class SellerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      users: {},
      staff: {},
      brand: {},
    };
  }

  componentDidMount() {
    axiosConfig
      .get("/total_product")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ product: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/total_users")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/total_staff")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ staff: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/total_brand")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ brand: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="3" md="12">
            <Card
              body
              inverse
              style={{ backgroundColor: "blue", borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Products
              </CardTitle>
              <Eye className="mb-1" />
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.product.totalProduct}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              body
              inverse
              style={{ backgroundColor: "#008000", borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Users
              </CardTitle>
              <Eye className="mb-1" />
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.users.totalUser}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              body
              inverse
              style={{ backgroundColor: "orange", borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Staff
              </CardTitle>
              <Eye className="mb-1" />
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.staff.totalStaff}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              body
              inverse
              style={{ backgroundColor: "gray", borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Brands
              </CardTitle>
              <Eye className="mb-1" />
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.brand.totalBrand}
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>

        <Row className="match-height">
          <Col lg="4">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4">
            <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="4">
            <ActivityTimeline />
          </Col>
        </Row>

        {/*
        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row> */}
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SellerDashboard;

import React, { Component } from "react";
import {
  Badge,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { Facebook, Instagram, Twitter } from "react-feather";

export class NotificationList extends Component {
  render() {
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Notifications
            </h1>
          </Col>
          <Col>
            {/* <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/contactUs/customer/customerList")
              }
            >
              Back
            </Button> */}
          </Col>
        </Row>
        <CardBody>
          <ListGroup>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
              <span>Biscuit jelly beans macaroon danish pudding.</span>
              <Badge color="primary" pill>
                4
              </Badge>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
              <span>chocolate cheesecake candy.</span>
              <Badge color="primary" pill>
                2
              </Badge>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
              <span>Oat cake icing pastry pie carrot.</span>
              <Badge color="primary" pill>
                1
              </Badge>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default NotificationList;

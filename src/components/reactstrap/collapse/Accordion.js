import React from "react";
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import { Eye, Code, ChevronDown } from "react-feather";
import { accordion } from "./CollapseSourceCode";

const collapseItems = [
  {
    id: 1,
    title:
      "How is an online stock/inventory management system better than ERP ?",
    content:
      "Generally, an ERP is not specialized in inventory management and it is costly to purchase, install and maintain On the other hand, an online inventory management system is hosted on the cloud server, and does not require any installation A cloud - based solution has a much better design and user experience.",
  },
  {
    id: 2,
    title:
      "What more comes along with Buynaa's Inventory Management Solution ?",
    content:
      "Once you subscribe to the Buynaa Inventory Management Solution, you will have a dedicated shop profile published live on our website. This will help boost your visibility across your locality as well the entire city. Your shop will be subject to reviews and ratings by your customers. You can also use certain features to keep your customers updated regarding any events or sales",
  },
  {
    id: 3,
    title: "Does Buynaa support multiple shops through one subscription ?",
    content:
      "No. Buynaa maintains a strict policy as in “One Shop One Subscription”. However, you will be notified via email or our salesperson beforehand regarding any change to our policy.",
  },
  {
    id: 4,
    title: "How do I pay for my subscription ?",
    content:
      "You can opt for cash billing. You can also pay via cheque or net banking/ UPI.",
  },
  {
    id: 5,
    title: "What documents do I need to start my Buynaa account ?",
    content:
      "You will need to upload the following documents:-PAN card (Personal PAN for business type “Proprietorship” and Personal + Company PAN for business type “Company”),GSTIN.",
  },
  {
    id: 6,
    title:
      "What is the billing cycle for the Inventory Management Solution and how do I pay ?",
    content:
      "It is very easy to change or reset the password of your Buynaa account. Kindly follow the password reset instructions below The cloud - based solution is subscription-based and is billed annually. We accept cheque or cash transactions. As for online transactions, we will update you once it is available to use.",
  },
  {
    id: 7,
    title: "How to change or reset my password ?",
    content:
      "Click on “Forgot your password,Enter your registered email address.,Click on the link: “Change my password” received by email,Enter your new password and click on “Save",
  },
  {
    id: 8,
    title:
      "I have the product list and want to switch to Buynaa’s Inventory Management Solution. How do I do it ?",
    content:
      "Simple! Download the excel format from the “Add Product” page. Input the entire product list in the excel format and upload it in bulk.",
  },
  {
    id: 9,
    title: "What happens in case of a low stock?",
    content:
      "While updating your product list, you will find a field known as Reorder Level. Once your stock reaches Reorder Level, you will receive an email and a sms suggesting to refill your stock. With Buynaa, you never go out of stock!",
  },
  {
    id: 10,
    title: "Can Buynaa identify my best-selling products ?",
    content:
      "Yes. You can generate revenue and profit reports in just a few clicks. The report is easy to follow and you can also view a more detailed list containing revenue, sales value, number of orders, number of customers, average sales value etc.In addition, you can determine the time range for the report and don't worry about data accuracy. The system is kept up-to-date automatically, thus eliminating human errors.",
  },
];

class Accordion extends React.Component {
  state = {
    activeTab: "1",
    collapseID: "",
    status: "Closed",
  };

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };
  onEntered = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opened" });
  };
  onEntering = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opening..." });
  };

  onExited = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closed" });
  };

  onExiting = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closing..." });
  };

  render() {
    const accordionItems = collapseItems.map(collapseItem => {
      return (
        <Card
          key={collapseItem.id}
          onClick={() => this.toggleCollapse(collapseItem.id)}
          className={classnames({
            "collapse-collapsed":
              this.state.status === "Closed" &&
              this.state.collapseID === collapseItem.id,
            "collapse-shown":
              this.state.status === "Opened" &&
              this.state.collapseID === collapseItem.id,
            closing:
              this.state.status === "Closing..." &&
              this.state.collapseID === collapseItem.id,
            opening:
              this.state.status === "Opening..." &&
              this.state.collapseID === collapseItem.id,
          })}
        >
          <CardHeader>
            <CardTitle className="lead collapse-title collapsed">
              {collapseItem.title}
            </CardTitle>
            <ChevronDown size={15} className="collapse-icon" />
          </CardHeader>
          <Collapse
            isOpen={collapseItem.id === this.state.collapseID}
            onEntering={() => this.onEntering(collapseItem.id)}
            onEntered={() => this.onEntered(collapseItem.id)}
            onExiting={() => this.onExiting(collapseItem.id)}
            onExited={() => this.onExited(collapseItem.id)}
          >
            <CardBody>{collapseItem.content}</CardBody>
          </Collapse>
        </Card>
      );
    });

    return (
      <React.Fragment>
        <Card>
          <CardHeader className="d-flex justify-content-center align-items-center">
            <CardTitle>
              <h2 className="d-flex justify-content-center align-items-center">
                FAQ Page
              </h2>
            </CardTitle>
            {/* <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1",
                    })}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2",
                    })}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div> */}
          </CardHeader>
          <CardBody>
            {/* <p>
              You may want to open one item at a time for that you can use
              accordion.
            </p> */}
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="vx-collapse collapse-bordered">
                  {accordionItems}
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {accordion}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default Accordion;

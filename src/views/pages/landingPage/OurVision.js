import React, { Component } from "react";
import { Card } from "reactstrap";
import "../../../assets/style/style.css";

export class OurVision extends Component {
  render() {
    return (
      <div id="vision" className="">
        <Card style={{ background: "white", padding: "40px" }}>
          <div className="how-its-work " style={{}}>
            <div
              className="container p-1"
              style={{
                borderRadius: "15px",
                borderLeft: "3px solid blue",
                borderRight: "3px solid blue",
              }}
            >
              <div className="section-title">
                <p
                  style={{
                    fontSize: "20px",
                    color: "#1877f2",
                    fontWeight: 600,
                  }}
                >
                  Minimun your costs - Focus on BTL marketing instead of ATL
                  marketing.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default OurVision;

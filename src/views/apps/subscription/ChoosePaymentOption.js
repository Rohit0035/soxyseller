import Axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardLink,
} from "reactstrap";

import users from "../../../assets/img/logo/users.png";

export default function ChoosePaymentOption() {
  const [key, setKey] = useState("rzp_live_dX052iXb0Is1yu");
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");
  const [profile, setProfile] = useState("");
  const Razorpay = useRazorpay();

  useEffect(() => {
    console.log("useEffect");
    Axios.get("http://35.154.86.59/api/admin/getoneseller", {
      headers: {
        "auth-adtoken": localStorage.getItem("auth-adtoken"),
      },
    })
      .then((response) => {
        console.log(response.data);
        setProfile(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    Axios.get("http://35.154.86.59/api/admin/rapay/2")
      .then((response) => {
        console.log(response.data);
        setOrderId(response.data?.order.id);
        setAmount(response.data?.order.amount);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const handlePayment = useCallback(
    async (description, name, email, contact, sub_plan, duration) => {
      console.log(amount);
      const RazorpayOptions = {
        key: key,
        amount: sub_plan,
        currency: "INR",
        order_id: orderId,
        name: "SUBSCRIPTION PLAN",
        description: description,

        handler: (res) => {
          var data = {
            duration,
            sub_plan,
            amount: sub_plan,
            description,
            razorpay_payment_id: res.razorpay_payment_id,
            name,
            email,
            contact,
          };
          console.log(res);
          Axios.post("http://35.154.86.59/api/admin/addSubscription", data, {
            headers: {
              "auth-adtoken": localStorage.getItem("auth-adtoken"),
            },
          })
            .then((response) => {
              console.log(response);
              localStorage.setItem("hasSubscribed", true);
              history.push("/analyticsDashboard");
            })
            .catch((error) => {
              console.log(error.response);
            });
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: "BuyNaa Corporate Office",
        },
        theme: { color: "#0000FF" },
      };

      const rzpay = new Razorpay(RazorpayOptions);

      rzpay.on("payment.failure", function (resp) {
        alert("Remains on same page");
      });
      rzpay.on("payment.success", function (resp) {
        console.log(resp);
      });
      rzpay.open();
    },
    [Razorpay]
  );

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card
            className=" "
            style={{
              "--color-1": "deepskyblue",
              "--color-2": "navy",
              background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,

              // Unrelated styles:
              color: "white",
              textAlign: "center",
              padding: 30,
              borderRadius: 12,
            }}
          >
            <CardBody>
              <CardHeader>
                <CardTitle>
                  <img src={users} style={{ width: 50, height: 50 }} />
                </CardTitle>
                <CardTitle
                  tag="h2"
                  className=" text-white font-weight-bold p-2"
                >
                  SUBSCRIPTION PLAN
                </CardTitle>
              </CardHeader>
              <div className="m-3">
                <CardTitle className=" text-white font-weight-bold">
                  Plan Price
                </CardTitle>
                <CardSubtitle className="text-white font-weight-bold">
                  ₹699 Only/
                </CardSubtitle>
              </div>
              <div className="m-3">
                <CardTitle className="text-white font-weight-bold">
                  Plan Active Period
                </CardTitle>
                <CardSubtitle className="text-white  font-weight-bold">
                  365 Days
                </CardSubtitle>
              </div>
              <CardFooter>
                <CardLink
                  className="text-white font-weight-bolder "
                  onClick={() =>
                    handlePayment(
                      "Plan Active Period : 365 days",
                      profile.name,
                      profile.email,
                      profile.mobile,
                      "200",
                      true,
                      "365days"
                    )
                  }
                >
                  Subscribe Now
                </CardLink>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

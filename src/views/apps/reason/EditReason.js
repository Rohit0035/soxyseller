// import React, { Component } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   CustomInput,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import swal from "sweetalert";
// export default class EditReason extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         reason: "", 
//         status: ""
//     };
//   }
//   componentDidMount() {
//     let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/viewonesize/${id}`)
//       .then(response => {
//         console.log(response);
//         this.setState({
//           reason: response.data.data.reason,
//           status: response.data.data.status,
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   changeHandler1 = e => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = e => {
//     e.preventDefault();
//     let { id } = this.props.match.params;
//     axiosConfig
//       .post(`/editsize/${id}`, this.state)
//       .then(response => {
//         console.log(response);
//         swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push("/app/reason/reasonList");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem href="/app/reason/reasonList" tag="a">
//                   Reason List
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Edit Reason</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Edit Reason
//               </h1>
//             </Col>
//             <Col>
//               <Button
//                 className=" btn btn-danger float-right"
//                 onClick={() => history.push("/app/reason/reasonList")}>
//                 Back
//               </Button>
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Reason</Label>
//                   <Input
//                     type="text"
//                     name="reason"
//                     value={this.state.reason}
//                     onChange={this.changeHandler}
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1">
//                     Add
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
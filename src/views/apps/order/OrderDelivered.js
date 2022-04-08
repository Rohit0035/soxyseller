import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import {
  // Edit,
  // Trash2,
  // Clipboard,
  // Printer,
  // Download,
  ChevronDown,
} from "react-feather";
//import classnames from "classnames";
//import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
class OrderDelivered extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Order ID",
        field: "orderId",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.orderId}</span>
            

             

            </div>
          );
        },
      },
      {
        headerName: "User Name",
        field: "user.username",
        filter: true,
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.user?.username}</span>
              {/* <span>{params.data.orderId}</span> */}
            </div>
         );
       },
     },
  
  //    {
  //     headerName: "Item Name",
  //     field: "item_name",
  //     filter: true,
  //     width: 250,
  //     cellRendererFramework: (params) => {
  //       return (
  //         <div className="d-flex align-items-center cursor-pointer">
  //           {/* <span>{params.data?.user?.orderId}</span> */}
  //           <span>{params.data.item_name}</span>
  //         </div>
  //      );
  //    },
  //  },
      {
        headerName: "Product Ordered",
        field: "product.item_name",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.product?.item_name}</span>
              {/* <span>{params.data.purchaseprice}</span> */}
              
            </div>
          );
        },
      },
      {
        headerName: "Discription",
        field: "product.short_desc",
        filter: true,
        width: 220,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.product?.short_desc}</span>
              {/* <span>{params.data.purchaseprice}</span> */}

            </div>
          );
        },
      },

      {
        headerName: "Purchased Price",
        field: "purchaseprice",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.purchaseprice}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Reached Location",
      //   field: "reachedlocation",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.reachedlocation}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Shipping Date",
      //   field: "shippingdate",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.shippingdate}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Delivered Date",
      //   field: "deliverdondate",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.deliverdondate}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Deliver" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Pending" ? (
            <div className="badge badge-pill badge-primary">
              {params.data.status}
            </div>
          ) : params.value === "Cancelled" ? (
            <div className="badge badge-pill badge-danger">
              {params.data.status}
            </div>
          ) : params.value === "Returned" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      // {
      //   headerName: "Actions",
      //   field: "transactions",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Edit
      //           className="mr-50"
      //           size={15}
      //           onClick={() => history.push("/app/user/edit")}
      //         />
      //         <Trash2
      //           size={15}
      //           onClick={() => {
      //             let selectedData = this.gridApi.getSelectedRows();
      //             this.gridApi.updateRowData({ remove: selectedData });
      //           }}
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get("/delivery_order").then((response) => {
      let rowData = response.data.data;
      console.log(this.rowData);
      this.setState({ rowData });
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12">
         
        </Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Order Delivered List
                </h1>
              </Col>
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default OrderDelivered;
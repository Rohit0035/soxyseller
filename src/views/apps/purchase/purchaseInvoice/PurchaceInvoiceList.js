import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import Moment from "react-moment";
import "moment-timezone";
class PurchaceInvoiceList extends React.Component {
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
        headerName: "S.no",
        valueGetter: "node.rowIndex + 1",
        field: "sortorder",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Invoice Number",
        field: "invoiceNo",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.invoiceNo}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Invoice date",
        field: "invoice_date",
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.invoice_date}</span>
              </div>
            </div>
          );
        },
      },
      {
        // headerName: "Cost price ₹",
        headerName: "Stock Due",
        field: "stock_due",
        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.stock_due}</span>
              </div>
            </div>
          );
        },
      },
      {
        // headerName: "Gst ₹",
        headerName: "gstIn ",
        field: "gstIn",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.gstIn}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Transportation Cost",
        field: "transportation_cost",
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.transportation_cost}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Instructions",
        field: "instructions",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.instructions}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Grand total ₹",
        field: "grand_total",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.grand_total}</span>
              </div>
            </div>
          );
        },
      },
      // {
      //   headerName: "Material",
      //   field: "material",
      //   filter: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex justify-content-center">
      //         {params.data.material.map((i) => (
      //           <span>{i.materialname}</span>
      //         ))}

      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Supplier",
        field: "supplier?._id",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>
                  {params.data.supplier?.first_name}{" "}
                  {params.data.supplier?.last_name}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Payment Due",
        field: "payment_due",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.payment_due}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Amount",
        field: "amount",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data.amount}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Approve" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Decline" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },

      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                size="25px"
                color="green"
                className="mr-50"
                onClick={() =>
                  history.push(
                    `/app/purchase/purchaseInvoice/view/${params.data._id}`
                  )
                }
              /> */}
              {/* <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() => history.push("/app/purchase/purchaseInvoice/edit")}
              /> */}
              <Trash2
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  // Purchase Order Invoice Number, Supplier, Purchase Order Invoice Date, SKU, HSN, Cost Price, GST, Grand Total, Payment Mode, Action - View, Edit, Destroy. Pagination, Next Button

  async componentDidMount() {
    await axiosConfig
      .get("/getpurchaseorder", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        let rowData = response.data.data;
        this.setState({ rowData });
        console.log(rowData);
      });
  }

  // async runthisfunction(id) {
  //   console.log(id);
  //   await axiosConfig.get(`/delprivacypolicy/${id}`).then((response) => {
  //     console.log(response);
  //   });
  // }

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
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Purchase Order Invoice List
                </h1>
              </Col>
              {/* <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() =>
                    history.push(
                      "/app/purchase/purchaseInvoice/addpurchaseInvoice"
                    )
                  }
                >
                  Add Purchase Invoice
                </Button>
              </Col> */}
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
                    {/* <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="mr-1 mt-sm-1">
                        <h3>Order Date</h3>
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          type="date"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
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
                    </div> */}
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

export default PurchaceInvoiceList;

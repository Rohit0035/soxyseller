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
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";

class StoreList extends React.Component {
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
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Logo ",
        field: "shoplogo_img",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <img
                className="rounded-circle"
                src={params.data.shoplogo_img}
                alt="user"
                height="45"
                width="45"
              />
            </div>
          );
        },
      },
      {
        headerName: "Image",
        field: "storeImg",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.storeImg.map((i) => (
                <img
                  className=" rounded-circle border-black m-0"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Store Name ",
        field: "store_name	",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.store_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Store Description",
        field: " store_desc",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.store_desc}</span>
            </div>
          );
        },
      },
      {
        headerName: "Website",
        field: "websiteUrl	",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.websiteUrl}</span>
            </div>
          );
        },
      },
      {
        headerName: "Email",
        field: "store_email	",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.store_email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Phone No's.",
        field: "mobile	",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>
                {params.data.phone_no},{params.data.altphone_no},
                {/* {params.data.altphone_no2} */}
              </span>
            </div>
          );
        },
      },
      {
        headerName: "Open Days",
        field: "day",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.day}</span>
            </div>
          );
        },
      },
      {
        headerName: "Opening Time",
        field: "openingTym",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.openingTym}</span>
            </div>
          );
        },
      },
      {
        headerName: "Closing Time",
        field: "closingTym",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.closingTym}</span>
            </div>
          );
        },
      },
      {
        headerName: "Address",
        field: "address_line1,address_line2",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>
                {params.data.address_line1} {params.data.address_line2}
              </span>
            </div>
          );
        },
      },
      {
        headerName: "LandMark",
        field: "landmark",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.landmark}</span>
            </div>
          );
        },
      },
      {
        headerName: "City",
        field: "city",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.city}</span>
            </div>
          );
        },
      },
      {
        headerName: "State",
        field: "state",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.state}</span>
            </div>
          );
        },
      },
      {
        headerName: "PinCode",
        field: "pincode",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.pincode}</span>
            </div>
          );
        },
      },
      {
        headerName: "GST No.",
        field: "gst_no",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.gst_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "Business Type",
        field: "business_type",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.business_type}</span>
            </div>
          );
        },
      },
      {
        headerName: "PAN No.",
        field: "pan_no",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.pan_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "Comapny PAN no.",
        field: "company_panno",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.company_panno}</span>
            </div>
          );
        },
      },
      {
        headerName: "Address Proof",
        field: "address_proof",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.address_proof}</span>
            </div>
          );
        },
      },
      {
        headerName: "GST Image",
        field: "gstImg",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.gstImg.map((i) => (
                <img
                  className=" rounded-circle border-black m-0"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
            </div>
          );
        },
      },
      {
        headerName: "PAN Img",
        field: "storepan_img",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.storepan_img.map((i) => (
                <img
                  className=" rounded-circle border-black m-0"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Trade Licence",
        field: "tradelicence_img",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.tradelicence_img.map((i) => (
                <img
                  className=" rounded-circle border-black m-0"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Comp.PAN Img",
        field: "companypan_img",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.companypan_img.map((i) => (
                <img
                  className=" rounded-circle border-black m-0"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Address Proof",
        field: "address_proof_img",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.address_proof_img.map((i) => (
                <img
                  className=" rounded-circle border-black m-0"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
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
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Inactive" ? (
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
              <Eye
                size="25px"
                color="green"
                className="mr-50"
                onClick={() =>
                  history.push(`/app/myStore/viewStore/${params.data._id}`)
                }
              />
              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(`/app/myStore/editStore/${params.data._id}`)
                }
              />
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

  async componentDidMount() {
    await axiosConfig
      .get("/storebyseller", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        const rowData = response.data.data;
        console.log(rowData);
        console.log(response.data.data);

        this.setState({ rowData });
      });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/del_store/${id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
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
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Store List
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/myStore/addMyStore")}
                  >
                    Add Store
                  </Button>
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
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
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
      )
    );
  }
}
export default StoreList;

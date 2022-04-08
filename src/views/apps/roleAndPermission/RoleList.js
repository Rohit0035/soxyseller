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
import axios from "axios";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
class AllUsers extends React.Component {
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
        headerName: "S.No.",
        field: "",
        valueGetter: "node.rowIndex + 1",
        width: 110,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Employee Name",
        field: "name",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.emp?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Dashboard",
        field: "dashboard",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.dashboard ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Store",
        field: "store",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.store ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Contacts",
        field: "contacts",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.contacts ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Inventory",
        field: "inventory",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.inventory ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Stock Control",
        field: "stockControl",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.stockControl ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Coupons",
        field: "coupons",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.coupons ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Subscription",
        field: "subscription",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.subscription ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Billing",
        field: "billing",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.billing ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Order",
        field: "order",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.order ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Purcahse",
        field: "purchase",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.purchase ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Reports",
        field: "reports",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.reports ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Permission",
        field: "rolesPermission",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.rolesPermission ? "checked" : ""
          } />`;
        },
      },
      {
        headerName: "Setting",
        field: "setting",
        filter: true,
        editable: false,
        width: 120,
        cellRenderer: (params) => {
          return `<input type='checkbox' ${
            params.data.setting ? "checked" : ""
          } />`;
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
                className="mr-50"
                size={20}
                onClick={() =>
                  history.push(
                    `/app/users/roleAndPermission/viewRole/${params.data._id}`
                  )
                }
              /> */}
              {/* <Edit
                className="mr-50"
                size={20}
                onClick={() =>
                  history.push("/app/users/roleAndPermission/editRole")
                }
              /> */}
              <Trash2
                size={20}
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
    await axios
      .get("http://35.154.86.59/api/admin/allrole", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        let rowData = response.data.data;
        this.setState({ rowData });
      });
  }

  async runthisfunction(id) {
    console.log(id);
    await axios
      .get(`http://35.154.86.59/api/admin/del_role/${id}`)
      .then((response) => {
        console.log(response);
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
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  All User Roles
                </h1>
              </Col>
              <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/roleAndPermission/addRole")}
                >
                  Add New User
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
export default AllUsers;

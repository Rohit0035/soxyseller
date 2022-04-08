
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
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
//import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss"
class PageLayout extends React.Component {
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
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Name",
        field: "name",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Email",
        field: "email",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.email}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Customer Type",
        field: "you_are",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.you_are}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Request Type",
        field: "typeof_req",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.typeof_req}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Category",
        field: "category",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.category}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Mobile No.",
        field: "mobile_no",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.mobile_no}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "State",
        field: "state",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.state}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "City",
        field: "district",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.district}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Address",
        field: "address",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.address}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Comment",
        field: "comments",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="ml-2">
                <span>{params.data.comments}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Edit className="mr-50" size={20} /> */}
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
    await axiosConfig.get("/allcontactus").then((response) => {
      let rowData = response.data.data;
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/delcontactus/${id}`).then((response) => {
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
        <Col sm="12">
          {/* <Card
            className={classnames("card-action card-reload", {
              "d-none": this.state.isVisible === false,
              "card-collapsed": this.state.status === "Closed",
              closing: this.state.status === "Closing...",
              opening: this.state.status === "Opening...",
              refreshing: this.state.reload,
            })}
          >
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <div className="actions">
                <ChevronDown
                  className="collapse-icon mr-50"
                  size={15}
                  onClick={this.toggleCollapse}
                />
                <RotateCw
                  className="mr-50"
                  size={15}
                  onClick={() => {
                    this.refreshCard();
                    this.gridApi.setFilterModel(null);
                  }}
                />
                <X size={15} onClick={this.removeCard} />
              </div>
            </CardHeader>
            <Collapse
              isOpen={this.state.collapse}
              onExited={this.onExited}
              onEntered={this.onEntered}
              onExiting={this.onExiting}
              onEntering={this.onEntering}
            >
              <CardBody>
                {this.state.reload ? (
                  <Spinner color="primary" className="reload-spinner" />
                ) : (
                  ""
                )}
                <Row>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="role">Role</Label>
                      <Input
                        type="select"
                        name="role"
                        id="role"
                        value={this.state.role}
                        onChange={(e) => {
                          this.setState(
                            {
                              role: e.target.value,
                            },
                            () =>
                              this.filterData(
                                "role",
                                this.state.role.toLowerCase()
                              )
                          );
                        }}
                      >
                        <option value="All">All</option>
                        <option value="User">User</option>
                        <option value="Staff">Staff</option>
                        <option value="Admin">Admin</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="status">Status</Label>
                      <Input
                        type="select"
                        name="status"
                        id="status"
                        value={this.state.selectStatus}
                        onChange={(e) => {
                          this.setState(
                            {
                              selectStatus: e.target.value,
                            },
                            () =>
                              this.filterData(
                                "status",
                                this.state.selectStatus.toLowerCase()
                              )
                          );
                        }}
                      >
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Blocked">Blocked</option>
                        <option value="Deactivated">Deactivated</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="verified">Verified</Label>
                      <Input
                        type="select"
                        name="verified"
                        id="verified"
                        value={this.state.verified}
                        onChange={(e) => {
                          this.setState(
                            {
                              verified: e.target.value,
                            },
                            () =>
                              this.filterData(
                                "is_verified",
                                this.state.verified.toLowerCase()
                              )
                          );
                        }}
                      >
                        <option value="All">All</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="department">Department</Label>
                      <Input
                        type="select"
                        name="department"
                        id="department"
                        value={this.state.department}
                        onChange={(e) => {
                          this.setState(
                            {
                              department: e.target.value,
                            },
                            () =>
                              this.filterData(
                                "department",
                                this.state.department.toLowerCase()
                              )
                          );
                        }}
                      >
                        <option value="All">All</option>
                        <option value="Sales">Sales</option>
                        <option value="Development">Development</option>
                        <option value="Management">Management</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card> */}
        </Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Layout List
                </h1>
              </Col>
              {/* <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/privacyPolicy/addPolicy")}
                >
                  Add New Policy
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
export default PageLayout;
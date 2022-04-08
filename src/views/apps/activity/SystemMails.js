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

class SystemMails extends React.Component {
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
        headerName: "Product Image",
        field: "product_img",
        filter: false,
        width: 150,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <img
                className=" rounded-circle  mr-3"
                src={params.data.product_img}
                alt="user avatar"
                height="40"
                width="40"
              />
            </div>
          );
        },
      },
      {
        headerName: "Seller Name",
        field: "item_name",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.item_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Seller Code",
        field: "code",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.code}</span>
            </div>
          );
        },
      },
      {
        headerName: "Short Description",
        field: "short_desc",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.short_desc}</span>
            </div>
          );
        },
      },
      {
        headerName: "Description",
        field: "desc",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.desc}</span>
            </div>
          );
        },
      },
      {
        headerName: "HSN Code",
        field: "hsn_code",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.hsn_code}</span>
            </div>
          );
        },
      },
      {
        headerName: "Brand",
        field: "brand",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.brand?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Category",
        field: "productcategory?.name",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.productcategory?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Sub-Category",
        field: "productsubcategory",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.productsubcategory?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Stock Quantity",
        field: "stock_qty",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.stock_qty}</span>
            </div>
          );
        },
      },
      {
        headerName: "Size",
        field: "size",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.size}</span>
            </div>
          );
        },
      },
      {
        headerName: "Colour",
        field: "colour",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.colour}</span>
            </div>
          );
        },
      },
      {
        headerName: "Material",
        field: "material",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.material}</span>
            </div>
          );
        },
      },
      {
        headerName: "Barcode",
        field: "barcode",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.barcode}</span>
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
                className="mr-50"
                size={20}
                onClick={() =>
                  history.push(`/app/activity/viewActivity/${params.data._id}`)
                }
              />
              <Edit
                className="mr-50"
                size={20}
                onClick={() => history.push("/app/user/edit")}
              />
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
    await axiosConfig.get("/allproduct").then((response) => {
      const rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/delproduct/${id}`).then(
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
          <Col sm="12">
          </Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    System Mails List
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/activity/addSystemMails")}
                  >
                    Add System Mails
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
export default SystemMails;
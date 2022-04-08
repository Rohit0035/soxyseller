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

import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";

class ProductsList extends React.Component {
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
        headerName: "",
        valueGetter: "node.rowIndex + 1",
        field: "id",
        width: 80,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Image",
        field: "product_img",
        filter: false,
        width: 200,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.product_img.map((i) => (
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
        headerName: "Product Name",
        field: "product_name",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.product_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "SKU No.",
        field: "sku_no",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.sku_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "HSN/SAC",
        field: "hsn_sac_no",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.hsn_sac_no}</span>
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
        field: "long_desc",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="mt-1">
              <span>{ReactHtmlParser(params.data.long_desc)}</span>
            </div>
          );
        },
      },
      {
        headerName: "Category",
        field: "productcategory?.name",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.productcategory?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Sub-Category",
        field: "productsubcategory?.name",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.productsubcategory?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Brand",
        field: "brand?.name",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.brand?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Tag",
        field: "tag",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.tag}</span>
            </div>
          );
        },
      },
      {
        headerName: "Units",
        field: "unit?.units_title",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.unit?.units_title}</span>
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
            <div className="d-flex justify-content-center">
              <span>{params.data.material}</span>
            </div>
          );
        },
      },
      {
        headerName: "Cost Price",
        field: "cost_price",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.cost_price}</span>
            </div>
          );
        },
      },
      {
        headerName: "Selling Price",
        field: "sell_price",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.sell_price}</span>
            </div>
          );
        },
      },
      {
        headerName: "GST Rate",
        field: "gstrate.gst_title",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.gstrate?.gst_title}</span>
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
            <div className="d-flex justify-content-center">
              {params.data.size.map((i) => (
                <span>{i.sizeName}</span>
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Color",
        field: "color",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              {params.data.color.map((i) => (
                <span>{i.colorName}</span>
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Stk Quantity",
        field: "qty",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.qty}</span>
            </div>
          );
        },
      },
      {
        headerName: "Stock Avilable",
        field: "stock",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.stock}</span>
            </div>
          );
        },
      },

      {
        headerName: "Reorder Level",
        field: "reorder_level",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex justify-content-center">
              <span>{params.data.reorder_level}</span>
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
                size="25px"
                color="green"
                onClick={() =>
                  history.push(
                    `/app/products/product/viewProducts/${params.data._id}`
                  )
                }
              />
              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/products/product/editProducts/${params.data._id}`
                  )
                }
              />
              <Trash2
                className="mr-50"
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
      .get("/productbysellerbytoken", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        const rowData = response.data.data;
        console.log(rowData);
        this.setState({ rowData });
      });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/del_product/${id}`).then(
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
    const { rowData, columnDefs, defaultColDef, variation } = this.state;
    return (
      console.log(variation),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Product List
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/products/product/addMyProduct")
                    }
                  >
                    Add Product
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
export default ProductsList;

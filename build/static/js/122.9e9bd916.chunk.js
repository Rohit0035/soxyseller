(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[122,1],{2147:function(e,a,t){"use strict";t.r(a);var r=t(53),n=t.n(r),i=t(83),l=t(13),c=t(14),s=t(16),d=t(15),o=t(0),u=t.n(o),m=t(138),g=t(56),p=t(578),f=t(579),v=t(799),h=t(801),E=t(798),w=t(797),S=t(86),b=t(135),N=t(82),z=t(186),y=t(834),P=t(325),k=t(322),C=t(451),D=t(279),A=t(21),x=(t(820),t(804),t(1198),t(1126),t(841)),R=t.n(x),O=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Order ID",field:"cus_orderId",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.cus_orderId))}},{headerName:"Order Date",field:"createdAt",filter:!0,width:200,cellRendererFramework:function(a){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,R()(null===(t=e.state.data)||void 0===t?void 0:t.createdAt).format("ll")))}},{headerName:"Payment Type",field:"orderId.payment_type",filter:!0,width:150,cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center"},u.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.payment_type))}},{headerName:"Customer Name",field:"cartId.customer.firstname",filter:!0,width:200,cellRendererFramework:function(e){var a,t,r,n;return u.a.createElement("div",null,u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.customer)||void 0===t?void 0:t.firstname," ",null===(r=e.data)||void 0===r||null===(n=r.customer)||void 0===n?void 0:n.lastname))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Order Placed"===e.value||"Delivered"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Pending"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-primary"},e.data.status):"Cancelled"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):"Completed"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(P.a,{className:"mr-50",size:20,onClick:function(){return A.a.push("/app/order/viewOrder/".concat(a.data._id))}}),u.a.createElement(k.a,{className:"mr-50",size:20,onClick:function(){return A.a.push("/app/order/editOrder/".concat(a.data._id))}}),u.a.createElement(C.a,{size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/orderbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e);var t=e.data.data;a.setState({rowData:t})})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(g.a,{sm:"12"}),u.a.createElement(g.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(g.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Order List"))),u.a.createElement(f.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(v.a,{className:"p-1 ag-dropdown"},u.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(D.a,{className:"ml-50",size:15})),u.a.createElement(E.a,{right:!0},u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(b.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(z.a.Consumer,null,(function(a){return u.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component);a.default=O},804:function(e,a,t){},820:function(e,a,t){}}]);
//# sourceMappingURL=122.9e9bd916.chunk.js.map
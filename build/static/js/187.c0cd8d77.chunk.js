(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[187],{2183:function(e,a,t){"use strict";t.r(a);var r=t(13),n=t(14),i=t(16),l=t(15),c=t(0),s=t.n(c),o=t(138),m=t(56),d=t(578),u=t(135),g=t(579),f=t(799),p=t(801),h=t(798),E=t(797),v=t(86),w=(t(82),t(186)),S=t(834),b=t(322),N=t(451),z=t(279),P=t(21),y=(t(820),t(804),function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"By Date",field:"date",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"ml-2 mr-4"},s.a.createElement("span",null,e.data.customerId))}},{headerName:"Module/Featurette",field:"module",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"ml-2 mr-4"},s.a.createElement("span",null,e.data.first_name))}},{headerName:"Date",field:"date",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"ml-2 mr-4"},s.a.createElement("span",null,e.data.last_name))}},{headerName:"System Mails",field:"systememail",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"ml-2 mr-4"},s.a.createElement("span",null,e.data.customer_email))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return P.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),s.a.createElement(N.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return s.a.createElement(o.a,{className:"app-user-list"},s.a.createElement(m.a,{sm:"12"}),s.a.createElement(m.a,{sm:"12"},s.a.createElement(d.a,null,s.a.createElement(o.a,{className:"m-2"},s.a.createElement(m.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"System Mails")),s.a.createElement(m.a,null,s.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return P.a.push("/app/billing/createInvoice")}},"Create System Mails"))),s.a.createElement(g.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(f.a,{className:"p-1 ag-dropdown"},s.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(z.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(u.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(w.a.Consumer,null,(function(a){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component));a.default=y},804:function(e,a,t){}}]);
//# sourceMappingURL=187.c0cd8d77.chunk.js.map
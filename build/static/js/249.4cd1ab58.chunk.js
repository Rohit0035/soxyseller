(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[249],{2160:function(e,a,t){"use strict";t.r(a),t.d(a,"AddPurchaseInvoice",(function(){return S}));var n=t(37),l=t(13),r=t(14),c=t(16),m=t(15),u=t(0),i=t.n(u),s=t(578),o=t(138),d=t(56),p=t(135),h=t(579),E=t(580),g=t(73),v=t(74),y=t(577),b=t(86),f=t(21),C=t(82),S=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.state={name:"",sortorder:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:"",supplierList:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/Getsupplier").then((function(a){console.log(a),e.setState({supplierList:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a=this;return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(o.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"New Purchase Order Invoice")),i.a.createElement(d.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/purchase/purchaseInvoice/purchaseInvoiceList")}},"Back"))),i.a.createElement(h.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(o.a,{className:"mb-2"},i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"Select Purchase Order Image"),i.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(v.a,null,"Select Purchase Order"),i.a.createElement(y.a,{required:!0,type:"select",placeholder:"Select Purchase Order",name:""},i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(v.a,null,"Select Supplier"),i.a.createElement(y.a,{required:!0,type:"select",placeholder:"Select Supplier",name:"supplier",value:this.state.supplier,onChange:this.changeHandler},i.a.createElement("option",null,"Add Supplier"),null===(e=this.state.supplierList)||void 0===e?void 0:e.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.company)})))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"Invoice Date"),i.a.createElement(b.a,{type:"date",placeholder:"Invoice Date",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"SKU"),i.a.createElement(b.a,{type:"number",placeholder:"SKU",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"HSN"),i.a.createElement(b.a,{type:"number",placeholder:"Brand Name",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"Quantity"),i.a.createElement(b.a,{type:"number",placeholder:"Quantity",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"Cost Price"),i.a.createElement(b.a,{type:"number",placeholder:"Cost Price",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,"GST"),i.a.createElement(b.a,{type:"number",placeholder:"GST",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null," Grand Total"),i.a.createElement(b.a,{type:"number",placeholder:"Grand Total",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(v.a,null," Payment Mode"),i.a.createElement(b.a,{type:"number",placeholder:" Payment Mode",name:"",onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(g.a,null,i.a.createElement(v.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(e){return a.changeHandler1(e)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(o.a,null,i.a.createElement("div",{className:"col-sm-12 text-right"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Cancel"),i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 text-right "},"Create Purchase order invoice")))))))}}]),t}(u.Component);a.default=S}}]);
//# sourceMappingURL=249.4cd1ab58.chunk.js.map
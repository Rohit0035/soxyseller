(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[226],{2136:function(e,a,t){"use strict";t.r(a),t.d(a,"AddCategory",(function(){return N}));var n=t(37),r=t(13),l=t(14),s=t(16),c=t(15),m=t(0),o=t.n(m),i=t(578),d=t(138),u=t(56),g=t(135),p=t(579),h=t(580),E=t(74),y=t(86),f=t(577),b=t(21),v=t(82),N=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("desc",l.state.desc),a.append("sortorder",l.state.sortorder),a.append("status",l.state.status),null!==l.state.selectedFile&&a.append("product_img",l.state.selectedFile,l.state.selectedName),v.a.post("/addproductcategory",a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),l.props.history.push("/app/category/categoryList")})).catch((function(e){console.log(e)}))},l.state={name:"",sortorder:"",desc:"",product_img:"",status:"",selectedFile:null,selectedName:""},l}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Category")),o.a.createElement(u.a,null,o.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return b.a.push("/app/category/categoryList")}},"Back"))),o.a.createElement(p.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"mb-2"},o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,"Category Name"),o.a.createElement(y.a,{required:!0,type:"text",placeholder:"Enter Category",name:"name",value:this.state.name,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(E.a,null,"Description"),o.a.createElement(y.a,{required:!0,type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,"Sort Order"),o.a.createElement(y.a,{required:!0,type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,"Image"),o.a.createElement(f.a,{required:!0,type:"file",onChange:this.onChangeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(E.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(d.a,null,o.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Category"))))))}}]),t}(m.Component);a.default=N}}]);
//# sourceMappingURL=226.89dd19c4.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[228],{2142:function(e,a,t){"use strict";t.r(a),t.d(a,"EditSubCategory",(function(){return N}));var n=t(137),r=t(37),l=t(13),c=t(14),s=t(16),o=t(15),m=t(0),d=t.n(m),u=t(578),i=t(138),g=t(56),p=t(135),h=t(579),y=t(580),E=t(74),v=t(577),b=t(86),f=t(21),C=t(82),N=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(r.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",c.state.name),a.append("desc",c.state.desc),a.append("productcategory",c.state.productcategory),a.append("sortorder",c.state.sortorder),a.append("status",c.state.status),null!==c.state.selectedFile&&a.append("product_img",c.state.selectedFile,c.state.selectedName);var t,r=Object(n.a)(a.values());try{for(r.s();!(t=r.n()).done;){var l=t.value;console.log(l)}}catch(u){r.e(u)}finally{r.f()}var s,o=Object(n.a)(a.keys());try{for(o.s();!(s=o.n()).done;){var m=s.value;console.log(m)}}catch(u){o.e(u)}finally{o.f()}var d=c.props.match.params.id;C.a.post("/editproductsubcategory/".concat(d),a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),c.props.history.push("/app/category/subCategory")})).catch((function(e){console.log(e)}))},c.state={name:"",sortorder:"",desc:"",product_img:"",productcategory:"",status:"",selectedFile:null,selectedName:""},c.state={productC:[]},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/allcatByseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({productC:a.data.data})})).catch((function(e){console.log(e)}));var a=this.props.match.params.id;C.a.get("/viewoneproductsubcategory/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({product_img:a.data.data.product_img,productcategory:a.data.data.productcategory,name:a.data.data.name,desc:a.data.data.desc,sortorder:a.data.data.sortorder,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(u.a,null,d.a.createElement(i.a,{className:"m-2"},d.a.createElement(g.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Sub Category")),d.a.createElement(g.a,null,d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/category/subCategory")}},"Back"))),d.a.createElement(h.a,null,d.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(i.a,{className:"mb-2"},d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null," Main Category"),d.a.createElement(v.a,{type:"select",name:"productcategory",value:this.state.productcategory,onChange:this.changeHandler},this.state.productC.map((function(e){return d.a.createElement("option",{key:e._id,value:e._id},e.name)})))),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Category Name"),d.a.createElement(b.a,{type:"text",placeholder:"Enter Category",name:"name",value:this.state.name,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Description"),d.a.createElement(b.a,{type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Sort Order"),d.a.createElement(b.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(E.a,null,"Image"),d.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},d.a.createElement(E.a,{className:"mb-1"},"Status"),d.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),d.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),d.a.createElement(i.a,null,d.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Sub-Category"))))))}}]),t}(m.Component);a.default=N}}]);
//# sourceMappingURL=228.28332654.chunk.js.map
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[251],{2119:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(53),l=a.n(n),c=a(83),s=a(37),r=a(13),o=a(14),i=a(16),m=a(15),h=a(0),u=a.n(h),d=a(578),p=a(138),E=a(56),b=a(135),k=a(579),g=a(580),v=a(73),y=a(74),C=a(577),f=a(82),N=a(21),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=e.target,a=t.name,l=t.checked;n.setState((function(e){var t=e.tabs;return t[a]=l,t})),console.log(n.state)},n.changeHandler=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),console.log(n.state),f.a.post("/addrole",n.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),n.props.history.push("/app/roleAndPermission/roleList")})).catch((function(e){console.log(e.response)}))},n.state={addemp:"",emp:"",tabs:{dashboard:!1,store:!1,contacts:!1,inventory:!1,stockControl:!1,coupons:!1,subscription:!1,billing:!1,order:!1,purchase:!1,reports:!1,rolesPermission:!1,setting:!1},employeeD:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("/getemployecreatedbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),t.setState({employeeD:e.data.data})})).catch((function(e){console.log(e.response)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;Object.keys(this.state.tabs).filter((function(e){return t.state.tabs[e]})).join(", ");return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(p.a,{className:"m-2"},u.a.createElement(E.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Assign Tabs Permission")),u.a.createElement(E.a,null,u.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/roleAndPermission/RoleList")}},"Back"))),u.a.createElement(k.a,null,u.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,null,u.a.createElement(E.a,{lg:"12"},u.a.createElement(p.a,{className:"m-2"},u.a.createElement(E.a,{md:"6",sm:"12"},u.a.createElement(v.a,null,u.a.createElement(y.a,null,"Select Employee"),u.a.createElement(C.a,{type:"select",name:"emp",placeholder:"Employee",onChange:this.changeHandler,value:this.state.emp},u.a.createElement("option",null,"Select Employee...."),null===(e=this.state.employeeD)||void 0===e?void 0:e.map((function(e){return u.a.createElement("option",{key:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))))),u.a.createElement(p.a,{className:"m-2"},u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.dashboard,onChange:this.handleClick,type:"checkbox",name:"dashboard"})," ","Dashboard")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.store,onChange:this.handleClick,type:"checkbox",name:"store"})," ","Store")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.contacts,onChange:this.handleClick,type:"checkbox",name:"contacts"})," ","Contacts")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.inventory,onChange:this.handleClick,type:"checkbox",name:"inventory"})," ","Inventory")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.stockControl,onChange:this.handleClick,type:"checkbox",name:"stockControl"})," ","Stock Control")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.coupons,onChange:this.handleClick,type:"checkbox",name:"coupons"})," ","Coupons")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.subscription,onChange:this.handleClick,type:"checkbox",name:"subscription"})," ","Subscription")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.billing,onChange:this.handleClick,type:"checkbox",name:"billing"})," ","Billing")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.order,onChange:this.handleClick,type:"checkbox",name:"order"})," ","Order")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.purchase,onChange:this.handleClick,type:"checkbox",name:"purchase"})," ","Purchase")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.reports,onChange:this.handleClick,type:"checkbox",name:"reports"})," ","Reports")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.rolesPermission,onChange:this.handleClick,type:"checkbox",name:"rolesPermission"})," ","Permissions")),u.a.createElement(E.a,{lg:"3",className:"m-1"},u.a.createElement("div",null,u.a.createElement("input",{checked:this.state.tabs.setting,onChange:this.handleClick,type:"checkbox",name:"setting"})," ","Setting"))))),u.a.createElement(p.a,null,u.a.createElement(E.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Permission")))))))}}]),a}(h.Component)}}]);
//# sourceMappingURL=251.6f7bc0cc.chunk.js.map
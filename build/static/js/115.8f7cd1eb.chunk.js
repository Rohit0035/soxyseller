(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[115],{1699:function(e,a,t){},2340:function(e,a,t){"use strict";t.r(a);var r=t(13),o=t(14),s=t(16),l=t(15),n=t(0),c=t.n(n),i=t(138),m=t(56),d=t(578),b=t(1018),u=t(913),g=t(82),h=t(33),p=t.n(h),y=t(1017),f=t(851),v=t(796),E=t(890),O=t(188),N=t.n(O),j=t(191),T=t.n(j),w=t(141),k=t.n(w),S=t(139),P=t.n(S),M=t(105),C=t.n(M),x=t(71),B=t.n(x),I=t(62),A=t.n(I),D=t(85),z=t.n(D),L=(c.a.Component,t(1699),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).state={product:{},store:{},customer:{},staff:{},supplier:{},brand:{},coupons:{}},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/totalproductbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({product:a.data})})).catch((function(e){console.log(e)})),g.a.get("/totalstorebyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({store:a.data})})).catch((function(e){console.log(e)})),p.a.get("http://35.154.86.59/api/user/totalcustomerbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({customer:a.data})})).catch((function(e){console.log(e)})),g.a.get("/totalempbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({staff:a.data})})).catch((function(e){console.log(e)})),g.a.get("/totalsupplierBytoken",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({supplier:a.data})})).catch((function(e){console.log(e)})),g.a.get("/totalbrandbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({brand:a.data})})).catch((function(e){console.log(e)})),g.a.get("/totalCoupon",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data),e.setState({coupons:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{className:"match-height"},c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-primary",body:!0,inverse:!0,style:{borderColor:"white"}},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Products"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.product.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-success",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Store"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.store.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-info",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Customer"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.customer.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-danger",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Staff"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.staff.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-warning",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Supplier"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.supplier.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-info",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Order"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.brand.totalBrand))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-warning",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Brands"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.brand.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-success",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Coupons"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.coupons.data))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-danger",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Brands"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.brand.totalBrand))),c.a.createElement(m.a,{lg:"3",md:"12"},c.a.createElement(d.a,{className:"bg-primary",body:!0,inverse:!0},c.a.createElement(b.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Market"),c.a.createElement(u.a,{tag:"h3",style:{color:"white"}},this.state.product.totalProduct)))))}}]),t}(c.a.Component));a.default=L},851:function(e,a,t){"use strict";var r=t(5),o=t(6),s=t(0),l=t.n(s),n=t(1),c=t.n(n),i=t(4),m=t.n(i),d=t(3),b=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],u={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},g=function(e){var a=e.className,t=e.cssModule,s=e.size,n=e.bordered,c=e.borderless,i=e.striped,u=e.dark,g=e.hover,h=e.responsive,p=e.tag,y=e.responsiveTag,f=e.innerRef,v=Object(o.a)(e,b),E=Object(d.mapToCssModules)(m()(a,"table",!!s&&"table-"+s,!!n&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!u&&"table-dark",!!g&&"table-hover"),t),O=l.a.createElement(p,Object(r.a)({},v,{ref:f,className:E}));if(h){var N=Object(d.mapToCssModules)(!0===h?"table-responsive":"table-responsive-"+h,t);return l.a.createElement(y,{className:N},O)}return O};g.propTypes=u,g.defaultProps={tag:"table",responsiveTag:"div"},a.a=g},890:function(e,a,t){"use strict";var r=t(5),o=t(36),s=t(6),l=t(0),n=t.n(l),c=t(1),i=t.n(c),m=t(4),d=t.n(m),b=t(3),u=["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"];function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(Object(t),!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:b.tagPropType,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barStyle:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},y=function(e){var a=e.children,t=e.className,o=e.barClassName,l=e.cssModule,c=e.value,i=e.min,m=e.max,g=e.animated,p=e.striped,y=e.color,f=e.bar,v=e.multi,E=e.tag,O=e.style,N=e.barStyle,j=e.barAriaValueText,T=e.barAriaLabelledBy,w=Object(s.a)(e,u),k=Object(b.toNumber)(c)/Object(b.toNumber)(m)*100,S=Object(b.mapToCssModules)(d()(t,"progress"),l),P={className:Object(b.mapToCssModules)(d()("progress-bar",f&&t||o,g?"progress-bar-animated":null,y?"bg-"+y:null,p||g?"progress-bar-striped":null),l),style:h(h(h({},f?O:{}),N),{},{width:k+"%"}),role:"progressbar","aria-valuenow":c,"aria-valuemin":i,"aria-valuemax":m,"aria-valuetext":j,"aria-labelledby":T,children:a};return f?n.a.createElement(E,Object(r.a)({},w,P)):n.a.createElement(E,Object(r.a)({},w,{style:O,className:S}),v?a:n.a.createElement("div",P))};y.propTypes=p,y.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},a.a=y},913:function(e,a,t){"use strict";var r=t(5),o=t(6),s=t(0),l=t.n(s),n=t(1),c=t.n(n),i=t(4),m=t.n(i),d=t(3),b=["className","cssModule","tag"],u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},g=function(e){var a=e.className,t=e.cssModule,s=e.tag,n=Object(o.a)(e,b),c=Object(d.mapToCssModules)(m()(a,"card-text"),t);return l.a.createElement(s,Object(r.a)({},n,{className:c}))};g.propTypes=u,g.defaultProps={tag:"p"},a.a=g}}]);
//# sourceMappingURL=115.8f7cd1eb.chunk.js.map
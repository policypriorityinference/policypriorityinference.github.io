"use strict";(self.webpackChunkalan_turing_ppi=self.webpackChunkalan_turing_ppi||[]).push([[84],{7457:function(e,t,n){n.r(t),n.d(t,{Budget:function(){return je},default:function(){return Se}});var r=n(4165),a=n(5861),o=n(885),i=n(2791),s=n(7462),l=n(3366),c=n(8182),d=n(4419),u=n(6934),p=n(1402),h=n(1217),f=n(5878);function m(e){return(0,h.Z)("MuiFormGroup",e)}(0,f.Z)("MuiFormGroup",["root","row","error"]);var v=n(2930),g=n(6147),b=n(184),x=["className","row"],_=(0,u.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.row&&t.row]}})((function(e){var t=e.ownerState;return(0,s.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),Z=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiFormGroup"}),r=n.className,a=n.row,o=void 0!==a&&a,i=(0,l.Z)(n,x),u=(0,v.Z)(),h=(0,g.Z)({props:n,muiFormControl:u,states:["error"]}),f=(0,s.Z)({},n,{row:o,error:h.error}),Z=function(e){var t=e.classes,n={root:["root",e.row&&"row",e.error&&"error"]};return(0,d.Z)(n,m,t)}(f);return(0,b.jsx)(_,(0,s.Z)({className:(0,c.Z)(Z.root,r),ownerState:f,ref:t},i))})),y=n(2071),w=n(8278);var k=i.createContext(void 0),j=n(7384),S=["actions","children","defaultValue","name","onChange","value"],P=i.forwardRef((function(e,t){var n=e.actions,r=e.children,a=e.defaultValue,c=e.name,d=e.onChange,u=e.value,p=(0,l.Z)(e,S),h=i.useRef(null),f=(0,w.Z)({controlled:u,default:a,name:"RadioGroup"}),m=(0,o.Z)(f,2),v=m[0],g=m[1];i.useImperativeHandle(n,(function(){return{focus:function(){var e=h.current.querySelector("input:not(:disabled):checked");e||(e=h.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var x=(0,y.Z)(t,h),_=(0,j.Z)(c);return(0,b.jsx)(k.Provider,{value:{name:_,onChange:function(e){g(e.target.value),d&&d(e,e.target.value)},value:v},children:(0,b.jsx)(Z,(0,s.Z)({role:"radiogroup",ref:x},p,{children:r}))})})),C=n(4942),R=n(890),F=n(4036);function D(e){return(0,h.Z)("MuiFormControlLabel",e)}var I=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),B=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],T=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,C.Z)({},"& .".concat(I.label),t.label),t.root,t["labelPlacement".concat((0,F.Z)(n.labelPlacement))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)((0,C.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(I.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,C.Z)({},"& .".concat(I.label),(0,C.Z)({},"&.".concat(I.disabled),{color:(t.vars||t).palette.text.disabled})))})),N=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),r=n.className,a=n.componentsProps,o=void 0===a?{}:a,u=n.control,h=n.disabled,f=n.disableTypography,m=n.label,x=n.labelPlacement,_=void 0===x?"end":x,Z=(0,l.Z)(n,B),y=(0,v.Z)(),w=h;"undefined"===typeof w&&"undefined"!==typeof u.props.disabled&&(w=u.props.disabled),"undefined"===typeof w&&y&&(w=y.disabled);var k={disabled:w};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof u.props[e]&&"undefined"!==typeof n[e]&&(k[e]=n[e])}));var j=(0,g.Z)({props:n,muiFormControl:y,states:["error"]}),S=(0,s.Z)({},n,{disabled:w,labelPlacement:_,error:j.error}),P=function(e){var t=e.classes,n=e.disabled,r=e.labelPlacement,a=e.error,o={root:["root",n&&"disabled","labelPlacement".concat((0,F.Z)(r)),a&&"error"],label:["label",n&&"disabled"]};return(0,d.Z)(o,D,t)}(S),C=m;return null==C||C.type===R.Z||f||(C=(0,b.jsx)(R.Z,(0,s.Z)({component:"span",className:P.label},o.typography,{children:C}))),(0,b.jsxs)(T,(0,s.Z)({className:(0,c.Z)(P.root,r),ownerState:S,ref:t},Z,{children:[i.cloneElement(u,k),C]}))})),z=n(2065),E=n(3701);function L(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var M=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],O=(0,u.ZP)(E.Z)((function(e){var t=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),q=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),H=i.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,i=e.className,u=e.defaultChecked,p=e.disabled,h=e.disableFocusRipple,f=void 0!==h&&h,m=e.edge,g=void 0!==m&&m,x=e.icon,_=e.id,Z=e.inputProps,y=e.inputRef,k=e.name,j=e.onBlur,S=e.onChange,P=e.onFocus,C=e.readOnly,R=e.required,D=e.tabIndex,I=e.type,B=e.value,T=(0,l.Z)(e,M),N=(0,w.Z)({controlled:r,default:Boolean(u),name:"SwitchBase",state:"checked"}),z=(0,o.Z)(N,2),E=z[0],H=z[1],A=(0,v.Z)(),W=p;A&&"undefined"===typeof W&&(W=A.disabled);var Y="checkbox"===I||"radio"===I,G=(0,s.Z)({},e,{checked:E,disabled:W,disableFocusRipple:f,edge:g}),U=function(e){var t=e.classes,n=e.checked,r=e.disabled,a=e.edge,o={root:["root",n&&"checked",r&&"disabled",a&&"edge".concat((0,F.Z)(a))],input:["input"]};return(0,d.Z)(o,L,t)}(G);return(0,b.jsxs)(O,(0,s.Z)({component:"span",className:(0,c.Z)(U.root,i),centerRipple:!0,focusRipple:!f,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){j&&j(e),A&&A.onBlur&&A.onBlur(e)},ownerState:G,ref:t},T,{children:[(0,b.jsx)(q,(0,s.Z)({autoFocus:n,checked:r,defaultChecked:u,className:U.input,disabled:W,id:Y&&_,name:k,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;H(t),S&&S(e,t)}},readOnly:C,ref:y,required:R,ownerState:G,tabIndex:D,type:I},"checkbox"===I&&void 0===B?{}:{value:B},Z)),E?a:x]}))})),A=n(9201),W=(0,A.Z)((0,b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Y=(0,A.Z)((0,b.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),G=(0,u.ZP)("span")({position:"relative",display:"flex"}),U=(0,u.ZP)(W)({transform:"scale(1)"}),V=(0,u.ZP)(Y)((function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var J=function(e){var t=e.checked,n=void 0!==t&&t,r=e.classes,a=void 0===r?{}:r,o=e.fontSize,i=(0,s.Z)({},e,{checked:n});return(0,b.jsxs)(G,{className:a.root,ownerState:i,children:[(0,b.jsx)(U,{fontSize:o,className:a.background,ownerState:i}),(0,b.jsx)(V,{fontSize:o,className:a.dot,ownerState:i})]})},K=n(1260);function Q(e){return(0,h.Z)("MuiRadio",e)}var X=(0,f.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),$=["checked","checkedIcon","color","icon","name","onChange","size"],ee=(0,u.ZP)(H,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat((0,F.Z)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({color:(t.vars||t).palette.text.secondary,"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,z.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(0,C.Z)({},"&.".concat(X.checked),{color:(t.vars||t).palette[n.color].main}),(0,C.Z)({},"&.".concat(X.disabled),{color:(t.vars||t).palette.action.disabled}))}));var te=(0,b.jsx)(J,{checked:!0}),ne=(0,b.jsx)(J,{}),re=i.forwardRef((function(e,t){var n,r,a,o,c=(0,p.Z)({props:e,name:"MuiRadio"}),u=c.checked,h=c.checkedIcon,f=void 0===h?te:h,m=c.color,v=void 0===m?"primary":m,g=c.icon,x=void 0===g?ne:g,_=c.name,Z=c.onChange,y=c.size,w=void 0===y?"medium":y,j=(0,l.Z)(c,$),S=(0,s.Z)({},c,{color:v,size:w}),P=function(e){var t=e.classes,n=e.color,r={root:["root","color".concat((0,F.Z)(n))]};return(0,s.Z)({},t,(0,d.Z)(r,Q,t))}(S),C=i.useContext(k),R=u,D=(0,K.Z)(Z,C&&C.onChange),I=_;return C&&("undefined"===typeof R&&(a=C.value,R="object"===typeof(o=c.value)&&null!==o?a===o:String(a)===String(o)),"undefined"===typeof I&&(I=C.name)),(0,b.jsx)(ee,(0,s.Z)({type:"radio",icon:i.cloneElement(x,{fontSize:null!=(n=ne.props.fontSize)?n:w}),checkedIcon:i.cloneElement(f,{fontSize:null!=(r=te.props.fontSize)?r:w}),ownerState:S,classes:P,name:I,checked:R,onChange:D,ref:t},j))})),ae=n(9164),oe=n(1889),ie=n(8096),se=n(952),le=n(9373),ce=n(8870),de=n(8333),ue=n.p+"static/media/template_budget.1f59ec86cc1634bb3cbb.xlsx",pe=n(4160),he='If you have data on how the government spends across different development categories, you can upload it here. If you do not have disaggregated expenditure data, you can simply declare a total budget to be used by the model. The more disaggregate the data are, the more nuanced inferences you will be able to make. To learn about the format and other requirements of the budget dataset, you should download the associated spreadsheet template and consult its "metadata" tab.',fe="Enter the average total budget exercised during the sample period of the indicators. If you do not provide any data, PPI will set a budget of 100.",me="Provide a file with government expenditure data disaggregated into development categories. All the development categories uploaded in this file should be linked to at least one indicator from the dataset uploaded in the previous step (download the expenditure data template for more information).",ve=n(429),ge=n(5131),be=n(4526),xe=n(4045),_e=n(415),Ze=function(e){return!e.some((function(t,n){return t!==e[0]+n}))},ye=function(e,t){return t.every((function(t){return e.includes(t)}))},we=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var o,i,s,l,c,d,u,p,h,f,m,v,g,b,x,_,Z,y,w=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=w.length>3&&void 0!==w[3]?w[3]:"template_expenditure",i=w.length>4&&void 0!==w[4]?w[4]:"template_relation_table",s={sheet:[],expenditure:[],program_id:[],out_of_programs:[],empty:[],labels:[]},l=!1,"xlsx"===t||"xls"===t){e.next=8;break}throw new Error("Wrong format file");case 8:return e.next=10,(0,_e.y3)(n);case 10:if(c=e.sent,d=xe.ij(c,{type:"base64"}),u=[],p=[],h=[],f={},m=d.Sheets[o],v=d.Sheets[i],m&&0!==m.length&&v&&0!==v.length){e.next=23;break}s.sheet.push("The file uploaded do not contain a sheet with the name: ".concat(m&&0!==m.length?i:o)),l=!0,e.next=37;break;case 23:for(Object.keys(m).map((function(e){var t=m[e];"n"!==t.t&&"program_ID"!==t.v&&"expenditure"!==t.v&&"!ref"!==e&&"!margins"!==e?(s.expenditure.push(e),l=!0):(new RegExp("^A").test(e)&&"A1"!==e&&u.push(t.v),new RegExp("^B").test(e)&&"B1"!==e&&h.push(t.v))})),u.length!==h.length&&(s.expenditure.push("You must have set expenditure for each program_id"),l=!0),Ze(u)||(s.expenditure.push("Expenditure must be an increasing sequence of numbers"),l=!0),h.some((function(e){return e<=0}))&&(s.expenditure.push("Expenditure must have positive integers"),l=!0),Object.keys(v).map((function(e){var t=v[e],n=new RegExp("^A");"n"===t.t||"indicator_label"===t.v||/^program/.test(t.v)||n.test(e)||"!ref"===e||"!margins"===e||(s.program_id.push(e),l=!0),u.includes(t.v)||"n"!==t.t||n.test(e)||(s.out_of_programs.push(e),l=!0),"s"===t.t&&"indicator_label"!==t.v&&!/^program/.test(t.v)&&n.test(e)&&p.push(t.v)})),g=a.ID.filter((function(e,t){return 1===a.R[t]})),ye(g,p)&&ye(p,g)||(s.labels.push("You are missing several indicator labels in the budget file ".concat(g.filter((function(e){return!p.includes(e)})).join(", "))),l=!0),b=xe.P6.decode_range(v["!ref"]),x=b.s.r+1;x<=b.e.r;x+=1)if(void 0!==v[xe.P6.encode_cell({c:0,r:x})]&&(_=v[xe.P6.encode_cell({c:0,r:x})].v,-1!==(Z=a.ID.indexOf(_)))){for(f[Z]=[],y=b.s.c+1;y<=b.e.c;y+=1)void 0!==v[xe.P6.encode_cell({c:y,r:x})]&&f[Z].push(v[xe.P6.encode_cell({c:y,r:x})].v-1);0===f[Z].length&&(s.out_of_programs.push(xe.P6.encode_cell({c:0,r:x})),l=!0)}if(Object.values(s).filter((function(e){return e.length>0})).length||!(h.length>0)){e.next=36;break}return e.abrupt("return",{Bs:h,B_dict:f});case 36:0===h.length&&(s.empty.push("The uploaded file structure does not meet the template format or is empty"),l=!0);case 37:return e.abrupt("return",{errors:s,error:l});case 38:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ke=n(8579),je=function(e){var t=e.nextStep,n=e.simulationState,s=e.budgetFile,l=e.setBudgetFile,c=e.indicatorsResult,d=e.setBudgetResults,u=e.budget,p=e.setBudget,h=i.useState("single"),f=(0,o.Z)(h,2),m=f[0],v=f[1],g=i.useState(!1),x=(0,o.Z)(g,2),_=x[0],Z=x[1],y=i.useState(null),w=(0,o.Z)(y,2),k=w[0],j=w[1],S=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.name){e.next=9;break}return n=(0,_e.fB)(t),e.next=4,we(n,t,c);case 4:a=e.sent,l(t),a.error?(Z(!1),j(a)):(Z(!0),j(a),d(a)),e.next=12;break;case 9:l([]),Z(!1),j(null);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.useEffect((function(){"single"===m&&u&&""!==u?(l(null),Z(!0)):k&&!k.error?(p(""),Z(!0)):Z(!1)}),[m,u,k]),(0,b.jsx)(ae.Z,{maxWidth:"xl",sx:{paddingY:function(e){return[e.spacing(4),e.spacing(4),e.spacing(8)]}},children:(0,b.jsxs)(oe.ZP,{container:!0,rowSpacing:4,columnSpacing:8,columnns:{xs:4,sm:8,md:12,lg:12},children:[(0,b.jsx)(oe.ZP,{item:!0,xs:12,md:5,children:(0,b.jsx)(ke.J,{})}),(0,b.jsx)(oe.ZP,{item:!0,xs:12,md:7,children:(0,b.jsx)(ve.Y,{selected:n})}),(0,b.jsxs)(oe.ZP,{item:!0,xs:12,md:5,children:[(0,b.jsx)(R.Z,{variant:"h1",children:"Budget"}),(0,b.jsx)(R.Z,{variant:"body1",mt:4,children:he})]}),(0,b.jsxs)(oe.ZP,{item:!0,xs:12,md:7,children:[(0,b.jsx)(ie.Z,{children:(0,b.jsxs)(P,{value:m,onChange:function(e){return v(e.target.value)},children:[(0,b.jsx)(N,{value:"single",control:(0,b.jsx)(re,{}),label:(0,b.jsx)(R.Z,{variant:"h5",children:"Specify the total budget"})}),(0,b.jsx)(R.Z,{variant:"body2",mt:1,children:fe}),(0,b.jsx)(ie.Z,{variant:"standard",children:(0,b.jsx)(se.Z,{sx:{marginTop:function(e){return e.spacing(4)},marginBottom:function(e){return e.spacing(4)}},id:"budget",variant:"outlined",label:"Total budget",value:u,onChange:function(e){return p(e.target.value)},disabled:"single"!==m})}),(0,b.jsx)("div",{className:pe.Z.separator}),(0,b.jsx)(N,{value:"disaggregated",control:(0,b.jsx)(re,{}),label:(0,b.jsx)(R.Z,{variant:"h5",children:"Upload the disaggregated budget "})}),(0,b.jsx)(R.Z,{variant:"body2",mt:1,mb:2,children:me}),"disaggregated"===m&&(0,b.jsxs)(i.Fragment,{children:[(0,b.jsx)(le.Z,{href:ue,variant:"outlined",sx:{width:"min-content",whiteSpace:"nowrap"},children:"Download template"}),(0,b.jsx)(ge.Q,{maxFiles:1,previewsPerLine:1,supportedExtensions:["xlsx","xls"],onFileSelection:function(e){S(e?e[0]:[])},disabled:"single"===m}),s&&0!==s.length&&k&&s.name&&(0,b.jsx)(be.f,{component:"budget",verified:_,validationResult:k})]})]})}),(0,b.jsx)(ce.Z,{mt:4,textAlign:"right",children:(0,b.jsxs)(le.Z,{variant:"contained",size:"large",onClick:function(){t(),Z(!0)},disabled:!_,children:["Next",(0,b.jsx)(de.Z,{})]})})]})]})})},Se=je},4160:function(e,t){t.Z={icon:"steps_icon__yfUPS",primaryTitle:"steps_primaryTitle__zSF8L",secondaryTitle:"steps_secondaryTitle__Hhd3A",paragraphDiv:"steps_paragraphDiv__RlVg0",informationDiv:"steps_informationDiv__cxHYE",errorIcon:"steps_errorIcon__-tFRy",rightSubDiv:"steps_rightSubDiv__ihTtm",tableTitle:"steps_tableTitle__-sHhh",leftSubDiv:"steps_leftSubDiv__6CjWi",row:"steps_row__jr5Lt",column:"steps_column__pdUo1",downloadLink:"steps_downloadLink__bO6ez",greyText:"steps_greyText__ul-06",darkDiv:"steps_darkDiv__vJab8",lightText:"steps_lightText__heZc3",indicatorsTable:"steps_indicatorsTable__crHqC",separator:"steps_separator__3i8HN",select:"steps_select__PW1yx",collapsedContainer:"steps_collapsedContainer__xbHY7",end:"steps_end__79KS5",firstNumber:"steps_firstNumber__aBmUn",sliderInvisibleDiv0:"steps_sliderInvisibleDiv0__l617l",sliderInvisibleDiv1:"steps_sliderInvisibleDiv1__ty4aH",sliderInvisibleDiv3:"steps_sliderInvisibleDiv3__LLkx-",hide:"steps_hide__2ml7W",chartsDiv:"steps_chartsDiv__Dp2mB",mt50:"steps_mt50__bcpes",noPrint:"steps_noPrint__LxECq",container:"steps_container__Ky-R8",chart:"steps_chart__9BuME"}}}]);
//# sourceMappingURL=84.0022b01c.chunk.js.map
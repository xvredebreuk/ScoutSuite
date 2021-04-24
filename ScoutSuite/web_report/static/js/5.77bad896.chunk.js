(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5,48],{507:function(e,t,n){"use strict";n.r(t);var r=n(1),i=(n(0),n(15)),s=n.n(i),o=n(64),a=n.n(o),c=n(103),l=n(640),u=n(83),p=(n(659),n(646));t.default=function(e){var t=e.mfaDevices,n=e.accessKeys,i=e.loginProfile;return Object(r.jsxs)("div",{className:"authentication-methods",children:[Object(r.jsx)(l.c,{label:"Password enabled",valuePath:"LoginProfile",renderValue:function(e){return Object(c.e)(!a()(e))}}),Object(r.jsx)(l.c,{label:"Multi-Factor enabled",valuePath:"MFADevices",errorPath:"mfa_enabled",renderValue:function(e){return Object(c.e)(!a()(e))}}),!a()(t)&&Object(r.jsx)("ul",{children:t.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)(u.a,{label:"Serial Number",value:e.SerialNumber})},t)}))}),Object(r.jsx)(l.c,{label:"Access Keys",valuePath:"AccessKeys",errorPath:"multiple_api_keys",renderValue:function(e){return s()(e,"length",0)}}),!a()(n)&&Object(r.jsx)("ul",{children:n.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{errorPath:"AccessKey.".concat(t),renderValue:function(){return Object(r.jsxs)("ul",{className:"key-infos",children:[e.AccessKeyId,Object(r.jsx)("li",{children:e.Status}),Object(r.jsx)("li",{children:"Created on ".concat(Object(c.h)(e.CreateDate))})]})}})},t)}))}),Object(r.jsxs)("div",{className:"warnings",children:[!a()(i)&&n.length>0&&Object(r.jsx)(l.c,{errorPath:"password_and_keys",renderValue:function(){return Object(r.jsx)(p.a,{message:"Review the need for password-based and key-based authentication"})}}),n.length>1&&Object(r.jsx)(l.c,{errorPath:"multiple_active_api_keys",renderValue:function(){return Object(r.jsx)(p.a,{message:"Review the need for multiple active access keys"})}})]})]})}},546:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(18),s=(n(0),n(15)),o=n.n(s),a=n(64),c=n.n(a),l=n(103),u=n(640),p=n(645),h=n(642),d=n(507),f=n(648);t.default=function(e){var t=e.data;if(!t)return null;var n=o()(t,["item","groups"]),s=o()(t,["item","inline_policies"]),a=o()(t,["item","policies"]),g=o()(t,["item","Tags"]);return Object(r.jsxs)(u.a,{data:t,children:[Object(r.jsxs)(h.a,{children:[Object(r.jsx)(u.c,{label:"ARN",valuePath:"arn",renderValue:l.n}),Object(r.jsx)(u.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:l.h})]}),Object(r.jsxs)(p.b,{children:[Object(r.jsx)(p.a,{title:"Authentication Methods",children:Object(r.jsx)(d.default,{mfaDevices:o()(t,["item","MFADevices"]),accessKeys:o()(t,["item","AccessKeys"]),loginProfile:o()(t,["item","LoginProfile"])})}),!c()(n)&&Object(r.jsx)(p.a,{title:"Groups",children:Object(l.l)(Object.values(n))}),!c()(s)&&Object(r.jsx)(p.a,{title:"Inline Policies",children:Object(r.jsx)(r.Fragment,{children:Object.entries(s).map((function(e,t){var n=Object(i.a)(e,2),s=n[0],o=n[1];return Object(r.jsx)(f.a,{name:o.name,policy:o.PolicyDocument,policyPath:"inline_policies.".concat(s)},t)}))})}),!c()(a)&&Object(r.jsx)(p.a,{title:"Managed Policies",children:Object(l.l)(Object.values(a))}),!c()(g)&&Object(r.jsx)(p.a,{title:"Tags",children:Object(l.j)(g)})]})]})}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r=n(0),i=n.n(r),s={path_to_issue:[],item:{}},o=i.a.createContext(s),a=i.a.createContext(""),c=i.a.createContext((function(){}))},638:function(e,t,n){"use strict";var r=n(19),i=n(1),s=n(0),o=n(633),a=n(7),c=n.n(a),l=n(15),u=n.n(l),p=n(10),h=n.n(p),d=n(637),f=n(103),g=n(83),b=(n(641),n(624)),j=n(191),O=n.n(j),m=n(192),v=n(130),y=function(e){var t=e.service,n=e.finding,r=e.path,a=Object(s.useContext)(v.a),c=a.exceptions,l=a.addException,p=Object(m.b)().enqueueSnackbar,h=u()(c,[t,n],[]).includes(r);return Object(i.jsx)(o.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(i.jsx)(b.a,{disabled:h,size:"small",startIcon:Object(i.jsx)(O.a,{}),className:"exception-btn",onClick:function(){l(t,n,r),p("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},x=n(29),C=function(e){var t,n=e.label,a=e.separator,l=e.valuePath,p=e.errorPath,b=e.className,j=e.inline,O=e.tooltip,m=e.tooltipProps,v=e.renderValue,C=e.basePathOverwrite,T=Object(x.g)(),P=Object(s.useContext)(d.a),S=Object(s.useContext)(d.b),N=Object(s.useContext)(d.c),_=Object(f.a)(C||S,l),w=v(e.value||u()(P.item,_,e.value));("boolean"===typeof w&&(w=String(w)),p)?t=(h()(p)?p:[p]).map((function(e){return Object(f.a)(C||S,e)})):t=[_];var k=t.some((function(e){return P.path_to_issues.includes(e)})),E=P.level;if(Object(s.useEffect)((function(){k&&N(E)}),[E]),void 0===w||null===w)return null;var R=Object(i.jsx)(y,{service:T.service,finding:T.finding,path:"".concat(P.path,".").concat(t[0])}),D=Object(i.jsxs)("span",{className:c()(k&&c()("issue",E)),children:[w,k&&R]});return Object(i.jsx)(g.a,{className:c()(b,"partial-value",{inline:j}),label:n,separator:a,value:O?Object(i.jsx)(o.a,Object(r.a)(Object(r.a)({title:w},m),{},{children:D})):D})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},639:function(e,t,n){"use strict";var r=n(1),i=n(0),s=n(637),o=n(103);t.a=function(e){var t=e.path,n=e.children,a=Object(i.useContext)(s.b);return Object(r.jsx)(s.b.Provider,{value:Object(o.a)(a,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o.a})),n.d(t,"c",(function(){return a.a}));var r=n(1),i=(n(0),n(637)),s=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(r.jsx)(i.a.Provider,{value:t,children:n})}),o=n(639),a=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var r=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return c.b}));var r=n(1),i=n(18),s=n(0),o=n(7),a=n.n(o),c=n(104),l=n(637),u=n(56),p=(n(644),function(e){var t=e.title,n=e.isSelected,o=e.disabled,p=e.onClick,h=e.children,d=Object(s.useState)(""),f=Object(i.a)(d,2),g=f[0],b=f[1],j=g?Object(r.jsxs)(r.Fragment,{children:[t,u.a[g].icon]}):t;return Object(r.jsx)(l.c.Provider,{value:b,children:Object(r.jsx)(c.a,{title:j,className:a()("partial-tab-pane",g),isSelected:n,disabled:o,onClick:p,children:h})})})},646:function(e,t,n){"use strict";var r=n(1),i=(n(0),n(7)),s=n.n(i),o=n(105),a=n.n(o),c=(n(647),{icon:Object(r.jsx)(a.a,{fontSize:"inherit"})}),l=function(e){var t=e.message,n=e.icon,i=e.className;return Object(r.jsxs)("div",{className:s()("warning-message",i),children:[n,t]})};l.defaultProps=c,t.a=l},647:function(e,t,n){},648:function(e,t,n){"use strict";var r=n(1),i=n(18),s=(n(0),n(649)),o=n.n(s),a=n(651),c=n.n(a),l=n(652),u=n.n(l),p=n(193),h=n.n(p),d=n(64),f=n.n(d),g=n(638),b=n(103),j=(n(650),function(e){var t=e.name,n=e.policy,s=e.policyPath,a=e.defaultOpen;if(f()(n))return null;var l=function(e){return JSON.stringify(e,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")},p=Object(r.jsx)("h4",{className:"policy-title",children:t}),d=Object(r.jsxs)("code",{children:["{",Object.entries(n).map((function(e,t){var a=Object(i.a)(e,2),p=a[0],d=a[1];return Object(r.jsxs)("div",{children:['"'.concat(p,'":\xa0'),"Statement"===p?Object(r.jsxs)(r.Fragment,{children:["[",Object(r.jsx)("br",{}),d.map((function(e,t){return Object(r.jsx)(o.a,{trigger:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{fontSize:"inherit"}),Object(r.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(r.jsx)(u.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:Object(r.jsx)(g.a,{value:l(e),errorPath:"".concat(s,".PolicyDocument.Statement.").concat(t),renderValue:function(e){return Object(b.m)(e)}})},t)})),"]"]}):Object(r.jsx)(r.Fragment,{children:Object(b.m)(l(d))}),t!==h()(n)-1&&",",Object(r.jsx)("br",{})]},t)})),"}"]});return Object(r.jsx)("div",{className:"policy",children:t?Object(r.jsx)(o.a,{trigger:Object(r.jsxs)(r.Fragment,{children:[p,Object(r.jsx)(c.a,{fontSize:"inherit"})]}),triggerWhenOpen:Object(r.jsxs)(r.Fragment,{children:[p,Object(r.jsx)(u.a,{fontSize:"inherit"})]}),transitionTime:1,open:a,children:d}):d})});j.defaultProps={defaultOpen:!1},t.a=j},649:function(e,t,n){var r;e.exports=(r=n(0),function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(3);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),s=n(0),o=n.n(s),a=function(e){return 0!==e};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e);var t,n,r,s=h(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),b(f(t=s.call(this,e)),"continueOpenCollapsible",(function(){var e=f(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:a(e.scrollHeight),shouldOpenOnNextCycle:!1})})),b(f(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),b(f(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),b(f(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=o,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:a(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:a(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?i.a.createElement("span",{className:"".concat(this.props.classParentString,"__trigger-sibling")},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?i.a.createElement(this.props.triggerSibling,null):null}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",r=this.props.triggerDisabled?"is-disabled":"",s=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,o=this.props.contentContainerTagName,a=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,u="".concat(this.props.classParentString,"__trigger ").concat(n," ").concat(r," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),p="".concat(this.props.classParentString," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),h="".concat(this.props.classParentString,"__contentOuter ").concat(this.props.contentOuterClassName),d="".concat(this.props.classParentString,"__contentInner ").concat(this.props.contentInnerClassName);return i.a.createElement(o,l({className:p.trim()},this.props.containerElementProps),i.a.createElement(a,l({className:u.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),s),this.renderNonClickableTriggerElement(),i.a.createElement("div",{className:h.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},i.a.createElement("div",{className:d.trim()},c)))}}])&&u(t.prototype,n),r&&u(t,r),o}(r.Component);j.propTypes={transitionTime:o.a.number,transitionCloseTime:o.a.number,triggerTagName:o.a.string,easing:o.a.string,open:o.a.bool,containerElementProps:o.a.object,triggerElementProps:o.a.object,classParentString:o.a.string,openedClassName:o.a.string,triggerStyle:o.a.object,triggerClassName:o.a.string,triggerOpenedClassName:o.a.string,contentOuterClassName:o.a.string,contentInnerClassName:o.a.string,accordionPosition:o.a.oneOfType([o.a.string,o.a.number]),handleTriggerClick:o.a.func,onOpen:o.a.func,onClose:o.a.func,onOpening:o.a.func,onClosing:o.a.func,onTriggerOpening:o.a.func,onTriggerClosing:o.a.func,trigger:o.a.oneOfType([o.a.string,o.a.element]),triggerWhenOpen:o.a.oneOfType([o.a.string,o.a.element]),triggerDisabled:o.a.bool,lazyRender:o.a.bool,overflowWhenOpen:o.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:o.a.bool,triggerSibling:o.a.oneOfType([o.a.element,o.a.func]),tabIndex:o.a.number,contentContainerTagName:o.a.string},j.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=j}]))},650:function(e,t,n){},651:function(e,t,n){"use strict";var r=n(35),i=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(38)).default)(s.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},652:function(e,t,n){"use strict";var r=n(35),i=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(38)).default)(s.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},659:function(e,t,n){}}]);
//# sourceMappingURL=5.77bad896.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},RNiq:function(e,t,n){"use strict";n.r(t);n("G2uL");var r=n("q1tI"),a=n.n(r),o=n("YFqc"),l=n.n(o);n("IP2g");t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container index"},a.a.createElement("nav",null,a.a.createElement(l.a,{prefetch:!0,href:"full"},a.a.createElement("a",null,"Full Resume")),a.a.createElement(l.a,{prefetch:!0,href:"blank"},a.a.createElement("a",null,"Blank Sample")),a.a.createElement(l.a,{href:"https://github.com/snailuj/resonate"},a.a.createElement("a",{className:"button"},"View on Github",a.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 16 16"},a.a.createElement("g",{fill:"#111111"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#111111",d:"M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"}))))))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("9Jkg")),o=r(n("/HRN")),l=r(n("WaGi")),i=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n("CxY0"),h=u(n("q1tI")),d=(p(n("17x9")),u(n("nOHt"))),v=n("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function t(){var e,n,r,a,l;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:m(e),as:m(t)}},r=null,a=null,l=null,function(e,t){if(e===r&&t===a)return l;var o=n(e,t);return r=e,a=t,l=o,o}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),l=o.href,i=o.as;if(function(e){var t=s.parse(e,!1,!0),n=s.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var c=window.location.pathname;l=s.resolve(c,l),i=i?s.resolve(c,i):l,t.preventDefault();var f=e.props.scroll;null==f&&(f=i.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](l,i,{shallow:e.props.shallow}).then(function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=s.resolve(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=a||r),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=d.Router._rewriteUrlForNextExport(l.href)),h.default.cloneElement(o,l)}}]),t}(h.Component);t.default=w},"oh+g":function(e,t,n){var r=n("WEpk"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);
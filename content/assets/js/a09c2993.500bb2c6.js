"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="Getting Started",u={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Getting Started",description:"What is Conductor",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/content/docs/introduction",editUrl:"https://github.com/orkes-io/docs/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialsSideBarV2",next:{title:"Overview",permalink:"/content/docs/getting-started/concepts/concepts-overview"}},l=[{value:"What is Conductor",id:"what-is-conductor",children:[]},{value:"How to run Conductor",id:"how-to-run-conductor",children:[]},{value:"What use cases can Conductor solve?",id:"what-use-cases-can-conductor-solve",children:[]},{value:"What License does Conductor use?",id:"what-license-does-conductor-use",children:[]},{value:"How can I run Conductor in production?",id:"how-can-i-run-conductor-in-production",children:[]},{value:"What about scale?",id:"what-about-scale",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"what-is-conductor"},"What is Conductor"),(0,a.kt)("p",null,"Conductor is a microservice and workflow orchestration engine.\nConductor allows developers to build stateful applications using simple,\nstateless code without having to manage the state and complexities of building a distributed application.\nConductor is cloud native and scales seamlessly as your workload grows."),(0,a.kt)("h3",{id:"how-to-run-conductor"},"How to run Conductor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"getting-started/install/running-locally"},"Short Tutorial on Running Conductor locally")),(0,a.kt)("h3",{id:"what-use-cases-can-conductor-solve"},"What use cases can Conductor solve?"),(0,a.kt)("p",null,"Conductor is a general-purpose orchestration engine that is language agnostic and has been adopted widely across\nmultiple industries, ranging from Media to security to finance and more. Some of the common use cases that have been\nsolved by Conductor are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Media Processing Pipelines (Image Processing, Video Transcoding, etc..)"),(0,a.kt)("li",{parentName:"ol"},"Security and Threat detection workflows"),(0,a.kt)("li",{parentName:"ol"},"Order Management workflows"),(0,a.kt)("li",{parentName:"ol"},"Financial transactions"),(0,a.kt)("li",{parentName:"ol"},"Distributed Transactions"),(0,a.kt)("li",{parentName:"ol"},"Human-centric business process automation"),(0,a.kt)("li",{parentName:"ol"},"Orchestrating Microservices (HTTP,  background services, etc.)"),(0,a.kt)("li",{parentName:"ol"},"Orchestrating business logic across various cloud functions (AWS Lambda, GCP functions, etc.)"),(0,a.kt)("li",{parentName:"ol"},"Infrastructure Provisioning"),(0,a.kt)("li",{parentName:"ol"},"CICD Pipelines"),(0,a.kt)("li",{parentName:"ol"},"Long running processes and workflows"),(0,a.kt)("li",{parentName:"ol"},"Monitoring"),(0,a.kt)("li",{parentName:"ol"},"Distributed Transactions"),(0,a.kt)("li",{parentName:"ol"},"Localization Pipelines"),(0,a.kt)("li",{parentName:"ol"},"Content Management and Publishing Workflows")),(0,a.kt)("h3",{id:"what-license-does-conductor-use"},"What License does Conductor use?"),(0,a.kt)("p",null,"Netflix conductor is available under Apache 2.0 Open Source license."),(0,a.kt)("h3",{id:"how-can-i-run-conductor-in-production"},"How can I run Conductor in production?"),(0,a.kt)("p",null,"Conductor can be deployed using various backend (Redis, MySQL, Postgres),\nand can be deployed in data centers as well as various clouds."),(0,a.kt)("h3",{id:"what-about-scale"},"What about scale?"),(0,a.kt)("p",null,"Conductor has been battle tested at Netflix at scale and uses Chaos engineering principles to build a robust, highly scalable system."))}p.isMDXComponent=!0}}]);
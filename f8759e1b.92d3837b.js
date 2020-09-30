(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),O=a,j=d["".concat(c,".").concat(O)]||d[O]||m[O]||b;return n?r.a.createElement(j,i(i({ref:t},p),{},{components:n})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),b=(n(0),n(114)),c={id:"api-helpers",title:"Helpers"},i={unversionedId:"api-helpers",id:"api-helpers",isDocsHomePage:!1,title:"Helpers",description:"connectField(component[, options])",source:"@site/../docs/api-helpers.md",slug:"/api-helpers",permalink:"/docs/api-helpers",version:"current",sidebar:"docs",previous:{title:"Context data",permalink:"/docs/api-context-data"},next:{title:"Autofield algorithm",permalink:"/docs/uth-autofield-algorithm"}},o=[{value:"<code>connectField(component[, options])</code>",id:"connectfieldcomponent-options",children:[]},{value:"<code>changedKeys(root, valueA, valueB)</code>",id:"changedkeysroot-valuea-valueb",children:[]},{value:"<code>filterDOMProps(props)</code>",id:"filterdompropsprops",children:[]},{value:"<code>filterDOMProps.register(propA, propB, propC ...)</code>",id:"filterdompropsregisterpropa-propb-propc-",children:[]},{value:"<code>filterDOMProps.registered</code>",id:"filterdompropsregistered",children:[]},{value:"<code>joinName([null, ] nameA, nameB, nameC, ...)</code>",id:"joinnamenull--namea-nameb-namec-",children:[]},{value:"<code>randomIds([prefix])</code>",id:"randomidsprefix",children:[]}],p={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"connectfieldcomponent-options"},Object(b.b)("inlineCode",{parentName:"h2"},"connectField(component[, options])")),Object(b.b)("p",null,"Provides form management related props."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"connectField")," helper is a component wrapper, that provides various props related to the form management.\nIt also adds the 'Field' suffix to the name of the wrapped component."),Object(b.b)("p",null,"The table below lists all of the ",Object(b.b)("strong",{parentName:"p"},"guaranteed")," props that will be passed to the wrapped component:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"changed")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Has field changed?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"disabled")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Is field disabled?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"error")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field scoped part of validation error.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"errorMessage")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field scoped validation error message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"field")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field definition from schema.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"fields")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"arrayOf(string)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Subfields names.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"fieldType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field type.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field id - given or random.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"label")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field label.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"onChange")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"func(value, [name])")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Change field value.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"placeholder")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field placeholder.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"showInlineError")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Show inline error?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"any")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field value.")))),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"connectField")," function accepts two arguments: the first one is a component and the second one is an options object."),Object(b.b)("p",null,"The table below lists all available options:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"initialValue")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Initial value check. If truthy, then after the first render defaultValue is set as value if no value is provided (undefined).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"kind")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"'leaf'")," or ",Object(b.b)("inlineCode",{parentName:"td"},"'node'")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Defines field type. If you are not sure which one to use, use ",Object(b.b)("inlineCode",{parentName:"td"},"node"),".")))),Object(b.b)("h2",{id:"changedkeysroot-valuea-valueb"},Object(b.b)("inlineCode",{parentName:"h2"},"changedKeys(root, valueA, valueB)")),Object(b.b)("p",null,"Returns an array of changed keys between ",Object(b.b)("inlineCode",{parentName:"p"},"valueA")," and ",Object(b.b)("inlineCode",{parentName:"p"},"valueB"),", where ",Object(b.b)("inlineCode",{parentName:"p"},"root")," is the root key."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { changedKeys } from 'uniforms';\n\nconst arrayOfChangedKeys = changedKeys(root, valueA, valueB);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," For more examples, see ",Object(b.b)("inlineCode",{parentName:"p"},"changedKeys")," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/blob/master/packages/uniforms/__tests__/changedKeys.js"}),"tests"),"."),Object(b.b)("h2",{id:"filterdompropsprops"},Object(b.b)("inlineCode",{parentName:"h2"},"filterDOMProps(props)")),Object(b.b)("p",null,"Removes all uniforms-related props."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nconst nonUniformsProps = filterDOMProps(props);\n")),Object(b.b)("h2",{id:"filterdompropsregisterpropa-propb-propc-"},Object(b.b)("inlineCode",{parentName:"h2"},"filterDOMProps.register(propA, propB, propC ...)")),Object(b.b)("p",null,"Registers additional props to be filtered."),Object(b.b)("p",null,"If you want to filter additional props, then you have to register it."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nfilterDOMProps.register(propA, propB, propC /* ... */);\n")),Object(b.b)("h2",{id:"filterdompropsregistered"},Object(b.b)("inlineCode",{parentName:"h2"},"filterDOMProps.registered")),Object(b.b)("p",null,"Returns an array containing already registered props."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nfilterDOMProps.register(propA, propB, propC /* ... */);\nfilterDOMProps.registered; // ['propA', 'propB', ...]\n")),Object(b.b)("h2",{id:"joinnamenull--namea-nameb-namec-"},Object(b.b)("inlineCode",{parentName:"h2"},"joinName([null, ] nameA, nameB, nameC, ...)")),Object(b.b)("p",null,"Safely joins partial field names. When the first param is null, returns an array. Otherwise, returns a string."),Object(b.b)("p",null,"If you create a custom field with subfields, then it's better to use this helper."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { joinName } from 'uniforms';\n\nconst joinedNameArray = joinName(null, nameA, nameB, nameC /* ... */);\nconst joinedNameString = joinName(nameA, nameB, nameC /* ... */);\n")),Object(b.b)("h2",{id:"randomidsprefix"},Object(b.b)("inlineCode",{parentName:"h2"},"randomIds([prefix])")),Object(b.b)("p",null,"Generates random ID, based on given prefix. (",Object(b.b)("em",{parentName:"p"},"It's rather an internal helper, but it's still exported."),")"),Object(b.b)("p",null,"Use it, if you want to have some random but deterministic strings. If no prefix is provided, the 'uniforms' prefix will be applied."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { randomIds } from 'uniforms';\n\nconst predictableRandomIdGenerator = randomIds(prefix);\n\nconst predictableRandomIdA = predictableRandomIdGenerator();\nconst predictableRandomIdB = predictableRandomIdGenerator();\n")))}l.isMDXComponent=!0}}]);
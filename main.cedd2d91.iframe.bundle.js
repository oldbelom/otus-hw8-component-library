(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./ts/App/Columns/Columns.stories.tsx":"./src/ts/App/Columns/Columns.stories.tsx","./ts/App/Dropdown/Dropdown.stories.tsx":"./src/ts/App/Dropdown/Dropdown.stories.tsx","./ts/App/Paragraph/Paragraph.stories.tsx":"./src/ts/App/Paragraph/Paragraph.stories.tsx","./ts/App/SpaceBlock/SpaceBlock.stories.tsx":"./src/ts/App/SpaceBlock/SpaceBlock.stories.tsx","./ts/App/Title/Title.stories.tsx":"./src/ts/App/Title/Title.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/ts/App/Columns/Columns.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"),createClass_default=__webpack_require__.n(createClass),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var Columns_Columns=function(_Component){inherits_default()(Columns,_Component);var _super=_createSuper(Columns);function Columns(){var _this;classCallCheck_default()(this,Columns);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).styles={color:"green",fontSize:"30px",display:"grid"},_this}return createClass_default()(Columns,[{key:"render",value:function render(){return Object(jsx_runtime.jsx)("div",{style:Object.assign({},this.styles,{gridTemplateColumns:"repeat("+this.props.columns+", 1fr)"}),"data-testid":"columns",children:this.props.items&&this.props.items.map((function(item,index){return Object(jsx_runtime.jsx)("span",{children:item},item+"_"+index)}))})}}]),Columns}(react.Component);try{Columns_Columns.displayName="Columns",Columns_Columns.__docgenInfo={description:"",displayName:"Columns",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"any[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ts/App/Columns/Columns.tsx#Columns"]={docgenInfo:Columns_Columns.__docgenInfo,name:"Columns",path:"src/ts/App/Columns/Columns.tsx#Columns"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Columns",component:Columns_Columns,argTypes:{columns:{options:[1,2,3,4,5,6],control:{type:"radio"}}}};var Columns_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Columns_Columns,Object.assign({},args))};Columns_stories_Template.displayName="Template";var Default=Columns_stories_Template.bind({});Default.args={items:["one","two","three","four","five","six","seven"]},Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <Columns {...args} />\n)"}},Default.parameters)},"./src/ts/App/Dropdown/Dropdown.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Dropdown_stories_Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"),createClass_default=__webpack_require__.n(createClass),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var Dropdown_Dropdown=function(_Component){inherits_default()(Dropdown,_Component);var _super=_createSuper(Dropdown);function Dropdown(){var _this;classCallCheck_default()(this,Dropdown);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={isOpen:!1},_this}return createClass_default()(Dropdown,[{key:"showContent",value:function showContent(){this.setState((function(state){return{isOpen:!state.isOpen}}))}},{key:"render",value:function render(){var _this2=this;return Object(jsx_runtime.jsxs)("div",{className:"dropdown","data-testid":"dropdown",children:[Object(jsx_runtime.jsx)("h3",{onClick:function onClick(){return _this2.showContent()},children:"Сlick on me to see the text"}),this.state.isOpen&&Object(jsx_runtime.jsx)("p",{"data-testid":"dropdown-text",children:"Some interesting text"})]})}}]),Dropdown}(react.Component);try{Dropdown_Dropdown.displayName="Dropdown",Dropdown_Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ts/App/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown_Dropdown.__docgenInfo,name:"Dropdown",path:"src/ts/App/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var styles={color:"green",fontSize:"30px",display:"grid"},Dropdown_stories_Default=(__webpack_exports__.default={title:"Dropdown",component:Dropdown_Dropdown},function Default(){return Object(jsx_runtime.jsx)(Dropdown_Dropdown,{style:styles})});Dropdown_stories_Default.displayName="Default",Dropdown_stories_Default.parameters=Object.assign({storySource:{source:"() => <Dropdown style={styles} />"}},Dropdown_stories_Default.parameters)},"./src/ts/App/Paragraph/Paragraph.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"),createClass_default=__webpack_require__.n(createClass),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var Paragraph_Paragraph=function(_React$Component){inherits_default()(Paragraph,_React$Component);var _super=_createSuper(Paragraph);function Paragraph(){return classCallCheck_default()(this,Paragraph),_super.apply(this,arguments)}return createClass_default()(Paragraph,[{key:"render",value:function render(){return Object(jsx_runtime.jsx)("p",{"data-testid":"paragraph",style:{fontStyle:this.props.fontStyle,fontWeight:this.props.fontWeight},children:"React-компоненты — это маленькие, повторно используемые части кода, которые возвращают React-элементы для отображения на странице. Самый простой React-компонент — это простая функция JavaScript, которая возвращает элементы React."})}}]),Paragraph}(react_default.a.Component);try{Paragraph_Paragraph.displayName="Paragraph",Paragraph_Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!0,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ts/App/Paragraph/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph_Paragraph.__docgenInfo,name:"Paragraph",path:"src/ts/App/Paragraph/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Paragraph",component:Paragraph_Paragraph};var Paragraph_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Paragraph_Paragraph,Object.assign({},args))};Paragraph_stories_Template.displayName="Template";var Default=Paragraph_stories_Template.bind({});Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <Paragraph {...args} />\n)"}},Default.parameters)},"./src/ts/App/SpaceBlock/SpaceBlock.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return SpaceBlock_stories_Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SpaceBlock(){return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)("hr",{"data-testid":"space-block"})})}SpaceBlock.displayName="SpaceBlock";__webpack_exports__.default={title:"SpaceBlock",component:SpaceBlock};var SpaceBlock_stories_Default=function Default(){return Object(jsx_runtime.jsx)(SpaceBlock,{})};SpaceBlock_stories_Default.displayName="Default",SpaceBlock_stories_Default.parameters=Object.assign({storySource:{source:"() => <SpaceBlock />"}},SpaceBlock_stories_Default.parameters)},"./src/ts/App/Title/Title.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"H1",(function(){return H1})),__webpack_require__.d(__webpack_exports__,"H2",(function(){return H2})),__webpack_require__.d(__webpack_exports__,"H3",(function(){return H3})),__webpack_require__.d(__webpack_exports__,"H4",(function(){return H4}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"),createClass_default=__webpack_require__.n(createClass),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var Title_Title=function(_Component){inherits_default()(Title,_Component);var _super=_createSuper(Title);function Title(){return classCallCheck_default()(this,Title),_super.apply(this,arguments)}return createClass_default()(Title,[{key:"render",value:function render(){switch(this.props.dataTitleTag){case"h1":default:return Object(jsx_runtime.jsx)("h1",{className:"h1",children:"Amazing React"});case"h2":return Object(jsx_runtime.jsx)("h2",{className:"h2",children:"Amazing React"});case"h3":return Object(jsx_runtime.jsx)("h3",{className:"h3",children:"Amazing React"});case"h4":return Object(jsx_runtime.jsx)("h4",{className:"h4",children:"Amazing React"})}}}]),Title}(react.Component);try{Title_Title.displayName="Title",Title_Title.__docgenInfo={description:"",displayName:"Title",props:{dataTitleTag:{defaultValue:null,description:"",name:"dataTitleTag",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ts/App/Title/Title.tsx#Title"]={docgenInfo:Title_Title.__docgenInfo,name:"Title",path:"src/ts/App/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Title",component:Title_Title};var Title_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Title_Title,Object.assign({},args))};Title_stories_Template.displayName="Template";var H1=Title_stories_Template.bind({});H1.args={dataTitleTag:"h1"};var H2=Title_stories_Template.bind({});H2.args={dataTitleTag:"h2"};var H3=Title_stories_Template.bind({});H3.args={dataTitleTag:"h3"};var H4=Title_stories_Template.bind({});H4.args={dataTitleTag:"h4"},H1.parameters=Object.assign({storySource:{source:"(args) => <Title {...args} />"}},H1.parameters),H2.parameters=Object.assign({storySource:{source:"(args) => <Title {...args} />"}},H2.parameters),H3.parameters=Object.assign({storySource:{source:"(args) => <Title {...args} />"}},H3.parameters),H4.parameters=Object.assign({storySource:{source:"(args) => <Title {...args} />"}},H4.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);
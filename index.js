/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(3);

	var React = window.React = __webpack_require__(1);
	var Router = __webpack_require__(5);
	var routes = __webpack_require__(2);

	// Router.run(routes, Router.HistoryLocation, function(Handler){
	Router.run(routes, function (Handler) {
		React.render(React.createElement(Handler, null), document.getElementById("content"));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var React = _interopRequire(__webpack_require__(1));

	var _reactRouter = __webpack_require__(5);

	var Route = _reactRouter.Route;
	var DefaultRoute = _reactRouter.DefaultRoute;
	var NotFoundRoute = _reactRouter.NotFoundRoute;

	var Index = __webpack_require__(7);
	var ExamplesRoute = __webpack_require__(8);
	var Content = __webpack_require__(9);

	module.exports = React.createElement(
	  Route,
	  { name: "app", path: "/", handler: Index },
	  React.createElement(
	    Route,
	    { name: "examples", path: "/examples/:name", handler: ExamplesRoute },
	    React.createElement(NotFoundRoute, { handler: ExamplesRoute })
	  ),
	  React.createElement(
	    Route,
	    { path: "/examples", handler: ExamplesRoute },
	    React.createElement(NotFoundRoute, { handler: ExamplesRoute })
	  ),
	  React.createElement(DefaultRoute, { handler: Content })
	);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/radu/pages/react-datagrid-www/node_modules/css-loader/index.js!/home/radu/pages/react-datagrid-www/node_modules/stylus-loader/index.js!/home/radu/pages/react-datagrid-www/index.styl", function() {
			var newContent = require("!!/home/radu/pages/react-datagrid-www/node_modules/css-loader/index.js!/home/radu/pages/react-datagrid-www/node_modules/stylus-loader/index.js!/home/radu/pages/react-datagrid-www/index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	__webpack_require__(251)(exports, __webpack_require__(234), "");
	__webpack_require__(251)(exports, __webpack_require__(235), "");
	__webpack_require__(251)(exports, __webpack_require__(236), "");
	exports.push([module.id, "\n.loadmask .loader .loadbar {\n  border-radius: 50px;\n  box-shadow: 0 0 3px rgba(0,0,0,0.2);\n  -moz-box-shadow: 0 0 3px rgba(0,0,0,0.2);\n  -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.2);\n  -ms-box-shadow: 0 0 3px rgba(0,0,0,0.2);\n  position: absolute;\n  left: 44.5%;\n  top: 37%;\n  width: 12%;\n  height: 26%;\n  background: #000;\n  -webkit-animation: loader-fade 1s linear infinite;\n  -moz-animation: loader-fade 1s linear infinite;\n  -ms-animation: loader-fade 1s linear infinite;\n  animation: loader-fade 1s linear infinite;\n  opacity: 0;\n}\n.loadmask .loader .loadbar-1 {\n  transform: rotate(0deg) translate(0, -142%);\n  -webkit-transform: rotate(0deg) translate(0, -142%);\n  -moz-transform: rotate(0deg) translate(0, -142%);\n  -ms-transform: rotate(0deg) translate(0, -142%);\n  -webkit-animation-delay: 0s;\n  -moz-animation-delay: 0s;\n  -ms-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.loadmask .loader .loadbar-2 {\n  transform: rotate(30deg) translate(0, -142%);\n  -webkit-transform: rotate(30deg) translate(0, -142%);\n  -moz-transform: rotate(30deg) translate(0, -142%);\n  -ms-transform: rotate(30deg) translate(0, -142%);\n  -webkit-animation-delay: -0.9167s;\n  -moz-animation-delay: -0.9167s;\n  -ms-animation-delay: -0.9167s;\n  animation-delay: -0.9167s;\n}\n.loadmask .loader .loadbar-3 {\n  transform: rotate(60deg) translate(0, -142%);\n  -webkit-transform: rotate(60deg) translate(0, -142%);\n  -moz-transform: rotate(60deg) translate(0, -142%);\n  -ms-transform: rotate(60deg) translate(0, -142%);\n  -webkit-animation-delay: -1.8333s;\n  -moz-animation-delay: -1.8333s;\n  -ms-animation-delay: -1.8333s;\n  animation-delay: -1.8333s;\n}\n.loadmask .loader .loadbar-4 {\n  transform: rotate(90deg) translate(0, -142%);\n  -webkit-transform: rotate(90deg) translate(0, -142%);\n  -moz-transform: rotate(90deg) translate(0, -142%);\n  -ms-transform: rotate(90deg) translate(0, -142%);\n  -webkit-animation-delay: -2.75s;\n  -moz-animation-delay: -2.75s;\n  -ms-animation-delay: -2.75s;\n  animation-delay: -2.75s;\n}\n.loadmask .loader .loadbar-5 {\n  transform: rotate(120deg) translate(0, -142%);\n  -webkit-transform: rotate(120deg) translate(0, -142%);\n  -moz-transform: rotate(120deg) translate(0, -142%);\n  -ms-transform: rotate(120deg) translate(0, -142%);\n  -webkit-animation-delay: -3.6667s;\n  -moz-animation-delay: -3.6667s;\n  -ms-animation-delay: -3.6667s;\n  animation-delay: -3.6667s;\n}\n.loadmask .loader .loadbar-6 {\n  transform: rotate(150deg) translate(0, -142%);\n  -webkit-transform: rotate(150deg) translate(0, -142%);\n  -moz-transform: rotate(150deg) translate(0, -142%);\n  -ms-transform: rotate(150deg) translate(0, -142%);\n  -webkit-animation-delay: -4.5833s;\n  -moz-animation-delay: -4.5833s;\n  -ms-animation-delay: -4.5833s;\n  animation-delay: -4.5833s;\n}\n.loadmask .loader .loadbar-7 {\n  transform: rotate(180deg) translate(0, -142%);\n  -webkit-transform: rotate(180deg) translate(0, -142%);\n  -moz-transform: rotate(180deg) translate(0, -142%);\n  -ms-transform: rotate(180deg) translate(0, -142%);\n  -webkit-animation-delay: -5.5s;\n  -moz-animation-delay: -5.5s;\n  -ms-animation-delay: -5.5s;\n  animation-delay: -5.5s;\n}\n.loadmask .loader .loadbar-8 {\n  transform: rotate(210deg) translate(0, -142%);\n  -webkit-transform: rotate(210deg) translate(0, -142%);\n  -moz-transform: rotate(210deg) translate(0, -142%);\n  -ms-transform: rotate(210deg) translate(0, -142%);\n  -webkit-animation-delay: -6.4167s;\n  -moz-animation-delay: -6.4167s;\n  -ms-animation-delay: -6.4167s;\n  animation-delay: -6.4167s;\n}\n.loadmask .loader .loadbar-9 {\n  transform: rotate(240deg) translate(0, -142%);\n  -webkit-transform: rotate(240deg) translate(0, -142%);\n  -moz-transform: rotate(240deg) translate(0, -142%);\n  -ms-transform: rotate(240deg) translate(0, -142%);\n  -webkit-animation-delay: -7.3333s;\n  -moz-animation-delay: -7.3333s;\n  -ms-animation-delay: -7.3333s;\n  animation-delay: -7.3333s;\n}\n.loadmask .loader .loadbar-10 {\n  transform: rotate(270deg) translate(0, -142%);\n  -webkit-transform: rotate(270deg) translate(0, -142%);\n  -moz-transform: rotate(270deg) translate(0, -142%);\n  -ms-transform: rotate(270deg) translate(0, -142%);\n  -webkit-animation-delay: -8.25s;\n  -moz-animation-delay: -8.25s;\n  -ms-animation-delay: -8.25s;\n  animation-delay: -8.25s;\n}\n.loadmask .loader .loadbar-11 {\n  transform: rotate(300deg) translate(0, -142%);\n  -webkit-transform: rotate(300deg) translate(0, -142%);\n  -moz-transform: rotate(300deg) translate(0, -142%);\n  -ms-transform: rotate(300deg) translate(0, -142%);\n  -webkit-animation-delay: -9.1667s;\n  -moz-animation-delay: -9.1667s;\n  -ms-animation-delay: -9.1667s;\n  animation-delay: -9.1667s;\n}\n.loadmask .loader .loadbar-12 {\n  transform: rotate(330deg) translate(0, -142%);\n  -webkit-transform: rotate(330deg) translate(0, -142%);\n  -moz-transform: rotate(330deg) translate(0, -142%);\n  -ms-transform: rotate(330deg) translate(0, -142%);\n  -webkit-animation-delay: -10.0833s;\n  -moz-animation-delay: -10.0833s;\n  -ms-animation-delay: -10.0833s;\n  animation-delay: -10.0833s;\n}\n@-moz-keyframes loader-fade {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes loader-fade {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.25;\n  }\n}\n@-o-keyframes loader-fade {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.25;\n  }\n}\n@keyframes loader-fade {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.25;\n  }\n}\n.u-flex {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.u-flex-flow-row,\n.u-flex-row {\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  box-orient: horizontal;\n  flex-direction: row;\n  box-orient: horizontal;\n}\n.u-flex-flow-column,\n.u-flex-column,\n.react-datagrid,\n.react-datagrid.z-empty .z-table-wrapper {\n  flex-direction: column;\n  -webkit-flex-flow: column;\n  -moz-flex-flow: column;\n  -ms-flex-flow: column;\n  -o-flex-flow: column;\n  flex-flow: column;\n  flex-flow: column;\n  box-orient: vertical;\n  box-orient: vertical;\n}\n.u-flex-row {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.u-flex-column,\n.react-datagrid,\n.react-datagrid.z-empty .z-table-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.u-flex-centered {\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n}\n.u-inflexible,\n.u-flex-0 {\n  -webkit-box-flex: 0;\n  -moz-box-flex: 0;\n  -ms-box-flex: 0;\n  -ms-flex: 0;\n  -webkit-flex: 0;\n  flex: 0;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-1 {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-2 {\n  -webkit-box-flex: 2;\n  -moz-box-flex: 2;\n  -ms-box-flex: 2;\n  -ms-flex: 2;\n  -webkit-flex: 2;\n  flex: 2;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-3 {\n  -webkit-box-flex: 3;\n  -moz-box-flex: 3;\n  -ms-box-flex: 3;\n  -ms-flex: 3;\n  -webkit-flex: 3;\n  flex: 3;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-4 {\n  -webkit-box-flex: 4;\n  -moz-box-flex: 4;\n  -ms-box-flex: 4;\n  -ms-flex: 4;\n  -webkit-flex: 4;\n  flex: 4;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-5 {\n  -webkit-box-flex: 5;\n  -moz-box-flex: 5;\n  -ms-box-flex: 5;\n  -ms-flex: 5;\n  -webkit-flex: 5;\n  flex: 5;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-6 {\n  -webkit-box-flex: 6;\n  -moz-box-flex: 6;\n  -ms-box-flex: 6;\n  -ms-flex: 6;\n  -webkit-flex: 6;\n  flex: 6;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-7 {\n  -webkit-box-flex: 7;\n  -moz-box-flex: 7;\n  -ms-box-flex: 7;\n  -ms-flex: 7;\n  -webkit-flex: 7;\n  flex: 7;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-8 {\n  -webkit-box-flex: 8;\n  -moz-box-flex: 8;\n  -ms-box-flex: 8;\n  -ms-flex: 8;\n  -webkit-flex: 8;\n  flex: 8;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-9 {\n  -webkit-box-flex: 9;\n  -moz-box-flex: 9;\n  -ms-box-flex: 9;\n  -ms-flex: 9;\n  -webkit-flex: 9;\n  flex: 9;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-flex-10 {\n  -webkit-box-flex: 10;\n  -moz-box-flex: 10;\n  -ms-box-flex: 10;\n  -ms-flex: 10;\n  -webkit-flex: 10;\n  flex: 10;\n  flex-shrink: 1;\n  flex-basis: 1;\n}\n.u-bold {\n  font-weight: bold;\n}\n.u-nowrap {\n  white-space: nowrap;\n}\n.u-nonav,\n.u-unselectable {\n  touch-callout: none;\n}\n.u-unselectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.u-height-auto {\n  height: auto;\n}\n.u-width-auto {\n  width: auto;\n}\n.u-height-fill,\n.u-fill,\nhtml.u-app,\nhtml.u-app body {\n  height: 100%;\n}\n.u-width-fill,\n.u-fill,\nhtml.u-app,\nhtml.u-app body {\n  width: 100%;\n}\n.u-margin-auto {\n  margin: auto;\n}\n.u-border-box {\n  box-sizing: border-box;\n}\n.u-border-box * {\n  box-sizing: border-box;\n}\n.u-ellipsis,\n.react-datagrid .z-column-header .z-text,\n.react-datagrid.z-cell-ellipsis .z-row .z-cell .z-text,\n.react-datagrid .z-summary .z-cell .z-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.u-absolute {\n  position: absolute;\n}\n.u-relative {\n  position: relative;\n}\nhtml.u-app,\nhtml.u-app body {\n  overflow: hidden;\n  box-sizing: border-box;\n}\nhtml.u-app *,\nhtml.u-app body * {\n  box-sizing: border-box;\n}\n.z-unselectable,\n.react-datagrid .z-header-menu-column .menu-row {\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.react-datagrid,\n.react-datagrid * {\n  box-sizing: border-box;\n}\n.react-datagrid .z-resize-proxy {\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  display: none;\n  width: 3px;\n  border-left: 1px solid #868686;\n}\n.react-datagrid.z-columns-resizable .z-resize-proxy {\n  display: block;\n}\n.react-datagrid {\n  align-items: stretch;\n}\n.react-datagrid table {\n  border-collapse: separate;\n}\n.react-datagrid > .z-inner {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  -webkit-flex-flow: column;\n  -moz-flex-flow: column;\n  -ms-flex-flow: column;\n  -o-flex-flow: column;\n  flex-flow: column;\n  flex-flow: column;\n  box-orient: vertical;\n}\n.react-datagrid > .z-inner .z-wrapper {\n  position: relative;\n  display: block;\n  -webkit-box-flex: 1 1 auto;\n  -moz-box-flex: 1 1 auto;\n  -ms-box-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.react-datagrid .z-vertical-scroller {\n  position: absolute;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n  right: 0px;\n  top: 0px;\n}\n.react-datagrid .z-horizontal-scrollbar {\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  bottom: 0px;\n  overflow: auto;\n}\n.react-datagrid .z-vertical-scrollbar {\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  right: 0px;\n  overflow: auto;\n}\n.react-datagrid .z-horizontal-scroller {\n  height: 1px;\n  visibility: hidden;\n}\n.react-datagrid .z-vertical-scroller {\n  width: 1px;\n  visibility: hidden;\n}\n.react-datagrid .z-table-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  overflow-y: hidden;\n}\n.react-datagrid .z-header-wrapper,\n.react-datagrid .z-footer-wrapper {\n  width: 100%;\n}\n.react-datagrid .z-table {\n  display: block;\n}\n.react-datagrid .z-header,\n.react-datagrid .z-summary,\n.react-datagrid .z-table .z-row {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  box-orient: horizontal;\n}\n.react-datagrid .z-mask-wrapper {\n  bottom: 0px;\n  width: 100%;\n  position: absolute;\n  display: none;\n}\n.react-datagrid.z-loading .z-mask-wrapper {\n  display: block;\n}\n.react-datagrid.z-empty .z-table-wrapper {\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-pack: center;\n  -ms-flex-pack: center;\n  align-items: center;\n}\n.react-datagrid.z-empty .z-table-wrapper .z-empty-text {\n  display: inline-block;\n  font-style: italic;\n  color: #808080;\n}\n.react-datagrid .z-header-menu-column {\n  background: #fff;\n  position: absolute;\n  top: 0px;\n}\n.react-datagrid .z-header-menu-column .menu-row.over {\n  background: #d7e7ff;\n}\n.react-datagrid .z-header {\n  align-items: stretch;\n}\n.react-datagrid.z-with-column-menu .z-column-header .z-show-filter,\n.react-datagrid.z-with-column-menu .z-column-header .z-show-menu {\n  display: none;\n  position: absolute;\n  cursor: pointer;\n  right: 0px;\n  top: 0px;\n  width: 15px;\n  height: 100%;\n  border-left: 1px solid #a8a8a8;\n}\n.react-datagrid.z-with-column-menu .z-column-header .z-show-filter {\n  right: 15px;\n  background: #fff;\n}\n.react-datagrid.z-with-column-menu .z-column-header.z-filterable .z-show-filter.z-active,\n.react-datagrid.z-with-column-menu .z-column-header.z-filterable .z-show-filter:hover,\n.react-datagrid.z-with-column-menu .z-column-header .z-show-menu.z-active,\n.react-datagrid.z-with-column-menu .z-column-header .z-show-menu:hover {\n  background: #fff;\n}\n.react-datagrid.z-with-column-menu .z-column-header.z-active .z-show-menu,\n.react-datagrid.z-with-column-menu .z-column-header.z-active.z-filterable .z-show-filter,\n.react-datagrid.z-with-column-menu .z-column-header.z-over .z-show-menu {\n  display: block;\n}\n.react-datagrid.z-with-column-menu .z-column-header.z-over.z-filterable .z-show-filter {\n  display: block;\n}\n.react-datagrid.z-with-column-menu .z-column-header.z-filtered {\n  font-style: italic;\n}\n.react-datagrid .z-header-wrapper {\n  -webkit-box-flex: 0 0 auto;\n  -moz-box-flex: 0 0 auto;\n  -ms-box-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  -webkit-flex: 0 0 auto;\n  flex: 0 0 auto;\n  background: linear-gradient(to bottom, #f7f7f7 0%, #efefef 13%, #e6e6e6 100%);\n  border-bottom: 1px solid #a8a8a8;\n}\n.react-datagrid .z-header-wrapper.z-dragging .z-column-header:not(.z-drag) {\n  transition: left 0.4s;\n}\n.react-datagrid .z-column-header {\n  position: relative;\n  font-weight: bold;\n}\n.react-datagrid .z-column-header .z-inner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  align-items: center;\n  align-content: flex-start;\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  box-orient: horizontal;\n  height: 100%;\n}\n.react-datagrid .z-column-header .z-text {\n  cursor: default;\n}\n.react-datagrid .z-column-header.z-sortable .z-inner {\n  cursor: pointer;\n}\n.react-datagrid .z-column-header.z-over {\n  background: linear-gradient(to bottom, #fbfbfb 0%, #f8f8f8 13%, #f4f4f4 100%);\n}\n.react-datagrid .z-column-header .z-icon-sort-info {\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  margin-left: 10px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.react-datagrid .z-column-header.z-asc .z-icon-sort-info {\n  border-bottom: 8px solid #6eb8f1;\n}\n.react-datagrid .z-column-header.z-desc .z-icon-sort-info {\n  border-top: 8px solid #6eb8f1;\n}\n.react-datagrid .z-column-header.z-drag {\n  z-index: 1;\n  background: linear-gradient(to bottom, #fbfbfb 0%, #f8f8f8 13%, #f4f4f4 100%);\n  border-right: 1px solid #a8a8a8;\n  border-left: 1px solid #a8a8a8;\n}\n.react-datagrid .z-column-header .z-column-resize {\n  display: inline-block;\n  height: 100%;\n  width: 3px;\n  right: 0px;\n  cursor: e-resize;\n  top: 0px;\n  position: absolute;\n  z-index: 10;\n}\n.react-datagrid .z-column-header.z-last .z-inner .z-column-resize {\n  display: none !important;\n}\n.react-datagrid .z-header .z-column-header.z-cell:not(.z-first) {\n  border-left: 1px solid #a8a8a8;\n}\n.react-datagrid .z-header .z-column-header.z-cell.z-last {\n  border-right: 1px solid #a8a8a8;\n}\n.react-datagrid.z-style-alternate .z-odd .z-cell {\n  background: #f2f7ff;\n}\n.react-datagrid .z-column-content {\n  overflow: visible;\n}\n.react-datagrid .z-row.z-over .z-cell {\n  background: #d7e7ff;\n}\n.react-datagrid .z-row.z-selected .z-cell {\n  background: #c4dbfc;\n}\n.react-datagrid .z-row .z-cell {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: default;\n  position: relative;\n}\n.react-datagrid .z-row .z-cell .z-inner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  margin: auto 0;\n}\n.react-datagrid .z-row .z-cell .z-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.react-datagrid .z-group-row.z-over .z-cell {\n  background: #cfcfcf;\n}\n.react-datagrid .z-group-cell {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.react-datagrid .z-group-row .z-cell {\n  background: #e6e6e6;\n}\n.react-datagrid.z-cell-borders-horizontal .z-cell:not(.z-column-header) {\n  border-bottom: 1px dotted #a8a8a8;\n}\n.react-datagrid.z-cell-borders-vertical .z-group-row .z-cell:not(.z-column-header),\n.react-datagrid.z-cell-borders-vertical .z-cell.z-last:not(.z-column-header) {\n  border-right: 1px dotted #a8a8a8;\n}\n.react-datagrid.z-cell-borders-vertical .z-cell:not(.z-first):not(.z-column-header) {\n  border-left: 1px dotted #a8a8a8;\n}\n.react-datagrid .z-footer-wrapper {\n  background: linear-gradient(to bottom, #f7f7f7 0%, #efefef 13%, #e6e6e6 100%);\n}\n.react-datagrid .z-summary {\n  border-top: 1px solid #a8a8a8;\n  align-items: stretch;\n}\n.react-datagrid .z-summary .z-cell {\n  position: relative;\n  border-bottom: 1px solid #a8a8a8;\n}\n.react-datagrid .z-summary .z-cell .z-inner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  align-items: center;\n  align-content: flex-start;\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  box-orient: horizontal;\n  height: 100%;\n}\n.react-datagrid .z-summary .z-cell.z-last {\n  border-right: 1px solid #a8a8a8;\n}\n.react-datagrid .z-summary .z-cell:not(.z-first) {\n  border-left: 1px solid #a8a8a8;\n}\n\n\nbody,\nhtml,\n#content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: 'Open Sans', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif;\n}\nbody * {\n  box-sizing: border-box;\n}\nimg {\n  vertical-align: middle;\n}\n.header,\n.footer {\n  background: #494e4f;\n  padding: 10px 30px;\n  color: #fff;\n}\n.centered {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  box-orient: horizontal;\n  align-items: center;\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start;\n  flex-pack: start;\n  -ms-flex-pack: start;\n}\n.header img,\n.header p {\n  display: inline-block;\n}\n.snippet {\n  margin-top: 20px;\n}\n.snippet .react-code-mirror {\n  border: 1px solid #b0b0b0;\n}\n.body {\n  align-items: flex-start;\n}\n.body .example-menu {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  padding-right: 40px;\n}\n.body .example-menu a {\n  color: #4183c4;\n  padding: 5px;\n  display: inline-block;\n  text-decoration: none;\n}\n.body .example-menu a:hover {\n  text-decoration: underline;\n}\n.body .react-datagrid {\n  width: 100%;\n  border: 1px solid #b0b0b0;\n}\n.logo-fill-white {\n  fill: #494e4f;\n}\n.logo-fill-none {\n  fill: transparent;\n}\n.demo-button {\n  transition: background 0.1s;\n  transform: translate3d(0px, 0px, 0px);\n}\n.feature-box {\n  transition: background 0.2s, color 0.2s;\n}\n.feature-box:hover {\n  background: #8cc9dd;\n  color: #fff !important;\n  box-shadow: 0 0 5px rgba(0,0,0,0.5);\n}\n.editor-error {\n  margin-top: 20px;\n  padding: 30px;\n  border: 1px solid #ff5959;\n  background: #f7e2e2;\n}\n.repo-link {\n  display: block;\n}\n.repo-link .github-logo {\n  background: #fff;\n  padding: 10px;\n  border-radius: 25px;\n  transition: all 0.2s;\n  margin-right: 10px;\n}\n.repo-link:hover .github-logo {\n  border-radius: 10px;\n}\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.DefaultRoute = __webpack_require__(10);
	exports.Link = __webpack_require__(11);
	exports.NotFoundRoute = __webpack_require__(12);
	exports.Redirect = __webpack_require__(13);
	exports.Route = __webpack_require__(14);
	exports.RouteHandler = __webpack_require__(15);

	exports.HashLocation = __webpack_require__(16);
	exports.HistoryLocation = __webpack_require__(17);
	exports.RefreshLocation = __webpack_require__(18);
	exports.StaticLocation = __webpack_require__(19);
	exports.TestLocation = __webpack_require__(20);

	exports.ImitateBrowserBehavior = __webpack_require__(21);
	exports.ScrollToTopBehavior = __webpack_require__(22);

	exports.History = __webpack_require__(23);
	exports.Navigation = __webpack_require__(24);
	exports.State = __webpack_require__(25);

	exports.createRoute = __webpack_require__(26).createRoute;
	exports.createDefaultRoute = __webpack_require__(26).createDefaultRoute;
	exports.createNotFoundRoute = __webpack_require__(26).createNotFoundRoute;
	exports.createRedirect = __webpack_require__(26).createRedirect;
	exports.createRoutesFromReactChildren = __webpack_require__(27);
	exports.create = __webpack_require__(28);
	exports.run = __webpack_require__(29);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var normalize = __webpack_require__(51);

	var Centered = __webpack_require__(30);

	var Header = __webpack_require__(31);
	var Body = __webpack_require__(32);
	var Footer = __webpack_require__(33);

	window.ReactDataGrid = __webpack_require__(52);
	window.sorty = __webpack_require__(37);
	__webpack_require__(53); //exposes window.fetch
	Object.assign = __webpack_require__(38);
	Object.keys = Object.keys || __webpack_require__(39);

	module.exports = React.createClass({

		displayName: "DemoIndex",

		render: function render() {
			return React.createElement(
				"div",
				{ style: { display: "flex", flexFlow: "column", minHeight: "100%" } },
				React.createElement(Header, null),
				React.createElement(Body, null),
				React.createElement(Footer, null)
			);
		}
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(1));

	var menu = _interopRequire(__webpack_require__(34));

	var examples = __webpack_require__(35).map;

	var RouteHandler = __webpack_require__(5).RouteHandler;

	var Examples = (function (_React$Component) {
		var _class = function Examples() {
			_classCallCheck(this, _class);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		};

		_inherits(_class, _React$Component);

		_createClass(_class, {
			render: {
				value: function render() {
					var exampleName = this.context.router.getCurrentParams().name || "basic";
					var Cmp = examples[exampleName];
					var content;

					if (!Cmp) {
						content = React.createElement(
							"b",
							null,
							"Sorry, example not found"
						);
					} else {
						content = React.createElement(Cmp, null);
					}

					return React.createElement(
						"div",
						{ style: { display: "flex", marginBottom: 10, marginRight: 10 } },
						React.createElement(
							"div",
							{ style: { paddingTop: 20, paddingLeft: 20 } },
							menu()
						),
						React.createElement(
							"div",
							{ style: { flex: 1 } },
							content
						)
					);
				}
			}
		});

		return _class;
	})(React.Component);

	Examples.contextTypes = {
		router: React.PropTypes.func
	};

	Examples.displayName = "Examples";

	module.exports = Examples;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	var Centered = _interopRequire(__webpack_require__(30));

	var ReactButton = _interopRequire(__webpack_require__(54));

	var SvgIcon = _interopRequire(__webpack_require__(36));

	var backgroundURL = __webpack_require__(56);

	function toStyle() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var target = {};

		args.forEach(function (a) {
			assign(target, a);
		});

		return target;
	}

	var gridLogo = __webpack_require__(59);
	var TURQUOISE = "#8CC9DD";
	var GRAY = "#494E4F";

	var theme = {
		style: {
			background: "transparent",
			color: GRAY,
			border: "3px solid white",
			padding: "10px 20px",
			fontWeight: "bold"
		},
		overStyle: {
			background: "white"
		}
	};

	var box = {
		flex: 1,
		border: "2px solid " + TURQUOISE,
		marginLeft: 20,
		padding: 20,
		color: GRAY
	};

	var Button = (function (_React$Component) {
		function Button() {
			_classCallCheck(this, Button);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(Button, _React$Component);

		_createClass(Button, {
			render: {
				value: function render() {
					return React.createElement(ReactButton, _extends({ theme: theme, applyDefaultTheme: false }, this.props));
				}
			}
		});

		return Button;
	})(React.Component);

	var Box = (function (_React$Component2) {
		function Box() {
			_classCallCheck(this, Box);

			if (_React$Component2 != null) {
				_React$Component2.apply(this, arguments);
			}
		}

		_inherits(Box, _React$Component2);

		_createClass(Box, {
			render: {
				value: function render() {
					var props = assign({}, this.props);

					var children = [];

					React.Children.forEach(props.children, function (child) {
						children.push(child);
					});

					var title = children[0];
					var body = children[1];

					props.className = (props.className || "") + " feature-box";
					props.style = toStyle(box, props.style, { display: "flex", flexFlow: "column", justifyContent: "space-between" });

					return React.createElement(
						"div",
						props,
						React.createElement(
							"h3",
							{ style: { textTransform: "uppercase" } },
							title
						),
						React.createElement(
							"div",
							{ style: { lineHeight: "1.8em" } },
							body
						),
						React.createElement(
							Button,
							{ style: { background: TURQUOISE, alignSelf: "flex-end" }, href: props.href },
							this.props.linkText || "See demo"
						)
					);
				}
			}
		});

		return Box;
	})(React.Component);

	var STRIP_PADDING = "30px 10px";
	var Content = (function (_React$Component3) {
		var _class = function Content() {
			_classCallCheck(this, _class);

			if (_React$Component3 != null) {
				_React$Component3.apply(this, arguments);
			}
		};

		_inherits(_class, _React$Component3);

		_createClass(_class, {
			render: {
				value: function render() {

					return React.createElement(
						"div",
						{ className: "content" },
						React.createElement(
							"div",
							{ style: { padding: STRIP_PADDING, display: "flex", flexFlow: "column", justifyContent: "center", color: "white", background: "url(\"" + backgroundURL + "\")" } },
							React.createElement(
								Centered,
								{ style: { display: "block" } },
								React.createElement(
									"div",
									null,
									React.createElement(
										"h2",
										{ style: { marginTop: 0 } },
										"A carefully crafted DataGrid for React"
									),
									React.createElement(
										"p",
										null,
										React.createElement(SvgIcon, { svg: gridLogo, style: { verticalAlign: "middle", display: "inline-block", marginRight: 20 } }),
										React.createElement(
											"code",
											{ style: { fontSize: "1.5em" } },
											"$ npm install react-datagrid --save "
										)
									),
									React.createElement(
										Button,
										{ className: "demo-button", href: this.context.router.makeHref("examples", { name: "basic" }) },
										"SHOW DEMO"
									),
									React.createElement(
										Button,
										{ style: { marginLeft: 30 }, className: "demo-button", href: "https://github.com/zippyui/react-datagrid/blob/master/README.md" },
										"SEE README DOCS"
									)
								)
							)
						),
						React.createElement(
							"div",
							{ style: { padding: STRIP_PADDING } },
							React.createElement(
								Centered,
								null,
								React.createElement(
									"div",
									{ style: { display: "flex", flexFlow: "row", alignItems: "stretch" } },
									React.createElement(
										Box,
										{ style: { marginLeft: 0 }, linkText: "Show me a proof", href: this.context.router.makeHref("examples", { name: "large-data-array" }) },
										React.createElement(
											"span",
											null,
											"zippy performance"
										),
										React.createElement(
											"div",
											null,
											React.createElement(
												"p",
												null,
												"Performance stays the same, no matter how many records you have in the grid."
											),
											React.createElement(
												"p",
												null,
												"You can start small or end-up with a million records, the grid will remain snappy!"
											)
										)
									),
									React.createElement(
										Box,
										{ href: this.context.router.makeHref("examples", { name: "sorting" }) },
										React.createElement(
											"span",
											null,
											"production ready"
										),
										React.createElement(
											"div",
											null,
											React.createElement(
												"p",
												null,
												"The grid comes with a lot of functionality built-in."
											),
											React.createElement(
												"p",
												null,
												"No need to look further to support for sorting/filtering/selection/column reordering, etc"
											)
										)
									),
									React.createElement(
										Box,
										{ linkText: "Show customized example", href: this.context.router.makeHref("examples", { name: "custom-row-styling" }) },
										React.createElement(
											"span",
											null,
											"customizable"
										),
										React.createElement(
											"div",
											null,
											React.createElement(
												"p",
												null,
												"Basically you can customize everything."
											),
											React.createElement(
												"p",
												null,
												"Start with changing how cell contents are rendered, what styles are applied or totally modifying how selection behaves"
											)
										)
									)
								)
							)
						),
						React.createElement(
							"div",
							{ style: { padding: STRIP_PADDING, display: "flex", flexFlow: "column", justifyContent: "center", color: "white", background: "url(\"" + backgroundURL + "\")" }, className: "strip background" },
							React.createElement(
								Centered,
								{ style: { display: "block" } },
								React.createElement(
									"div",
									null,
									React.createElement(
										"h2",
										{ style: { marginTop: 0 } },
										"Built on top of React, published on NPM"
									),
									React.createElement(
										"p",
										{ style: { fontSize: "1.5em" } },
										"Just run"
									),
									React.createElement(
										"p",
										{ style: { fontSize: "1.5em" } },
										React.createElement(
											"code",
											null,
											"$ npm install react-datagrid --save "
										)
									),
									React.createElement(
										"p",
										{ style: { fontSize: "1.5em" } },
										"and you are ready to use"
									),
									React.createElement(
										Button,
										{ className: "demo-button", href: this.context.router.makeHref("examples", { name: "basic" }) },
										"SEE LIVE EXAMPLES"
									)
								)
							)
						)
					);
				}
			}
		});

		return _class;
	})(React.Component);

	Content.contextTypes = {
		router: React.PropTypes.func
	};

	module.exports = Content;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var PropTypes = __webpack_require__(40);
	var RouteHandler = __webpack_require__(15);
	var Route = __webpack_require__(14);

	/**
	 * A <DefaultRoute> component is a special kind of <Route> that
	 * renders when its parent matches but none of its siblings do.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */

	var DefaultRoute = (function (_Route) {
	  function DefaultRoute() {
	    _classCallCheck(this, DefaultRoute);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(DefaultRoute, _Route);

	  return DefaultRoute;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	DefaultRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};

	DefaultRoute.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = DefaultRoute;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = __webpack_require__(1);
	var assign = __webpack_require__(63);
	var PropTypes = __webpack_require__(40);

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} />
	 *
	 * In addition to params, links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
	 */

	var Link = (function (_React$Component) {
	  function Link() {
	    _classCallCheck(this, Link);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Link, _React$Component);

	  _createClass(Link, {
	    handleClick: {
	      value: function handleClick(event) {
	        var allowTransition = true;
	        var clickResult;

	        if (this.props.onClick) clickResult = this.props.onClick(event);

	        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
	          return;
	        }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	        event.preventDefault();

	        if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
	      }
	    },
	    getHref: {

	      /**
	       * Returns the value of the "href" attribute to use on the DOM element.
	       */

	      value: function getHref() {
	        return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
	      }
	    },
	    getClassName: {

	      /**
	       * Returns the value of the "class" attribute to use on the DOM element, which contains
	       * the value of the activeClassName property when this <Link> is active.
	       */

	      value: function getClassName() {
	        var className = this.props.className;

	        if (this.getActiveState()) className += " " + this.props.activeClassName;

	        return className;
	      }
	    },
	    getActiveState: {
	      value: function getActiveState() {
	        return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
	      }
	    },
	    render: {
	      value: function render() {
	        var props = assign({}, this.props, {
	          href: this.getHref(),
	          className: this.getClassName(),
	          onClick: this.handleClick.bind(this)
	        });

	        if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

	        return React.DOM.a(props, this.props.children);
	      }
	    }
	  });

	  return Link;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Link.contextTypes = {
	  router: PropTypes.router.isRequired
	};

	Link.propTypes = {
	  activeClassName: PropTypes.string.isRequired,
	  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
	  params: PropTypes.object,
	  query: PropTypes.object,
	  activeStyle: PropTypes.object,
	  onClick: PropTypes.func
	};

	Link.defaultProps = {
	  activeClassName: "active",
	  className: ""
	};

	module.exports = Link;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var PropTypes = __webpack_require__(40);
	var RouteHandler = __webpack_require__(15);
	var Route = __webpack_require__(14);

	/**
	 * A <NotFoundRoute> is a special kind of <Route> that
	 * renders when the beginning of its parent's path matches
	 * but none of its siblings do, including any <DefaultRoute>.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */

	var NotFoundRoute = (function (_Route) {
	  function NotFoundRoute() {
	    _classCallCheck(this, NotFoundRoute);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(NotFoundRoute, _Route);

	  return NotFoundRoute;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	NotFoundRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};

	NotFoundRoute.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = NotFoundRoute;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var PropTypes = __webpack_require__(40);
	var Route = __webpack_require__(14);

	/**
	 * A <Redirect> component is a special kind of <Route> that always
	 * redirects to another route when it matches.
	 */

	var Redirect = (function (_Route) {
	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(Redirect, _Route);

	  return Redirect;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Redirect.propTypes = {
	  path: PropTypes.string,
	  from: PropTypes.string, // Alias for path.
	  to: PropTypes.string,
	  handler: PropTypes.falsy
	};

	// Redirects should not have a default handler
	Redirect.defaultProps = {};

	module.exports = Redirect;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = __webpack_require__(1);
	var invariant = __webpack_require__(64);
	var PropTypes = __webpack_require__(40);
	var RouteHandler = __webpack_require__(15);

	/**
	 * <Route> components specify components that are rendered to the page when the
	 * URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 *
	 * The preferred way to configure a router is using JSX. The XML-like syntax is
	 * a great way to visualize how routes are laid out in an application.
	 *
	 *   var routes = [
	 *     <Route handler={App}>
	 *       <Route name="login" handler={Login}/>
	 *       <Route name="logout" handler={Logout}/>
	 *       <Route name="about" handler={About}/>
	 *     </Route>
	 *   ];
	 *   
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 *
	 * Handlers for Route components that contain children can render their active
	 * child route using a <RouteHandler> element.
	 *
	 *   var App = React.createClass({
	 *     render: function () {
	 *       return (
	 *         <div class="application">
	 *           <RouteHandler/>
	 *         </div>
	 *       );
	 *     }
	 *   });
	 *
	 * If no handler is provided for the route, it will render a matched child route.
	 */

	var Route = (function (_React$Component) {
	  function Route() {
	    _classCallCheck(this, Route);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Route, _React$Component);

	  _createClass(Route, {
	    render: {
	      value: function render() {
	        invariant(false, "%s elements are for router configuration only and should not be rendered", this.constructor.name);
	      }
	    }
	  });

	  return Route;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Route.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.string,
	  handler: PropTypes.func,
	  ignoreScrollBehavior: PropTypes.bool
	};

	Route.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = Route;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = __webpack_require__(1);
	var ContextWrapper = __webpack_require__(42);
	var assign = __webpack_require__(63);
	var PropTypes = __webpack_require__(40);

	var REF_NAME = "__routeHandler__";

	/**
	 * A <RouteHandler> component renders the active child route handler
	 * when routes are nested.
	 */

	var RouteHandler = (function (_React$Component) {
	  function RouteHandler() {
	    _classCallCheck(this, RouteHandler);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(RouteHandler, _React$Component);

	  _createClass(RouteHandler, {
	    getChildContext: {
	      value: function getChildContext() {
	        return {
	          routeDepth: this.context.routeDepth + 1
	        };
	      }
	    },
	    componentDidMount: {
	      value: function componentDidMount() {
	        this._updateRouteComponent(this.refs[REF_NAME]);
	      }
	    },
	    componentDidUpdate: {
	      value: function componentDidUpdate() {
	        this._updateRouteComponent(this.refs[REF_NAME]);
	      }
	    },
	    componentWillUnmount: {
	      value: function componentWillUnmount() {
	        this._updateRouteComponent(null);
	      }
	    },
	    _updateRouteComponent: {
	      value: function _updateRouteComponent(component) {
	        this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
	      }
	    },
	    getRouteDepth: {
	      value: function getRouteDepth() {
	        return this.context.routeDepth;
	      }
	    },
	    createChildRouteHandler: {
	      value: function createChildRouteHandler(props) {
	        var route = this.context.router.getRouteAtDepth(this.getRouteDepth());
	        return route ? React.createElement(route.handler, assign({}, props || this.props, { ref: REF_NAME })) : null;
	      }
	    },
	    render: {
	      value: function render() {
	        var handler = this.createChildRouteHandler();
	        // <script/> for things like <CSSTransitionGroup/> that don't like null
	        return handler ? React.createElement(
	          ContextWrapper,
	          null,
	          handler
	        ) : React.createElement("script", null);
	      }
	    }
	  });

	  return RouteHandler;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	RouteHandler.contextTypes = {
	  routeDepth: PropTypes.number.isRequired,
	  router: PropTypes.router.isRequired
	};

	RouteHandler.childContextTypes = {
	  routeDepth: PropTypes.number.isRequired
	};

	module.exports = RouteHandler;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var LocationActions = __webpack_require__(41);
	var History = __webpack_require__(23);

	var _listeners = [];
	var _isListening = false;
	var _actionType;

	function notifyChange(type) {
	  if (type === LocationActions.PUSH) History.length += 1;

	  var change = {
	    path: HashLocation.getCurrentPath(),
	    type: type
	  };

	  _listeners.forEach(function (listener) {
	    listener.call(HashLocation, change);
	  });
	}

	function ensureSlash() {
	  var path = HashLocation.getCurrentPath();

	  if (path.charAt(0) === "/") {
	    return true;
	  }HashLocation.replace("/" + path);

	  return false;
	}

	function onHashChange() {
	  if (ensureSlash()) {
	    // If we don't have an _actionType then all we know is the hash
	    // changed. It was probably caused by the user clicking the Back
	    // button, but may have also been the Forward button or manual
	    // manipulation. So just guess 'pop'.
	    var curActionType = _actionType;
	    _actionType = null;
	    notifyChange(curActionType || LocationActions.POP);
	  }
	}

	/**
	 * A Location that uses `window.location.hash`.
	 */
	var HashLocation = {

	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);

	    // Do this BEFORE listening for hashchange.
	    ensureSlash();

	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener("hashchange", onHashChange, false);
	      } else {
	        window.attachEvent("onhashchange", onHashChange);
	      }

	      _isListening = true;
	    }
	  },

	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });

	    if (_listeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener("hashchange", onHashChange, false);
	      } else {
	        window.removeEvent("onhashchange", onHashChange);
	      }

	      _isListening = false;
	    }
	  },

	  push: function push(path) {
	    _actionType = LocationActions.PUSH;
	    window.location.hash = path;
	  },

	  replace: function replace(path) {
	    _actionType = LocationActions.REPLACE;
	    window.location.replace(window.location.pathname + window.location.search + "#" + path);
	  },

	  pop: function pop() {
	    _actionType = LocationActions.POP;
	    History.back();
	  },

	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    window.location.href.split("#")[1] || "");
	  },

	  toString: function toString() {
	    return "<HashLocation>";
	  }

	};

	module.exports = HashLocation;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var LocationActions = __webpack_require__(41);
	var History = __webpack_require__(23);

	var _listeners = [];
	var _isListening = false;

	function notifyChange(type) {
	  var change = {
	    path: HistoryLocation.getCurrentPath(),
	    type: type
	  };

	  _listeners.forEach(function (listener) {
	    listener.call(HistoryLocation, change);
	  });
	}

	function onPopState(event) {
	  if (event.state === undefined) {
	    return;
	  } // Ignore extraneous popstate events in WebKit.

	  notifyChange(LocationActions.POP);
	}

	/**
	 * A Location that uses HTML5 history.
	 */
	var HistoryLocation = {

	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);

	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener("popstate", onPopState, false);
	      } else {
	        window.attachEvent("onpopstate", onPopState);
	      }

	      _isListening = true;
	    }
	  },

	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });

	    if (_listeners.length === 0) {
	      if (window.addEventListener) {
	        window.removeEventListener("popstate", onPopState, false);
	      } else {
	        window.removeEvent("onpopstate", onPopState);
	      }

	      _isListening = false;
	    }
	  },

	  push: function push(path) {
	    window.history.pushState({ path: path }, "", path);
	    History.length += 1;
	    notifyChange(LocationActions.PUSH);
	  },

	  replace: function replace(path) {
	    window.history.replaceState({ path: path }, "", path);
	    notifyChange(LocationActions.REPLACE);
	  },

	  pop: History.back,

	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(window.location.pathname + window.location.search);
	  },

	  toString: function toString() {
	    return "<HistoryLocation>";
	  }

	};

	module.exports = HistoryLocation;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var HistoryLocation = __webpack_require__(17);
	var History = __webpack_require__(23);

	/**
	 * A Location that uses full page refreshes. This is used as
	 * the fallback for HistoryLocation in browsers that do not
	 * support the HTML5 history API.
	 */
	var RefreshLocation = {

	  push: function push(path) {
	    window.location = path;
	  },

	  replace: function replace(path) {
	    window.location.replace(path);
	  },

	  pop: History.back,

	  getCurrentPath: HistoryLocation.getCurrentPath,

	  toString: function toString() {
	    return "<RefreshLocation>";
	  }

	};

	module.exports = RefreshLocation;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var invariant = __webpack_require__(64);

	function throwCannotModify() {
	  invariant(false, "You cannot modify a static location");
	}

	/**
	 * A location that only ever contains a single path. Useful in
	 * stateless environments like servers where there is no path history,
	 * only the path that was used in the request.
	 */

	var StaticLocation = (function () {
	  function StaticLocation(path) {
	    _classCallCheck(this, StaticLocation);

	    this.path = path;
	  }

	  _createClass(StaticLocation, {
	    getCurrentPath: {
	      value: function getCurrentPath() {
	        return this.path;
	      }
	    },
	    toString: {
	      value: function toString() {
	        return "<StaticLocation path=\"" + this.path + "\">";
	      }
	    }
	  });

	  return StaticLocation;
	})();

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	StaticLocation.prototype.push = throwCannotModify;
	StaticLocation.prototype.replace = throwCannotModify;
	StaticLocation.prototype.pop = throwCannotModify;

	module.exports = StaticLocation;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var invariant = __webpack_require__(64);
	var LocationActions = __webpack_require__(41);
	var History = __webpack_require__(23);

	/**
	 * A location that is convenient for testing and does not require a DOM.
	 */

	var TestLocation = (function () {
	  function TestLocation(history) {
	    _classCallCheck(this, TestLocation);

	    this.history = history || [];
	    this.listeners = [];
	    this._updateHistoryLength();
	  }

	  _createClass(TestLocation, {
	    needsDOM: {
	      get: function () {
	        return false;
	      }
	    },
	    _updateHistoryLength: {
	      value: function _updateHistoryLength() {
	        History.length = this.history.length;
	      }
	    },
	    _notifyChange: {
	      value: function _notifyChange(type) {
	        var change = {
	          path: this.getCurrentPath(),
	          type: type
	        };

	        for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
	      }
	    },
	    addChangeListener: {
	      value: function addChangeListener(listener) {
	        this.listeners.push(listener);
	      }
	    },
	    removeChangeListener: {
	      value: function removeChangeListener(listener) {
	        this.listeners = this.listeners.filter(function (l) {
	          return l !== listener;
	        });
	      }
	    },
	    push: {
	      value: function push(path) {
	        this.history.push(path);
	        this._updateHistoryLength();
	        this._notifyChange(LocationActions.PUSH);
	      }
	    },
	    replace: {
	      value: function replace(path) {
	        invariant(this.history.length, "You cannot replace the current path with no history");

	        this.history[this.history.length - 1] = path;

	        this._notifyChange(LocationActions.REPLACE);
	      }
	    },
	    pop: {
	      value: function pop() {
	        this.history.pop();
	        this._updateHistoryLength();
	        this._notifyChange(LocationActions.POP);
	      }
	    },
	    getCurrentPath: {
	      value: function getCurrentPath() {
	        return this.history[this.history.length - 1];
	      }
	    },
	    toString: {
	      value: function toString() {
	        return "<TestLocation>";
	      }
	    }
	  });

	  return TestLocation;
	})();

	module.exports = TestLocation;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var LocationActions = __webpack_require__(41);

	/**
	 * A scroll behavior that attempts to imitate the default behavior
	 * of modern browsers.
	 */
	var ImitateBrowserBehavior = {

	  updateScrollPosition: function updateScrollPosition(position, actionType) {
	    switch (actionType) {
	      case LocationActions.PUSH:
	      case LocationActions.REPLACE:
	        window.scrollTo(0, 0);
	        break;
	      case LocationActions.POP:
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        } else {
	          window.scrollTo(0, 0);
	        }
	        break;
	    }
	  }

	};

	module.exports = ImitateBrowserBehavior;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * A scroll behavior that always scrolls to the top of the page
	 * after a transition.
	 */
	var ScrollToTopBehavior = {

	  updateScrollPosition: function updateScrollPosition() {
	    window.scrollTo(0, 0);
	  }

	};

	module.exports = ScrollToTopBehavior;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant = __webpack_require__(64);
	var canUseDOM = __webpack_require__(65).canUseDOM;

	var History = {

	  /**
	   * The current number of entries in the history.
	   *
	   * Note: This property is read-only.
	   */
	  length: 1,

	  /**
	   * Sends the browser back one entry in the history.
	   */
	  back: function back() {
	    invariant(canUseDOM, "Cannot use History.back without a DOM");

	    // Do this first so that History.length will
	    // be accurate in location change listeners.
	    History.length -= 1;

	    window.history.back();
	  }

	};

	module.exports = History;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var warning = __webpack_require__(66);
	var PropTypes = __webpack_require__(40);

	function deprecatedMethod(routerMethodName, fn) {
	  return function () {
	    warning(false, "Router.Navigation is deprecated. Please use this.context.router." + routerMethodName + "() instead");

	    return fn.apply(this, arguments);
	  };
	}

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Router.Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },

	  /**
	   * Returns an absolute URL path created from the given route
	   * name, URL parameters, and query values.
	   */
	  makePath: deprecatedMethod("makePath", function (to, params, query) {
	    return this.context.router.makePath(to, params, query);
	  }),

	  /**
	   * Returns a string that may safely be used as the href of a
	   * link to the route with the given name.
	   */
	  makeHref: deprecatedMethod("makeHref", function (to, params, query) {
	    return this.context.router.makeHref(to, params, query);
	  }),

	  /**
	   * Transitions to the URL specified in the arguments by pushing
	   * a new URL onto the history stack.
	   */
	  transitionTo: deprecatedMethod("transitionTo", function (to, params, query) {
	    this.context.router.transitionTo(to, params, query);
	  }),

	  /**
	   * Transitions to the URL specified in the arguments by replacing
	   * the current URL in the history stack.
	   */
	  replaceWith: deprecatedMethod("replaceWith", function (to, params, query) {
	    this.context.router.replaceWith(to, params, query);
	  }),

	  /**
	   * Transitions to the previous URL.
	   */
	  goBack: deprecatedMethod("goBack", function () {
	    return this.context.router.goBack();
	  })

	};

	module.exports = Navigation;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var warning = __webpack_require__(66);
	var PropTypes = __webpack_require__(40);

	function deprecatedMethod(routerMethodName, fn) {
	  return function () {
	    warning(false, "Router.State is deprecated. Please use this.context.router." + routerMethodName + "() instead");

	    return fn.apply(this, arguments);
	  };
	}

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ Router.State ],
	 *     render() {
	 *       var className = this.props.className;
	 *   
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *   
	 *       return React.DOM.a({ className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },

	  /**
	   * Returns the current URL path.
	   */
	  getPath: deprecatedMethod("getCurrentPath", function () {
	    return this.context.router.getCurrentPath();
	  }),

	  /**
	   * Returns the current URL path without the query string.
	   */
	  getPathname: deprecatedMethod("getCurrentPathname", function () {
	    return this.context.router.getCurrentPathname();
	  }),

	  /**
	   * Returns an object of the URL params that are currently active.
	   */
	  getParams: deprecatedMethod("getCurrentParams", function () {
	    return this.context.router.getCurrentParams();
	  }),

	  /**
	   * Returns an object of the query params that are currently active.
	   */
	  getQuery: deprecatedMethod("getCurrentQuery", function () {
	    return this.context.router.getCurrentQuery();
	  }),

	  /**
	   * Returns an array of the routes that are currently active.
	   */
	  getRoutes: deprecatedMethod("getCurrentRoutes", function () {
	    return this.context.router.getCurrentRoutes();
	  }),

	  /**
	   * A helper method to determine if a given route, params, and query
	   * are active.
	   */
	  isActive: deprecatedMethod("isActive", function (to, params, query) {
	    return this.context.router.isActive(to, params, query);
	  })

	};

	module.exports = State;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var assign = __webpack_require__(63);
	var invariant = __webpack_require__(64);
	var warning = __webpack_require__(66);
	var PathUtils = __webpack_require__(43);

	var _currentRoute;

	var Route = (function () {
	  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
	    _classCallCheck(this, Route);

	    this.name = name;
	    this.path = path;
	    this.paramNames = PathUtils.extractParamNames(this.path);
	    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
	    this.isDefault = !!isDefault;
	    this.isNotFound = !!isNotFound;
	    this.onEnter = onEnter;
	    this.onLeave = onLeave;
	    this.handler = handler;
	  }

	  _createClass(Route, {
	    appendChild: {

	      /**
	       * Appends the given route to this route's child routes.
	       */

	      value: function appendChild(route) {
	        invariant(route instanceof Route, "route.appendChild must use a valid Route");

	        if (!this.childRoutes) this.childRoutes = [];

	        this.childRoutes.push(route);
	      }
	    },
	    toString: {
	      value: function toString() {
	        var string = "<Route";

	        if (this.name) string += " name=\"" + this.name + "\"";

	        string += " path=\"" + this.path + "\">";

	        return string;
	      }
	    }
	  }, {
	    createRoute: {

	      /**
	       * Creates and returns a new route. Options may be a URL pathname string
	       * with placeholders for named params or an object with any of the following
	       * properties:
	       *
	       * - name                     The name of the route. This is used to lookup a
	       *                            route relative to its parent route and should be
	       *                            unique among all child routes of the same parent
	       * - path                     A URL pathname string with optional placeholders
	       *                            that specify the names of params to extract from
	       *                            the URL when the path matches. Defaults to `/${name}`
	       *                            when there is a name given, or the path of the parent
	       *                            route, or /
	       * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
	       *                            the scroll behavior of the router
	       * - isDefault                True to make this route the default route among all
	       *                            its siblings
	       * - isNotFound               True to make this route the "not found" route among
	       *                            all its siblings
	       * - onEnter                  A transition hook that will be called when the
	       *                            router is going to enter this route
	       * - onLeave                  A transition hook that will be called when the
	       *                            router is going to leave this route
	       * - handler                  A React component that will be rendered when
	       *                            this route is active
	       * - parentRoute              The parent route to use for this route. This option
	       *                            is automatically supplied when creating routes inside
	       *                            the callback to another invocation of createRoute. You
	       *                            only ever need to use this when declaring routes
	       *                            independently of one another to manually piece together
	       *                            the route hierarchy
	       *
	       * The callback may be used to structure your route hierarchy. Any call to
	       * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
	       * inside the callback automatically uses this route as its parent.
	       */

	      value: function createRoute(options, callback) {
	        options = options || {};

	        if (typeof options === "string") options = { path: options };

	        var parentRoute = _currentRoute;

	        if (parentRoute) {
	          warning(options.parentRoute == null || options.parentRoute === parentRoute, "You should not use parentRoute with createRoute inside another route's child callback; it is ignored");
	        } else {
	          parentRoute = options.parentRoute;
	        }

	        var name = options.name;
	        var path = options.path || name;

	        if (path && !(options.isDefault || options.isNotFound)) {
	          if (PathUtils.isAbsolute(path)) {
	            if (parentRoute) {
	              invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, "You cannot nest path \"%s\" inside \"%s\"; the parent requires URL parameters", path, parentRoute.path);
	            }
	          } else if (parentRoute) {
	            // Relative paths extend their parent.
	            path = PathUtils.join(parentRoute.path, path);
	          } else {
	            path = "/" + path;
	          }
	        } else {
	          path = parentRoute ? parentRoute.path : "/";
	        }

	        if (options.isNotFound && !/\*$/.test(path)) path += "*"; // Auto-append * to the path of not found routes.

	        var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

	        if (parentRoute) {
	          if (route.isDefault) {
	            invariant(parentRoute.defaultRoute == null, "%s may not have more than one default route", parentRoute);

	            parentRoute.defaultRoute = route;
	          } else if (route.isNotFound) {
	            invariant(parentRoute.notFoundRoute == null, "%s may not have more than one not found route", parentRoute);

	            parentRoute.notFoundRoute = route;
	          }

	          parentRoute.appendChild(route);
	        }

	        // Any routes created in the callback
	        // use this route as their parent.
	        if (typeof callback === "function") {
	          var currentRoute = _currentRoute;
	          _currentRoute = route;
	          callback.call(route, route);
	          _currentRoute = currentRoute;
	        }

	        return route;
	      }
	    },
	    createDefaultRoute: {

	      /**
	       * Creates and returns a route that is rendered when its parent matches
	       * the current URL.
	       */

	      value: function createDefaultRoute(options) {
	        return Route.createRoute(assign({}, options, { isDefault: true }));
	      }
	    },
	    createNotFoundRoute: {

	      /**
	       * Creates and returns a route that is rendered when its parent matches
	       * the current URL but none of its siblings do.
	       */

	      value: function createNotFoundRoute(options) {
	        return Route.createRoute(assign({}, options, { isNotFound: true }));
	      }
	    },
	    createRedirect: {

	      /**
	       * Creates and returns a route that automatically redirects the transition
	       * to another route. In addition to the normal options to createRoute, this
	       * function accepts the following options:
	       *
	       * - from         An alias for the `path` option. Defaults to *
	       * - to           The path/route/route name to redirect to
	       * - params       The params to use in the redirect URL. Defaults
	       *                to using the current params
	       * - query        The query to use in the redirect URL. Defaults
	       *                to using the current query
	       */

	      value: function createRedirect(options) {
	        return Route.createRoute(assign({}, options, {
	          path: options.path || options.from || "*",
	          onEnter: function onEnter(transition, params, query) {
	            transition.redirect(options.to, options.params || params, options.query || query);
	          }
	        }));
	      }
	    }
	  });

	  return Route;
	})();

	module.exports = Route;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/* jshint -W084 */
	var React = __webpack_require__(1);
	var assign = __webpack_require__(63);
	var warning = __webpack_require__(66);
	var DefaultRoute = __webpack_require__(10);
	var NotFoundRoute = __webpack_require__(12);
	var Redirect = __webpack_require__(13);
	var Route = __webpack_require__(26);

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || "UnknownComponent";

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) warning(false, error.message);
	    }
	  }
	}

	function createRouteOptions(props) {
	  var options = assign({}, props);
	  var handler = options.handler;

	  if (handler) {
	    options.onEnter = handler.willTransitionTo;
	    options.onLeave = handler.willTransitionFrom;
	  }

	  return options;
	}

	function createRouteFromReactElement(element) {
	  if (!React.isValidElement(element)) {
	    return;
	  }var type = element.type;
	  var props = assign({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

	  if (type === DefaultRoute) {
	    return Route.createDefaultRoute(createRouteOptions(props));
	  }if (type === NotFoundRoute) {
	    return Route.createNotFoundRoute(createRouteOptions(props));
	  }if (type === Redirect) {
	    return Route.createRedirect(createRouteOptions(props));
	  }return Route.createRoute(createRouteOptions(props), function () {
	    if (props.children) createRoutesFromReactChildren(props.children);
	  });
	}

	/**
	 * Creates and returns an array of routes created from the given
	 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
	 * <NotFoundRoute>, or <Redirect>, e.g.:
	 *
	 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
	 *
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route path="/" handler={App}>
	 *       <Route name="user" path="/user/:userId" handler={User}>
	 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
	 *         <Redirect from="todos/:taskId" to="task"/>
	 *       </Route>
	 *     </Route>
	 *   );
	 */
	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  React.Children.forEach(children, function (child) {
	    if (child = createRouteFromReactElement(child)) routes.push(child);
	  });

	  return routes;
	}

	module.exports = createRoutesFromReactChildren;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	/* jshint -W058 */
	var React = __webpack_require__(1);
	var warning = __webpack_require__(66);
	var invariant = __webpack_require__(64);
	var canUseDOM = __webpack_require__(65).canUseDOM;
	var LocationActions = __webpack_require__(41);
	var ImitateBrowserBehavior = __webpack_require__(21);
	var HashLocation = __webpack_require__(16);
	var HistoryLocation = __webpack_require__(17);
	var RefreshLocation = __webpack_require__(18);
	var StaticLocation = __webpack_require__(19);
	var ScrollHistory = __webpack_require__(44);
	var createRoutesFromReactChildren = __webpack_require__(27);
	var isReactChildren = __webpack_require__(45);
	var Transition = __webpack_require__(46);
	var PropTypes = __webpack_require__(40);
	var Redirect = __webpack_require__(47);
	var History = __webpack_require__(23);
	var Cancellation = __webpack_require__(48);
	var Match = __webpack_require__(49);
	var Route = __webpack_require__(26);
	var supportsHistory = __webpack_require__(50);
	var PathUtils = __webpack_require__(43);

	/**
	 * The default location for new routers.
	 */
	var DEFAULT_LOCATION = canUseDOM ? HashLocation : "/";

	/**
	 * The default scroll behavior for new routers.
	 */
	var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

	function hasProperties(object, properties) {
	  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
	    return false;
	  }return true;
	}

	function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
	  return routes.some(function (r) {
	    if (r !== route) return false;

	    var paramNames = route.paramNames;
	    var paramName;

	    // Ensure that all params the route cares about did not change.
	    for (var i = 0, len = paramNames.length; i < len; ++i) {
	      paramName = paramNames[i];

	      if (nextParams[paramName] !== prevParams[paramName]) return false;
	    }

	    // Ensure the query hasn't changed.
	    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
	  });
	}

	function addRoutesToNamedRoutes(routes, namedRoutes) {
	  var route;
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    route = routes[i];

	    if (route.name) {
	      invariant(namedRoutes[route.name] == null, "You may not have more than one route named \"%s\"", route.name);

	      namedRoutes[route.name] = route;
	    }

	    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
	  }
	}

	function routeIsActive(activeRoutes, routeName) {
	  return activeRoutes.some(function (route) {
	    return route.name === routeName;
	  });
	}

	function paramsAreActive(activeParams, params) {
	  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
	    return false;
	  }return true;
	}

	function queryIsActive(activeQuery, query) {
	  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
	    return false;
	  }return true;
	}

	/**
	 * Creates and returns a new router using the given options. A router
	 * is a ReactComponent class that knows how to react to changes in the
	 * URL and keep the contents of the page in sync.
	 *
	 * Options may be any of the following:
	 *
	 * - routes           (required) The route config
	 * - location         The location to use. Defaults to HashLocation when
	 *                    the DOM is available, "/" otherwise
	 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
	 *                    when the DOM is available, null otherwise
	 * - onError          A function that is used to handle errors
	 * - onAbort          A function that is used to handle aborted transitions
	 *
	 * When rendering in a server-side environment, the location should simply
	 * be the URL path that was used in the request, including the query string.
	 */
	function createRouter(options) {
	  options = options || {};

	  if (isReactChildren(options)) options = { routes: options };

	  var mountedComponents = [];
	  var location = options.location || DEFAULT_LOCATION;
	  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
	  var state = {};
	  var nextState = {};
	  var pendingTransition = null;
	  var dispatchHandler = null;

	  if (typeof location === "string") location = new StaticLocation(location);

	  if (location instanceof StaticLocation) {
	    warning(!canUseDOM || process.env.NODE_ENV === "test", "You should not use a static location in a DOM environment because " + "the router will not be kept in sync with the current URL");
	  } else {
	    invariant(canUseDOM || location.needsDOM === false, "You cannot use %s without a DOM", location);
	  }

	  // Automatically fall back to full page refreshes in
	  // browsers that don't support the HTML history API.
	  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

	  var Router = React.createClass({

	    displayName: "Router",

	    statics: {

	      isRunning: false,

	      cancelPendingTransition: function cancelPendingTransition() {
	        if (pendingTransition) {
	          pendingTransition.cancel();
	          pendingTransition = null;
	        }
	      },

	      clearAllRoutes: function clearAllRoutes() {
	        Router.cancelPendingTransition();
	        Router.namedRoutes = {};
	        Router.routes = [];
	      },

	      /**
	       * Adds routes to this router from the given children object (see ReactChildren).
	       */
	      addRoutes: function addRoutes(routes) {
	        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

	        addRoutesToNamedRoutes(routes, Router.namedRoutes);

	        Router.routes.push.apply(Router.routes, routes);
	      },

	      /**
	       * Replaces routes of this router from the given children object (see ReactChildren).
	       */
	      replaceRoutes: function replaceRoutes(routes) {
	        Router.clearAllRoutes();
	        Router.addRoutes(routes);
	        Router.refresh();
	      },

	      /**
	       * Performs a match of the given path against this router and returns an object
	       * with the { routes, params, pathname, query } that match. Returns null if no
	       * match can be made.
	       */
	      match: function match(path) {
	        return Match.findMatch(Router.routes, path);
	      },

	      /**
	       * Returns an absolute URL path created from the given route
	       * name, URL parameters, and query.
	       */
	      makePath: function makePath(to, params, query) {
	        var path;
	        if (PathUtils.isAbsolute(to)) {
	          path = to;
	        } else {
	          var route = to instanceof Route ? to : Router.namedRoutes[to];

	          invariant(route instanceof Route, "Cannot find a route named \"%s\"", to);

	          path = route.path;
	        }

	        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
	      },

	      /**
	       * Returns a string that may safely be used as the href of a link
	       * to the route with the given name, URL parameters, and query.
	       */
	      makeHref: function makeHref(to, params, query) {
	        var path = Router.makePath(to, params, query);
	        return location === HashLocation ? "#" + path : path;
	      },

	      /**
	       * Transitions to the URL specified in the arguments by pushing
	       * a new URL onto the history stack.
	       */
	      transitionTo: function transitionTo(to, params, query) {
	        var path = Router.makePath(to, params, query);

	        if (pendingTransition) {
	          // Replace so pending location does not stay in history.
	          location.replace(path);
	        } else {
	          location.push(path);
	        }
	      },

	      /**
	       * Transitions to the URL specified in the arguments by replacing
	       * the current URL in the history stack.
	       */
	      replaceWith: function replaceWith(to, params, query) {
	        location.replace(Router.makePath(to, params, query));
	      },

	      /**
	       * Transitions to the previous URL if one is available. Returns true if the
	       * router was able to go back, false otherwise.
	       *
	       * Note: The router only tracks history entries in your application, not the
	       * current browser session, so you can safely call this function without guarding
	       * against sending the user back to some other site. However, when using
	       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
	       * don't support HTML5 history) this method will *always* send the client back
	       * because we cannot reliably track history length.
	       */
	      goBack: function goBack() {
	        if (History.length > 1 || location === RefreshLocation) {
	          location.pop();
	          return true;
	        }

	        warning(false, "goBack() was ignored because there is no router history");

	        return false;
	      },

	      handleAbort: options.onAbort || function (abortReason) {
	        if (location instanceof StaticLocation) throw new Error("Unhandled aborted transition! Reason: " + abortReason);

	        if (abortReason instanceof Cancellation) {
	          return;
	        } else if (abortReason instanceof Redirect) {
	          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
	        } else {
	          location.pop();
	        }
	      },

	      handleError: options.onError || function (error) {
	        // Throw so we don't silently swallow async errors.
	        throw error; // This error probably originated in a transition hook.
	      },

	      handleLocationChange: function handleLocationChange(change) {
	        Router.dispatch(change.path, change.type);
	      },

	      /**
	       * Performs a transition to the given path and calls callback(error, abortReason)
	       * when the transition is finished. If both arguments are null the router's state
	       * was updated. Otherwise the transition did not complete.
	       *
	       * In a transition, a router first determines which routes are involved by beginning
	       * with the current route, up the route tree to the first parent route that is shared
	       * with the destination route, and back down the tree to the destination route. The
	       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
	       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
	       * all route handlers we're transitioning to.
	       *
	       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
	       * transition. To resolve asynchronously, they may use the callback argument. If no
	       * hooks wait, the transition is fully synchronous.
	       */
	      dispatch: function dispatch(path, action) {
	        Router.cancelPendingTransition();

	        var prevPath = state.path;
	        var isRefreshing = action == null;

	        if (prevPath === path && !isRefreshing) {
	          return;
	        } // Nothing to do!

	        // Record the scroll position as early as possible to
	        // get it before browsers try update it automatically.
	        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

	        var match = Router.match(path);

	        warning(match != null, "No route matches path \"%s\". Make sure you have <Route path=\"%s\"> somewhere in your routes", path, path);

	        if (match == null) match = {};

	        var prevRoutes = state.routes || [];
	        var prevParams = state.params || {};
	        var prevQuery = state.query || {};

	        var nextRoutes = match.routes || [];
	        var nextParams = match.params || {};
	        var nextQuery = match.query || {};

	        var fromRoutes, toRoutes;
	        if (prevRoutes.length) {
	          fromRoutes = prevRoutes.filter(function (route) {
	            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });

	          toRoutes = nextRoutes.filter(function (route) {
	            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });
	        } else {
	          fromRoutes = [];
	          toRoutes = nextRoutes;
	        }

	        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
	        pendingTransition = transition;

	        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

	        Transition.from(transition, fromRoutes, fromComponents, function (error) {
	          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

	          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
	            dispatchHandler.call(Router, error, transition, {
	              path: path,
	              action: action,
	              pathname: match.pathname,
	              routes: nextRoutes,
	              params: nextParams,
	              query: nextQuery
	            });
	          });
	        });
	      },

	      /**
	       * Starts this router and calls callback(router, state) when the route changes.
	       *
	       * If the router's location is static (i.e. a URL path in a server environment)
	       * the callback is called only once. Otherwise, the location should be one of the
	       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
	       */
	      run: function run(callback) {
	        invariant(!Router.isRunning, "Router is already running");

	        dispatchHandler = function (error, transition, newState) {
	          if (error) Router.handleError(error);

	          if (pendingTransition !== transition) return;

	          pendingTransition = null;

	          if (transition.abortReason) {
	            Router.handleAbort(transition.abortReason);
	          } else {
	            callback.call(Router, Router, nextState = newState);
	          }
	        };

	        if (!(location instanceof StaticLocation)) {
	          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

	          Router.isRunning = true;
	        }

	        // Bootstrap using the current path.
	        Router.refresh();
	      },

	      refresh: function refresh() {
	        Router.dispatch(location.getCurrentPath(), null);
	      },

	      stop: function stop() {
	        Router.cancelPendingTransition();

	        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

	        Router.isRunning = false;
	      },

	      getLocation: function getLocation() {
	        return location;
	      },

	      getScrollBehavior: function getScrollBehavior() {
	        return scrollBehavior;
	      },

	      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
	        var routes = state.routes;
	        return routes && routes[routeDepth];
	      },

	      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
	        mountedComponents[routeDepth] = component;
	      },

	      /**
	       * Returns the current URL path + query string.
	       */
	      getCurrentPath: function getCurrentPath() {
	        return state.path;
	      },

	      /**
	       * Returns the current URL path without the query string.
	       */
	      getCurrentPathname: function getCurrentPathname() {
	        return state.pathname;
	      },

	      /**
	       * Returns an object of the currently active URL parameters.
	       */
	      getCurrentParams: function getCurrentParams() {
	        return state.params;
	      },

	      /**
	       * Returns an object of the currently active query parameters.
	       */
	      getCurrentQuery: function getCurrentQuery() {
	        return state.query;
	      },

	      /**
	       * Returns an array of the currently active routes.
	       */
	      getCurrentRoutes: function getCurrentRoutes() {
	        return state.routes;
	      },

	      /**
	       * Returns true if the given route, params, and query are active.
	       */
	      isActive: function isActive(to, params, query) {
	        if (PathUtils.isAbsolute(to)) {
	          return to === state.path;
	        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
	      }

	    },

	    mixins: [ScrollHistory],

	    propTypes: {
	      children: PropTypes.falsy
	    },

	    childContextTypes: {
	      routeDepth: PropTypes.number.isRequired,
	      router: PropTypes.router.isRequired
	    },

	    getChildContext: function getChildContext() {
	      return {
	        routeDepth: 1,
	        router: Router
	      };
	    },

	    getInitialState: function getInitialState() {
	      return state = nextState;
	    },

	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.setState(state = nextState);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	      Router.stop();
	    },

	    render: function render() {
	      var route = Router.getRouteAtDepth(0);
	      return route ? React.createElement(route.handler, this.props) : null;
	    }

	  });

	  Router.clearAllRoutes();

	  if (options.routes) Router.addRoutes(options.routes);

	  return Router;
	}

	module.exports = createRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var createRouter = __webpack_require__(28);

	/**
	 * A high-level convenience method that creates, configures, and
	 * runs a router in one shot. The method signature is:
	 *
	 *   Router.run(routes[, location ], callback);
	 *
	 * Using `window.location.hash` to manage the URL, you could do:
	 *
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 * 
	 * Using HTML5 history and a custom "cursor" prop:
	 * 
	 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
	 *     React.render(<Handler cursor={cursor}/>, document.body);
	 *   });
	 *
	 * Returns the newly created router.
	 *
	 * Note: If you need to specify further options for your router such
	 * as error/abort handling or custom scroll behavior, use Router.create
	 * instead.
	 *
	 *   var router = Router.create(options);
	 *   router.run(function (Handler) {
	 *     // ...
	 *   });
	 */
	function runRouter(routes, location, callback) {
	  if (typeof location === "function") {
	    callback = location;
	    location = null;
	  }

	  var router = createRouter({
	    routes: routes,
	    location: location
	  });

	  router.run(callback);

	  return router;
	}

	module.exports = runRouter;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	function clone(el, props) {
		return React.cloneElement(el, props);
	}

	function center(el) {
		el = el.props ? el : React.createElement(
			"div",
			null,
			el
		);

		var style = assign({}, el.props.style, this.props.style);

		style.margin = "0 auto";
		style.width = style.width || 960;
		style.minWidth = style.minWidth || 640;

		var props = assign({}, this.props);
		props.children = el.props.children;

		props.className = (props.className || "") + " centered";

		if (el.props && el.props.className) {
			props.className += " " + el.props.className;
		}

		return clone(el, assign({}, props, { style: style }));
	}

	var _default = (function (_React$Component) {
		var _class = function _default() {
			_classCallCheck(this, _class);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		};

		_inherits(_class, _React$Component);

		_createClass(_class, {
			render: {
				value: function render() {

					var children = this.props.children;

					if (React.Children.count(children) <= 1) {
						return center.call(this, children);
					}

					return React.Children.map(this.props.children, center, this);
				}
			}
		});

		return _class;
	})(React.Component);

	module.exports = _default;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	var Link = __webpack_require__(5).Link;

	var Centered = _interopRequire(__webpack_require__(30));

	var gitLogoURL = __webpack_require__(57);
	var logoURL = __webpack_require__(58);

	var Header = (function (_React$Component) {
		var _class = function Header() {
			_classCallCheck(this, _class);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		};

		_inherits(_class, _React$Component);

		_createClass(_class, {
			render: {
				value: function render() {
					return React.createElement(
						"div",
						this.prepareProps(this.props),
						React.createElement(
							Centered,
							{ style: {
									xwidth: "auto", display: "flex", flexFlow: "row", alignItems: "center"
								} },
							React.createElement(
								"div",
								null,
								React.createElement(
									Link,
									{ to: "/", style: { textDecoration: "none", color: "white" } },
									React.createElement("img", { src: logoURL, style: { height: 35 } }),
									React.createElement(
										"span",
										{ style: { padding: "0 20px", fontSize: "1.2em" } },
										"Carefully crafted UI components for React"
									)
								),
								React.createElement(
									"div",
									{ style: { flex: 1, textAlign: "right" } },
									React.createElement(
										"div",
										{ style: { float: "right" } },
										React.createElement(
											"a",
											{ target: "_blank", className: "repo-link", href: "http://github.com/zippyui/react-datagrid", style: { color: "white", textDecoration: "none" } },
											React.createElement("img", { className: "github-logo", src: gitLogoURL }),
											"GitHub Repo"
										)
									)
								)
							)
						)
					);
				}
			},
			prepareProps: {
				value: function prepareProps(thisProps) {

					var props = assign({}, thisProps);

					props.style = this.prepareStyle(props);
					props.className = this.prepareClassName(props);

					return props;
				}
			},
			prepareStyle: {
				value: function prepareStyle(props) {

					var style = assign({}, props.defaultStyle, props.style);

					return style;
				}
			},
			prepareClassName: {
				value: function prepareClassName(props) {
					var className = props.className || "";

					className += " header";

					return className;
				}
			}
		});

		return _class;
	})(React.Component);

	Header.defaultProps = {
		defaultStyle: {
			boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)"
		}
	};

	module.exports = Header;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	var _reactRouter = __webpack_require__(5);

	var Link = _reactRouter.Link;
	var RouteHandler = _reactRouter.RouteHandler;

	var Body = (function (_React$Component) {
		var _class = function Body() {
			_classCallCheck(this, _class);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		};

		_inherits(_class, _React$Component);

		_createClass(_class, {
			render: {
				value: function render() {

					var props = this.prepareProps(this.props);

					return React.createElement(
						"div",
						props,
						React.createElement(
							"div",
							{ style: { flex: 1 } },
							React.createElement(RouteHandler, null)
						)
					);
				}
			},
			prepareProps: {
				value: function prepareProps(thisProps) {

					var props = assign({}, thisProps);

					props.style = this.prepareStyle(props);
					props.className = this.prepareClassName(props);

					return props;
				}
			},
			prepareClassName: {
				value: function prepareClassName(props) {
					var className = props.className || "";

					return className += " body";
				}
			},
			prepareStyle: {
				value: function prepareStyle(props) {
					var style = assign({}, props.defaultStyle, props.style);

					return style;
				}
			}
		});

		return _class;
	})(React.Component);

	Body.defaultProps = {
		defaultStyle: {
			flex: 1,
			display: "flex",
			flexFlow: "row"
		}
	};

	module.exports = Body;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	var Centered = _interopRequire(__webpack_require__(30));

	var _default = (function (_React$Component) {
		var _class = function _default() {
			_classCallCheck(this, _class);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		};

		_inherits(_class, _React$Component);

		_createClass(_class, {
			render: {
				value: function render() {

					var props = this.prepareProps(this.props);
					return React.createElement(
						"div",
						props,
						React.createElement(
							Centered,
							{ style: true },
							React.createElement(
								"div",
								null,
								React.createElement("img", { src: "../resources/svg/logo-simplu-w.svg", style: { width: 30, marginRight: 8 } }),
								React.createElement(
									"p",
									null,
									React.createElement(
										"a",
										{ style: { textDecoration: "none", color: "white" }, href: "https://github.com/zippyui", target: "_blank" },
										"© Zippy Technologies"
									)
								)
							)
						)
					);
				}
			},
			prepareProps: {
				value: function prepareProps(thisProps) {
					var props = assign({}, thisProps);

					props.className = this.prepareClassName(props);

					return props;
				}
			},
			prepareClassName: {
				value: function prepareClassName(props) {

					var className = props.className || "";

					className += " footer";

					return className;
				}
			}
		});

		return _class;
	})(React.Component);

	module.exports = _default;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Link = __webpack_require__(5).Link;

	var humanize = __webpack_require__(62).humanize;

	var examples = __webpack_require__(35).array;

	var menuItems = examples.map(function (example) {

		var name = example.prototype.name;

		return {
			name: name,
			text: humanize(name)
		};
	});

	var renderMenuItem = function (item, index) {
		return React.createElement(
			"li",
			{ key: index },
			React.createElement(
				Link,
				{ activeStyle: { fontWeight: "bold" }, to: "examples", params: { name: item.name } },
				item.text
			)
		);
	};

	module.exports = function () {
		return React.createElement(
			"ul",
			{ className: "example-menu" },
			menuItems.map(renderMenuItem)
		);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var React = _interopRequire(__webpack_require__(1));

	var example = _interopRequire(__webpack_require__(55));

	var all = [example("basic", { height: 470,
		description: React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				null,
				"DataGrid features:"
			),
			React.createElement(
				"ul",
				{ style: { lineHeight: "1.5em" } },
				React.createElement(
					"li",
					null,
					"Great rendering performance - even with millions of records"
				),
				React.createElement(
					"li",
					null,
					"Sized and flexible columns"
				),
				React.createElement(
					"li",
					null,
					"Single and multiple selection support"
				),
				React.createElement(
					"li",
					null,
					"Grouping"
				),
				React.createElement(
					"li",
					null,
					"Custom styling"
				),
				React.createElement(
					"li",
					null,
					"Custom cell rendering"
				),
				React.createElement(
					"li",
					null,
					"Support for sorting"
				),
				React.createElement(
					"li",
					null,
					"Support for filtering"
				),
				React.createElement(
					"li",
					null,
					"Visible/hidden columns"
				)
			)
		)
	}), example("reorder-columns", { height: 450 }), example("large-data-array", {
		height: 550,
		description: React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"You can have ",
				React.createElement(
					"b",
					null,
					"huge"
				),
				" amounts of data in a grid."
			),
			React.createElement(
				"p",
				null,
				"We have tested it with ",
				React.createElement(
					"b",
					null,
					"1.000.000"
				),
				" records. "
			),
			React.createElement(
				"p",
				null,
				"In this demo, we are remotely fetching a json with ",
				React.createElement(
					"b",
					null,
					"100.000 records"
				),
				" and showing them in the grid, so please wait a bit until the json is loaded. The browser might freeze for a moment while doing the JSON.parse. After this, the grid does its job and keeps everything running smoothly."
			),
			React.createElement(
				"p",
				null,
				"In any case, the grid remains snappy no matter how large the data array is, since we only render a small subset of all data."
			)
		)
	}), example("sorting", {
		height: 550,
		description: React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"The grid below is initially rendered as sorted, but you can modify sorting by clicking a column header."
			),
			React.createElement(
				"p",
				null,
				"You can sort by multiple columns. Clicking on a column header multiple times sorts by that column ascending, then descending and them removes the sorting. Clicking again repeats this cicle"
			),
			React.createElement(
				"p",
				null,
				"For numeric columns, specify ",
				React.createElement(
					"b",
					null,
					React.createElement(
						"code",
						null,
						"type: \"number\""
					)
				),
				" in the column props."
			)
		)
	}), example("grouping", {
		height: 350
	}), example("filtering", { height: 450 }), example("empty-text-for-no-records", { height: 350 }), example("loading-grid", { height: 350 }), example("column-sizing", {
		height: 350,
		description: React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"Columns are flexible via flexbox. Specify a ",
				React.createElement(
					"b",
					null,
					React.createElement(
						"code",
						null,
						"flex"
					)
				),
				" property for this. Unless a column specifies a ",
				React.createElement(
					"b",
					null,
					React.createElement(
						"code",
						null,
						"flex"
					)
				),
				" or a ",
				React.createElement(
					"b",
					null,
					React.createElement(
						"code",
						null,
						"width"
					)
				),
				" property, it is assumed to have ",
				React.createElement(
					"b",
					null,
					React.createElement(
						"code",
						null,
						"flex: 1"
					)
				),
				". You can also specify a ",
				React.createElement(
					"b",
					null,
					React.createElement(
						"code",
						null,
						"minWidth"
					)
				),
				" property."
			),
			React.createElement(
				"p",
				null,
				"And of course, horizontal scrollbars show when needed."
			)
		)
	}), example("custom-column-styling", { height: 350 }), example("custom-column-rendering", { height: 350 }), example("custom-row-styling", { height: 350 }), example("custom-cell-borders", { height: 350 }), example("text-align-and-custom-row-height", { height: 350 })];

	var allMap = {};

	all.map(function (item) {
		allMap[item.prototype.name] = item;
	});

	module.exports = {
		map: allMap,
		array: all
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	function getSvgBody(svg) {
	  return svg.replace("module.exports = ", "")
	  // remove xml prolog
	  .replace(/<\?xml[\s\S]*?>/gi, "")
	  // remove doctype
	  .replace(/<!doctype[\s\S]*?>/gi, "")
	  // remove comments
	  .replace(/<!--[\s\S]*?-->/g, "")
	  // remove hardcoded dimensions
	  // .replace(/width="\d+(\.\d+)?(px)?"/gi, "")
	  // .replace(/height="\d+(\.\d+)?(px)?"/gi, "")
	  .trim();
	}

	module.exports = React.createClass({
	  displayName: "SvgIcon",

	  propTypes: {
	    svg: React.PropTypes.string.isRequired,
	    id: React.PropTypes.string,
	    modifier: React.PropTypes.string,
	    color: React.PropTypes.string
	  },

	  render: function render() {

	    var props = assign({}, this.props);
	    var svg = props.svg;

	    if (!svg.trim().match(/^\s*</g)) {
	      console.warn("Please use <IconSvg> with <svg> file. props= " + JSON.stringify(props));
	    }

	    var style = assign({}, props.style);
	    if (props.color) {
	      style.fill = "red" //props.color
	      ;
	    }
	    if (props.size) {
	      style.fontSize = props.size;
	    }

	    return React.createElement("span", _extends({}, props, {
	      dangerouslySetInnerHTML: { __html: getSvgBody(svg) } }));
	  }
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67)

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(61);
	var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
	var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];

	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor;
			var skipConstructor = ctor && ctor.prototype === object;

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};

	keysShim.shim = function shimObjectKeys() {
		if (!Object.keys) {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	module.exports = keysShim;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var assign = __webpack_require__(63);
	var ReactPropTypes = __webpack_require__(1).PropTypes;
	var Route = __webpack_require__(26);

	var PropTypes = assign({}, ReactPropTypes, {

	  /**
	   * Indicates that a prop should be falsy.
	   */
	  falsy: function falsy(props, propName, componentName) {
	    if (props[propName]) {
	      return new Error("<" + componentName + "> may not have a \"" + propName + "\" prop");
	    }
	  },

	  /**
	   * Indicates that a prop should be a Route object.
	   */
	  route: ReactPropTypes.instanceOf(Route),

	  /**
	   * Indicates that a prop should be a Router object.
	   */
	  //router: ReactPropTypes.instanceOf(Router) // TODO
	  router: ReactPropTypes.func

	});

	module.exports = PropTypes;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Actions that modify the URL.
	 */
	var LocationActions = {

	  /**
	   * Indicates a new location is being pushed to the history stack.
	   */
	  PUSH: "push",

	  /**
	   * Indicates the current location should be replaced.
	   */
	  REPLACE: "replace",

	  /**
	   * Indicates the most recent entry should be removed from the history stack.
	   */
	  POP: "pop"

	};

	module.exports = LocationActions;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/**
	 * This component is necessary to get around a context warning
	 * present in React 0.13.0. It sovles this by providing a separation
	 * between the "owner" and "parent" contexts.
	 */

	var React = __webpack_require__(1);

	var ContextWrapper = (function (_React$Component) {
	  function ContextWrapper() {
	    _classCallCheck(this, ContextWrapper);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ContextWrapper, _React$Component);

	  _createClass(ContextWrapper, {
	    render: {
	      value: function render() {
	        return this.props.children;
	      }
	    }
	  });

	  return ContextWrapper;
	})(React.Component);

	module.exports = ContextWrapper;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant = __webpack_require__(64);
	var objectAssign = __webpack_require__(38);
	var qs = __webpack_require__(89);

	var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
	var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
	var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
	var queryMatcher = /\?(.*)$/;

	var _compiledPatterns = {};

	function compilePattern(pattern) {
	  if (!(pattern in _compiledPatterns)) {
	    var paramNames = [];
	    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
	      if (paramName) {
	        paramNames.push(paramName);
	        return "([^/?#]+)";
	      } else if (match === "*") {
	        paramNames.push("splat");
	        return "(.*?)";
	      } else {
	        return "\\" + match;
	      }
	    });

	    _compiledPatterns[pattern] = {
	      matcher: new RegExp("^" + source + "$", "i"),
	      paramNames: paramNames
	    };
	  }

	  return _compiledPatterns[pattern];
	}

	var PathUtils = {

	  /**
	   * Returns true if the given path is absolute.
	   */
	  isAbsolute: function isAbsolute(path) {
	    return path.charAt(0) === "/";
	  },

	  /**
	   * Joins two URL paths together.
	   */
	  join: function join(a, b) {
	    return a.replace(/\/*$/, "/") + b;
	  },

	  /**
	   * Returns an array of the names of all parameters in the given pattern.
	   */
	  extractParamNames: function extractParamNames(pattern) {
	    return compilePattern(pattern).paramNames;
	  },

	  /**
	   * Extracts the portions of the given URL path that match the given pattern
	   * and returns an object of param name => value pairs. Returns null if the
	   * pattern does not match the given path.
	   */
	  extractParams: function extractParams(pattern, path) {
	    var _compilePattern = compilePattern(pattern);

	    var matcher = _compilePattern.matcher;
	    var paramNames = _compilePattern.paramNames;

	    var match = path.match(matcher);

	    if (!match) {
	      return null;
	    }var params = {};

	    paramNames.forEach(function (paramName, index) {
	      params[paramName] = match[index + 1];
	    });

	    return params;
	  },

	  /**
	   * Returns a version of the given route path with params interpolated. Throws
	   * if there is a dynamic segment of the route path for which there is no param.
	   */
	  injectParams: function injectParams(pattern, params) {
	    params = params || {};

	    var splatIndex = 0;

	    return pattern.replace(paramInjectMatcher, function (match, paramName) {
	      paramName = paramName || "splat";

	      // If param is optional don't check for existence
	      if (paramName.slice(-1) === "?") {
	        paramName = paramName.slice(0, -1);

	        if (params[paramName] == null) return "";
	      } else {
	        invariant(params[paramName] != null, "Missing \"%s\" parameter for path \"%s\"", paramName, pattern);
	      }

	      var segment;
	      if (paramName === "splat" && Array.isArray(params[paramName])) {
	        segment = params[paramName][splatIndex++];

	        invariant(segment != null, "Missing splat # %s for path \"%s\"", splatIndex, pattern);
	      } else {
	        segment = params[paramName];
	      }

	      return segment;
	    }).replace(paramInjectTrailingSlashMatcher, "/");
	  },

	  /**
	   * Returns an object that is the result of parsing any query string contained
	   * in the given path, null if the path contains no query string.
	   */
	  extractQuery: function extractQuery(path) {
	    var match = path.match(queryMatcher);
	    return match && qs.parse(match[1]);
	  },

	  /**
	   * Returns a version of the given path without the query string.
	   */
	  withoutQuery: function withoutQuery(path) {
	    return path.replace(queryMatcher, "");
	  },

	  /**
	   * Returns a version of the given path with the parameters in the given
	   * query merged into the query string.
	   */
	  withQuery: function withQuery(path, query) {
	    var existingQuery = PathUtils.extractQuery(path);

	    if (existingQuery) query = query ? objectAssign(existingQuery, query) : existingQuery;

	    var queryString = qs.stringify(query, { arrayFormat: "brackets" });

	    if (queryString) {
	      return PathUtils.withoutQuery(path) + "?" + queryString;
	    }return PathUtils.withoutQuery(path);
	  }

	};

	module.exports = PathUtils;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant = __webpack_require__(64);
	var canUseDOM = __webpack_require__(65).canUseDOM;
	var getWindowScrollPosition = __webpack_require__(68);

	function shouldUpdateScroll(state, prevState) {
	  if (!prevState) {
	    return true;
	  } // Don't update scroll position when only the query has changed.
	  if (state.pathname === prevState.pathname) {
	    return false;
	  }var routes = state.routes;
	  var prevRoutes = prevState.routes;

	  var sharedAncestorRoutes = routes.filter(function (route) {
	    return prevRoutes.indexOf(route) !== -1;
	  });

	  return !sharedAncestorRoutes.some(function (route) {
	    return route.ignoreScrollBehavior;
	  });
	}

	/**
	 * Provides the router with the ability to manage window scroll position
	 * according to its scroll behavior.
	 */
	var ScrollHistory = {

	  statics: {

	    /**
	     * Records curent scroll position as the last known position for the given URL path.
	     */
	    recordScrollPosition: function recordScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};

	      this.scrollHistory[path] = getWindowScrollPosition();
	    },

	    /**
	     * Returns the last known scroll position for the given URL path.
	     */
	    getScrollPosition: function getScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};

	      return this.scrollHistory[path] || null;
	    }

	  },

	  componentWillMount: function componentWillMount() {
	    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, "Cannot use scroll behavior without a DOM");
	  },

	  componentDidMount: function componentDidMount() {
	    this._updateScroll();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this._updateScroll(prevState);
	  },

	  _updateScroll: function _updateScroll(prevState) {
	    if (!shouldUpdateScroll(this.state, prevState)) {
	      return;
	    }var scrollBehavior = this.constructor.getScrollBehavior();

	    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
	  }

	};

	module.exports = ScrollHistory;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	function isValidChild(object) {
	  return object == null || React.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	module.exports = isReactChildren;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/* jshint -W058 */

	var Cancellation = __webpack_require__(48);
	var Redirect = __webpack_require__(47);

	/**
	 * Encapsulates a transition to a given path.
	 *
	 * The willTransitionTo and willTransitionFrom handlers receive
	 * an instance of this class as their first argument.
	 */
	function Transition(path, retry) {
	  this.path = path;
	  this.abortReason = null;
	  // TODO: Change this to router.retryTransition(transition)
	  this.retry = retry.bind(this);
	}

	Transition.prototype.abort = function (reason) {
	  if (this.abortReason == null) this.abortReason = reason || "ABORT";
	};

	Transition.prototype.redirect = function (to, params, query) {
	  this.abort(new Redirect(to, params, query));
	};

	Transition.prototype.cancel = function () {
	  this.abort(new Cancellation());
	};

	Transition.from = function (transition, routes, components, callback) {
	  routes.reduce(function (callback, route, index) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onLeave) {
	        try {
	          route.onLeave(transition, components[index], callback);

	          // If there is no callback in the argument list, call it automatically.
	          if (route.onLeave.length < 3) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};

	Transition.to = function (transition, routes, params, query, callback) {
	  routes.reduceRight(function (callback, route) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onEnter) {
	        try {
	          route.onEnter(transition, params, query, callback);

	          // If there is no callback in the argument list, call it automatically.
	          if (route.onEnter.length < 4) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};

	module.exports = Transition;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Encapsulates a redirect to the given route.
	 */
	function Redirect(to, params, query) {
	  this.to = to;
	  this.params = params;
	  this.query = query;
	}

	module.exports = Redirect;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Represents a cancellation caused by navigating away
	 * before the previous transition has fully resolved.
	 */
	function Cancellation() {}

	module.exports = Cancellation;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/* jshint -W084 */
	var PathUtils = __webpack_require__(43);

	function deepSearch(route, pathname, query) {
	  // Check the subtree first to find the most deeply-nested match.
	  var childRoutes = route.childRoutes;
	  if (childRoutes) {
	    var match, childRoute;
	    for (var i = 0, len = childRoutes.length; i < len; ++i) {
	      childRoute = childRoutes[i];

	      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

	      if (match = deepSearch(childRoute, pathname, query)) {
	        // A route in the subtree matched! Add this route and we're done.
	        match.routes.unshift(route);
	        return match;
	      }
	    }
	  }

	  // No child routes matched; try the default route.
	  var defaultRoute = route.defaultRoute;
	  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, defaultRoute]);
	  } // Does the "not found" route match?
	  var notFoundRoute = route.notFoundRoute;
	  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, notFoundRoute]);
	  } // Last attempt: check this route.
	  var params = PathUtils.extractParams(route.path, pathname);
	  if (params) {
	    return new Match(pathname, params, query, [route]);
	  }return null;
	}

	var Match = (function () {
	  function Match(pathname, params, query, routes) {
	    _classCallCheck(this, Match);

	    this.pathname = pathname;
	    this.params = params;
	    this.query = query;
	    this.routes = routes;
	  }

	  _createClass(Match, null, {
	    findMatch: {

	      /**
	       * Attempts to match depth-first a route in the given route's
	       * subtree against the given path and returns the match if it
	       * succeeds, null if no match can be made.
	       */

	      value: function findMatch(routes, path) {
	        var pathname = PathUtils.withoutQuery(path);
	        var query = PathUtils.extractQuery(path);
	        var match = null;

	        for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

	        return match;
	      }
	    }
	  });

	  return Match;
	})();

	module.exports = Match;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function supportsHistory() {
	  /*! taken from modernizr
	   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	   */
	  var ua = navigator.userAgent;
	  if ((ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) && ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("Windows Phone") === -1) {
	    return false;
	  }
	  return window.history && "pushState" in window.history;
	}

	module.exports = supportsHistory;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasOwn      = __webpack_require__(69)
	var getPrefixed = __webpack_require__(70)

	var map      = __webpack_require__(71)
	var plugable = __webpack_require__(72)

	function plugins(key, value){

		var result = {
			key  : key,
			value: value
		}

		;(RESULT.plugins || []).forEach(function(fn){

			var tmp = map(function(res){
				return fn(key, value, res)
			}, result)

			if (tmp){
				result = tmp
			}
		})

		return result
	}

	function normalize(key, value){

		var result = plugins(key, value)

		return map(function(result){
			return {
				key  : getPrefixed(result.key, result.value),
				value: result.value
			}
		}, result)

		return result
	}

	var RESULT = function(style){

		var k
		var item
		var result = {}

		for (k in style) if (hasOwn(style, k)){
			item = normalize(k, style[k])

			if (!item){
				continue
			}

			map(function(item){
				result[item.key] = item.value
			}, item)
		}

		return result
	}

	module.exports = plugable(RESULT)

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React    = __webpack_require__(1)
	var assign   = __webpack_require__(38)
	var LoadMask = __webpack_require__(139)
	var Region   = __webpack_require__(122)

	var Column = __webpack_require__(73)

	var PropTypes      = __webpack_require__(74)
	var Wrapper        = __webpack_require__(86)
	var Header         = __webpack_require__(87)
	var WrapperFactory = React.createFactory(Wrapper)
	var HeaderFactory  = React.createFactory(Header)

	var findIndexByName = __webpack_require__(75)
	var group           = __webpack_require__(76)

	var slice          = __webpack_require__(77)
	var getTableProps    = __webpack_require__(78)
	var getGroupedRows = __webpack_require__(79)
	var renderMenu     = __webpack_require__(80)

	var SIZING_ID = '___SIZING___'

	function signum(x){
	    return x < 0? -1: 1
	}

	function emptyFn(){}

	function getVisibleCount(props, state){
	    return getVisibleColumns(props, state).length
	}

	function getVisibleColumns(props, state){

	    var visibility = state.visibility
	    var visibleColumns = props.columns.filter(function(c){
	        var name = c.name
	        var visible = c.visible

	        if (name in visibility){
	            visible = !!visibility[name]
	        }

	        return visible
	    })

	    return visibleColumns
	}

	function findColumn(columns, column){

	    var name = typeof column === 'string'? column: column.name
	    var index = findIndexByName(columns, name)

	    if (~index){
	        return columns[index]
	    }
	}

	module.exports = React.createClass({

	    displayName: 'ReactDataGrid',

	    mixins: [
	        __webpack_require__(81),
	        __webpack_require__(82)
	    ],

	    propTypes: {
	        loading          : React.PropTypes.bool,
	        virtualRendering : React.PropTypes.bool,

	        //specify false if you don't want any column to be resizable
	        resizableColumns : React.PropTypes.bool,
	        filterable: React.PropTypes.bool,

	        //specify false if you don't want column menus to be displayed
	        withColumnMenu   : React.PropTypes.bool,
	        cellEllipsis     : React.PropTypes.bool,
	        sortable         : React.PropTypes.bool,
	        idProperty       : React.PropTypes.string.isRequired,

	        //you can customize the column menu by specifying a factory
	        columnMenuFactory: React.PropTypes.func,

	        /**
	         * @cfg {Number/String} columnMinWidth=50
	         */
	        columnMinWidth   : PropTypes.numeric,
	        scrollBy         : PropTypes.numeric,
	        rowHeight        : PropTypes.numeric,
	        sortInfo         : PropTypes.sortInfo,
	        columns          : PropTypes.column
	    },

	    getDefaultProps: __webpack_require__(83),

	    componentDidMount: function(){
	        window.addEventListener('click', this.windowClickListener = this.onWindowClick)
	        // this.checkRowHeight(this.props)
	    },

	    componentWillUnmount: function(){
	        window.removeEventListener('click', this.windowClickListener)
	    },

	    // checkRowHeight: function(props) {
	    //     if (this.isVirtualRendering(props)){

	    //         //if virtual rendering and no rowHeight specifed, we use
	    //         var row = this.findRowById(SIZING_ID)
	    //         var config = {}

	    //         if (row){
	    //             this.setState({
	    //                 rowHeight: config.rowHeight = row.offsetHeight
	    //             })
	    //         }

	    //         //this ensures rows are kept in view
	    //         this.updateStartIndex(props, undefined, config)
	    //     }
	    // },

	    onWindowClick: function(event){
	        if (this.state.menu){
	            this.setState({
	                menuColumn: null,
	                menu      : null
	            })
	        }
	    },

	    getInitialState: function(){

	        var props = this.props
	        var defaultSelected = props.defaultSelected

	        return {
	            scrollLeft: 0,
	            scrollTop : 0,
	            renderStartIndex: 0,
	            menuColumn: null,
	            defaultSelected: defaultSelected,
	            visibility: {}
	        }
	    },

	    handleScrollLeft: function(scrollLeft){
	        this.setState({
	            scrollLeft: scrollLeft,
	            menuColumn: null
	        })
	    },

	    handleScrollTop: function(scrollTop){
	        var state = {
	            menuColumn: null
	        }

	        if (this.props.virtualRendering){

	            var prevIndex = this.state.renderStartIndex || 0

	            var renderStartIndex = Math.ceil(scrollTop / this.props.rowHeight)
	            state.renderStartIndex = renderStartIndex

	            // // console.log('scroll!');
	            // var sign = signum(renderStartIndex - prevIndex)

	            // state.topOffset = -sign * Math.ceil(scrollTop - state.renderStartIndex * this.props.rowHeight)

	            // console.log(scrollTop, sign);
	        } else {
	            state.scrollTop = scrollTop
	        }

	        this.setState(state)
	    },

	    getRenderEndIndex: function(props, state){
	        var startIndex = state.renderStartIndex
	        var rowCount   = props.rowCountBuffer
	        var length     = props.data.length

	        if (state.groupData){
	            length += state.groupData.groupsCount
	        }

	        if (!rowCount){
	            var maxHeight
	            if (props.style && typeof props.style.height === 'number'){
	                maxHeight = props.style.height
	            } else {
	                maxHeight = window.screen.height
	            }
	            rowCount = Math.floor(maxHeight / props.rowHeight)
	        }

	        var endIndex = startIndex + rowCount

	        if (endIndex > length - 1){
	            endIndex = length
	        }

	        return endIndex
	    },

	    onDropColumn: function(index, dropIndex){
	        ;(this.props.onColumnOrderChange || emptyFn)(index, dropIndex)
	    },

	    toggleColumn: function(props, column){

	        var visible = column.visible
	        var visibility = this.state.visibility

	        if (column.name in visibility){
	            visible = visibility[column.name]
	        }

	        column = findColumn(this.props.columns, column)

	        if (visible && getVisibleCount(props, this.state) === 1){
	            return
	        }

	        var onHide  = this.props.onColumnHide || emptyFn
	        var onShow  = this.props.onColumnShow || emptyFn

	        visible?
	            onHide(column):
	            onShow(column)

	        var onChange = this.props.onColumnVisibilityChange || emptyFn

	        onChange(column, !visible)

	        if (column.visible == null && column.hidden == null){
	            var visibility = this.state.visibility

	            visibility[column.name] = !visible
	            this.setState({})
	        }
	    },

	    showMenu: function(menu, state){

	        state = state || {}
	        state.menu = menu

	        if (this.state.menu){
	            this.setState({
	                menu: null,
	                menuColumn: null
	            })
	        }

	        setTimeout(function(){
	            //since menu is hidden on click on window,
	            //show it in a timeout, after the click event has reached the window
	            this.setState(state)
	        }.bind(this), 0)
	    },

	    prepareHeader: function(props, state){

	        var allColumns = props.columns
	        var columns    = getVisibleColumns(props, state)

	        return (props.headerFactory || HeaderFactory)({
	            scrollLeft       : state.scrollLeft,
	            resizing         : state.resizing,
	            columns          : columns,
	            allColumns       : allColumns,
	            columnVisibility : state.visibility,
	            cellPadding      : props.headerPadding || props.cellPadding,
	            filterIconColor  : props.filterIconColor,
	            menuIconColor    : props.menuIconColor,
	            menuIcon    : props.menuIcon,
	            filterIcon    : props.filterIcon,
	            scrollbarSize    : props.scrollbarSize,
	            sortInfo         : props.sortInfo,
	            resizableColumns : props.resizableColumns,
	            reorderColumns   : props.reorderColumns,
	            filterable: props.filterable,
	            withColumnMenu   : props.withColumnMenu,
	            sortable         : props.sortable,

	            onDropColumn     : this.onDropColumn,
	            onSortChange     : props.onSortChange,
	            onColumnResizeDragStart: this.onColumnResizeDragStart,
	            onColumnResizeDrag: this.onColumnResizeDrag,
	            onColumnResizeDrop: this.onColumnResizeDrop,

	            toggleColumn     : this.toggleColumn.bind(this, props),
	            showMenu         : this.showMenu,
	            filterMenuFactory : this.filterMenuFactory,
	            menuColumn       : state.menuColumn,
	            columnMenuFactory: props.columnMenuFactory

	        })
	    },

	    prepareFooter: function(props, state){
	        return (props.footerFactory || React.DOM.div)({
	            className: 'z-footer-wrapper'
	        })
	    },

	    prepareRenderProps: function(props){

	        var result = {}
	        var list = {
	            className: true,
	            style: true
	        }

	        Object.keys(props).forEach(function(name){
	            // if (list[name] || name.indexOf('data-') == 0 || name.indexOf('on') === 0){
	            if (list[name]){
	                result[name] = props[name]
	            }
	        })

	        return result
	    },

	    render: function(){

	        var props = this.prepareProps(this.props, this.state)

	        var header      = this.prepareHeader(props, this.state)
	        var wrapper     = this.prepareWrapper(props, this.state)
	        var footer      = this.prepareFooter(props, this.state)
	        var resizeProxy = this.prepareResizeProxy(props, this.state)

	        var renderProps = this.prepareRenderProps(props)

	        var menuProps = {
	            columns: props.columns,
	            menu   : this.state.menu
	        }

	        var loadMask

	        if (props.loadMaskOverHeader){
	            loadMask = React.createElement(LoadMask, {visible: props.loading})
	        }

	        return (
	            React.createElement("div", React.__spread({},  renderProps), 
	                React.createElement("div", {className: "z-inner"}, 
	                    header, 
	                    wrapper, 
	                    footer
	                ), 

	                loadMask, 
	                resizeProxy, 
	                renderMenu(menuProps)
	            )
	        )
	    },

	    getTableProps: function(props, state){
	        var table
	        var rows

	        if (props.groupBy){
	            rows = this.groupedRows = this.groupedRows || getGroupedRows(props, state.groupData)
	            rows = slice(rows, props)
	        }

	        table = getTableProps.call(this, props, rows)

	        return table
	    },

	    prepareWrapper: function(props, state){
	        var virtualRendering = props.virtualRendering

	        var data       = props.data
	        var scrollTop  = state.scrollTop
	        var startIndex = state.renderStartIndex
	        var endIndex   = virtualRendering?
	                            this.getRenderEndIndex(props, state):
	                            0

	        var renderCount = virtualRendering?
	                            endIndex + 1 - startIndex:
	                            data.length

	        if (props.virtualRendering){
	            scrollTop = startIndex * props.rowHeight
	        }

	        var wrapperProps = assign({
	            scrollLeft      : state.scrollLeft,
	            scrollTop       : scrollTop,
	            topOffset       : state.topOffset,
	            startIndex      : startIndex,
	            totalLength     : data.length,
	            renderCount     : renderCount,
	            endIndex        : endIndex,

	            allColumns      : props.columns,

	            onScrollLeft    : this.handleScrollLeft,
	            onScrollTop     : this.handleScrollTop,

	            menu            : state.menu,
	            menuColumn      : state.menuColumn,
	            showMenu        : this.showMenu,

	            // cellFactory     : props.cellFactory,
	            // rowStyle        : props.rowStyle,
	            // rowClassName    : props.rowClassName,
	            // rowContextMenu  : props.rowContextMenu,

	            onRowClick: this.handleRowClick,
	            selected        : props.selected == null?
	                                    state.defaultSelected:
	                                    props.selected
	        }, props)

	        wrapperProps.columns    = getVisibleColumns(props, state)
	        wrapperProps.tableProps = this.getTableProps(wrapperProps, state)

	        return (props.WrapperFactory || WrapperFactory)(wrapperProps)

	    },

	    handleRowClick: function(rowProps, event){
	        if (this.props.onRowClick){
	            this.props.onRowClick(rowProps.data, rowProps, event)
	        }

	        this.handleSelection(rowProps, event)
	    },

	    prepareProps: function(thisProps, state){
	        var props = assign({}, thisProps)

	        if (!Array.isArray(props.data)){
	            props.data = []
	        }
	        props.empty = !props.data.length
	        props.rowHeight = this.prepareRowHeight(props)
	        props.virtualRendering = this.isVirtualRendering(props)

	        props.filterable = this.prepareFilterable(props)
	        props.resizableColumns = this.prepareResizableColumns(props)
	        props.reorderColumns = this.prepareReorderColumns(props)

	        this.prepareClassName(props)
	        props.style = this.prepareStyle(props)

	        this.prepareColumns(props, state)
	        // this.groupData(props)

	        return props
	    },

	    prepareFilterable: function(props) {
	        if (props.filterable === false){
	            return false
	        }

	        return props.filterable || !!props.onFilter
	    },

	    prepareResizableColumns: function(props) {
	        if (props.resizableColumns === false){
	            return false
	        }

	        return props.resizableColumns || !!props.onColumnResize
	    },

	    prepareReorderColumns: function(props) {
	        if (props.reorderColumns === false){
	            return false
	        }

	        return props.reorderColumns || !!props.onColumnOrderChange
	    },

	    isVirtualRendering: function(props){

	        props = props || this.props

	        return props.virtualRendering || (props.rowHeight != null)
	    },

	    prepareRowHeight: function(){
	        return this.props.rowHeight == null? this.state.rowHeight: this.props.rowHeight
	    },

	    groupData: function(props){
	        if (props.groupBy){

	            this.setState({
	                groupData: group(props.data, props.groupBy)
	            })
	        }

	        delete this.groupedRows
	    },

	    componentWillMount: function(){
	        this.groupData(this.props)
	    },

	    componentWillReceiveProps: function(nextProps){
	        this.groupData(nextProps)
	    },

	    prepareStyle: function(props){
	        var style = {}

	        assign(style, props.defaultStyle, props.style)

	        return style
	    },

	    prepareClassName: function(props){
	        props.className = props.className || ''
	        props.className += ' ' + props.defaultClassName

	        if (props.cellEllipsis){
	            props.className += ' ' + props.cellEllipsisCls
	        }

	        if (props.styleAlternateRows){
	            props.className += ' ' + props.styleAlternateRowsCls
	        }

	        if (props.showCellBorders){
	            var cellBordersCls = props.showCellBorders === true?
	                                    props.showCellBordersCls + '-horizontal ' + props.showCellBordersCls + '-vertical':
	                                    props.showCellBordersCls + '-' + props.showCellBorders

	            props.className += ' ' + cellBordersCls

	        }

	        if (props.withColumnMenu){
	            props.className += ' ' + props.withColumnMenuCls
	        }

	        if (props.empty){
	            props.className += ' ' + props.emptyCls
	        }
	    },

	    ///////////////////////////////////////
	    ///
	    /// Code dealing with preparing columns
	    ///
	    ///////////////////////////////////////
	    prepareColumns: function(props, state){
	        props.columns = props.columns.map(function(col, index){
	            col = Column(col, props)
	            col.index = index
	            return col
	        }, this)

	        this.prepareColumnSizes(props, state)

	        props.columns.forEach(this.prepareColumnStyle.bind(this, props))
	    },

	    prepareColumnStyle: function(props, column){
	        var style = column.sizeStyle = {}

	        column.style     = assign({}, column.style)
	        column.textAlign = column.textAlign || column.style.textAlign

	        var minWidth = column.minWidth || props.columnMinWidth

	        style.minWidth = minWidth

	        if (column.flexible){
	            style.flex = column.flex || 1
	        } else {
	            style.width    = column.width
	            style.minWidth = column.width
	        }
	    },

	    prepareColumnSizes: function(props, state){

	        var visibleColumns = getVisibleColumns(props, state)
	        var totalWidth     = 0
	        var flexCount      = 0

	        visibleColumns.forEach(function(column){
	            column.minWidth = column.minWidth || props.columnMinWidth

	            if (!column.flexible){
	                totalWidth += column.width
	                return 0
	            } else if (column.minWidth){
	                totalWidth += column.minWidth
	            }

	            flexCount++
	        }, this)

	        props.columnFlexCount  = flexCount
	        props.totalColumnWidth = totalWidth
	    },

	    prepareResizeProxy: function(props, state){

	        var style = {}

	        if (state.resizing){
	            style.display = 'block'
	            style.left = state.resizeProxyLeft
	        }

	        return React.createElement("div", {className: "z-resize-proxy", style: style})
	    },

	    onColumnResizeDragStart: function(config){

	        var domNode = this.getDOMNode()
	        var region  = Region.from(domNode)
	        var state = config

	        state.resizeProxyOffset = state.resizeProxyLeft - region.left
	        state.resizeProxyLeft = state.resizeProxyOffset

	        this.setState(state)
	    },

	    onColumnResizeDrag: function(config){
	        var resizeProxyOffset = this.state.resizeProxyOffset

	        config.resizeProxyLeft = resizeProxyOffset + config.resizeProxyDiff

	        this.setState(config)
	    },

	    onColumnResizeDrop: function(config, resizeInfo){

	        var props   = this.props
	        var columns = props.columns

	        var onColumnResize = props.onColumnResize || emptyFn
	        var first = resizeInfo[0]

	        var firstCol  = findColumn(columns, first.name)
	        var firstSize = first.size

	        var second = resizeInfo[1]
	        var secondCol = second? findColumn(columns, second.name): undefined
	        var secondSize = second? second.size: undefined

	        //if defaultWidth specified, update it
	        if (firstCol.width == null && firstCol.defaultWidth){
	            firstCol.defaultWidth = firstSize
	        }

	        if (secondCol && secondCol.width == null && secondCol.defaultWidth){
	            secondCol.defaultWidth = secondSize
	        }

	        this.setState(config)

	        onColumnResize(firstCol, firstSize, secondCol, secondSize)
	    }
	})

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function Headers(headers) {
	    this.map = {}

	    var self = this
	    if (headers instanceof Headers) {
	      headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          self.append(name, value)
	        })
	      })

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        self.append(name, headers[name])
	      })
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = name.toLowerCase()
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[name.toLowerCase()]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[name.toLowerCase()]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[name.toLowerCase()] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(name.toLowerCase())
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[name.toLowerCase()] = [value]
	  }

	  // Instead of iterable for now.
	  Headers.prototype.forEach = function(callback) {
	    var self = this
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      callback(name, self.map[name])
	    })
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }

	  function Body() {
	    this.bodyUsed = false

	    if (support.blob) {
	      this._initBody = function(body) {
	        this._bodyInit = body
	        if (typeof body === 'string') {
	          this._bodyText = body
	        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	          this._bodyBlob = body
	        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	          this._bodyFormData = body
	        } else if (!body) {
	          this._bodyText = ''
	        } else {
	          throw new Error('unsupported BodyInit type')
	        }
	      }

	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this._initBody = function(body) {
	        this._bodyInit = body
	        if (typeof body === 'string') {
	          this._bodyText = body
	        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	          this._bodyFormData = body
	        } else if (!body) {
	          this._bodyText = ''
	        } else {
	          throw new Error('unsupported BodyInit type')
	        }
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(url, options) {
	    options = options || {}
	    this.url = url

	    this.credentials = options.credentials || 'omit'
	    this.headers = new Headers(options.headers)
	    this.method = normalizeMethod(options.method || 'GET')
	    this.mode = options.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(options.body)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Request.prototype.fetch = function() {
	    var self = this

	    return new Promise(function(resolve, reject) {
	      var xhr = new XMLHttpRequest()
	      if (self.credentials === 'cors') {
	        xhr.withCredentials = true;
	      }

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(self.method, self.url, true)
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      self.headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          xhr.setRequestHeader(name, value)
	        })
	      })

	      xhr.send(typeof self._bodyInit === 'undefined' ? null : self._bodyInit)
	    })
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.url = null
	    this.status = options.status
	    this.statusText = options.statusText
	    this.headers = options.headers
	    this.url = options.url || ''
	  }

	  Body.call(Response.prototype)

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (url, options) {
	    return new Request(url, options).fetch()
	  }
	  self.fetch.polyfill = true
	})();


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var React     = __webpack_require__(1)
	var assign    = __webpack_require__(38)
	var normalize = __webpack_require__(51)

	function emptyFn(){}

	function toUpperFirst(s){
	    return s?
	            s.charAt(0).toUpperCase() + s.substring(1):
	            ''
	}

	var ALIGN = (function(){
	    var MAP = {
	        left  : 'flex-start',
	        start : 'flex-start',
	        center: 'center',
	        right : 'flex-end',
	        end   : 'flex-end'
	    }

	    return function(value){
	        return MAP[value] || value
	    }
	})()

	var PropTypes    = React.PropTypes
	var DISPLAY_NAME = 'ReactButton'

	var THEME = {
	    'default': {
	        //default type
	        style: {
	            border    : '1px solid rgb(46, 153, 235)',
	            color     : 'rgb(84, 84, 84)',
	        },
	                overStyle: {
	                    background: 'linear-gradient(to bottom, rgb(125, 191, 242) 0%, rgb(110, 184, 241) 50%, rgb(117, 188, 242) 100%)',
	                    color: 'white'
	                },

	                activeStyle: {
	                    //-6 lightness from overStyle
	                    background: ' linear-gradient(to bottom, rgb(106,182,240) 0%,rgb(91,175,239) 50%,rgb(96,178,240) 100%)',
	                    color: 'white'
	                },

	            //disabled
	            disabledStyle: {
	                //theme properties
	                background: 'rgb(221, 221, 221)',
	                border: '1px solid rgb(147, 147, 147)',
	                color: 'rgb(128, 128, 128)'
	            },

	            //pressed
	            pressedStyle: {
	                background: 'linear-gradient(to bottom, rgb(22,135,222) 0%,rgb(20,129,212) 50%,rgb(20,132,218) 100%)',
	                color: 'white'
	            },

	                overPressedStyle: {
	                    // +14 lightness from pressed style
	                    background: 'linear-gradient(to bottom, rgb(48,153,234) 0%,rgb(36,148,234) 50%,rgb(41,151,235) 100%)',
	                },

	                activePressedStyle: {
	                    background: 'linear-gradient(to bottom, rgb(58,159,236) 0%,rgb(45,153,235) 50%,rgb(50,155,236) 100%)'
	                },

	            //focused
	            focusedStyle: {}
	            //---NONE ----
	    },
	    'primary': {
	        style: {
	            background: 'linear-gradient(to bottom, #4ea9ee 0%,#41a2ed 50%,#46a5ee 100%)',
	            color: 'white'
	        },

	                overStyle: {
	                    // + 10 lightness from primary
	                    background: 'linear-gradient(to bottom, rgb(96,178,240) 0%,rgb(83,171,239) 50%,rgb(88,174,240) 100%)'
	                },

	                activeStyle: {
	                    // -5 lightness from primary
	                    background: 'linear-gradient(to bottom, rgb(64,162,236) 0%,rgb(50,155,236) 50%,rgb(55,158,237) 100%)'
	                },

	            //disabled
	            disabledStyle: {
	                //theme properties
	                background: 'rgb(116, 144, 166)',
	                color: 'rgb(190, 190, 190)'
	            }

	            //pressed
	            //---NONE---

	            //focused
	            //---NONE---
	    }
	}

	var ReactButton = React.createClass({

	    displayName: DISPLAY_NAME,

	    propTypes: {
	        fn: PropTypes.func,
	        onClick: PropTypes.func,

	        primary: PropTypes.bool,
	        disabled: PropTypes.bool,
	        pressed: PropTypes.bool,
	        defaultPressed: PropTypes.bool,

	        href: PropTypes.string,
	        align: PropTypes.string,

	        style: PropTypes.object,

	        className       : PropTypes.string,
	        activeClassName : PropTypes.string,
	        overClassName   : PropTypes.string,
	        focusedClassName: PropTypes.string,
	        disabledClassName: PropTypes.string
	    },

	    getDefaultProps: function() {
	        return {
	            isReactButton: true,
	            applyDefaultTheme: true,
	            buttonStates: ['focused', 'pressed'],

	            'data-display-name': DISPLAY_NAME,

	            align: 'center',

	            defaultStyle: {
	                boxSizing     : 'border-box',

	                display       : 'inline-flex',
	                alignItems    : 'center',
	                justifyContent: 'center',

	                userSelect    : 'none',
	                textDecoration: 'none',
	                cursor        : 'pointer',
	                overflow      : 'hidden',

	                //theme properties
	                //fontFamily: 'Arial',
	                // fontSize  : '0.9em',
	                whiteSpace: 'nowrap',
	                padding   : 5,
	                margin    : 2
	            },

	            defaultDisabledStyle: {
	                cursor: 'default',
	            },

	            defaultLabelStyle: {
	                display: 'inline-block'
	            },

	            ellipsisLabelStyle: {
	                textOverflow: 'ellipsis',
	                overflow: 'hidden',
	                whiteSpace: 'nowrap'
	            },

	            ellipsis: true,

	            href: ''
	        }
	    },

	    getInitialState: function() {
	        return {
	            mouseOver: false,
	            active: false,
	            defaultPressed: this.props.defaultPressed
	        }
	    },

	    isFocused: function() {
	        return this.state.focused
	    },

	    isActive: function() {
	        return !!this.state.active
	    },

	    render: function(){
	        var props = this.prepareProps(this.props, this.state)

	        return (props.factory || React.DOM.a)(props)
	    },

	    prepareProps: function(thisProps, state) {

	        var props = {}

	        assign(props, thisProps)

	        props.theme = this.prepareTheme(props)

	        var pressed = props.pressed != null? props.pressed: state.defaultPressed

	        if (pressed != null){
	            props.pressed = pressed
	        }

	        props.active    = props.activeState == null? !!state.active: props.activeState
	        props.over      = props.overState == null? !!state.mouseOver: props.overState
	        props.focused   = props.focusedState == null? !!state.focused: props.focusedState

	        props['data-active']  = props.active
	        props['data-over']    = props.over
	        props['data-focused'] = props.focused
	        props['data-pressed'] = props.pressed
	        props['data-disabled'] = props.disabled

	        props.style     = this.prepareStyle(props, state)
	        props.className = this.prepareClassName(props, state)
	        props.children  = this.prepareChildren(props)

	        var handleClick = this.handleClick.bind(this, props)

	        props.onClick = typeof props.interceptClick == 'function'?
	                            props.interceptClick.bind(this, handleClick):
	                            handleClick

	        props.onFocus      = this.handleFocus.bind(this, props)
	        props.onBlur       = this.handleBlur.bind(this, props)
	        props.onMouseEnter = this.handleMouseEnter.bind(this, props)
	        props.onMouseLeave = this.handleMouseLeave.bind(this, props)
	        props.onMouseDown  = this.handleMouseDown.bind(this, props)
	        props.onMouseUp    = this.handleMouseUp.bind(this, props)

	        return props
	    },

	    handleFocus: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            focused: true
	        })

	        ;(this.props.onFocus || emptyFn)(event)
	    },

	    handleBlur: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            focused: false
	        })

	        ;(this.props.onBlur || emptyFn)(event)
	    },

	    handleClick: function(props, event) {
	        if (!props.href || props.disabled){
	            event.preventDefault()
	        }

	        if (props.disabled){
	            return
	        }

	        if (props.pressed != null){
	            var newPressed = !props.pressed

	            if (this.props.pressed == null){
	                this.setState({
	                    defaultPressed: newPressed
	                })
	            }

	            ;(this.props.onToggle || emptyFn)(newPressed, event)
	        }

	        ;(this.props.onClick || emptyFn)(event)
	        ;(this.props.fn || emptyFn)(props, event)
	    },

	    handleMouseEnter: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            mouseOver: true
	        })

	        ;(this.props.onMouseEnter || emptyFn)(event)
	    },

	    handleMouseLeave: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            mouseOver: false
	        })

	        ;(this.props.onMouseLeave || emptyFn)(event)
	    },

	    handleMouseUp: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            active: false
	        })

	        window.removeEventListener('mouseup', this.handleMouseUp)

	        ;(this.props.onMouseUp || emptyFn)(event)
	        ;(this.props.onDeactivate || emptyFn)(event)
	    },

	    handleMouseDown: function(props, event) {

	        if (props.disabled){
	            return
	        }

	        this.setState({
	            active: true
	        })

	        window.addEventListener('mouseup', this.handleMouseUp)

	        ;(this.props.onMouseDown || emptyFn)(event)
	        ;(this.props.onActivate || emptyFn)(event)
	    },

	    prepareTheme: function(props){
	        var theme  = props.theme
	        var THEMES = props.themes = props.themes || this.constructor.theme || THEME

	        if (typeof theme == 'string'){
	            theme = THEMES[theme]?
	                        THEMES[theme]:
	                        null
	        }

	        return theme == null?
	                THEMES.default:
	                theme
	    },

	    prepareChildren: function(props) {
	        var children = props.children

	        if (props.label){

	            var labelProps = assign({}, props.defaultLabelProps, props.labelProps)
	            var defaultLabelStyle = assign({}, props.defaultLabelStyle)

	            if (props.ellipsis){
	                assign(defaultLabelStyle, props.ellipsisLabelStyle)
	            }

	            var labelStyle = assign({}, defaultLabelStyle, labelProps.style, props.labelStyle)

	            labelProps.style = labelStyle

	            children = React.createElement("span", React.__spread({},  labelProps), 
	                props.label
	            )
	        }

	        if (typeof this.props.renderChildren === 'function'){
	            return this.props.renderChildren(children)
	        }

	        return children
	    },

	    prepareClassName: function(props) {

	        var className = props.className || ''

	        if (props.disabled){
	            if (props.disabledClassName){
	                className += ' ' + props.disabledClassName
	            }
	        } else {
	            if (props.active && props.activeClassName){
	                className += ' ' + props.activeClassName
	            }

	            if (props.pressed && props.pressedClassName){
	                className += ' ' + props.pressedClassName
	            }

	            if (props.over && props.overClassName){
	                className += ' ' + props.overClassName
	            }

	            if (props.focused && props.focusedClassName){
	                className += ' ' + props.focusedClassName
	            }
	        }

	        return className
	    },

	    prepareComputedStyleNames: function(props){

	        if (typeof props.computeStyleNames == 'function'){
	            return props.computeStyleNames(props)
	        }

	        var names = ['style']

	        if (props.disabled){
	            names.push('disabledStyle')

	            return names
	        }

	        if (props.focused){
	            names.push('focusedStyle')
	        }
	        if (props.pressed){
	            names.push('pressedStyle')
	        }

	        if (typeof props.addStateStyle == 'function'){
	            props.addStateStyle(names)
	        }

	        if (props.focused && props.pressed){
	            names.push('focusedPressedStyle')
	        }

	        if (typeof props.addCombinedStateStyle == 'function'){
	            props.addCombinedStateStyle(names)
	        }

	        //names is something like ['style','focusedStyle','pressedStyle', 'focusedPressedStyle']
	        //
	        //now we add over and active styles

	        var overNames
	        if (props.over){
	            overNames = names.map(function(name){
	                return 'over' + toUpperFirst(name)
	            })
	        }

	        var activeNames
	        if (props.active){
	            activeNames = names.map(function(name){
	                return 'active' + toUpperFirst(name)
	            })
	        }

	        overNames   && names.push.apply(names, overNames)
	        activeNames && names.push.apply(names, activeNames)

	        return names
	    },

	    prepareStyle: function(props) {

	        var style = assign({}, this.prepareDefaultStyle(props))

	        var styleNames = this.prepareComputedStyleNames(props)
	        var theme      = props.theme
	        var THEMES     = props.themes

	        if (theme){
	            //apply default theme first
	            if (props.applyDefaultTheme && THEMES.default && theme != THEMES.default){
	                styleNames.forEach(function(styleName){
	                    assign(style, THEMES.default[styleName])
	                })
	            }

	            //then apply theme
	            styleNames.forEach(function(styleName){
	                assign(style, theme[styleName])
	            })
	        }

	        ;(props.onThemeStyleReady || emptyFn)(style, props)

	        //TODO apply default non-theme first to typed buttons
	        //then non-theme
	        styleNames.forEach(function(styleName){
	            assign(style, props[styleName])
	        })

	        ;(props.onStyleReady || emptyFn)(style, props)

	        return normalize(style)
	    },

	    prepareDefaultStyle: function(props){
	        var defaultStyle = assign({}, props.defaultStyle)

	        if (props.block){
	            defaultStyle.display = 'flex'
	        }

	        defaultStyle.justifyContent = ALIGN(props.align)

	        if (props.disabled){
	            assign(defaultStyle, props.defaultDisabledStyle)
	        }

	        return defaultStyle
	    }
	})

	ReactButton.themes = THEME

	module.exports = ReactButton

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = _interopRequire(__webpack_require__(1));

	var Snippet = _interopRequire(__webpack_require__(88));

	module.exports = function (name, snippetProps) {

		snippetProps = snippetProps || {};

		function req() {
			return __webpack_require__(84)("./" + name + ".example");
		}

		return React.createClass({

			name: name,

			displayName: "example_" + name,

			getInitialState: function getInitialState() {
				return {
					props: {}
				};
			},

			render: function render() {

				var cmp = React.cloneElement(this.state.cmp || req());
				var code = __webpack_require__(85)("./" + name + ".example");

				var description;

				if (snippetProps.description) {
					description = React.createElement(
						"p",
						null,
						snippetProps.description
					);
				}

				return React.createElement(
					"div",
					{ style: { marginTop: 20 } },
					description,
					React.createElement(
						"div",
						null,
						cmp
					),
					React.createElement(Snippet, _extends({}, snippetProps, {
						code: code,
						updateCmp: this.updateCmp
					}))
				);
			},

			updateCmp: function updateCmp(cmp) {
				this.setState({
					cmp: cmp
				});
			}
		});
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZwAAAGcCAIAAABiI4FuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkNCNEM5QTEwMTE1MTFFNDk2NkQ4NDhFNUMzM0JGRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkNCNEM5QTIwMTE1MTFFNDk2NkQ4NDhFNUMzM0JGRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQ0I0Qzk5RjAxMTUxMUU0OTY2RDg0OEU1QzMzQkZGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQ0I0QzlBMDAxMTUxMUU0OTY2RDg0OEU1QzMzQkZGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvEC6toAAAsdSURBVHja7N1dbuM2FIBRdxAgD8nSu7EuortIHvJWAwIElhRl2vnjvTwHRTCTpEBryZ8uJdn+6+9//r0AZPHHQwCIGoCoAYgagKgBogYgagCiBiBqAKIGiBqAqAGIGoCoAYgaIGoAogYgagCiBiBqgKgBiBqAqAGIGoCoAbk9eQh+0vPL6/gvf7y/ecTApBbAVqvzr/cWEBC1XyvaVqv9a1Wx/TsmNRC1JCvQsnqAqAVYe+5/3v/azmUmNRC1SJPa1qzrX7d/yortP/Jwwb1c/fzNSa2KXTm4mdTApBZpWOtNYeWPTGogapGWn+WSc5vRDn8EiFqY5ec2l/XOoJnU+OEDrajxveEzqfEDOct3/5Co/cJuVL1+oLoeWt2dCz8zoJ3vb+VlelHjeGc6/2pS42eKdnKnZDXNRdkn3dLxC+tKmK1oI6NclL1X1GDdJeelf6k9aNFEDZZeMRyeI2u/GWuF4ZwaLFq0wQEt3DkTUYNFi9b7hepWynD/j6IG6+qdUCvTFq5rogbcGOui3KEmaiBbN06ZRVyKihpwOZzI2gHNKwqAkGm7dG7sCHElVNSA46711qGiBsTm5lsAUQMmW3KO/EjUAGvM7+UF7cDBOBa3caIGpJrULD+BVEQNEDUAUQMQNQBRA0QNfowPaeZbuU+NX8hZ712kQdSIUbFrvwxoWH6SZ5k5+PmSYFJj9pyBSY1sRTt5G2j5I8CkdrKbOjG8mvbDwNvd4/odOwaTTmo3Pxww1qcH8slD2uGnq0X58A5Wn9RGPqZBzpZadbaf731yG4dhjbkmtd6FrTTvOcfD5xwcyYgXtcO9tj1KX9xvuV7RTn7ZIM/Uk1qVs21/PewaKTlQkSdq1VG32rnt6/QKGPqzcllrUvuSFQpphrWR45zroXytx69+PnCOzL67jv2C5vnpM7sEU09q1ThWXctntWHt/PWeBjTmmtTa2zW27+zHZydNuNy6OA7TTWrti2AunZcN2I/XHNYUjWBRa+e13plgD/TiXdv2DXsC8y4/z9cXcobdgGCT2shR164sYaYzgk1q9lfsGCSZ1ABEDUDUAEQNEDUAUQMQNQBRAxA1QNQARA1A1ABEDUDUAFEDEDUAUQMQNQBRA0QNQNQARA1A1ABEDRA1AFEDEDUAUQMQNUDUAEQNQNQARA1A1ABRAxA1AFEDEDVA1ABEDUDUAEQNQNQAUQMQNQBRAxA1AFEDRA1A1ABEDUDUAEQNEDUAUQMQNQBRAxC1q+eXV1sdEj9HnmwqoHqOXP/w8f4magFs22nbcnG3GTjqr778vG6t8shTpg1I9gRZ5ZxaNZfpGrQD2vV5cf1nD1zQJ8if9Busd3bA8hPap0OCI/2fdbbW3rh9s20HJfMactb7fsRnR+aonWyPsmvWodEn8fIfj8kDz4v96F79KOizI3PUBjeJdWjclt31I8YLFfoBTL78rLpWXd9JcxJhtZyNHJls1ruO9JkWoU8rbMXyckG18dyzFnTKaDdZe6CycR94ptx8BpnUpj462emjF21kcDOyPTD5hrbWfWrl9lO0NDNab4tnuk3hW3PWnp+pfi3WInShF7SXG0bRIhat7NTgc0zXvuRhN6nF6JqiLbXRufnIHD4vXCiwizP16GHrnywzy5+OrExNavCpRdDlE2e1taz3aJw/MkFXoKJG4Mwd/nTklSScPyDlHZ3hDglPtitRhovypE/1bBx53Yii3fuIBf1fM6kR5onXmxrU6kuW5GkW6aKGCWXdrqU82yhqxJspPjNiuGiQPm2ixuw5OzmZvT8hR5al3mZqkda7UEDIpeLgvQgWngsyqZFhfBAsRI38A53PphA1CJatkdcYeCNcUYMwK9CTn1aXBXRN1CDwGtNiU9Qg1TTXe822xokaTNSsh+/wQNQgXtd6gYv7Dq6IGkt37fxFBYomajCv8xdO3fw1cvMyKYINa+VH51wGXvVpRhM1mD1t7Ucd3ly0ImoQY2STM0SNVGkrRzYh4+JCAVkbh6gBiBqAqAGIGoCoAaIGIGoAogYgagCiBogagKgBiBqAqAGIGiBqAKIGIGoAogYgaoCoAYgagKgBiBqAqAGiBiBqAKIGIGoAogaIGoCoAYgagKgBogYgagCiBiBqAKIGiBqAqAGIGoCoAYgaIGoAogYgagCiBiBqgKgBiBqAqAGIGoCoAaIGIGoAogbweU8egkCeX173P3+8v3lAwKQWOGdl0arAAaIWzOFcpmsgaoFXndeuWXKCqCUp2r781DUQtfBF6/31Grj2XBuIGjGK1n5z/7OugagBosbPcvoMRG3RrskfiFq8rm1/6H0FNl4mlaFrgEkNELXv5KYEINukpmuA5SfAfFHzqkYgfNR6L1r0YkYgXtSqFy22b6qja0CYqJ0EyxuHsSCH8NhR27ffXq5yvdnOa7Y3i3TNrh57+XkeO4cv1hzTpC1k1MpmnbwDYm92g6wczgNPaiedqlpW/qYtTdYx7fBCmR0+2PJzvGvlBraZyb0ClbZgUdu20Mi68nAdailK1pYdJsze/rCnX9l+5WY7eSd+93aw+LBm/583al+yeRzHyDqm2Z/jRa33goHybrWTee3L+wizzWXV3u5s2sN+4ebbwy06eOnAgpQ0DlealiPxola9M/Vl7JY0Ry2S5ezwg6jLhYuihYna5f+n/6t7NXQNaSNe1M7PLLQzubMMLJU2Y1rgqD2wDoWsabu42zZB1EbWoYP360KOkc1+nmFSO5zaLu5CZOGRjTxRq6az9lIpwLlZPqG9N5fJGRB7UvOGHEC25acBDcgTNTkDsk1qugZkW34CiBqAqAGiBiBqAKIGIGqAqAGIGoCoAYgagKgBogYgagCiBiBqAKIGiBqAqAGIGoCosbbnl1cfC4uokado1R9A1AhfNF1D1MhWNF1D1MhWNF1D1MhWNF1D1MhWNF1D1Ajs4/1t/wqiRtSK3eza9lfzGqLGostVRA3CjHW6JmoQbxBry7V9R9cQNeJ1rdcsXUPUyLn21DVRA11D1EDXEDX4Jvu5trZriBrMOH+NfN1/f/+rrokaxCuafiFqgKgBiBqAqAGIGoCoAaIGIGoAogYgaoCoAYgagKgBiBqAqAGiBiBqAKIGIGoAogaIGoCoAYgagKgBiBogagCiBiBqAKIGIGqAqAGIGoCoAYgagKgBogYgagk9v7xWX2GpnV/UkhdN11gzZDPv+aL2iI/3t+oPsMKxPMTIJmp3t6z8alJjnZ0/yiH8ydb6zCHLpEbWXb08ePdWKuVvilrUg1U1mk24ReELD+GHK5LJlymWn90t2m6z9jtt0Q7/RQh3/D6J1/6dOdekonZ32nqZkzPyde0zvyBqs2/R8WvbFqSkOZbf3O0nPJY7pzbUtZvzWqBrQzCYtpu79JxLE1EDuofz9uJY+TtzHsgtP7vHn7uOQtW47uQaiNq8RRspVHmdSNdI8CzYT5a149i+t895cczy8yBP7V05N7fcflqtvNrtwSTNIvT8QC5qkTbnvf+KlpHpKXA4rJXfdJ8aEHtNOv9/p6gNbcXzw1F5isGDRrKRrVxmznzRU9TuPij1NmQ7mUsbiRek50+HGTindveG3K4JtLcmejMilno6iFrs7dfO3r0zqS4UgOVnyMWpBwFELVXCqvvRZA5ELeqCdOR6KPBbnFO7I2fVpOY8GpjU8jROyEDUks9ugKgBiBqAqAGiBiBqAKIGIGoAogaIGoCoAYgagKgBiBogagCiBiBqAKIGIGqAqAGIGoCoAYgaIGoAogYgagCiBiBqgKgBiBqAqAGIGoCoAev5T4ABANQNxtf5IjSMAAAAAElFTkSuQmCC"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACCCAYAAACkRjFvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODFBQTgzMjZFREI0MTFFM0I3MEFDNUZFRDU2MkEwOTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODFBQTgzMjdFREI0MTFFM0I3MEFDNUZFRDU2MkEwOTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MUFBODMyNEVEQjQxMUUzQjcwQUM1RkVENTYyQTA5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MUFBODMyNUVEQjQxMUUzQjcwQUM1RkVENTYyQTA5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjGU5rgAABVWSURBVHja7F0JeBRVtr7dCSQhG0kgMULCIsMTUbYhbFGISdgkMOICsj0HmVEGRtT3EJ7MuM17IiJ8gwsiwyg4M+Iw6KAYwhYRApJxQJbskBAeCSEb2fd0ujP/SSrzBcxS1V1VXbe7zvedr/I1dNW9p/7+77nnnnuuobm5memii9xi1E2giw4sXbgR19s/MBgMulV0kSy3u1Q6Y+miD4Uq/fIioWulfOfEiRO/zs3N/ZVuPR1YHQHKE7oVf8ZDB0j5rslk6l1YWPjB5cuXD1dVVQXp1tSB1Qaq+3G5CF1Bbqa196msrJx29erVtJycnCd0YDk3oNyhb9NoBr2r3T9VWXvPxsZG/+Li4s/AXntKS0t768ByPlCNxeUH6OoO7GCxdYYE9pp3/fr1VPheM3RgOQegekBfx5+J0Hs6c5vkeBbY606wV9ylS5e245keOrAcF1T34vI99BXWQQyvndTK9UyLxWKAQ/90SkpKMhhsog4sxwKUixBCOAsdLcYPl7sNDQ0NdxUVFZ2E7/UW2uKqA4t/UN2Ny3fQDVA3kV+rVaItYC8X+F5rUlNTz8H3ulcHFp+AMkKfx5/noOMlfr1KybbV19ffB9/r7JUrV9aijQYdWPyAahAux6C/h1rjNJcq3Uawl1tZWdkGsNd38L0G6sDSNqAM0KdZa7Bzig23KlKrzWCviTdv3kzOysp6RgeWNkHVD5c46Haot423K1Gz7U1NTV7l5eUfgr0O5ufnB+nA0g6oFuOSDJUjGGlRG1htUldXN6OwsDAVvtc8HVj2BVQg9Av8+Weon0y3zTcYDCZ79QnsFQD22pOenr67pKTEVweW+qB6HJcU6CMy3zpHA31jNTU1C3Jzc4m9punAUsfo/tDP8OffoH0VeESOVvoK9uoH9jqYlpa2LScnx0MHlnKgmiOwlJJpKdka67OxtrZ2eWlpaRLYa7wOLHmN6wvdhT+/ggYr/LjLWrQB2GsI2OsUfK/1PCwJGTkA1TRhxvekSo9M07AtXOF7vZSUlHQ2KyvrHh1Y1hnRG0oxqUPQEJUea4amav3HZjKZRlZUVPwA32uNVpeEjBoFFUXNKXpOUXQ1DZdmMBhqOHEP3OF7vZWcnJwA9hqoA6trY/WCvsta1/kG2aEJ/+RtltzY2Hh/ZWXlxYyMjF/qwOoYVJQEdwH6rB3blcg4FIvF4lNdXf0H+F4HMjMzg3RgsX9vaNiIP09Cf2Ln5hxnHAvY6yEALBns9ZhTA6vdhoYXoS52tkUm/KsrjHMxm819Aa6/Xbx48VOwl69TAQuA6iliQ4Pacpg5jhgwc1xYVVWVnJ6eHu0UwAKgRgpOcncbGtSWfczBBL5XCGaOhy9cuLA1Ozvb3SGBRcE96DoBVCM19g5u8O5fdWF3Y1NT04qKioqLaWlp4xwKWOgcDXenoW9Ae2rQ/p/Bv7IwBxb4XkPBXqfAXm8cO3bMlWtgCRsaVgsOephWRwzoh8w5pAfYa52fn9+ZlJSUYVwCC4Ci0EEClGojuGvY2F+DrbKYEwnYa1R9ff0PSUlJq5VaEjIqACja0EBBTgp2hnNg57eZc4pHY2Pj2xgaj0NDNQ0sAIoS7w5AaVmmFwfGPQC2+s7Wm2B4OYe+V/KILrDXZGgSwLVM1njH7bUjra1BivuECVP2frzYFDoG/U2S42axsbFDAwICdvXo0YPb+gxGozEWl2VjxowpsuL9y89YQs7UMY5ARbJFLlCRxMTEXN68efMDdXV1r1oslgYegYV2x+BdJp8/f/5RuzMWvj+VfrAaDSN0JpR+PEKpFJkDBw6Egb12urq6DueUvJrBXp/CwV85adKkSpE4kI+xcDPKwf6SM1A1QhcomXc1a9asMwDXWLDXu7CRmUNgGcBei3v27Jl87ty5KFUZC9+7A5fz0Ds4M9qz6OP7aj0sPj4+2tvbe4eLi8tALqmrudkC9tpWUVGxOjIysl5RxqJ6U7js5hBU29QEFUl0dHR8UlLSaAwrn5LpuKMug4GC3Ct9fX0vnDlzRnSQ2yrGwnfW4PIWZzaiF7sE/bPbyz127Ng8Ly+v98AAgZz6Xo2w38asrKzX5s+fb+6KsSQDC/9/MGvdNdOLI4PQFvyl6Jvd/Z39+/cHw7H/yM3NbSbjV841NjYuhmOfLiew9uMymyMjULD2eXsyVUcjxfHjx5d7enpuQLt8OAUXTX5eHTt27GabfSyh0D4voKLCHivw4p7TGKhaTBkREbEtPz9/rMlkSuQUWJ7QTZmZmX+w2cfC/6VF5Qc46DSlGC9CX76X+MOhzlPsaQKUapfSfkZ/1loVsI611ibNF+5PM+JEW8MWjz32mMuqVavWubu7r4Pv5c4LqjCUs9DQUObj40PLYjFWD4X4f2RsHn5du6DEUmIDe1TwlupqzYfSCkKAhGc1sdby3p9D9+KZedY2+vDhw2PxkmhJSNNBVcJHUFAQCw4OpiUg+mgfPnvElqHwBY0DiphkDjq5VAyoYIj+0DfxJ4GBgrwLJIKKhBLmKIODap3m4H77hM22kmX69Oln4+LiNB1U7dWrFxs2bBjr169fG6iYwOTWDYX0EnC5yrSVo357KGEV2l4qAlC07+5lKG3wVGrF4BR0DdpjFcNTUNXLy2uHq6vrQC0Yl0BEYOrbt29H+PgLPltiLWMt0iioCqGPomOLuwOVkHNP2ayU1LeSKbsMRZOc03jeXqjk6jgUVE1OTh7d0NDwF2bnoKqvry8bPnw4CwwM7MxNqrKFsagCyzCNgYoKr61Ee2+KYCk6jeIjJu5UCrmlHPoi2vlHa778zTffPO7t7f2+2kFV+HosJCSE+fl1W4FzI/q2VjJj4Qv3aQxUxdB56Mz87kAlZLM+L0w6RtupvXS03A6BvSQfMxcVFbU3Ly9vJNgrTq0G9+nTp4WlRICKpLrD4VPEF+doCFR/h94LQO0V8YOgl7hfcKzdNNB22vZOmaY/lfrFuXPnFoSHh8dUV1evUDJT1d3dnQ0dOpQNGDCAubiI3phebi2wtBAQJf+JUl3InyoSAapRrHVnUIzGhm+qoHMK7XvKiu+2D6qeljuEQOEDmvFh2LXGz5UGLCoky+y/bYtYZzg6/1eRcan/ZK2HMg3W6AyWgqAfoZ00PEoOiM6ZMydz8+bNk2tra1+2WCz1tjYGs88WQN15553tQwhS5KZk5x3/NlcYfuwhZaw10PlnkYByE4Y9nk6TPyvMaq2q1Hzo0KGfYtZGQVXJJ4nRUNcWQrBR6EefJtV5t9fyDe30uU8CqCjOdpwzUJGMFfwuq2q5z5gx44e4uLiwurq6d6QEVXv37t3inMsAKpJcaxjrpBCTUUsqoC+gDTtFOx7NzZG40DDZl/ErBIpXoeutXTCPj4+PwrD2x66CqhRCoPU9ApZMUoL29hHegzjGErJE1ZyiHxJYaqdIQBmEhMMjnIOqZWSC/h/0K2tCEiTR0dHfCEFVYvkfgZPYiVhKRlCRdDqEd8pY+JxiV2qUpqbpMxVe2yH214q2UQ4TAfAR5niSSaEJW7amCUFVylQN8vDwaGEpctIVECqmsrAjxmr5oL22+/yJZuUlHjpA0py7uXk4NKPZsaVGONHMatm3b98dubm5lzFzVLKdL3eGo67W/4Yq9ZMEXbOSkpLrmNEswS8pXwKoaMigyjD/wRxbKO37PfQ30ZrylcJkhhLwlK7pmt7ZP3Q1K7xb7lYQkgsLC1laWhrLz8/vn52dnYpflegTJ4Scddogu8vBgUXDYJhUUAl+53LWegiCGjn1F63xsajynmzBUUyJ2bVr1+i4tB89D6wVGxwc/JSPj0+xBCOSAbcwbSzXyCmU0fAM7FIrEVRDyE+FRqjUToozBrT5xaIzSPF5AS5BcrAU2IkVFBT82MFrJ25ubiX+/v4r+/Xrt0fCvan0Ia0bhjoAoGiH9n/B/lsl2pfcg+eEWaWaR88dRVuntX/P3QJLiGJTZqBNRbmqq6tbWKq+XtzKAz0brPUFpsZPY1pcKtKwFGqg8wujOAYVZbE+LjUxEH2niDulA42zQ5tfR3tf6wxYnflY/W0BFWYiDL4Tu3TpkmhQtTWuoqLi0evXr6fl5eXNFQlGGj6nQ99kHO40hnzLWsspJUqwEyUt/pa1LrSPs1O7j3X5XjphLCr28Q9rngZgsJycHDolwaZW04Kot7f37iFDhvxKwsaIn+HyCZSHs5TJ8Jug69C/JgmgGinE8Ebbse3k//mj3Q1SGUtyJLupqYldvXqVZWVl2QyqNtYDSBempKRkwEd7SCR7fSVMOFI0DqpKYehbIxZUwqELNPScsTOoWli2PaikhBv6SHlKaWkpS01NbbnKLQ0NDcEAViwAuxOG9RQBLopc01a13RoFFa1mjEc7v5DAUmMEQNF6Yg8N9KHbwxY6A5aonFRiJmIoYipiLKUE7GUoLy//OcCbcePGjWgR4KqBLhJmSyaNhRIIVBkiAeUGpdke7V0coZE+UCzxa2uB1W3Bj+Li4pZAJ/lUagkmAv0LCwsPX7ly5UMY3EMEwKhuA+37s/fhS7ST5UnaJgWtlhBKIef8N0xbO6S+FZPF2xmwvLp4uS2zPXLQzWb191XimcaysrJnAOo0zB4niwAXDSE0lHxsp1kjldGkrI0/iQQUHbNHJaIoC1aLu6I/ETX56uRzn45CARTkTE9Pb4lP2Vvq6uoGFhUVfQv2eqe7FF+aVUKp3PSDTL3DxC9D5+K5s6HXRIKKKi5TTYg1TJv7OCna/oUtwLolhlVbW8syMjJYXl5ey2xNK4K2EHutAnklA/QTRLDXCdZ6QBTtgs5WqFmZwv0pZfdLkYDygFI5INpBfTfTrnyAPtWJmqF3EseilfFfEohoOYYWjrtajtGCuLi4mH18fH4/ePDg36APjSJeJi2F0A4kWnOkCYEtB3HS1JsSDrdDD0o58EmIGVJy3k+YtoVsOhB9y++kH6KA9SmGu4VSlmO0Ir169UoPDAxc3KdPn3MSXi6FVyhpMAJKfpuYevU0IaBoOR2gGQu7lUtppwDs/4G+xrRbE+N2tlrZRX+6Bxb8lrcwxKxhnArYy+Tr67tx0KBBr0mJarczEm17u4u11sei2SfFz2j6SxFn8peypGYfdHB/ytOfyolJKSVlCPpcYBOwSM6ePUubKmnc780rwMBeyWCuRWCwZK20CfYmwB7kYOhrL7csONsELJJTp06FuLm57cJnkbyCy9XVtcHPz++N0NDQ9fYubktp1bgchQZzZEKa3Y6E7eplA1abnDlzhorur2ddxLe0Lp6enuf8/f0XBQUFZdgJVFRchTIZAjgyG4FjCt79SRH9ExVuuEXCwsLeM5lMo/Hl73gFVk1NzRjMcM9jQkIld4wqg4rSkOI4AxXJejGg6khEG3jixIlZsbGxk2GkF6G1PIKrqanJvbi4eENGRsZpgGyISqCi5THa2d2fM3NRvtWr1n7ZqpMpTp8+PQy+yydGozGMcSo9evSo6d2798vwvbYoWa4b9qWlnCWcmYcmO1FCEqXYftoOLJI9e/a4DBw48LcA10v4DrcbGry8vE727dt3SUBAwDUFQEWVbz7hzCRUi2ES3ul1iX2VB1htkpiYOBrsRTPHEbyCC+xVDcd+bUhIyAcygoo2otC6pD9HpqD6rFPxLv/fiv5a52N14Xudz87ODjObzRtxcxOPwMLExKuwsHDrpUuX4ouKiuQ6JXYzZ6A6Dg23BlSy+VidSUJCwngPD4+duMcwxqn07NmzEsw128/PL8EGtqJykJSuY+Cgy7Su+QZrDYKabeizvIzVXiZPnvx9UlLSGMy+3uH0ZFHKivUBg42ydZrOCahovTMCgHpF7uCx7PGcZcuW1U+YMOF5vJwoi8WSzZxMhNLf07TeTOh7rDWiflKJBygWKJw0adKJkpKSEWCvHQLdOov8t8bbd1UIJaxS8lxsRSPQM2fOrAF7PQ32mgX2ynUCtqKZ4HwNs9R2gaW+VfphqixtYOZ4CLOuewGwPzE+dyuLFQqEajG3iirvTQeglkOr1Higamtms2fPrgTAnoRzPNdsNuc7KLAWaLBNVNuBNnMcVfOhRrV7Cd/rq7Kysvvge+11JERhGKSKN2M01CQqNDITgPqF2BIFXAOLZMaMGSXwveaBvRbihdx0EGzN0lBbaBmJjoY5ZK8GGO3Ze7DXZwUFBSPg2B9wAGA9pIE2tB0G+nOpOfgOBSzB98ofN25cTENDw1Ngr1IeESVsjJhi52bsFljqay3YxKiVlxMeHr6zvLx8FHyvoxxiiwqgedvp2W2HgS4Sc8Ks0wGLZOrUqbnwvabD9/q1ksenKSAT7PTcvQJL/V1rBjFq8CU1w/faWlVVRWuOpzgB1niVn0cTHjoMdJ6YE2Z1YLWTyMjIKwcPHpwC32stB6nQahbvIHYaLuYwUHuKrGkzSsmRI0fu8fHx+djV1VUVZggNDX0uMDDwXZGOOxmMotmeCjeL/CfaLaXJgnKKps0oJdOmTUvbtGlTOHyvV+Q4/FFmGaACqPYLvtRuxokYeWno559/bobv9b+1tbUTzGbzRQ01TckdzVQ2iGJSP+usGIcOLJkkIiLi4vnz58NMJtMG0G+jBpqk1OEFbcfs8bYZg09gkSxfvtw0ceLElyorK6eAvTLs3JwBMt+Pwiy0vkfrfHmMUzEyjiUqKuofKSkpo+F7bQF7NdmpGSEy3uuo4Et9xDgXI+8doFRo+F4vgL0oFTrLDk2Qo8AHzSqpABzlTDlEQqSROYiAvRJSU1NHgb22g73UTIW2tR4DbWWnrM7tSu7I1oFlgyxdurQG7LW8urr6IfheOSo9to+V36N882eh0QDUVeZgYmQOKA8++ODh7OzsEWAvNVKhrTl676TAUu87Eks5PLBIFixYUAH2erKqquoRsJcisyuhHJKUMwKp4vALrHUv3xXmwGJkDi5gry+vXbs2sqGhYY8C7CUlVSZRYKktUqoq68DSsMybN68kPDz8CbDXQswci2S8tZgKh7QE9SL0AeEAKacQI3MiAXv99caNGyPhe+2X6ZbdrRHS4Up0yOUme9c/1YGlsDz88MMF8L0erqmpWQb2sjXjsrO6YHSgwDro/QBUOnNCMTLnlOYpU6Z8XFRURFH7IzLfmw4uGAtAvWlNjXkdWA4gMTExOWCvGdXV1SvAXtakQrf3sWhBnGp20nmEKczJxch0aY6IiNgmsJfUmlht5+9QGs84AOp3zsxSt1q1ufkWdfYfWkJCwur8/PylIm03Afo6ndes4+hWHHGRmqwLH8DSh0JdFBeDPvzpojvvuujA0sW55V8CDADQwYjbVOLxkAAAAABJRU5ErkJggg=="

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!-- Creator: CorelDRAW X7 -->\n\n<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xml:space=\"preserve\" width=\"100\" height=\"100\" version=\"1.1\" style=\"fill-rule:evenodd\" viewBox=\"0 0 2822.2222 2822.2223\" id=\"svg3192\">\n    <g id=\"g3367\" transform=\"matrix(0.31585573,0,0,0.31589988,2846.7881,-197.45112)\">\n        <g transform=\"matrix(1.2487998,0,0,1.2487998,741.93687,-2155.9098)\" id=\"g3295\">\n            <path class=\"logo-fill-white\" id=\"path3200\" d=\"m -7430.4005,2226.9007 6393,0 c 209,0 381,171 381,381 l 0,6392 c 0,210 -172,381 -381,381 l -6393,0 c -209,0 -381,-171 -381,-381 l 0,-6392 c 0,-210 172,-381 381,-381 z m 196,1154 6040,0 c 173,0 314,141 314,313 l 0,5151 c 0,173 -141,314 -314,314 l -6040,0 c -172,0 -313,-141 -313,-314 l 0,-5151 c 0,-172 141,-313 313,-313 z\" class=\"fil0\" />\n            <rect class=\"logo-fill-none\" id=\"rect3202\" ry=\"314\" rx=\"362\" height=\"5779\" width=\"6667\" y=\"3380.9006\" x=\"-7547.4004\" class=\"fil1\" />\n            <g id=\"_266153440\" transform=\"translate(-9677.4005,711.90072)\">\n                <rect class=\"logo-fill-white\" id=\"rect3205\" height=\"909\" width=\"1795\" y=\"3433\" x=\"2795\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3207\" height=\"909\" width=\"1795\" y=\"3432\" x=\"4590\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3209\" height=\"909\" width=\"1795\" y=\"3435\" x=\"6385\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3211\" height=\"909\" width=\"1795\" y=\"4340\" x=\"2796\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3213\" height=\"909\" width=\"1795\" y=\"4336\" x=\"4596\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3215\" height=\"909\" width=\"1795\" y=\"4341\" x=\"6386\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3217\" height=\"909\" width=\"1795\" y=\"5245\" x=\"2796\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3219\" height=\"909\" width=\"1795\" y=\"5247\" x=\"4591\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3221\" height=\"909\" width=\"1795\" y=\"5247\" x=\"6386\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3223\" height=\"909\" width=\"1795\" y=\"6157\" x=\"2795\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3225\" height=\"909\" width=\"1795\" y=\"6160\" x=\"4595\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3227\" height=\"909\" width=\"1795\" y=\"6166\" x=\"6385\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3229\" height=\"909\" width=\"1795\" y=\"7072\" x=\"2795\" class=\"fil0\" />\n                <rect class=\"logo-fill-none\" id=\"rect3231\" height=\"909\" width=\"1795\" y=\"7075\" x=\"4599\" class=\"fil1\" />\n                <rect class=\"logo-fill-white\" id=\"rect3233\" height=\"909\" width=\"1795\" y=\"7076\" x=\"6395\" class=\"fil0\" />\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    draining = true;
	    var currentQueue;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        var i = -1;
	        while (++i < len) {
	            currentQueue[i]();
	        }
	        len = queue.length;
	    }
	    draining = false;
	}
	process.nextTick = function (fun) {
	    queue.push(fun);
	    if (!draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toStr = Object.prototype.toString;

	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]'
				&& value !== null
				&& typeof value === 'object'
				&& typeof value.length === 'number'
				&& value.length >= 0
				&& toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    toLowerFirst     : __webpack_require__(123),
	    toUpperFirst     : __webpack_require__(124),
	    separate         : __webpack_require__(125),
	    stripWhitespace  : __webpack_require__(126),
	    compactWhitespace: __webpack_require__(127),
	    camelize         : __webpack_require__(128),
	    humanize         : __webpack_require__(129),
	    hyphenate        : __webpack_require__(130),
	    endsWith         : __webpack_require__(131),

	    is: __webpack_require__(135)
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(
	  (typeof window !== 'undefined' &&
	  window.document && window.document.createElement)
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	"use strict";

	var emptyFunction = __webpack_require__(132);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ("production" !== process.env.NODE_ENV) {
	  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
	      console.warn(message);
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curry = __webpack_require__(133)
	var TYPES = __webpack_require__(134)

	function isFn(fn){
	    return typeof fn === 'function'
	}

	var sorty = curry(function(sortInfo, array){
	    return array.sort(getMultiSortFunction(sortInfo))
	})

	sorty.types = TYPES

	var getSingleSortFunction = function(info){

	    if (!info){
	        return
	    }

	    var field = info.name
	    var dir   = info.dir === 'desc' || info.dir < 0?
	                    -1:
	                    info.dir === 'asc' || info.dir > 0?
	                        1:
	                        0

	    if (!dir){
	        return
	    }

	    if (!info.fn && info.type){
	        info.fn = sorty.types[info.type]
	    }

	    if (!info.fn){
	        info.fn = sorty.types.string || TYPES.string
	    }

	    var fn = info.fn

	    return function(first, second){
	        var a = first[field]
	        var b = second[field]

	        return dir * fn(a, b)
	    }
	}

	var getSortFunctions = function(sortInfo){
	    if (!Array.isArray(sortInfo)){
	        sortInfo = [sortInfo]
	    }

	    return sortInfo.map(getSingleSortFunction).filter(isFn)
	}

	var getMultiSortFunction = function(sortInfo){

	    var fns = getSortFunctions(sortInfo)

	    return function(first, second){
	        var result = 0
	        var i      = 0
	        var len    = fns.length
	        var fn

	        for (; i < len; i++){
	            fn = fns[i]
	            if (!fn){
	                continue
	            }

	            result = fn(first, second)

	            if (result != 0){
	                return result
	            }
	        }

	        return result
	    }
	}

	sorty._getSortFunctions = getSortFunctions
	sorty.getFunction = getMultiSortFunction

	module.exports = sorty

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant = __webpack_require__(64);
	var canUseDOM = __webpack_require__(65).canUseDOM;

	/**
	 * Returns the current scroll position of the window as { x, y }.
	 */
	function getWindowScrollPosition() {
	  invariant(canUseDOM, "Cannot get current scroll position without a DOM");

	  return {
	    x: window.pageXOffset || document.documentElement.scrollLeft,
	    y: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	module.exports = getWindowScrollPosition;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(obj, prop){
		return Object.prototype.hasOwnProperty.call(obj, prop)
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getStylePrefixed = __webpack_require__(137)
	var properties       = __webpack_require__(138)

	module.exports = function(key, value){

		if (!properties[key]){
			return key
		}

		return getStylePrefixed(key, value)
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(fn, item){

		if (!item){
			return
		}

		if (Array.isArray(item)){
			return item.map(fn).filter(function(x){
				return !!x
			})
		} else {
			return fn(item)
		}
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getCssPrefixedValue = __webpack_require__(136)

	module.exports = function(target){
		target.plugins = target.plugins || [
			(function(){
				var values = {
					'flex':1,
					'inline-flex':1
				}

				return function(key, value){
					if (key === 'display' && value in values){
						return {
							key  : key,
							value: getCssPrefixedValue(key, value)
						}
					}
				}
			})()
		]

		target.plugin = function(fn){
			target.plugins = target.plugins || []

			target.plugins.push(fn)
		}

		return target
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var humanize = __webpack_require__(62).humanize
	var assign   = __webpack_require__(38)

	function getVisibleInfo(col){
	    var visible = true
	    var defaultVisible

	    if (col.hidden != null){
	        visible = !col.hidden
	    } else if (col.visible != null){
	        visible = !!col.visible
	    } else {
	        //no visible or hidden specified
	        //so we look for defaultVisible/defaultHidden

	        if (col.defaultHidden != null){
	            defaultVisible = !col.defaultHidden
	        } else if (col.defaultVisible != null){
	            defaultVisible = !!col.defaultVisible
	        }

	        visible = defaultVisible
	    }

	    return {
	        visible: visible,
	        defaultVisible: defaultVisible
	    }
	}

	var Column = function(col, props){

	    col = assign({}, Column.defaults, col)

	    //title
	    if (!col.title){
	        col.title = humanize(col.name)
	    }

	    //sortable
	    if (props && !props.sortable){
	        col.sortable = false
	    }
	    col.sortable = !!col.sortable

	    //resizable
	    if (props && props.resizableColumns === false){
	        col.resizable = false
	    }
	    col.resizable = !!col.resizable

	    //filterable
	    if (props && props.filterable === false){
	        col.filterable = false
	    }
	    col.filterable = !!col.filterable

	    var visibleInfo = getVisibleInfo(col)
	    var visible = visibleInfo.visible

	    if (visibleInfo.defaultVisible != null){
	        col.defaultHidden  = !visibleInfo.defaultVisible
	        col.defaultVisible = visibleInfo.defaultVisible
	    }

	    //hidden
	    col.hidden = !visible
	    //visible
	    col.visible  = visible

	    if (col.width == null && col.defaultWidth){
	        col.width = col.defaultWidth
	    }

	    //flexible
	    col.flexible = !col.width

	    return col
	}

	Column.displayName = 'Column'

	Column.defaults = {
	    sortable  : true,
	    filterable: true,
	    resizable : true,
	    defaultVisible: true,
	    type      : 'string'
	}

	module.exports = Column

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function val(fn){

	    return function(props, propName){

	        return fn(props[propName], propName, props)
	    }
	}

	module.exports = {
	    numeric: val(function(value, propName){

	        if (value == null){
	            return
	        }
	        if (value * 1 != value){
	            return new Error('Invalid numeric value for ' + propName)
	        }
	    }),

	    sortInfo: val(function(value){
	        if (typeof value == 'string' || typeof value == 'number'){
	            return new Error('Invalid sortInfo specified')
	        }
	    }),

	    column: val(function(value, props, propName){

	        if (!value){
	            return new Error('No columns specified. Please specify at least one column!')
	        }

	        if (!Array.isArray(value)){
	            value = props[propName] = [value]
	        }

	        var err

	        value.some(function(col, index){
	            if (!col.name){
	                err = new Error('All grid columns must have a name! Column at index ' + index + ' has no name!')
	                return true
	            }
	        })

	        return err

	    })
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var findIndexBy =__webpack_require__(140)

	function findIndexByName(arr, name){
	    return findIndexBy(arr, function(info){
	        return info.name === name
	    })
	}

	module.exports = findIndexByName

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasown = __webpack_require__(152)

	function copyIf(source, target){
	    var hasOwn = hasown(target)

	    Object.keys(source).forEach(function(key){
	        if (!hasOwn(key)){
	            target[key] = source[key]
	        }
	    })
	}

	function groupByFields(data, fields, path, names, fieldIndex){
	    data       = data       || []
	    fieldIndex = fieldIndex || 0

	    var field = fields[fieldIndex]

	    if (!field){
	        return data
	    }

	    var group     = groupArrayByField(data, field)
	    var fieldName = typeof field == 'string'?
	                            field:
	                            field.name

	    if (!fieldIndex){
	        group.namePath  = []
	        group.valuePath = []
	        group.depth     = 0
	        delete group.name
	    }

	    var groupsCount = group.length

	    if (group.keys && group.keys.length){

	        group.leaf = false
	        group.keys.forEach(function(key){

	            var groupPath  = (path || []).concat(key)
	            var fieldNames = (names || []).concat(fieldName)
	            var data = groupByFields(group.data[key], fields, groupPath, fieldNames, fieldIndex + 1)

	            if (Array.isArray(data)){
	                data = {
	                    data: data,
	                    leaf: true
	                }
	            }

	            data.name      = fieldName
	            data.value     = key
	            data.valuePath = groupPath
	            data.namePath  = fieldNames
	            data.depth     = fieldIndex + 1

	            if (typeof field != 'string'){

	                copyIf(field, data)
	            }

	            group.data[key] = data

	            if (!data.leaf){
	                groupsCount += data.groupsCount
	            }

	        })
	    }

	    if (!group.leaf){
	        group.groupsCount = groupsCount
	    }

	    return group
	}

	function groupArrayByField(data, field){

	    var groupKeys      = {}
	    var groupKeysArray = []

	    var fieldName      = typeof field == 'string'?
	                            field:
	                            field.name

	    ;(data || []).forEach(function(item){
	        var itemKey = item[fieldName]

	        if (groupKeys[itemKey]){
	            groupKeys[itemKey].push(item)
	        } else {
	            groupKeys[itemKey] = [item]
	            groupKeysArray.push(itemKey)
	        }
	    })

	    var result = {
	        keys      : groupKeysArray,
	        data      : groupKeys,
	        childName : fieldName,
	        length    : groupKeysArray.length,
	        leaf      : true
	    }

	    return result
	}

	module.exports = groupByFields

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function slice(data, props){

	    if (!props.virtualRendering){
	        return data
	    }

	    return data.slice(
	            props.startIndex,
	            props.startIndex + props.renderCount
	        )
	}

	module.exports = slice

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1)
	var renderMenu = __webpack_require__(80)
	var renderRow  = __webpack_require__(141)
	var tableStyle  = __webpack_require__(142)
	var slice  = __webpack_require__(77)

	function getData(props){

	    if (!props.virtualRendering){
	        return props.data
	    }

	    return slice(props.data, props)
	}

	module.exports = function(props, rows){

	    rows = rows || getData(props).map(function(data, index){
	        return renderRow.call(this, props, data, index + props.startIndex)
	    }, this)

	    return {
	        className: "z-table",
	        style: tableStyle(props),
	        children: rows
	    }
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1)

	var Row         = __webpack_require__(147)
	var Cell        = __webpack_require__(148)
	var CellFactory = React.createFactory(Cell)

	var renderRow = __webpack_require__(141)

	function renderData(props, data, depth){

	    return data.map(function(data, index){

	        return renderRow(props, data, index, function(config){
	            config.cellFactory = function(cellProps){
	                if (cellProps.index === 0){
	                    cellProps.innerStyle = {
	                        paddingLeft: depth * props.groupNestingWidth
	                    }
	                }

	                return CellFactory(cellProps)
	            }

	            config.className += ' z-grouped'

	            return config
	        })
	    })
	}

	function renderGroupRow(props, groupData){

	    var style = {
	        paddingLeft: (groupData.depth - 1)* props.groupNestingWidth
	    }

	    var cellStyle = {
	        minWidth: props.totalColumnWidth
	        // ,
	        // maxWidth: props.totalColumnWidth
	    }

	    return React.createElement(Row, {className: "z-group-row", key: 'group-'+groupData.valuePath, rowHeight: props.rowHeight}, 
	        React.createElement(Cell, {
	            className: "z-group-cell", 
	            textPadding: props.cellPadding, 
	            innerStyle: style, 
	            text: groupData.value, 
	            style: cellStyle}
	        )
	    )
	}

	function renderGroup(props, groupData){

	    var result = [renderGroupRow(props, groupData)]

	    if (groupData && groupData.leaf){
	        result.push.apply(result, renderData(props, groupData.data, groupData.depth))
	    } else {
	        groupData.keys.forEach(function(key){
	            var items = renderGroup(props, groupData.data[key])
	            result.push.apply(result, items)
	        })
	    }

	    return result
	}

	function renderGroups(props, groupsData){
	    var result = []

	    groupsData.keys.map(function(key){
	        result.push.apply(result, renderGroup(props, groupsData.data[key]))
	    })

	    return result
	}

	module.exports = function(props, groupData){
	    return renderGroups(props, groupData)
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function renderMenu(props){
	    if (!props.menu){
	        return
	    }

	    return props.menu({
	        className : 'z-header-menu-column',
	        gridColumns: props.columns
	    })
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(38)
	var getSelected = __webpack_require__(143)

	var hasOwn = function(obj, prop){
	    return Object.prototype.hasOwnProperty.call(obj, prop)
	}

	/**
	 * Here is how multi selection is implemented - trying to emulate behavior in OSX Finder
	 *
	 * When there is no selection, and an initial click for selection is done, keep that index (SELINDEX)
	 *
	 * Next, if we shift+click, we mark as selected the items from initial index to current click index.
	 *
	 * Now, if we ctrl+click elsewhere, keep the selection, but also add the selected file,
	 * and set SELINDEX to the new index. Now on any subsequent clicks, have the same behavior,
	 * selecting/deselecting items starting from SELINDEX to the new click index
	 */


	module.exports = {

	    findInitialSelectionIndex: function(){
	        var selected = getSelected(this.props, this.state)
	        var index = undefined

	        if (!Object.keys(selected).length){
	            return index
	        }


	        var i = 0
	        var data = this.props.data
	        var len = data.length
	        var id
	        var idProperty = this.props.idProperty

	        for (; i < len; i++){
	            id = data[i][idProperty]

	            if (selected[id]){
	                index = i
	            }
	        }

	        return index
	    },

	    notifySelection: function(selected, data){
	        if (typeof this.props.onSelectionChange == 'function'){
	            this.props.onSelectionChange(selected, data)
	        }

	        if (!hasOwn(this.props, 'selected')){
	            this.setState({
	                defaultSelected: selected
	            })
	        }
	    },

	    handleSingleSelection: function(data, event){
	        var props = this.props

	        var rowSelected = this.isRowSelected(data)
	        var newSelected = !rowSelected

	        if (rowSelected && event && !event.ctrlKey){
	            //if already selected and not ctrl, keep selected
	            newSelected = true
	        }

	        var selectedId = newSelected?
	                            data[props.idProperty]:
	                            null

	        this.notifySelection(selectedId, data)
	    },


	    handleMultiSelection: function(data, event, config){

	        var selIndex = config.selIndex
	        var prevShiftKeyIndex = config.prevShiftKeyIndex

	        var props = this.props
	        var map   = selIndex == null?
	                        {}:
	                        assign({}, getSelected(props, this.state))

	        if (prevShiftKeyIndex != null && selIndex != null){
	            var min = Math.min(prevShiftKeyIndex, selIndex)
	            var max = Math.max(prevShiftKeyIndex, selIndex)

	            var removeArray = props.data.slice(min, max + 1) || []

	            removeArray.forEach(function(item){
	                if (item){
	                    var id = item[props.idProperty]
	                    delete map[id]
	                }
	            })
	        }

	        data.forEach(function(item){
	            if (item){
	                var id = item[props.idProperty]
	                map[id] = item
	            }
	        })

	        this.notifySelection(map, data)
	    },

	    handleMultiSelectionRowToggle: function(data, event){

	        var selected   = getSelected(this.props, this.state)
	        var isSelected = this.isRowSelected(data)

	        var clone = assign({}, selected)
	        var id    = data[this.props.idProperty]

	        if (isSelected){
	            delete clone[id]
	        } else {
	            clone[id] = data
	        }

	        this.notifySelection(clone, data)

	        return isSelected
	    },

	    handleSelection: function(rowProps, event){

	        var props = this.props

	        if (!hasOwn(props, 'selected') && !hasOwn(props, 'defaultSelected')){
	            return
	        }

	        var isSelected  = this.isRowSelected(rowProps.data)
	        var multiSelect = this.isMultiSelect()

	        if (!multiSelect){
	            this.handleSingleSelection(rowProps.data, event)
	            return
	        }

	        if (this.selIndex === undefined){
	            this.selIndex = this.findInitialSelectionIndex()
	        }

	        var selIndex = this.selIndex

	        //multi selection
	        var index = rowProps.index
	        var prevShiftKeyIndex = this.shiftKeyIndex
	        var start
	        var end
	        var data

	        if (event.ctrlKey){
	            this.selIndex = index
	            this.shiftKeyIndex = null

	            var unselect = this.handleMultiSelectionRowToggle(props.data[index], event)

	            if (unselect){
	                this.selIndex++
	                this.shiftKeyIndex = prevShiftKeyIndex
	            }

	            return
	        }

	        if (!event.shiftKey){
	            //set selIndex, for future use
	            this.selIndex = index
	            this.shiftKeyIndex = null

	            //should not select many, so make selIndex null
	            selIndex = null
	        } else {
	            this.shiftKeyIndex = index
	        }

	        if (selIndex == null){
	            data = [props.data[index]]
	        } else {
	            start = Math.min(index, selIndex)
	            end   = Math.max(index, selIndex) + 1
	            data  = props.data.slice(start, end)
	        }

	        this.handleMultiSelection(data, event, {
	            selIndex: selIndex,
	            prevShiftKeyIndex: prevShiftKeyIndex
	        })
	    },


	    isRowSelected: function(data){
	        var selectedMap = this.getSelectedMap()
	        var id          = data[this.props.idProperty]

	        return selectedMap[id]
	    },

	    isMultiSelect: function(){
	        var selected = getSelected(this.props, this.state)

	        return selected && typeof selected == 'object'
	    },

	    getSelectedMap: function(){
	        var selected    = getSelected(this.props, this.state)
	        var multiSelect = selected && typeof selected == 'object'
	        var map

	        if (multiSelect){
	            map = selected
	        } else {
	            map = {}
	            map[selected] = true
	        }

	        return map
	    }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1)
	var assign = __webpack_require__(38)
	var ReactMenu = __webpack_require__(166)

	function stopPropagation(event){
	    event.stopPropagation()
	}

	function emptyFn(){}

	var FILTER_FIELDS = {}

	module.exports = {

	    getColumnFilterFieldFactory: function(column){

	        var type = column.type || 'string'

	        return FILTER_FIELDS[type] || React.DOM.input
	    },

	    getFilterField: function(props){
	        var column = props.column
	        var filterValue = this.filterValues?
	                            this.filterValues[column.name]:
	                            ''

	        var fieldProps = {
	            autoFocus   : true,
	            defaultValue: filterValue,
	            column      : column,
	            onChange    : this.onFilterChange.bind(this, column),
	            onKeyUp     : this.onFilterKeyUp.bind(this, column)
	        }

	        var fieldFactory = column.renderFilterField || this.props.renderFilterField
	        var field

	        if (fieldFactory){
	            field = fieldFactory(fieldProps)
	        }

	        if (field === undefined){
	            field = this.getColumnFilterFieldFactory(column)(fieldProps)
	        }

	        return field
	    },

	    onFilterKeyUp: function(column, event){
	        if (event.key == 'Enter'){
	            this.onFilterClick(column, event)
	        }
	    },

	    onFilterChange: function(column, eventOrValue){

	        var value = eventOrValue

	        if (eventOrValue && eventOrValue.target){
	            value = eventOrValue.target.value
	        }

	        this.filterValues = this.filterValues || {}
	        this.filterValues[column.name] = value

	        if (this.props.liveFilter){
	            this.filterBy(column, value)
	        }
	    },

	    filterBy: function(column, value, event){
	        ;(this.props.onFilter || emptyFn)(column, value, this.filterValues, event)
	    },

	    onFilterClick: function(column, event){
	        this.showMenu(null)

	        var value = this.filterValues? this.filterValues[column.name]: ''

	        this.filterBy(column, value, event)
	    },

	    onFilterClear: function(column){
	        this.showMenu(null)

	        if (this.filterValues){
	            this.filterValues[column.name] = ''
	        }

	        this.filterBy(column, '')

	        ;(this.props.onClearFilter || emptyFn).apply(null, arguments)
	    },

	    getFilterButtons: function(props){

	        var column = props.column
	        var factory = column.renderFilterButtons || this.props.renderFilterButtons

	        var result

	        if (factory){
	            result = factory(props)
	        }

	        if (result !== undefined){
	            return result
	        }

	        var doFilter = this.onFilterClick.bind(this, column)
	        var doClear = this.onFilterClear.bind(this, column)

	        return React.createElement("div", {style: {textAlign: 'center'}}, 
	            React.createElement("button", {onClick: doFilter}, "Filter"), 
	            React.createElement("button", {onClick: doClear, style: {marginLeft: 5}}, "Clear")
	        )
	    },

	    filterMenuFactory: function(props){

	        var overStyle = {
	            background: 'white',
	            color: 'auto'
	        }

	        var column  = props.column
	        var field   = this.getFilterField(props)
	        var buttons = this.getFilterButtons({
	            column: column
	        })

	        var children = [
	            field,
	            buttons
	        ].map(function(x, index){
	            return React.createElement(ReactMenu.Item, {key: index}, 
	                React.createElement(ReactMenu.Item.Cell, null, 
	                    x
	                )
	            )
	        })

	        props.itemOverStyle   = props.itemOverStyle || overStyle
	        props.itemActiveStyle = props.itemActiveStyle || overStyle
	        props.onClick = props.onClick || stopPropagation

	        var factory = this.props.filterMenuFactory
	        var result

	        if (factory){
	            result = factory(props)

	            if (result !== undefined){
	                return result
	            }
	        }

	        props.onMount = this.onFilterMenuMount

	        return React.createElement(ReactMenu, React.__spread({},  props), 
	            children
	        )
	    },

	    onFilterMenuMount: function(menu){
	        var dom = menu.getDOMNode()

	        if (dom){
	            var input = dom.querySelector('input')

	            if (input){
	                setTimeout(function(){
	                    input.focus()
	                }, 10)
	            }
	        }
	    }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(){
	    return {
	        loading: false,
	        columnMinWidth: 50,
	        cellPadding: '0px 5px',
	        headerPadding: '10px 5px',
	        filterIconColor  : '#6EB8F1',
	        menuIconColor    : '#6EB8F1',
	        scrollbarSize: 20,

	        scrollBy: undefined,
	        virtualRendering: true,

	        styleAlternateRowsCls: 'z-style-alternate',
	        withColumnMenuCls: 'z-with-column-menu',
	        cellEllipsisCls: 'z-cell-ellipsis',
	        defaultClassName: 'react-datagrid',

	        withColumnMenu: true,
	        sortable: true,

	        filterable: null,
	        resizableColumns: null,
	        reorderColumns: null,

	        emptyCls: 'z-empty',
	        emptyTextStyle: null,
	        emptyWrapperStyle: null,

	        loadMaskOverHeader: true,

	        showCellBordersCls: 'z-cell-borders',
	        showCellBorders: false,
	        styleAlternateRows: true,
	        cellEllipsis: true,
	        rowHeight: 31,

	        groupNestingWidth: 20,

	        defaultStyle: {
	            position: 'relative'
	        }
	    }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./basic.example": 90,
		"./column-sizing.example": 92,
		"./custom-cell-borders.example": 94,
		"./custom-column-rendering.example": 96,
		"./custom-column-styling.example": 98,
		"./custom-row-height.example": 100,
		"./custom-row-styling.example": 102,
		"./empty-text-for-no-records.example": 104,
		"./filtering-and-sorting.example": 106,
		"./filtering.example": 108,
		"./grouping.example": 110,
		"./large-data-array.example": 112,
		"./loading-grid.example": 114,
		"./reorder-columns.example": 116,
		"./sorting.example": 118,
		"./text-align-and-custom-row-height.example": 120
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 84;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./basic.example": 91,
		"./column-sizing.example": 93,
		"./custom-cell-borders.example": 95,
		"./custom-column-rendering.example": 97,
		"./custom-column-styling.example": 99,
		"./custom-row-height.example": 101,
		"./custom-row-styling.example": 103,
		"./empty-text-for-no-records.example": 105,
		"./filtering-and-sorting.example": 107,
		"./filtering.example": 109,
		"./grouping.example": 111,
		"./large-data-array.example": 113,
		"./loading-grid.example": 115,
		"./reorder-columns.example": 117,
		"./sorting.example": 119,
		"./text-align-and-custom-row-height.example": 121
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 85;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React  = __webpack_require__(1)
	var assign = __webpack_require__(38)
	var LoadMask = __webpack_require__(139)
	var hasTouch = __webpack_require__(154)
	var DragHelper = __webpack_require__(155)
	var buffer = __webpack_require__(157)
	var raf = __webpack_require__(156)
	var tableStyle = __webpack_require__(142)

	function signum(x){
	    return x < 0? -1: 1
	}

	function getProtectScrollConfig(){
	    //THIS
	    var tableWrapper = this.refs.tableWrapper.getDOMNode()
	    var horizontalScrollbar = this.refs.horizontalScrollbar.getDOMNode()

	    var tableHeight   = this.getTableScrollHeight()
	    var wrapperHeight = tableWrapper.offsetHeight - horizontalScrollbar.offsetHeight
	    var wrapperWidth  = tableWrapper.offsetWidth

	    return {
	        tableHeight  : tableHeight,
	        wrapperHeight: wrapperHeight,
	        wrapperWidth : wrapperWidth
	    }
	}


	function protectScrollTop(scrollTop, config){
	    //THIS
	    config = config || getProtectScrollConfig.call(this)

	    var tableHeight   = config.tableHeight
	    var wrapperHeight = config.wrapperHeight

	    if (scrollTop + wrapperHeight > tableHeight){
	        scrollTop = tableHeight - wrapperHeight
	    }
	    if (scrollTop < 0){
	        scrollTop = 0
	    }

	    return scrollTop
	}

	function protectScrollLeft(scrollLeft, config){
	    //THIS
	    config = config || getProtectScrollConfig.call(this)

	    var maxWidth   = this.props.totalColumnWidth
	    var wrapperWidth = config.wrapperWidth

	    if (scrollLeft + wrapperWidth > maxWidth){
	        scrollLeft = maxWidth - wrapperWidth
	    }
	    if (scrollLeft < 0){
	        scrollLeft = 0
	    }

	    return scrollLeft
	}

	module.exports = React.createClass({

	    displayName: 'ReactDataGrid.Wrapper',

	    propTypes: {
	        scrollLeft      : React.PropTypes.number,
	        scrollTop       : React.PropTypes.number,
	        scrollbarSize   : React.PropTypes.number,
	        totalColumnWidth: React.PropTypes.number,
	        cellPadding     : React.PropTypes.oneOfType([
	                            React.PropTypes.number,
	                            React.PropTypes.string
	                        ]),
	        rowHeight       : React.PropTypes.any,

	        data            : React.PropTypes.array,
	        columns         : React.PropTypes.array,
	        idProperty      : React.PropTypes.string.isRequired,

	        rowFactory      : React.PropTypes.func
	    },

	    getProtectScrollConfig: function(){
	        return getProtectScrollConfig.apply(this, arguments)
	    },

	    protectScrollTop: function(){
	        return protectScrollTop.apply(this, arguments)
	    },

	    protectScrollLeft: function(){
	        return protectScrollLeft.apply(this, arguments)
	    },

	    getDefaultProps: function(){

	        return {
	            scrollLeft: 0,
	            scrollTop : 0
	        }
	    },

	    syncVerticalScroller: function(){

	        var scrollTop = this.props.scrollTop + (this.props.topOffset || 0)

	        this.lockVerticalScroll = true
	        this.refs.verticalScrollbar.getDOMNode().scrollTop = scrollTop

	        raf(function(){
	            this.lockVerticalScroll = false
	        }.bind(this))
	    },

	    render: function() {

	        var props     = this.prepareProps(this.props)
	        var rowsCount = props.renderCount

	        var tableProps = props.tableProps

	        var groupsCount = 0
	        var table = props.table

	        if (props.groupData){
	            groupsCount = props.groupData.groupsCount
	        }

	        if (props.virtualRendering){
	            rowsCount += groupsCount
	        }

	        this.groupsCount = groupsCount

	        var horizontalScrollerSize = props.totalColumnWidth + props.scrollbarSize
	        var verticalScrollerSize   = (props.totalLength + groupsCount) * props.rowHeight

	        var events = {}

	        if (!hasTouch){
	            events.onWheel = this.handleWheel
	        } else {
	            events.onTouchStart = this.handleTouchStart
	        }

	        var wrapperStyle = {
	            paddingRight: props.empty? 0: props.scrollbarSize
	        }

	        if (props.empty){
	            assign(wrapperStyle, props.emptyWrapperStyle)
	        }

	        var emptyText

	        if (props.empty){
	            emptyText = React.createElement("div", {className: "z-empty-text", style: props.emptyTextStyle}, props.emptyText)
	        }

	        var loadMask

	        if (!props.loadMaskOverHeader){
	            loadMask = React.createElement(LoadMask, {visible: props.loading})
	        }

	        return (
	            React.createElement("div", {className: "z-wrapper", style: {height: rowsCount * props.rowHeight}}, 
	                loadMask, 
	                React.createElement("div", React.__spread({ref: "tableWrapper", className: "z-table-wrapper", style: wrapperStyle},  events), 
	                    emptyText, 
	                    React.createElement("div", React.__spread({},  tableProps, {ref: "table"})), 
	                    React.createElement("div", {ref: "verticalScrollbar", className: "z-vertical-scrollbar", style: {width: props.scrollbarSize}, onScroll: this.handleVerticalScroll}, 
	                        React.createElement("div", {className: "z-vertical-scroller", style: {height: verticalScrollerSize}})
	                    ), 
	                    React.createElement("div", {className: "z-horizontal-scroller", style: {width: horizontalScrollerSize}})
	                ), 
	                React.createElement("div", {ref: "horizontalScrollbar", className: "z-horizontal-scrollbar", onScroll: this.handleHorizontalScroll}, 
	                    React.createElement("div", {className: "z-horizontal-scroller", style: {width: horizontalScrollerSize}})
	                )
	            )
	        )
	    },

	    handleTouchStart: function(event) {

	        var props = this.props
	        var table = this.refs.table.getDOMNode()

	        var scroll = {
	            top : props.scrollTop,
	            left: props.scrollLeft
	        }

	        var protectScrollConfig = this.getProtectScrollConfig()

	        var newScrollPos

	        var side

	        DragHelper(event, {
	            scope: this,
	            onDrag: buffer(function(event, config) {

	                var diffTop = config.diff.top
	                var diffLeft = config.diff.top

	                var diff

	                if (diffTop == 0 && diffLeft == 0){
	                    return
	                }

	                if (!side){
	                    side = Math.abs(config.diff.top) > Math.abs(config.diff.left)? 'top': 'left'
	                }

	                diff = config.diff[side]

	                newScrollPos = scroll[side] - diff

	                if (side == 'top'){
	                    newScrollPos = this.protectScrollTop(newScrollPos, protectScrollConfig)
	                } else {
	                    newScrollPos = this.protectScrollLeft(newScrollPos, protectScrollConfig)
	                }

	                if (props.virtualRendering && side == 'top'){
	                    this.verticalScrollAt(newScrollPos)
	                    return
	                }

	                if (side == 'left'){
	                    this.horizontalScrollAt(newScrollPos)
	                    return
	                }

	                var tableStyleProps = {
	                    virtualRendering: props.virtualRendering,
	                    scrollLeft      : scroll.left,
	                    scrollTop       : scroll.top
	                }

	                if (side == 'top'){
	                    tableStyleProps.scrollTop = newScrollPos
	                } else {
	                    tableStyleProps.scrollLeft = newScrollPos
	                }

	                var style = tableStyle(tableStyleProps)

	                Object.keys(style).forEach(function(k){
	                    var value = style[k]
	                    table.style[k] = value
	                })

	            }, -1),
	            onDrop: function(){

	                if (!side){
	                    return
	                }

	                if (side == 'left'){
	                    return
	                }

	                if (!props.virtualRendering){
	                    props.onScrollTop(newScrollPos)
	                } else {
	                    this.verticalScrollAt(newScrollPos)
	                }
	            }
	        })

	        event.stopPropagation()
	        event.preventDefault()
	    },

	    horizontalScrollAt: function(scrollLeft) {
	        this.props.onScrollLeft(scrollLeft)
	    },

	    handleWheel: function(event){

	        var delta = event.deltaY

	        if (delta && Math.abs(delta) < 40){
	            delta = signum(delta) * 40
	        }

	        if (event.shiftKey){

	            if (!delta){
	                delta = event.deltaX
	            }

	            var horizontalScrollbar = this.refs.horizontalScrollbar
	            var domNode             = horizontalScrollbar.getDOMNode()
	            var pos                 = domNode.scrollLeft

	            if (delta < 0 && pos == 0){
	                //no need to stop propagation
	                //we allow the event to propagate so the browser
	                //scrolls parent dom elements if needed
	                return
	            }

	            domNode.scrollLeft = pos + delta

	            // if (delta > 0 && domNode.scrollLeft == pos){
	            //     //the grid was not scrolled
	            //     this.refs.tableWrapper.getDOMNode().scrollLeft = 0
	            //     return
	            // }

	            event.stopPropagation()
	            event.preventDefault()

	            return
	        }

	        this.addMouseWheelDelta(delta)

	        if (this.props.virtualRendering){
	            if (delta < 0 && this.props.scrollTop == 0){
	                //if scrolling to upwards and already there
	                return
	            }

	            if (delta > 0 && this.props.endIndex >= this.props.data.length - 1){
	                //if scrolling downwards and already there
	                return
	            }

	            event.stopPropagation()
	            event.preventDefault()
	        }
	    },


	    getTableScrollHeight: function(){
	        var props  = this.props
	        var result = props.virtualRendering?
	                        (props.totalLength + this.groupsCount || 0) * props.rowHeight:
	                        this.refs.table.getDOMNode().offsetHeight

	        return result
	    },

	    addMouseWheelDelta: function(deltaY){

	        var props   = this.props
	        var virtual = props.virtualRendering

	        var tableHeight         = this.getTableScrollHeight()
	        var tableWrapper        = this.refs.tableWrapper.getDOMNode()
	        var horizontalScrollbar = this.refs.horizontalScrollbar.getDOMNode()
	        var wrapperHeight       = tableWrapper.offsetHeight - horizontalScrollbar.offsetHeight

	        var scrollTop = props.scrollTop

	        if (virtual && deltaY < 0 && -deltaY < props.rowHeight){
	            //when scrolling to go up, account for the case where abs(deltaY)
	            //is less than the rowHeight, as this results in no scrolling
	            //so make sure it's at least deltaY
	            deltaY = -props.rowHeight
	        }

	        if (virtual && props.scrollBy){
	            deltaY = signum(deltaY) * props.scrollBy * props.rowHeight
	        }

	        scrollTop += deltaY

	        scrollTop = this.protectScrollTop(scrollTop)

	        this.verticalScrollAt(scrollTop, deltaY)
	    },
	    verticalScrollAt: function(scrollTop){

	        this.onVerticalScroll(scrollTop)

	        raf(function(){
	            this.syncVerticalScroller()
	        }.bind(this))
	    },
	    handleHorizontalScroll: function(event){
	        this.props.onScrollLeft(event.target.scrollLeft)
	    },
	    handleVerticalScroll: function(event){
	        !this.lockVerticalScroll && this.onVerticalScroll(event.target.scrollTop)
	    },
	    onVerticalScroll: function(pos){
	        this.props.onScrollTop(pos)
	    },
	    prepareProps: function(thisProps){
	        var props = {}

	        assign(props, thisProps)

	        return props
	    }
	})


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React   = __webpack_require__(1)
	var Region  = __webpack_require__(122)
	var ReactMenu = React.createFactory(__webpack_require__(166))
	var assign  = __webpack_require__(38)
	var clone   = __webpack_require__(176)
	var asArray = __webpack_require__(144)
	var findIndexBy = __webpack_require__(140)
	var findIndexByName = __webpack_require__(75)
	var Cell    = __webpack_require__(148)
	var setupColumnDrag   = __webpack_require__(145)
	var setupColumnResize = __webpack_require__(146)

	var normalize = __webpack_require__(51)
	var EVENT_NAMES = __webpack_require__(158)

	function emptyFn(){}

	function getColumnSortInfo(column, sortInfo){

	    sortInfo = asArray(sortInfo)

	    var index = findIndexBy(sortInfo, function(info){
	        return info.name === column.name
	    })

	    return sortInfo[index]
	}

	function removeColumnSort(column, sortInfo){
	    sortInfo = asArray(sortInfo)

	    var index = findIndexBy(sortInfo, function(info){
	        return info.name === column.name
	    })

	    if (~index){
	        sortInfo.splice(index, 1)
	    }

	    return sortInfo
	}

	function getDropState(){
	    return {
	        dragLeft  : null,
	        dragColumn: null,
	        dragColumnIndex: null,
	        dragging  : false,
	        dropIndex : null,

	        shiftIndexes: null,
	        shiftSize: null
	    }
	}

	module.exports = React.createClass({

	    displayName: 'ReactDataGrid.Header',

	    propTypes: {
	        columns: React.PropTypes.array
	    },

	    onDrop: function(event){
	        if (this.state.dragging){
	            event.stopPropagation()
	        }

	        var dragIndex = this.state.dragColumnIndex
	        var dropIndex = this.state.dropIndex

	        if (dropIndex != null){

	            //since we need the indexes in the array of all columns
	            //not only in the array of the visible columns
	            //we need to search them and make this transform
	            var dragColumn = this.props.columns[dragIndex]
	            var dropColumn = this.props.columns[dropIndex]

	            dragIndex = findIndexByName(this.props.allColumns, dragColumn.name)
	            dropIndex = findIndexByName(this.props.allColumns, dropColumn.name)

	            this.props.onDropColumn(dragIndex, dropIndex)
	        }

	        this.setState(getDropState())
	    },

	    getDefaultProps: function(){
	        return {
	            defaultClassName : 'z-header-wrapper',
	            draggingClassName: 'z-dragging',
	            cellClassName    : 'z-column-header',
	            defaultStyle    : {},
	            sortInfo        : null,
	            scrollLeft      : 0,
	            scrollTop       : 0
	        }
	    },

	    getInitialState: function(){

	        return {
	            mouseOver : true,
	            dragging  : false,

	            shiftSize : null,
	            dragColumn: null,
	            shiftIndexes: null
	        }
	    },

	    render: function() {

	        var props = this.prepareProps(this.props)

	        var cells = props.columns
	                        .map(this.renderCell.bind(this, props, this.state))

	        var style = normalize(props.style)
	        var headerStyle = normalize({
	            paddingRight: props.scrollbarSize,
	            transform   : 'translate3d(' + -props.scrollLeft + 'px, ' + -props.scrollTop + 'px, 0px)'
	        })

	        return (
	            React.createElement("div", {style: style, className: props.className}, 
	                React.createElement("div", {className: "z-header", style: headerStyle}, 
	                    cells
	                )
	            )
	        )
	    },

	    renderCell: function(props, state, column, index){

	        var resizing  = props.resizing
	        var text      = column.title
	        var className = props.cellClassName || ''
	        var style     = {
	            left: 0
	        }

	        var menu = this.renderColumnMenu(props, state, column, index)

	        if (state.dragColumn && state.shiftIndexes && state.shiftIndexes[index]){
	            style.left = state.shiftSize
	        }

	        if (state.dragColumn === column){
	            className += ' z-drag z-over'
	            style.zIndex = 1
	            style.left = state.dragLeft || 0
	        }

	        var filterIcon = props.filterIcon || React.createElement("svg", {version: "1.1", style: {transform: 'translate3d(0,0,0)', height:'100%', width: '100%', padding: '0px 2px'}, viewBox: "0 0 3 4"}, 
	                                React.createElement("polygon", {points: "0,0 1,2 1,4 2,4 2,2 3,0 ", style: {fill: props.filterIconColor,strokeWidth:0, fillRule: 'nonZero'}})
	                            )

	        var filter  = column.filterable?
	                        React.createElement("div", {className: "z-show-filter", onMouseUp: this.handleFilterMouseUp.bind(this, column)}, 
	                            filterIcon
	                        )
	                        :
	                        null

	        var resizer = column.resizable?
	                        React.createElement("span", {className: "z-column-resize", onMouseDown: this.handleResizeMouseDown.bind(this, column)}):
	                        null

	        if (column.sortable){
	            text = React.createElement("span", null, text, React.createElement("span", {className: "z-icon-sort-info"}))

	            var sortInfo = getColumnSortInfo(column, props.sortInfo)

	            if (sortInfo && sortInfo.dir){
	                className += (sortInfo.dir === -1 || sortInfo.dir === 'desc'?
	                                ' z-desc':
	                                ' z-asc')
	            }

	            className += ' z-sortable'
	        }

	        if (filter){
	            className += ' z-filterable'
	        }

	        if (state.mouseOver === column.name && !resizing){
	            className += ' z-over'
	        }

	        if (props.menuColumn === column.name){
	            className += ' z-active'
	        }

	        className += ' z-unselectable'

	        var events = {}

	        events[EVENT_NAMES.onMouseDown] = this.handleMouseDown.bind(this, column)
	        events[EVENT_NAMES.onMouseUp] = this.handleMouseUp.bind(this, column)

	        return (
	            React.createElement(Cell, React.__spread({
	                key: column.name, 
	                textPadding: props.cellPadding, 
	                columns: props.columns, 
	                index: index, 
	                className: className, 
	                style: style, 
	                text: text, 
	                header: true, 

	                onMouseOut: this.handleMouseOut.bind(this, column), 
	                onMouseOver: this.handleMouseOver.bind(this, column)}, 
	                events
	            ), 
	                filter, 
	                menu, 
	                resizer
	            )
	        )
	    },

	    toggleSort: function(column){
	        var sortInfo       = asArray(clone(this.props.sortInfo))
	        var columnSortInfo = getColumnSortInfo(column, sortInfo)

	        if (!columnSortInfo){
	            columnSortInfo = {
	                name: column.name,
	                type: column.type,
	                fn  : column.sortFn
	            }

	            sortInfo.push(columnSortInfo)
	        }

	        if (typeof column.toggleSort === 'function'){
	            column.toggleSort(columnSortInfo, sortInfo)
	        } else {

	            var dir     = columnSortInfo.dir
	            var dirSign = dir === 'asc'? 1 : dir === 'desc'? -1: dir
	            var newDir  = dirSign === 1? -1: dirSign === -1?  0: 1

	            columnSortInfo.dir = newDir

	            if (!newDir){
	                sortInfo = removeColumnSort(column, sortInfo)
	            }
	        }

	        ;(this.props.onSortChange || emptyFn)(sortInfo)
	    },

	    renderColumnMenu: function(props, state, column, index){
	        if (!props.withColumnMenu){
	            return
	        }

	        var menuIcon = props.menuIcon || React.createElement("svg", {version: "1.1", style: {transform: 'translate3d(0,0,0)', height:'100%', width: '100%', padding: '0px 2px'}, viewBox: "0 0 3 4"}, 
	                React.createElement("polygon", {points: "0,0 1.5,3 3,0 ", style: {fill: props.menuIconColor,strokeWidth:0, fillRule: 'nonZero'}})
	            )

	        return React.createElement("div", {className: "z-show-menu", onMouseUp: this.handleShowMenuMouseUp.bind(this, props, column, index)}, 
	            menuIcon
	        )
	    },

	    handleShowMenuMouseUp: function(props, column, index, event){
	        event.nativeEvent.stopSort = true

	        this.showMenu(column, event)
	    },

	    showMenu: function(column, event){

	        var menuItem = function(column){
	            var visibility = this.props.columnVisibility

	            var visible = column.visible

	            if (column.name in visibility){
	                visible = visibility[column.name]
	            }

	            return {
	                cls     : visible?'z-selected': '',
	                selected: visible? '✓': '',
	                label   : column.title,
	                fn      : this.toggleColumn.bind(this, column)
	            }
	        }.bind(this)

	        function menu(eventTarget, props){

	            var columns = props.gridColumns

	            props.columns = [ 'selected', 'label']
	            props.items = columns.map(menuItem)
	            props.alignTo = eventTarget
	            props.alignPositions = [
	                'tl-bl',
	                'tr-br',
	                'bl-tl',
	                'br-tr'
	            ]
	            props.style = {
	                position: 'absolute'
	            }

	            var factory = this.props.columnMenuFactory || ReactMenu

	            var result = factory(props)

	            return result === undefined?
	                    ReactMenu(props):
	                    result
	        }

	        this.props.showMenu(menu.bind(this, event.currentTarget), {
	            menuColumn: column.name
	        })
	    },

	    showFilterMenu: function(column, event){

	        function menu(eventTarget, props){

	            var defaultFactory = this.props.filterMenuFactory
	            var factory = column.filterMenuFactory || defaultFactory

	            props.columns = ['component']
	            props.column = column
	            props.alignTo = eventTarget
	            props.alignPositions = [
	                'tl-bl',
	                'tr-br',
	                'bl-tl',
	                'br-tr'
	            ]
	            props.style = {
	                position: 'absolute'
	            }

	            var result = factory(props)

	            return result === undefined?
	                        defaultFactory(props):
	                        result
	        }

	        this.props.showMenu(menu.bind(this, event.currentTarget), {
	            menuColumn: column.name
	        })
	    },

	    toggleColumn: function(column){
	        this.props.toggleColumn(column)
	    },

	    hideMenu: function(){
	        this.props.showColumnMenu(null, null)
	    },

	    handleResizeMouseDown: function(column, event){
	        setupColumnResize(this, this.props, column, event)

	        //in order to prevent setupColumnDrag in handleMouseDown
	        // event.stopPropagation()

	        //we are doing setupColumnDrag protection using the resizing flag on native event
	        if (event.nativeEvent){
	            event.nativeEvent.resizing = true
	        }
	    },

	    handleFilterMouseUp: function(column, event){
	        event.nativeEvent.stopSort = true

	        this.showFilterMenu(column, event)
	        // event.stopPropagation()
	    },

	    handleMouseUp: function(column, event){
	        if (this.state.dragging){
	            return
	        }

	        if (event && event.nativeEvent && event.nativeEvent.stopSort){
	            return
	        }

	        if (column.sortable){
	            this.toggleSort(column)
	        }
	    },

	    handleMouseOut: function(column){
	        this.setState({
	            mouseOver: false
	        })
	    },

	    handleMouseOver: function(column){
	        this.setState({
	            mouseOver: column.name
	        })
	    },

	    handleMouseDown: function(column, event){
	        if (event && event.nativeEvent && event.nativeEvent.resizing){
	            return
	        }

	        if (!this.props.reorderColumns){
	            return
	        }

	        setupColumnDrag(this, this.props, column, event)
	    },

	    onResizeDragStart: function(config){
	        this.props.onColumnResizeDragStart(config)
	    },

	    onResizeDrag: function(config){
	        this.props.onColumnResizeDrag(config)
	    },

	    onResizeDrop: function(config, resizeInfo){
	        this.props.onColumnResizeDrop(config, resizeInfo)
	    },

	    prepareProps: function(thisProps){
	        var props = {}

	        assign(props, thisProps)

	        this.prepareClassName(props)
	        this.prepareStyle(props)

	        return props
	    },

	    prepareClassName: function(props){
	        props.className = props.className || ''
	        props.className += ' ' + props.defaultClassName

	        if (this.state.dragging){
	            props.className += ' ' + props.draggingClassName
	        }
	    },

	    prepareStyle: function(props){
	        var style = props.style = {}

	        assign(style, props.defaultStyle)
	    }
	})


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var data = window.__DATA = {};

	var React = _interopRequire(__webpack_require__(1));

	var assign = _interopRequire(__webpack_require__(38));

	var CodeMirror = _interopRequire(__webpack_require__(149));

	var buffer = _interopRequire(__webpack_require__(157));

	__webpack_require__(151);

	var req = __webpack_require__(150);
	var prev = Date.now();

	req.keys().forEach(function (key) {
		var newKey = key.replace("./", "../data/");
		newKey = newKey.replace(".js", "");

		var value = req(key);
		data[newKey] = value;
	});

	function emptyFn() {}

	var prefix = "\n;var require = (function(){\n\tvar MAP = Object.assign({\n\t\treact: window.React,\n\t\t'react-datagrid': window.ReactDataGrid,\n\t\tsorty: window.sorty,\n\t\tfetch: window.fetch\n\t}, __DATA)\n\n\treturn function(path){\n\t\tvar res = MAP[path] || window[path]\n\n\t\tif (!res){\n\t\t\tthrow 'Module \"' + path + '\" not found. Please use one of the following: \"' + Object.keys(MAP).join('\", \"') + '\".'\n\t\t}\n\n\t\treturn res\n\t}\n\n})();\n; var module = {\n\texports: null\n};\n";

	var suffix = "\nreturn module.exports\n";

	var Snippet = React.createClass({
		displayName: "Snippet",

		getInitialState: function getInitialState() {
			return {
				code: this.props.code
			};
		},

		getDefaultProps: function getDefaultProps() {
			return {
				transformer: function transformer(code) {
					return JSXTransformer.transform(code).code;
				}
			};
		},

		render: function render() {

			var props = this.prepareProps(this.props);

			return React.createElement("div", props);
		},

		prepareProps: function prepareProps(thisProps) {
			var props = assign({}, thisProps);

			props.className = this.prepareClassName(props);
			props.children = this.prepareChildren(props);

			return props;
		},

		prepareChildren: function prepareChildren(props) {

			var children = [];

			React.Children.forEach(props.children, function (child) {
				children.push(child);
			});

			var code = this.state.code;
			var err = this.state.err;
			var border = err ? "1px solid rgb(255, 89, 89)" : "1px solid gray";

			var editor = React.createElement(CodeMirror, {
				key: "code",
				ref: "editor",
				className: "react-code-mirror",
				lineNumbers: true,
				value: code,
				style: { border: border },
				height: props.height,
				codeText: code,
				onChange: this.handleChange
			});

			children.push(editor);

			if (err) {
				children.push(React.createElement(
					"div",
					{ className: "editor-error" },
					err
				));
			}

			return children;
		},

		handleChange: function handleChange(code) {
			this.setState({ code: code });
		},

		prepareClassName: function prepareClassName(props) {
			var className = props.className || "";

			className += "snippet";

			return className;
		},

		compileCode: function compileCode() {
			return this.props.transformer(this.state.code);
		},

		componentDidMount: function componentDidMount() {
			this.executeCode = buffer(this.executeCode, 300);
		},

		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			// execute code only when the state's not being updated by switching tab
			// this avoids re-displaying the error, which comes after a certain delay
			if (this.props.transformer !== prevProps.transformer || this.state.code !== prevState.code) {
				this.executeCode();
			}
		},

		executeCode: function executeCode() {

			try {
				var compiledCode = this.compileCode();

				compiledCode = prefix + compiledCode + suffix;

				var fn = new Function(compiledCode);
				var cmp = fn();

				this.setState({
					err: null
				});(this.props.updateCmp || emptyFn)(cmp);
			} catch (err) {
				this.setState({
					err: err.toString()
				});
			}

			prev = Date.now();
		}
	});

	module.exports = Snippet;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(153);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159); //a data array
	/**
	 * data is an array with 200 items, like:
	 * [
	 * 		{ id: 0, index: 1, firstName: 'John', city: 'London', 'email: jon@gmail.com'},
	 * 		{ id: 1, .... }
	 * ]
	 */
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "lastName" }, { name: "city" }, { name: "email" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 }
				//if you don't want to show a column menu to show/hide columns, use
				//withColumnMenu={false}
			});
		}
	});

	module.exports = App;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200') //a data array\n/**\n * data is an array with 200 items, like:\n * [\n * \t\t{ id: 0, index: 1, firstName: 'John', city: 'London', 'email: jon@gmail.com'},\n * \t\t{ id: 1, .... }\n * ]\n */\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'lastName'  },\n\t{ name: 'city' },\n\t{ name: 'email' }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t\t//if you don't want to show a column menu to show/hide columns, use\n\t\t\t//withColumnMenu={false}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName", flex: 2, minWidth: 300 }, { name: "lastName", flex: 2, minWidth: 300 }, { name: "email", title: "Email (minWidth: 200)", flex: 1, minWidth: 200 }, { name: "city", title: "City (minWidth: 200)", flex: 1, minWidth: 200 }, { name: "street", minWidth: 100 }, { name: "country", minWidth: 100 }, { name: "catchPhrase", minWidth: 400 }];

	var App = React.createClass({
		displayName: "App",

		onColumnResize: function onColumnResize(firstCol, firstSize, secondCol, secondSize) {
			firstCol.width = firstCol.minWidth = firstSize;
			if (secondCol) {
				secondCol.width = secondCol.minWidth = secondSize;
			}
			this.setState({});
		},
		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },
				onColumnResize: this.onColumnResize
			});
		}
	});

	module.exports = App;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName', flex: 2, minWidth: 300 },\n\t{ name: 'lastName', flex: 2, minWidth: 300  },\n\t{ name: 'email', title: 'Email (minWidth: 200)', flex: 1, minWidth: 200},\n\t{ name: 'city', title: 'City (minWidth: 200)', flex: 1, minWidth: 200},\n\t{ name: 'street', minWidth: 100},\n\t{ name: 'country', minWidth: 100},\n\t{ name: 'catchPhrase', minWidth: 400}\n]\n\nvar App = React.createClass({\n\tonColumnResize: function(firstCol, firstSize, secondCol, secondSize){\n\t    firstCol.width = firstCol.minWidth = firstSize\n\t    if (secondCol){\n\t        secondCol.width = secondCol.minWidth = secondSize\n\t    }\n\t    this.setState({})\n\t},\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t\tonColumnResize={this.onColumnResize}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "city" }, { name: "email" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },
				showCellBorders: true //other valid values: 'horizontal', 'vertical'
				// showCellBorders={'vertical'}
			});
		}
	});

	module.exports = App;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'city' },\n\t{ name: 'email' }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t\tshowCellBorders={true} //other valid values: 'horizontal', 'vertical'\n\t\t\t// showCellBorders={'vertical'}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [
	//specify a render function to configure custom rendering
	{ name: "index", render: function render(v) {
			return "Index " + v;
		} }, { name: "firstName" }, { name: "lastName" }, { name: "city" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 }
			});
		}
	});

	module.exports = App;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t//specify a render function to configure custom rendering\n\t{ name: 'index', render: function(v){return 'Index ' + v} },\n\t{ name: 'firstName' },\n\t{ name: 'lastName'  },\n\t{ name: 'city'}\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "lastName" }, { name: "city", style: { color: "red" } }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 }
			});
		}
	});

	module.exports = App;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'lastName'  },\n\t{ name: 'city', style: { color: 'red' } }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName", textAlign: "center" }, { name: "city", textAlign: "right" }, { name: "email", textAlign: "right" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },
				rowHeight: 50
			});
		}
	});

	module.exports = App;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName', textAlign: 'center' },\n\t{ name: 'city', textAlign: 'right' },\n\t{ name: 'email', textAlign: 'right' }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t\trowHeight={50}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "lastName" }, { name: "country" }];

	function rowStyle(data, props) {
		var style = {};
		if (props.index % 4 == 0) {
			style.color = "blue";
		}

		if (data.country == "USA") {
			style.background = "#FFD3D3";
			style.fontWeight = "bold";
		}

		return style;
	}

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				// rowStyle={{color: 'blue'}} //can be an obj or a function
				rowStyle: rowStyle,
				style: { height: 400 }
			});
		}
	});

	module.exports = App;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'lastName'  },\n\t{ name: 'country' }\n]\n\nfunction rowStyle(data, props){\n\tvar style = {}\n\tif (props.index % 4 == 0){\n\t\tstyle.color = 'blue'\n\t}\n\n\tif (data.country == 'USA'){\n\t\tstyle.background = '#FFD3D3'\n\t\tstyle.fontWeight = 'bold'\n\t}\n\n\treturn style\n}\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\t// rowStyle={{color: 'blue'}} //can be an obj or a function\n\t\t\trowStyle={rowStyle}\n\t\t\tstyle={{height: 400}}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = [];
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "city" }, { name: "email" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 200 },
				emptyText: "No records"
			});
		}
	});

	module.exports = App;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = []\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'city' },\n\t{ name: 'email' }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 200}}\n\t\t\temptyText={'No records'}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data1000 = __webpack_require__(160);
	var data = [].concat(data1000);

	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName", flex: 1 }, { name: "lastName" }, { name: "city", flex: 1 }, { name: "country", flex: 1 }, { name: "email", width: 200 }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },

				onFilter: this.handleFilter,
				liveFilter: true //to apply the filter while typing
			});
		},
		handleFilter: function handleFilter(column, value, allFilterValues) {
			//reset data to original data-array
			data = data1000;

			//go over all filters and apply them
			Object.keys(allFilterValues).forEach(function (name) {
				var columnFilter = (allFilterValues[name] + "").toUpperCase();

				if (columnFilter == "") {
					return;
				}

				data = data.filter(function (item) {
					if ((item[name] + "").toUpperCase().indexOf(columnFilter) === 0) {
						return true;
					}
				});
			});

			this.setState({});
		}
	});

	module.exports = App;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "'use strict';\n\nvar React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data1000  = require('../data/1000')\nvar data      = [].concat(data1000)\n\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName', flex: 1 },\n\t{ name: 'lastName'  },\n\t{ name: 'city', flex: 1 },\n\t{ name: 'country', flex: 1 },\n\t{ name: 'email', width: 200 }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\t\tidProperty='id'\n\t\t\t\tdata={data}\n\t\t\t\tcolumns={columns}\n\t\t\t\tstyle={{height: 400}}\n\n\t\t\t\tonFilter={this.handleFilter}\n\t\t\t\tliveFilter={true} //to apply the filter while typing\n\t\t\t/>\n\t},\n\thandleFilter: function(column, value, allFilterValues){\n\t\t//reset data to original data-array\n\t    data = data1000\n\n\t    //go over all filters and apply them\n    \tObject.keys(allFilterValues).forEach(function(name){\n    \t\tvar columnFilter = (allFilterValues[name] + '').toUpperCase()\n\n    \t\tif (columnFilter == ''){\n    \t\t\treturn\n    \t\t}\n\n    \t\tdata = data.filter(function(item){\n    \t\t    if ((item[name] + '').toUpperCase().indexOf(columnFilter) === 0){\n    \t\t        return true\n    \t\t    }\n    \t\t})\n    \t})\n\n\t    this.setState({})\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data1000 = __webpack_require__(160);
	var data = [].concat(data1000);

	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName", flex: 1 }, { name: "lastName" }, { name: "city", flex: 1 }, { name: "country", flex: 1 }, { name: "email", width: 200 }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },

				onFilter: this.handleFilter,
				liveFilter: true //to apply the filter while typing
			});
		},
		handleFilter: function handleFilter(column, value, allFilterValues) {
			//reset data to original data-array
			data = data1000;

			//go over all filters and apply them
			Object.keys(allFilterValues).forEach(function (name) {
				var columnFilter = (allFilterValues[name] + "").toUpperCase();

				if (columnFilter == "") {
					return;
				}

				data = data.filter(function (item) {
					if ((item[name] + "").toUpperCase().indexOf(columnFilter) === 0) {
						return true;
					}
				});
			});

			this.setState({});
		}
	});

	module.exports = App;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "'use strict';\n\nvar React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data1000  = require('../data/1000')\nvar data      = [].concat(data1000)\n\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName', flex: 1 },\n\t{ name: 'lastName'  },\n\t{ name: 'city', flex: 1 },\n\t{ name: 'country', flex: 1 },\n\t{ name: 'email', width: 200 }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\t\tidProperty='id'\n\t\t\t\tdata={data}\n\t\t\t\tcolumns={columns}\n\t\t\t\tstyle={{height: 400}}\n\n\t\t\t\tonFilter={this.handleFilter}\n\t\t\t\tliveFilter={true} //to apply the filter while typing\n\t\t\t/>\n\t},\n\thandleFilter: function(column, value, allFilterValues){\n\t\t//reset data to original data-array\n\t    data = data1000\n\n\t    //go over all filters and apply them\n    \tObject.keys(allFilterValues).forEach(function(name){\n    \t\tvar columnFilter = (allFilterValues[name] + '').toUpperCase()\n\n    \t\tif (columnFilter == ''){\n    \t\t\treturn\n    \t\t}\n\n    \t\tdata = data.filter(function(item){\n    \t\t    if ((item[name] + '').toUpperCase().indexOf(columnFilter) === 0){\n    \t\t        return true\n    \t\t    }\n    \t\t})\n    \t})\n\n\t    this.setState({})\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);

	var columns = [{ name: "index", title: "#", width: 150 }, { name: "firstName" }, { name: "country" }, { name: "grade" }];

	module.exports = React.createClass({
		displayName: "exports",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				groupBy: ["country", "grade"],
				style: { height: 400 }
			});
		}
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "'use strict';\n\nvar React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\n\nvar columns = [\n\t{ name: 'index', title: '#', width: 150 },\n\t{ name: 'firstName' },\n\t{ name: 'country'   },\n\t{ name: 'grade'     }\n]\n\nmodule.exports = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tgroupBy={['country','grade']}\n\t\t\tstyle={{height: 400}}\n\t\t/>\n\t}\n})"

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);

	var data = [];
	var columns = [{ name: "index", title: "#", width: 150 }, { name: "firstName" }, { name: "lastName" }, { name: "city", width: 200 }, { name: "country", width: 200 }, { name: "email" }];

	var loading = true;

	module.exports = React.createClass({
		displayName: "exports",

		componentDidMount: function componentDidMount() {
			fetch("./huge.json") //100.000 records
			.then(function (response) {
				return response.json();
			}).then((function (array) {
				data = array;
				loading = false;
				this.setState({});
			}).bind(this));
		},

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 700 },
				loading: loading
			});
		}
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "'use strict';\n\nvar React    = require('react')\nvar DataGrid = require('react-datagrid')\n\nvar data    = []\nvar columns = [\n\t{ name: 'index', title: '#', width: 150 },\n\t{ name: 'firstName'},\n\t{ name: 'lastName' },\n\t{ name: 'city', width: 200 },\n\t{ name: 'country', width: 200 },\n\t{ name: 'email'}\n]\n\nvar loading = true\n\nmodule.exports = React.createClass({\n\n\tcomponentDidMount: function(){\n\t\tfetch('./huge.json') //100.000 records\n\t\t\t.then(function(response){\n\t\t\t\treturn response.json()\n\t\t\t})\n\t\t\t.then(function(array){\n\t\t\t\tdata = array\n\t\t\t\tloading = false\n\t\t\t\tthis.setState({})\n\t\t\t}.bind(this))\n\t},\n\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 700}}\n\t\t\tloading={loading}\n\t\t/>\n\t}\n})"

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = [];
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "email" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 200 },
				loading: true
				//if you dont want loadMask over header, specify
				//loadMaskOverHeader={false}
			});
		}
	});

	module.exports = App;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = []\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'email' }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 200}}\n\t\t\tloading={true}\n\t\t\t//if you dont want loadMask over header, specify\n\t\t\t//loadMaskOverHeader={false}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(161);

	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName" }, { name: "lastName" }, { name: "email" }];

	var App = React.createClass({
		displayName: "App",

		handleColumnOrderChange: function handleColumnOrderChange(index, dropIndex) {
			var col = columns[index];
			columns.splice(index, 1); //delete from index, 1 item
			columns.splice(dropIndex, 0, col);
			this.setState({});
		},
		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				onColumnOrderChange: this.handleColumnOrderChange,
				columns: columns,
				style: { height: 500 }
				//reorderColumns is true by default
			});
		}
	});

	module.exports = App;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "'use strict';\n\nvar React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data  = require('../data/1500')\n\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName' },\n\t{ name: 'lastName'  },\n\t{ name: 'email' }\n]\n\nvar App = React.createClass({\n\thandleColumnOrderChange: function (index, dropIndex){\n\t\tvar col = columns[index]\n\t\tcolumns.splice(index, 1) //delete from index, 1 item\n\t\tcolumns.splice(dropIndex, 0, col)\n\t\tthis.setState({})\n\t},\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tonColumnOrderChange={this.handleColumnOrderChange}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 500}}\n\t\t\t//reorderColumns is true by default\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var sorty = __webpack_require__(37);

	var data1000 = __webpack_require__(162);
	var data = [].concat(data1000);
	var SORT_INFO = [{ name: "country", dir: "asc" }];

	var columns = [{ name: "index", title: "#", width: 50, type: "number" }, { name: "country", flex: 1 }, { name: "city", flex: 1 }, { name: "firstName", flex: 2 }, { name: "lastName", flex: 2 }, { name: "email", width: 200 }];

	function sort(arr) {
		return sorty(SORT_INFO, arr);
	}
	//sort data array with the initial sort order
	data = sort(data);

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },

				sortInfo: SORT_INFO,
				onSortChange: this.handleSortChange,

				onColumnOrderChange: this.handleColumnOrderChange
			});
		},
		handleSortChange: function handleSortChange(sortInfo) {
			SORT_INFO = sortInfo;

			data = [].concat(data1000);
			data = sort(data);

			this.setState({});
		},
		handleColumnOrderChange: function handleColumnOrderChange(index, dropIndex) {
			var col = columns[index];
			columns.splice(index, 1); //delete from index, 1 item
			columns.splice(dropIndex, 0, col);
			this.setState({});
		}
	});

	module.exports = App;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "'use strict';\n\nvar React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar sorty    = require('sorty')\n\nvar data1000  = require('../data/100')\nvar data      = [].concat(data1000)\nvar SORT_INFO = [ { name: 'country', dir: 'asc'}]\n\nvar columns = [\n\t{ name: 'index', title: '#', width: 50, type: 'number' },\n\t{ name: 'country', flex: 1 },\n\t{ name: 'city', flex: 1 },\n\t{ name: 'firstName', flex: 2 },\n\t{ name: 'lastName', flex: 2  },\n\t{ name: 'email', width: 200 }\n]\n\nfunction sort(arr){\n\treturn sorty(SORT_INFO, arr)\n}\n//sort data array with the initial sort order\ndata = sort(data)\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\t\tidProperty='id'\n\t\t\t\tdata={data}\n\t\t\t\tcolumns={columns}\n\t\t\t\tstyle={{height: 400}}\n\n\t\t\t\tsortInfo={SORT_INFO}\n\t\t\t\tonSortChange={this.handleSortChange}\n\n\t\t\t\tonColumnOrderChange={this.handleColumnOrderChange}\n\t\t\t/>\n\t},\n\thandleSortChange: function(sortInfo){\n\t\tSORT_INFO = sortInfo\n\n\t\tdata = [].concat(data1000)\n\t\tdata = sort(data)\n\n\t\tthis.setState({})\n\t},\n\thandleColumnOrderChange: function (index, dropIndex){\n\t\tvar col = columns[index]\n\t\tcolumns.splice(index, 1) //delete from index, 1 item\n\t\tcolumns.splice(dropIndex, 0, col)\n\t\tthis.setState({})\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var DataGrid = __webpack_require__(52);
	var data = __webpack_require__(159);
	var columns = [{ name: "index", title: "#", width: 50 }, { name: "firstName", textAlign: "center" }, { name: "city", textAlign: "right" }, { name: "email", textAlign: "right" }];

	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(DataGrid, {
				idProperty: "id",
				data: data,
				columns: columns,
				style: { height: 400 },
				rowHeight: 50
			});
		}
	});

	module.exports = App;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React    = require('react')\nvar DataGrid = require('react-datagrid')\nvar data     = require('../data/200')\nvar columns = [\n\t{ name: 'index', title: '#', width: 50 },\n\t{ name: 'firstName', textAlign: 'center' },\n\t{ name: 'city', textAlign: 'right' },\n\t{ name: 'email', textAlign: 'right' }\n]\n\nvar App = React.createClass({\n\trender: function(){\n\t\treturn <DataGrid\n\t\t\tidProperty='id'\n\t\t\tdata={data}\n\t\t\tcolumns={columns}\n\t\t\tstyle={{height: 400}}\n\t\t\trowHeight={50}\n\t\t/>\n\t}\n})\n\nmodule.exports = App"

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(165)

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(str){
	    return str.length?
	            str.charAt(0).toLowerCase() + str.substring(1):
	            str
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(value){
	    return value.length?
	                value.charAt(0).toUpperCase() + value.substring(1):
	                value
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var doubleColonRe      = /::/g
	var upperToLowerRe     = /([A-Z]+)([A-Z][a-z])/g
	var lowerToUpperRe     = /([a-z\d])([A-Z])/g
	var underscoreToDashRe = /_/g

	module.exports = function(name, separator){

	   return name?
	           name.replace(doubleColonRe, '/')
	                .replace(upperToLowerRe, '$1_$2')
	                .replace(lowerToUpperRe, '$1_$2')
	                .replace(underscoreToDashRe, separator || '-')
	            :
	            ''
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var RE = /\s/g

	module.exports = function(str){
	    if (!str){
	        return ''
	    }

	    return str.replace(RE, '')
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var RE = /\s+/g

	module.exports = function(str){
	    if (!str){
	        return ''
	    }

	    return str.trim().replace(RE, ' ')
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var toCamelFn = function(str, letter){
	       return letter ? letter.toUpperCase(): ''
	   }

	var hyphenRe = __webpack_require__(164)

	module.exports = function(str){
	   return str?
	          str.replace(hyphenRe, toCamelFn):
	          ''
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var separate     = __webpack_require__(125)
	var camelize     = __webpack_require__(128)
	var toUpperFirst = __webpack_require__(124)
	var hyphenRe     = __webpack_require__(164)

	function toLowerAndSpace(str, letter){
	    return letter? ' ' + letter.toLowerCase(): ' '
	}

	module.exports = function(name, config){

	    var str = config && config.capitalize?
	                    separate(camelize(name), ' '):
	                    separate(name, ' ').replace(hyphenRe, toLowerAndSpace)

	    return toUpperFirst(str.trim())
	}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var separate = __webpack_require__(125)

	module.exports = function(name){
	   return separate(name).toLowerCase()
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(str, endsWith){

	    str += ''

	    if (!str){
	        return typeof endsWith == 'string'?
	                    !endsWith:
	                    false
	    }

	    endsWith += ''

	    if (str.length < endsWith.length){
	        return false
	    }

	    return str.lastIndexOf(endsWith) == str.length - endsWith.length
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };

	module.exports = emptyFunction;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	function curry(fn, n){

	    if (typeof n !== 'number'){
	        n = fn.length
	    }

	    function getCurryClosure(prevArgs){

	        function curryClosure() {

	            var len  = arguments.length
	            var args = [].concat(prevArgs)

	            if (len){
	                args.push.apply(args, arguments)
	            }

	            if (args.length < n){
	                return getCurryClosure(args)
	            }

	            return fn.apply(this, args)
	        }

	        return curryClosure
	    }

	    return getCurryClosure([])
	}

	module.exports = curry

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    string: function(a, b){

	        a += ''
	        b += ''

	        return a.localeCompare(b)
	    },

	    number: function(a, b) {
	        return a - b
	    }
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    alphanum: __webpack_require__(167),
	    match   : __webpack_require__(168),
	    guid   : __webpack_require__(169),
	    // email   : require('./email'),
	    numeric   : __webpack_require__(170)
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getPrefix     = __webpack_require__(172)
	var forcePrefixed = __webpack_require__(173)
	var el            = __webpack_require__(174)

	var MEMORY = {}
	var STYLE
	var ELEMENT

	module.exports = function(key, value){

	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   ||  ELEMENT.style

	    var k = key + ': ' + value

	    if (MEMORY[k]){
	        return MEMORY[k]
	    }

	    var prefix
	    var prefixed
	    var prefixedValue

	    if (!(key in STYLE)){

	        prefix = getPrefix('appearance')

	        if (prefix){
	            prefixed = forcePrefixed(key, value)

	            prefixedValue = '-' + prefix.toLowerCase() + '-' + value

	            if (prefixed in STYLE){
	                ELEMENT.style[prefixed] = ''
	                ELEMENT.style[prefixed] = prefixedValue

	                if (ELEMENT.style[prefixed] !== ''){
	                    value = prefixedValue
	                }
	            }
	        }
	    }

	    MEMORY[k] = value

	    return value
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(175)
	var getPrefix    = __webpack_require__(172)
	var el           = __webpack_require__(174)

	var MEMORY = {}
	var STYLE
	var ELEMENT

	module.exports = function(key, value){

	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   || ELEMENT.style

	    var k = key// + ': ' + value

	    if (MEMORY[k]){
	        return MEMORY[k]
	    }

	    var prefix
	    var prefixed

	    if (!(key in STYLE)){//we have to prefix

	        prefix = getPrefix('appearance')

	        if (prefix){
	            prefixed = prefix + toUpperFirst(key)

	            if (prefixed in STYLE){
	                key = prefixed
	            }
	        }
	    }

	    MEMORY[k] = key

	    return key
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  'alignItems': 1,
	  'justifyContent': 1,
	  'flex': 1,
	  'flexFlow': 1,

	  'userSelect': 1,
	  'transform': 1,
	  'transition': 1,
	  'transformOrigin': 1,
	  'transformStyle': 1,
	  'transitionProperty': 1,
	  'transitionDuration': 1,
	  'transitionTimingFunction': 1,
	  'transitionDelay': 1,
	  'borderImage': 1,
	  'borderImageSlice': 1,
	  'boxShadow': 1,
	  'backgroundClip': 1,
	  'backfaceVisibility': 1,
	  'perspective': 1,
	  'perspectiveOrigin': 1,
	  'animation': 1,
	  'animationDuration': 1,
	  'animationName': 1,
	  'animationDelay': 1,
	  'animationDirection': 1,
	  'animationIterationCount': 1,
	  'animationTimingFunction': 1,
	  'animationPlayState': 1,
	  'animationFillMode': 1,
	  'appearance': 1
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var React  = __webpack_require__(1)
	var assign = __webpack_require__(38)
	var Loader = __webpack_require__(171)

	module.exports = React.createClass({

	    displayName: 'LoadMask',

	    getDefaultProps: function(){

	        return {
	            visible: false,
	            visibleDisplayValue: 'block',
	            defaultStyle: {
	                background: 'rgba(128, 128, 128, 0.5)',
	                position: 'absolute',
	                width   : '100%',
	                height  : '100%',
	                display : 'none',
	                top: 0,
	                left: 0
	            }
	        }
	    },

	    render: function(){
	        var props = assign({}, this.props)

	        props.style = this.prepareStyle(props)

	        props.className = props.className || ''
	        props.className += ' loadmask'

	        return React.createElement("div", React.__spread({},  props), 
	            React.createElement(Loader, {size: props.size})
	        )
	    },

	    prepareStyle: function(props){

	        var style = assign({}, props.defaultStyle, props.style)

	        style.display = props.visible?
	                        props.visibleDisplayValue:
	                        'none'

	        return style
	    }
	})

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function findIndexBy(arr, fn){

	    var i   = 0
	    var len = arr.length

	    for (; i < len; i++){
	        if (fn(arr[i]) === true){
	            return i
	        }
	    }

	    return -1
	}

	module.exports = findIndexBy

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(38)
	var React  = __webpack_require__(1)

	var Row        = __webpack_require__(147)
	var RowFactory = React.createFactory(Row)

	/**
	 * Render a datagrid row
	 *
	 * @param  {Object}   props The props from which to build row props
	 * @param  {Object}   data The data object that backs this row
	 * @param  {Number}   index The index in the grid of the row to be rendered
	 * @param  {Function} [fn] A function that can be used to modify built row props
	 *
	 * If props.rowFactory is specified, it will be used to build the ReactElement
	 * corresponding to this row. In case it returns undefined, the default RowFactory will be used
	 * (this case occurs when the rowFactory was specified just to modify the row props)
	 *
	 * @return {ReactElement}
	 */
	module.exports = function renderRow(props, data, index, fn){
	    var factory  = props.rowFactory || RowFactory
	    var key      = data[props.idProperty]

	    var selected = false

	    if (typeof props.selected == 'object' && props.selected){
	        selected = !!props.selected[key]
	    } else if (props.selected){
	        selected = key === props.selected
	    }

	    var config = {
	        className: index % 2 === 0? 'z-even': 'z-odd',
	        selected : selected,

	        key      : key,
	        data     : data,
	        index    : index,

	        cellFactory: props.cellFactory,
	        renderCell : props.renderCell,
	        renderText : props.renderText,
	        cellPadding: props.cellPadding,
	        rowHeight  : props.rowHeight,
	        columns    : props.columns,

	        rowContextMenu: props.rowContextMenu,
	        showMenu: props.showMenu,

	        _onClick: props.onRowClick
	    }

	    var style
	    var rowStyle = props.rowStyle

	    if (rowStyle){
	        style = {}

	        if (typeof rowStyle == 'function'){
	            style = rowStyle(data, config)
	        } else {
	            assign(style, rowStyle)
	        }

	        config.style = style
	    }

	    var className = props.rowClassName

	    if (typeof className == 'function'){
	        className = className(data, config)
	    }

	    if (className){
	        config.className = className
	    }

	    if (typeof fn == 'function'){
	        config = fn(config)
	    }

	    var row = factory(config)

	    if (row === undefined){
	        row = RowFactory(config)
	    }

	    if (config.selected && this){
	        this.selIndex = index
	    }

	    return row
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var normalize = __webpack_require__(51)

	module.exports = function(props){
	    var scrollTop  = props.virtualRendering?
	                        -(props.topOffset || 0):
	                        props.scrollTop

	    return normalize({
	        transform: 'translate3d(' + -props.scrollLeft + 'px, ' + -scrollTop + 'px, 0px)'
	    })
	}


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(props, state){
	    var selected = props.selected == null?
	                        state.defaultSelected
	                        :
	                        props.selected

	    return selected
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function asArray(x){
	    if (!x){
	        x = []
	    }

	    if (!Array.isArray(x)){
	        x = [x]
	    }

	    return x
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region     = __webpack_require__(122)
	var DragHelper = __webpack_require__(155)

	function range(start, end){
	    var res = []

	    for ( ; start <= end; start++){
	        res.push(start)
	    }

	    return res
	}

	function buildIndexes(direction, index, dragIndex){
	    var indexes = direction < 0 ?
	                    range(index, dragIndex):
	                    range(dragIndex, index)

	    var result = {}

	    indexes.forEach(function(value){
	        result[value] = true
	    })

	    return result
	}

	module.exports = function(header, props, column, event){

	    event.preventDefault()

	    var headerNode   = header.getDOMNode()
	    var headerRegion = Region.from(headerNode)
	    var dragColumn = column
	    var dragColumnIndex
	    var columnData
	    var shiftRegion

	    DragHelper(event, {

	        constrainTo: headerRegion.expand({ top: true, bottom: true}),

	        onDragStart: function(event, config){

	            var columnHeaders = headerNode.querySelectorAll('.' + props.cellClassName)

	            columnData = props.columns.map(function(column, i){
	                var region = Region.from(columnHeaders[i])

	                if (column === dragColumn){
	                    dragColumnIndex = i
	                    shiftRegion = region.clone()
	                }

	                return {
	                    column: column,
	                    index: i,
	                    region: region
	                }
	            })

	            header.setState({
	                dragColumn: column,
	                dragging  : true
	            })

	            config.columnData = columnData

	        },
	        onDrag: function(event, config){
	            var diff = config.diff.left
	            var directionSign = diff < 0? -1: 1
	            var state = {
	                dragColumnIndex  : dragColumnIndex,
	                dragColumn  : dragColumn,
	                dragLeft    : diff,
	                dropIndex   : null,
	                shiftIndexes: null,
	                shiftSize   : null
	            }

	            var shift
	            var shiftSize
	            var newLeft   = shiftRegion.left + diff
	            var newRight  = newLeft + shiftRegion.width
	            var shiftZone = { left: newLeft, right: newRight}

	            config.columnData.forEach(function(columnData, index, arr){

	                var itColumn = columnData.column
	                var itRegion = columnData.region

	                if (shift || itColumn === dragColumn){
	                    return
	                }

	                var itLeft  = itRegion.left
	                var itRight = itRegion.right
	                var itZone  = directionSign == -1?
	                            { left: itLeft, right: itLeft + itRegion.width }:
	                            { left: itRight - itRegion.width, right: itRight }

	                if (shiftRegion.width < itRegion.width){
	                    //shift region is smaller than itRegion
	                    shift = Region.getIntersectionWidth(
	                            itZone,
	                            shiftZone
	                        ) >= Math.min(
	                            itRegion.width,
	                            shiftRegion.width
	                        ) / 2

	                } else {
	                    //shift region is bigger than itRegion
	                    shift = Region.getIntersectionWidth(itRegion, shiftZone) >= itRegion.width / 2
	                }

	                if (shift) {
	                    shiftSize = -directionSign * shiftRegion.width
	                    state.dropIndex = index
	                    state.shiftIndexes = buildIndexes(directionSign, index, dragColumnIndex)
	                    state.shiftSize = shiftSize
	                }
	            })

	            header.setState(state)
	        },

	        onDrop: function(event){
	            header.onDrop(event)
	        }
	    })
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region     = __webpack_require__(122)
	var DragHelper = __webpack_require__(155)

	var findIndexByName = __webpack_require__(75)

	module.exports = function(header, props, column, event){

	    // event.stopPropagation()
	    event.preventDefault()

	    var columns = props.columns
	    var index = findIndexByName(columns, column.name)
	    var proxyLeft = Region.from(event.target).right

	    var headerNode = header.getDOMNode()

	    var constrainTo = Region.from(headerNode)

	    DragHelper(event, {
	        constrainTo: constrainTo,

	        onDragStart: function(event, config){

	            header.onResizeDragStart({
	                resizing       : true,
	                resizeColumn   : column,
	                resizeProxyLeft: proxyLeft
	            })
	        },

	        onDrag: function(event, config){
	            var diff = config.diff.left

	            header.onResizeDrag({
	                resizeProxyDiff: diff
	            })
	        },

	        onDrop: function(event, config){

	            var diff = config.diff.left
	            var columnHeaders = headerNode.querySelectorAll('.' + props.cellClassName)
	            var nextColumn    = diff > 0?
	                                    null:
	                                    columns[index + 1]

	            var columnSize = Region.from(columnHeaders[index]).width
	            var nextColumnSize
	            var firstSize  = columnSize + diff
	            var secondSize = 0

	            // if (firstSize < column.minWidth){
	            //     firstSize = column.minWidth
	            //     diff = firstSize - columnSize
	            // }

	            if (nextColumn){
	                nextColumnSize = nextColumn?
	                                        Region.from(columnHeaders[ index + 1]).width
	                                        : 0

	                secondSize = nextColumnSize - diff

	            }

	            // if (nextColumn && secondSize < nextColumn.minWidth){
	            //     secondSize = nextColumn.minWidth
	            //     diff = nextColumnSize - secondSize
	            //     firstSize = columnSize + diff
	            // }

	            var resizeInfo = [{
	                name: column.name,
	                size: firstSize,
	                diff: diff
	            }]

	            if (nextColumn){
	                resizeInfo.push({
	                    name: nextColumn.name,
	                    size: secondSize,
	                    diff: -diff
	                })
	            }

	            header.onResizeDrop({
	                resizing: false,
	                resizeColumn: null,
	                resizeProxyLeft: null
	            }, resizeInfo)
	        }
	    })
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React       = __webpack_require__(1)
	var Region      = __webpack_require__(122)
	var assign      = __webpack_require__(38)
	var Cell        = __webpack_require__(148)
	var CellFactory = React.createFactory(Cell)
	var ReactMenu = __webpack_require__(166)
	var ReactMenuFactory = React.createFactory(ReactMenu)
	var prefixer  = __webpack_require__(187)

	module.exports = React.createClass({

	    displayName: 'ReactDataGrid.Row',

	    propTypes: {
	        data   : React.PropTypes.object,
	        columns: React.PropTypes.array,
	        index  : React.PropTypes.number
	    },

	    getDefaultProps: function(){

	        return {
	            defaultClassName  : 'z-row',
	            mouseOverClassName: 'z-over',
	            selectedClassName : 'z-selected',
	            defaultStyle      : prefixer({
	                userSelect: 'none'
	            })
	        }
	    },

	    getInitialState: function(){
	        return {
	            mouseOver: false
	        }
	    },

	    render: function() {
	        var props = this.prepareProps(this.props)
	        var cells = props.children || props.columns
	                                        .map(this.renderCell.bind(this, this.props))

	        return React.createElement("div", React.__spread({},  props), cells)
	    },

	    prepareProps: function(thisProps){
	        var props = assign({}, thisProps)

	        props.className = this.prepareClassName(props, this.state)
	        props.style = this.prepareStyle(props)

	        props.onMouseEnter = this.handleMouseEnter
	        props.onMouseLeave = this.handleMouseLeave
	        props.onContextMenu = this.handleContextMenu
	        props.onClick = this.handleRowClick

	        delete props.data
	        delete props.cellPadding

	        return props
	    },

	    handleRowClick: function(event){

	        if (this.props.onClick){
	            this.props.onClick(event)
	        }

	        if (this.props._onClick){
	            this.props._onClick(this.props, event)
	        }
	    },

	    handleContextMenu: function(event){

	        if (this.props.rowContextMenu){
	            this.showMenu(event)
	        }

	        if (this.props.onContextMenu){
	            this.props.onContextMenu(event)
	        }
	    },

	    showMenu: function(event){
	        var factory = this.props.rowContextMenu
	        var alignTo = Region.from(event)

	        var props = {
	            style: {
	                position: 'absolute'
	            },
	            rowProps: this.props,
	            data    : this.props.data,
	            alignTo : alignTo,
	            alignPositions: [
	                'tl-bl',
	                'tr-br',
	                'bl-tl',
	                'br-tr'
	            ],
	            items: [
	                {
	                    label: 'stop'
	                }
	            ]
	        }

	        var menu = factory(props)

	        if (menu === undefined){
	            menu = ReactMenuFactory(props)
	        }

	        event.preventDefault()

	        this.props.showMenu(function(){
	            return menu
	        })
	    },

	    handleMouseLeave: function(event){
	        this.setState({
	            mouseOver: false
	        })

	        if (this.props.onMouseLeave){
	            this.props.onMouseLeave(event)
	        }
	    },

	    handleMouseEnter: function(event){
	        this.setState({
	            mouseOver: true
	        })

	        if (this.props.onMouseEnter){
	            this.props.onMouseEnter(event)
	        }
	    },

	    renderCell: function(props, column, index){

	        var text = props.data[column.name]
	        var columns = props.columns

	        var cellProps = {
	            key        : column.name,
	            name       : column.name,
	            data       : props.data,
	            columns    : columns,
	            index      : index,
	            rowIndex   : props.index,
	            style      : column.style,
	            textPadding: props.cellPadding,
	            renderCell : props.renderCell,
	            renderText : props.renderText
	        }

	        if (typeof column.render == 'function'){
	            text = column.render(text, props.data, cellProps)
	        }

	        cellProps.text = text

	        var result

	        if (props.cellFactory){
	            result = props.cellFactory(cellProps)
	        }

	        if (result === undefined){
	            result = CellFactory(cellProps)
	        }

	        return result
	    },

	    prepareClassName: function(props, state){
	        var className = props.className || ''

	        className += ' ' + props.defaultClassName

	        if (state.mouseOver){
	            className += ' ' + props.mouseOverClassName
	        }

	        if (props.selected){
	            className += ' ' + props.selectedClassName
	        }

	        return className
	    },

	    prepareStyle: function(props){

	        var style = assign({}, props.defaultStyle, props.style)

	        style.height = props.rowHeight

	        return style
	    }
	})


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React  = __webpack_require__(1)
	var assign = __webpack_require__(38)
	var normalize = __webpack_require__(51)

	var EVENT_NAMES = __webpack_require__(158)

	var TEXT_ALIGN_2_JUSTIFY = {
	    right: 'flex-end',
	    center: 'center'
	}

	function copyProps(target, source, list){

	    list.forEach(function(name){
	        if (name in source){
	            target[name] = source[name]
	        }
	    })

	}

	module.exports = React.createClass({

	    displayName: 'ReactDataGrid.Cell',

	    propTypes: {
	        className  : React.PropTypes.string,
	        textPadding: React.PropTypes.oneOfType([
	            React.PropTypes.number,
	            React.PropTypes.string
	        ]),
	        style      : React.PropTypes.object,
	        text       : React.PropTypes.any,
	        rowIndex   : React.PropTypes.number
	    },

	    getDefaultProps: function(){
	        return {
	            text: '',
	            defaultClassName: 'z-cell'
	        }
	    },

	    render: function(){
	        var props     = this.props

	        var columns   = props.columns
	        var index     = props.index
	        var column    = columns? columns[index]: null
	        var className = props.className || ''
	        var textAlign = column && column.textAlign
	        var text      = props.renderText?
	                            props.renderText(props.text, column, props.rowIndex):
	                            props.text

	        var textCellProps = {
	            className: 'z-text',
	            style    : {padding: props.textPadding, margin: 'auto 0'}
	        }

	        var textCell = props.renderCell?
	                            props.renderCell(textCellProps, text, props):
	                            React.DOM.div(textCellProps, text)

	        if (!index){
	            className += ' z-first'
	        }
	        if (columns && index == columns.length - 1){
	            className += ' z-last'
	        }

	        if (textAlign){
	            className += ' z-align-' + textAlign
	        }

	        className += ' ' + props.defaultClassName

	        var sizeStyle = column && column.sizeStyle
	        var cellProps = {
	            className: className,
	            style    : normalize(assign({}, props.style, sizeStyle))
	        }

	        copyProps(cellProps, props, [
	            'onMouseOver',
	            'onMouseOut',
	            'onClick'
	        ].concat([
	            EVENT_NAMES.onMouseDown,
	            EVENT_NAMES.onMouseUp
	        ]))

	        var innerStyle = props.innerStyle

	        if (textAlign){
	            innerStyle = assign({}, innerStyle, {justifyContent: column.style.justifyContent || TEXT_ALIGN_2_JUSTIFY[column.textAlign]})
	        }

	        var c = React.createElement("div", {className: "z-inner", style: innerStyle}, 
	                    textCell
	                )

	        // var c = textCell

	        return (
	            React.createElement("div", React.__spread({},  cellProps), 
	                c, 
	                props.children
	            )
	        )
	    }
	})

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	__webpack_require__(151);

	var CodeMirror = __webpack_require__(177);

	var IS_MOBILE = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

	var OPEN_MARK = /{{{/;
	var CLOSE_MARK = /}}}/;

	CodeMirror.registerGlobalHelper("fold", "marked", function (mode, mirror) {
	  return mode.name === "javascript";
	}, function (mirror, start) {
	  var lineNo = start.line;
	  var lineText = mirror.getLine(lineNo);
	  var lineCount = mirror.lineCount();

	  var openMatch = OPEN_MARK.exec(lineText);
	  var closeMatch = CLOSE_MARK.exec(lineText);

	  if (openMatch) {
	    // search forwards
	    for (var i = lineNo; i < lineCount; i++) {
	      closeMatch = CLOSE_MARK.exec(mirror.getLine(i));
	      if (closeMatch) {
	        return {
	          from: CodeMirror.Pos(lineNo, openMatch.index),
	          to: CodeMirror.Pos(i, closeMatch.index + 3)
	        };
	      }
	    }
	  } else if (closeMatch) {
	    // search backwards
	    for (var i = lineNo; i >= 0; i--) {
	      openMatch = OPEN_MARK.exec(mirror.getLine(i));
	      if (openMatch) {
	        return {
	          from: CodeMirror.Pos(i, openMatch.index),
	          to: CodeMirror.Pos(lineNo, closeMatch.index + 3)
	        };
	      }
	    }
	  }
	});

	var CodeMirrorEditor = React.createClass({
	  displayName: "CodeMirrorEditor",

	  componentDidMount: function componentDidMount() {

	    if (IS_MOBILE) {
	      return;
	    }this.editor = CodeMirror.fromTextArea(React.findDOMNode(this.refs.editor), {
	      mode: "javascript",
	      lineNumbers: this.props.lineNumbers,
	      lineWrapping: true,
	      smartIndent: false, // javascript mode does bad things with jsx indents
	      matchBrackets: true,
	      theme: this.props.theme || "default",
	      readOnly: this.props.readOnly

	    });
	    if (this.props.height) {
	      this.editor.setSize(null, this.props.height);
	    }
	    // this.editor.foldCode(0, { widget: '...' });
	    this.editor.on("change", this.handleChange);

	    // this.editor.on('beforeSelectionChange', (instance, obj) => {
	    //     // why is ranges plural?
	    //     var selection = obj.ranges ?
	    //         obj.ranges[0] :
	    //         obj;

	    //     var noRange = selection.anchor.ch === selection.head.ch &&
	    //                   selection.anchor.line === selection.head.line;
	    //     if (!noRange) {
	    //         return;
	    //     }

	    //     var cursor = selection.anchor;
	    //     var line = instance.getLine(cursor.line);
	    //     var match = OPEN_MARK.exec(line) || CLOSE_MARK.exec(line);

	    //         // the opening or closing mark appears on this line
	    //     if (match &&
	    //         // and the cursor is on it
	    //         // (this is buggy if both occur on the same line)
	    //         cursor.ch >= match.index &&
	    //         cursor.ch < match.index + 3) {

	    //             // TODO(joel) - figure out why this doesn't fold although it
	    //             // seems like it should work.
	    //             instance.foldCode(cursor, { widget: '...' });
	    //     }
	    // });
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.readOnly) {
	      this.editor.setValue(this.props.codeText);
	    }
	  },

	  handleChange: function handleChange() {
	    if (!this.props.readOnly && this.props.onChange) {
	      this.props.onChange(this.editor.getValue());
	    }
	  },

	  render: function render() {
	    // wrap in a div to fully contain CodeMirror
	    var editor;

	    if (IS_MOBILE) {
	      editor = React.createElement(
	        "pre",
	        { style: { overflow: "scroll" } },
	        this.props.codeText
	      );
	    } else {
	      editor = React.createElement("textarea", { ref: "editor", defaultValue: this.props.codeText });
	    }

	    return React.createElement(
	      "div",
	      { style: this.props.style, className: this.props.className },
	      editor
	    );
	  }
	});

	module.exports = CodeMirrorEditor;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./10.js": 163,
		"./100.js": 162,
		"./1000.js": 160,
		"./1500.js": 161,
		"./200.js": 159
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 150;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// TODO actually recognize syntax of TypeScript constructs

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(177));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("javascript", function(config, parserConfig) {
	  var indentUnit = config.indentUnit;
	  var statementIndent = parserConfig.statementIndent;
	  var jsonldMode = parserConfig.jsonld;
	  var jsonMode = parserConfig.json || jsonldMode;
	  var isTS = parserConfig.typescript;
	  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

	  // Tokenizer

	  var keywords = function(){
	    function kw(type) {return {type: type, style: "keyword"};}
	    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
	    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

	    var jsKeywords = {
	      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
	      "return": C, "break": C, "continue": C, "new": C, "delete": C, "throw": C, "debugger": C,
	      "var": kw("var"), "const": kw("var"), "let": kw("var"),
	      "function": kw("function"), "catch": kw("catch"),
	      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
	      "in": operator, "typeof": operator, "instanceof": operator,
	      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
	      "this": kw("this"), "module": kw("module"), "class": kw("class"), "super": kw("atom"),
	      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C
	    };

	    // Extend the 'normal' keywords with the TypeScript language extensions
	    if (isTS) {
	      var type = {type: "variable", style: "variable-3"};
	      var tsKeywords = {
	        // object-like things
	        "interface": kw("interface"),
	        "extends": kw("extends"),
	        "constructor": kw("constructor"),

	        // scope modifiers
	        "public": kw("public"),
	        "private": kw("private"),
	        "protected": kw("protected"),
	        "static": kw("static"),

	        // types
	        "string": type, "number": type, "bool": type, "any": type
	      };

	      for (var attr in tsKeywords) {
	        jsKeywords[attr] = tsKeywords[attr];
	      }
	    }

	    return jsKeywords;
	  }();

	  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
	  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

	  function readRegexp(stream) {
	    var escaped = false, next, inSet = false;
	    while ((next = stream.next()) != null) {
	      if (!escaped) {
	        if (next == "/" && !inSet) return;
	        if (next == "[") inSet = true;
	        else if (inSet && next == "]") inSet = false;
	      }
	      escaped = !escaped && next == "\\";
	    }
	  }

	  // Used as scratch variables to communicate multiple values without
	  // consing up tons of objects.
	  var type, content;
	  function ret(tp, style, cont) {
	    type = tp; content = cont;
	    return style;
	  }
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (ch == '"' || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
	      return ret("number", "number");
	    } else if (ch == "." && stream.match("..")) {
	      return ret("spread", "meta");
	    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
	      return ret(ch);
	    } else if (ch == "=" && stream.eat(">")) {
	      return ret("=>", "operator");
	    } else if (ch == "0" && stream.eat(/x/i)) {
	      stream.eatWhile(/[\da-f]/i);
	      return ret("number", "number");
	    } else if (/\d/.test(ch)) {
	      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
	      return ret("number", "number");
	    } else if (ch == "/") {
	      if (stream.eat("*")) {
	        state.tokenize = tokenComment;
	        return tokenComment(stream, state);
	      } else if (stream.eat("/")) {
	        stream.skipToEnd();
	        return ret("comment", "comment");
	      } else if (state.lastType == "operator" || state.lastType == "keyword c" ||
	               state.lastType == "sof" || /^[\[{}\(,;:]$/.test(state.lastType)) {
	        readRegexp(stream);
	        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
	        return ret("regexp", "string-2");
	      } else {
	        stream.eatWhile(isOperatorChar);
	        return ret("operator", "operator", stream.current());
	      }
	    } else if (ch == "`") {
	      state.tokenize = tokenQuasi;
	      return tokenQuasi(stream, state);
	    } else if (ch == "#") {
	      stream.skipToEnd();
	      return ret("error", "error");
	    } else if (isOperatorChar.test(ch)) {
	      stream.eatWhile(isOperatorChar);
	      return ret("operator", "operator", stream.current());
	    } else if (wordRE.test(ch)) {
	      stream.eatWhile(wordRE);
	      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
	      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
	                     ret("variable", "variable", word);
	    }
	  }

	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, next;
	      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
	        state.tokenize = tokenBase;
	        return ret("jsonld-keyword", "meta");
	      }
	      while ((next = stream.next()) != null) {
	        if (next == quote && !escaped) break;
	        escaped = !escaped && next == "\\";
	      }
	      if (!escaped) state.tokenize = tokenBase;
	      return ret("string", "string");
	    };
	  }

	  function tokenComment(stream, state) {
	    var maybeEnd = false, ch;
	    while (ch = stream.next()) {
	      if (ch == "/" && maybeEnd) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return ret("comment", "comment");
	  }

	  function tokenQuasi(stream, state) {
	    var escaped = false, next;
	    while ((next = stream.next()) != null) {
	      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      escaped = !escaped && next == "\\";
	    }
	    return ret("quasi", "string-2", stream.current());
	  }

	  var brackets = "([{}])";
	  // This is a crude lookahead trick to try and notice that we're
	  // parsing the argument patterns for a fat-arrow function before we
	  // actually hit the arrow token. It only works if the arrow is on
	  // the same line as the arguments and there's no strange noise
	  // (comments) in between. Fallback is to only notice when we hit the
	  // arrow, and not declare the arguments as locals for the arrow
	  // body.
	  function findFatArrow(stream, state) {
	    if (state.fatArrowAt) state.fatArrowAt = null;
	    var arrow = stream.string.indexOf("=>", stream.start);
	    if (arrow < 0) return;

	    var depth = 0, sawSomething = false;
	    for (var pos = arrow - 1; pos >= 0; --pos) {
	      var ch = stream.string.charAt(pos);
	      var bracket = brackets.indexOf(ch);
	      if (bracket >= 0 && bracket < 3) {
	        if (!depth) { ++pos; break; }
	        if (--depth == 0) break;
	      } else if (bracket >= 3 && bracket < 6) {
	        ++depth;
	      } else if (wordRE.test(ch)) {
	        sawSomething = true;
	      } else if (/["'\/]/.test(ch)) {
	        return;
	      } else if (sawSomething && !depth) {
	        ++pos;
	        break;
	      }
	    }
	    if (sawSomething && !depth) state.fatArrowAt = pos;
	  }

	  // Parser

	  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

	  function JSLexical(indented, column, type, align, prev, info) {
	    this.indented = indented;
	    this.column = column;
	    this.type = type;
	    this.prev = prev;
	    this.info = info;
	    if (align != null) this.align = align;
	  }

	  function inScope(state, varname) {
	    for (var v = state.localVars; v; v = v.next)
	      if (v.name == varname) return true;
	    for (var cx = state.context; cx; cx = cx.prev) {
	      for (var v = cx.vars; v; v = v.next)
	        if (v.name == varname) return true;
	    }
	  }

	  function parseJS(state, style, type, content, stream) {
	    var cc = state.cc;
	    // Communicate our context to the combinators.
	    // (Less wasteful than consing up a hundred closures on every call.)
	    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

	    if (!state.lexical.hasOwnProperty("align"))
	      state.lexical.align = true;

	    while(true) {
	      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
	      if (combinator(type, content)) {
	        while(cc.length && cc[cc.length - 1].lex)
	          cc.pop()();
	        if (cx.marked) return cx.marked;
	        if (type == "variable" && inScope(state, content)) return "variable-2";
	        return style;
	      }
	    }
	  }

	  // Combinator utils

	  var cx = {state: null, column: null, marked: null, cc: null};
	  function pass() {
	    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
	  }
	  function cont() {
	    pass.apply(null, arguments);
	    return true;
	  }
	  function register(varname) {
	    function inList(list) {
	      for (var v = list; v; v = v.next)
	        if (v.name == varname) return true;
	      return false;
	    }
	    var state = cx.state;
	    if (state.context) {
	      cx.marked = "def";
	      if (inList(state.localVars)) return;
	      state.localVars = {name: varname, next: state.localVars};
	    } else {
	      if (inList(state.globalVars)) return;
	      if (parserConfig.globalVars)
	        state.globalVars = {name: varname, next: state.globalVars};
	    }
	  }

	  // Combinators

	  var defaultVars = {name: "this", next: {name: "arguments"}};
	  function pushcontext() {
	    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
	    cx.state.localVars = defaultVars;
	  }
	  function popcontext() {
	    cx.state.localVars = cx.state.context.vars;
	    cx.state.context = cx.state.context.prev;
	  }
	  function pushlex(type, info) {
	    var result = function() {
	      var state = cx.state, indent = state.indented;
	      if (state.lexical.type == "stat") indent = state.lexical.indented;
	      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
	        indent = outer.indented;
	      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
	    };
	    result.lex = true;
	    return result;
	  }
	  function poplex() {
	    var state = cx.state;
	    if (state.lexical.prev) {
	      if (state.lexical.type == ")")
	        state.indented = state.lexical.indented;
	      state.lexical = state.lexical.prev;
	    }
	  }
	  poplex.lex = true;

	  function expect(wanted) {
	    function exp(type) {
	      if (type == wanted) return cont();
	      else if (wanted == ";") return pass();
	      else return cont(exp);
	    };
	    return exp;
	  }

	  function statement(type, value) {
	    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
	    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
	    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
	    if (type == "{") return cont(pushlex("}"), block, poplex);
	    if (type == ";") return cont();
	    if (type == "if") {
	      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
	        cx.state.cc.pop()();
	      return cont(pushlex("form"), expression, statement, poplex, maybeelse);
	    }
	    if (type == "function") return cont(functiondef);
	    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
	    if (type == "variable") return cont(pushlex("stat"), maybelabel);
	    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
	                                      block, poplex, poplex);
	    if (type == "case") return cont(expression, expect(":"));
	    if (type == "default") return cont(expect(":"));
	    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
	                                     statement, poplex, popcontext);
	    if (type == "module") return cont(pushlex("form"), pushcontext, afterModule, popcontext, poplex);
	    if (type == "class") return cont(pushlex("form"), className, poplex);
	    if (type == "export") return cont(pushlex("form"), afterExport, poplex);
	    if (type == "import") return cont(pushlex("form"), afterImport, poplex);
	    return pass(pushlex("stat"), expression, expect(";"), poplex);
	  }
	  function expression(type) {
	    return expressionInner(type, false);
	  }
	  function expressionNoComma(type) {
	    return expressionInner(type, true);
	  }
	  function expressionInner(type, noComma) {
	    if (cx.state.fatArrowAt == cx.stream.start) {
	      var body = noComma ? arrowBodyNoComma : arrowBody;
	      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
	      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
	    }

	    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
	    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
	    if (type == "function") return cont(functiondef, maybeop);
	    if (type == "keyword c") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
	    if (type == "(") return cont(pushlex(")"), maybeexpression, comprehension, expect(")"), poplex, maybeop);
	    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
	    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
	    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
	    if (type == "quasi") { return pass(quasi, maybeop); }
	    return cont();
	  }
	  function maybeexpression(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expression);
	  }
	  function maybeexpressionNoComma(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expressionNoComma);
	  }

	  function maybeoperatorComma(type, value) {
	    if (type == ",") return cont(expression);
	    return maybeoperatorNoComma(type, value, false);
	  }
	  function maybeoperatorNoComma(type, value, noComma) {
	    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
	    var expr = noComma == false ? expression : expressionNoComma;
	    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
	    if (type == "operator") {
	      if (/\+\+|--/.test(value)) return cont(me);
	      if (value == "?") return cont(expression, expect(":"), expr);
	      return cont(expr);
	    }
	    if (type == "quasi") { return pass(quasi, me); }
	    if (type == ";") return;
	    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
	    if (type == ".") return cont(property, me);
	    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
	  }
	  function quasi(type, value) {
	    if (type != "quasi") return pass();
	    if (value.slice(value.length - 2) != "${") return cont(quasi);
	    return cont(expression, continueQuasi);
	  }
	  function continueQuasi(type) {
	    if (type == "}") {
	      cx.marked = "string-2";
	      cx.state.tokenize = tokenQuasi;
	      return cont(quasi);
	    }
	  }
	  function arrowBody(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expression);
	  }
	  function arrowBodyNoComma(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expressionNoComma);
	  }
	  function maybelabel(type) {
	    if (type == ":") return cont(poplex, statement);
	    return pass(maybeoperatorComma, expect(";"), poplex);
	  }
	  function property(type) {
	    if (type == "variable") {cx.marked = "property"; return cont();}
	  }
	  function objprop(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(getterSetter);
	      return cont(afterprop);
	    } else if (type == "number" || type == "string") {
	      cx.marked = jsonldMode ? "property" : (cx.style + " property");
	      return cont(afterprop);
	    } else if (type == "jsonld-keyword") {
	      return cont(afterprop);
	    } else if (type == "[") {
	      return cont(expression, expect("]"), afterprop);
	    }
	  }
	  function getterSetter(type) {
	    if (type != "variable") return pass(afterprop);
	    cx.marked = "property";
	    return cont(functiondef);
	  }
	  function afterprop(type) {
	    if (type == ":") return cont(expressionNoComma);
	    if (type == "(") return pass(functiondef);
	  }
	  function commasep(what, end) {
	    function proceed(type) {
	      if (type == ",") {
	        var lex = cx.state.lexical;
	        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
	        return cont(what, proceed);
	      }
	      if (type == end) return cont();
	      return cont(expect(end));
	    }
	    return function(type) {
	      if (type == end) return cont();
	      return pass(what, proceed);
	    };
	  }
	  function contCommasep(what, end, info) {
	    for (var i = 3; i < arguments.length; i++)
	      cx.cc.push(arguments[i]);
	    return cont(pushlex(end, info), commasep(what, end), poplex);
	  }
	  function block(type) {
	    if (type == "}") return cont();
	    return pass(statement, block);
	  }
	  function maybetype(type) {
	    if (isTS && type == ":") return cont(typedef);
	  }
	  function typedef(type) {
	    if (type == "variable"){cx.marked = "variable-3"; return cont();}
	  }
	  function vardef() {
	    return pass(pattern, maybetype, maybeAssign, vardefCont);
	  }
	  function pattern(type, value) {
	    if (type == "variable") { register(value); return cont(); }
	    if (type == "[") return contCommasep(pattern, "]");
	    if (type == "{") return contCommasep(proppattern, "}");
	  }
	  function proppattern(type, value) {
	    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
	      register(value);
	      return cont(maybeAssign);
	    }
	    if (type == "variable") cx.marked = "property";
	    return cont(expect(":"), pattern, maybeAssign);
	  }
	  function maybeAssign(_type, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function vardefCont(type) {
	    if (type == ",") return cont(vardef);
	  }
	  function maybeelse(type, value) {
	    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
	  }
	  function forspec(type) {
	    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
	  }
	  function forspec1(type) {
	    if (type == "var") return cont(vardef, expect(";"), forspec2);
	    if (type == ";") return cont(forspec2);
	    if (type == "variable") return cont(formaybeinof);
	    return pass(expression, expect(";"), forspec2);
	  }
	  function formaybeinof(_type, value) {
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return cont(maybeoperatorComma, forspec2);
	  }
	  function forspec2(type, value) {
	    if (type == ";") return cont(forspec3);
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return pass(expression, expect(";"), forspec3);
	  }
	  function forspec3(type) {
	    if (type != ")") cont(expression);
	  }
	  function functiondef(type, value) {
	    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
	    if (type == "variable") {register(value); return cont(functiondef);}
	    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, statement, popcontext);
	  }
	  function funarg(type) {
	    if (type == "spread") return cont(funarg);
	    return pass(pattern, maybetype);
	  }
	  function className(type, value) {
	    if (type == "variable") {register(value); return cont(classNameAfter);}
	  }
	  function classNameAfter(type, value) {
	    if (value == "extends") return cont(expression, classNameAfter);
	    if (type == "{") return cont(pushlex("}"), classBody, poplex);
	  }
	  function classBody(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(classGetterSetter, functiondef, classBody);
	      return cont(functiondef, classBody);
	    }
	    if (value == "*") {
	      cx.marked = "keyword";
	      return cont(classBody);
	    }
	    if (type == ";") return cont(classBody);
	    if (type == "}") return cont();
	  }
	  function classGetterSetter(type) {
	    if (type != "variable") return pass();
	    cx.marked = "property";
	    return cont();
	  }
	  function afterModule(type, value) {
	    if (type == "string") return cont(statement);
	    if (type == "variable") { register(value); return cont(maybeFrom); }
	  }
	  function afterExport(_type, value) {
	    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
	    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
	    return pass(statement);
	  }
	  function afterImport(type) {
	    if (type == "string") return cont();
	    return pass(importSpec, maybeFrom);
	  }
	  function importSpec(type, value) {
	    if (type == "{") return contCommasep(importSpec, "}");
	    if (type == "variable") register(value);
	    return cont();
	  }
	  function maybeFrom(_type, value) {
	    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
	  }
	  function arrayLiteral(type) {
	    if (type == "]") return cont();
	    return pass(expressionNoComma, maybeArrayComprehension);
	  }
	  function maybeArrayComprehension(type) {
	    if (type == "for") return pass(comprehension, expect("]"));
	    if (type == ",") return cont(commasep(maybeexpressionNoComma, "]"));
	    return pass(commasep(expressionNoComma, "]"));
	  }
	  function comprehension(type) {
	    if (type == "for") return cont(forspec, comprehension);
	    if (type == "if") return cont(expression, comprehension);
	  }

	  function isContinuedStatement(state, textAfter) {
	    return state.lastType == "operator" || state.lastType == "," ||
	      isOperatorChar.test(textAfter.charAt(0)) ||
	      /[,.]/.test(textAfter.charAt(0));
	  }

	  // Interface

	  return {
	    startState: function(basecolumn) {
	      var state = {
	        tokenize: tokenBase,
	        lastType: "sof",
	        cc: [],
	        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
	        localVars: parserConfig.localVars,
	        context: parserConfig.localVars && {vars: parserConfig.localVars},
	        indented: 0
	      };
	      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
	        state.globalVars = parserConfig.globalVars;
	      return state;
	    },

	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (!state.lexical.hasOwnProperty("align"))
	          state.lexical.align = false;
	        state.indented = stream.indentation();
	        findFatArrow(stream, state);
	      }
	      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
	      var style = state.tokenize(stream, state);
	      if (type == "comment") return style;
	      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
	      return parseJS(state, style, type, content, stream);
	    },

	    indent: function(state, textAfter) {
	      if (state.tokenize == tokenComment) return CodeMirror.Pass;
	      if (state.tokenize != tokenBase) return 0;
	      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
	      // Kludge to prevent 'maybelse' from blocking lexical scope pops
	      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
	        var c = state.cc[i];
	        if (c == poplex) lexical = lexical.prev;
	        else if (c != maybeelse) break;
	      }
	      if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
	      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
	        lexical = lexical.prev;
	      var type = lexical.type, closing = firstChar == type;

	      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
	      else if (type == "form" && firstChar == "{") return lexical.indented;
	      else if (type == "form") return lexical.indented + indentUnit;
	      else if (type == "stat")
	        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
	      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
	        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
	      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
	      else return lexical.indented + (closing ? 0 : indentUnit);
	    },

	    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
	    blockCommentStart: jsonMode ? null : "/*",
	    blockCommentEnd: jsonMode ? null : "*/",
	    lineComment: jsonMode ? null : "//",
	    fold: "brace",

	    helperType: jsonMode ? "json" : "javascript",
	    jsonldMode: jsonldMode,
	    jsonMode: jsonMode
	  };
	});

	CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

	CodeMirror.defineMIME("text/javascript", "javascript");
	CodeMirror.defineMIME("text/ecmascript", "javascript");
	CodeMirror.defineMIME("application/javascript", "javascript");
	CodeMirror.defineMIME("application/x-javascript", "javascript");
	CodeMirror.defineMIME("application/ecmascript", "javascript");
	CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
	CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
	CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

	});


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var hasOwn = Object.prototype.hasOwnProperty

	function curry(fn, n){

	    if (typeof n !== 'number'){
	        n = fn.length
	    }

	    function getCurryClosure(prevArgs){

	        function curryClosure() {

	            var len  = arguments.length
	            var args = [].concat(prevArgs)

	            if (len){
	                args.push.apply(args, arguments)
	            }

	            if (args.length < n){
	                return getCurryClosure(args)
	            }

	            return fn.apply(this, args)
	        }

	        return curryClosure
	    }

	    return getCurryClosure([])
	}


	module.exports = curry(function(object, property){
	    return hasOwn.call(object, property)
	})

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(178);
	var Parse = __webpack_require__(179);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = 'ontouchstart' in global || (global.DocumentTouch && document instanceof DocumentTouch)
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(38)
	var Region = __webpack_require__(189)
	var hasTouch = __webpack_require__(154)
	var once   = __webpack_require__(180)

	var Helper = function(config){
	    this.config = config
	}

	var EVENTS = {
	    move: hasTouch? 'touchmove': 'mousemove',
	    up  : hasTouch? 'touchend': 'mouseup'
	}

	function emptyFn(){}

	function getPageCoords(event){
	    var firstTouch

	    var pageX = event.pageX
	    var pageY = event.pageY

	    if (hasTouch && event.touches && (firstTouch = event.touches[0])){
	        pageX = firstTouch.pageX
	        pageY = firstTouch.pageY
	    }

	    return {
	        pageX: pageX,
	        pageY: pageY
	    }
	}

	assign(Helper.prototype, {

	    /**
	     * Should be called on a mousedown event
	     *
	     * @param  {Event} event
	     * @return {[type]}       [description]
	     */
	    initDrag: function(event) {

	        this.onDragInit(event)

	        var onDragStart = once(this.onDragStart, this)
	        var target = hasTouch?
	                        event.target:
	                        window

	        var mouseMoveListener = (function(event){
	            onDragStart(event)
	            this.onDrag(event)
	        }).bind(this)

	        var mouseUpListener = (function(event){

	            this.onDrop(event)

	            target.removeEventListener(EVENTS.move, mouseMoveListener)
	            target.removeEventListener(EVENTS.up, mouseUpListener)
	        }).bind(this)

	        target.addEventListener(EVENTS.move, mouseMoveListener, false)
	        target.addEventListener(EVENTS.up, mouseUpListener)
	    },

	    onDragInit: function(event){

	        var config = {
	            diff: {
	                left: 0,
	                top : 0
	            }
	        }
	        this.state = {
	            config: config
	        }

	        if (this.config.region){
	            this.state.initialRegion = Region.from(this.config.region)
	            this.state.dragRegion =
	                config.dragRegion =
	                    this.state.initialRegion.clone()
	        }
	        if (this.config.constrainTo){
	            this.state.constrainTo = Region.from(this.config.constrainTo)
	        }

	        this.callConfig('onDragInit', event)
	    },

	    /**
	     * Called when the first mousemove event occurs after drag is initialized
	     * @param  {Event} event
	     */
	    onDragStart: function(event){
	        this.state.initPageCoords = getPageCoords(event)

	        this.state.didDrag = this.state.config.didDrag = true
	        this.callConfig('onDragStart', event)
	    },

	    /**
	     * Called on all mousemove events after drag is initialized.
	     *
	     * @param  {Event} event
	     */
	    onDrag: function(event){

	        var config = this.state.config

	        var initPageCoords = this.state.initPageCoords
	        var eventCoords = getPageCoords(event)

	        var diff = config.diff = {
	            left: eventCoords.pageX - initPageCoords.pageX,
	            top : eventCoords.pageY - initPageCoords.pageY
	        }

	        if (this.state.initialRegion){
	            var dragRegion = config.dragRegion

	            //set the dragRegion to initial coords
	            dragRegion.set(this.state.initialRegion)

	            //shift it to the new position
	            dragRegion.shift(diff)

	            if (this.state.constrainTo){
	                //and finally constrain it if it's the case
	                dragRegion.constrainTo(this.state.constrainTo)

	                diff.left = dragRegion.left - this.state.initialRegion.left
	                diff.top  = dragRegion.top - this.state.initialRegion.top
	            }

	            config.dragRegion = dragRegion
	        }

	        this.callConfig('onDrag', event)
	    },

	    /**
	     * Called on the mouseup event on window
	     *
	     * @param  {Event} event
	     */
	    onDrop: function(event){
	        this.callConfig('onDrop', event)

	        this.state = null
	    },

	    callConfig: function(fnName, event){
	        var config = this.state.config
	        var args   = [event, config]

	        var fn = this.config[fnName]

	        if (fn){
	            fn.apply(this, args)
	        }
	    }

	})

	module.exports = function(event, config){

	    if (config.scope){
	        var skippedKeys = {
	            scope      : 1,
	            region     : 1,
	            constrainTo: 1
	        }

	        Object.keys(config).forEach(function(key){
	            var value = config[key]

	            if (key in skippedKeys){
	                return
	            }

	            if (typeof value == 'function'){
	                config[key] = value.bind(config.scope)
	            }
	        })
	    }
	    var helper = new Helper(config)

	    helper.initDrag(event)

	    return helper
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(196)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
	  , isNative = true

	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  isNative = false

	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  if(!isNative) {
	    return raf.call(global, fn)
	  }
	  return raf.call(global, function() {
	    try{
	      fn.apply(this, arguments)
	    } catch(e) {
	      setTimeout(function() { throw e }, 0)
	    }
	  })
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var setImmediate   = global.setImmediate
	var clearImmediate = global.clearImmediate

	module.exports = function(fn, delay, scope){

	    var timeoutId = -1

	    return function(){

	        var self = scope || this
	        var args = arguments

	        if (delay < 0){
	            fn.apply(self, args)
	            return
	        }

	        var withTimeout = delay || !setImmediate
	        var clearFn = withTimeout?
	                        clearTimeout:
	                        clearImmediate
	        var setFn   = withTimeout?
	                        setTimeout:
	                        setImmediate

	        if (timeoutId !== -1){
	            clearFn(timeoutId)
	        }

	        timeoutId = setFn(function(){
	            fn.apply(self, args)
	            self = null
	        }, delay)
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(154)?
		{
			onMouseDown: 'onTouchStart',
			onMouseUp  : 'onTouchEnd',
			onMouseMove: 'onTouchMove'
		}:
		{
			onMouseDown: 'onMouseDown',
			onMouseUp  : 'onMouseUp',
			onMouseMove: 'onMouseMove'
		}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var data = __webpack_require__(160);

	module.exports = data.slice(0, 200);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var data = __webpack_require__(161);

	module.exports = data.slice(0, 1000);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var data = __webpack_require__(159);

	module.exports = data.slice(0, 100);

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var data = __webpack_require__(162);

	module.exports = data.slice(0, 10);

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = /[-\s]+(.)?/g

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasOwn    = __webpack_require__(152)
	var newify    = __webpack_require__(192)

	var assign      = __webpack_require__(38);
	var EventEmitter = __webpack_require__(190).EventEmitter

	var inherits = __webpack_require__(181)
	var VALIDATE = __webpack_require__(182)

	var objectToString = Object.prototype.toString

	var isObject = function(value){
	    return objectToString.apply(value) === '[object Object]'
	}

	function copyList(source, target, list){
	    if (source){
	        list.forEach(function(key){
	            if (hasOwn(source, key)){
	                target[key] = source[key]
	            }
	        })
	    }

	    return target
	}

	/**
	 * @class Region
	 *
	 * The Region is an abstraction that allows the developer to refer to rectangles on the screen,
	 * and move them around, make diffs and unions, detect intersections, compute areas, etc.
	 *
	 * ## Creating a region
	 *      var region = require('region')({
	 *          top  : 10,
	 *          left : 10,
	 *          bottom: 100,
	 *          right : 100
	 *      })
	 *      //this region is a square, 90x90, starting from (10,10) to (100,100)
	 *
	 *      var second = require('region')({ top: 10, left: 100, right: 200, bottom: 60})
	 *      var union  = region.getUnion(second)
	 *
	 *      //the "union" region is a union between "region" and "second"
	 */

	var POINT_POSITIONS = {
	        cy: 'YCenter',
	        cx: 'XCenter',
	        t : 'Top',
	        tc: 'TopCenter',
	        tl: 'TopLeft',
	        tr: 'TopRight',
	        b : 'Bottom',
	        bc: 'BottomCenter',
	        bl: 'BottomLeft',
	        br: 'BottomRight',
	        l : 'Left',
	        lc: 'LeftCenter',
	        r : 'Right',
	        rc: 'RightCenter',
	        c : 'Center'
	    }

	/**
	 * @constructor
	 *
	 * Construct a new Region.
	 *
	 * Example:
	 *
	 *      var r = new Region({ top: 10, left: 20, bottom: 100, right: 200 })
	 *
	 *      //or, the same, but with numbers (can be used with new or without)
	 *
	 *      r = Region(10, 200, 100, 20)
	 *
	 *      //or, with width and height
	 *
	 *      r = Region({ top: 10, left: 20, width: 180, height: 90})
	 *
	 * @param {Number|Object} top The top pixel position, or an object with top, left, bottom, right properties. If an object is passed,
	 * instead of having bottom and right, it can have width and height.
	 *
	 * @param {Number} right The right pixel position
	 * @param {Number} bottom The bottom pixel position
	 * @param {Number} left The left pixel position
	 *
	 * @return {Region} this
	 */
	var REGION = function(top, right, bottom, left){

	    if (!(this instanceof REGION)){
	        return newify(REGION, arguments)
	    }

	    EventEmitter.call(this)

	    if (isObject(top)){
	        copyList(top, this, ['top','right','bottom','left'])

	        if (top.bottom == null && top.height != null){
	            this.bottom = this.top + top.height
	        }
	        if (top.right == null && top.width != null){
	            this.right = this.left + top.width
	        }

	        if (top.emitChangeEvents){
	            this.emitChangeEvents = top.emitChangeEvents
	        }
	    } else {
	        this.top    = top
	        this.right  = right
	        this.bottom = bottom
	        this.left   = left
	    }

	    this[0] = this.left
	    this[1] = this.top

	    VALIDATE(this)
	}

	inherits(REGION, EventEmitter)

	assign(REGION.prototype, {

	    /**
	     * @cfg {Boolean} emitChangeEvents If this is set to true, the region
	     * will emit 'changesize' and 'changeposition' whenever the size or the position changs
	     */
	    emitChangeEvents: false,

	    /**
	     * Returns this region, or a clone of this region
	     * @param  {Boolean} [clone] If true, this method will return a clone of this region
	     * @return {Region}       This region, or a clone of this
	     */
	    getRegion: function(clone){
	        return clone?
	                    this.clone():
	                    this
	    },

	    /**
	     * Sets the properties of this region to those of the given region
	     * @param {Region/Object} reg The region or object to use for setting properties of this region
	     * @return {Region} this
	     */
	    setRegion: function(reg){

	        if (reg instanceof REGION){
	            this.set(reg.get())
	        } else {
	            this.set(reg)
	        }

	        return this
	    },

	    /**
	     * Returns true if this region is valid, false otherwise
	     *
	     * @param  {Region} region The region to check
	     * @return {Boolean}        True, if the region is valid, false otherwise.
	     * A region is valid if
	     *  * left <= right  &&
	     *  * top  <= bottom
	     */
	    validate: function(){
	        return REGION.validate(this)
	    },

	    _before: function(){
	        if (this.emitChangeEvents){
	            return copyList(this, {}, ['left','top','bottom','right'])
	        }
	    },

	    _after: function(before){
	        if (this.emitChangeEvents){

	            if(this.top != before.top || this.left != before.left) {
	                this.emitPositionChange()
	            }

	            if(this.right != before.right || this.bottom != before.bottom) {
	                this.emitSizeChange()
	            }
	        }
	    },

	    notifyPositionChange: function(){
	        this.emit('changeposition', this)
	    },

	    emitPositionChange: function(){
	        this.notifyPositionChange()
	    },

	    notifySizeChange: function(){
	        this.emit('changesize', this)
	    },

	    emitSizeChange: function(){
	        this.notifySizeChange()
	    },

	    /**
	     * Add the given amounts to each specified side. Example
	     *
	     *      region.add({
	     *          top: 50,    //add 50 px to the top side
	     *          bottom: -100    //substract 100 px from the bottom side
	     *      })
	     *
	     * @param {Object} directions
	     * @param {Number} [directions.top]
	     * @param {Number} [directions.left]
	     * @param {Number} [directions.bottom]
	     * @param {Number} [directions.right]
	     *
	     * @return {Region} this
	     */
	    add: function(directions){

	        var before = this._before()
	        var direction

	        for (direction in directions) if ( hasOwn(directions, direction) ) {
	            this[direction] += directions[direction]
	        }

	        this[0] = this.left
	        this[1] = this.top

	        this._after(before)

	        return this
	    },

	    /**
	     * The same as {@link #add}, but substracts the given values
	     * @param {Object} directions
	     * @param {Number} [directions.top]
	     * @param {Number} [directions.left]
	     * @param {Number} [directions.bottom]
	     * @param {Number} [directions.right]
	     *
	     * @return {Region} this
	     */
	    substract: function(directions){

	        var before = this._before()
	        var direction

	        for (direction in directions) if (hasOwn(directions, direction) ) {
	            this[direction] -= directions[direction]
	        }

	        this[0] = this.left
	        this[1] = this.top

	        this._after(before)

	        return this
	    },

	    /**
	     * Retrieves the size of the region.
	     * @return {Object} An object with {width, height}, corresponding to the width and height of the region
	     */
	    getSize: function(){
	        return {
	            width  : this.width,
	            height : this.height
	        }
	    },

	    /**
	     * Move the region to the given position and keeps the region width and height.
	     *
	     * @param {Object} position An object with {top, left} properties. The values in {top,left} are used to move the region by the given amounts.
	     * @param {Number} [position.left]
	     * @param {Number} [position.top]
	     *
	     * @return {Region} this
	     */
	    setPosition: function(position){
	        var width  = this.width
	        var height = this.height

	        if (position.left != undefined){
	            position.right  = position.left + width
	        }

	        if (position.top != undefined){
	            position.bottom = position.top  + height
	        }

	        return this.set(position)
	    },

	    /**
	     * Sets both the height and the width of this region to the given size.
	     *
	     * @param {Number} size The new size for the region
	     * @return {Region} this
	     */
	    setSize: function(size){
	        if (size.height != undefined && size.width != undefined){
	            return this.set({
	                right  : this.left + size.width,
	                bottom : this.top  + size.height
	            })
	        }

	        if (size.width != undefined){
	            this.setWidth(size.width)
	        }

	        if (size.height != undefined){
	            this.setHeight(size.height)
	        }

	        return this
	    },



	    /**
	     * @chainable
	     *
	     * Sets the width of this region
	     * @param {Number} width The new width for this region
	     * @return {Region} this
	     */
	    setWidth: function(width){
	        return this.set({
	            right: this.left + width
	        })
	    },

	    /**
	     * @chainable
	     *
	     * Sets the height of this region
	     * @param {Number} height The new height for this region
	     * @return {Region} this
	     */
	    setHeight: function(height){
	        return this.set({
	            bottom: this.top + height
	        })
	    },

	    /**
	     * Sets the given properties on this region
	     *
	     * @param {Object} directions an object containing top, left, and EITHER bottom, right OR width, height
	     * @param {Number} [directions.top]
	     * @param {Number} [directions.left]
	     *
	     * @param {Number} [directions.bottom]
	     * @param {Number} [directions.right]
	     *
	     * @param {Number} [directions.width]
	     * @param {Number} [directions.height]
	     *
	     *
	     * @return {Region} this
	     */
	    set: function(directions){
	        var before = this._before()

	        copyList(directions, this, ['left','top','bottom','right'])

	        if (directions.bottom == null && directions.height != null){
	            this.bottom = this.top + directions.height
	        }
	        if (directions.right == null && directions.width != null){
	            this.right = this.left + directions.width
	        }

	        this[0] = this.left
	        this[1] = this.top

	        this._after(before)

	        return this
	    },

	    /**
	     * Retrieves the given property from this region. If no property is given, return an object
	     * with {left, top, right, bottom}
	     *
	     * @param {String} [dir] the property to retrieve from this region
	     * @return {Number/Object}
	     */
	    get: function(dir){
	        return dir? this[dir]:
	                    copyList(this, {}, ['left','right','top','bottom'])
	    },

	    /**
	     * Shifts this region to either top, or left or both.
	     * Shift is similar to {@link #add} by the fact that it adds the given dimensions to top/left sides, but also adds the given dimensions
	     * to bottom and right
	     *
	     * @param {Object} directions
	     * @param {Number} [directions.top]
	     * @param {Number} [directions.left]
	     *
	     * @return {Region} this
	     */
	    shift: function(directions){

	        var before = this._before()

	        if (directions.top){
	            this.top    += directions.top
	            this.bottom += directions.top
	        }

	        if (directions.left){
	            this.left  += directions.left
	            this.right += directions.left
	        }

	        this[0] = this.left
	        this[1] = this.top

	        this._after(before)

	        return this
	    },

	    /**
	     * Same as {@link #shift}, but substracts the given values
	     * @chainable
	     *
	     * @param {Object} directions
	     * @param {Number} [directions.top]
	     * @param {Number} [directions.left]
	     *
	     * @return {Region} this
	     */
	    unshift: function(directions){

	        if (directions.top){
	            directions.top *= -1
	        }

	        if (directions.left){
	            directions.left *= -1
	        }

	        return this.shift(directions)
	    },

	    /**
	     * Compare this region and the given region. Return true if they have all the same size and position
	     * @param  {Region} region The region to compare with
	     * @return {Boolean}       True if this and region have same size and position
	     */
	    equals: function(region){
	        return this.equalsPosition(region) && this.equalsSize(region)
	    },

	    /**
	     * Returns true if this region has the same bottom,right properties as the given region
	     * @param  {Region/Object} size The region to compare against
	     * @return {Boolean}       true if this region is the same size as the given size
	     */
	    equalsSize: function(size){
	        var isInstance = size instanceof REGION

	        var s = {
	            width: size.width == null && isInstance?
	                    size.getWidth():
	                    size.width,

	            height: size.height == null && isInstance?
	                    size.getHeight():
	                    size.height
	        }
	        return this.getWidth() == s.width && this.getHeight() == s.height
	    },

	    /**
	     * Returns true if this region has the same top,left properties as the given region
	     * @param  {Region} region The region to compare against
	     * @return {Boolean}       true if this.top == region.top and this.left == region.left
	     */
	    equalsPosition: function(region){
	        return this.top == region.top && this.left == region.left
	    },

	    /**
	     * Adds the given ammount to the left side of this region
	     * @param {Number} left The ammount to add
	     * @return {Region} this
	     */
	    addLeft: function(left){
	        var before = this._before()

	        this.left = this[0] = this.left + left

	        this._after(before)

	        return this
	    },

	    /**
	     * Adds the given ammount to the top side of this region
	     * @param {Number} top The ammount to add
	     * @return {Region} this
	     */
	    addTop: function(top){
	        var before = this._before()

	        this.top = this[1] = this.top + top

	        this._after(before)

	        return this
	    },

	    /**
	     * Adds the given ammount to the bottom side of this region
	     * @param {Number} bottom The ammount to add
	     * @return {Region} this
	     */
	    addBottom: function(bottom){
	        var before = this._before()

	        this.bottom += bottom

	        this._after(before)

	        return this
	    },

	    /**
	     * Adds the given ammount to the right side of this region
	     * @param {Number} right The ammount to add
	     * @return {Region} this
	     */
	    addRight: function(right){
	        var before = this._before()

	        this.right += right

	        this._after(before)

	        return this
	    },

	    /**
	     * Minimize the top side.
	     * @return {Region} this
	     */
	    minTop: function(){
	        return this.expand({top: 1})
	    },
	    /**
	     * Minimize the bottom side.
	     * @return {Region} this
	     */
	    maxBottom: function(){
	        return this.expand({bottom: 1})
	    },
	    /**
	     * Minimize the left side.
	     * @return {Region} this
	     */
	    minLeft: function(){
	        return this.expand({left: 1})
	    },
	    /**
	     * Maximize the right side.
	     * @return {Region} this
	     */
	    maxRight: function(){
	        return this.expand({right: 1})
	    },

	    /**
	     * Expands this region to the dimensions of the given region, or the document region, if no region is expanded.
	     * But only expand the given sides (any of the four can be expanded).
	     *
	     * @param {Object} directions
	     * @param {Boolean} [directions.top]
	     * @param {Boolean} [directions.bottom]
	     * @param {Boolean} [directions.left]
	     * @param {Boolean} [directions.right]
	     *
	     * @param {Region} [region] the region to expand to, defaults to the document region
	     * @return {Region} this region
	     */
	    expand: function(directions, region){
	        var docRegion = region || REGION.getDocRegion()
	        var list      = []
	        var direction
	        var before = this._before()

	        for (direction in directions) if ( hasOwn(directions, direction) ) {
	            list.push(direction)
	        }

	        copyList(docRegion, this, list)

	        this[0] = this.left
	        this[1] = this.top

	        this._after(before)

	        return this
	    },

	    /**
	     * Returns a clone of this region
	     * @return {Region} A new region, with the same position and dimension as this region
	     */
	    clone: function(){
	        return new REGION({
	                    top    : this.top,
	                    left   : this.left,
	                    right  : this.right,
	                    bottom : this.bottom
	                })
	    },

	    /**
	     * Returns true if this region contains the given point
	     * @param {Number/Object} x the x coordinate of the point
	     * @param {Number} [y] the y coordinate of the point
	     *
	     * @return {Boolean} true if this region constains the given point, false otherwise
	     */
	    containsPoint: function(x, y){
	        if (arguments.length == 1){
	            y = x.y
	            x = x.x
	        }

	        return this.left <= x  &&
	               x <= this.right &&
	               this.top <= y   &&
	               y <= this.bottom
	    },

	    /**
	     *
	     * @param region
	     *
	     * @return {Boolean} true if this region contains the given region, false otherwise
	     */
	    containsRegion: function(region){
	        return this.containsPoint(region.left, region.top)    &&
	               this.containsPoint(region.right, region.bottom)
	    },

	    /**
	     * Returns an object with the difference for {top, bottom} positions betwen this and the given region,
	     *
	     * See {@link #diff}
	     * @param  {Region} region The region to use for diff
	     * @return {Object}        {top,bottom}
	     */
	    diffHeight: function(region){
	        return this.diff(region, {top: true, bottom: true})
	    },

	    /**
	     * Returns an object with the difference for {left, right} positions betwen this and the given region,
	     *
	     * See {@link #diff}
	     * @param  {Region} region The region to use for diff
	     * @return {Object}        {left,right}
	     */
	    diffWidth: function(region){
	        return this.diff(region, {left: true, right: true})
	    },

	    /**
	     * Returns an object with the difference in sizes for the given directions, between this and region
	     *
	     * @param  {Region} region     The region to use for diff
	     * @param  {Object} directions An object with the directions to diff. Can have any of the following keys:
	     *  * left
	     *  * right
	     *  * top
	     *  * bottom
	     *
	     * @return {Object} and object with the same keys as the directions object, but the values being the
	     * differences between this region and the given region
	     */
	    diff: function(region, directions){
	        var result = {}
	        var dirName

	        for (dirName in directions) if ( hasOwn(directions, dirName) ) {
	            result[dirName] = this[dirName] - region[dirName]
	        }

	        return result
	    },

	    /**
	     * Returns the position, in {left,top} properties, of this region
	     *
	     * @return {Object} {left,top}
	     */
	    getPosition: function(){
	        return {
	            left: this.left,
	            top : this.top
	        }
	    },

	    /**
	     * Returns the point at the given position from this region.
	     *
	     * @param {String} position Any of:
	     *
	     *  * 'cx' - See {@link #getPointXCenter}
	     *  * 'cy' - See {@link #getPointYCenter}
	     *  * 'b'  - See {@link #getPointBottom}
	     *  * 'bc' - See {@link #getPointBottomCenter}
	     *  * 'l'  - See {@link #getPointLeft}F
	     *  * 'lc' - See {@link #getPointLeftCenter}
	     *  * 't'  - See {@link #getPointTop}
	     *  * 'tc' - See {@link #getPointTopCenter}
	     *  * 'r'  - See {@link #getPointRight}
	     *  * 'rc' - See {@link #getPointRightCenter}
	     *  * 'c'  - See {@link #getPointCenter}
	     *  * 'tl' - See {@link #getPointTopLeft}
	     *  * 'bl' - See {@link #getPointBottomLeft}
	     *  * 'br' - See {@link #getPointBottomRight}
	     *  * 'tr' - See {@link #getPointTopRight}
	     *
	     * @param {Boolean} asLeftTop
	     *
	     * @return {Object} either an object with {x,y} or {left,top} if asLeftTop is true
	     */
	    getPoint: function(position, asLeftTop){

	        //<debug>
	        if (!POINT_POSITIONS[position]) {
	            console.warn('The position ', position, ' could not be found! Available options are tl, bl, tr, br, l, r, t, b.');
	        }
	        //</debug>

	        var method = 'getPoint' + POINT_POSITIONS[position],
	            result = this[method]()

	        if (asLeftTop){
	            return {
	                left : result.x,
	                top  : result.y
	            }
	        }

	        return result
	    },

	    /**
	     * Returns a point with x = null and y being the middle of the left region segment
	     * @return {Object} {x,y}
	     */
	    getPointYCenter: function(){
	        return { x: null, y: this.top + this.getHeight() / 2 }
	    },

	    /**
	     * Returns a point with y = null and x being the middle of the top region segment
	     * @return {Object} {x,y}
	     */
	    getPointXCenter: function(){
	        return { x: this.left + this.getWidth() / 2, y: null }
	    },

	    /**
	     * Returns a point with x = null and y the region top position on the y axis
	     * @return {Object} {x,y}
	     */
	    getPointTop: function(){
	        return { x: null, y: this.top }
	    },

	    /**
	     * Returns a point that is the middle point of the region top segment
	     * @return {Object} {x,y}
	     */
	    getPointTopCenter: function(){
	        return { x: this.left + this.getWidth() / 2, y: this.top }
	    },

	    /**
	     * Returns a point that is the top-left point of the region
	     * @return {Object} {x,y}
	     */
	    getPointTopLeft: function(){
	        return { x: this.left, y: this.top}
	    },

	    /**
	     * Returns a point that is the top-right point of the region
	     * @return {Object} {x,y}
	     */
	    getPointTopRight: function(){
	        return { x: this.right, y: this.top}
	    },

	    /**
	     * Returns a point with x = null and y the region bottom position on the y axis
	     * @return {Object} {x,y}
	     */
	    getPointBottom: function(){
	        return { x: null, y: this.bottom }
	    },

	    /**
	     * Returns a point that is the middle point of the region bottom segment
	     * @return {Object} {x,y}
	     */
	    getPointBottomCenter: function(){
	        return { x: this.left + this.getWidth() / 2, y: this.bottom }
	    },

	    /**
	     * Returns a point that is the bottom-left point of the region
	     * @return {Object} {x,y}
	     */
	    getPointBottomLeft: function(){
	        return { x: this.left, y: this.bottom}
	    },

	    /**
	     * Returns a point that is the bottom-right point of the region
	     * @return {Object} {x,y}
	     */
	    getPointBottomRight: function(){
	        return { x: this.right, y: this.bottom}
	    },

	    /**
	     * Returns a point with y = null and x the region left position on the x axis
	     * @return {Object} {x,y}
	     */
	    getPointLeft: function(){
	        return { x: this.left, y: null }
	    },

	    /**
	     * Returns a point that is the middle point of the region left segment
	     * @return {Object} {x,y}
	     */
	    getPointLeftCenter: function(){
	        return { x: this.left, y: this.top + this.getHeight() / 2 }
	    },

	    /**
	     * Returns a point with y = null and x the region right position on the x axis
	     * @return {Object} {x,y}
	     */
	    getPointRight: function(){
	        return { x: this.right, y: null }
	    },

	    /**
	     * Returns a point that is the middle point of the region right segment
	     * @return {Object} {x,y}
	     */
	    getPointRightCenter: function(){
	        return { x: this.right, y: this.top + this.getHeight() / 2 }
	    },

	    /**
	     * Returns a point that is the center of the region
	     * @return {Object} {x,y}
	     */
	    getPointCenter: function(){
	        return { x: this.left + this.getWidth() / 2, y: this.top + this.getHeight() / 2 }
	    },

	    /**
	     * @return {Number} returns the height of the region
	     */
	    getHeight: function(){
	        return this.bottom - this.top
	    },

	    /**
	     * @return {Number} returns the width of the region
	     */
	    getWidth: function(){
	        return this.right - this.left
	    },

	    /**
	     * @return {Number} returns the top property of the region
	     */
	    getTop: function(){
	        return this.top
	    },

	    /**
	     * @return {Number} returns the left property of the region
	     */
	    getLeft: function(){
	        return this.left
	    },

	    /**
	     * @return {Number} returns the bottom property of the region
	     */
	    getBottom: function(){
	        return this.bottom
	    },

	    /**
	     * @return {Number} returns the right property of the region
	     */
	    getRight: function(){
	        return this.right
	    },

	    /**
	     * Returns the area of the region
	     * @return {Number} the computed area
	     */
	    getArea: function(){
	        return this.getWidth() * this.getHeight()
	    },

	    constrainTo: function(contrain){
	        var intersect = this.getIntersection(contrain)
	        var shift

	        if (!intersect || !intersect.equals(this)){

	            var contrainWidth  = contrain.getWidth(),
	                contrainHeight = contrain.getHeight()

	            if (this.getWidth() > contrainWidth){
	                this.left = contrain.left
	                this.setWidth(contrainWidth)
	            }

	            if (this.getHeight() > contrainHeight){
	                this.top = contrain.top
	                this.setHeight(contrainHeight)
	            }

	            shift = {}

	            if (this.right > contrain.right){
	                shift.left = contrain.right - this.right
	            }

	            if (this.bottom > contrain.bottom){
	                shift.top = contrain.bottom - this.bottom
	            }

	            if (this.left < contrain.left){
	                shift.left = contrain.left - this.left
	            }

	            if (this.top < contrain.top){
	                shift.top = contrain.top - this.top
	            }

	            this.shift(shift)

	            return true
	        }

	        return false
	    },

	    __IS_REGION: true

	    /**
	     * @property {Number} top
	     */

	    /**
	     * @property {Number} right
	     */

	    /**
	     * @property {Number} bottom
	     */

	    /**
	     * @property {Number} left
	     */

	    /**
	     * @property {Number} [0] the top property
	     */

	    /**
	     * @property {Number} [1] the left property
	     */

	    /**
	     * @method getIntersection
	     * Returns a region that is the intersection of this region and the given region
	     * @param  {Region} region The region to intersect with
	     * @return {Region}        The intersection region
	     */

	    /**
	     * @method getUnion
	     * Returns a region that is the union of this region with the given region
	     * @param  {Region} region  The region to make union with
	     * @return {Region}        The union region. The smallest region that contains both this and the given region.
	     */

	})

	Object.defineProperties(REGION.prototype, {
	    width: {
	        get: function(){
	            return this.getWidth()
	        },
	        set: function(width){
	            return this.setWidth(width)
	        }
	    },
	    height: {
	        get: function(){
	            return this.getHeight()
	        },
	        set: function(height){
	            return this.setHeight(height)
	        }
	    }
	})

	__webpack_require__(183)(REGION)

	module.exports = REGION

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MenuClass = __webpack_require__(184)

	var MenuItem      = __webpack_require__(188)
	var MenuItemCell  = __webpack_require__(185)
	var MenuSeparator = __webpack_require__(186)

	MenuClass.Item      = MenuItem
	MenuClass.Item.Cell = MenuItemCell
	MenuClass.ItemCell  = MenuItemCell
	MenuClass.Separator = MenuSeparator

	module.exports = MenuClass

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = __webpack_require__(168)(/^[a-zA-Z0-9]+$/)

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var F = __webpack_require__(193)

	module.exports = F.curry(function(re, value){
	    return !!re.test(value)
	})

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var regex = /^[A-F0-9]{8}(?:-?[A-F0-9]{4}){3}-?[A-F0-9]{12}$/i
	var regex2 = /^\{[A-F0-9]{8}(?:-?[A-F0-9]{4}){3}-?[A-F0-9]{12}\}$/i

	module.exports = function(value){
	    return regex.test(value) || regex2.test(value)
	}



/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = __webpack_require__(194).numeric

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React  = __webpack_require__(1)
	var assign = __webpack_require__(38)

	module.exports = React.createClass({

	    displayName: 'Loader',

	    getDefaultProps: function(){
	        return {
	            defaultStyle: {
	                margin: 'auto',
	                position: 'absolute',
	                top: 0,
	                left: 0,
	                bottom: 0,
	                right: 0,
	            },
	            defaultClassName: 'loader',
	            size: 40,
	        }
	    },

	    render: function() {
	        var props = assign({}, this.props)

	        this.prepareStyle(props)

	        props.className = props.className || ''
	        props.className += ' ' + props.defaultClassName

	        return React.DOM.div(props,
	            React.createElement("div", {className: "loadbar loadbar-1"}),
	            React.createElement("div", {className: "loadbar loadbar-2"}),
	            React.createElement("div", {className: "loadbar loadbar-3"}),
	            React.createElement("div", {className: "loadbar loadbar-4"}),
	            React.createElement("div", {className: "loadbar loadbar-5"}),
	            React.createElement("div", {className: "loadbar loadbar-6"}),
	            React.createElement("div", {className: "loadbar loadbar-7"}),
	            React.createElement("div", {className: "loadbar loadbar-8"}),
	            React.createElement("div", {className: "loadbar loadbar-9"}),
	            React.createElement("div", {className: "loadbar loadbar-10"}),
	            React.createElement("div", {className: "loadbar loadbar-11"}),
	            React.createElement("div", {className: "loadbar loadbar-12"})
	        )
	    },

	    prepareStyle: function(props){

	        var style = {}

	        assign(style, props.defaultStyle)
	        assign(style, props.style)

	        style.width = props.size
	        style.height = props.size

	        props.style = style
	    }
	})

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(175)
	var prefixes     = ["ms", "Moz", "Webkit", "O"]

	var el = __webpack_require__(174)

	var ELEMENT
	var PREFIX

	module.exports = function(key){

		if (PREFIX !== undefined){
			return PREFIX
		}

		ELEMENT = ELEMENT || el()

		var i = 0
		var len = prefixes.length
		var tmp
		var prefix

		for (; i < len; i++){
			prefix = prefixes[i]
			tmp = prefix + toUpperFirst(key)

			if (typeof ELEMENT.style[tmp] != 'undefined'){
				return PREFIX = prefix
			}
		}

		return PREFIX
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(175)
	var getPrefix    = __webpack_require__(172)
	var properties   = __webpack_require__(138)

	/**
	 * Returns the given key prefixed, if the property is found in the prefixProps map.
	 *
	 * Does not test if the property supports the given value unprefixed.
	 * If you need this, use './getPrefixed' instead
	 */
	module.exports = function(key, value){

		if (!properties[key]){
			return key
		}

		var prefix = getPrefix(key)

		return prefix?
					prefix + toUpperFirst(key):
					key
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var el

	module.exports = function(){

		if(!el && !!global.document){
		  	el = global.document.createElement('div')
		}

		if (!el){
			el = {style: {}}
		}

		return el
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(str){
		return str?
				str.charAt(0).toUpperCase() + str.slice(1):
				''
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	// shim for Node's 'util' package
	// DO NOT REMOVE THIS! It is required for compatibility with EnderJS (http://enderjs.com/).
	var util = {
	  isArray: function (ar) {
	    return Array.isArray(ar) || (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	  },
	  isDate: function (d) {
	    return typeof d === 'object' && objectToString(d) === '[object Date]';
	  },
	  isRegExp: function (re) {
	    return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	  },
	  getRegExpFlags: function (re) {
	    var flags = '';
	    re.global && (flags += 'g');
	    re.ignoreCase && (flags += 'i');
	    re.multiline && (flags += 'm');
	    return flags;
	  }
	};


	if (true)
	  module.exports = clone;

	/**
	 * Clones (copies) an Object using deep copying.
	 *
	 * This function supports circular references by default, but if you are certain
	 * there are no circular references in your object, you can save some CPU time
	 * by calling clone(obj, false).
	 *
	 * Caution: if `circular` is false and `parent` contains circular references,
	 * your program may enter an infinite loop and crash.
	 *
	 * @param `parent` - the object to be cloned
	 * @param `circular` - set to true if the object to be cloned may contain
	 *    circular references. (optional - true by default)
	 * @param `depth` - set to a number if the object is only to be cloned to
	 *    a particular depth. (optional - defaults to Infinity)
	 * @param `prototype` - sets the prototype to be used when cloning an object.
	 *    (optional - defaults to parent prototype).
	*/

	function clone(parent, circular, depth, prototype) {
	  // maintain two arrays for circular references, where corresponding parents
	  // and children have the same index
	  var allParents = [];
	  var allChildren = [];

	  var useBuffer = typeof Buffer != 'undefined';

	  if (typeof circular == 'undefined')
	    circular = true;

	  if (typeof depth == 'undefined')
	    depth = Infinity;

	  // recurse this function so we don't reset allParents and allChildren
	  function _clone(parent, depth) {
	    // cloning null always returns null
	    if (parent === null)
	      return null;

	    if (depth == 0)
	      return parent;

	    var child;
	    var proto;
	    if (typeof parent != 'object') {
	      return parent;
	    }

	    if (util.isArray(parent)) {
	      child = [];
	    } else if (util.isRegExp(parent)) {
	      child = new RegExp(parent.source, util.getRegExpFlags(parent));
	      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
	    } else if (util.isDate(parent)) {
	      child = new Date(parent.getTime());
	    } else if (useBuffer && Buffer.isBuffer(parent)) {
	      child = new Buffer(parent.length);
	      parent.copy(child);
	      return child;
	    } else {
	      if (typeof prototype == 'undefined') {
	        proto = Object.getPrototypeOf(parent);
	        child = Object.create(proto);
	      }
	      else {
	        child = Object.create(prototype);
	        proto = prototype;
	      }
	    }

	    if (circular) {
	      var index = allParents.indexOf(parent);

	      if (index != -1) {
	        return allChildren[index];
	      }
	      allParents.push(parent);
	      allChildren.push(child);
	    }

	    for (var i in parent) {
	      var attrs;
	      if (proto) {
	        attrs = Object.getOwnPropertyDescriptor(proto, i);
	      }
	      
	      if (attrs && attrs.set == null) {
	        continue;
	      }
	      child[i] = _clone(parent[i], depth - 1);
	    }

	    return child;
	  }

	  return _clone(parent, depth);
	}

	/**
	 * Simple flat clone using prototype, accepts only objects, usefull for property
	 * override on FLAT configuration object (no nested props).
	 *
	 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	 * works.
	 */
	clone.clonePrototype = function(parent) {
	  if (parent === null)
	    return null;

	  var c = function () {};
	  c.prototype = parent;
	  return new c();
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(191).Buffer))

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    this.CodeMirror = mod();
	})(function() {
	  "use strict";

	  // BROWSER SNIFFING

	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.

	  var gecko = /gecko\/\d/i.test(navigator.userAgent);
	  // ie_uptoN means Internet Explorer version N or lower
	  var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(navigator.userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
	  var chrome = /Chrome\//.test(navigator.userAgent);
	  var presto = /Opera\//.test(navigator.userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var khtml = /KHTML\//.test(navigator.userAgent);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
	  var phantom = /PhantomJS/.test(navigator.userAgent);

	  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
	  var mac = ios || /Mac/.test(navigator.platform);
	  var windows = /win/i.test(navigator.platform);

	  var presto_version = presto && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);

	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;

	  // EDITOR CONSTRUCTOR

	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.

	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);

	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode);
	    this.doc = doc;

	    var display = this.display = new Display(place, doc);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) focusInput(this);
	    initScrollbars(this);

	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false, focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in readInput
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null  // Unfinished key sequence
	    };

	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(bind(resetInput, this, true), 20);

	    registerEventHandlers(this);
	    ensureGlobalHandlers();

	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);

	    if ((options.autofocus && !mobile) || activeElt() == display.input)
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);

	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }

	  // DISPLAY CONSTRUCTOR

	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.

	  function Display(place, doc) {
	    var d = this;

	    // The semihidden textarea that is focused when the editor is
	    // focused, and receives input.
	    var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) input.style.width = "1000px";
	    else input.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) input.style.border = "1px solid black";
	    input.setAttribute("autocorrect", "off"); input.setAttribute("autocapitalize", "off"); input.setAttribute("spellcheck", "false");

	    // Wraps and hides input textarea
	    d.inputDiv = elt("div", [input], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.inputDiv, d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    // Needed to hide big blue blinking cursor on Mobile Safari
	    if (ios) input.style.width = "0px";
	    if (!webkit) d.scroller.draggable = true;
	    // Needed to handle Tab key in KHTML
	    if (khtml) { d.inputDiv.style.height = "1px"; d.inputDiv.style.position = "absolute"; }

	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }

	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;

	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;

	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // See readInput and resetInput
	    d.prevInput = "";
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;
	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    d.pollingFast = false;
	    // Self-resetting timeout for the poller
	    d.poll = new Delayed();

	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	    // Tracks when resetInput has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    d.inaccurateSelection = false;

	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;

	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	    // True when shift is held down.
	    d.shift = false;

	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;
	  }

	  // STATE UPDATES

	  // Used to get the editor into a consistent state again when options change.

	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }

	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }

	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }

	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;

	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }

	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }

	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }

	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }

	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }

	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }

	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }

	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }

	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }

	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }

	  // SCROLLBARS

	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }

	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);

	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });

	    this.checkedOverlay = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }

	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;

	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }

	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }

	      if (!this.checkedOverlay && measure.clientHeight > 0) {
	        if (sWidth == 0) this.overlayHack();
	        this.checkedOverlay = true;
	      }

	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	    },
	    overlayHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.minHeight = this.vert.style.minWidth = w;
	      var self = this;
	      var barMouseDown = function(e) {
	        if (e_target(e) != self.vert && e_target(e) != self.horiz)
	          operation(self.cm, onMouseDown)(e);
	      };
	      on(this.vert, "mousedown", barMouseDown);
	      on(this.horiz, "mousedown", barMouseDown);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);

	  function NullScrollbars() {}

	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);

	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }

	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(bind(focusInput, cm), 0);
	      });
	      node.setAttribute("not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }

	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }

	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);

	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";

	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }

	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }

	  // LINE NUMBERS

	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter && view[i].gutter)
	        view[i].gutter.style.left = left;
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }

	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }

	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }

	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }

	  // DISPLAY DRAWING

	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;

	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }

	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };

	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }

	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;

	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }

	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;

	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }

	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }

	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);

	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";

	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;

	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = 0;

	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }

	    display.updateLineNumbers = null;

	    return true;
	  }

	  function postUpdateDisplay(cm, update) {
	    var force = update.force, viewport = update.viewport;
	    for (var first = true;; first = false) {
	      if (first && cm.options.lineWrapping && update.oldDisplayWidth != displayWidth(cm)) {
	        force = true;
	      } else {
	        force = false;
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      setDocumentHeight(cm, barMeasure);
	      updateScrollbars(cm, barMeasure);
	    }

	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }

	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      setDocumentHeight(cm, barMeasure);
	      updateScrollbars(cm, barMeasure);
	      update.finish();
	    }
	  }

	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    var total = measure.docHeight + cm.display.barHeight;
	    cm.display.heightForcer.style.top = total + "px";
	    cm.display.gutters.style.height = Math.max(total + scrollGap(cm), measure.clientHeight) + "px";
	  }

	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }

	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.offsetHeight;
	  }

	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }

	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;

	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }

	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }

	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(lineView, dims);
	    }
	    lineView.changes = null;
	  }

	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }

	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }

	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }

	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }

	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }

	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter =
	        wrap.insertBefore(elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                              (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                              "px; width: " + dims.gutterTotalWidth + "px"),
	                          lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }

	  function updateLineWidgets(lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(lineView, dims);
	  }

	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;

	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(lineView, dims);
	    return lineView.node;
	  }

	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(lineView, dims) {
	    insertLineWidgetsFor(lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(lineView.rest[i], lineView, dims, false);
	  }

	  function insertLineWidgetsFor(line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }

	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }

	  // POSITION OBJECT

	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };

	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

	  // SELECTION / CURSOR

	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }

	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };

	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }

	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };

	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }

	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }

	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }

	  // SELECTION UPDATES

	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.

	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }

	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }

	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }

	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }

	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }

	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      }
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }

	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }

	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }

	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel);

	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }

	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;

	    doc.sel = sel;

	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }

	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }

	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }

	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, bias, mayClear) {
	    var flipped = false, curPos = pos;
	    var dir = bias || 1;
	    doc.cantEdit = false;
	    search: for (;;) {
	      var line = getLine(doc, curPos.line);
	      if (line.markedSpans) {
	        for (var i = 0; i < line.markedSpans.length; ++i) {
	          var sp = line.markedSpans[i], m = sp.marker;
	          if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
	              (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
	            if (mayClear) {
	              signal(m, "beforeCursorEnter");
	              if (m.explicitlyCleared) {
	                if (!line.markedSpans) break;
	                else {--i; continue;}
	              }
	            }
	            if (!m.atomic) continue;
	            var newPos = m.find(dir < 0 ? -1 : 1);
	            if (cmp(newPos, curPos) == 0) {
	              newPos.ch += dir;
	              if (newPos.ch < 0) {
	                if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
	                else newPos = null;
	              } else if (newPos.ch > line.text.length) {
	                if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
	                else newPos = null;
	              }
	              if (!newPos) {
	                if (flipped) {
	                  // Driven in a corner -- no valid cursor position found at all
	                  // -- try again *with* clearing, if we didn't already
	                  if (!mayClear) return skipAtomic(doc, pos, bias, true);
	                  // Otherwise, turn off editing until further notice, and return the start of the doc
	                  doc.cantEdit = true;
	                  return Pos(doc.first, 0);
	                }
	                flipped = true; newPos = pos; dir = -dir;
	              }
	            }
	            curPos = newPos;
	            continue search;
	          }
	        }
	      }
	      return curPos;
	    }
	  }

	  // SELECTION DRAWING

	  // Redraw the selection and/or cursor
	  function drawSelection(cm) {
	    var display = cm.display, doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();

	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }

	    // Move the hidden textarea near the cursor to prevent scrolling artifacts
	    if (cm.options.moveInputWithCursor) {
	      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                          headPos.top + lineOff.top - wrapOff.top));
	      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                           headPos.left + lineOff.left - wrapOff.left));
	    }

	    return result;
	  }

	  function showSelection(cm, drawn) {
	    removeChildrenAndAdd(cm.display.cursorDiv, drawn.cursors);
	    removeChildrenAndAdd(cm.display.selectionDiv, drawn.selection);
	    if (drawn.teTop != null) {
	      cm.display.inputDiv.style.top = drawn.teTop + "px";
	      cm.display.inputDiv.style.left = drawn.teLeft + "px";
	    }
	  }

	  function updateSelection(cm) {
	    showSelection(cm, drawSelection(cm));
	  }

	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, range, output) {
	    var pos = cursorCoords(cm, range.head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }

	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }

	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }

	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }

	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }

	    output.appendChild(fragment);
	  }

	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }

	  // HIGHLIGHT WORKER

	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }

	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];

	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles;
	        var highlighted = highlightLine(cm, line, state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = copyState(doc.mode, state);
	      } else {
	        processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }

	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }

	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }

	  // POSITION MEASUREMENT

	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }

	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }

	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }

	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }

	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }

	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }

	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }

	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text)
	      view = null;
	    else if (view && view.changes)
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	    if (!view)
	      view = updateExternalMeasurement(cm, line);

	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }

	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }

	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

	  function measureCharInner(cm, prepared, ch, bias) {
	    var map = prepared.map;

	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }

	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(mStart + start))) --start;
	        while (mStart + end < mEnd && isExtendingChar(prepared.line.text.charAt(mStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == mEnd - mStart) {
	          rect = node.parentNode.getBoundingClientRect();
	        } else if (ie && cm.options.lineWrapping) {
	          var rects = range(node, start, end).getClientRects();
	          if (rects.length)
	            rect = rects[bias == "right" ? rects.length - 1 : 0];
	          else
	            rect = nullRect;
	        } else {
	          rect = range(node, start, end).getBoundingClientRect() || nullRect;
	        }
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }

	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	    return result;
	  }

	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }

	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }

	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }

	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }

	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }

	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }

	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }

	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }

	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }

	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }

	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }

	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;

	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }

	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }

	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var xDiff = x - (ch == from ? fromX : toX);
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
	                              xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }

	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }

	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }

	  // OPERATIONS

	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.

	  var operationGroup = null;

	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }

	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i]();
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++](op.cm);
	      }
	    } while (i < callbacks.length);
	  }

	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;

	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }

	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }

	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);

	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }

	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }

	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);

	    op.barMeasure = measureForScrollbars(cm);

	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }

	    if (op.updatedDisplay || op.selectionChanged)
	      op.newSelectionNodes = drawSelection(cm);
	  }

	  function endOperation_W2(op) {
	    var cm = op.cm;

	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }

	    if (op.newSelectionNodes)
	      showSelection(cm, op.newSelectionNodes);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);

	    if (op.selectionChanged) restartBlink(cm);

	    if (cm.state.focused && op.updateInput)
	      resetInput(cm, op.typing);
	  }

	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;

	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;

	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - displayWidth(cm), op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }

	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;

	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }

	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }

	  // VIEW TRACKING

	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }

	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }

	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;

	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;

	    cm.curOp.viewChanged = true;

	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }

	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }

	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;

	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }

	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }

	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }

	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }

	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }

	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }

	  // INPUT HANDLING

	  // Poll for input changes, using the normal rate of polling. This
	  // runs as long as the editor is focused.
	  function slowPoll(cm) {
	    if (cm.display.pollingFast) return;
	    cm.display.poll.set(cm.options.pollInterval, function() {
	      readInput(cm);
	      if (cm.state.focused) slowPoll(cm);
	    });
	  }

	  // When an event has just come in that is likely to add or change
	  // something in the input textarea, we poll faster, to ensure that
	  // the change appears on the screen quickly.
	  function fastPoll(cm) {
	    var missed = false;
	    cm.display.pollingFast = true;
	    function p() {
	      var changed = readInput(cm);
	      if (!changed && !missed) {missed = true; cm.display.poll.set(60, p);}
	      else {cm.display.pollingFast = false; slowPoll(cm);}
	    }
	    cm.display.poll.set(20, p);
	  }

	  // This will be set to an array of strings when copying, so that,
	  // when pasting, we know what kind of selections the copied text
	  // was made out of.
	  var lastCopied = null;

	  // Read input from the textarea, and update the document to match.
	  // When something is selected, it is present in the textarea, and
	  // selected (unless it is huge, in which case a placeholder is
	  // used). When nothing is selected, the cursor sits after previously
	  // seen text (can be empty), which is stored in prevInput (we must
	  // not reset the textarea when typing, because that breaks IME).
	  function readInput(cm) {
	    var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc;
	    // Since this is called a *lot*, try to bail out as cheaply as
	    // possible when it is clear that nothing happened. hasSelection
	    // will be the case when there is a lot of text in the textarea,
	    // in which case reading its value would be expensive.
	    if (!cm.state.focused || (hasSelection(input) && !prevInput) || isReadOnly(cm) || cm.options.disableInput || cm.state.keySeq)
	      return false;
	    // See paste handler for more on the fakedLastChar kludge
	    if (cm.state.pasteIncoming && cm.state.fakedLastChar) {
	      input.value = input.value.substring(0, input.value.length - 1);
	      cm.state.fakedLastChar = false;
	    }
	    var text = input.value;
	    // If nothing changed, bail.
	    if (text == prevInput && !cm.somethingSelected()) return false;
	    // Work around nonsensical selection resetting in IE9/10, and
	    // inexplicable appearance of private area unicode characters on
	    // some key combos in Mac (#2689).
	    if (ie && ie_version >= 9 && cm.display.inputHasSelection === text ||
	        mac && /[\uf700-\uf7ff]/.test(text)) {
	      resetInput(cm);
	      return false;
	    }

	    var withOp = !cm.curOp;
	    if (withOp) startOperation(cm);
	    cm.display.shift = false;

	    if (text.charCodeAt(0) == 0x200b && doc.sel == cm.display.selForContextMenu && !prevInput)
	      prevInput = "\u200b";
	    // Find the part of the input that is actually new
	    var same = 0, l = Math.min(prevInput.length, text.length);
	    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;
	    var inserted = text.slice(same), textLines = splitLines(inserted);

	    // When pasing N lines into N selections, insert one line per selection
	    var multiPaste = null;
	    if (cm.state.pasteIncoming && doc.sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.join("\n") == inserted)
	        multiPaste = doc.sel.ranges.length % lastCopied.length == 0 && map(lastCopied, splitLines);
	      else if (textLines.length == doc.sel.ranges.length)
	        multiPaste = map(textLines, function(l) { return [l]; });
	    }

	    // Normal behavior is to insert the new text into every selection
	    for (var i = doc.sel.ranges.length - 1; i >= 0; i--) {
	      var range = doc.sel.ranges[i];
	      var from = range.from(), to = range.to();
	      // Handle deletion
	      if (same < prevInput.length)
	        from = Pos(from.line, from.ch - (prevInput.length - same));
	      // Handle overwrite
	      else if (cm.state.overwrite && range.empty() && !cm.state.pasteIncoming)
	        to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: cm.state.pasteIncoming ? "paste" : cm.state.cutIncoming ? "cut" : "+input"};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	      // When an 'electric' character is inserted, immediately trigger a reindent
	      if (inserted && !cm.state.pasteIncoming && cm.options.electricChars &&
	          cm.options.smartIndent && range.head.ch < 100 &&
	          (!i || doc.sel.ranges[i - 1].head.line != range.head.line)) {
	        var mode = cm.getModeAt(range.head);
	        var end = changeEnd(changeEvent);
	        if (mode.electricChars) {
	          for (var j = 0; j < mode.electricChars.length; j++)
	            if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	              indentLine(cm, end.line, "smart");
	              break;
	            }
	        } else if (mode.electricInput) {
	          if (mode.electricInput.test(getLine(doc, end.line).text.slice(0, end.ch)))
	            indentLine(cm, end.line, "smart");
	        }
	      }
	    }
	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;

	    // Don't leave long text in the textarea, since it makes further polling slow
	    if (text.length > 1000 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = "";
	    else cm.display.prevInput = text;
	    if (withOp) endOperation(cm);
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	    return true;
	  }

	  // Reset the input to correspond to the selection (or to be empty,
	  // when not typing and nothing is selected)
	  function resetInput(cm, typing) {
	    if (cm.display.contextMenuPending) return;
	    var minimal, selected, doc = cm.doc;
	    if (cm.somethingSelected()) {
	      cm.display.prevInput = "";
	      var range = doc.sel.primary();
	      minimal = hasCopyEvent &&
	        (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	      var content = minimal ? "-" : selected || cm.getSelection();
	      cm.display.input.value = content;
	      if (cm.state.focused) selectInput(cm.display.input);
	      if (ie && ie_version >= 9) cm.display.inputHasSelection = content;
	    } else if (!typing) {
	      cm.display.prevInput = cm.display.input.value = "";
	      if (ie && ie_version >= 9) cm.display.inputHasSelection = null;
	    }
	    cm.display.inaccurateSelection = minimal;
	  }

	  function focusInput(cm) {
	    if (cm.options.readOnly != "nocursor" && (!mobile || activeElt() != cm.display.input)) {
	      try { cm.display.input.focus(); }
	      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	    }
	  }

	  function ensureFocus(cm) {
	    if (!cm.state.focused) { focusInput(cm); onFocus(cm); }
	  }

	  function isReadOnly(cm) {
	    return cm.options.readOnly || cm.doc.cantEdit;
	  }

	  // EVENT HANDLERS

	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Prevent normal selection in the editor (we handle our own)
	    on(d.lineSpace, "selectstart", function(e) {
	      if (!eventInWidget(d, e)) e_preventDefault(e);
	    });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });

	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	    on(d.input, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(d.input, "input", function() {
	      if (ie && ie_version >= 9 && cm.display.inputHasSelection) cm.display.inputHasSelection = null;
	      readInput(cm);
	    });
	    on(d.input, "keydown", operation(cm, onKeyDown));
	    on(d.input, "keypress", operation(cm, onKeyPress));
	    on(d.input, "focus", bind(onFocus, cm));
	    on(d.input, "blur", bind(onBlur, cm));

	    function drag_(e) {
	      if (!signalDOMEvent(cm, e)) e_stop(e);
	    }
	    if (cm.options.dragDrop) {
	      on(d.scroller, "dragstart", function(e){onDragStart(cm, e);});
	      on(d.scroller, "dragenter", drag_);
	      on(d.scroller, "dragover", drag_);
	      on(d.scroller, "drop", operation(cm, onDrop));
	    }
	    on(d.scroller, "paste", function(e) {
	      if (eventInWidget(d, e)) return;
	      cm.state.pasteIncoming = true;
	      focusInput(cm);
	      fastPoll(cm);
	    });
	    on(d.input, "paste", function() {
	      // Workaround for webkit bug https://bugs.webkit.org/show_bug.cgi?id=90206
	      // Add a char to the end of textarea before paste occur so that
	      // selection doesn't span to the end of textarea.
	      if (webkit && !cm.state.fakedLastChar && !(new Date - cm.state.lastMiddleDown < 200)) {
	        var start = d.input.selectionStart, end = d.input.selectionEnd;
	        d.input.value += "$";
	        // The selection end needs to be set before the start, otherwise there
	        // can be an intermediate non-empty selection between the two, which
	        // can override the middle-click paste buffer on linux and cause the
	        // wrong thing to get pasted.
	        d.input.selectionEnd = end;
	        d.input.selectionStart = start;
	        cm.state.fakedLastChar = true;
	      }
	      cm.state.pasteIncoming = true;
	      fastPoll(cm);
	    });

	    function prepareCopyCut(e) {
	      if (cm.somethingSelected()) {
	        lastCopied = cm.getSelections();
	        if (d.inaccurateSelection) {
	          d.prevInput = "";
	          d.inaccurateSelection = false;
	          d.input.value = lastCopied.join("\n");
	          selectInput(d.input);
	        }
	      } else {
	        var text = [], ranges = [];
	        for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	          var line = cm.doc.sel.ranges[i].head.line;
	          var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	          ranges.push(lineRange);
	          text.push(cm.getRange(lineRange.anchor, lineRange.head));
	        }
	        if (e.type == "cut") {
	          cm.setSelections(ranges, null, sel_dontScroll);
	        } else {
	          d.prevInput = "";
	          d.input.value = text.join("\n");
	          selectInput(d.input);
	        }
	        lastCopied = text;
	      }
	      if (e.type == "cut") cm.state.cutIncoming = true;
	    }
	    on(d.input, "cut", prepareCopyCut);
	    on(d.input, "copy", prepareCopyCut);

	    // Needed to handle Tab key in KHTML
	    if (khtml) on(d.sizer, "mouseup", function() {
	      if (activeElt() == d.input) d.input.blur();
	      focusInput(cm);
	    });
	  }

	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }

	  // MOUSE EVENTS

	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }

	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("not-content") == "true") return null;

	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }

	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    if (signalDOMEvent(this, e)) return;
	    var cm = this, display = cm.display;
	    display.shift = e.shiftKey;

	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();

	    switch (e_button(e)) {
	    case 1:
	      if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(bind(focusInput, cm), 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      break;
	    }
	  }

	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    setTimeout(bind(ensureFocus, cm), 0);

	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }

	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        !sel.ranges[contained].empty())
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }

	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier)
	          extendSelection(cm.doc, start);
	        focusInput(cm);
	        // Work around unexplainable focus problem in IE9 (#2127)
	        if (ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); focusInput(cm);}, 20);
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }

	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);

	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	    }

	    if (e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }

	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single") {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0));
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }

	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;

	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }

	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;

	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        ensureFocus(cm);
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }

	    function done(e) {
	      counter = Infinity;
	      e_preventDefault(e);
	      focusInput(cm);
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }

	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }

	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent, signalfn) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);

	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();

	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;

	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signalfn(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }

	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true, signalLater);
	  }

	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;

	  function onDrop(e) {
	    var cm = this;
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || isReadOnly(cm)) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          text[i] = reader.result;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos, text: splitLines(text.join("\n")), origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(bind(focusInput, cm), 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !(mac ? e.metaKey : e.ctrlKey))
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          focusInput(cm);
	        }
	      }
	      catch(e){}
	    }
	  }

	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	    e.dataTransfer.setData("Text", cm.getSelection());

	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }

	  // SCROLL EVENTS

	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }

	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.

	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;

	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };

	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
	          dy && scroll.scrollHeight > scroll.clientHeight)) return;

	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }

	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }

	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }

	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }

	  // KEY EVENTS

	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (isReadOnly(cm)) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }

	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }

	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          resetInput(cm);
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);

	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);

	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }

	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }

	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;

	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }

	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }

	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    ensureFocus(cm);
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }

	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }

	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");

	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }

	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }

	  function onKeyPress(e) {
	    var cm = this;
	    if (signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if (((presto && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    if (ie && ie_version >= 9) cm.display.inputHasSelection = null;
	    fastPoll(cm);
	  }

	  // FOCUS/BLUR EVENTS

	  function onFocus(cm) {
	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // The prevInput test prevents this from firing when a context
	      // menu is closed (since the resetInput would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        resetInput(cm);
	        if (webkit) setTimeout(bind(resetInput, cm, true), 0); // Issue #1730
	      }
	    }
	    slowPoll(cm);
	    restartBlink(cm);
	  }
	  function onBlur(cm) {
	    if (cm.state.focused) {
	      signal(cm, "blur", cm);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }

	  // CONTEXT MENU HANDLING

	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    var display = cm.display;
	    if (eventInWidget(display, e) || contextMenuInGutter(cm, e)) return;

	    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	    if (!pos || presto) return; // Opera is difficult.

	    // Reset the current text selection only if the click is done outside of the selection
	    // and 'resetSelectionOnContextMenu' option is true.
	    var reset = cm.options.resetSelectionOnContextMenu;
	    if (reset && cm.doc.sel.contains(pos) == -1)
	      operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	    var oldCSS = display.input.style.cssText;
	    display.inputDiv.style.position = "absolute";
	    display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
	      "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " +
	      (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	      "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	    if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	    focusInput(cm);
	    if (webkit) window.scrollTo(null, oldScrollY);
	    resetInput(cm);
	    // Adds "Select all" to context menu in FF
	    if (!cm.somethingSelected()) display.input.value = display.prevInput = " ";
	    display.contextMenuPending = true;
	    display.selForContextMenu = cm.doc.sel;
	    clearTimeout(display.detectingSelectAll);

	    // Select-all will be greyed out if there's nothing to select, so
	    // this adds a zero-width space so that we can later check whether
	    // it got selected.
	    function prepareSelectAllHack() {
	      if (display.input.selectionStart != null) {
	        var selected = cm.somethingSelected();
	        var extval = display.input.value = "\u200b" + (selected ? display.input.value : "");
	        display.prevInput = selected ? "" : "\u200b";
	        display.input.selectionStart = 1; display.input.selectionEnd = extval.length;
	        // Re-set this, in case some other handler touched the
	        // selection in the meantime.
	        display.selForContextMenu = cm.doc.sel;
	      }
	    }
	    function rehide() {
	      display.contextMenuPending = false;
	      display.inputDiv.style.position = "relative";
	      display.input.style.cssText = oldCSS;
	      if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
	      slowPoll(cm);

	      // Try to detect the user choosing select-all
	      if (display.input.selectionStart != null) {
	        if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	        var i = 0, poll = function() {
	          if (display.selForContextMenu == cm.doc.sel && display.input.selectionStart == 0)
	            operation(cm, commands.selectAll)(cm);
	          else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	          else resetInput(cm);
	        };
	        display.detectingSelectAll = setTimeout(poll, 200);
	      }
	    }

	    if (ie && ie_version >= 9) prepareSelectAllHack();
	    if (captureRightClick) {
	      e_stop(e);
	      var mouseup = function() {
	        off(window, "mouseup", mouseup);
	        setTimeout(rehide, 20);
	      };
	      on(window, "mouseup", mouseup);
	    } else {
	      setTimeout(rehide, 50);
	    }
	  }

	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false, signal);
	  }

	  // UPDATING

	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };

	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);

	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }

	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }

	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }

	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }

	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }

	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }

	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }

	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }

	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];

	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }

	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits) return;

	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;

	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }

	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;

	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }

	      antiChanges.push(historyChangeFromChange(doc, change));

	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];

	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }

	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }

	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;

	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }

	    change.removed = getBetween(doc, change.from, change.to);

	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }

	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }

	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);

	    updateDoc(doc, change, spans, estimateHeight(cm));

	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }

	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);

	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);

	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }

	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }

	  // SCROLLING THINGS INTO VIEW

	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }

	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }

	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }

	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }

	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }

	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }

	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }

	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }

	  // API UTILITIES

	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }

	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);

	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);

	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	    line.stateAfter = null;
	  }

	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }

	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }

	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    var possible = true;
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return (possible = false);
	      } else ch = next;
	      return true;
	    }

	    if (unit == "char") moveOnce();
	    else if (unit == "column") moveOnce(true);
	    else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }

	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), origDir, true);
	    if (!possible) result.hitSide = true;
	    return result;
	  }

	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }

	  // EDITOR METHODS

	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.

	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); focusInput(this); fastPoll(this);},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },

	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },

	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return helpers;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, last = this.doc.first + this.doc.size - 1;
	      if (line < this.doc.first) line = this.doc.first;
	      else if (line > last) { line = last; end = true; }
	      var lineObj = getLine(this.doc, line);
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },

	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },

	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),

	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),

	    addLineWidget: methodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),

	    removeLineWidget: function(widget) { widget.clear(); },

	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd](this);
	    },

	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return activeElt() == this.display.input; },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;

	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),

	    operation: function(f){return runInOp(this, f);},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      resetInput(this);
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),

	    getInputField: function(){return this.display.input;},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);

	  // OPTION DEFAULTS

	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }

	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);

	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val) {
	    cm.options.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    cm.refresh();
	  }, true);
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);

	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);

	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);

	  option("resetSelectionOnContextMenu", true);

	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	      if (!val) resetInput(cm);
	    }
	  });
	  option("disableInput", false, function(cm, val) {if (!val) resetInput(cm);}, true);
	  option("dragDrop", true);

	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
	  });

	  option("tabindex", null, function(cm, val) {
	    cm.display.input.tabIndex = val || "";
	  });
	  option("autofocus", null);

	  // MODE DEFINITION AND QUERYING

	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };

	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };

	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };

	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];

	    return modeObj;
	  };

	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");

	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };

	  // EXTENSIONS

	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;

	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };

	  // MODE STATE HANDLING

	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.

	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };

	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };

	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };

	  // STANDARD COMMANDS

	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + "\n" + prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange("\n", range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	          ensureCursorVisible(cm);
	        }
	      });
	    },
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };


	  // STANDARD KEYMAPS

	  var keyMap = CodeMirror.keyMap = {};

	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

	  // KEYMAP DISPATCH

	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }

	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }

	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keyname;
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };

	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";

	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };

	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };

	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };

	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }

	  // FROMTEXTAREA

	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabindex)
	      options.tabindex = textarea.tabindex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }

	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }

	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };

	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };

	  // STRING STREAM

	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.

	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };

	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };

	  // TEXTMARKERS

	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.

	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	  };
	  eventMixin(TextMarker);

	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }

	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };

	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };

	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };

	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };

	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;

	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }

	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });

	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }

	  // SHARED TEXTMARKERS

	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);

	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };

	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }

	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }

	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }

	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }

	  // TEXTMARKER SPANS

	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }

	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }

	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }

	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;

	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);

	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);

	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }

	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }

	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;

	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }

	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }

	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }

	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }

	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
	          fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
	        return true;
	    }
	  }

	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }

	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }

	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }

	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }

	  // LINE WIDGETS

	  // Line widgets are block elements displayed above or below a line.

	  var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.cm = cm;
	    this.node = node;
	  };
	  eventMixin(LineWidget);

	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }

	  LineWidget.prototype.clear = function() {
	    var cm = this.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	      updateLineHeight(line, Math.max(0, line.height - height));
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	      updateLineHeight(line, line.height + diff);
	    });
	  };

	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + widget.cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + widget.cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(widget.cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.offsetHeight;
	  }

	  function addLineWidget(cm, handle, node, options) {
	    var widget = new LineWidget(cm, node, options);
	    if (widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(cm.doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (!lineIsHidden(cm.doc, line)) {
	        var aboveVisible = heightAtLine(line) < cm.doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }

	  // LINE DATA STRUCTURE

	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };

	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }

	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }

	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }

	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }

	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }

	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }

	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }

	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 50000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444 characters
	      var pos = Math.min(stream.pos, curStart + 50000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }

	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);

	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }

	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }

	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var result = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }

	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }

	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }

	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content]), content: content, col: 0, pos: 0, cm: cm};
	    lineView.measure = {};

	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if ((ie || webkit) && cm.getOption("lineWrapping"))
	        builder.addToken = buildTokenSplitSpaces(builder.addToken);
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }

	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }

	    // See issue #2901
	    if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
	      builder.content.className = "cm-tab-wrap-hack";

	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	    return builder;
	  }

	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }

	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var special = builder.cm.options.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(text);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(text.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          builder.col += tabWidth;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }

	  function buildTokenSplitSpaces(inner) {
	    function split(old) {
	      var out = " ";
	      for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
	      out += " ";
	      return out;
	    }
	    return function(builder, text, style, startStyle, endStyle, title) {
	      inner(builder, text.replace(/ {3,}/g, split), style, startStyle, endStyle, title);
	    };
	  }

	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }

	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) {
	      builder.map.push(builder.pos, builder.pos + size, widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	  }

	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }

	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [];
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
	            if (sp.to != null && nextChange > sp.to) { nextChange = sp.to; spanEndStyle = ""; }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) foundBookmarks.push(m);
	        }
	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	        }
	        if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	      }
	      if (pos >= len) break;

	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }

	  // DOCUMENT DATA STRUCTURE

	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }

	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }

	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }

	    signalLater(doc, "change", doc, change);
	  }

	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }

	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };

	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }

	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            while (child.lines.length > 50) {
	              var spilled = child.lines.splice(child.lines.length - 25, 25);
	              var newleaf = new LeafChunk(spilled);
	              child.height -= newleaf.height;
	              this.children.splice(i + 1, 0, newleaf);
	              newleaf.parent = this;
	            }
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	        } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };

	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
	    if (firstLine == null) firstLine = 0;

	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;

	    if (typeof text == "string") text = splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };

	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },

	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },

	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.

	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || "\n");
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || "\n");
	    },

	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},

	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },

	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},

	    clipPos: function(pos) {return clipPos(this, pos);},

	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},

	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads, options));
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      extendSelections(this, map(this.sel.ranges, f), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),

	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || "\n");
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || "\n");
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},

	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },

	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },

	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),

	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(lineNo == from.line && from.ch > span.to ||
	                span.from == null && lineNo != from.line||
	                lineNo == to.line && span.from > to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },

	    posFromIndex: function(off) {
	      var ch, lineNo = this.first;
	      this.iter(function(line) {
	        var sz = line.text.length + 1;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + 1;
	      });
	      return index;
	    },

	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },

	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},

	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;}
	  });

	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;

	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);

	  eventMixin(Doc);

	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }

	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }

	  // LINE UTILITIES

	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }

	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }

	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }

	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }

	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }


	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);

	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }

	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }

	  // HISTORY

	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }

	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }

	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }

	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }

	  // Register a change in the history. Merges changes that are within
	  // a single operation, ore are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;

	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;

	    if (!last) signal(doc, "historyAdded");
	  }

	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }

	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;

	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);

	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }

	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }

	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }

	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }

	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }

	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }

	  // Rebasing/resetting history to deal with externally-sourced changes

	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }

	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }

	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }

	  // EVENT UTILITIES

	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.

	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }

	  // EVENT HANDLING

	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.

	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };

	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var arr = emitter._handlers && emitter._handlers[type];
	      if (!arr) return;
	      for (var i = 0; i < arr.length; ++i)
	        if (arr[i] == f) { arr.splice(i, 1); break; }
	    }
	  };

	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var arr = emitter._handlers && emitter._handlers[type];
	    if (!arr) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
	  };

	  var orphanDelayedCallbacks = null;

	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = emitter._handlers && emitter._handlers[type];
	    if (!arr) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }

	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }

	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }

	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }

	  function hasHandler(emitter, type) {
	    var arr = emitter._handlers && emitter._handlers[type];
	    return arr && arr.length > 0;
	  }

	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }

	  // MISC UTILITIES

	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;

	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };

	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };

	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  function findColumn(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }

	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }

	  function lst(arr) { return arr[arr.length-1]; }

	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };

	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }

	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      var ctor = function() {};
	      ctor.prototype = base;
	      inst = new ctor();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };

	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }

	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }

	  var nonASCIISingleCaseWordChar = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }

	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }

	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

	  // DOM UTILITIES

	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }

	  var range;
	  if (document.createRange) range = function(node, start, end) {
	    var r = document.createRange();
	    r.setEnd(node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };

	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }

	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }

	  var contains = CodeMirror.contains = function(parent, child) {
	    if (parent.contains)
	      return parent.contains(child);
	    while (child = child.parentNode) {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    }
	  };

	  function activeElt() { return document.activeElement; }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };

	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }

	  // WINDOW-WIDE EVENTS

	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.

	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }

	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }

	  // FEATURE DETECTION

	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();

	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    if (zwspSupported) return elt("span", "\u200b");
	    else return elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	  }

	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    return badBidiRects = (r1.right - r0.right < 3);
	  }

	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLines = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};

	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };

	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();

	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }

	  // KEY NAMES

	  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	                  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	                  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	                  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 107: "=", 109: "-", 127: "Delete",
	                  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	                  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	                  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"};
	  CodeMirror.keyNames = keyNames;
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();

	  // BIDI HELPERS

	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }

	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }

	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }

	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }

	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }

	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }

	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }

	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.

	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals

	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }

	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";

	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }

	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));

	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }

	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }

	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }

	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }

	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));

	      return order;
	    };
	  })();

	  // THE END

	  CodeMirror.version = "4.13.0";

	  return CodeMirror;
	});


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(195);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(195);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use once'

	module.exports = function once(fn, scope){

	    var called
	    var result

	    return function(){
	        if (called){
	            return result
	        }

	        called = true

	        return result = fn.apply(scope || this, arguments)
	    }
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	            value       : ctor,
	            enumerable  : false,
	            writable    : true,
	            configurable: true
	        }
	    })
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @static
	 * Returns true if the given region is valid, false otherwise.
	 * @param  {Region} region The region to check
	 * @return {Boolean}        True, if the region is valid, false otherwise.
	 * A region is valid if
	 *  * left <= right  &&
	 *  * top  <= bottom
	 */
	module.exports = function validate(region){

	    var isValid = true

	    if (region.right < region.left){
	        isValid = false
	        region.right = region.left
	    }

	    if (region.bottom < region.top){
	        isValid = false
	        region.bottom = region.top
	    }

	    return isValid
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasOwn   = __webpack_require__(152)
	var VALIDATE = __webpack_require__(182)

	module.exports = function(REGION){

	    var MAX = Math.max
	    var MIN = Math.min

	    var statics = {
	        init: function(){
	            var exportAsNonStatic = {
	                getIntersection      : true,
	                getIntersectionArea  : true,
	                getIntersectionHeight: true,
	                getIntersectionWidth : true,
	                getUnion             : true
	            }
	            var thisProto = REGION.prototype
	            var newName

	            var exportHasOwn = hasOwn(exportAsNonStatic)
	            var methodName

	            for (methodName in exportAsNonStatic) if (exportHasOwn(methodName)) {
	                newName = exportAsNonStatic[methodName]
	                if (typeof newName != 'string'){
	                    newName = methodName
	                }

	                ;(function(proto, methodName, protoMethodName){

	                    proto[methodName] = function(region){
	                        //<debug>
	                        if (!REGION[protoMethodName]){
	                            console.warn('cannot find method ', protoMethodName,' on ', REGION)
	                        }
	                        //</debug>
	                        return REGION[protoMethodName](this, region)
	                    }

	                })(thisProto, newName, methodName);
	            }
	        },

	        validate: VALIDATE,

	        /**
	         * Returns the region corresponding to the documentElement
	         * @return {Region} The region corresponding to the documentElement. This region is the maximum region visible on the screen.
	         */
	        getDocRegion: function(){
	            return REGION.fromDOM(document.documentElement)
	        },

	        from: function(reg){
	            if (reg.__IS_REGION){
	                return reg
	            }

	            if (typeof document != 'undefined'){
	                if (typeof HTMLElement != 'undefined' && reg instanceof HTMLElement){
	                    return REGION.fromDOM(reg)
	                }

	                if (reg.type && typeof reg.pageX !== 'undefined' && typeof reg.pageY !== 'undefined'){
	                    return REGION.fromEvent(reg)
	                }
	            }

	            return REGION(reg)
	        },

	        fromEvent: function(event){
	            return REGION.fromPoint({
	                x: event.pageX,
	                y: event.pageY
	            })
	        },

	        fromDOM: function(dom){
	            var rect = dom.getBoundingClientRect()
	            // var docElem = document.documentElement
	            // var win     = window

	            // var top  = rect.top + win.pageYOffset - docElem.clientTop
	            // var left = rect.left + win.pageXOffset - docElem.clientLeft

	            return new REGION({
	                top   : rect.top,
	                left  : rect.left,
	                bottom: rect.bottom,
	                right : rect.right
	            })
	        },

	        /**
	         * @static
	         * Returns a region that is the intersection of the given two regions
	         * @param  {Region} first  The first region
	         * @param  {Region} second The second region
	         * @return {Region/Boolean}        The intersection region or false if no intersection found
	         */
	        getIntersection: function(first, second){

	            var area = this.getIntersectionArea(first, second)

	            if (area){
	                return new REGION(area)
	            }

	            return false
	        },

	        getIntersectionWidth: function(first, second){
	            var minRight  = MIN(first.right, second.right)
	            var maxLeft   = MAX(first.left,  second.left)

	            if (maxLeft < minRight){
	                return minRight  - maxLeft
	            }

	            return 0
	        },

	        getIntersectionHeight: function(first, second){
	            var maxTop    = MAX(first.top,   second.top)
	            var minBottom = MIN(first.bottom,second.bottom)

	            if (maxTop  < minBottom){
	                return minBottom - maxTop
	            }

	            return 0
	        },

	        getIntersectionArea: function(first, second){
	            var maxTop    = MAX(first.top,   second.top)
	            var minRight  = MIN(first.right, second.right)
	            var minBottom = MIN(first.bottom,second.bottom)
	            var maxLeft   = MAX(first.left,  second.left)

	            if (
	                    maxTop  < minBottom &&
	                    maxLeft < minRight
	                ){
	                return {
	                    top    : maxTop,
	                    right  : minRight,
	                    bottom : minBottom,
	                    left   : maxLeft,

	                    width  : minRight  - maxLeft,
	                    height : minBottom - maxTop
	                }
	            }

	            return false
	        },

	        /**
	         * @static
	         * Returns a region that is the union of the given two regions
	         * @param  {Region} first  The first region
	         * @param  {Region} second The second region
	         * @return {Region}        The union region. The smallest region that contains both given regions.
	         */
	        getUnion: function(first, second){
	            var top    = MIN(first.top,   second.top)
	            var right  = MAX(first.right, second.right)
	            var bottom = MAX(first.bottom,second.bottom)
	            var left   = MIN(first.left,  second.left)

	            return new REGION(top, right, bottom, left)
	        },

	        /**
	         * @static
	         * Returns a region. If the reg argument is a region, returns it, otherwise return a new region built from the reg object.
	         *
	         * @param  {Region} reg A region or an object with either top, left, bottom, right or
	         * with top, left, width, height
	         * @return {Region} A region
	         */
	        getRegion: function(reg){
	            return REGION.from(reg)
	        },

	        /**
	         * Creates a region that corresponds to a point.
	         *
	         * @param  {Object} xy The point
	         * @param  {Number} xy.x
	         * @param  {Number} xy.y
	         *
	         * @return {Region}    The new region, with top==xy.y, bottom = xy.y and left==xy.x, right==xy.x
	         */
	        fromPoint: function(xy){
	            return new REGION({
	                        top    : xy.y,
	                        bottom : xy.y,
	                        left   : xy.x,
	                        right  : xy.x
	                    })
	        }
	    }

	    Object.keys(statics).forEach(function(key){
	        REGION[key] = statics[key]
	    })

	    REGION.init()
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function emptyFn(){}

	var React      = __webpack_require__(1)
	var assign     = __webpack_require__(38)
	var Region     = __webpack_require__(189)
	var inTriangle = __webpack_require__(211)
	var hasTouch = __webpack_require__(154)

	var normalize = __webpack_require__(51)

	var getMenuOffset = __webpack_require__(197)
	var getConstrainRegion = __webpack_require__(198)
	var getItemStyleProps = __webpack_require__(199)
	var renderSubMenu     = __webpack_require__(200)
	var renderChildren    = __webpack_require__(201)
	var prepareItem       = __webpack_require__(202)

	var propTypes = __webpack_require__(203)
	var ScrollContainer = __webpack_require__(204)

	var MenuItem = __webpack_require__(188)

	var MenuClass = React.createClass({

	    displayName: 'Menu',

	    propTypes: propTypes,

	    getDefaultProps: function(){

	        return {
	            isMenu: true,
	            constrainTo: true,
	            enableScroll: true,
	            interactionStyles: true,
	            applyDefaultTheme: true,

	            defaultStyle: {
	                display  : 'inline-block',
	                boxSizing: 'border-box',
	                position : 'relative',

	                background: 'white',
	                //theme props
	                border: '1px solid rgb(46, 153, 235)'
	            },
	            defaultSubMenuStyle: {
	                position: 'absolute'
	            },
	            subMenuStyle: null,


	            scrollerProps: {},

	            columns: ['label'],
	            items  : null,
	            visible: true,

	            defaultItemStyle: {},
	            itemStyle: {},

	            defaultItemOverStyle: {},
	            itemOverStyle: {},

	            defaultItemDisabledStyle: {},
	            itemDisabledStyle: {},

	            defaultItemExpandedStyle: {},
	            itemExpandedStyle: {},

	            defaultCellStyle: {},
	            cellStyle: {},

	            stopClickPropagation: true
	        }
	    },

	    getInitialState: function() {
	        return {
	            mouseOver: false
	        }
	    },

	    componentWillUnmount: function(){
	        this.didMount = false
	    },

	    componentDidMount: function() {
	        ;(this.props.onMount || emptyFn)(this)

	        this.didMount = true

	        if ((this.props.constrainTo || this.props.alignTo) && !this.props.subMenu){
	            setTimeout(function(){

	                if (!this.isMounted()){
	                    return
	                }

	                var props = this.props

	                var scrollRegion = Region.from(this.refs.scrollContainer.getDOMNode())
	                var domNode      = this.getDOMNode()
	                var domRegion    = Region.from(domNode)
	                var paddingSize  = domRegion.height

	                var actualHeight = scrollRegion.height + paddingSize
	                //get clientHeight of this dom node, so as to account for padding

	                //build the actual region of the menu
	                var actualRegion = Region({
	                    left  : domRegion.left,
	                    right : domRegion.right,

	                    top   : domRegion.top,
	                    bottom: domRegion.top + actualHeight
	                })

	                var constrainRegion = props.constrainTo?
	                                        getConstrainRegion(props.constrainTo):
	                                        null

	                var newState

	                if (props.alignTo){
	                    var parentRegion = Region.from(domNode.parentNode)
	                    var alignRegion = Region.from(props.alignTo)

	                    actualRegion.alignTo(alignRegion, props.alignPositions, {
	                        offset: props.alignOffset,
	                        constrain: constrainRegion
	                    })

	                    var newTop = actualRegion.top - parentRegion.top
	                    var newLeft = actualRegion.left - parentRegion.left

	                    newState = {
	                        style: {
	                            left: newLeft,
	                            top : newTop
	                        }
	                    }
	                }

	                if (constrainRegion){
	                    newState = newState || {}

	                    if (actualRegion.bottom > constrainRegion.bottom){
	                        newState.maxHeight = constrainRegion.bottom - actualRegion.top - paddingSize
	                    }
	                }

	                newState && this.setState(newState)
	            }.bind(this), 0)
	        }
	    },

	    prepareProps: function(thisProps, state) {
	        var props = {}

	        assign(props, this.props)

	        props.style     = this.prepareStyle(props, state)
	        props.className = this.prepareClassName(props)

	        props.itemStyleProps = getItemStyleProps(props, state)
	        props.children  = this.prepareChildren(props, state)

	        props.scrollerProps = this.prepareScrollerProps(props)

	        return props
	    },

	    prepareScrollerProps: function(props) {
	        return assign({}, props.scrollerProps)
	    },

	    prepareChildren: function(props, state){

	        var children = props.children

	        if (props.items && props.items.length){
	            children = props.items.map(this.prepareItem.bind(this, props, state))
	        }

	        return children
	    },

	    prepareItem: prepareItem,

	    prepareClassName: function(props) {
	        var className = props.className || ''

	        className += ' z-menu'

	        return className
	    },

	    prepareStyle: function(props, state) {
	        var subMenuStyle = props.subMenu?
	                            props.defaultSubMenuStyle:
	                            null

	        var style = assign({}, props.defaultStyle, subMenuStyle, props.style, props.subMenuStyle)

	        if (!props.visible || (props.items && !props.items.length)){
	            style.display = 'none'
	        }

	        if (props.absolute){
	            style.position = 'absolute'
	        }

	        if (props.at){
	            var isArray = Array.isArray(props.at)
	            var coords = {
	                left: isArray?
	                        props.at[0]:
	                        props.at.left === undefined?
	                            props.at.x || props.at.pageX:
	                            props.at.left,

	                top: isArray?
	                        props.at[1]:
	                        props.at.top === undefined?
	                            props.at.y || props.at.pageY:
	                            props.at.top
	            }

	            assign(style, coords)
	        }

	        if (state.style){
	            assign(style, state.style)
	        }

	        if (!this.didMount && (props.constrainTo || props.alignTo) && !props.subMenu){
	            //when a top menu is initially rendered (and should be constrained or has alignTo)
	            //we show it hidden initially, so we can safely constrain and/or align it
	            style.visibility = 'hidden'
	            style.maxHeight  = 0
	            style.overflow   = 'hidden'
	        }

	        return normalize(style)
	    },

	    /////////////// RENDERING LOGIC

	    renderSubMenu: renderSubMenu,

	    render: function() {
	        var state = this.state
	        var props = this.prepareProps(this.props, state)

	        var menu     = this.renderSubMenu(props, state)
	        var children = this.renderChildren(props, state)

	        return (
	            React.createElement("div", React.__spread({},  props), 
	                menu, 
	                React.createElement(ScrollContainer, {
	                    onMouseEnter: this.handleMouseEnter, 
	                    onMouseLeave: this.handleMouseLeave, 
	                    scrollerProps: props.scrollerProps, 
	                    ref: "scrollContainer", enableScroll: props.enableScroll, maxHeight: state.maxHeight || props.maxHeight}, 
	                    React.createElement("table", {ref: "table", style: {borderSpacing: 0}}, 
	                        React.createElement("tbody", null, 
	                            children
	                        )
	                    )
	                )
	            )
	        )
	    },

	    renderChildren: renderChildren,

	    ////////////////////////// BEHAVIOUR LOGIC

	    handleMouseEnter: function() {
	        this.setState({
	            mouseInside: true
	        })

	        this.onActivate()
	    },

	    handleMouseLeave: function() {
	        this.setState({
	            mouseInside: false
	        })

	        if (!this.state.menu && !this.state.nextItem){
	        // if (!this.state.nextItem){
	            this.onInactivate()
	        }
	    },

	    onActivate: function() {
	        if (!this.state.activated){
	            // console.log('activate')
	            this.setState({
	                activated: true
	            })

	            ;(this.props.onActivate || emptyFn)()
	        }
	    },

	    onInactivate: function() {
	        if (this.state.activated){

	            this.setState({
	                activated: false
	            })

	            // console.log('inactivate')
	            ;(this.props.onInactivate || emptyFn)()
	        }
	    },

	    //we also need mouseOverSubMenu: Boolean
	    //since when from a submenu we move back to a parent menu, we may move
	    //to a different menu item than the one that triggered the submenu
	    //so we should display another submenu
	    handleSubMenuMouseEnter: function() {
	        this.setState({
	            mouseOverSubMenu: true
	        })
	    },

	    handleSubMenuMouseLeave: function() {
	        this.setState({
	            mouseOverSubMenu: false
	        })
	    },

	    isSubMenuActive: function() {
	        return this.state.subMenuActive
	    },

	    onSubMenuActivate: function() {
	        this.setState({
	            subMenuActive: true
	        })
	    },

	    onSubMenuInactivate: function() {
	        var ts = +new Date()

	        var nextItem      = this.state.nextItem
	        var nextTimestamp = this.state.nextTimestamp || 0

	        this.setState({
	            subMenuActive: false,
	            timestamp       : ts
	        }, function(){

	            setTimeout(function(){
	                if (ts != this.state.timestamp || (nextItem && (ts - nextTimestamp < 100))){
	                    //a menu show has occured in the mean-time,
	                    //so skip hiding the menu
	                    this.setItem(this.state.nextItem, this.state.nextOffset)
	                    return
	                }

	                if (!this.isSubMenuActive()){
	                    this.setItem()
	                }
	            }.bind(this), 10)

	        })

	    },

	    removeMouseMoveListener: function() {
	        if (this.onWindowMouseMove){
	            window.removeEventListener('mousemove', this.onWindowMouseMove)
	            this.onWindowMouseMove = null
	        }
	    },

	    onMenuItemMouseOut: function(itemProps, leaveOffset) {
	        if (this.state.menu){
	            this.setupCheck(leaveOffset)
	        }
	    },

	    /**
	     * Called when mouseout happens on the item for which there is a submenu displayed
	     */
	    onMenuItemMouseOver: function(itemProps, menuOffset, entryPoint) {

	        if (!this.didMount){
	            return
	        }

	        var menu = itemProps.menu
	        var ts   = +new Date()

	        if (!menu){
	            return
	        }

	        if (!this.state.menu){
	            //there is no menu visible, so it's safe to show the menu
	            this.setItem(itemProps, menuOffset)
	        } else {
	            //there is a menu visible, from the previous item that had mouse over
	            //so we should queue this item's menu as the next menu to be shown
	            this.setNextItem(itemProps, menuOffset)
	        }
	    },

	    setupCheck: function(offset){
	        if (!this.didMount){
	            return
	        }

	        var tolerance = 5

	        var domNode    = this.getDOMNode()
	        var menuNode   = domNode.querySelector('.z-menu')

	        if (!menuNode){
	            return
	        }

	        var menuRegion = Region.from(menuNode)

	        var x1 = menuRegion.left
	        var y1 = menuRegion.top// - tolerance

	        var x2 = menuRegion.left
	        var y2 = menuRegion.bottom// + tolerance

	        if (this.subMenuPosition == 'left'){
	            x1 = menuRegion.right
	            x2 = menuRegion.right
	        }

	        var x3 = offset.x + (this.subMenuPosition == 'left'? tolerance: -tolerance)
	        var y3 = offset.y

	        var triangle = [
	            [x1, y1],
	            [x2, y2],
	            [x3, y3]
	        ]

	        this.removeMouseMoveListener()

	        this.onWindowMouseMove = function(event){

	            var point = [event.pageX, event.pageY]

	            if (!inTriangle(point, triangle)){

	                this.removeMouseMoveListener()

	                if (!this.state.mouseOverSubMenu){
	                    //the mouse is not over a sub menu item
	                    //
	                    //so we show a menu of a sibling item, or hide the menu
	                    //if no sibling item visited
	                    this.setItem(this.state.nextItem, this.state.nextOffset)
	                }
	            }
	        }.bind(this)

	        window.addEventListener('mousemove', this.onWindowMouseMove)
	    },

	    setNextItem: function(itemProps, menuOffset) {

	        var ts = +new Date()

	        this.setState({
	            timestamp        : ts,

	            nextItem     : itemProps,
	            nextOffset   : menuOffset,
	            nextTimestamp: +new Date()
	        })
	    },

	    setItem: function(itemProps, offset) {

	        var menu = itemProps?
	                        itemProps.menu:
	                        null

	        // if (!menu){
	        //     return
	        // }

	        this.removeMouseMoveListener()

	        if (!this.didMount){
	            return
	        }

	        if (!menu && !this.state.mouseInside){
	            this.onInactivate()
	        }

	        this.setState({
	            itemProps    : itemProps,

	            menu         : menu,
	            menuOffset   : offset,
	            timestamp    : +new Date(),

	            nextItem     : null,
	            nextOffset   : null,
	            nextTimestamp: null
	        })
	    },

	    onMenuItemExpanderClick: function(event) {
	        event.nativeEvent.expanderClick = true
	    },

	    onMenuItemClick: function(event, props, index) {

	        var stopped = event.isPropagationStopped()

	        this.props.stopClickPropagation && event.stopPropagation()

	        if (hasTouch && props && event && event.nativeEvent && event.nativeEvent.expanderClick){

	            var offset = {
	                x: event.pageX,
	                y: event.pageY
	            }

	            var menuOffset = getMenuOffset(event.currentTarget)
	            this.onMenuItemMouseOver(props, menuOffset, offset)

	            return
	        }

	        if (!stopped){
	            if (props){
	                ;(this.props.onClick || emptyFn)(event, props, index)
	            }

	            this.onChildClick(event, props)
	        }
	    },

	    onChildClick: function(event, props) {
	        ;(this.props.onChildClick || emptyFn)(event, props)

	        if (this.props.parentMenu){
	            this.props.parentMenu.onChildClick(event, props)
	        }
	    }
	})

	MenuClass.themes = __webpack_require__(205)

	module.exports = MenuClass

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React  = __webpack_require__(1)
	var assign =__webpack_require__(38)

	var MenuItemCell = React.createClass({

	    displayName: 'ReactMenuItemCell',

	    getDefaultProps: function() {
	        return {
	            defaultStyle: {
	                padding: 5,
	                whiteSpace: 'nowrap'
	            }
	        }
	    },

	    render: function() {
	        var props    = this.prepareProps(this.props)
	        var children = props.children

	        if (props.expander){
	            children = props.expander === true? '›': props.expander
	        }

	        return (
	            React.createElement("td", React.__spread({},  props), 
	                children
	            )
	        )
	    },

	    prepareProps: function(thisProps) {
	        var props = {}

	        assign(props, thisProps)

	        props.style = this.prepareStyle(props)

	        return props
	    },

	    prepareStyle: function(props) {
	        var style = {}

	        assign(style, props.defaultStyle, props.style)

	        // if (props.itemIndex != props.itemCount - 1){
	        //     style.paddingBottom = 0
	        // }

	        return style
	    }
	})

	module.exports = MenuItemCell

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React  = __webpack_require__(1)
	var assign = __webpack_require__(38)

	var emptyFn = function(){}

	var MenuSeparator = React.createClass({

	    displayName: 'ReactMenuSeparator',

	    getDefaultProps: function() {
	        return {
	            size: 1
	        }
	    },

	    render: function() {
	        var props = this.prepareProps(this.props)

	        return React.createElement("tr", React.__spread({},  props), React.createElement("td", {colSpan: 10, style: {padding: 0}}))
	    },

	    prepareProps: function(thisProps) {
	        var props = {}

	        assign(props, thisProps)

	        props.style = this.prepareStyle(props)
	        props.className = this.prepareClassName(props)

	        return props
	    },

	    prepareClassName: function(props) {
	        var className = props.className || ''

	        className += ' menu-separator'

	        return className
	    },

	    prepareStyle: function(props) {
	        var style = {}

	        assign(style,
	            MenuSeparator.defaultStyle,
	            MenuSeparator.style,
	            {
	                height: MenuSeparator.size || props.size
	            },
	            props.style
	        )

	        return style
	    }
	})

	MenuSeparator.defaultStyle = {
	    cursor    : 'auto',
	    background: 'gray'
	}

	MenuSeparator.style = {}

	module.exports = MenuSeparator

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var el;

	if(!!global.document){
	  el = global.document.createElement('div');
	}

	var prefixes = ["ms", "Moz", "Webkit", "O"];
	var properties = [
	  'userSelect',
	  'transform',
	  'transition',
	  'transformOrigin',
	  'transformStyle',
	  'transitionProperty',
	  'transitionDuration',
	  'transitionTimingFunction',
	  'transitionDelay',
	  'borderImage',
	  'borderImageSlice',
	  'boxShadow',
	  'backgroundClip',
	  'backfaceVisibility',
	  'perspective',
	  'perspectiveOrigin',
	  'animation',
	  'animationDuration',
	  'animationName',
	  'animationDelay',
	  'animationDirection',
	  'animationIterationCount',
	  'animationTimingFunction',
	  'animationPlayState',
	  'animationFillMode',
	  'appearance'
	];

	function GetVendorPrefix(property) {
	  if(properties.indexOf(property) == -1 || !global.document || typeof el.style[property] !== 'undefined'){
	    return property;
	  }

	  property = property[0].toUpperCase() + property.slice(1);
	  var temp;

	  for(var i = 0; i < prefixes.length; i++){
	    temp = prefixes[i] + property;
	    if(typeof el.style[temp] !== 'undefined'){
	      prefixes = [prefixes[i]]; // we only need to check this one prefix from now on.
	      return temp;
	    }
	  }
	  return property[0].toLowerCase() + property.slice(1);
	}


	module.exports = (function(){
	  var cache = {};
	  return function(obj){
	    if(!global.document){
	      return obj;
	    }

	    var result = {};

	    for(var key in obj){
	      if(cache[key] === undefined){
	        cache[key] = GetVendorPrefix(key);
	      }
	      result[cache[key]] = obj[key];
	    }

	    return result;
	  };
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React         = __webpack_require__(1)
	var assign        = __webpack_require__(38)
	var normalize     = __webpack_require__(51)
	var EVENT_NAMES   = __webpack_require__(158)

	var getMenuOffset = __webpack_require__(197)

	var prepareChildren = __webpack_require__(206)

	var Menu = __webpack_require__(184)
	var MenuItemCell = __webpack_require__(185)

	var emptyFn = function(){}

	function toUpperFirst(s){
	    return s?
	            s.charAt(0).toUpperCase() + s.substring(1):
	            ''
	}

	var MenuItem = React.createClass({

	    displayName: 'ReactMenuItem',

	    getInitialState: function() {
	        return {}
	    },

	    getDefaultProps: function() {
	        return {
	            isMenuItem: true,
	            interactionStyles: true,

	            defaultStyle: {
	                cursor    : 'pointer',
	                userSelect: 'none',
	                boxSizing : 'border-box'
	            },

	            expander: '›'
	        }
	    },

	    render: function() {
	        var props = this.prepareProps(this.props, this.state)

	        return React.createElement("tr", React.__spread({},  props))
	    },

	    componentDidMount: function() {
	        this.didMount = true
	    },

	    prepareProps: function(thisProps, state) {
	        var props = {}

	        assign(props, thisProps)

	        props.theme = this.prepareTheme(props)

	        props.mouseOver = !!state.mouseOver
	        props.active    = !!state.active
	        props.disabled    = !!props.disabled

	        props.style     = this.prepareStyle(props)
	        props.className = this.prepareClassName(props)

	        props.children  = this.prepareChildren(props)

	        props.onClick      = this.handleClick.bind(this, props)
	        props.onMouseEnter = this.handleMouseEnter.bind(this, props)
	        props.onMouseLeave = this.handleMouseLeave.bind(this, props)
	        props.onMouseDown  = this.handleMouseDown
	        props.onMouseMove  = this.handleMouseMove

	        return props
	    },

	    prepareTheme: function(props){
	        var THEMES = props.themes = props.themes || this.constructor.theme || THEME
	        var theme  = props.theme

	        if (typeof theme == 'string'){
	            theme = THEMES[theme]
	        }

	        return theme || THEMES.default
	    },

	    handleClick: function(props, event) {

	        if (props.disabled){
	            event.stopPropagation()
	            return
	        }

	        ;(this.props.onClick || this.props.fn || emptyFn)(event, props, props.index)
	    },

	    handleMouseMove: function(event){

	    },

	    handleMouseDown: function(event) {

	        var mouseUpListener = function(){
	            this.setState({
	                active: false
	            })
	            window.removeEventListener('mouseup', mouseUpListener)
	        }.bind(this)

	        window.addEventListener('mouseup', mouseUpListener)

	        this.setState({
	            active: true
	        })
	    },

	    showMenu: function(menu, props) {

	        props.showMenu(menu, offset)
	    },

	    handleMouseEnter: function(props, event) {

	        if (props.disabled){
	            return
	        }

	        var offset = {
	            x: event.pageX,
	            y: event.pageY
	        }

	        this.setState({
	            mouseOver: true
	        })

	        if (props.onMenuItemMouseOver){

	            var menuOffset

	            if (props.menu){
	                // console.log(props);
	                menuOffset = getMenuOffset(this.getDOMNode())
	            }

	            // console.log(menuOffset, offset);
	            props.onMenuItemMouseOver(props, menuOffset, offset)
	        }
	    },

	    handleMouseLeave: function(props, event) {

	        if (props.disabled){
	            return
	        }

	        var offset = {
	            x: event.pageX,
	            y: event.pageY
	        }

	        if (this.didMount){
	            this.setState({
	                active: false,
	                mouseOver: false
	            })
	        }

	        if (props.onMenuItemMouseOut){
	            props.onMenuItemMouseOut(props, offset)
	        }
	    },

	    prepareChildren: prepareChildren,

	    prepareClassName: function(props) {
	        var className = props.className || ''

	        className += ' menu-row'

	        if (props.disabled){
	            className += ' disabled ' + (props.disabledClassName || '')
	        } else {

	            if (props.mouseOver){
	                className += ' over ' + (props.overClassName || '')
	            }

	            if (props.active){
	                className += ' active ' + (props.activeClassName || '')
	            }

	            if (props.expanded){
	                className += ' expanded ' + (props.expandedClassName || '')
	            }
	        }

	        return className
	    },

	    prepareDefaultStyle: function(props){
	        var defaultStyle = assign({}, props.defaultStyle)

	        if (props.disabled){
	            assign(defaultStyle, props.defaultDisabledStyle)
	        }

	        return defaultStyle
	    },

	    prepareComputedStyleNames: function(props){
	        var names = ['style']

	        if (props.disabled){
	            names.push('disabledStyle')

	            return names
	        }

	        if (props.expanded){
	            names.push('expandedStyle')
	        }

	        //names is something like ['style','expandedStyle']
	        //
	        //now we add over and active styles

	        var overNames
	        if (props.mouseOver){
	            overNames = names.map(function(name){
	                return 'over' + toUpperFirst(name)
	            })
	        }

	        var activeNames
	        if (props.active){
	            activeNames = names.map(function(name){
	                return 'active' + toUpperFirst(name)
	            })
	        }

	        overNames   && names.push.apply(names, overNames)
	        activeNames && names.push.apply(names, activeNames)

	        return names
	    },

	    prepareStyle: function(props) {
	        var style = assign({}, this.prepareDefaultStyle(props))

	        var styleNames = this.prepareComputedStyleNames(props)
	        var theme      = props.theme
	        var THEMES     = props.themes


	        if (theme){
	            //apply default theme first
	            if (props.applyDefaultTheme && theme != THEMES.default && THEMES.default){
	                styleNames.forEach(function(styleName){
	                    assign(style, THEMES.default[styleName])
	                })
	            }

	            //then apply theme
	            styleNames.forEach(function(styleName){
	                assign(style, theme[styleName])
	            })
	        }

	        ;(props.onThemeStyleReady || emptyFn)(style, props)

	        //now apply non-theme
	        styleNames.forEach(function(styleName){
	            assign(style, props[styleName])
	        })

	        ;(props.onStyleReady || emptyFn)(style, props)

	        return normalize(style)


	        // assign(style, props.defaultStyle, props.style)

	        // if (props.disabled){

	        //     assign(style, props.defaultDisabledStyle, props.disabledStyle)

	        // } else {

	        //     if (props.interactionStyles){
	        //         if (props.expanded){
	        //             assign(style, props.defaultExpandedStyle, props.expandedStyle)
	        //         }

	        //         if (props.mouseOver){
	        //             assign(style, props.defaultOverStyle, props.overStyle)
	        //         }

	        //         if (props.active){
	        //             assign(style, props.defaultActiveStyle, props.activeStyle)
	        //         }
	        //     }
	        // }

	        // return normalize(style)
	    }
	})

	module.exports = MenuItem

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region = __webpack_require__(122)

	__webpack_require__(207)
	__webpack_require__(208)

	var COMPUTE_ALIGN_REGION = __webpack_require__(209)

	/**
	 * region-align module exposes methods for aligning {@link Element} and {@link Region} instances
	 *
	 * The #alignTo method aligns this to the target element/region using the specified positions. See #alignTo for a graphical example.
	 *
	 *
	 *      var div = Element.select('div.first')
	 *
	 *      div.alignTo(Element.select('body') , 'br-br')
	 *
	 *      //aligns the div to be in the bottom-right corner of the body
	 *
	 * Other useful methods
	 *
	 *  * {@link #alignRegions} - aligns a given source region to a target region
	 *  * {@link #COMPUTE_ALIGN_REGION} - given a source region and a target region, and alignment positions, returns a clone of the source region, but aligned to satisfy the given alignments
	 */


	/**
	 * Aligns sourceRegion to targetRegion. It modifies the sourceRegion in order to perform the correct alignment.
	 * See #COMPUTE_ALIGN_REGION for details and examples.
	 *
	 * This method calls #COMPUTE_ALIGN_REGION passing to it all its arguments. The #COMPUTE_ALIGN_REGION method returns a region that is properly aligned.
	 * If this returned region position/size differs from sourceRegion, then the sourceRegion is modified to be an exact copy of the aligned region.
	 *
	 * @inheritdoc #COMPUTE_ALIGN_REGION
	 * @return {String} the position used for alignment
	 */
	Region.alignRegions = function(sourceRegion, targetRegion, positions, config){

	    var result        = COMPUTE_ALIGN_REGION(sourceRegion, targetRegion, positions, config)
	    var alignedRegion = result.region

	    if ( !alignedRegion.equals(sourceRegion) ) {
	        sourceRegion.setRegion(alignedRegion)
	    }

	    return result.position

	}

	    /**
	     *
	     * The #alignTo method aligns this to the given target region, using the specified alignment position(s).
	     * You can also specify a constrain for the alignment.
	     *
	     * Example
	     *
	     *      BIG
	     *      ________________________
	     *      |  _______              |
	     *      | |       |             |
	     *      | |   A   |             |
	     *      | |       |      _____  |
	     *      | |_______|     |     | |
	     *      |               |  B  | |
	     *      |               |     | |
	     *      |_______________|_____|_|
	     *
	     * Assume the *BIG* outside rectangle is our constrain region, and you want to align the *A* rectangle
	     * to the *B* rectangle. Ideally, you'll want their tops to be aligned, and *A* to be placed at the right side of *B*
	     *
	     *
	     *      //so we would align them using
	     *
	     *      A.alignTo(B, 'tl-tr', { constrain: BIG })
	     *
	     * But this would result in
	     *
	     *       BIG
	     *      ________________________
	     *      |                       |
	     *      |                       |
	     *      |                       |
	     *      |                _____ _|_____
	     *      |               |     | .     |
	     *      |               |  B  | . A   |
	     *      |               |     | .     |
	     *      |_______________|_____|_._____|
	     *
	     *
	     * Which is not what we want. So we specify an array of options to try
	     *
	     *      A.alignTo(B, ['tl-tr', 'tr-tl'], { constrain: BIG })
	     *
	     * So by this we mean: try to align A(top,left) with B(top,right) and stick to the BIG constrain. If this is not possible,
	     * try the next option: align A(top,right) with B(top,left)
	     *
	     * So this is what we end up with
	     *
	     *      BIG
	     *      ________________________
	     *      |                       |
	     *      |                       |
	     *      |                       |
	     *      |        _______ _____  |
	     *      |       |       |     | |
	     *      |       |   A   |  B  | |
	     *      |       |       |     | |
	     *      |_______|_______|_____|_|
	     *
	     *
	     * Which is a lot better!
	     *
	     * @param {Element/Region} target The target to which to align this alignable.
	     *
	     * @param {String[]/String} positions The positions for the alignment.
	     *
	     * Example:
	     *
	     *      'br-tl'
	     *      ['br-tl','br-tr','cx-tc']
	     *
	     * This method will try to align using the first position. But if there is a constrain region, that position might not satisfy the constrain.
	     * If this is the case, the next positions will be tried. If one of them satifies the constrain, it will be used for aligning and it will be returned from this method.
	     *
	     * If no position matches the contrain, the one with the largest intersection of the source region with the constrain will be used, and this alignable will be resized to fit the constrain region.
	     *
	     * @param {Object} config A config object with other configuration for this method
	     *
	     * @param {Array[]/Object[]/Object} config.offset The offset to use for aligning. If more that one offset is specified, then offset at a given index is used with the position at the same index.
	     *
	     * An offset can have the following form:
	     *
	     *      [left_offset, top_offset]
	     *      {left: left_offset, top: top_offset}
	     *      {x: left_offset, y: top_offset}
	     *
	     * You can pass one offset or an array of offsets. In case you pass just one offset,
	     * it cannot have the array form, so you cannot call
	     *
	     *      this.alignTo(target, positions, [10, 20])
	     *
	     * If you do, it will not be considered. Instead, please use
	     *
	     *      this.alignTo(target, positions, {x: 10, y: 20})
	     *
	     * Or
	     *
	     *      this.alignTo(target, positions, [[10, 20]] )
	     *
	     * @param {Boolean/Element/Region} config.constrain If boolean, target will be constrained to the document region, otherwise,
	     * getRegion will be called on this argument to determine the region we need to constrain to.
	     *
	     * @param {Boolean/Object} config.sync Either boolean or an object with {width, height}. If it is boolean,
	     * both width and height will be synced. If directions are specified, will only sync the direction which is specified as true
	     *
	     * @return {String}
	     *
	     */
	Region.prototype.alignTo = function(target, positions, config){

	    config = config || {}

	    var sourceRegion = this
	    var targetRegion = Region.from(target)

	    var result = COMPUTE_ALIGN_REGION(sourceRegion, targetRegion, positions, config)
	    var resultRegion = result.region

	    if (!resultRegion.equalsSize(sourceRegion)){
	        this.setSize(resultRegion.getSize())
	    }
	    if (!resultRegion.equalsPosition(sourceRegion)){
	        this.setPosition(resultRegion.getPosition(), { absolute: !!config.absolute })
	    }

	    return result.position
	}

	module.exports = Region

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];

	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var base64 = __webpack_require__(237)
	var ieee754 = __webpack_require__(230)
	var isArray = __webpack_require__(231)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var kMaxLength = 0x3fffffff
	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  try {
	    var buf = new ArrayBuffer(0)
	    var arr = new Uint8Array(buf)
	    arr.foo = function () { return 42 }
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (subject, encoding) {
	  var self = this
	  if (!(self instanceof Buffer)) return new Buffer(subject, encoding)

	  var type = typeof subject
	  var length

	  if (type === 'number') {
	    length = +subject
	  } else if (type === 'string') {
	    length = Buffer.byteLength(subject, encoding)
	  } else if (type === 'object' && subject !== null) {
	    // assume object is array-like
	    if (subject.type === 'Buffer' && isArray(subject.data)) subject = subject.data
	    length = +subject.length
	  } else {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (length > kMaxLength) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' +
	      kMaxLength.toString(16) + ' bytes')
	  }

	  if (length < 0) length = 0
	  else length >>>= 0 // coerce to uint32

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Preferred: Return an augmented `Uint8Array` instance for best performance
	    self = Buffer._augment(new Uint8Array(length)) // eslint-disable-line consistent-this
	  } else {
	    // Fallback: Return THIS instance of Buffer (created by `new`)
	    self.length = length
	    self._isBuffer = true
	  }

	  var i
	  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
	    // Speed optimization -- use set if we're copying from a typed array
	    self._set(subject)
	  } else if (isArrayish(subject)) {
	    // Treat array-ish objects as a byte array
	    if (Buffer.isBuffer(subject)) {
	      for (i = 0; i < length; i++) {
	        self[i] = subject.readUInt8(i)
	      }
	    } else {
	      for (i = 0; i < length; i++) {
	        self[i] = ((subject[i] % 256) + 256) % 256
	      }
	    }
	  } else if (type === 'string') {
	    self.write(subject, 0, encoding)
	  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (i = 0; i < length; i++) {
	      self[i] = 0
	    }
	  }

	  if (length > 0 && length <= Buffer.poolSize) self.parent = rootParent

	  return self
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length
	  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, totalLength) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  } else if (list.length === 1) {
	    return list[0]
	  }

	  var i
	  if (totalLength === undefined) {
	    totalLength = 0
	    for (i = 0; i < list.length; i++) {
	      totalLength += list[i].length
	    }
	  }

	  var buf = new Buffer(totalLength)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	Buffer.byteLength = function byteLength (str, encoding) {
	  var ret
	  str = str + ''
	  switch (encoding || 'utf8') {
	    case 'ascii':
	    case 'binary':
	    case 'raw':
	      ret = str.length
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = str.length * 2
	      break
	    case 'hex':
	      ret = str.length >>> 1
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8ToBytes(str).length
	      break
	    case 'base64':
	      ret = base64ToBytes(str).length
	      break
	    default:
	      ret = str.length
	  }
	  return ret
	}

	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined

	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function toString (encoding, start, end) {
	  var loweredCase = false

	  start = start >>> 0
	  end = end === undefined || end === Infinity ? this.length : end >>> 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` will be removed in Node 0.13+
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` will be removed in Node 0.13+
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	  return charsWritten
	}

	function asciiWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function utf16leWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	  return charsWritten
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length
	      length = undefined
	    }
	  } else {  // legacy
	    var swap = encoding
	    encoding = offset
	    offset = length
	    length = swap
	  }

	  offset = Number(offset) || 0

	  if (length < 0 || offset < 0 || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  var remaining = this.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase()

	  var ret
	  switch (encoding) {
	    case 'hex':
	      ret = hexWrite(this, string, offset, length)
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8Write(this, string, offset, length)
	      break
	    case 'ascii':
	      ret = asciiWrite(this, string, offset, length)
	      break
	    case 'binary':
	      ret = binaryWrite(this, string, offset, length)
	      break
	    case 'base64':
	      ret = base64Write(this, string, offset, length)
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = utf16leWrite(this, string, offset, length)
	      break
	    default:
	      throw new TypeError('Unknown encoding: ' + encoding)
	  }
	  return ret
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  var res = ''
	  var tmp = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    if (buf[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
	      tmp = ''
	    } else {
	      tmp += '%' + buf[i].toString(16)
	    }
	  }

	  return res + decodeUtf8Char(tmp)
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) >>> 0 & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) >>> 0 & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkInt(
	      this, value, offset, byteLength,
	      Math.pow(2, 8 * byteLength - 1) - 1,
	      -Math.pow(2, 8 * byteLength - 1)
	    )
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkInt(
	      this, value, offset, byteLength,
	      Math.pow(2, 8 * byteLength - 1) - 1,
	      -Math.pow(2, 8 * byteLength - 1)
	    )
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, target_start, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (target_start >= target.length) target_start = target.length
	  if (!target_start) target_start = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (target_start < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - target_start < end - start) {
	    end = target.length - target_start + start
	  }

	  var len = end - start

	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < len; i++) {
	      target[i + target_start] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), target_start)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated, will be removed in node 0.13+
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function isArrayish (subject) {
	  return isArray(subject) || Buffer.isBuffer(subject) ||
	      subject && typeof subject === 'object' &&
	      typeof subject.length === 'number'
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	  var i = 0

	  for (; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (leadSurrogate) {
	        // 2 leads in a row
	        if (codePoint < 0xDC00) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          leadSurrogate = codePoint
	          continue
	        } else {
	          // valid surrogate pair
	          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
	          leadSurrogate = null
	        }
	      } else {
	        // no lead yet

	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else {
	          // valid lead
	          leadSurrogate = codePoint
	          continue
	        }
	      }
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	      leadSurrogate = null
	    }

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x200000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function decodeUtf8Char (str) {
	  try {
	    return decodeURIComponent(str)
	  } catch (err) {
	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(191).Buffer))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var getInstantiatorFunction = __webpack_require__(210)

	module.exports = function(fn, args){
		return getInstantiatorFunction(args.length)(fn, args)
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	    var setImmediate = function(fn){
	        setTimeout(fn, 0)
	    }
	    var clearImmediate = clearTimeout
	    /**
	     * Utility methods for working with functions.
	     * These methods augment the Function prototype.
	     *
	     * Using {@link #before}
	     *
	     *      function log(m){
	     *          console.log(m)
	     *      }
	     *
	     *      var doLog = function (m){
	     *          console.log('LOG ')
	     *      }.before(log)
	     *
	     *      doLog('test')
	     *      //will log
	     *      //"LOG "
	     *      //and then
	     *      //"test"
	     *
	     *
	     *
	     * Using {@link #bindArgs}:
	     *
	     *      //returns the sum of all arguments
	     *      function add(){
	     *          var sum = 0
	     *          [].from(arguments).forEach(function(n){
	     *              sum += n
	     *          })
	     *
	     *          return sum
	     *      }
	     *
	     *      var add1 = add.bindArgs(1)
	     *
	     *      add1(2, 3) == 6
	     *
	     * Using {@link #lockArgs}:
	     *
	     *      function add(){
	     *          var sum = 0
	     *          [].from(arguments).forEach(function(n){
	     *              sum += n
	     *          })
	     *
	     *          return sum
	     *      }
	     *
	     *      var add1_2   = add.lockArgs(1,2)
	     *      var add1_2_3 = add.lockArgs(1,2,3)
	     *
	     *      add1_2(3,4)  == 3 //args are locked to only be 1 and 2
	     *      add1_2_3(6)  == 6 //args are locked to only be 1, 2 and 3
	     *
	     *
	     *
	     * Using {@link #compose}:
	     *
	     *      function multiply(a,b){
	     *          return a* b
	     *      }
	     *
	     *      var multiply2 = multiply.curry()(2)
	     *
	     *      Function.compose(multiply2( add(5,6) )) == multiply2( add(5,6) )
	     *
	     *
	     * @class Function
	     */

	    var SLICE = Array.prototype.slice

	    var curry = __webpack_require__(212),

	        findFn = function(fn, target, onFound){
	            // if (typeof target.find == 'function'){
	            //     return target.find(fn)
	            // }

	            onFound = typeof onFound == 'function'?
	                        onFound:
	                        function(found, key, target){
	                            return found
	                        }

	            if (Array.isArray(target)){
	                var i   = 0
	                var len = target.length
	                var it

	                for(; i < len; i++){
	                    it = target[i]
	                    if (fn(it, i, target)){
	                        return onFound(it, i, target)
	                    }
	                }

	                return
	            }

	            if (typeof target == 'object'){
	                var keys = Object.keys(target)
	                var i = 0
	                var len = keys.length
	                var k
	                var it

	                for( ; i < len; i++){
	                    k  = keys[i]
	                    it = target[k]

	                    if (fn(it, k, target)){
	                        return onFound(it, k, target)
	                    }
	                }
	            }
	        },

	        find = curry(findFn, 2),

	        findIndex = curry(function(fn, target){
	            return findFn(fn, target, function(it, i){
	                return i
	            })
	        }),

	        bindFunctionsOf = function(obj) {
	            Object.keys(obj).forEach(function(k){
	                if (typeof obj[k] == 'function'){
	                    obj[k] = obj[k].bind(obj)
	                }
	            })

	            return obj
	        },

	        /*
	         * @param {Function...} an enumeration of functions, each consuming the result of the following function.
	         *
	         * For example: compose(c, b, a)(1,4) == c(b(a(1,4)))
	         *
	         * @return the result of the first function in the enumeration
	         */
	        compose = __webpack_require__(213),

	        chain = __webpack_require__(214),

	        once = __webpack_require__(215),

	        bindArgsArray = __webpack_require__(216),

	        bindArgs = __webpack_require__(217),

	        lockArgsArray = __webpack_require__(218),

	        lockArgs = __webpack_require__(219),

	        skipArgs = function(fn, count){
	            return function(){
	                var args = SLICE.call(arguments, count || 0)

	                return fn.apply(this, args)
	            }
	        },

	        intercept = function(interceptedFn, interceptingFn, withStopArg){

	            return function(){
	                var args    = [].from(arguments),
	                    stopArg = { stop: false }

	                if (withStopArg){
	                    args.push(stopArg)
	                }

	                var result = interceptingFn.apply(this, args)

	                if (withStopArg){
	                    if (stopArg.stop === true){
	                        return result
	                    }

	                } else {
	                    if (result === false){
	                        return result
	                    }
	                }

	                //the interception was not stopped
	                return interceptedFn.apply(this, arguments)
	            }

	        },

	        delay = function(fn, delay, scope){

	            var delayIsNumber = delay * 1 == delay

	            if (arguments.length == 2 && !delayIsNumber){
	                scope = delay
	                delay = 0
	            } else {
	                if (!delayIsNumber){
	                    delay = 0
	                }
	            }

	            return function(){
	                var self = scope || this,
	                    args = arguments

	                if (delay < 0){
	                    fn.apply(self, args)
	                    return
	                }

	                if (delay || !setImmediate){
	                    setTimeout(function(){
	                        fn.apply(self, args)
	                    }, delay)

	                } else {
	                    setImmediate(function(){
	                        fn.apply(self, args)
	                    })
	                }
	            }
	        },

	        defer = function(fn, scope){
	            return delay(fn, 0, scope)
	        },

	        buffer = function(fn, delay, scope){

	            var timeoutId = -1

	            return function(){

	                var self = scope || this,
	                    args = arguments

	                if (delay < 0){
	                    fn.apply(self, args)
	                    return
	                }

	                var withTimeout = delay || !setImmediate,
	                    clearFn = withTimeout?
	                                clearTimeout:
	                                clearImmediate,
	                    setFn   = withTimeout?
	                                setTimeout:
	                                setImmediate

	                if (timeoutId !== -1){
	                    clearFn(timeoutId)
	                }

	                timeoutId = setFn(function(){
	                    fn.apply(self, args)
	                    self = null
	                }, delay)

	            }

	        },

	        throttle = function(fn, delay, scope) {
	            var timeoutId = -1,
	                self,
	                args

	            return function () {

	                self = scope || this
	                args = arguments

	                if (timeoutId !== -1) {
	                    //the function was called once again in the delay interval
	                } else {
	                    timeoutId = setTimeout(function () {
	                        fn.apply(self, args)

	                        self = null
	                        timeoutId = -1
	                    }, delay)
	                }

	            }

	        },

	        spread = function(fn, delay, scope){

	            var timeoutId       = -1
	            var callCount       = 0
	            var executeCount    = 0
	            var nextArgs        = {}
	            var increaseCounter = true
	            var resultingFnUnbound
	            var resultingFn

	            resultingFn = resultingFnUnbound = function(){

	                var args = arguments,
	                    self = scope || this

	                if (increaseCounter){
	                    nextArgs[callCount++] = {args: args, scope: self}
	                }

	                if (timeoutId !== -1){
	                    //the function was called once again in the delay interval
	                } else {
	                    timeoutId = setTimeout(function(){
	                        fn.apply(self, args)

	                        timeoutId = -1
	                        executeCount++

	                        if (callCount !== executeCount){
	                            resultingFn = bindArgsArray(resultingFnUnbound, nextArgs[executeCount].args).bind(nextArgs[executeCount].scope)
	                            delete nextArgs[executeCount]

	                            increaseCounter = false
	                            resultingFn.apply(self)
	                            increaseCounter = true
	                        } else {
	                            nextArgs = {}
	                        }
	                    }, delay)
	                }

	            }

	            return resultingFn
	        },

	        /*
	         * @param {Array} args the array for which to create a cache key
	         * @param {Number} [cacheParamNumber] the number of args to use for the cache key. Use this to limit the args that area actually used for the cache key
	         */
	        getCacheKey = function(args, cacheParamNumber){
	            if (cacheParamNumber == null){
	                cacheParamNumber = -1
	            }

	            var i        = 0,
	                len      = Math.min(args.length, cacheParamNumber),
	                cacheKey = [],
	                it

	            for ( ; i < len; i++){
	                it = args[i]

	                if (root.check.isPlainObject(it) || Array.isArray(it)){
	                    cacheKey.push(JSON.stringify(it))
	                } else {
	                    cacheKey.push(String(it))
	                }
	            }

	            return cacheKey.join(', ')
	        },

	        /*
	         * @param {Function} fn - the function to cache results for
	         * @param {Number} skipCacheParamNumber - the index of the boolean parameter that makes this function skip the caching and
	         * actually return computed results.
	         * @param {Function|String} cacheBucketMethod - a function or the name of a method on this object which makes caching distributed across multiple buckets.
	         * If given, cached results will be searched into the cache corresponding to this bucket. If no result found, return computed result.
	         *
	         * For example this param is very useful when a function from a prototype is cached,
	         * but we want to return the same cached results only for one object that inherits that proto, not for all objects. Thus, for example for Wes.Element,
	         * we use the 'getId' cacheBucketMethod to indicate cached results for one object only.
	         * @param {Function} [cacheKeyBuilder] A function to be used to compose the cache key
	         *
	         * @return {Function} a new function, which returns results from cache, if they are available, otherwise uses the given fn to compute the results.
	         * This returned function has a 'clearCache' function attached, which clears the caching. If a parameter ( a bucket id) is  provided,
	         * only clears the cache in the specified cache bucket.
	         */
	        cache = function(fn, config){
	            config = config || {}

	            var bucketCache = {},
	                cache       = {},
	                skipCacheParamNumber = config.skipCacheIndex,
	                cacheBucketMethod    = config.cacheBucket,
	                cacheKeyBuilder      = config.cacheKey,
	                cacheArgsLength      = skipCacheParamNumber == null?
	                                            fn.length:
	                                            skipCacheParamNumber,
	                cachingFn

	            cachingFn = function(){
	                var result,
	                    skipCache = skipCacheParamNumber != null?
	                                                arguments[skipCacheParamNumber] === true:
	                                                false,
	                    args = skipCache?
	                                    SLICE.call(arguments, 0, cacheArgsLength):
	                                    SLICE.call(arguments),

	                    cacheBucketId = cacheBucketMethod != null?
	                                        typeof cacheBucketMethod == 'function'?
	                                            cacheBucketMethod():
	                                            typeof this[cacheBucketMethod] == 'function'?
	                                                this[cacheBucketMethod]():
	                                                null
	                                        :
	                                        null,


	                    cacheObject = cacheBucketId?
	                                        bucketCache[cacheBucketId]:
	                                        cache,

	                    cacheKey = (cacheKeyBuilder || getCacheKey)(args, cacheArgsLength)

	                if (cacheBucketId && !cacheObject){
	                    cacheObject = bucketCache[cacheBucketId] = {}
	                }

	                if (skipCache || cacheObject[cacheKey] == null){
	                    cacheObject[cacheKey] = result = fn.apply(this, args)
	                } else {
	                    result = cacheObject[cacheKey]
	                }

	                return result
	            }

	            /*
	             * @param {String|Object|Number} [bucketId] the bucket for which to clear the cache. If none given, clears all the cache for this function.
	             */
	            cachingFn.clearCache = function(bucketId){
	                if (bucketId){
	                    delete bucketCache[String(bucketId)]
	                } else {
	                    cache = {}
	                    bucketCache = {}
	                }
	            }

	            /*
	             *
	             * @param {Array} cacheArgs The array of objects from which to create the cache key
	             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
	             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
	             */
	            cachingFn.getCache = function(cacheArgs, cacheParamNumber, cacheKeyBuilder){
	                return cachingFn.getBucketCache(null, cacheArgs, cacheParamNumber, cacheKeyBuilder)
	            }

	            /*
	             *
	             * @param {String} bucketId The id of the cache bucket from which to retrieve the cached value
	             * @param {Array} cacheArgs The array of objects from which to create the cache key
	             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
	             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
	             */
	            cachingFn.getBucketCache = function(bucketId, cacheArgs, cacheParamNumber, cacheKeyBuilder){
	                var cacheObject = cache,
	                    cacheKey = (cacheKeyBuilder || getCacheKey)(cacheArgs, cacheParamNumber)

	                if (bucketId){
	                    bucketId = String(bucketId);

	                    cacheObject = bucketCache[bucketId] = bucketCache[bucketId] || {}
	                }

	                return cacheObject[cacheKey]
	            }

	            /*
	             *
	             * @param {Object} value The value to set in the cache
	             * @param {Array} cacheArgs The array of objects from which to create the cache key
	             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
	             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
	             */
	            cachingFn.setCache = function(value, cacheArgs, cacheParamNumber, cacheKeyBuilder){
	                return cachingFn.setBucketCache(null, value, cacheArgs, cacheParamNumber, cacheKeyBuilder)
	            }

	            /*
	             *
	             * @param {String} bucketId The id of the cache bucket for which to set the cache value
	             * @param {Object} value The value to set in the cache
	             * @param {Array} cacheArgs The array of objects from which to create the cache key
	             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
	             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
	             */
	            cachingFn.setBucketCache = function(bucketId, value, cacheArgs, cacheParamNumber, cacheKeyBuilder){

	                var cacheObject = cache,
	                    cacheKey = (cacheKeyBuilder || getCacheKey)(cacheArgs, cacheParamNumber)

	                if (bucketId){
	                    bucketId = String(bucketId)

	                    cacheObject = bucketCache[bucketId] = bucketCache[bucketId] || {};
	                }

	                return cacheObject[cacheKey] = value
	            }

	            return cachingFn
	        }

	module.exports = {

	    map: __webpack_require__(220),

	    dot: __webpack_require__(221),

	    maxArgs: __webpack_require__(222),

	    /**
	     * @method compose
	     *
	     * Example:
	     *
	     *      zippy.Function.compose(c, b, a)
	     *
	     * See {@link Function#compose}
	     */
	    compose: compose,

	    /**
	     * See {@link Function#self}
	     */
	    self: function(fn){
	        return fn
	    },

	    /**
	     * See {@link Function#buffer}
	     */
	    buffer: buffer,

	    /**
	     * See {@link Function#delay}
	     */
	    delay: delay,

	    /**
	     * See {@link Function#defer}
	     * @param {Function} fn
	     * @param {Object} scope
	     */
	    defer:defer,

	    /**
	     * See {@link Function#skipArgs}
	     * @param {Function} fn
	     * @param {Number} [count=0] how many args to skip when calling the resulting function
	     * @return {Function} The function that will call the original fn without the first count args.
	     */
	    skipArgs: skipArgs,

	    /**
	     * See {@link Function#intercept}
	     */
	    intercept: function(fn, interceptedFn, withStopArgs){
	        return intercept(interceptedFn, fn, withStopArgs)
	    },

	    /**
	     * See {@link Function#throttle}
	     */
	    throttle: throttle,

	    /**
	     * See {@link Function#spread}
	     */
	    spread: spread,

	    /**
	     * See {@link Function#chain}
	     */
	    chain: function(fn, where, mainFn){
	        return chain(where, mainFn, fn)
	    },

	    /**
	     * See {@link Function#before}
	     */
	    before: function(fn, otherFn){
	        return chain('before', otherFn, fn)
	    },

	    /**
	     * See {@link Function#after}
	     */
	    after: function(fn, otherFn){
	        return chain('after', otherFn, fn)
	    },

	    /**
	     * See {@link Function#curry}
	     */
	    curry: curry,

	    /**
	     * See {@link Function#once}
	     */
	    once: once,

	    /**
	     * See {@link Function#bindArgs}
	     */
	    bindArgs: bindArgs,

	    /**
	     * See {@link Function#bindArgsArray}
	     */
	    bindArgsArray: bindArgsArray,

	    /**
	     * See {@link Function#lockArgs}
	     */
	    lockArgs: lockArgs,

	    /**
	     * See {@link Function#lockArgsArray}
	     */
	    lockArgsArray: lockArgsArray,

	    bindFunctionsOf: bindFunctionsOf,

	    find: find,

	    findIndex: findIndex,

	    newify: __webpack_require__(223)
	}

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(224)

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.6.3
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/*
	//@ sourceMappingURL=performance-now.map
	*/

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region       = __webpack_require__(189)
	var selectParent = __webpack_require__(232)

	module.exports = function(domNode){

	    var menuRegion = Region.from(selectParent('.z-menu', domNode))
	    var thisRegion = Region.from(domNode)

	    return {
	        // pageX : thisRegion.left,
	        // pageY : thisRegion.top,

	        left  : thisRegion.left - menuRegion.left,
	        top   : thisRegion.top  - menuRegion.top,
	        width : thisRegion.width,
	        height: thisRegion.height
	    }
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region = __webpack_require__(189)
	var selectParent = __webpack_require__(232)

	module.exports = function(constrainTo){
	    var constrainRegion

	    if (constrainTo === true){
	        constrainRegion = Region.getDocRegion()
	    }

	    if (!constrainRegion && typeof constrainTo === 'string'){
	        var parent = selectParent(constrainTo, this.getDOMNode())
	        constrainRegion = Region.from(parent)
	    }

	    if (!constrainRegion && typeof constrainTo === 'function'){
	        constrainRegion = Region.from(constrainTo())
	    }

	    return constrainRegion
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(38)

	module.exports = function(props, state){

	    var itemStyle         = assign({}, props.defaultItemStyle, props.itemStyle)
	    var itemOverStyle     = assign({}, props.defaultItemOverStyle, props.itemOverStyle)
	    var itemActiveStyle   = assign({}, props.defaultItemActiveStyle, props.itemActiveStyle)
	    var itemDisabledStyle = assign({}, props.defaultItemDisabledStyle, props.itemDisabledStyle)
	    var itemExpandedStyle = assign({}, props.defaultItemExpandedStyle, props.itemExpandedStyle)
	    var cellStyle     = assign({}, props.defaultCellStyle, props.cellStyle)

	    return {
	        itemStyle        : itemStyle,
	        itemOverStyle    : itemOverStyle,
	        itemActiveStyle  : itemActiveStyle,
	        itemDisabledStyle: itemDisabledStyle,
	        itemExpandedStyle: itemExpandedStyle,
	        cellStyle        : cellStyle
	    }
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region           = __webpack_require__(189)
	var assign           = __webpack_require__(38)
	var cloneWithProps   = __webpack_require__(233)
	var getPositionStyle = __webpack_require__(225)

	module.exports = function(props, state) {
	    var menu = state.menu

	    if (menu && this.didMount){

	        var style = getPositionStyle.call(this, props, state)

	        menu = cloneWithProps(menu, assign({
	            ref          : 'subMenu',
	            subMenu      : true,
	            parentMenu   : this,
	            maxHeight    : state.subMenuMaxHeight,
	            onActivate   : this.onSubMenuActivate,
	            onInactivate : this.onSubMenuInactivate,
	            scrollerProps: props.scrollerProps,
	            constrainTo  : props.constrainTo,
	            expander     : props.expander,
	            theme        : props.theme,
	            themes       : props.themes || this.constructor.themes
	        }, props.itemStyleProps))

	        return React.createElement("div", {ref: "subMenuWrap", style: style, 
	                onMouseEnter: this.handleSubMenuMouseEnter, 
	                onMouseLeave: this.handleSubMenuMouseLeave
	            }, menu)
	    }
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1)
	var MenuItemCell = __webpack_require__(185)

	var cloneWithProps = __webpack_require__(233)
	var assign         = __webpack_require__(38)

	function emptyFn(){}

	module.exports = function(props, state) {

	    var expandedIndex  = state.itemProps?
	                            state.itemProps.index:
	                            -1

	    var children     = props.children
	    var maxCellCount = 1
	    var menuItems    = []

	    React.Children.map(children, function(item){
	        var itemProps = item.props

	        menuItems.push(item)

	        if (!itemProps || !itemProps.isMenuItem){
	            return
	        }

	        var count = React.Children.count(itemProps.children)

	        maxCellCount = Math.max(maxCellCount, count)
	    })

	    var itemStyleProps = props.itemStyleProps
	    var i = -1
	    var result = menuItems.map(function(item, index){
	        var itemProps = item.props

	        if (itemProps && itemProps.isMenuItem){
	            i++

	            itemProps.onMenuItemMouseOver = this.onMenuItemMouseOver
	            itemProps.onMenuItemMouseOut  = this.onMenuItemMouseOut
	        }

	        var children = React.Children.map(itemProps.children, function(c){ return c })
	        var count    = React.Children.count(children)

	        if (count < maxCellCount){
	            children = children? [children]: []
	        }

	        while (count < maxCellCount){
	            count++
	            children.push(React.createElement(MenuItemCell, null))
	        }

	        var onClick = itemProps.onClick || emptyFn

	        var cloned = cloneWithProps(item, assign({
	            interactionStyles: props.interactionStyles,
	            itemIndex: i,
	            itemCount: menuItems.length,
	            key      : index,
	            index    : index,
	            expanded : expandedIndex == index,
	            children : children,
	            expander : props.expander,
	            applyDefaultTheme: props.applyDefaultTheme,
	            theme    : props.theme,
	            themes   : props.themes || this.constructor.themes,
	            onExpanderClick: this.onMenuItemExpanderClick,
	            onClick  : function(event, props, index){
	                onClick.apply(null, arguments)
	                this.onMenuItemClick(event, props, index)
	            }.bind(this)
	        }, {
	            style        : itemStyleProps.itemStyle,
	            overStyle    : itemStyleProps.itemOverStyle,
	            activeStyle  : itemStyleProps.itemActiveStyle,
	            disabledStyle: itemStyleProps.itemDisabledStyle,
	            expandedStyle: itemStyleProps.itemExpandedStyle,
	            cellStyle    : itemStyleProps.cellStyle
	        }))

	        return cloned

	    }, this)

	    return result
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React  = __webpack_require__(1)
	var assign = __webpack_require__(38)

	var renderCells     = __webpack_require__(226)
	var MenuItem        = __webpack_require__(188)
	var MenuItemFactory = React.createFactory(MenuItem)
	var MenuSeparator   = __webpack_require__(186)

	module.exports = function(props, state, item, index) {

	    var expandedIndex = state.itemProps?
	                            state.itemProps.index:
	                            -1

	    if (item === '-'){
	        return React.createElement(MenuSeparator, {key: index})
	    }

	    var className   = [props.itemClassName, item.cls, item.className]
	                        .filter(function(x)  {return !!x;})
	                        .join(' ')

	    var itemProps = assign({
	        className  : className,
	        key        : index,
	        data       : item,
	        columns    : props.columns,
	        expanded   : index === expandedIndex,
	        disabled   : item.disabled,
	        onClick    : item.onClick || item.fn
	    }, props.itemStyleProps)

	    itemProps.children = renderCells(itemProps)

	    if (item.items){
	        var Menu = __webpack_require__(184)
	        itemProps.children.push(React.createElement(Menu, {items: item.items}))
	    }

	    return (props.itemFactory || MenuItemFactory)(itemProps)
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1)

	module.exports = {
	    items      : React.PropTypes.array,
	    columns    : React.PropTypes.array,
	    onMount    : React.PropTypes.func,

	    defaultRowActiveStyle: React.PropTypes.object,
	    defaultRowOverStyle  : React.PropTypes.object,
	    defaultRowStyle      : React.PropTypes.object,

	    rowActiveStyle: React.PropTypes.object,
	    rowOverStyle  : React.PropTypes.object,
	    rowStyle      : React.PropTypes.object,

	    cellStyle  : React.PropTypes.object
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var React    = __webpack_require__(1)
	var assign   = __webpack_require__(38)
	var buffer   = __webpack_require__(157)

	var Scroller = __webpack_require__(227)

	function stop(event){
	    event.preventDefault()
	    event.stopPropagation()
	}

	module.exports = React.createClass({

	    displayName: 'ReactMenuScrollContainer',

	    getInitialState: function(){
	        return {
	            adjustScroll: true,
	            scrollPos: 0
	        }
	    },

	    getDefaultProps: function() {
	        return {
	            scrollStep : 5,
	            scrollSpeed: 50
	        }
	    },

	    componentWillUnmount: function(){
	        if (this.props.enableScroll){
	            window.removeEventListener('resize', this.onResizeListener)
	        }
	    },

	    componentDidMount: function(){
	        if (this.props.enableScroll){
	            setTimeout(function(){
	                if (!this.isMounted()){
	                    return
	                }

	                this.adjustScroll()

	                window.addEventListener('resize', this.onResizeListener = buffer(this.onWindowResize, this.props.onWindowResizeBuffer, this))
	            }.bind(this), 0)
	        }
	    },

	    componentDidUpdate: function(){
	        this.props.enableScroll && this.adjustScroll()
	    },

	    onWindowResize: function(){
	        this.adjustScroll()
	        this.doScroll(0)
	    },

	    render: function(){

	        var props = this.props
	        var children = props.children

	        if (!props.enableScroll){
	            return children
	        }

	        var scrollStyle = {
	            position: 'relative'
	        }

	        if (this.state.scrollPos){
	            scrollStyle.top = -this.state.scrollPos
	        }

	        var containerStyle = {
	            position: 'relative',
	            overflow: 'hidden'
	        }

	        if (props.maxHeight){
	            containerStyle.maxHeight = props.maxHeight
	        }

	        return React.createElement("div", {
	            onMouseEnter: props.onMouseEnter, 
	            onMouseLeave: props.onMouseLeave, 
	            className: "z-menu-scroll-container", 
	            style: containerStyle
	        }, 
	            React.createElement("div", {ref: "tableWrap", style: scrollStyle}, 
	                children
	            ), 
	            this.renderScroller(props, -1), 
	            this.renderScroller(props, 1)
	        )
	    },

	    renderScroller: function(props, direction) {

	        var onMouseDown = direction == -1?
	                            this.handleScrollTop:
	                            this.handleScrollBottom

	        var onDoubleClick = direction == -1?
	                                this.handleScrollTopMax:
	                                this.handleScrollBottomMax

	        var visible = direction == -1?
	                            this.state.hasTopScroll:
	                            this.state.hasBottomScroll

	        var scrollerProps = assign({}, props.scrollerProps, {
	            visible    : visible,
	            side       : direction == -1? 'top': 'bottom',
	            onMouseDown: onMouseDown,
	            onDoubleClick: onDoubleClick
	        })

	        return React.createElement(Scroller, React.__spread({},  scrollerProps))
	    },

	    adjustScroll: function(){
	        if (!this.props.enableScroll){
	            return
	        }

	        if (!this.state.adjustScroll){
	            this.state.adjustScroll = true
	            return
	        }

	        var availableHeight = this.getAvailableHeight()
	        var tableHeight      = this.getCurrentTableHeight()

	        var state = {
	            adjustScroll  : false,
	            hasTopScroll : false,
	            hasBottomScroll: false
	        }

	        if (tableHeight > availableHeight){
	            state.maxScrollPos    = tableHeight - availableHeight
	            state.hasTopScroll    = this.state.scrollPos !== 0
	            state.hasBottomScroll = this.state.scrollPos != state.maxScrollPos
	        } else {
	            state.maxScrollPos = 0
	            state.scrollPos    = 0
	        }

	        this.setState(state)
	    },

	    getAvailableHeight: function() {
	        return this.getAvailableSizeDOM().clientHeight
	    },

	    getAvailableSizeDOM: function() {
	        return this.getDOMNode()
	    },

	    getCurrentTableHeight: function() {
	        return this.getCurrentSizeDOM().clientHeight
	    },

	    getCurrentSizeDOM: function() {
	        return this.refs.tableWrap.getDOMNode()
	    },

	    handleScrollTop: function(event){
	        event.preventDefault()
	        this.handleScroll(-1)
	    },

	    handleScrollBottom: function(event){
	        event.preventDefault()
	        this.handleScroll(1)
	    },

	    handleScrollTopMax: function(event){
	        stop(event)
	        this.handleScrollMax(-1)
	    },

	    handleScrollBottomMax: function(event){
	        stop(event)
	        this.handleScrollMax(1)
	    },

	    handleScrollMax: function(direction){
	        var maxPos = direction == -1?
	                        0:
	                        this.state.maxScrollPos

	        this.setScrollPosition(maxPos)
	    },

	    handleScroll: function(direction /*1 to bottom, -1 to up*/){
	        var mouseUpListener = function(){
	            this.stopScroll()
	            window.removeEventListener('mouseup', mouseUpListener)
	        }.bind(this)

	        window.addEventListener('mouseup', mouseUpListener)

	        this.scrollInterval = setInterval(this.doScroll.bind(this, direction), this.props.scrollSpeed)
	    },

	    doScroll: function(direction){
	        this.setState({
	            scrollDirection: direction
	        })

	        var newScrollPos = this.state.scrollPos + direction * this.props.scrollStep

	        this.setScrollPosition(newScrollPos)
	    },

	    setScrollPosition: function(scrollPos){
	        if (scrollPos > this.state.maxScrollPos){
	            scrollPos = this.state.maxScrollPos
	        }

	        if (scrollPos < 0){
	            scrollPos = 0
	        }

	        this.setState({
	            scrollPos: scrollPos,
	            scrolling : true
	        })
	    },

	    stopScroll: function(){
	        clearInterval(this.scrollInterval)

	        this.setState({
	            scrolling: false
	        })
	    }
	})

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    default: {
	        // overStyle: {
	        //     background: 'rgb(202, 223, 255)'
	        // },
	        overStyle: {
	                    background: 'linear-gradient(to bottom, rgb(125, 191, 242) 0%, rgb(110, 184, 241) 50%, rgb(117, 188, 242) 100%)',
	                    color: 'white'
	                },
	        activeStyle: {
	            // background: 'rgb(118, 181, 231)',
	            //-6 lightness from overStyle
	            background: ' linear-gradient(to bottom, rgb(106,182,240) 0%,rgb(91,175,239) 50%,rgb(96,178,240) 100%)',
	            color: 'white'
	        },
	        expandedStyle: {
	            // background: 'rgb(215, 231, 255)',
	            background: 'linear-gradient(to bottom, rgb(162,210,246) 0%,rgb(151,204,245) 50%,rgb(154,206,246) 100%)',
	            color: 'white'
	        },
	        disabledStyle: {
	            color : 'gray',
	            cursor: 'default'
	        }
	    }
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React        = __webpack_require__(1)
	var Menu         = __webpack_require__(184)
	var MenuItemCell = __webpack_require__(185)
	var renderCell   = __webpack_require__(228)
	var cloneWithProps = __webpack_require__(233)

	module.exports = function(props) {

	    var children = []
	    var menu

	    React.Children.forEach(props.children, function(child){
	        if (child){
	            if (child.props && child.props.isMenu){
	                menu = cloneWithProps(child, {
	                    ref: 'subMenu'
	                })
	                menu.props.subMenu = true
	                return
	            }

	            if (typeof child != 'string'){
	                child = cloneWithProps(child, {
	                    style    : props.cellStyle,
	                    itemIndex: props.itemIndex,
	                    itemCount: props.itemCount
	                })
	            }

	            children.push(child)
	        }
	    })

	    if (menu){
	        props.menu = menu
	        var expander = props.expander || true
	        var expanderProps = {}

	        if (expander){
	            expanderProps.onClick = props.onExpanderClick
	        }
	        children.push(React.createElement(MenuItemCell, React.__spread({expander: expander},  expanderProps)))
	    }

	    return children
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Region = __webpack_require__(122)

	/**
	 * @static
	 * Aligns the source region to the target region, so as to correspond to the given alignment.
	 *
	 * NOTE that this method makes changes on the sourceRegion in order for it to be aligned as specified.
	 *
	 * @param {Region} sourceRegion
	 * @param {Region} targetRegion
	 *
	 * @param {String} align A string with 2 valid align positions, eg: 'tr-bl'.
	 * For valid positions, see {@link Region#getPoint}
	 *
	 * Having 2 regions, we need to be able to align them as we wish:
	 *
	 * for example, if we have
	 *
	 *       source    target
	 *       ________________
	 *       ____
	 *      |    |     ________
	 *      |____|    |        |
	 *                |        |
	 *                |________|
	 *
	 * and we align 't-t', we get:
	 *
	 *       source    target
	 *       _________________
	 *
	 *       ____      ________
	 *      |    |    |        |
	 *      |____|    |        |
	 *                |________|
	 *
	 *  In this case, the source was moved down to be aligned to the top of the target
	 *
	 *
	 * and if we align 'tc-tc' we get
	 *
	 *       source     target
	 *       __________________
	 *
	 *                 ________
	 *                | |    | |
	 *                | |____| |
	 *                |________|
	 *
	 *  Since the source was moved to have the top-center point to be the same with target top-center
	 *
	 *
	 *
	 * @return {RegionClass} The Region class
	 */
	Region.align = function(sourceRegion, targetRegion, align){

	    targetRegion = Region.from(targetRegion)

	    align = (align || 'c-c').split('-')

	    //<debug>
	    if (align.length != 2){
	        console.warn('Incorrect region alignment! The align parameter need to be in the form \'br-c\', that is, a - separated string!', align)
	    }
	    //</debug>

	    return Region.alignToPoint(sourceRegion, targetRegion.getPoint(align[1]), align[0])
	}

	/**
	 * Modifies the given region to be aligned to the point, as specified by anchor
	 *
	 * @param {Region} region The region to align to the point
	 * @param {Object} point The point to be used as a reference
	 * @param {Number} point.x
	 * @param {Number} point.y
	 * @param {String} anchor The position where to anchor the region to the point. See {@link #getPoint} for available options/
	 *
	 * @return {Region} the given region
	 */
	Region.alignToPoint = function(region, point, anchor){

	    region = Region.from(region)

	    var sourcePoint = region.getPoint(anchor)
	    var count       = 0
	    var shiftObj    = {}

	    if (
	            sourcePoint.x != null &&
	            point.x != null
	        ){

	            count++
	            shiftObj.left = point.x - sourcePoint.x
	    }

	    if (
	            sourcePoint.y != null &&
	            point.y != null
	        ){
	            count++
	            shiftObj.top = point.y - sourcePoint.y
	    }

	    if (count){

	        region.shift(shiftObj)

	    }

	    return region
	}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region = __webpack_require__(122)

	/**
	 *
	 * Aligns this region to the given region
	 * @param {Region} region
	 * @param {String} alignPositions For available positions, see {@link #getPoint}
	 *
	 *     eg: 'tr-bl'
	 *
	 * @return this
	 */
	Region.prototype.alignToRegion = function(region, alignPositions){
	    Region.align(this, region, alignPositions)

	    return this
	}

	/**
	 * Aligns this region to the given point, in the anchor position
	 * @param {Object} point eg: {x: 20, y: 600}
	 * @param {Number} point.x
	 * @param {Number} point.y
	 *
	 * @param {String} anchor For available positions, see {@link #getPoint}
	 *
	 *     eg: 'bl'
	 *
	 * @return this
	 */
	 Region.prototype.alignToPoint = function(point, anchor){
	    Region.alignToPoint(this, point, anchor)

	    return this
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var ALIGN_TO_NORMALIZED = __webpack_require__(229)

	var Region = __webpack_require__(122)

	/**
	 * @localdoc Given source and target regions, and the given alignments required, returns a region that is the resulting allignment.
	 * Does not modify the sourceRegion.
	 *
	 * Example
	 *
	 *      var sourceRegion = zippy.getInstance({
	 *          alias  : 'z.region',
	 *          top    : 10,
	 *          left   : 10,
	 *          bottom : 40,
	 *          right  : 100
	 *      })
	 *
	 *      var targetRegion = zippy.getInstance({
	 *          alias  : 'z.region',
	 *          top    : 10,
	 *          left   : 10,
	 *          bottom : 40,
	 *          right  : 100
	 *      })
	 *      //has top-left at (10,10)
	 *      //and bottom-right at (40, 100)
	 *
	 *      var alignRegion = alignable.COMPUTE_ALIGN_REGION(sourceRegion, targetRegion, 'tl-br')
	 *
	 *      //alignRegion will be a clone of sourceRegion, but will have the
	 *      //top-left corner aligned with bottom-right of targetRegion
	 *
	 *      alignRegion.get() // => { top: 40, left: 100, bottom: 70, right: 190 }
	 *
	 * @param  {Region} sourceRegion The source region to align to targetRegion
	 * @param  {Region} targetRegion The target region to which to align the sourceRegion
	 * @param  {String/String[]} positions    A string ( delimited by "-" characters ) or an array of strings with the position to try, in the order of their priority.
	 * See Region#getPoint for a list of available positions. They can be combined in any way.
	 * @param  {Object} config      A config object with other configuration for the alignment
	 * @param  {Object/Object[]} config.offset      Optional offsets. Either an object or an array with a different offset for each position
	 * @param  {Element/Region/Boolean} config.constrain  The constrain to region or element. If the boolean true, Region.getDocRegion() will be used
	 * @param  {Object/Boolean} config.sync   A boolean object that indicates whether to sync sourceRegion and targetRegion sizes (width/height or both). Can be
	 *
	 *  * true - in order to sync both width and height
	 *  * { width: true }  - to only sync width
	 *  * { height: true } - to only sync height
	 *  * { size: true }   - to sync both width and height
	 *
	 * @return {Object} an object with the following keys:
	 *
	 *  * position - the position where the alignment was made. One of the given positions
	 *  * region   - the region where the alignment is in place
	 *  * positionChanged - boolean value indicating if the position of the returned region is different from the position of sourceRegion
	 *  * widthChanged    - boolean value indicating if the width of the returned region is different from the width of sourceRegion
	 *  * heightChanged   - boolean value indicating if the height of the returned region is different from the height of sourceRegion
	 */
	function COMPUTE_ALIGN_REGION(sourceRegion, targetRegion, positions, config){
	    sourceRegion = Region.from(sourceRegion)

	    var sourceClone = sourceRegion.clone()
	    var position    = ALIGN_TO_NORMALIZED(sourceClone, targetRegion, positions, config)

	    return {
	        position        : position,
	        region          : sourceClone,
	        widthChanged    : sourceClone.getWidth() != sourceRegion.getWidth(),
	        heightChanged   : sourceClone.getHeight() != sourceRegion.getHeight(),
	        positionChanged : sourceClone.equalsPosition(sourceRegion)
	    }
	}


	module.exports = COMPUTE_ALIGN_REGION

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(){

	    'use strict';

	    var fns = {}

	    return function(len){

	        if ( ! fns [len ] ) {

	            var args = []
	            var i    = 0

	            for (; i < len; i++ ) {
	                args.push( 'a[' + i + ']')
	            }

	            fns[len] = new Function(
	                            'c',
	                            'a',
	                            'return new c(' + args.join(',') + ')'
	                        )
	        }

	        return fns[len]
	    }

	}()

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	//http://www.blackpawn.com/texts/pointinpoly/
	module.exports = function pointInTriangle(point, triangle) {
	    //compute vectors & dot products
	    var cx = point[0], cy = point[1],
	        t0 = triangle[0], t1 = triangle[1], t2 = triangle[2],
	        v0x = t2[0]-t0[0], v0y = t2[1]-t0[1],
	        v1x = t1[0]-t0[0], v1y = t1[1]-t0[1],
	        v2x = cx-t0[0], v2y = cy-t0[1],
	        dot00 = v0x*v0x + v0y*v0y,
	        dot01 = v0x*v1x + v0y*v1y,
	        dot02 = v0x*v2x + v0y*v2y,
	        dot11 = v1x*v1x + v1y*v1y,
	        dot12 = v1x*v2x + v1y*v2y

	    // Compute barycentric coordinates
	    var b = (dot00 * dot11 - dot01 * dot01),
	        inv = b === 0 ? 0 : (1 / b),
	        u = (dot11*dot02 - dot01*dot12) * inv,
	        v = (dot00*dot12 - dot01*dot02) * inv
	    return u>=0 && v>=0 && (u+v < 1)
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	function curry(fn, n){

	    if (typeof n !== 'number'){
	        n = fn.length
	    }

	    function getCurryClosure(prevArgs){

	        function curryClosure() {

	            var len  = arguments.length
	            var args = [].concat(prevArgs)

	            if (len){
	                args.push.apply(args, arguments)
	            }

	            if (args.length < n){
	                return getCurryClosure(args)
	            }

	            return fn.apply(this, args)
	        }

	        return curryClosure
	    }

	    return getCurryClosure([])
	}

	module.exports = curry

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	function composeTwo(f, g) {
	    return function () {
	        return f(g.apply(this, arguments))
	    }
	}

	/*
	 * @param {Function...} an enumeration of functions, each consuming the result of the following function.
	 *
	 * For example: compose(c, b, a)(1,4) == c(b(a(1,4)))
	 *
	 * @return the result of the first function in the enumeration
	 */
	module.exports = function(){

	    var args = arguments
	    var len  = args.length
	    var i    = 0
	    var f    = args[0]

	    while (++i < len) {
	        f = composeTwo(f, args[i])
	    }

	    return f
	}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	function chain(where, fn, secondFn){

	    return function(){
	        if (where === 'before'){
	            secondFn.apply(this, arguments)
	        }

	        var result = fn.apply(this, arguments)

	        if (where !== 'before'){
	            secondFn.apply(this, arguments)
	        }

	        return result
	    }
	}

	module.exports = chain

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use once'

	function once(fn, scope){

	    var called
	    var result

	    return function(){
	        if (called){
	            return result
	        }

	        called = true

	        return result = fn.apply(scope || this, arguments)
	    }
	}

	module.exports = once

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var SLICE = Array.prototype.slice

	module.exports = function(fn, args){
	    return function(){
	        var thisArgs = SLICE.call(args || [])

	        if (arguments.length){
	            thisArgs.push.apply(thisArgs, arguments)
	        }

	        return fn.apply(this, thisArgs)
	    }
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var SLICE = Array.prototype.slice
	var bindArgsArray = __webpack_require__(216)

	module.exports = function(fn){
	    return bindArgsArray(fn, SLICE.call(arguments,1))
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var SLICE = Array.prototype.slice

	module.exports = function(fn, args){

	    return function(){
	        if (!Array.isArray(args)){
	            args = SLICE.call(args || [])
	        }

	        return fn.apply(this, args)
	    }
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var SLICE = Array.prototype.slice
	var lockArgsArray = __webpack_require__(218)

	module.exports = function(fn){
	    return lockArgsArray(fn, SLICE.call(arguments, 1))
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var curry = __webpack_require__(212)

	module.exports = curry(function(fn, value){
	    return value != undefined && typeof value.map?
	            value.map(fn):
	            fn(value)
	})

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var curry = __webpack_require__(212)

	module.exports = curry(function(prop, value){
	    return value != undefined? value[prop]: undefined
	})

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var SLICE = Array.prototype.slice
	var curry = __webpack_require__(212)

	module.exports = function(fn, count){
	    return function(){
	        return fn.apply(this, SLICE.call(arguments, 0, count))
	    }
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var newify = __webpack_require__(253)
	var curry  = __webpack_require__(212)

	module.exports = curry(newify)

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = {
	    'numeric'  : __webpack_require__(238),
	    'number'   : __webpack_require__(239),
	    'int'      : __webpack_require__(240),
	    'float'    : __webpack_require__(241),
	    'string'   : __webpack_require__(242),
	    'function' : __webpack_require__(243),
	    'object'   : __webpack_require__(244),
	    'arguments': __webpack_require__(245),
	    'boolean'  : __webpack_require__(246),
	    'date'     : __webpack_require__(247),
	    'regexp'   : __webpack_require__(248),
	    'array'    : __webpack_require__(249)
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region = __webpack_require__(189)
	var assign = __webpack_require__(38)
	var align  = __webpack_require__(252)

	module.exports = function getPositionStyle(props, state){
	    if (!state.menu || !this.didMount){
	        this.prevMenuIndex = -1
	        return
	    }

	    var offset = state.menuOffset
	    var left   = offset.left + offset.width
	    var top    = offset.top

	    var menuIndex = state.itemProps.index
	    var sameMenu = this.prevMenuIndex == menuIndex

	    if (this.aligning && !sameMenu){
	        this.aligning = false
	    }

	    this.prevMenuIndex = menuIndex

	    var style = {
	        position     : 'absolute',
	        visibility   : 'hidden',
	        overflow     : 'hidden',
	        pointerEvents: 'none',
	        left         : left,
	        top          : top,
	        zIndex       : 1
	    }

	    if (!this.aligning && !sameMenu){
	        setTimeout(function(){

	            if (!this.didMount){
	                return
	            }

	            var thisRegion = Region.from(this.getDOMNode())
	            var menuItemRegion = Region.from({
	                left  : thisRegion.left,
	                top   : thisRegion.top + offset.top,
	                width : offset.width,
	                height: offset.height
	            })

	            var subMenuMounted = this.refs.subMenu && this.refs.subMenu.isMounted()
	            if (!subMenuMounted){
	                return
	            }

	            var subMenuRegion = Region.from(this.refs.subMenu.refs.scrollContainer.getCurrentSizeDOM())

	            var initialHeight = subMenuRegion.height

	            var alignPos = align(props, subMenuRegion, /* alignTo */ menuItemRegion, props.constrainTo)

	            var newHeight = subMenuRegion.height
	            var maxHeight

	            if (newHeight < initialHeight){
	                maxHeight = newHeight - props.subMenuConstrainMargin
	            }

	            if (maxHeight && alignPos == -1 /* upwards*/){
	                subMenuRegion.top = subMenuRegion.bottom - maxHeight
	            }

	            var newLeft = subMenuRegion.left - thisRegion.left
	            var newTop  = subMenuRegion.top  - thisRegion.top

	            if (Math.abs(newLeft - left) < 5){
	                newLeft = left
	            }

	            if (Math.abs(newTop - top) < 5){
	                newTop = top
	            }

	            this.subMenuPosition = newLeft < 0? 'left': 'right'

	            this.alignOffset = {
	                left: newLeft,
	                top : newTop
	            }
	            this.aligning = true

	            this.setState({
	                subMenuMaxHeight: maxHeight
	            })

	        }.bind(this), 0)
	    }

	    if (sameMenu || (this.aligning && this.alignOffset)){
	        assign(style, this.alignOffset)
	        style.visibility = 'visible'
	        delete style.pointerEvents
	        delete style.overflow
	    }

	    this.aligning = false

	    return style
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var renderCell = __webpack_require__(228)

	module.exports = function(props) {
	    return props.columns.map(renderCell.bind(null, props))
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React         = __webpack_require__(1)
	var assign        = __webpack_require__(38)
	var getArrowStyle = __webpack_require__(256)

	function emptyFn(){}

	var SCROLLER_STYLE = {
	    left      : 0,
	    right     : 0,
	    position  : 'absolute',
	    cursor    : 'pointer',
	    zIndex    : 1
	}

	function generateArrowStyle(props, state, overrideStyle){
	    var style = assign({}, overrideStyle)

	    var arrowConfig = {
	        color: style.color || props.arrowColor
	    }

	    var offset = 4
	    var width  = style.width  || props.arrowWidth  || props.arrowSize || (props.style.height - offset)
	    var height = style.height || props.arrowHeight || props.arrowSize || (props.style.height - offset)

	    arrowConfig.width  = width
	    arrowConfig.height = height

	    assign(style, getArrowStyle(props.side == 'top'? 'up':'down', arrowConfig))

	    style.display = 'inline-block'
	    style.position = 'absolute'

	    style.left = '50%'
	    style.marginLeft = -width

	    style.top = '50%'
	    style.marginTop = -height/2

	    if (state.active){
	        style.marginTop += props.side == 'top'? -1: 1
	    }

	    return style
	}

	var Scroller = React.createClass({displayName: "Scroller",

	    display: 'ReactMenuScroller',

	    getInitialState: function() {
	        return {}
	    },

	    getDefaultProps: function(){
	        return {
	            height: 10,
	            defaultStyle: {
	                background : 'white'
	            },
	            defaultOverStyle: {},
	            overStyle: {},

	            defaultTopStyle: {
	                borderBottom: '1px solid gray'
	            },
	            topStyle: {},
	            defaultBottomStyle: {
	                borderTop: '1px solid gray'
	            },
	            bottomStyle: {},

	            arrowColor: 'gray',

	            arrowStyle: {},
	            defaultArrowStyle: {},
	            defaultArrowOverStyle: {
	                color: 'rgb(74, 74, 74)'
	            },
	            arrowOverStyle: {}
	        }
	    },

	    handleMouseEnter: function() {
	        this.setState({
	            mouseOver: true
	        })
	    },

	    handleMouseLeave: function() {
	        this.setState({
	            mouseOver: false
	        })
	    },

	    handleMouseDown: function(event) {
	        this.setState({
	            active: true
	        })

	        ;(this.props.onMouseDown || emptyFn)(event)
	    },

	    handleMouseUp: function(event) {
	        this.setState({
	            active: false
	        })

	        ;(this.props.onMouseUp || emptyFn)(event)
	    },

	    render: function(){
	        var props = assign({}, this.props, {
	            onMouseEnter: this.handleMouseEnter,
	            onMouseLeave: this.handleMouseLeave,

	            onMouseDown: this.handleMouseDown,
	            onMouseUp  : this.handleMouseUp
	        })

	        var state = this.state
	        var side  = props.side

	        props.className = this.prepareClassName(props, state)

	        props.style = this.prepareStyle(props, state)

	        var arrowStyle = this.prepareArrowStyle(props, state)

	        return props.factory?
	                    props.factory(props, side):
	                    React.createElement("div", React.__spread({},  props), 
	                        React.createElement("div", {style: arrowStyle})
	                    )
	    },

	    prepareStyle: function(props, state) {
	        var defaultOverStyle
	        var overStyle

	        if (state.mouseOver){
	            overStyle        = props.overStyle
	            defaultOverStyle = props.defaultOverStyle
	        }

	        var defaultSideStyle = props.side == 'top'?
	                                props.defaultTopStyle:
	                                props.defaultBottomStyle
	        var sideStyle = props.side == 'top'?
	                            props.topStyle:
	                            props.bottomStyle

	        var style = assign({}, SCROLLER_STYLE,
	                            props.defaultStyle, defaultSideStyle, defaultOverStyle,
	                            props.style, sideStyle, overStyle)

	        style.height = style.height || props.height
	        style[props.side] = 0
	        if (!props.visible){
	            style.display = 'none'
	        }

	        return style
	    },

	    prepareClassName: function(props, state) {
	        //className
	        var className = props.className || ''
	        className += ' z-menu-scroller ' + props.side

	        if (props.active && props.visible){
	            className += ' active'
	        }

	        return className
	    },

	    prepareArrowStyle: function(props, state) {

	        var defaultArrowOverStyle
	        var arrowOverStyle

	        if (state.mouseOver){
	            defaultArrowOverStyle = props.defaultArrowOverStyle
	            arrowOverStyle        = props.arrowOverStyle
	        }

	        var arrowStyle = assign({}, props.defaultArrowStyle, defaultArrowOverStyle, props.arrowStyle, arrowOverStyle)

	        return generateArrowStyle(props, state, arrowStyle)
	    },

	    handleClick: function(event){
	        event.stopPropagation
	    }
	})

	module.exports = Scroller

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React        = __webpack_require__(1)
	var assign       = __webpack_require__(38)
	var MenuItemCell = __webpack_require__(185)

	module.exports = function(props, column) {
	    var style = assign({}, props.defaultCellStyle, props.cellStyle)

	    return React.createElement(MenuItemCell, {style: style}, props.data[column])
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var Region = __webpack_require__(122)

	/**
	 *
	 * This method is trying to align the sourceRegion to the targetRegion, given the alignment positions
	 * and the offsets. It only modifies the sourceRegion
	 *
	 * This is all well and easy, but if there is a constrainTo region, the algorithm has to take it into account.
	 * In this case, it works as follows.
	 *
	 *  * start with the first alignment position. Aligns the region, adds the offset and then check for the constraint.
	 *  * if the constraint condition is ok, return the position.
	 *  * otherwise, remember the intersection area, if the regions are intersecting.
	 *  * then go to the next specified align position, and so on, computing the maximum intersection area.
	 *
	 * If no alignment fits the constrainRegion, the sourceRegion will be resized to match it,
	 * using the position with the maximum intersection area.
	 *
	 * Since we have computed the index of the position with the max intersection area, take that position,
	 * and align the sourceRegion accordingly. Then resize the sourceRegion to the intersection, and reposition
	 * it again, since resizing it might have destroyed the alignment.
	 *
	 * Return the position.
	 *
	 * @param {Region} sourceRegion
	 * @param {Region} targetRegion
	 * @param {String[]} positions
	 * @param {Object} config
	 * @param {Array} config.offset
	 * @param {Region} config.constrain
	 * @param {Boolean/Object} config.sync
	 *
	 * @return {String/Undefined} the chosen position for the alignment, or undefined if no position found
	 */
	function ALIGN_TO_NORMALIZED(sourceRegion, targetRegion, positions, config){

	    targetRegion = Region.from(targetRegion)

	    config = config  || {}

	    var constrainTo = config.constrain,
	        syncOption  = config.sync,
	        offsets     = config.offset || [],
	        syncWidth   = false,
	        syncHeight  = false,
	        sourceClone = sourceRegion.clone()

	    /*
	     * Prepare the method arguments: positions, offsets, constrain and sync options
	     */
	    if (!Array.isArray(positions)){
	        positions = positions? [positions]: []
	    }

	    if (!Array.isArray(offsets)){
	        offsets = offsets? [offsets]: []
	    }

	    if (constrainTo){
	        constrainTo = constrainTo === true?
	                                Region.getDocRegion():
	                                constrainTo.getRegion()
	    }

	    if (syncOption){

	        if (syncOption.size){
	            syncWidth  = true
	            syncHeight = true
	        } else {
	            syncWidth  = syncOption === true?
	                            true:
	                            syncOption.width || false

	            syncHeight = syncOption === true?
	                            true:
	                            syncOption.height || false
	        }
	    }

	    if (syncWidth){
	        sourceClone.setWidth(targetRegion.getWidth())
	    }
	    if (syncHeight){
	        sourceClone.setHeight(targetRegion.getHeight())

	    }

	    var offset,
	        i = 0,
	        len = positions.length,
	        pos,
	        intersection,
	        itArea,
	        maxArea = -1,
	        maxAreaIndex = -1

	    for (; i < len; i++){
	        pos     = positions[i]
	        offset  = offsets[i]

	        sourceClone.alignToRegion(targetRegion, pos)

	        if (offset){
	            if (!Array.isArray(offset)){
	                offset = offsets[i] = [offset.x || offset.left, offset.y || offset.top]
	            }

	            sourceClone.shift({
	                left: offset[0],
	                top : offset[1]
	            })
	        }

	        //the source region is already aligned in the correct position

	        if (constrainTo){
	            //if we have a constrain region, test for the constrain
	            intersection = sourceClone.getIntersection(constrainTo)

	            if ( intersection && intersection.equals(sourceClone) ) {
	                //constrain respected, so return (the aligned position)

	                sourceRegion.set(sourceClone)
	                return pos
	            } else {

	                //the constrain was not respected, so continue trying
	                if (intersection && ((itArea = intersection.getArea()) > maxArea)){
	                    maxArea      = itArea
	                    maxAreaIndex = i
	                }
	            }

	        } else {
	            sourceRegion.set(sourceClone)
	            return pos
	        }
	    }

	    //no alignment respected the constraints
	    if (~maxAreaIndex){
	        pos     = positions[maxAreaIndex]
	        offset  = offsets[maxAreaIndex]

	        sourceClone.alignToRegion(targetRegion, pos)

	        if (offset){
	            sourceClone.shift({
	                left: offset[0],
	                top : offset[1]
	            })
	        }

	        //we are sure an intersection exists, because of the way the maxAreaIndex was computed
	        intersection = sourceClone.getIntersection(constrainTo)

	        sourceClone.setRegion(intersection)
	        sourceClone.alignToRegion(targetRegion, pos)

	        if (offset){
	            sourceClone.shift({
	                left: offset[0],
	                top : offset[1]
	            })
	        }

	        sourceRegion.set(sourceClone)

	        return pos
	    }

	}

	module.exports = ALIGN_TO_NORMALIZED

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	exports.read = function(buffer, offset, isLE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isLE ? (nBytes - 1) : 0,
	      d = isLE ? -1 : 1,
	      s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity);
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isLE ? 0 : (nBytes - 1),
	      d = isLE ? 1 : -1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

	  buffer[offset + i - d] |= s * 128;
	};


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * isArray
	 */

	var isArray = Array.isArray;

	/**
	 * toString
	 */

	var str = Object.prototype.toString;

	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */

	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curry   = __webpack_require__(254)
	var matches

	module.exports = curry(function(selector, node){

		matches = matches || __webpack_require__(255)

	    while (node = node.parentElement){
	        if (matches.call(node, selector)){
	            return node
	        }
	    }
	})

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React    = __webpack_require__(1)
	  , hasOwn   = Object.prototype.hasOwnProperty
	  , version  = React.version.split('.').map(parseFloat)
	  , RESERVED = {
	      className:  resolve(joinClasses),
	      children:   function(){},
	      key:        function(){},
	      ref:        function(){},
	      style:      resolve(extend)
	    };

	module.exports = function cloneWithProps(child, props) {
	  var newProps = mergeProps(props, child.props);

	  if (!hasOwn.call(newProps, 'children') && hasOwn.call(child.props, 'children'))
	    newProps.children = child.props.children;

	  // < 0.11
	  if (version[0] === 0 && version[1] < 11)
	    return child.constructor.ConvenienceConstructor(newProps);
	  
	  // 0.11
	  if (version[0] === 0 && version[1] === 11)
	    return child.constructor(newProps);

	  // 0.12
	  else if (version[0] === 0 && version[1] === 12){
	    MockLegacyFactory.isReactLegacyFactory = true
	    MockLegacyFactory.type = child.type
	    return React.createElement(MockLegacyFactory, newProps);
	  }

	  // 0.13+
	  return React.createElement(child.type, newProps);

	  function MockLegacyFactory(){}
	}

	function mergeProps(currentProps, childProps) {
	  var newProps = extend(currentProps), key

	  for (key in childProps) {
	    if (hasOwn.call(RESERVED, key) )
	      RESERVED[key](newProps, childProps[key], key)

	    else if ( !hasOwn.call(newProps, key) )
	      newProps[key] = childProps[key];
	  }
	  return newProps
	}

	function resolve(fn){
	  return function(src, value, key){
	    if( !hasOwn.call(src, key)) src[key] = value
	    else src[key] = fn(src[key], value)
	  }
	}

	function joinClasses(a, b){
	  if ( !a ) return b || ''
	  return a + (b ? ' ' + b : '')
	}

	function extend() {
	  var target = {};
	  for (var i = 0; i < arguments.length; i++) 
	    for (var key in arguments[i]) if (hasOwn.call(arguments[i], key)) 
	      target[key] = arguments[i][key]   
	  return target
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror div.CodeMirror-cursor {\n  border-left: 1px solid black;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.CodeMirror.cm-fat-cursor div.CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: #7e7;\n}\n.CodeMirror.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n@-moz-keyframes blink {\n  0% { background: #7e7; }\n  50% { background: none; }\n  100% { background: #7e7; }\n}\n@-webkit-keyframes blink {\n  0% { background: #7e7; }\n  50% { background: none; }\n  100% { background: #7e7; }\n}\n@keyframes blink {\n  0% { background: #7e7; }\n  50% { background: none; }\n  100% { background: #7e7; }\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\ndiv.CodeMirror-overwrite div.CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  line-height: 1;\n  position: relative;\n  overflow: hidden;\n  background: white;\n  color: black;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actuall scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  display: inline-block;\n  margin-bottom: -30px;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  height: 100%;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.CodeMirror-measure pre { position: static; }\n\n.CodeMirror div.CodeMirror-cursor {\n  position: absolute;\n  border-right: none;\n  width: 0;\n}\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.push([module.id, "/*\nSolarized theme for code-mirror\nhttp://ethanschoonover.com/solarized\n*/\n\n/*\nSolarized color pallet\nhttp://ethanschoonover.com/solarized/img/solarized-palette.png\n*/\n\n.solarized.base03 { color: #002b36; }\n.solarized.base02 { color: #073642; }\n.solarized.base01 { color: #586e75; }\n.solarized.base00 { color: #657b83; }\n.solarized.base0 { color: #839496; }\n.solarized.base1 { color: #93a1a1; }\n.solarized.base2 { color: #eee8d5; }\n.solarized.base3  { color: #fdf6e3; }\n.solarized.solar-yellow  { color: #b58900; }\n.solarized.solar-orange  { color: #cb4b16; }\n.solarized.solar-red { color: #dc322f; }\n.solarized.solar-magenta { color: #d33682; }\n.solarized.solar-violet  { color: #6c71c4; }\n.solarized.solar-blue { color: #268bd2; }\n.solarized.solar-cyan { color: #2aa198; }\n.solarized.solar-green { color: #859900; }\n\n/* Color scheme for code-mirror */\n\n.cm-s-solarized {\n  line-height: 1.45em;\n  color-profile: sRGB;\n  rendering-intent: auto;\n}\n.cm-s-solarized.cm-s-dark {\n  color: #839496;\n  background-color:  #002b36;\n  text-shadow: #002b36 0 1px;\n}\n.cm-s-solarized.cm-s-light {\n  background-color: #fdf6e3;\n  color: #657b83;\n  text-shadow: #eee8d5 0 1px;\n}\n\n.cm-s-solarized .CodeMirror-widget {\n  text-shadow: none;\n}\n\n\n.cm-s-solarized .cm-keyword { color: #cb4b16 }\n.cm-s-solarized .cm-atom { color: #d33682; }\n.cm-s-solarized .cm-number { color: #d33682; }\n.cm-s-solarized .cm-def { color: #2aa198; }\n\n.cm-s-solarized .cm-variable { color: #268bd2; }\n.cm-s-solarized .cm-variable-2 { color: #b58900; }\n.cm-s-solarized .cm-variable-3 { color: #6c71c4; }\n\n.cm-s-solarized .cm-property { color: #2aa198; }\n.cm-s-solarized .cm-operator {color: #6c71c4;}\n\n.cm-s-solarized .cm-comment { color: #586e75; font-style:italic; }\n\n.cm-s-solarized .cm-string { color: #859900; }\n.cm-s-solarized .cm-string-2 { color: #b58900; }\n\n.cm-s-solarized .cm-meta { color: #859900; }\n.cm-s-solarized .cm-qualifier { color: #b58900; }\n.cm-s-solarized .cm-builtin { color: #d33682; }\n.cm-s-solarized .cm-bracket { color: #cb4b16; }\n.cm-s-solarized .CodeMirror-matchingbracket { color: #859900; }\n.cm-s-solarized .CodeMirror-nonmatchingbracket { color: #dc322f; }\n.cm-s-solarized .cm-tag { color: #93a1a1 }\n.cm-s-solarized .cm-attribute {  color: #2aa198; }\n.cm-s-solarized .cm-header { color: #586e75; }\n.cm-s-solarized .cm-quote { color: #93a1a1; }\n.cm-s-solarized .cm-hr {\n  color: transparent;\n  border-top: 1px solid #586e75;\n  display: block;\n}\n.cm-s-solarized .cm-link { color: #93a1a1; cursor: pointer; }\n.cm-s-solarized .cm-special { color: #6c71c4; }\n.cm-s-solarized .cm-em {\n  color: #999;\n  text-decoration: underline;\n  text-decoration-style: dotted;\n}\n.cm-s-solarized .cm-strong { color: #eee; }\n.cm-s-solarized .cm-error,\n.cm-s-solarized .cm-invalidchar {\n  color: #586e75;\n  border-bottom: 1px dotted #dc322f;\n}\n\n.cm-s-solarized.cm-s-dark .CodeMirror-selected {\n  background: #073642;\n}\n\n.cm-s-solarized.cm-s-light .CodeMirror-selected {\n  background: #eee8d5;\n}\n\n/* Editor styling */\n\n\n\n/* Little shadow on the view-port of the buffer view */\n.cm-s-solarized.CodeMirror {\n  -moz-box-shadow: inset 7px 0 12px -6px #000;\n  -webkit-box-shadow: inset 7px 0 12px -6px #000;\n  box-shadow: inset 7px 0 12px -6px #000;\n}\n\n/* Gutter border and some shadow from it  */\n.cm-s-solarized .CodeMirror-gutters {\n  border-right: 1px solid;\n}\n\n/* Gutter colors and line number styling based of color scheme (dark / light) */\n\n/* Dark */\n.cm-s-solarized.cm-s-dark .CodeMirror-gutters {\n  background-color:  #002b36;\n  border-color: #00232c;\n}\n\n.cm-s-solarized.cm-s-dark .CodeMirror-linenumber {\n  text-shadow: #021014 0 -1px;\n}\n\n/* Light */\n.cm-s-solarized.cm-s-light .CodeMirror-gutters {\n  background-color: #fdf6e3;\n  border-color: #eee8d5;\n}\n\n/* Common */\n.cm-s-solarized .CodeMirror-linenumber {\n  color: #586e75;\n  padding: 0 5px;\n}\n.cm-s-solarized .CodeMirror-guttermarker-subtle { color: #586e75; }\n.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker { color: #ddd; }\n.cm-s-solarized.cm-s-light .CodeMirror-guttermarker { color: #cb4b16; }\n\n.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {\n  color: #586e75;\n}\n\n.cm-s-solarized .CodeMirror-lines .CodeMirror-cursor {\n  border-left: 1px solid #819090;\n}\n\n/*\nActive line. Negative margin compensates left padding of the text in the\nview-port\n*/\n.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {\n  background: rgba(255, 255, 255, 0.10);\n}\n.cm-s-solarized.cm-s-light .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.10);\n}\n", ""]);

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}(false ? (this.base64js = {}) : exports))


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(value){
	    return !isNaN( parseFloat( value ) ) && isFinite( value )
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(value){
	    return typeof value === 'number' && isFinite(value)
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var number = __webpack_require__(239)

	module.exports = function(value){
	    return number(value) && (value === parseInt(value, 10))
	}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var number = __webpack_require__(239)

	module.exports = function(value){
	    return number(value) && (value === parseFloat(value, 10)) && !(value === parseInt(value, 10))
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(value){
	    return typeof value == 'string'
	}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var objectToString = Object.prototype.toString

	module.exports = function(value){
	    return objectToString.apply(value) === '[object Function]'
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var objectToString = Object.prototype.toString

	module.exports = function(value){
	    return objectToString.apply(value) === '[object Object]'
	}

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var objectToString = Object.prototype.toString

	module.exports = function(value){
	    return objectToString.apply(value) === '[object Arguments]' || !!value.callee
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(value){
	    return typeof value == 'boolean'
	}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var objectToString = Object.prototype.toString

	module.exports = function(value){
	    return objectToString.apply(value) === '[object Date]'
	}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var objectToString = Object.prototype.toString

	module.exports = function(value){
	    return objectToString.apply(value) === '[object RegExp]'
	}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	module.exports = function(value){
	    return Array.isArray(value)
	}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(list, importedList, media) {
		for(var i = 0; i < importedList.length; i++) {
			var item = importedList[i];
			if(media && !item[2])
				item[2] = media;
			else if(media) {
				item[2] = "(" + item[2] + ") and (" + media + ")";
			}
			list.push(item);
		}
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Region = __webpack_require__(189)
	var getConstrainRegion = __webpack_require__(198)

	module.exports = function(props, subMenuRegion, targetAlignRegion, constrainTo){
	    var constrainRegion = getConstrainRegion.call(this, constrainTo)

	    if (!constrainRegion){
	        return
	    }



	    if (typeof props.alignSubMenu === 'function'){
	        props.alignSubMenu(subMenuRegion, targetAlignRegion, constrainRegion)
	    } else {
	        var pos = subMenuRegion.alignTo(targetAlignRegion, [
	            //align to right
	            'tl-tr','bl-br',

	            //align to left
	            'tr-tl', 'br-bl'
	        ], { constrain: constrainRegion })

	        return (pos == 'tl-tr' || pos == 'tr-tl')?
	                    //align downwards
	                    1:

	                    //align upwards
	                    -1
	    }
	}

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var getInstantiatorFunction = __webpack_require__(257)

	module.exports = function(fn, args){
		return getInstantiatorFunction(args.length)(fn, args)
	}

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function curry(fn, n){

	    if (typeof n !== 'number'){
	        n = fn.length
	    }

	    function getCurryClosure(prevArgs){

	        function curryClosure() {

	            var len  = arguments.length
	            var args = [].concat(prevArgs)

	            if (len){
	                args.push.apply(args, arguments)
	            }

	            if (args.length < n){
	                return getCurryClosure(args)
	            }

	            return fn.apply(this, args)
	        }

	        return curryClosure
	    }

	    return getCurryClosure([])
	}

	module.exports = curry

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var proto = Element.prototype

	var nativeMatches = proto.matches ||
	  proto.mozMatchesSelector ||
	  proto.msMatchesSelector ||
	  proto.oMatchesSelector ||
	  proto.webkitMatchesSelector

	module.exports = nativeMatches


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function arrowStyle(side, config){

	    var arrowSize   = config.size   || 8
	    var arrowWidth  = config.width  || arrowSize
	    var arrowHeight = config.height || arrowSize
	    var arrowColor  = config.color  || 'black'
	    var includePosition = config.includePosition

	    var style

	    if (side == 'up' || side == 'down'){

	        style = {
	            borderLeft : arrowWidth + 'px solid transparent',
	            borderRight: arrowWidth + 'px solid transparent'
	        }

	        if (includePosition){
	            style.marginTop = -Math.round(arrowHeight/2) + 'px'
	            style.position  = 'relative'
	            style.top       = '50%'
	        }

	        style[side === 'up'? 'borderBottom': 'borderTop'] = arrowHeight + 'px solid ' + arrowColor
	    }

	    if (side == 'left' || side == 'right'){

	        style = {
	            borderTop : arrowHeight + 'px solid transparent',
	            borderBottom: arrowHeight + 'px solid transparent'
	        }

	        if (includePosition){
	            style.marginLeft = -Math.round(arrowWidth/2) + 'px'
	            style.position   = 'relative'
	            style.left       = '50%'
	        }

	        style[side === 'left'? 'borderRight': 'borderLeft'] = arrowWidth + 'px solid ' + arrowColor
	    }

	    return style
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(){

	    'use strict';

	    var fns = {}

	    return function(len){

	        if ( ! fns [len ] ) {

	            var args = []
	            var i    = 0

	            for (; i < len; i++ ) {
	                args.push( 'a[' + i + ']')
	            }

	            fns[len] = new Function(
	                            'c',
	                            'a',
	                            'return new c(' + args.join(',') + ')'
	                        )
	        }

	        return fns[len]
	    }

	}()

/***/ }
/******/ ]);
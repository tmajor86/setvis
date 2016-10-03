(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["onset"] = factory();
	else
		root["onset"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(1);
	
	var _template2 = _interopRequireDefault(_template);
	
	__webpack_require__(3);
	
	var _main = __webpack_require__(9);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  template: _template2.default,
	  main: _main2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"onset-body\">\n    <div id=\"wrapper\">\n      <div id=\"header\">\n        <h2>OnSet</h2>\n        <div id=\"info\">\n          <div id=\"element-label\"></div>\n          <div id=\"class-label\"></div>\n        </div>\n      </div>\n      <div id=\"content\">\n        <div id=\"trash\" class=\"hidden clearfix\"><div class=\"icon\"></div><div>Remove</div></div>\n        <svg id=\"canvas\">\n        </svg>\n        <div id=\"controls\" class=\"no-selection\">\n          <div id=\"list-btns\">\n            <button id=\"samples-btn\" title=\"Samples\">Sets</button>\n            <button id=\"elements-btn\" title=\"Compounds\">Elements</button>\n            <div id=\"bands\">\n                <label for=\"bands-cb\">Similarity</label>\n                <input type=\"checkbox\" id=\"bands-cb\"></input>\n            </div>\n            <div id=\"metric\">\n                <!-- <label for=\"metric-select\">Metric</label> -->\n                <select id=\"metric-select\" class=\"invisible\">\n                  <option value=\"norm\">OnSet</option>\n                  <option value=\"jaccard\">Jaccard</option>\n                </select>\n            </div>\n            <div id=\"zoom\">\n              <div id=\"zoom-out-btn\" title=\"Zoom out\">-</div>\n              <div id=\"zoom-level\">100%</div>\n              <div id=\"zoom-in-btn\" title=\"Zoom in\">+</div>\n            </div>\n          </div>\n          <div id=\"lists\">\n            <div id=\"samples\" class=\"search-list hidden\">\n              <input class=\"search\" placeholder=\"Search\" />\n              <div id=\"samples-filters\" class=\"clearfix\">\n                <button class=\"clear-sort\" title=\"Original order\">Def.</button>\n                <button class=\"sort\" title=\"Sort by name\" data-sort=\"name\"><span class=\"fade\">A&#8594;Z</span></button>\n                <button class=\"sort\" title=\"Sort by no. of elements\" data-sort=\"count\"><span class=\"fade\"><img src=\"" + __webpack_require__(2) + "\" alt=\"Count\"/></span></button>\n              </div>\n              <div class=\"list-container\">\n                <ul class=\"list\"></ul>\n              </div>\n              <div id=\"samples-footer\" class=\"clearfix\">\n                <button id=\"add-all-btn\" title=\"Add all samples\">Add All</button>\n                <div id=\"sample-count\">5 samples</div>\n              </div>\n            </div>\n            <div id=\"elements\" class=\"search-list hidden\">\n              <input class=\"search\" placeholder=\"Search\" />\n              <div class=\"list-container\">\n                <ul class=\"list\"></ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n";

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAABkCAYAAADjaiD2AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuOwAALjsBFTsn2QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH8SURBVHic7doxalRRGIbh74iCxYClTZaS0gUIbiW9m3AR6YILcA+WZgHpbGIaweKkGNspcude57v4PDDNwPn5ixfOwJkx5ww0enXpBeAUcVJLnNQSJ7XESS1xUkuc1BIntcRJLXFSS5zUEie1xEktcVJLnNQSJ7XESS1xUkuc1BIntcRJrdeXXuClxhiHJFdnjHiacz6stQ/b2V2cST4kuTvj/NckH1fahQ251qklTmqJk1ripJY4qSVOaomTWuKkljipJU5q7fH5cnVjjOscn0WX+Dnn/LLmPhyJ8+g6yeeFZ++TiHMDrnVqiZNa4qSWOKklTmqJk1ripJY4qSVOaomTWuKklrf1jYwx7pO8X3j805zz25r77JE4t/Pu72eJN2susleudWqJk1ripJY4qSVOaomTWuKkljipJU5qiZNani93Yoxxk+RwxojbOeePtfb5F8S5HzdZ/keSJPmeZFdxutapJU5qiZNa4qSWOKklTmqJk1ripJY4qSVOaomTWuKkljipJU5qiZNa/s959DvJ48Kzv058/5jk7cKZf1aed2pmtTHnvPQOLzLGOCS5OmPE05zzYa192M7u4uT/4TcntcRJLXFSS5zUEie1xEktcVJLnNQSJ7XESS1xUkuc1BIntcRJLXFSS5zUEie1xEktcVJLnNQSJ7WeAWxtMATxrL5jAAAAAElFTkSuQmCC"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! HTML5 Boilerplate v4.3.0 | MIT License | http://h5bp.com/ */\n\n/*\n * What follows is the result of much research on cross-browser styling.\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\n * Kroc Camen, and the H5BP dev community and team.\n */\n\n/* ==========================================================================\n   Base styles: opinionated defaults\n   ========================================================================== */\n/*\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\nhtml {\n    font-size: 1em;\n    line-height: 1.4;\n}\n*/\n/*\n * Remove text-shadow in selection highlight: h5bp.com/i\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n/*\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n*/\n/*\n * A better looking default horizontal rule\n */\n/*\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n*/\n/*\n * Remove the gap between images, videos, audio and canvas and the bottom of\n * their containers: h5bp.com/i/440\n */\n/*\naudio,\ncanvas,\nimg,\nvideo {\n    vertical-align: middle;\n}\n */\n/*\n * Allow only vertical resizing of textareas.\n */\n/*\ntextarea {\n    resize: vertical;\n}\n*/\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n\n.onset-body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n/* Removes text selection */\n.onset-body .no-selection {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.onset-body #wrapper {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    padding-top: 60px;\n}\n\n.onset-body #header {\n    width: 100%;\n    height: 60px;\n    margin-top: -60px;\n    color: #fff;\n    background-color: #222;\n}\n\n.onset-body #header h2 {\n    float: left;\n    width: 240px;\n    margin: 0 10px;\n    padding: 0;\n    line-height: 60px;\n    font-weight: normal;\n}\n\n.onset-body #info {\n    width: 100%;\n    margin-left: -250px;\n    text-align: center;\n    line-height: 40px;\n}\n\n.onset-body #element-label{\n    height: 40px;\n    line-height: 45px;\n}\n\n.onset-body #class-label{\n    height: 20px;\n    line-height: 5px;\n    font-size: .8em;\n    color: #fff8bf;\n}\n\n.onset-body #content {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n}\n\n.onset-body #trash {\n    width: 84px;\n    margin: auto;\n    padding: 10px;\n    font-size: .8em;\n    text-align: center;\n    color: #fff;\n}\n\n.onset-body #trash div {\n    float: left;\n    line-height: 25px;\n    vertical-align: middle;\n}\n\n.onset-body #trash div.icon{\n    width: 25px;\n    height: 25px;\n    margin-right: 8px;\n    background-image: url(" + __webpack_require__(6) + ");\n    background-size: 25px 25px;\n}\n\n.onset-body #trash.hover {\n    background-color: #fff;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.onset-body #trash.hover div {\n    color: #222;\n}\n\n.onset-body #trash.hover div.icon{\n    background-image: url(" + __webpack_require__(7) + ");\n}\n\n.onset-body #controls {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n}\n\n/* Overrides the default OS X (Lion and later) scrollbar behavior to force the \nscrollbar to always show */\n.onset-body #controls ::-webkit-scrollbar{\n    -webkit-appearance: none;\n    width: 7px;\n}\n.onset-body #controls ::-webkit-scrollbar-thumb{\n    border-radius: 4px;\n    background-color: rgba(0,0,0,.5);\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n/* Overrides the \"halo\" border around a button that has been clicked */\n.onset-body #controls button:focus {\n    outline:none;\n} \n\n.onset-body #controls button::-moz-focus-inner {\n    border:0;\n}\n\n.onset-body #controls button {\n    position: relative;\n    padding: 0;\n    margin: 0;\n    font-size: 0.8em;\n    background: rgb(243,243,243); /* Old browsers */\n    background: -moz-linear-gradient(top,  rgba(243,243,243,1) 0%, rgba(214,214,214,1) 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(243,243,243,1)), color-stop(100%,rgba(214,214,214,1))); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  rgba(243,243,243,1) 0%,rgba(214,214,214,1) 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  rgba(243,243,243,1) 0%,rgba(214,214,214,1) 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  rgba(243,243,243,1) 0%,rgba(214,214,214,1) 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  rgba(243,243,243,1) 0%,rgba(214,214,214,1) 100%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3f3f3', endColorstr='#d6d6d6',GradientType=0 ); /* IE6-9 */\n    border: 1px solid #9d9d9d;\n}\n\n.onset-body #controls button:hover {\n    background: rgb(199,199,199); /* Old browsers */\n    background: -moz-linear-gradient(top,  rgba(199,199,199,1) 0%, rgba(175,175,175,1) 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(199,199,199,1)), color-stop(100%,rgba(175,175,175,1))); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  rgba(199,199,199,1) 0%,rgba(175,175,175,1) 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  rgba(199,199,199,1) 0%,rgba(175,175,175,1) 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  rgba(199,199,199,1) 0%,rgba(175,175,175,1) 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  rgba(199,199,199,1) 0%,rgba(175,175,175,1) 100%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c7c7c7', endColorstr='#afafaf',GradientType=0 ); /* IE6-9 */\n    border: 1px solid #5d5d5d;\n}\n\n.onset-body #controls button:active{\n    background: rgb(157,157,157); /* Old browsers */\n    background: -moz-linear-gradient(top,  rgba(157,157,157,1) 0%, rgba(176,176,176,1) 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(157,157,157,1)), color-stop(100%,rgba(176,176,176,1))); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  rgba(157,157,157,1) 0%,rgba(176,176,176,1) 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  rgba(157,157,157,1) 0%,rgba(176,176,176,1) 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  rgba(157,157,157,1) 0%,rgba(176,176,176,1) 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  rgba(157,157,157,1) 0%,rgba(176,176,176,1) 100%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9d9d9d', endColorstr='#b0b0b0',GradientType=0 ); /* IE6-9 */\n}\n\n.onset-body #controls button.sort.asc .fade,\n.onset-body #controls button.sort.desc .fade {\n    opacity: 0.3;\n}\n\n.onset-body #controls button.sort.asc,\n.onset-body #controls button.sort.desc {\n    background: none;\n    background-color: #7c7c7c;\n    border: none;\n}\n\n.onset-body #controls button.sort.desc:hover,\n.onset-body #controls button.sort.asc:hover {\n    border: 1px solid #5d5d5d;\n}\n\n.onset-body #controls button.sort.desc:active,\n.onset-body #controls button.sort.asc:active {\n    border: 1px solid #bbb;\n}\n\n\n/* Adds a little triangle marker indicating sort direction using a CSS :after\npsuedo-selector trick */\n.onset-body #controls button.sort.asc:after{\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #fff;\n    content: \"\";\n}\n\n.onset-body #controls button.sort.desc:after{\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #fff;\n    content: \"\";\n}\n\n.onset-body #controls .search-list {\n    width: 190px;\n}\n\n.onset-body #controls .search-list input.search{\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 3px 4px 3px 4px;\n    font-size: .8em;\n}\n\n.onset-body #controls .search-list .list-container {\n    width: 100%;\n    height: 456px;\n    overflow-y: scroll;\n    background-color: #fff;\n    font-size: .75em;\n}\n\n.onset-body #controls .search-list ul.list {\n    margin: 0;\n    padding: 0;\n}\n\n.onset-body #controls .search-list li {\n    position: relative;\n    padding: 3px 4px 3px 4px;\n    list-style-type: none;\n    cursor: default;\n}\n\n.onset-body #samples-btn {\n    position: absolute !important;\n    top: -50px;\n    right: 90px;\n}\n\n.onset-body #elements-btn {\n    position: absolute !important;\n    top: -50px;\n    right: 0px;\n}\n\n.onset-body #lists{\n    position: absolute !important;\n    right: 0px;\n    top: 80px;\n}\n\n\n.onset-body #samples-filters,\n.onset-body #samples-footer {\n    background-color: #9c9c9c;\n}\n\n.onset-body #samples-filters button {\n    float: left;\n    width: 57px;\n    height: 30px;\n    margin: 4px 3px 4px 3px;\n}\n\n.onset-body #samples-filters button.sort img {\n    position: relative;\n    left: -1px;\n    top: -1px;\n    width: 50px;\n    height: 30px;\n}\n\n.onset-body #samples-filters button.sort.asc img,\n.onset-body #samples-filters button.sort.desc img {\n    left: -1px;\n    top: 0px;\n}\n\n.onset-body #samples-filters button.sort.asc:hover img,\n.onset-body #samples-filters button.sort.desc:hover img {\n    left: -1px;\n    top: -1px;\n}\n\n.onset-body #samples-filters button.sort:after {\n    top: 13px;\n    left: 23px;\n}\n\n.onset-body #samples-filters button.sort:hover:after {\n    top: 12px;\n    left: 22px;\n}\n\n.onset-body #samples-footer button {\n    float: right;\n    width: 80px;\n    height: 30px;\n    margin: 4px 3px 4px 3px;\n}\n\n.onset-body #sample-count {\n    width: 80px;\n    margin: 0px 4px 0px 4px;\n    line-height: 38px;\n    text-align: center;\n    vertical-align: middle;\n    font-size: .75em;\n}\n\n.onset-body #samples .list li {\n    padding: 3px 4px 5px 4px;\n}\n\n.onset-body #samples .list li div.bar {\n    position: absolute; \n    bottom: 0px;\n    left: -4px;\n    height: 4px;\n    background-color: #d95101;\n}\n\n.onset-body #samples .list li button {\n    position: absolute;\n    top: 2px;\n    right: 4px;\n    width: 25px;\n    height: 20px;\n    font-size: 1em;\n    visibility: hidden;\n}\n\n.onset-body #samples .list li button:hover,\n.onset-body #samples-footer #add-all-btn:hover{\n    background: rgb(167,199,220); /* Old browsers */\n    background: -moz-linear-gradient(top,  rgba(167,199,220,1) 0%, rgba(133,178,211,1) 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(167,199,220,1)), color-stop(100%,rgba(133,178,211,1))); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  rgba(167,199,220,1) 0%,rgba(133,178,211,1) 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  rgba(167,199,220,1) 0%,rgba(133,178,211,1) 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  rgba(167,199,220,1) 0%,rgba(133,178,211,1) 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  rgba(167,199,220,1) 0%,rgba(133,178,211,1) 100%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7c7dc', endColorstr='#85b2d3',GradientType=0 ); /* IE6-9 */\n    border: 1px solid #7d7d7d;\n}\n\n.onset-body #samples .list li button:active,\n.onset-body #samples-footer #add-all-btn:active {\n    background: rgb(119,160,189); /* Old browsers */\n    background: -moz-linear-gradient(top,  rgba(119,160,189,1) 0%, rgba(146,179,202,1) 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(119,160,189,1)), color-stop(100%,rgba(146,179,202,1))); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  rgba(119,160,189,1) 0%,rgba(146,179,202,1) 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  rgba(119,160,189,1) 0%,rgba(146,179,202,1) 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  rgba(119,160,189,1) 0%,rgba(146,179,202,1) 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  rgba(119,160,189,1) 0%,rgba(146,179,202,1) 100%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#77a0bd', endColorstr='#92b3ca',GradientType=0 ); /* IE6-9 */\n}\n\n.onset-body #samples .list li:hover button{\n    visibility: visible;\n}\n\n.onset-body #controls .search-list li:nth-child(odd) {\n    background-color: #eee;\n}\n\n.onset-body #controls .search-list li:hover {\n    background-color: #c3d2ec;\n}\n\n.onset-body #list-btns, .onset-body #lists {\n    float: right;\n}\n\n.onset-body #list-btns button{\n    display: block;\n    width: 80px;\n    height: 40px;\n    margin: 0 10px;\n    margin-bottom: 10px;\n}\n\n.onset-body #list-btns label {\n    font-size: .8em;\n    color: white;\n}\n\n.onset-body #bands {\n    position: absolute !important;\n    width: 92px;\n    top: 0px;\n    right: 0px;\n    padding-right: 9px;\n    padding-bottom: 2px;\n    background-color: #222;\n}\n\n.onset-body #bands label,\n.onset-body #metric label {\n    margin-left: 11px;\n}\n\n.onset-body #bands-cb {\n    margin-left: 8px;\n}\n\n.onset-body #metric {\n    position: absolute !important;\n    top: 24px;\n    right: 0px;\n    padding-right: 15px;\n    padding-bottom: 0px;\n    height: 0px;\n    background-color: #333;\n}\n\n.onset-body #metric select{\n    width: 70px;\n    margin-left: 16px;\n    font-size: 0.8em;\n}\n\n.onset-body #zoom {\n    position: absolute;\n    top: 25px;\n    right: 0px;\n    width: 101px;\n    height: 20px;\n    background-color: #222;\n    color: #eee; \n    line-height: 21px; \n    vertical-align: middle;\n    text-align: center;\n}\n\n.onset-body #zoom-out-btn {\n    float: left;\n    width: 19px;\n    height: 100%;\n    border-right: 1px solid black;\n    background-color: #333;\n}\n\n.onset-body #zoom-out-btn.disabled,\n.onset-body #zoom-in-btn.disabled {\n    background-color: #222 !important;\n}\n\n.onset-body #zoom-out-btn:hover,\n.onset-body #zoom-in-btn:hover {\n    cursor: pointer;\n    background-color: #555;\n}\n\n.onset-body #zoom-out-btn:active,\n.onset-body #zoom-in-btn:active {\n    background-color: #333;\n}\n\n.onset-body #zoom-level {\n    float: left;\n    width: 59px;\n    height: 100%;\n    border-right: 1px solid black;\n    font-size: .7em; \n}\n\n.onset-body #zoom-in-btn {\n    float: left; \n    width: 20px; \n    height: 100%; \n    background-color: #333;\n}\n\n\n.onset-body #canvas {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n}\n\n.onset-body #canvas text{\n    font-size: .8em;\n    font-family: serif;\n}\n\n.onset-body #canvas text:hover{\n    cursor: default;\n}\n\n.onset-body #class-label.similar{\n    color: #d6e6f8 !important;\n}\n.onset-body rect.pixel.similar{\n    fill: #d6e6f8 !important;\n}\n\n.onset-body rect.pixel.hover{\n    fill: rgb(255,255,255) !important;\n}\n\n.onset-body rect.pixel.empty{\n    fill-opacity: 0.25;\n    fill: white !important;\n}\n\n.onset-body rect.pixel.null{\n    fill-opacity: 0;\n    fill: black;\n}\n\n.onset-body path.band.hover{\n/*    stroke: rgb(255,255,255) !important;*/\n}\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Hide from both screenreaders and browsers: h5bp.com/u\n */\n\n.onset-body .hidden {\n    display: none !important;\n    visibility: hidden;\n}\n\n/*\n * Hide visually and from screenreaders, but maintain layout\n */\n\n.onset-body .invisible {\n    visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.onset-body .clearfix:before,\n.onset-body .clearfix:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n\n.onset-body .clearfix:after {\n    clear: both;\n}\n\n/*\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n\n.onset-body .clearfix {\n    *zoom: 1;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEZAxoL0Sh7UAAAC5tJREFUeNrt3Vt24koMQFELe4r2/CdCdH86vXp13yS8UZX2HgFUTOm4gBALFJSZaRWYRUSEVaDcdWkJMPBBECAAwNAHMYAAgIc7ZebZMsA/IXBalkUUIwBwtw9OBeCJd2OWgBfc8Rv+cH0wiwCcAOCuH5wGgADA4AchAAIAwx9EAAgADH4QAiAAMPxBBIAAwPAHEQACAMMfRAACAAx/EAEIADD8QQQgAMDwBxGAAMDwB0QAAgDDHxABCAAMf0AEUJlfAwQAJwDg7h+cAiAAMPwBEcCUvAUAAE4AwN0/OAVAAGD4AyKAKXkLAACcAODu390/OAXACQAAIABw9w/Y83ExADBW5J+tAgIAABrzgRA+7wwc/0OXjd+HAVmWZbME2MhAOCMAwLCHO65JUcAw168loPqGZfDjdeV1hRMA3PHDUNevEwGq8i0ADH9wLSMAwIYJrmlaXJeWoLdqx5M2SrzevN5wAoC7JHCNgwAAAAQA7ozAtQ4CAAAQALgjAtc8CAAAQAAAgAAAAAQAACAA4Jl8GArXPggAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAoCi/R/2FzEyrADDBoIsw6wSAgQ8gCARB+wAw9AHEgAAw+AEQAm20+RDgvu9r/uJSB+DvG8PMzH3fVycA7vgBcCIgAAx+AISAADD4ARACAsDwB0AEjGSaDwH6gB8Az54zM31IMGb5o7g0AXAa0CgADH8ARECzADD8ARABzQLA8AdABDQLAMMfABHQLAAMfwBEQLMAMPwBEAHNAsDwB0AEPM4o/wgoXFIA0GywuvsHwClAswAw/AEQAY9X+i0Awx+AgZ08OABoJjPPlR9fFF44d/8ADK/qWwFOAACgY5i4+weAfqcATgAAwAmAu38A6HAK4AQAAJwAuPsHgA6nAE4AAKChSgHgB38AoNvQHfX4f6TffgaYiblxn80lZNgDzLIn+yyZADD4ARrv10LggrWq8CCq/qEMfoCxmS9f8y0Awx/AXt6QAHDBANjTBQAuFAB7uwB4gUrvz7hAAETAK+z7vr59PQSAAADowswpdALgDwGAvV4AAAACQBECYM8XAACAAAAABAAAIAAAAAHwBR8GAbD3CwAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAADgIlv3BcjMdBkA4AQAABAAAIAAAAAEAAAgAAAAAQAACAAAoIio8CB8Fx+AVsM34u3z1wkAADQkAACgoajyQLwNAECLwVvg+N8JAAA0JQAAoKGo9GC8DQDA1EO3yPG/EwAAcALgFAAAOtz9lzwBiAinEgDMNvzLzbaKw9YJAACzKTfbouxKeSsAgDnu/kvO2qi8aCIAAMP/OU7FF87nAQAYdfiXnmHVB6wTAABGVXqGlb/Djog4jmNzHQEwguM4tspH/7/n60BresrMs0sLgMI3radlkNPrGG1xfTAQgKLDf6iZGiMusggAwPBvGACfjz0zP1x2ABj8vQLAaQAAhn/XABACABj8jQNADABg6DcPADEAgKHfPACqB8LsFxiA/bcm/2sfAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAbrBZAi6Nxcw8j/BAI2JdluXD+lt/6w/fXCvdFyAz880v1rA+fdfX+lt/+4v1eVvVaiD+z77v6+ib3x8bzMn6W3/rD04AFOjkdz2j1771t/72GtekEwBsfs2em/X3GD03BAA2iGbP0fp7bJ4jAgAbQ7Pnav09Js8VAQAACADcEcz+nK2/x+I5IwAAAAGAO4HZn7v19xg8dwQAACAAAAABAAAIAABAAAAAAgAA+N5mCbjHu39Nq/tXmay/9bcL4QQAABAAAIAAAAAEAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAJYAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAsAQAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAAASAJQAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAALjPZgm4R2amVbD+1h+cAAAAAgAAEAAAgAAAAAQAACAAeIWICM/d+lt/648AAAAEAO4EPGfrb/2tPwIAABAAuCPwXK2/9bf+CABsDJ6j9bf+1h8BgA3Cc7P+1t9zQwBgo/CcrL/H6jlRhl8D5NsNY/RfOxt147P+1t/gRwBgI2y88Vl/62/w87TrpPsCVHhhj/hirbYhdtvwrL/1t4e4bp0A4IVj/bH+cDUfAgQAAQAACAAAQAAAAAIAABAA+DsA/Gzf99UqvJ//A1Dk+7y+VgTYd+277jwBAAEAAAiAh4qIEmsw+o+OAIy013nbVQAsy7IYvAAIAJQxgD1OAAAAAgCFDGBvEwCT8GEQAHu+AEApA9jTBABeMAD2MgEAAJdy1O6Po1Rv/gN5rwqwp9pTnQB4AQHYuxAAXkgA9ixu4ihkoAvX0RVgD7WHOgHwwgKwR+EEoNtFrGQBe6Y90wmAFxyAvQgnAN0uamUL2CPtkdfaLME8L0QXOWDw4wTgAWuTmR9DPnAhABj89kMnALdf7zO8UF38QLebIJwAtK5eZQzY4+xxTgBo98IHwAmAQQnQbbi5+/+R/wMAwGzDf7UKAkBJAvTjw4uXzDZLcDlvBQC4YXMCAAC1hr+jfwGgLAEacvR/zUyzBNfzVgCAGzQBIAIAMPyH4y2A2y84awdgLxYAHQ8BLAGAvXjYeLIEd1553goAeNfdvxkmAEQAgOGPABABAIY/AkAEABj+CAARAGD4t+dbAE+4QI/j2KwEwGMcx7EZ/k4AhoqrzDxbBoC7bqpOi6/6CYAReUsA4Obhb0YJABEAYPjzSD4D8KIL2ecCAH7m/X4nAE4DANz1IwBEAIDhjwAQAgAGPwJACAAY/AgAIQBQd/D7Xr8AQAgA7vgRAAgBwODnZfwfgOIvHP9DABjN53f5DX8nADgVANztIwAQBICBz7t5C2CCF+CfvF0APGmvWf/eb6zK2P4D56OGxMbi0O4AAAAASUVORK5CYII="

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nO3deZhddZ3n8c/33KpLClIJi1sCLoTd6sS699xKjKBGYWhRgRnHPOKCoj622j0qjnbbI6MO7TKI4qNjt612u+ugjW0LLaCAUNJGqNQ9dZMKQZCw6ZiSNSRASC33/OaPFBgwSyWput9z6/d+PQ9/8pxPTir3vOvczQQUUG9v78EdHR3HSjo+hHB8COHYJEmeG0IoS5or6SBJZUmHuA5F7DZJGpP0qKRHQgijkn6bJMmtkm6RdGsI4dYsyzZ7jgR2xrwHAJJUqVQWlkqlUySdGEI4RdIi703ANLrDzK4JIVxTKpWuXb169QPegwACAG7SNJ1vZq8NIbxJ0kmSOrw3AS0wIek/Qgjf6ezs/NeBgYEt3oMQJwIArZakaXqapDdLOkPSHOc9gKfHzOwySd+u1+tXSgregxAPAgAtsWLFio4tW7a8zcz+VtKR3nuAArozhHDBvHnzvt7f3z/hPQazHwGAmZZUq9XXm9l5kk7wHgO0gfVm9ol6vf4DcUcAM4gAwIyp1WonhhC+JGmJ9xagDa1JkuSvBgcHf+U9BLMTAYBpt2TJkmd0dHR81szeJH7GgP0RQgjfDSF8oNFo3Oc9BrMLD86YVrVa7bQQwjckPdN7CzCL/EHSW7Isu8p7CGYPAgDTYvny5V2jo6NfMbOzvbcAs1SQ9MXNmzf/zYYNG0a9x6D9EQDYb729vc8rlUrfl7TMewsQgVWS3pBl2W+9h6C9EQDYL5Mv9PuJpIO9twAR2ZQkyat5gSD2R+I9AO2rVqu9MoRwlbj4A612SJ7nV1Wr1Vd4D0H7IgCwT6rV6ltDCJdKOtB7CxCpg8zs0lqtdpb3ELQnngLAXqtWq68xs3+RVPLeAkATZvbaer1+qfcQtBcCAHtl8m1+l0rq9N4C4AljIYQzhoaGfuY9BO2DAMCU9fX1vSjP86vFbX+giB4OIbxsaGgo8x6C9kAAYErSNH2OpNXiA36AIts4MTGxdO3atb/3HoLi40WA2KPly5d3SbpMXPyBolvY0dHxo56enrL3EBQfAYA9Gh8f/4ykF3jvADAlS7u6uj7tPQLFx6u4sVvVavWNki7w3gFgryxbsGDBupGRkV97D0Fx8RoA7FKlUnl6kiS3SDrUewuAvXZfqVQ6YfXq1Q94D0Ex8RQAdilJks+Liz/Qrp7ebDY/6z0CxcUdAOxUpVI5OUmSa7x3ANgvQdLJWZZd5z0ExUMA4E8cffTRB8yfP3+dpGO8twDYb+slVbIsG/cegmLhKQD8ifnz579VXPyB2aLHzM72HoHi4Q4AnqSnp6c8Z86cDZKe7b0FwLS5s7u7+9j+/v4J7yEoDu4A4Em6urrOFhd/YLY58pFHHnmD9wgUCwGAJ6xYsaIjhPA/vHcAmH6T/7Z5zMcT+GHAE7Zs2XKapKO8dwCYEcfXarU/9x6B4iAA8AQze6v3BgAzJ4RwjvcGFAcvAoQkaenSpYc1m82NkvgSEWD22tZsNhesWbPmIe8h8NfhPQDFMDEx8RozK/LFf5uZXR1C+Hme541yuXzr1q1bx9atW7fJexjitXjx4kMOPPDAcp7nxzebzYqZnSLpFEkHeG/bhTmlUulMSd/yHgJ/3AGAJKlarfab2Uu9d+zE3ZIuajab3+G3FrSDxYsXH1Iul8+W9EEV8x01V2dZdqr3CPgjAKBly5bNm5iYeEDFuiM0KumTmzdvvnDDhg2j3mOAvbVixYo5W7Zs+ZCZnSep03vPDsbGx8cPHR4eftR7CHwV6QEfTsbHx19iZkX6Wbg7z/PXNhqNuvcQYF/19/dvk3R+pVK5LkmSH0p6uvemSeWOjo6TJP3Mewh88S4AyMxe5r1hB2slLefij9mi0Whcn+d5n6SbvLfs4OXeA+CPAIBUnAeDDePj46dmWTbiPQSYTo1G4+48z18t6V7vLZOKFP1wwmsAIjf5/P8m+cfgtjzPX9hoNNY67wBmTKVSecnk12x7vyagOT4+Pp/XAcTN+0EfzvI8P07F+Dn4X1z8Mds1Go3rQwgXeu+QVCqXy8d6j4CvIjzww1Gz2TzOe4OkW7u7uy/yHgG0QldX16cl3eO9Q1IR/u3DEQEQOTNzfxAIIXyarylFLFatWvWwpPO9d0ze/UPECIDIhRBOcJ6wad68eRc7bwBaqru7+xuSNntuSJLE+98+nBEAkTOzw50nXDH5fmkgGpM/867vww8heP/bhzMCAHM9D25m13keH/BiZtc6T+h2Pj6cEQBwfRDI83yN5/EBRw3n489zPj6cEQDwvgNwt+fxAS9jY2N3OU9w/bcPfwQAXO8AbNu2bYvn8QEvW7dudX0RoLgDED0CAGXPg69fv37M8/iAlwJ8y+UBzseHMwIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiZN4DiipN0848z48plUonSDo+hPB8SYskzZE0T9KB2v592oc4zgSAmG2StOXx/0IIW8zsLjO7LYTwm1KpdFuz2bwzy7Jx552FRABMWrp06WHNZvPlkk6SdKKkXkkl31UAgP00IWmtpFWSflkul39+ww03POi8qRCiDoDly5d3jY6Onp4kyZtCCK+Q1Om9CQAwo8YkXWFm3507d+7l/f3927wHeYkyAPr6+vpCCO8OIbxG0nzvPQAAFw9J+qGkf8yybMh7TKtFEwArV64s3XnnnW8MIbxPUtV7DwCgUDIz+z9HHnnk9y655JKm95hWiCIAqtXqa8zsfEl/5r0FAFBoa8zsvHq9foX3kJk2qwOgVqudKOnzIYSa9xYAQFu5zszeW6/Xb/IeMlNmZQD09vYeXCqVLpT0NvFKfgDAvhk1s4vmzp378dn4YsFZFwDVavUVZvZNSc/03gIAmBXuNLOz6/X6Ku8h02nWBEBPT095zpw5n5H0Hs2iPxcAoBAmzOyTRx555Mdny4sEZ8WFcvKW/79Kern3FgDA7BVCuLKrq+t1q1ateth7y/5q+wBYunTpsc1m8wpJR3lvAQBE4eY8z1/ZaDTu9h6yP9o6AGq12okhhEslHea9BQAQlT+EEF49NDSUeQ/ZV20bAJVKZXmSJD/V9i/mAQCg1R6SdHK7fopgW34dcF9f30uTJLlGXPwBAH4OlnRttVpNvYfsi7a7A5Cm6TJJV4mLPwCgGO7P8/yljUbjZu8he6OtAiBN06MkDYjn/AEAxXJ3R0fHsoGBgXu8h0xV2zwFkKbpfEmXi4s/AKB4njsxMfHjo48++gDvIVPVLgFgkr4l6TjvIQAA7MIL582b9wXvEVPVFp+Tn6bpByS913sHAAC7Y2a1ww8//I6NGzcOe2/Zk8K/BqBaraZmdqOkDu8tAABMwdYQwguGhoY2eA/ZnUI/BZCmaaeZfU1c/AEA7ePAyS+lK/Q1ttDjJH1Q0gu8RwAAsJdOrNVqf+k9YncK+xTA0qVLj2w2m+sldXlvAQBgH2zJ8/yERqOx0XvIzhT2DsDExMSnxMUfANC+5pnZx71H7Eoh7wCkaVqVVFdB9wEAMEXNPM+XFPFTAgt5ByCE8Alx8QcAtL9SkiSf8B6xM4W7yNZqtaUhhAHvHQAATJOQ53ml0Wis9R6yo8LdAcjz/P3eGwAAmEZmZoX7MLtC3QGoVCoLkyS5S1Kn9xYAAKbRY+Vy+YgbbrjhQe8hjyvUHYAkSd4uLv4AgNmna2xs7GzvETsqUgCYpLd7jwAAYIYU6hpXmKcAKpVKLUmSQe8du7HNzK4OIfw8z/NGuVy+devWrWPr1q3b5D0MAGK0ePHiQw488MBynufHN5vNipmdIukUSYX9Sl4zO75er9/qvUMq0GfsJ0lyhveGXbhb0kXNZvM7a9asech7DABgux1+AbtH0i8kfX7x4sWHlMvls7X9o+Sf7TZu186UdKH3CKlAdwDSNG1I6vXesYNRSZ/cvHnzhRs2bBj1HgMAmLoVK1bM2bJly4fM7DwV6LVlIYRfDQ0Nnei9QypIAKRp+hxt/027KO7O8/y1jUaj7j0EALDvKpXKS5Ik+aGkp3tvmZR3dHQsHBgYuMd7SFFeBPgy7wE7WCtpORd/AGh/jUbj+jzP+yTd5L1lUjI+Pr7Ce4RUkAAwsz7vDZM2jI+Pn5pl2Yj3EADA9Gg0Gnfnef5qSfd6b5GKc80rRABIWuY9QNLWPM/PHB4eLsQPCABg+jQajbtDCGdq++u7vBXhmucfAD09PeUQwmLvHZL+rojf1gQAmB5DQ0M3hhA+671DUmXlypUl7xHuAdDV1dUj//ds3trd3X2R8wYAwAzr6ur6tLa/bdDTQbfffvuxzhv8A0DSc7wHhBA+3d/fP+G9AwAws1atWvWwpPO9d6gA1z73AMjz/AjnCZvmzZt3sfMGAECLdHd3f0PSZucZBICZHe484Yr+/v5tzhsAAC0y+Zj/M88NSZJ4X/v8A0CS60kws+s8jw8AaD0zu9bz+CEE77vfhQiA13se3MyGPY8PAGi9PM/XOk9w/2rgIgSA62c053l+p+fxAQCtNzExcYfzhLLz8QsRAK62bdu2xXsDAKC1tm7d6v0iQHfRB8D69evHvDcAAFqLb3klAAAAiBIBAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQh3eAySNS+r0OniapsHr2ACAaI16DyjCHYCHvQcAANBi7tc+AgAAgNZzv/YVIQAe9B4AAEArmdkD3huKEAC/9h4AAEAr5Xnufu0rQgDc6j0AAIBWSpLE/drnHgBmtt57AwAArRRCcL/2uQdAkiT9knLvHQAAtEiz2Wz2e49wD4DVq1c/IGmd9w4AAFpkzZo1ax7yHuEeAJN+7j0AAIBWCCEU4ppXiABIkuQ73hsAAGiFEMK3vDdIBQmAwcHBNZKGvXcAADDDGo1G42bvEVJBAmBSIYoIAIAZVJhrXZEC4MuS7vMeAQDADBnp7u7+iveIxxUmALIs22pmX/DeAQDATDCzz/f392/z3vG4wgSAJI2Ojn5J3AUAAMw+fyiVSl/2HrGjQgXAunXrNpnZB7x3AAAwnczs/QMDA1u8d+zIvAfshNVqtVUhhOXeQwAA2F9mdn29Xl8hKXhv2VGh7gBMCiGEs8TXBAMA2t8DZvYmFeziLxUzAJRl2W9DCOeogCcMAIApCpLeMjg4+DvvITtT8h6wKyMjI79ZuHDhIZJe6L0FAIB9cFGWZf/gPWJXChsAkjQyMvKzBQsWPNvMKt5bAADYC1/Lsuy93iN2p5BPAewgjI6OvjuEcKX3EAAApuhySe9WwZ/GLnoAaP369WNHHXXU6ZL+yXsLAAC7Y2ZfXbRo0ZlZlo17b9mTIr4NcFeSWq12UQjhXO8hAADsxEVZlv21Cv6b/+PaKQAkSbVa7YwQwjclHeK9BQAASQ+GEM4ZGhr6d+8he6PwTwE8Vb1ev0zSi8ys7r0FABC91aVSaXm7XfylNrwDsAOr1WpnhxA+I+kZ3mMAAFG5R9J7siy7xHvIvir02wD3ZOPGjWuf9axnfcvMJiQtkTTHexMAYFbbbGafk/TmLMva+k50O98BeJI0TedLepekcyQd77sGADDL3GJm3wghfCXLss3eY6bDrAmAHdVqtaV5np9lZqdK6vHeAwBoSzdJuirP84sbjUZb/7a/M7MyAHbU19f3rGaz+VIz6wkhHGNmx0h6mqSDJc13ngcA8PWQpM2S7g8h3GZmvwkhrC+VStcPDg7+wXvcTJr1AbAnaZq6vl8zy7Lo/w4AxInHX19t9zZAAACw/wgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAAR6vAegLaRpGn6ohDCyWZWkXScpLKkQ5x3bZI0JukWSY0kSa4ZHBy8UVLuO2vacf59cf4x65j3AG9pmgbP42dZVui/gzRNnybpPZLeLulw5zlT9f/M7GtJknxx9erVD3iP2R+cf1+c/5nF468vngLATq1cubJUq9XeL+kOSR9V+zz4SdIRIYSPNZvNO9I0fZ/a8Oec8++L848YRF0/EgW6M0uWLHlGZ2fn9yW9zHvLNLm8o6PjDQMDA1u8h0wF598X5791ePz1RRniSXp7e4/p7Oy8QbPnwU+SXjUxMXFjmqZHeQ/ZE86/L84/YkIA4AnLli07olQqXSNpkfeWGXCCpMt7e3sP9h6yK5x/X5x/xIYAgCSpp6enPDEx8WNJz/HeMoOO6+jo+OGKFSsK9+4Xzr8vzj9iRABAkjRnzpwPSUq9d8y0EMLJjzzyyHu8dzwV598X5x8xIgCgpUuXHinpPO8drRJC+Mjy5csP9d7xOM6/L84/YkUAQM1m828kHeC9o4UOGRsbK8wDPuffF+cfsSIAInfiiSd2S3qz9w4H7+zp6ZnrPYLz74vzj5gRAJF77LHHTpN0oPcOBwcdcMAB/8l7BOffF+cfMSMA8HLvAV6SJDnZe4M4/944/4gWARC5yS82iVXVewDn3xfnHzEjAHCk9wAvIYQi/NmLsMEF599XQc4/HBEAmO89wFERPhWN8++L849o8YlQKO/P/zw2Nub6fuJyufzgfvzvc6ZtyL7j/Pvi/CNaBAD2y7p16zZ5Hj9NZ/2Ht+0W598X5x/tjKcAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARKjDewDcjUvq3Nf/OU3TB6dxS6uNeQ8Q598b5x/RIgDwsKRD9+P/P2S6hjjY7D1AnH9vnH9Ei6cAcKf3AEdF+LMXYYOXIvzZi7DBS8x/dogAgHST9wBH67wHiPPvjfOPaBEAuM57gJcQQhH+7EXY4ILz76sg5x+OCAD8WNJj3iMcbO3s7Px37xHi/Hvj/CNaBEDksizbrO0PglExsx8NDAxs8d7B+ffF+UfMCAAohHCBpNx7Rws1m83m//Ye8TjOvy/OP2JFAEBDQ0PDZvaP3jta6O8bjcbN3iMex/n3xflHrAgASJJCCOdJ+rX3jhZYP2fOnI94j3gqzr8vzj9iRABA0vbnQpvN5isl3ee9ZQbdl+f5q1atWvWw95Cn4vz74vwjRgQAnrBmzZq7QghnSZqNLw7aLOl1jUbjbu8hu8L598X5R2wIADzJ0NDQtZKqktZ7b5lGNyVJUs2yrPDve+b8++L8IyYEAP5ElmW3j42NvTiE8HVJTe89+yGEEL7TbDZfPDg4eIf3mKni/Pvi/CMW5j3AW5qmwfP4WZYV+u+gUqk8P0mST0k6Xe0TjLmkK0IInxwaGrrRe8z+4Pz74vzPLB5/fUX9h5f4AZyqZcuWHTExMfFfzezkEEJF0hHem57idyGEhpldMzEx8aO1a9f+3nvQdOL8++L8zwwef31F/YeXpDRNJySVHCeUsywbdzz+PlmyZMlBIYSy9w5JMrOx4eHhR713tBLn3xfnf/8dffTRB8yfP3+b44SJLMs6HY/vrsN7QAGMSeryOni5XO6W9KDX8ffV5ANO2z3ozBacf1+c//03f/78bucJo87Hd9cuz2nNpDHPg2/bts37HwEAtFypVPJ+7CMAvAcUwFbPg5dKpUM9jw8AHsbHxw9znuD62F8EBID0gOfBQwgneB4fADyUSiXvxz7Xx/4iiD4AQgjePwTHOR8fAFouz3Pvxz7vx3530QeApPs9Dx5C6PE8PgB4MDPvxz7Xx/4iiD4AzOwu5+OvEH8PACKycuXKkqQVnhtCCHd5Hr8IuPBI3l+OcVilUlnsvAEAWub222/vlXSw5wbvX/6KIPoAKEIFJklysvcGAGiVIjzmEQAEgEqlUhG+9ets7wEA0CohhLd4bzCzm7w3eIv+o4AlWZqmD0ma5zkiz/PeRqOx1nMDAMy0NE2rkjLnGZuyLIv+M1iivwMgKZiZ+10AM3MvYgBogSI81rk/5hcBAbDdgPcAM3vnkiVLnuG9AwBmSqVSWSjpL7x3qACP+UVAAEjK8/wG7w2SDiyXy+/zHgEAM6VUKp0raY73jhDCKu8NRUAASCqVSkUIAIUQ/pK7AABmozRNF4QQ3uW9Q5LM7EbvDUVAAEgaHBz8naQN3jskHVwuly/wHgEA083MLpTk/Q2AknRLlmUj3iOKgAD4oyu9B0hSCOGcvr6+F3nvAIDpUqlUXhJCeKP3jklXeA8oCgLgj37iPWCS5Xl+8fLly6N/iwqA9pem6dOSJPmeCvK28xDC5d4bioIAmNTd3X29pC3eOyY9Z3x8/EveIwBgP5mZfUXSEd5DJm0aHR39pfeIoiAAJvX3928zs8u8dzwuhPC6arV6rvcOANhXtVrtr0MIr/HesYNL169fP+Y9oigIgCe72HvAjszsc7Va7e3eOwBgb1Wr1XeEEAr1ouYQwve9NxQJAbCDxx577BpJ93rv2IGFEL5Uq9Ve6T0EAKaqWq2ebmb/oII87z9pxMyu9R5RJATADtavXz9mZv/sveMpyiGEy6rV6ju8hwDAnqRp+i4z+zdJnd5bnuKfsywb9x5RJATAU+R5/g1JwXvHU5TM7Mu1Wu393kMAYFfSNP2QpC9JKnlveYo8SZJveo8omiLdnimMNE1/LOlM7x07E0K4bHx8/Jx169Zt8t4CAJK0fPnyQ8fGxr4t6VXeW3bh37IsK9KLEQuBOwA7kef5F7037IqZnVEul2/o6+vr894CANVq9YVjY2MDKu7FX0mSfMF7QxFxB2AX0jRtSOr13rEbuaSvjo2NfZi7AQBabenSpYc1m80LJL1NBf5l0szq9XqdX5h2omjP0xTGggUL7jWz13nv2A2TVCuVSm9fuHBhx8KFC9eNjIyMeo8CMLv19vYefPjhh38whPA9SSep4L9IhhDeOTIy8hvvHUVU6L84Z1ar1VaHEGreQ6Zos6QvS/pmlmW3eI8BMLtUKpXnl0qlc0II75Q0z3vPFN2YZdly7xFFRQDsRpqmp0r6mfeOvRVCGEyS5GIzu2pwcHC99x4AbclqtVpPCOHPJb1eUuo9aG+FEE4eGhrivf+7QADsQZqmP1GBX9wyBX8ws1+EEG42s9/keX5bCOH+JEkeyrJss/c4AL56e3sPNrP5Zva0JEmODSEcI6lH0kslPdN53j4zsx/U6/WzvHcUGQGwB319fYvyPF8vaY73FgDAlDzU0dFx/MDAwD3eQ4qMFwHuwcaNGzctXLhwrra/2KbzblMAAAPmSURBVAUAUHBm9uHBwcFrvHcUXWHfulEk27Zt+5ikm713AAD2aHW9Xud9/1NAAEzB5HcE/JWK9xHBAIA/ys3sv2v756RgD3gKYIo2btx418KFC7vEUwEAUFQfy7Lsu94j2gV3APbOR0IIg94jAAB/4uosyz7pPaKdEAB7Icuy8SRJ3ibpUe8tAIAn3DcxMfFWcet/rxAAe6ler99kZm8UrwcAgCJoJkmycu3atb/3HtJueA3APti4ceOtk28NfJH3FgCImZldUK/Xv+69ox0RAPtoZGTkmoULFz5Xxf7GQACYtUIIX8+y7FzvHe2KpwD2XZD0F2b2U+8hABCbEMKVZvYu8XTsPuOjgPdTmqYHmtk1IQS+cQoAWsDMbgghnJJl2VbvLe2MAJgGaZo+TdIvJR3nvQUAZrlbJZ2UZdn93kPaHU8BTIMsy+5vNpunS7rLewsAzGJ3NZvN07n4Tw8CYJqsWbPmtlKpVAsh/Mp7CwDMNiGEX5XL5XTNmjW3eW+ZLXgKYJotWbLkoM7Ozh9IepX3FgCYJX4yPj5+1vDwMB/CNo24AzDNhoeHH120aNGZkv7JewsAtDsz++qiRYv+Mxf/6ccdgJmTpGn6CUl/K84zAOytXNKnsiz7qHir34zgwjTDarXaihDC/5W0wHsLALSJkSRJXj84OPgL7yGzGQHQAkuWLHlGR0fH98zsFO8tAFBwV+d5/sZGo3Gf95DZjtcAtMDw8PC9Rx111CvM7HzxbVUAsDO5mZ2/aNGi07j4twZ3AFosTdNTJf29pGO8twBAQdyaJMl/GxwcvMZ7SEy4A9BiWZZd1d3d/XxJ50ra4r0HABxtkXRud3f3n3Hxbz3uADiqVCoLzewCMzvbewsAtFAIIXzXzD6UZdmI95hYEQAFUKvVXhlC+KikZd5bAGCGDZnZ/6zX61d6D4kdAVAg1Wr15UmSfDiEcLL3FgCYZkOSPp5l2aXiff2FQAAUUK1WWxpC+LCkM8TfEYD2lUu6QtLnsiy7znsMnoyLS4GlabpA0pslvUPSUc5zAGCqbtf2j0P/Ns/xFxcB0AZWrlxZuuOOO06WtFLSf5F0mPMkAHiqByT9KEmSf3ne85533SWXXNL0HoTdIwDaTJqmnZJOCiG8wsxOk7TYexOAaA1LutLMfjp37txf9vf3T3gPwtQRAG1u8mOGT0qS5MWSloUQlkg6yHsXgFnnUTMbzvP8Rkn/MTExsWp4ePhe71HYdwTALDP5dMEx2n5n4Llm9rwQwnMlHTz533xJc7U9Esp+SwEUxJikRyU9IukhSZslPRRCuMvM7jazuyStq9frt4mPMp9V/j/rqjBa4bLViQAAAABJRU5ErkJggg=="

/***/ },
/* 8 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
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
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
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
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = main;
	
	var _jquery = __webpack_require__(10);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _data2 = __webpack_require__(12);
	
	var _datastructs = __webpack_require__(13);
	
	var _pixellayer = __webpack_require__(15);
	
	var _list = __webpack_require__(16);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _plugins = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*******************************************************************************
	main.js
	*******************************************************************************/
	// TODO Refine mask for bands (currently just a rectangle over the pixel area)?
	// TODO Calculate similarities up front (w/ loading screen?)
	// TODO Filter based on similarity?
	// TODO "Overview" mode
	// TODO Be able to select which bands to show based on sample
	// TODO Better positioning when composites are split and layers are added **
	// TODO Refine dropping rules? How do I create (X || Y) && (Z || A) && (B || C)?
	// TODO semantic zooming
	// TODO zooming with buttons should go from center of canvas
	
	function main() {
	    // Global functions used to customize PixelLayer display and behavior
	    var valueAccessor = function valueAccessor(d) {
	        return d.value;
	    };
	    var groupAccessor = function groupAccessor(d) {
	        return d.class;
	    };
	    var pixelColor = function pixelColor() {
	        // 'this' is the PixelLayer
	        var count = this.expression().count();
	        var not = this.expression().not();
	        if (this.__old__) {
	            return d3.rgb(239, 72, 95);
	        } else if (not) {
	            return "#ff983e";
	        } else if (count == 1) {
	            return d3.rgb(79, 137, 207);
	        } else if (this.operator() === "OR") {
	            return d3.rgb(255, 255, 0);
	        } else {
	            return d3.rgb(156, 247, 71);
	        }
	    };
	    var labelColor = function labelColor() {
	        // 'this' is the PixelLayer
	        if (this.expression().not()) {
	            return "#ff983e";
	        } else if (isComposite(this)) {
	            return d3.rgb(156, 247, 71);
	        } else {
	            return d3.rgb(79, 137, 207);
	        }
	    };
	    var bandColor = function bandColor(d) {
	        var baseColor = d3.rgb(84, 84, 84);
	        if (d.a.faded() || d.b.faded()) {
	            return d3.interpolateRgb(d3.rgb(0, 0, 0), baseColor)(0.3);
	        }
	        return baseColor;
	    };
	    var bandScale = d3.scale.linear().domain([0, 1]).range([2, 35]).clamp(true);
	    var zoomRange = [0.05, 20];
	    var zoomBtnScale = d3.scale.pow().domain([0, 20]).range(zoomRange).clamp(true).exponent(2.5);
	
	    /**
	    #### isComposite(PixelLayer)
	    Returns true if this PixelLayer contains more than one data set
	    **/
	    function isComposite(p) {
	        return p.expression().count() > 1;
	    }
	
	    /**
	    ## ListController(element, dataSource)
	    The controller for the lists on the page. Populates the lists from the data
	    source.
	    **/
	    var ListController = function ListController(el, ds) {
	        var _controls = d3.select(el);
	        var _elementBtn = _controls.select('#elements-btn');
	        var _elementList = _controls.select('#elements');
	        var _caseBtn = _controls.select('#samples-btn');
	        var _caseList = _controls.select('#samples');
	        var _caseCount = _controls.select('#sample-count');
	        var _addAllBtn = _controls.select('#add-all-btn');
	        var _caseListObj = null;
	        var _dataSource = ds;
	        var _obj = {};
	
	        var _listeners = {
	            'mouseenter.element': [],
	            'mouseenter.case': [],
	            'mouseleave.element': [],
	            'mouseleave.case': [],
	            'click.element': [],
	            'click.case': [],
	            'add.case': [],
	            'populated.elements': [],
	            'populated.cases': [],
	            'searched.elements': [],
	            'searched.cases': []
	        };
	
	        /**
	        #### callListeners(event, this, [arg], ...)
	        Calls the listeners of an event. Follows the same format as function.call().
	        **/
	        function callListeners(evt, thisObj) {
	            var args = Array.prototype.slice.call(arguments, 2);
	            for (var i = 0; i < _listeners[evt].length; i++) {
	                _listeners[evt][i].apply(thisObj, args);
	            }
	        }
	
	        /**
	        #### applyListeners(event, this, [arg, ...])
	        Calls the listeners of an event, except it takes an array of arguments
	        instead of positional arguments, like function.apply()
	        **/
	        function applyListeners(evt, thisObj, args) {
	            for (var i = 0; i < _listeners[evt].length; i++) {
	                _listeners[evt][i].apply(thisObj, args);
	            }
	        }
	
	        /**
	        #### populateElements(elements)
	        Populates the list of elements.
	        **/
	        function populateElements(elements) {
	            var options = {
	                valueNames: ['name'],
	                page: elements.length
	            };
	            var items = _elementList.select('.list').selectAll('li').data(elements);
	
	            var newItems = items.enter().append('li').on('mouseenter.el', function (d) {
	                callListeners('mouseenter.element', this, d);
	            }).on('mouseleave.el', function (d) {
	                callListeners('mouseleave.element', this, d);
	            }).on('click.el', function (d) {
	                callListeners('click.element', this, d);
	            });
	
	            newItems.append('span').classed('name', true).html(function (d) {
	                return d.value;
	            });
	
	            var elementList = new _list2.default('elements', options);
	            elementList.sort('name');
	            callListeners('populated.elements', _obj, elementList);
	
	            elementList.on('searchStart', function () {
	                var matching = elementList.matchingItems;
	                callListeners('searched.elements', _obj, matching);
	            });
	        };
	
	        /**
	        #### populateCases
	        Populates the list of cases.
	        **/
	        function populateCases(cases) {
	            // Create a searchable, sortable list using list.js and d3
	            var options = {
	                valueNames: ['name', 'count', 'class']
	            };
	            var scale = d3.scale.linear().domain([0, d3.max(cases, function (d) {
	                return d.set().count();
	            })]).range([0, 100]);
	
	            // Populate the list of samples
	            var items = _caseList.select('.list').selectAll('li').data(cases);
	            var newItems = items.enter().append('li').on('mouseenter', function (d) {
	                callListeners('mouseenter.case', _obj, d);
	            }).on('mouseleave', function (d) {
	                callListeners('mouseleave.case', _obj, d);
	            });
	
	            newItems.append('span').classed('name', true).html(function (d) {
	                return d.label();
	            });
	            newItems.append('span').classed('count', true).classed('hidden', true).html(function (d) {
	                return d.set().count();
	            });
	            newItems.append('div').classed('bar', true).style('width', function (d) {
	                return scale(d.set().count()) + "%";
	            });
	            newItems.append('button').attr('title', "Add").html("+").on('click', function (d) {
	                callListeners('add.case', _obj, d);
	            });
	
	            // It appears that list.js is storing some things when a List
	            // object is created, preventing things from working correctly if
	            // you attempt to just re-create a List object where there was an
	            // old one. Therefore, we must only create the List object once,
	            // but we are free to completely replace the HTML with the original
	            // values when the 'Def.' button is clicked
	            if (!_caseListObj) {
	                _caseListObj = new _list2.default('samples', options);
	                _caseList.select('.clear-sort').on('click', function (d) {
	                    d3.selectAll('#samples .sort').classed('asc', false).classed('desc', false);
	                    d3.selectAll('#samples .list li').remove();
	                    populateCases(cases);
	                });
	
	                var matching = _caseListObj.matchingItems;
	                var str = matching.length + " sample" + (matching.length == 1 ? "" : "s");
	                _caseCount.text(str);
	
	                _caseListObj.on('searchComplete', function () {
	                    var matching = _caseListObj.matchingItems;
	                    var str = matching.length + " sample" + (matching.length == 1 ? "" : "s");
	                    _caseCount.text(str);
	                    callListeners('searched.cases', _obj, matching);
	                });
	            }
	        }
	
	        /**
	        #### .init()
	        Initializes the controller and lists
	        **/
	        _obj.init = function () {
	            var elements = _dataSource.elements().elements();
	            populateElements(elements);
	            populateCases(_dataSource.cases());
	
	            // Hook up the list buttons
	            _caseBtn.on('click', function () {
	                _elementList.classed('hidden', true);
	                _caseList.classed('hidden', function () {
	                    return !d3.select(this).classed('hidden');
	                });
	            });
	            _elementBtn.on('click', function () {
	                _caseList.classed('hidden', true);
	                _elementList.classed('hidden', function () {
	                    return !d3.select(this).classed('hidden');
	                });
	            });
	            _addAllBtn.on('click', function () {
	                var cases = _caseList.select('.list').selectAll('li');
	                var delta = 1.00 / cases[0].length;
	
	                cases.each(function (d, i) {
	                    callListeners('add.case', _obj, d);
	                });
	            });
	
	            return _obj;
	        };
	
	        /**
	        #### .on(event,function)
	        Attaches an event listener for events from this controller.
	        **/
	        _obj.on = function (e, f) {
	            _listeners[e].push(f);
	            return _obj;
	        };
	
	        return _obj;
	    };
	
	    /**
	    ## Controller(canvas, trash, bandsCB, zoom, DataSource)
	    The main controller for the page.
	    **/
	    var Controller = function Controller(canvas, trash, bandsCB, zoom, dataSource) {
	        var _canvas = canvas;
	        var _trash = trash;
	        var _data = dataSource;
	        var _bandsCB = bandsCB;
	        var _zoomDiv = zoom;
	        var _obj = {};
	
	        var _pixelLayers = [];
	        var _dirtyLayers = [];
	        var _similarityBands = [];
	        var _masks = [];
	
	        var _trashBounds = null;
	        var _overlap = null;
	        var _trashOverlap = false;
	
	        var _zoom = d3.behavior.zoom().scaleExtent(zoomRange);
	        var _zoomScale = _zoom.scale();
	        var _zoomPan = _zoom.translate();
	        var _zoomThrottle = null;
	
	        var _selection = [];
	        var _cleared;
	        var _jaccard = false;
	
	        /**
	        #### .onMousedown()
	        Handles the mousedown event from a PixelLayer.
	        **/
	        _obj.onMousedown = function () {};
	
	        /**
	        #### .onMouseup()
	        Handles the mouseup event from a PixelLayer.
	        **/
	        _obj.onMouseup = function () {};
	
	        _obj.onMouseEnter = function () {};
	
	        _obj.onMouseLeave = function () {
	            if (_selection.length >= 1) {
	                d3.select('#element-label').html(_selection[4]);
	                d3.select('#class-label').html(_selection[5]).classed("similar", true);
	            }
	        };
	
	        /**
	        #### .onCaseMouseenter(case)
	        Handles the mouseenter event for a case
	        **/
	        _obj.onCaseMouseenter = function (c) {
	            if (_selection.length >= 1) {
	                return;
	            }
	            // Find the pixel layers that contain the data case and fade the
	            // others that do not contain it.
	            _pixelLayers.forEach(function (p) {
	                if (!p.faded() && !p.expression().contains(c)) {
	                    p.fadeOut(0.4);
	                }
	            });
	
	            d3.selectAll('path.band').each(function (d) {
	                // Bring the non-faded bands to the front
	                if (d.a.faded() || d.b.faded()) {
	                    d3.select(this).moveToBack();
	                }
	                // if(!d.a.faded() || !d.b.faded()){ d3.select(this).moveToFront(); }
	            }).transition().duration(500).style('stroke', function (d) {
	                // We spoof our own fading function to fade the 
	                if (!d.a.faded() || !d.b.faded()) {
	                    d = {
	                        a: { faded: function faded() {
	                                return false;
	                            } },
	                        b: { faded: function faded() {
	                                return false;
	                            } }
	                    };
	                }
	                return bandColor(d);
	            });
	        };
	
	        /**
	        #### .onCaseMouseleave(case)
	        Handles the mouseleave event for a case
	        **/
	        _obj.onCaseMouseleave = function (c) {
	            if (_selection.length >= 1) {
	                return;
	            }
	            // Return the pixel layers to full opacity
	            _pixelLayers.forEach(function (p) {
	                if (p.faded()) {
	                    p.fadeIn();
	                }
	            });
	            d3.selectAll('path.band').each(function (d) {
	                // Bring the non-faded bands to the front
	                if (d.a.faded() || d.b.faded()) {
	                    d3.select(this).moveToBack();
	                }
	                // if(!d.a.faded() && !d.b.faded()){ d3.select(this).moveToFront(); }
	            }).transition().duration(500).style('stroke', function (d) {
	                return bandColor(d);
	            });
	        };
	
	        /**
	        #### .onElementMouseenter(element)
	        Handles the mouseenter event for an element/pixel.
	        **/
	        _obj.onElementMouseenter = function (element, i, layer) {
	            if (_selection.length >= 1) {
	                if (layer == null) {
	                    return;
	                } else if (_selection.indexOf(layer.uuid()) == -1) {
	                    return;
	                } else {
	                    var value = valueAccessor(element);
	                    d3.select('#element-label').html(value);
	                    _selection[3].a.selectAll('rect.pixel').classed('hover', function (d) {
	                        return valueAccessor(d) === value;
	                    });
	                    _selection[3].b.selectAll('rect.pixel').classed('hover', function (d) {
	                        return valueAccessor(d) === value;
	                    });
	                    return;
	                }
	            }
	
	            var value = valueAccessor(element);
	            var empty = d3.select(this).classed('empty');
	
	            d3.select('#element-label').html(value);
	
	            if (!empty) {
	                // Highlight any other instances of that element
	                d3.selectAll('rect.pixel').classed('hover', function (d) {
	                    return valueAccessor(d) === value;
	                });
	
	                // Fade any pixel layers that do not contain the element
	                _pixelLayers.forEach(function (p) {
	                    if (!p.faded() && !p.expression().value(element)) {
	                        p.fadeOut(0.4);
	                    }
	                });
	
	                // Update the band colorings, fading out if the band is
	                // connected to a faded PixelLayer.
	                fadeBands();
	            }
	        };
	
	        /**
	        #### .onElementMouseleave(element)
	        Handles the mouseleave event for an element/pixel.
	        **/
	        _obj.onElementMouseleave = function (element, i, layer) {
	            if (_selection.length >= 1) {
	                if (layer == null) {
	                    return;
	                } else if (_selection.indexOf(layer.uuid()) == -1) {
	                    return;
	                } else {
	                    d3.select('#element-label').html("");
	                    // d3.select('#element-label').html(_selection[4]);
	                    //                     d3.select('#class-label').html(_selection[5]);
	                    _selection[3].a.selectAll('rect.pixel').classed('hover', false);
	                    _selection[3].b.selectAll('rect.pixel').classed('hover', false);
	                    return;
	                }
	            }
	
	            d3.select('#element-label').html("");
	            d3.selectAll('rect.pixel').classed('hover', false);
	
	            _pixelLayers.forEach(function (p) {
	                if (p.faded()) {
	                    p.fadeIn();
	                }
	            });
	
	            // Update the band colorings, fading in if applicable
	            fadeBands();
	        };
	
	        /**
	        #### .onGroupMouseenter(element)
	        Handles the mouseenter event for a group of elements/pixels.
	        **/
	        _obj.onGroupMouseenter = function (group, layer) {
	            if (_selection.length >= 1) {
	                if (layer == null) {
	                    return;
	                } else if (_selection.indexOf(layer.uuid()) == -1) {
	                    return;
	                }
	            }
	            d3.select('#class-label').html(group).classed('similar', false);
	        };
	
	        /**
	        #### .onGroupMouseleave(element)
	        Handles the mouseleave event for a group of elements/pixels.
	        **/
	        _obj.onGroupMouseleave = function (group, layer) {
	            if (_selection.length >= 1) {
	                if (layer == null) {
	                    return;
	                } else if (_selection.indexOf(layer.uuid()) == -1) {
	                    return;
	                }
	            }
	            d3.select('#class-label').html("").classed('similar', false);
	        };
	
	        /**
	        #### .onDragstart()
	        Called when the dragging operation on a PixelLayer object starts.
	        **/
	        _obj.onDragstart = function () {
	            clearSelection();
	            // Bring the dragged PixelLayer object to the front of the layers
	            // externally and internally
	            moveToFront(this);
	            // Display the trash icon
	            d3.select('#trash').classed("hidden", false);
	        };
	
	        /**
	        #### .onDrag()
	        Called whenever a PixelLayer is dragged about the canvas.
	        **/
	        _obj.onDrag = function () {
	            // Cancel event propagation so that the zoom behavior doesn't kick
	            // in.
	            d3.event.sourceEvent.stopPropagation();
	            checkLayerOverlap(this);
	            checkTrashOverlap(this);
	            drawBands();
	            setMasks();
	        };
	
	        /**
	        #### checkLayerOverlap(PixelLayer)
	        Performs checks to determine if a PixelLayer has been dragged on top
	        of another one. The onLayerOverlapEnter and onLayerOverlapLeave
	        functions are called when the state changes.
	        **/
	        function checkLayerOverlap(pl) {
	            var mouse = d3.mouse(d3.select(_canvas).node());
	            var mouseX = mouse[0];
	            var mouseY = mouse[1];
	            var bounds = {
	                'top': mouse[1],
	                'left': mouse[0],
	                'bottom': mouse[1],
	                'right': mouse[0]
	            };
	            var uuid = pl.uuid();
	            var overlap = null;
	            // Find the first layer that is overlapped
	            for (var i = 0; i < _pixelLayers.length; i++) {
	                var p = _pixelLayers[i];
	                if (p.uuid() === uuid) {
	                    continue;
	                }
	                if ((0, _plugins.rectOverlap)(bounds, p.boundingRect(_zoomScale, _zoomPan))) {
	                    overlap = p;
	                    break;
	                }
	            }
	            if (_overlap == null && overlap != null) {
	                _overlap = p;
	                _obj.onLayerOverlapEnter(pl, _overlap);
	            } else if (_overlap != null && overlap == null) {
	                _obj.onLayerOverlapLeave(pl, _overlap);
	                _overlap = null;
	            } else if (_overlap != null && overlap != null) {
	                // We passed from one overlapping item to another without
	                // breaking
	                if (p.uuid() != _overlap.uuid()) {
	                    _obj.onLayerOverlapLeave(pl, _overlap);
	                    _overlap = p;
	                    _obj.onLayerOverlapEnter(pl, _overlap);
	                }
	            }
	        }
	
	        /**
	        #### checkTrashOverlap(PixelLayer)
	        Checks for overlap between the given PixelLayer and the trash icon.
	        The onTrashOverlapEnter and onTrashOverlapLeave functions are called
	        when the state changes.
	        **/
	        function checkTrashOverlap(pl) {
	            var overlap = (0, _plugins.rectOverlap)(pl.boundingRect(_zoomScale, _zoomPan), _trashBounds);
	            if (!_trashOverlap && overlap) {
	                _trashOverlap = true;
	                _obj.onTrashOverlapEnter(pl);
	            } else if (_trashOverlap && !overlap) {
	                _trashOverlap = false;
	                _obj.onTrashOverlapLeave(pl);
	            }
	        }
	
	        /**
	        #### getTrashBounds()
	        Returns the bounding rectangle for the trash icon. Requires jQuery
	        **/
	        function getTrashBounds() {
	            // By far, the easiest way to do this is with jQuery. They handle a
	            // lot of cross-browser and calculation junk for you.
	            var trash = (0, _jquery2.default)('#trash');
	            var x = trash.offset().left;
	            var y = trash.position().top;
	            var width = trash.outerWidth();
	            var height = trash.outerHeight();
	            return {
	                top: y,
	                left: x,
	                bottom: y + height,
	                right: x + width,
	                width: width,
	                height: height
	            };
	        }
	
	        /**
	        #### .onDragend()
	        Called when the dragging of a PixelLayer ends. Calls the onLayerDrop
	        function if the PixelLayer is dropped onto another one.
	        **/
	        _obj.onDragend = function () {
	            if (_trashOverlap) {
	                _obj.onTrashDrop(this);
	                _trashOverlap = false;
	            } else if (_overlap != null) {
	                _obj.onLayerDrop(this, _overlap);
	                _overlap = null;
	            }
	
	            // Hide the trash icon
	            d3.select('#trash').classed("hidden", true);
	        };
	
	        /**
	        #### .onLayerOverlapEnter(dragged,overlapped)
	        Called when a PixelLayer beings overlapping another.
	        **/
	        _obj.onLayerOverlapEnter = function (a, b) {
	            // Preview the merge that would occur if the layer is dropped onto
	            // the other.
	            a.__old__ = a.expression();
	            b.__old__ = b.expression();
	
	            var previewExpr = b.__old__.preview(a.__old__);
	            // Force the preview to display an "AND"
	            previewExpr.root().operator('AND');
	            a.expression(previewExpr).preview();
	            b.expression(previewExpr).preview();
	        };
	
	        /**
	        #### .onLayerOverlapLeave(dragged,overlapped)
	        Called when a PixelLayer is no longer overlapping another.
	        **/
	        _obj.onLayerOverlapLeave = function (a, b) {
	            // Restore the layers to their "non-preview" state
	            a.expression(a.__old__);
	            b.expression(b.__old__);
	            delete a.__old__;
	            delete b.__old__;
	            a.redraw();
	            b.redraw();
	        };
	
	        /**
	        #### .onLayerDrop(dragged,target)
	        Called when a PixelLayer is dragged and dropped upon another.
	        **/
	        _obj.onLayerDrop = function (a, b) {
	            // Restore the non-preview layers
	            _obj.onLayerOverlapLeave(a, b);
	
	            // Merge the layers to create a "composite" layer
	            b.expression().merge(a.expression(), false);
	            b.redraw();
	            removeLayer(a);
	
	            // Update the similarity bands
	            updateBands([b]);
	        };
	
	        /**
	        #### .onTrashOverlapEnter(PixelLayer)
	        Called when a PixelLayer is dragged over the trash icon.
	        **/
	        _obj.onTrashOverlapEnter = function (p) {
	            d3.select('#trash').classed('hover', true);
	        };
	
	        /**
	        #### .onTrashOverlapLeave(PixelLayer)
	        Called when a PixelLayer no longer overlaps the trash icon.
	        **/
	        _obj.onTrashOverlapLeave = function (p) {
	            d3.select('#trash').classed('hover', false);
	        };
	
	        /**
	        #### .onTrashDrop(PixelLayer)
	        Called when a PixelLayer is dragged and dropped onto the trash icon.
	        **/
	        _obj.onTrashDrop = function (p) {
	            // Call some of the event handlers to reset the state of things
	            _obj.onTrashOverlapLeave(p);
	            if (_overlap != null) {
	                _obj.onLayerOverlapLeave(p, _overlap);
	            }
	            _obj.onElementMouseleave();
	            _obj.onGroupMouseleave();
	            _overlap = null;
	
	            removeLayer(p);
	            updateBands();
	        };
	
	        /**
	        #### removeLayer(PixelLayer)
	        Removes a PixelLayer from the canvas.
	        **/
	        function removeLayer(p) {
	            var uuid = p.uuid();
	            for (var i = 0; i < _pixelLayers.length; i++) {
	                if (_pixelLayers[i].uuid() === uuid) {
	                    _pixelLayers.splice(i, 1);
	                    break;
	                }
	            }
	            p.remove();
	        }
	
	        /**
	        #### moveToFront(PixelLayer)
	        Moves a PixelLayer to the front of the canvas
	        **/
	        function moveToFront(p) {
	            p.moveToFront();
	            var uuid = p.uuid();
	            for (var i = 0; i < _pixelLayers.length; i++) {
	                if (_pixelLayers[i].uuid() === uuid) {
	                    _pixelLayers.splice(i, 1);
	                    _pixelLayers.unshift(p);
	                    break;
	                }
	            }
	        }
	
	        /**
	        #### .onLabelDrag(label)
	        Called when a label belonging to a PixelLayer is dragged.
	        **/
	        _obj.onLabelDrag = function (l) {
	            // We only split when a label with depth 0 is dragged
	            if (!isComposite(this) || l.depth > 0) {
	                return;
	            }
	
	            // Split the composite layer
	            var node = l.node;
	            var newExpr;
	            if ((0, _datastructs.isOperatorNode)(node)) {
	                newExpr = (0, _datastructs.SetExpression)(node, _data.elements());
	            } else {
	                var newOp = (0, _datastructs.OperatorNode)('AND');
	                newOp.addChild(node);
	                newExpr = (0, _datastructs.SetExpression)(newOp, _data.elements());
	            }
	
	            l.parent.removeChild(node);
	
	            // Flatten the remaining expression.
	            var oldExpr = this.expression();
	            oldExpr.flatten();
	
	            // Create a new PixelLayer in the position of this one.
	            createPixelLayer(oldExpr).x(this.x()).y(this.y()).render();
	            // Change the expression of this PixelLayer to be the expression
	            // split off from the old. This keeps the dragging intact.
	            moveToFront(this);
	            this.expression(newExpr).redraw();
	
	            // Update the similarity bands
	            updateBands([this]);
	        };
	
	        /**
	        #### split(PixelLayer)
	        Splits a pixel layer into its composed layers. Only the first level is
	        split.
	        **/
	        function split(pl) {
	            var newExprs = pl.expression().split();
	            newExprs.forEach(function (e) {
	                createPixelLayer(e).render();
	            });
	            removeLayer(pl);
	            updateBands();
	        }
	
	        /**
	        #### .onSplitClick()
	        Handles the 'click.split' event from a PixelLayer
	        **/
	        _obj.onSplitClick = function () {
	            split(this);
	        };
	
	        /**
	        #### .onOperatorChange(PixelLayer)
	        Called when the operator of a pixel layer changes
	        **/
	        _obj.onOperatorChange = function (d) {
	            updateBands([this]);
	        };
	
	        /**
	        #### clipPoint(point, point, rect)
	        Uses a simplified Lian-Barsky algorithm to determine the clip point of a
	        line (specified by two points) within a rectangle.
	        **/
	        function clipPoint(p1, p2, rect) {
	            var p = [p1.x - p2.x, p2.x - p1.x, p1.y - p2.y, p2.y - p1.y];
	            var q = [p1.x - rect.left, rect.right - p1.x, p1.y - rect.top, rect.bottom - p1.y];
	
	            var u1 = 0;
	            var u2 = 1;
	            d3.range(4).forEach(function (k) {
	                // Completely outside the rectangle
	                if (p[k] == 0) {
	                    if (q[k] < 0) {
	                        return null;
	                    }
	                } else {
	                    var u = q[k] / p[k];
	                    // Outside -> inside
	                    if (p[k] < 0 && u1 < u) {
	                        u1 = u;
	                    }
	                    // Inside -> outside
	                    else if (p[k] > 0 && u2 > u) {
	                            u2 = u;
	                        }
	                }
	            });
	
	            // Completely outside the rectangle
	            if (u1 > u2) {
	                return null;
	            }
	
	            // Return the clipping point of the line where it passes from inside
	            // of the rectangle to the outside
	            return {
	                x: p1.x + p[1] * u2,
	                y: p1.y + p[3] * u2
	            };
	        }
	
	        /**
	        #### toggleBands([boolean])
	        Shows/hides the similarity bands. Default behavior is to toggle the
	        current state. A boolean can be passed in to force a state.
	        **/
	        _obj.toggleBands = function (b) {
	            clearSelection();
	            var bands = d3.select(_canvas).select('g.bands');
	            var hide = b == undefined ? !bands.classed('hidden') : !b;
	            bands.classed('hidden', hide);
	            showMetric(b);
	            return _obj;
	        };
	
	        function showMetric(b) {
	            var metric = d3.select('#metric');
	            var zoom = d3.select('#zoom');
	
	            if (b) {
	                metric.classed('hidden', false);
	                metric.transition().duration(500).style('height', "22px").style('padding-bottom', "2px").each('end', function () {
	                    d3.select(this).select('select').classed('invisible', false);
	                });
	                zoom.transition().duration(500).style('top', "49px");
	            } else {
	                metric.select('select').classed('invisible', true);
	                metric.transition().duration(500).style('height', "0px").style('padding-bottom', "0px").each('end', function () {
	                    d3.select(this).classed('hidden', true);
	                });
	                zoom.transition().duration(500).style('top', "25px");
	            }
	        }
	
	        /**
	        #### .onBandMouseenter()
	        Called when the mouse enters a similarity band.
	        **/
	        _obj.onBandMouseenter = function (d) {
	            if (_selection.length >= 1) {
	                return;
	            }
	            d3.select(this).classed('hover', true);
	
	            _pixelLayers.forEach(function (p) {
	                var uuid = p.uuid();
	                if (uuid === d.a.uuid() || uuid === d.b.uuid()) {
	                    return;
	                }
	                p.fadeOut();
	            });
	            fadeBands();
	
	            // Find the common elements (intersection) and highlight them
	            var setA = d.a.asSet();
	            var setB = d.b.asSet();
	            var common = setA.intersection(setB);
	            d.a.selectAll('rect.pixel').classed('similar', function (d) {
	                return common.has(d);
	            });
	            d.b.selectAll('rect.pixel').classed('similar', function (d) {
	                return common.has(d);
	            });
	
	            if (_jaccard) {
	                var format = d3.format(".3f");
	                d3.select('#element-label').html("Jaccard similarity: " + format(d.similarity));
	            } else {
	                var count = _data.elements().count();
	                // Round to deal with floating point errors
	                var matched = Math.round(d.similarity * count);
	                d3.select('#element-label').html(matched + " matched states");
	            }
	            d3.select('#class-label').html(common.count() + " shared elements");
	            d3.select('#class-label').classed('similar', true);
	        };
	
	        /**
	        #### .onBandMouseleave()
	        Called when the mouse leaves a similarity band.
	        **/
	        _obj.onBandMouseleave = function (d) {
	            if (_selection.length >= 1) {
	                return;
	            }
	
	            d3.select(this).classed('hover', false);
	            d3.select('#element-label').html("");
	            d3.select('#class-label').html("");
	            d3.select('#class-label').classed('similar', false);
	
	            _pixelLayers.forEach(function (p) {
	                p.fadeIn();
	            });
	            fadeBands();
	
	            if (_selection.indexOf(d.a) == -1) {
	                d.a.selectAll('rect.pixel').classed('similar', false);
	            }
	            if (_selection.indexOf(d.b) == -1) {
	                d.b.selectAll('rect.pixel').classed('similar', false);
	            }
	        };
	
	        /**
	        #### .onBandClick()
	        Called when a similarity band is pressed
	        **/
	        _obj.onBandClick = function (d) {
	            if (_cleared) {
	                return;
	            }
	            var label1 = d3.select('#element-label').html();
	            var label2 = d3.select('#class-label').html();
	
	            _selection = [d.a.uuid(), d.b.uuid(), this, d, label1, label2];
	            d3.event.stopPropagation();
	
	            _pixelLayers.forEach(function (p) {
	                p.highlight(false);
	                if (_selection.indexOf(p.uuid()) == -1) {
	                    p.highlightGroups(false);
	                }
	            });
	        };
	
	        /** 
	        #### updateBands(dirty)
	        Helper function that updates the similarity bands on the page. The
	        function tries to update them intelligently, only recalculating
	        similarities if there is a new band to add or remove, but if any "dirty"
	        pixel layers are passed in to the function, bands connected to them will
	        for sure be updated.
	            **/
	        function updateBands(d) {
	            var dirty = d == undefined ? [] : d;
	            _similarityBands = createBands(dirty);
	            drawBands();
	            setMasks();
	        }
	
	        /**
	        #### fadeBands()
	        Fades the similarity bands on the page
	        **/
	        function fadeBands() {
	            d3.selectAll('path.band').each(function (d) {
	                // Bring the non-faded bands to the front
	                if (d.a.faded() || d.b.faded()) {
	                    d3.select(this).moveToBack();
	                }
	                // if(!d.a.faded() && !d.b.faded()){ d3.select(this).moveToFront(); }
	            }).transition().duration(500).style('stroke', function (d) {
	                return bandColor(d);
	            });
	        }
	
	        /**
	        #### .drawBands()
	        Draws the similarity bands on the chart
	        **/
	        function drawBands() {
	            var path = d3.svg.diagonal().source(function (d) {
	                return {
	                    x: d.a.x() + d.a.width() / 2,
	                    y: d.a.y() + d.a.height() / 2
	                };
	            }).target(function (d) {
	                return {
	                    x: d.b.x() + d.b.width() / 2,
	                    y: d.b.y() + d.b.height() / 2
	                };
	            });
	
	            var bandG = d3.select(_canvas).select('g.bands');
	            var bands = bandG.selectAll('path.band').data(_similarityBands);
	
	            // ENTER
	            bands.enter().append('path').classed('band', true);
	
	            // ENTER + UPDATE
	            bands.attr('d', path).style('stroke-width', function (d) {
	                return bandScale(d.similarity);
	            }).style('stroke', function (d) {
	                return bandColor(d);
	            }).style('fill', "none").each(function (d) {
	                // Bring the non-faded bands to the front
	                if (d.a.faded() || d.b.faded()) {
	                    d3.select(this).moveToBack();
	                }
	                // if(!d.a.faded() && !d.b.faded()){ d3.select(this).moveToFront(); }
	            }).on('mouseenter', _obj.onBandMouseenter).on('mouseleave', _obj.onBandMouseleave).on('click', _obj.onBandClick);
	
	            // EXIT
	            bands.exit().remove();
	        }
	
	        /**
	        #### setMasks()
	        Sets the masks for masking the bands to the PixelLayers
	        **/
	        function setMasks() {
	            var maskG = d3.select(_canvas).select('g.masks');
	            var masks = maskG.selectAll('rect.mask').data(_pixelLayers, function (p) {
	                return p.uuid();
	            });
	
	            // ENTER
	            masks.enter().append('svg:rect').attr('id', function (p) {
	                return "mask-" + p.uuid();
	            }).classed('mask', true);
	
	            // UPDATE + ENTER
	            masks.attr('x', function (p) {
	                return p.x();
	            }).attr('y', function (p) {
	                return p.y();
	            }).attr('width', function (p) {
	                return p.width();
	            }).attr('height', function (p) {
	                return p.height() + 20;
	            }).attr('fill', "black");
	
	            masks.exit().remove();
	        }
	
	        /**
	        #### createBands(dirty)
	        Calculates the similarity metric for all PixelLayers on the canvas and
	        creates the corresponding data structures for drawing them. Any pixels
	        layers passed in an array to the function will have the bands recreated,
	        forcing an update.
	        **/
	        function createBands(d) {
	            // Create all pairs of pixelLayers
	            var combos = (0, _plugins.combinations)(_pixelLayers, 2);
	            var dirty = d == undefined ? [] : d;
	            var bands = [];
	            var elements = _data.elements();
	            var dirtyCount = 0;
	            var reusedCount = 0;
	            var createdCount = 0;
	            var removedCount = 0;
	
	            function findBand(p) {
	                var uuid0 = p[0].uuid();
	                var uuid1 = p[1].uuid();
	                var found = null;
	
	                _similarityBands.forEach(function (sb) {
	                    var uuidA = sb.a.uuid();
	                    var uuidB = sb.b.uuid();
	                    if (uuid0 === uuidA && uuid1 === uuidB || uuid0 === uuidB && uuid1 === uuidA) {
	                        found = sb;
	                        return;
	                    }
	                });
	                return found;
	            }
	
	            combos.forEach(function (p) {
	                var uuid0 = p[0].uuid();
	                var uuid1 = p[1].uuid();
	
	                // Reuse any existing bands unless a pixel layer has been marked
	                // as dirty.
	                var reuse = true;
	                dirty.forEach(function (pl) {
	                    var uuid = pl.uuid();
	                    if (uuid === uuid0 || uuid === uuid1) {
	                        dirtyCount += 1;
	                        reuse = false;
	                    }
	                });
	
	                if (reuse) {
	                    var found = findBand(p);
	                    if (found != null) {
	                        reusedCount += 1;
	                        bands.push(found);
	                        return;
	                    }
	                }
	
	                var similarity;
	                if (_jaccard) {
	                    similarity = p[0].expression().jaccard(p[1].expression(), elements);
	                } else {
	                    similarity = p[0].expression().similarity(p[1].expression(), elements);
	                }
	
	                // Create a new band
	                bands.push({
	                    a: p[0],
	                    b: p[1],
	                    similarity: similarity
	                });
	                createdCount += 1;
	            });
	            removedCount = Math.max(_similarityBands.length - bands.length, 0);
	            return bands;
	        }
	
	        function clearSelection() {
	            if (_selection.length < 1) {
	                _cleared = false;
	                return;
	            }
	            var _this = _selection[2];
	            var band = _selection[3];
	            _selection = [];
	            _obj.onBandMouseleave.call(_this, band);
	            _pixelLayers.forEach(function (p) {
	                p.highlight(true);
	                p.highlightGroups(true);
	            });
	            _cleared = true;
	        }
	
	        /**
	        #### .onZoomstart()
	        Called when the zoom event starts.
	        **/
	        _obj.onZoomstart = function () {};
	
	        /**
	        #### .onZoom()
	        Called when the zoom event occurs.
	        **/
	        _obj.onZoom = function () {
	            d3.select(_canvas + " g.layers").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	            d3.select(_canvas + " g.masks").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	            d3.select(_canvas + " g.bands").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	            _zoomScale = _zoom.scale();
	            _zoomPan = _zoom.translate();
	
	            var zoomDiv = d3.select(_zoomDiv);
	            zoomDiv.select('#zoom-level').html(Math.round(_zoomScale * 100) + "%");
	            zoomDiv.select('#zoom-out-btn').classed('disabled', function (d) {
	                return zoomRange[0] == _zoomScale;
	            });
	            zoomDiv.select('#zoom-in-btn').classed('disabled', function (d) {
	                return zoomRange[1] == _zoomScale;
	            });
	        };
	
	        /**
	        #### .onZoomend()
	        Called when the zoom event ends.
	        **/
	        _obj.onZoomend = function () {};
	
	        /**
	        #### .scale()
	        Gets or sets the current zoom scale.
	        **/
	        _obj.scale = function (s) {
	            if (!arguments.length) {
	                return _zoomScale;
	            }
	            _zoom.scale(s);
	            _zoomScale = _zoom.scale();
	            _zoom.event(d3.select(_canvas));
	            return _obj;
	        };
	
	        /**
	        #### createPixelLayer(expression)
	        Creates a new pixellayer object from the given set expression.
	        **/
	        function createPixelLayer(expression) {
	            var row = parseInt(_pixelLayers.length / 5);
	            var col = _pixelLayers.length - row * 5;
	
	            //Calculate rows and columns
	            var numrows = 20;
	            var numcols = 20;
	            var numElements = _data.elements().elements().length;
	            if (numElements < 400) {
	                numrows = Math.ceil(Math.sqrt(numElements));
	                numcols = numrows;
	            }
	
	            var pl = (0, _pixellayer.PixelLayer)(_canvas + " g.layers").elements(_data.elements().elements()).expression(expression).pixelColor(pixelColor).labelColor(labelColor).x(col * (184 + 30) + 30 - _zoomPan[0]).y(row * (184 + 30) + 60 - _zoomPan[1]).rows(numrows).columns(numcols).on('mousedown', _obj.onMousedown).on('mouseup', _obj.onMouseup).on('mouseenter', _obj.onMouseEnter).on('mouseleave', _obj.onMouseLeave).on('mouseenter.pixel', _obj.onElementMouseenter).on('mouseleave.pixel', _obj.onElementMouseleave).on('mouseenter.group', _obj.onGroupMouseenter).on('mouseleave.group', _obj.onGroupMouseleave).on('dragstart', _obj.onDragstart).on('drag', _obj.onDrag).on('dragend', _obj.onDragend).on('drag.label', _obj.onLabelDrag).on('change.operator', _obj.onOperatorChange).on('click.split', _obj.onSplitClick);
	            _pixelLayers.unshift(pl);
	            return pl;
	        }
	
	        /**
	        #### .drawPixelLayer(dataCase)
	        Draws a new PixelLayer.
	        **/
	        _obj.drawPixelLayer = function (dataCase) {
	            clearSelection();
	
	            // Construct the SetExpression
	            var node = (0, _datastructs.DataNode)(dataCase);
	            var operator = (0, _datastructs.OperatorNode)('AND');
	            var expression = (0, _datastructs.SetExpression)(operator, _data.elements());
	            operator.addChild(node);
	
	            expression.not();
	
	            // Create and render the pixel layer
	            var pl = createPixelLayer(expression).render();
	            updateBands();
	        };
	
	        /**
	        #### .init()
	        Initializes the contoller.
	        **/
	        _obj.init = function () {
	            // In order to get the correct boundaries of the trash icon, we
	            // need to briefly unhide it.
	            d3.select(_trash).classed('hidden', false);
	            _trashBounds = getTrashBounds();
	            d3.select(_trash).classed('hidden', true);
	
	            // Create the groups for the bands and the pixelLayers
	            var bandG = d3.select(_canvas).append('svg:g');
	            bandG.append('svg:g').classed('bands', true).classed('hidden', true);
	            bandG.append('svg:g').classed('masks', true);
	
	            d3.select(_canvas).append('svg:g').classed('layers', true);
	
	            // Hook up zoom events
	            _zoom.on('zoomstart', _obj.onZoomstart).on('zoom', _obj.onZoom).on('zoomend', _obj.onZoomend);
	            d3.select(_canvas).call(_zoom);
	
	            // Hook up the similarity checkbox
	            d3.select(_bandsCB).on('change', function (d) {
	                _obj.toggleBands(this.checked);
	            });
	
	            // Hook up the zoom buttons
	            var zoomStep = 0;
	            d3.select(_zoomDiv).select('#zoom-in-btn').on('mousedown', function (d) {
	                // TODO: Set interval to listen to repeated mouse clicks
	                var invert = zoomBtnScale.invert(_zoomScale) + 1;
	                _obj.scale(zoomBtnScale(invert));
	            });
	            d3.select(_zoomDiv).select('#zoom-out-btn').on('click', function (d) {
	                var invert = zoomBtnScale.invert(_zoomScale) - 1;
	                _obj.scale(zoomBtnScale(invert));
	            });
	
	            // Hook up the metric selection
	            d3.select('#metric select').on('change', function () {
	                var option = this.options[this.selectedIndex].value;
	                if (option == "jaccard") {
	                    _jaccard = true;
	                } else {
	                    _jaccard = false;
	                }
	                updateBands(_pixelLayers);
	            });
	
	            // Hook up events to clear the selection
	            d3.select(_canvas).on('mousedown', clearSelection);
	            return _obj;
	        };
	
	        return _obj;
	    };
	
	    //Check if data is custom or template
	    var datatype = sessionStorage.getItem("datatype");
	    if (datatype === "custom") {
	        var dataSource = (0, _data2.DataSource)().on('success', dataLoaded);
	        dataSource.loadCustomData(sessionStorage.getItem("data"));
	    } else if (datatype === "template") {
	        // Load the data
	        var dataSource = (0, _data2.DataSource)(sessionStorage.getItem("url")).on('success', dataLoaded);
	        dataSource.loadURL();
	    } else {}
	
	    function dataLoaded(elements, cases) {
	        // Initialize the main controller
	        var controller = Controller("#canvas", "#trash", "#bands-cb", "#zoom", this).init();
	
	        // Initialize the lists
	        var listController = ListController('#controls', this)
	        // Set up cross-controller communication
	        .on('add.case', controller.drawPixelLayer).on('mouseenter.element', controller.onElementMouseenter).on('mouseenter.element', function (d) {
	            controller.onGroupMouseenter(groupAccessor(d));
	        }).on('mouseleave.element', controller.onElementMouseleave).on('mouseleave.element', function (d) {
	            controller.onGroupMouseleave(groupAccessor(d));
	        }).on('mouseenter.case', controller.onCaseMouseenter).on('mouseleave.case', controller.onCaseMouseleave).init();
	
	        //Open list of elements
	        document.getElementById("samples-btn").click();
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */(function(global,factory){if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.4",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// Start with an empty selector
	selector:"",// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null?// Return just the one element from the set
	num<0?this[num+this.length]:this[num]:// Return all the elements in a clean array
	_slice.call(this);},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0;},isPlainObject:function isPlainObject(obj){var key;// Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}// Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;}// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android<4.0, iOS<6 (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code=jQuery.trim(code);if(code){// If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{// Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android<4.1
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}/* jshint ignore: end */// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// General-purpose constants
	MAX_NEGATIVE=1<<31,// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();};// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{// Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);}// release memory in IE
	div=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent=document.defaultView)&&parent.top!==parent){// Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{// Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":function enabled(elem){return elem.disabled===false;},"disabled":function disabled(elem){return elem.disabled===true;},"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(div1){// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){/* jshint -W018 */return!!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}// Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);// Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem&&elem.parentNode){// Inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(pos?pos.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];// deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===_promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Keep pipe for back-compat
	_promise.pipe=_promise.then;// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];// promise[ done | fail | progress ] = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = [ resolved | rejected ]
	_state=stateString;// [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);}// deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?_promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(subordinate/* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length,// the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,// the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(),// Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;// Add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}// If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}});// The deferred used on DOM ready
	var readyList;jQuery.fn.ready=function(fn){// Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);// Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});/**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);};// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems:// Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={register:function register(owner,initial){var value=initial||{};// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else{Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function cache(owner){// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return{};}// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	if(typeof data==="string"){cache[data]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[prop]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function access(owner,key,value){var stored;// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}if(key===undefined){this.register(owner);}else{// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key);// Try the string as a key before any manipulation
	if(key in cache){name=[key,camel];}else{// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name=camel;name=name in cache?[name]:name.match(rnotwhite)||[];}}i=name.length;while(i--){delete cache[name[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:// Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// with the key as-is
	data=dataUser.get(elem,key)||// Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}camelKey=jQuery.camelCase(key);// Attempt to get data from the cache
	// with the key camelized
	data=dataUser.get(elem,camelKey);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	camelKey=jQuery.camelCase(key);this.each(function(){// First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey);// For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value);// *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE9
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(event){// Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}// Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},// Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){// Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button;// Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}// Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;}// Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}// Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target=document;}// Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android<4.0
	src.returnValue===false?returnTrue:returnFalse;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({// Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={// Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"};/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */// Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;}/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);// If the simple way fails, read from inside an iframe
	if(display==="none"||!display){// Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=iframe[0].contentDocument;// Support: IE
	doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}// Store the correct default display
	elemdisplay[nodeName]=display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText=// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function pixelPosition(){// This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal==null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){// Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal==null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal==null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function reliableMarginRight(){// Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div"));// Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText=div.style.cssText=// Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?// If we already have the right measurement, avoid augmentation
	4:// Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){// Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";}// Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// Support: Android 2.3
	jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back Compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){/* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");// Handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Height/width overflow pass
	if(elem.nodeType===1&&("height"in props||"width"in props)){// Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display=jQuery.css(elem,"display");// Test default display if display is currently "none"
	checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// show/hide pass
	for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);// Any non-fx value stops us from restoring the original display value
	}else{display=undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{});}// Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}// If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled=true;support.optDisabled=!opt.disabled;// Support: IE<=11+
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name;// Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){// Set corresponding property to false
	elem[propName]=false;}elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"?// Handle most common string cases
	ret.replace(rreturn,""):// Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;// Loop through all the selected options
	for(;i<max;i++){option=options[i];// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&(// Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON=function(data){return JSON.parse(data+"");};// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE9
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":jQuery.parseJSON,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// The jqXHR state
	state=0,// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state<2){for(code in map){// Lazy-add the new callback in a way that preserves old ones
	_statusCode[code]=[_statusCode[code],map[code]];}}else{// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;// Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url;// More options handling for requests with no content
	if(!s.hasContent){// If data is available, append data to url
	if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)?// If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+nonce++):// Otherwise add one to the end
	cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(state===2){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){// Propagate exception as error if not done
	if(state<2){done(-1,e);// Simply rethrow otherwise
	}else{throw e;}}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Called once
	if(state===2){return;}// State is "done" now
	state=2;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,value){// If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};// Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};// Keep a copy of the old load method
	var _load=jQuery.fn.load;/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement;// Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box=elem.getBoundingClientRect();win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function size(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataSource = undefined;
	
	var _datastructs = __webpack_require__(13);
	
	var COMPOUND_COUNT = 225;
	
	/**
	## DataSource
	The data source for general user-input data.
	**/
	var DataSource = function DataSource(samplesURL) {
	    var _elements = null;
	    var _cases = null;
	    var _samplesURL = samplesURL;
	    var _obj = (0, _datastructs.SetDataSource)();
	    var _compoundList = d3.map();
	
	    var _listeners = {
	        'success': [],
	        'fail': []
	    };
	
	    /**
	    #### callListeners(event, this, [arg], ...)
	    Calls the listeners of an event. Follows the same format as function.call().
	    **/
	    function callListeners(evt, thisObj) {
	        var args = Array.prototype.slice.call(arguments, 2);
	        for (var i = 0; i < _listeners[evt].length; i++) {
	            _listeners[evt][i].apply(thisObj, args);
	        }
	    }
	
	    /**
	    #### applyListeners(event, this, [arg, ...])
	    Calls the listeners of an event, except it takes an array of arguments
	    instead of positional arguments, like function.apply()
	    **/
	    function applyListeners(evt, thisObj, args) {
	        for (var i = 0; i < _listeners[evt].length; i++) {
	            _listeners[evt][i].apply(thisObj, args);
	        }
	    }
	
	    // Converts the data read in from the compounds data file into a "clean"
	    // object ready to be stored in a Set.
	    function toElement(d) {
	        return {
	            'value': d['Row Labels'],
	            'fullCount': parseInt(d['Count of ALL']),
	            'class': d['HMDB Class']
	        };
	    }
	
	    // Converts data from the samples data file into DataCase objects.
	    function toDataCase(data) {
	        // Map the element names found in the data file to element objects found
	        // in the compounds set and restrict to be a subset of the compounds set
	        // The first element in the data is the case identifier, so it is
	        // removed.
	        var compounds = _obj.elements();
	        var elements = data.slice(1).map(function (d) {
	            return compounds.find(d);
	        }).filter(function (d) {
	            return d != undefined || d != null;
	        });
	
	        return (0, _datastructs.DataCase)(data[0], (0, _datastructs.Set)(elements, compoundHash));
	    }
	
	    // Used as the hash function to store compounds in sets.
	    function compoundHash(e) {
	        return e.value;
	    }
	
	    _obj.elements = function () {
	        return _elements;
	    };
	
	    _obj.cases = function () {
	        return _cases;
	    };
	
	    _obj.loadURL = function (data) {
	        _compoundList = d3.map();
	        // Get the compounds. They represent the elements of the universal set.
	        d3.text(_samplesURL, function (err, txt) {
	            if (txt == null) {
	                callListeners('fail', _obj, err);return;
	            }
	            d3.csv.parseRows(txt, extractCompounds);
	
	            // Sort by number of occurences
	            var compoundListArray = _compoundList.entries().sort(function (a, b) {
	                return b.value - a.value;
	            }).map(function (d) {
	                return {
	                    // d3.map() inserts a NUL character at the beginning of its
	                    // keys that needs to be removed. Otherwise, we won't ever
	                    // be able to find items in the elements set.
	                    'value': d['key'].replace("\x00", ""),
	                    'fullCount': parseInt(d['value']),
	                    'class': ''
	                };
	            });
	
	            _elements = (0, _datastructs.Set)(compoundListArray, compoundHash);
	
	            d3.text(_samplesURL, function (err, txt) {
	                if (txt == null) {
	                    callListeners('fail', _obj, err);return;
	                }
	                _cases = d3.csv.parseRows(txt, toDataCase);
	                callListeners('success', _obj, _elements, _cases);
	            });
	        });
	
	        return _obj;
	    };
	
	    _obj.loadCustomData = function (txt) {
	        _compoundList = d3.map();
	        // Get the compounds. They represent the elements of the universal set.
	
	        if (txt == null) {
	            callListeners('fail', _obj, err);return;
	        }
	        d3.csv.parseRows(txt, extractCompounds);
	
	        // Sort by number of occurences
	        var compoundListArray = _compoundList.entries().sort(function (a, b) {
	            return b.value - a.value;
	        }).map(function (d) {
	            return {
	                // d3.map() inserts a NUL character at the beginning of its
	                // keys that needs to be removed. Otherwise, we won't ever
	                // be able to find items in the elements set.
	                'value': d['key'].replace("\x00", ""),
	                'fullCount': parseInt(d['value']),
	                'class': ''
	            };
	        });
	
	        _elements = (0, _datastructs.Set)(compoundListArray, compoundHash);
	
	        _cases = d3.csv.parseRows(txt, toDataCase);
	        callListeners('success', _obj, _elements, _cases);
	
	        return _obj;
	    };
	
	    function extractCompounds(data) {
	        data.slice(1).forEach(function (d) {
	            if (d == "") {
	                return;
	            } else if (_compoundList.has(d)) {
	                _compoundList.set(d, _compoundList.get(d) + 1);
	            } else {
	                _compoundList.set(d, 1);
	            }
	        });
	    }
	
	    /**
	    #### .on(event,function)
	    Attaches an event listener for events from this PixelLayer chart.
	    **/
	    _obj.on = function (e, f) {
	        _listeners[e].push(f);
	        return _obj;
	    };
	
	    return _obj;
	};
	exports.DataSource = DataSource;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SetCountCalculator = exports.ValueCalculator = exports.isOperatorNode = exports.DataNode = exports.OperatorNode = exports.SetExpression = exports.DataCase = exports.Set = exports.SetDataSource = undefined;
	
	var _plugins = __webpack_require__(14);
	
	/**
	## SetDataSource
	The "base" class for a source of set data. The source is responsible for
	returning the elements of the "universal" set - all of the compounds
	possible in a blood sample or all of the days in a month, for example - and
	the individual data cases - sets of elements that are a subset of the
	universal set.
	**/
	function SetDataSource() {
	    var _obj = {};
	
	    /**
	    #### .elements()
	    Returns the elements of the universal set. It is a Set object. See plugins.js.
	    **/
	    _obj.elements = function () {
	        throw "NotImplemented";
	    };
	
	    /**
	    #### .cases()
	    The data cases - an array of DataCase objects containing a subset of the 
	    universal set.
	    **/
	    _obj.cases = function () {
	        throw "NotImplemented";
	    };
	
	    /**
	    #### .load()
	    Loads the data and returns a jQuery Deferred object. Callbacks can then be
	    registered to be invoked using the deferred.then(), deferred.always(), 
	    deferred.done(), and deferred.fail() methods. This is all chainable, too. 
	    
	    For example:
	        source.load()
	        .done(function(u,c){ console.log("Loaded data successfully"); })
	        .fail(function(e){ console.log("Failed to load data: " + e); })
	    
	    When the data was loaded successfully, any applicable callbacks will be
	    passed the elements and cases as parameters. If there was an error, the
	    appropriate callbacks will be passed the error message. The this context is
	    set to the SetDataSource object. For more details on the states, uses, etc. 
	    of a jQuery Deferred object, see http://api.jquery.com/jQuery.Deferred/.
	    **/
	    _obj.load = function (callback) {
	        throw "NotImplemented";
	    };
	
	    return _obj;
	}
	
	/**
	## Set([data][,hashFunction])
	A set of objects.
	
	A set is a collection of distinct, non-duplicate objects. In other words,
	it is a collection of unique elements. A hash function is used by the set
	to determine uniqueness when adding and comparing elements. Two objects are
	identical iff their hashes are equal.
	
	The set takes two optional arguments. The first is data to be stored in the
	set on initialization. The second is the hash function - it is passed
	objects to be stored in the set and should return a unique hash for a 
	distinct object. If the hash function is not specified, an object's string
	value will be used. This is rarely the desired behavior. You may also create
	the set without initial data, but with a set hash function. To do this, pass
	a function as the first argument.
	**/
	// TODO Add some caching of calculated values, similarities, etc.
	// FIXME Fix bug(s) w/ arguments of Set constructor
	
	function Set(data, hash) {
	    var _data = {};
	    var _hash = hash;
	    var _obj = {};
	
	    /**
	    #### .add(element)
	    Adds an element to the set.
	    **/
	    _obj.add = function (e) {
	        _data[_hash(e)] = e;
	        return e;
	    };
	
	    /**
	    #### .has(element)
	    Returns true if the set contains the given element.
	    **/
	    _obj.has = function (e) {
	        return Object.prototype.hasOwnProperty.call(_data, _hash(e));
	    };
	
	    /**
	    #### .remove(element)
	    Removes an element from the set. It returns true if the element was
	    contained in the set and removed, false otherwise.
	    **/
	    _obj.remove = function (e) {
	        var hashed = _hash(e);
	        var existed = Object.prototype.hasOwnProperty.call(_data, hashed);
	        delete _data[hashed];
	        return existed;
	    };
	
	    /**
	    #### .clear()
	    Removes all elements from this set.
	    **/
	    _obj.clear = function () {
	        _data = {};
	        return true;
	    };
	
	    /**
	    #### .find(hash)
	    Finds an element by hash and returns it.
	    **/
	    _obj.find = function (h) {
	        return _data[h];
	    };
	
	    /**
	    #### .count()
	    Returns the number of elements in this set.
	    **/
	    _obj.count = function () {
	        var count = 0;
	        _obj.forEach(function () {
	            count++;
	        });
	        return count;
	    };
	
	    /**
	    #### .intersection(Set)
	    Produces the intersection of two sets. Returns a new set.
	    **/
	    _obj.intersection = function (other) {
	        var set = Set({}, _hash);
	        other.forEach(function (e) {
	            if (_obj.has(e)) {
	                set.add(e);
	            }
	        });
	        return set;
	    };
	
	    /**
	    #### .union(Set)
	    Produces the union of two sets. Returns a new set.
	    **/
	    _obj.union = function (other) {
	        var set = Set({}, _hash);
	        _obj.forEach(function (e) {
	            set.add(e);
	        });
	        other.forEach(function (e) {
	            set.add(e);
	        });
	        return set;
	    };
	
	    /**
	    #### .subtraction(Set)
	    Returns the result of subtracting another set from this set. Returns a
	    new set.
	    **/
	    _obj.subtraction = function (other) {
	        var set = Set({}, _hash);
	        _obj.forEach(function (e) {
	            set.add(e);
	        });
	        other.forEach(function (e) {
	            set.remove(e);
	        });
	        return set;
	    };
	
	    /**
	    #### .hash()
	    Gets the hash function used for this set.
	    **/
	    _obj.hash = function () {
	        return _hash;
	    };
	
	    /**
	    #### .elements()
	    Returns all of the elements in this set as an array. The returned order
	    is arbitrary, although it appears that - at least in Chrome - the
	    returned order is the same as the insertion order, i.e., Set([a,b,c])
	    will return [a,b,c].
	    **/
	    _obj.elements = function () {
	        var elements = [];
	        _obj.forEach(function (e) {
	            elements.push(e);
	        });
	        return elements;
	    };
	
	    /**
	    #### .forEach(function)
	    Iterates over all the elements in the set, passing the element to the
	    desired iterator function. If the iterator function returns
	    utils.BREAKER, the loop will break and return. The returned order is
	    arbitrary.
	    **/
	    _obj.forEach = function (iterator) {
	        for (var hash in _data) {
	            if (_data.hasOwnProperty(hash)) {
	                if (iterator.call(_obj, _data[hash]) === false) return;
	            }
	        }
	    };
	
	    // Initialize the set
	    if (arguments.length < 2) {
	        if ((0, _plugins.isFunction)(data)) {
	            _hash = data;
	        } else {
	            _hash = function _hash(e) {
	                return "\x00" + e;
	            };
	        }
	    }
	    if ((0, _plugins.isArray)(data)) {
	        data.forEach(function (e) {
	            _obj.add(e);
	        });
	    }
	
	    return _obj;
	};
	
	/**
	## DataCase(label,data[,metadata])
	A data case. Represents a subset of the universal element set with optional
	metadata. The data passed in should be either an array or a Set. If it is an
	array, the default set hash function will be used.
	**/
	function DataCase(label, data, meta) {
	    var _label = label;
	    var _set = (0, _plugins.isArray)(data) ? Set(data) : data;
	    var _meta = meta ? meta : {};
	    var _obj = {};
	    var _events = (0, _plugins.Events)(_obj, ['change']);
	
	    /**
	    #### .label([string])
	    Gets or sets the label for this data case.
	    **/
	    _obj.label = function (l) {
	        if (!arguments.length) {
	            return _label;
	        }
	        _label = l;
	        _events.call('change');
	        return _obj;
	    };
	
	    /**
	    #### .set([elements])
	    Gets or sets the elements associated with this case.
	    **/
	    _obj.set = function (d) {
	        if (!arguments.length) {
	            return _set;
	        }
	        _set = (0, _plugins.isArray)(d) ? Set(d) : d;
	        _events.call('change');
	        return _obj;
	    };
	
	    /**
	    #### .meta([key],[value])
	    Gets or sets metadata associated with this data case.
	    **/
	    _obj.meta = function (key, val) {
	        if (!arguments.length) {
	            return _meta;
	        }
	        if (arguments.length == 1) {
	            if ((0, _plugins.isObject)(key)) {
	                _meta = key;return;
	            }
	            return _meta[key];
	        }
	        _meta[key] = val;
	        _events.call('change');
	        return _obj;
	    };
	
	    return _obj;
	}
	
	/**
	## SetExpression(root,elements)
	An expression tree that represents operations applied to the sets of elements
	associated with data cases. For example, we can take two sets of elements, 
	union them together, and then ask "Is x in the unioned set?"
	
	There are two data structures used to construct the expression tree: operator 
	nodes and data nodes.
	
	Operator nodes represent one of the set operators: AND (intersection) or OR
	(union). They may have other nodes as children. Data nodes represent a set of 
	items and compose the leaves of the tree.
	
	The membership of an element (e.g. compound) in the data set represented by an
	expression tree can be calculated by calling the value() function and passing
	in the element. The value returned is in the range [0,1]. The OR operator can 
	produce a non-integer number - rather than calculating a binary 0 or 1 if an 
	element is in the unioned set, a fraction is returned representing how many of 
	the subsets out of the total contain the element.
	**/
	function SetExpression(root, e) {
	    var _root = root;
	    var _elements = e;
	    var _cache = null;
	    var _obj = {};
	    var _events = (0, _plugins.Events)(_obj, ['change']);
	
	    /**
	    #### bubbleChange()
	    Bubbles up any changes that occur to the elements of the expression.
	    **/
	    function bubbleChange() {
	        _events.call('change');
	    };
	
	    /**
	    #### refreshCache()
	    Refreshes the cache of values for each of the elements in this expression.
	    **/
	    function refreshCache() {};
	
	    /**
	    #### .root()
	    Returns the root of the expression. It is an OperatorNode.
	    **/
	    _obj.root = function () {
	        return _root;
	    };
	
	    /**
	    #### .not()
	    NOTs the expression. Only supported for single layers.
	    **/
	    _obj.not = function (b) {
	        if (_obj.count() > 1) {
	            return false;
	        }
	        if (!arguments.length) {
	            return _root.children()[0].not();
	        }
	        _root.children()[0].not(b);
	        return _obj;
	    };
	
	    /**
	    #### .value(element)
	    Returns the calculated value of an element in the set after the operations
	    have been performed. It is a value in the range [0,1].
	    **/
	    _obj.value = function (e) {
	        var visitor = ValueCalculator(e);
	        _root.accept(visitor);
	        return visitor.value();
	    };
	
	    /**
	    #### .contains(case)
	    Returns true if this expression contains the given data case
	    **/
	    _obj.contains = function (c) {
	        return _root.contains(c);
	    };
	
	    /**
	    #### .count()
	    Returns the number of data sets in this expression.
	    **/
	    _obj.count = function () {
	        var visitor = SetCountCalculator();
	        _root.accept(visitor);
	        return visitor.count();
	    };
	
	    /**
	    #### .jaccard(expression)
	    Calculates the jaccard index between this and another expression.
	    **/
	    _obj.jaccard = function (o, e) {
	        var metric = 0;
	        var union = 0;
	        e.forEach(function (e) {
	            var visitor = ValueCalculator(e);
	            var myValue;
	            var otherValue;
	
	            // Gather the statistics about the value and presence/absence of the
	            // element in the two expressions.
	            _root.accept(visitor);
	            myValue = visitor.value();
	
	            visitor.reset();
	
	            o.accept(visitor);
	            otherValue = visitor.value();
	
	            // The element is found in the union of both sets
	            if (myValue > 0 || otherValue > 0) {
	                union += 1;
	            }
	
	            // The element is found in both expressions; the similarity
	            // increases.
	            if (myValue > 0 && otherValue > 0) {
	                metric += 1;
	                return;
	            }
	        });
	
	        return parseFloat(metric) / union;
	    };
	
	    /**
	    #### .similarity(expression, elements)
	    Calculates the similarity between this expression and another one, based
	    on the given element set.
	    
	    For each element, e, in the element set:
	        If the value of e is 1 in one expression, and 0 in the other, the
	        element is found in one expression, but not the other. The similarity
	        metric is not increased.
	         Otherwise, the metric increases by one.
	    
	    The metric is then divided by the total number of elements possible,
	    normalizing it to a value between [0,1].
	    **/
	    _obj.similarity = function (o, e) {
	        var metric = 0;
	        e.forEach(function (e) {
	            var visitor = ValueCalculator(e);
	            var myValue;
	            var otherValue;
	
	            // Gather the statistics about the value and presence/absence of the
	            // element in the two expressions.
	            _root.accept(visitor);
	            myValue = visitor.value();
	
	            visitor.reset();
	
	            o.accept(visitor);
	            otherValue = visitor.value();
	
	            // The element is found in both expressions; the similarity
	            // increases.
	            if (myValue > 0 && otherValue > 0) {
	                metric += 1;
	                return;
	            }
	            // The element is absent in both expressions; the similarity
	            // increases.
	            if (myValue == 0 && otherValue == 0) {
	                metric += 1;
	                return;
	            }
	        });
	        return parseFloat(metric) / e.count();
	    };
	
	    /**
	    #### .split([nested])
	    Splits this expression into its subexpressions. If the nested flag is passed
	    in, it will completely split the expression, otherwise only the top children
	    are split. This is a destructive action. The original expression will be
	    changed.
	    **/
	    _obj.split = function (n) {
	        var nested = n == undefined ? false : n;
	        var newExprs = [];
	        var split = _root.split(nested);
	        var newExprs = [];
	
	        split.forEach(function (n, i) {
	            var newRoot = null;
	            if (isOperatorNode(n)) {
	                newRoot = n;
	            } else {
	                newRoot = OperatorNode('AND');
	                newRoot.addChild(n);
	            }
	
	            if (i == 0) {
	                _root = newRoot;
	                newExprs.push(_obj);
	            } else {
	                newExprs.push(SetExpression(newRoot, _elements));
	            }
	        });
	
	        return newExprs;
	    };
	
	    /**
	    #### .merge(expression, flatten)
	    Merges another SetExpression with this one.
	    **/
	    _obj.merge = function (e) {
	        var otherRoot = e.root();
	        var composite = e.count() > 1;
	
	        // Don't fire the change event for every little change. We will fire
	        // it once after all changes have been made for the merge.
	        _events.mute('change');
	        if (composite) {
	            // The other expression is a composite expression. Create a new
	            // level in the expression tree.
	            var newRoot = OperatorNode('AND');
	            newRoot.addChild(_root);
	            newRoot.addChild(otherRoot);
	            _root.removeListener('change', bubbleChange);
	            _root = newRoot;
	            _root.on('change', bubbleChange);
	            _obj.flatten();
	        } else {
	            // The other expression is a single set.
	            _root.addChild(otherRoot.children()[0]);
	        }
	
	        _events.unmute('change');
	        _events.call('change');
	        return _obj;
	    };
	
	    /**
	    #### .flatten()
	    Flattens this expression by moving any single layers up the tree.
	    **/
	    _obj.flatten = function () {
	        var rChildren = _root.children();
	        var nChildren = [];
	
	        _events.mute('change');
	        if (rChildren.length == 1 && isOperatorNode(rChildren[0])) {
	            // Change the root
	            _root.removeListener('change', bubbleChange);
	            _root = rChildren[0];
	            _root.on('change', bubbleChange);
	            return;
	        }
	        rChildren.forEach(function (n) {
	            if (isOperatorNode(n) && n.children().length == 1) {
	                var child = n.children()[0];
	                n.removeChild(child);
	                nChildren.push(child);
	                return;
	            }
	            nChildren.push(n);
	        });
	        _root.clear();
	        nChildren.forEach(function (n) {
	            _root.addChild(n);
	        });
	
	        _events.unmute('change');
	        _events.call('change');
	        return _obj;
	    };
	
	    /**
	    #### .preview(expression)
	    Returns a copy of this expression merged with another.
	    **/
	    _obj.preview = function (e) {
	        // Clone the root and its children.
	        var newRoot = OperatorNode(_root.operator());
	        _root.children().forEach(function (n) {
	            newRoot.addChild(n);
	        });
	        var newExpr = SetExpression(newRoot, _elements);
	        newExpr.merge(e);
	        return newExpr;
	    };
	
	    /**
	    #### .accept(visitor)
	    Implements the visitor pattern to allow various operations on this expression.
	    This performs a depth-first search.
	    **/
	    _obj.accept = function (v) {
	        _root.accept(v);
	    };
	
	    // Bubble up the root 'change' event
	    _root.on('change', bubbleChange);
	
	    // Listen to the 'change' event to refresh the value cache
	    _obj.on('change', refreshCache);
	
	    return _obj;
	}
	
	/**
	## OperatorNode(operator)
	Creates an operator node with the given operator. The current operators
	supported are: "AND", "OR". Default is "AND". Each operator node may have other
	nodes as children to form an expression tree.
	**/
	function OperatorNode(operator) {
	    var _operator = operator;
	    var _children = [];
	    var _obj = {};
	    var _events = (0, _plugins.Events)(_obj, ['change']);
	
	    function bubbleChange() {
	        _events.call('change');
	    };
	
	    /**
	    #### .addChild(node)
	    Adds a child node to this operator.
	    **/
	    _obj.addChild = function (n) {
	        _children.push(n);
	        _events.call('change');
	        // Bubble up the "change" event from any added nodes
	        n.on('change', bubbleChange);
	        return _obj;
	    };
	
	    /**
	    #### .removeChild(node)
	    Removes a child node from this operator.
	    **/
	    _obj.removeChild = function (n) {
	        for (var i = 0; i < _children.length; i++) {
	            if (_children[i] === n) {
	                _children.splice(i, 1);
	                _events.call('change');
	                // No longer listen to the "change" event from the removed child
	                n.removeListener('change', bubbleChange);
	                return _obj;
	            }
	        }
	        return _obj;
	    };
	
	    /**
	    #### .children()
	    Returns the children of this node.
	    **/
	    _obj.children = function () {
	        return _children.slice(0);
	    };
	
	    /**
	    #### .clear()
	    Removes the children from this operator.
	    **/
	    _obj.clear = function () {
	        // No longer listen to the "change" event from the removed children
	        _children.forEach(function (n) {
	            n.removeListener('change', bubbleChange);
	        });
	
	        _children = [];
	        _events.call('change');
	        return _obj;
	    };
	
	    /**
	    #### .operator()
	    Gets or sets the operator for this node.
	    **/
	    _obj.operator = function (o) {
	        if (!arguments.length) {
	            return _operator;
	        }
	        _operator = o;
	        _events.call('change');
	        return _obj;
	    };
	
	    /**
	    #### .contains(case)
	    Returns true if the subtree under this operator contains the given data
	    case
	    **/
	    _obj.contains = function (c) {
	        for (var i = 0; i < _children.length; i++) {
	            if (_children[i].contains(c)) {
	                return true;
	            }
	        }
	        return false;
	    };
	
	    /**
	    #### .split([nested])
	    Splits any subexpressions from this OperatorNode and returns an array of
	    OperatorNodes representing the split. This is a destructive action; the
	    children of this node will be removed. If nested is true, it will 
	    recursively split all of the subexpressions down the tree.
	    **/
	    _obj.split = function (n) {
	        var nested = n == undefined ? false : n;
	        var newNodes = [];
	
	        _children.forEach(function (c) {
	            if (isOperatorNode(c)) {
	                if (nested) {
	                    newNodes = [].concat.apply(newNodes, c.split(nested));
	                } else {
	                    newNodes.push(c);
	                }
	            } else {
	                newNodes.push(c);
	            }
	        });
	        _obj.clear();
	        return newNodes;
	    };
	
	    /**
	    #### .accept(visitor)
	    Implements the visitor pattern to allow various operations on this node.
	    This performs a depth-first search.
	    **/
	    _obj.accept = function (v) {
	        v.visitPre(_obj);
	        _children.forEach(function (c) {
	            c.accept(v);
	        });
	        v.visitPost(_obj);
	    };
	
	    return _obj;
	}
	
	/**
	## DataNode(dataCase)
	This node represents a data case/data set in the boolean expression tree. These 
	nodes are found at the leaves of the tree. The data node can be NOTed.
	**/
	function DataNode(dataCase) {
	    var _data = dataCase;
	    var _obj = {};
	    var _events = (0, _plugins.Events)(_obj, ['change']);
	    var _not = false;
	
	    /**
	    #### .data()
	    Returns the DataCase object associated with this node.
	    **/
	    _obj.data = function () {
	        return _data;
	    };
	
	    /**
	    #### .not([boolean])
	    Gets or sets whether this data node is NOTed.
	    **/
	    _obj.not = function (b) {
	        if (!arguments.length) {
	            return _not;
	        }
	        _not = b;
	        return _obj;
	    };
	
	    /**
	    #### .value(element)
	    Returns 0 or 1 to indicate if the element exists in the data case.
	    **/
	    _obj.value = function (e) {
	        if (_not) {
	            return _data.set().has(e) ? 0 : 1;
	        } else {
	            return _data.set().has(e) ? 1 : 0;
	        }
	    };
	
	    /**
	    #### .contains(case)
	    Returns true if this data node contains the given data case.
	    **/
	    _obj.contains = function (c) {
	        return c.label() === _data.label();
	    };
	
	    /**
	    #### .accept(visitor)
	    Implements the visitor pattern to allow various operations on this node.
	    **/
	    _obj.accept = function (v) {
	        v.visitPre(_obj);
	        v.visitPost(_obj);
	    };
	
	    // Pass along the "change" event from the data case
	    _data.on('change', function () {
	        _events.call('change');
	    });
	
	    return _obj;
	}
	
	/**
	#### isOperatorNode(node)
	Returns true if the node is an Operator node using duck-typing.
	**/
	function isOperatorNode(n) {
	    return Object.prototype.toString.call(n.operator) === "[object Function]";
	}
	
	/**
	## ValueCalculator(expression)
	An object that uses the visitor pattern to calculate the value of an element
	in the data sets of an expression tree. If you are going to re-use the same
	object, call reset() before passing it to accept().
	
	After the visitor is done, call value() to retrieve the calculated value. For
	additional details, the presenceCount() and absenceCount() give the number of
	sets at the TOP level that contain or do not contain the element, respectively.
	**/
	function ValueCalculator(element) {
	    var _element = element;
	    var _obj = {};
	    var _operatorStack = [];
	    var _dataStack = [[]];
	    var _presenceCount = 0;
	    var _absenceCount = 0;
	
	    _obj.visitPre = function (n) {
	        if (isOperatorNode(n)) {
	            _operatorStack.push(n.operator());
	            _dataStack.push([]);
	        }
	    };
	
	    _obj.visitPost = function (n) {
	        if (isOperatorNode(n)) {
	            var operator = _operatorStack.pop();
	            var parentOp = _operatorStack.pop();
	            var data = _dataStack.pop();
	            var ret = _dataStack.pop();
	
	            // We apply a simplification rule here: X && (Y && Z) = X && Y && Z
	            // and X || (Y || Z) = X || Y || Z.
	            if (operator === parentOp) {
	                ret = ret.concat(data);
	            } else {
	                // The operators are very similar in nature, so we can reduce
	                // share a good chunk of code
	                var sum = 0;
	                _presenceCount = 0;
	                data.forEach(function (d) {
	                    if (d) {
	                        _presenceCount++;
	                    };
	                    sum += d;
	                });
	                _absenceCount = data.length - _presenceCount;
	
	                if (operator === "AND") {
	                    ret.push(_absenceCount >= 1 ? 0 : 1);
	                } else if (operator === "OR") {
	                    ret.push(parseFloat(sum) / data.length);
	                }
	            }
	            _dataStack.push(ret);
	            _operatorStack.push(parentOp);
	            return;
	        } else {
	            var data = _dataStack.pop();
	            data.push(n.value(_element));
	            _dataStack.push(data);
	            return;
	        }
	    };
	
	    _obj.value = function () {
	        return _dataStack[0][0];
	    };
	
	    _obj.presenceCount = function () {
	        return _presenceCount;
	    };
	
	    _obj.absenceCount = function () {
	        return _absenceCount;
	    };
	
	    _obj.reset = function () {
	        _presenceCount = 0;
	        _absenceCount = 0;
	        _dataStack = [[]];
	    };
	
	    return _obj;
	}
	
	/**
	## SetCountCalculator
	Counts the number of data sets in an expression tree.
	**/
	function SetCountCalculator() {
	    var _obj = {};
	    var _count = 0;
	
	    _obj.visitPre = function (n) {
	        if (!isOperatorNode(n)) {
	            _count++;
	        }
	    };
	
	    _obj.visitPost = function (n) {};
	
	    _obj.count = function () {
	        return _count;
	    };
	
	    _obj.reset = function () {
	        _count = 0;
	    };
	
	    return _obj;
	}
	
	exports.SetDataSource = SetDataSource;
	exports.Set = Set;
	exports.DataCase = DataCase;
	exports.SetExpression = SetExpression;
	exports.OperatorNode = OperatorNode;
	exports.DataNode = DataNode;
	exports.isOperatorNode = isOperatorNode;
	exports.ValueCalculator = ValueCalculator;
	exports.SetCountCalculator = SetCountCalculator;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Avoid `console` errors in browsers that lack a console.
	(function () {
	    var method;
	    var noop = function noop() {};
	    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	    var length = methods.length;
	    var console = window.console = window.console || {};
	
	    while (length--) {
	        method = methods[length];
	
	        // Only stub undefined methods.
	        if (!console[method]) {
	            console[method] = noop;
	        }
	    }
	})();
	
	/**
	#### createUUID()
	Creates a Universally Unique Identifier. Taken from
	http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	**/
	function createUUID() {
	    var s = [];
	    var hexDigits = "0123456789abcdef";
	    for (var i = 0; i < 36; i++) {
	        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	    }
	    s[14] = "4";
	    s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
	    s[8] = s[13] = s[18] = s[23] = "-";
	    var uuid = s.join("");
	    return uuid;
	}
	
	/**
	#### gcd(int,int)
	Calculates the greatest common divisor of two integers using Euclidian's 
	algorithm.
	**/
	function gcd(a, b) {
	    var t;
	    while (b != 0) {
	        t = b;
	        b = a % b;
	        a = t;
	    }
	    return a;
	}
	
	/**
	#### lcm(int,int)
	Calculates the least common multiple of two integers.
	**/
	function lcm(a, b) {
	    return a * b / gcd(a, b);
	}
	
	/**
	Creates all combinations of length m from an array using Chase's "twiddle"
	algorithm. Adapted from http://www.netlib.no/netlib/toms/382.
	**/
	function combinations(arr, m) {
	    var m = m;
	    var n = arr.length;
	    var p = [];
	    var combinations = [];
	    if (n < m) {
	        return combinations;
	    }
	
	    // Initialize the p array
	    p[0] = n + 1;
	    for (var i = 1; i <= n - m; i++) {
	        p[i] = 0;
	    }
	    var a = 1;
	    for (var i = n - m + 1; i <= n; i++) {
	        p[i] = a;
	        a++;
	    }
	    p[n + 1] = -2;
	
	    // Initialize the first combo
	    var c = [];
	    var a = n - m;
	    for (var i = 0; i < m; i++) {
	        c[i] = arr[a];
	        a++;
	    }
	    combinations.push(c.slice(0));
	
	    // Perform the "twiddle"
	    var i, j, k;
	    var x, y, z;
	    function twiddle() {
	        j = 1;
	        while (p[j] <= 0) {
	            j++;
	        }
	        if (p[j - 1] == 0) {
	            for (i = j - 1; i != 1; i--) {
	                p[i] = -1;
	            }
	            p[j] = 0;
	            x = z = 0;
	            p[1] = 1;
	            y = j - 1;
	        } else {
	            if (j > 1) {
	                p[j - 1] = 0;
	            }
	            do {
	                j++;
	            } while (p[j] > 0);
	            k = j - 1;
	            i = j;
	            while (p[i] == 0) {
	                p[i++] = -1;
	            }
	            if (p[i] == -1) {
	                p[i] = p[k];
	                z = p[k] - 1;
	                x = i - 1;
	                y = k - 1;
	                p[k] = -1;
	            } else {
	                if (i == p[0]) {
	                    return true;
	                } else {
	                    p[j] = p[i];
	                    z = p[i] - 1;
	                    p[i] = 0;
	                    x = j - 1;
	                    y = i - 1;
	                }
	            }
	        }
	        return false;
	    }
	
	    while (!twiddle()) {
	        c[z] = arr[x];
	        combinations.push(c.slice(0));
	    }
	    return combinations;
	}
	
	/**
	#### rectOverlap(bound, bound)
	Given two bounding rectangles, returns true if they overlap or intersect.
	**/
	function rectOverlap(a, b) {
	    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
	}
	
	/**
	#### pointDistance(p1, p2)
	Calculates the distance between two points.
	**/
	function pointDistance(p1, p2) {
	    var xs = 0;
	    var ys = 0;
	    xs = p2.x - p1.x;
	    xs = xs * xs;
	    ys = p2.y - p1.y;
	    ys = ys * ys;
	    return Math.sqrt(xs + ys);
	}
	
	/**
	#### isArray(object)
	Returns true if the object is an array
	**/
	function isArray(item) {
	    return Object.prototype.toString.call(item) === "[object Array]";
	}
	
	/**
	#### isObject(object)
	Returns true if the object is an object
	**/
	function isObject(item) {
	    return Object.prototype.toString.call(item) === "[object Object]";
	}
	
	/**
	#### isFunction(object)
	Returns true if the object is a function
	**/
	function isFunction(item) {
	    return Object.prototype.toString.call(item) === "[object Function]";
	}
	
	/**
	#### Events(object, events)
	Given an object and array of event names, it will create the mechanisms for 
	event callbacks. The object passed in will have the following methods defined:
	 .on(evt, function)
	    Registers a listener for the given event
	 .removeListener(evt, function)
	    Removes a listener for the given event
	
	The function returns the Events object, which has the following methods:
	  .call(evt[, arg1][, arg2][, ...])
	    Calls the listeners for the given event with the arguments. The context (
	    i.e, 'this') will be the object passed in to createEvents().
	  .callWith(evt, context[, arg1][, arg2][, ...])
	    Calls the listeners for the given event with the given context and arguments.
	  .apply(evt[, args])
	    Calls the listeners for the given event with the arguments given as an array.
	    The context (i.e., 'this') will be the object passed in to createEvents().
	  .applyWith(evt, context[, args])
	    Calls the listeners for the given event with the given context and the 
	    arguments given as an array.
	  .mute(evt)
	    Prevents an event from firing.
	  .unmute(evt)
	    Un-mutes an event, allowing it to fire again.
	**/
	function Events(obj, evts) {
	    var _listeners = {};
	    var _muted = {};
	    var _obj = {};
	
	    // Create the callback handlers. We use the jQuery.Callbacks() object
	    evts.forEach(function (d, i) {
	        _listeners[d] = $.Callbacks();
	    });
	
	    // Methods defined on the object passed in *********************************
	    obj.on = function (e, f) {
	        _listeners[e].add(f);
	        return obj;
	    };
	
	    obj.removeListener = function (e, f) {
	        _listeners[e].remove(f);
	        return obj;
	    };
	
	    // Methods defined on the Event object returned ****************************
	    _obj.call = function (evt) {
	        if (_muted[evt]) {
	            return;
	        }
	        var args = Array.prototype.slice.call(arguments, 2);
	        _listeners[evt].fireWith(obj, args);
	        return _obj;
	    };
	
	    _obj.callWith = function (evt, thisObj) {
	        if (_muted[evt]) {
	            return;
	        }
	        var args = Array.prototype.slice.call(arguments, 2);
	        _listeners[evt].fireWith(thisObj, args);
	        return _obj;
	    };
	
	    _obj.apply = function (evt, args) {
	        if (_muted[evt]) {
	            return;
	        }
	        _listeners[evt].fireWith(obj, args);
	        return _obj;
	    };
	
	    _obj.applyWith = function (evt, thisObj, args) {
	        if (_muted[evt]) {
	            return;
	        }
	        _listeners[evt].fireWith(thisObj, args);
	        return _obj;
	    };
	
	    _obj.mute = function (evt) {
	        _muted[evt] = true;
	    };
	
	    _obj.unmute = function (evt) {
	        _muted[evt] = false;
	    };
	
	    return _obj;
	}
	
	/**
	#### .moveToFront()
	Moves a D3 selection to the front of its parent. Taken from
	http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
	**/
	d3.selection.prototype.moveToFront = function () {
	    return this.each(function () {
	        this.parentNode.appendChild(this);
	    });
	};
	
	/**
	#### .moveToBack()
	Moves a D3 selection to the back of its parent. Taken from
	http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
	**/
	d3.selection.prototype.moveToBack = function () {
	    return this.each(function () {
	        var firstChild = this.parentNode.firstChild;
	        if (firstChild) {
	            this.parentNode.insertBefore(this, firstChild);
	        }
	    });
	};
	
	/**
	#### d3.dispatch()
	Augments d3.dispatch to allow for the muting and unmuting of events.
	**/
	d3.dispatch = function () {
	    var dispatch = new mutable_dispatch(),
	        i = -1,
	        n = arguments.length;
	    while (++i < n) {
	        dispatch[arguments[i]] = mutable_dispatch_event(dispatch);
	    }return dispatch;
	};
	
	function mutable_dispatch() {}
	
	mutable_dispatch.prototype.on = function (type, listener) {
	    var i = type.lastIndexOf("."),
	        name = "";
	    if (i >= 0) {
	        name = type.substring(i + 1);
	        type = type.substring(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	        if (listener == null) for (type in this) {
	            if (this.hasOwnProperty(type)) this[type].on(name, null);
	        }
	        return this;
	    }
	};
	
	/**
	#### .mute(type[, muted])
	Mutes or unutes the event type. 
	
	The type string follows the same convention as d3.dispatch.on(). An optional
	namespace may be appended, such as "click.foo" to mute or unmute the event with
	that specific namespace. 
	
	If no namespace is appended, all listeners for the event type are muted or
	unmuted. For example, dispatch.mute('click', true) will mute all "click" events,
	including "click" and "click.foo". This means if you want to mute just the
	non-namespaced "click" event, you will have to unmute the namespaced events
	afterward.
	
	Passing in just the namespace mutes or unmutes all events with that namespace.
	For example, dispatch.mute('.foo', true) will mute all events namespaced with 
	".foo".
	
	If muted is not specified, the current muted status for the event is returned.
	**/
	mutable_dispatch.prototype.mute = function (type, muted) {
	    var i = type.lastIndexOf("."),
	        name = "";
	    if (i >= 0) {
	        name = type.substring(i + 1);
	        type = type.substring(0, i);
	    }
	    if (type) {
	        return arguments.length < 2 ? this[type].mute(name) : this[type].mute(name, muted);
	    }
	    if (arguments.length === 2) {
	        for (type in this) {
	            if (this.hasOwnProperty(type)) {
	                this[type].mute(name, muted);
	            }
	        }
	        return this;
	    }
	};
	
	function mutable_dispatch_event(dispatch) {
	    var listeners = [],
	        listenerByName = d3.map();
	
	    function event() {
	        var z = listeners,
	            i = -1,
	            n = z.length,
	            l;
	        while (++i < n) {
	            if ((l = z[i].on) && !z[i].muted) l.apply(this, arguments);
	        }return dispatch;
	    }
	
	    event.on = function (name, listener) {
	        var l = listenerByName.get(name),
	            i;
	        if (arguments.length < 2) return l && l.on;
	        if (l) {
	            l.on = null;
	            l.muted = false;
	            listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	            listenerByName.remove(name);
	        }
	        if (listener) listeners.push(listenerByName.set(name, {
	            on: listener,
	            muted: false
	        }));
	        return dispatch;
	    };
	
	    event.mute = function (name, muted) {
	        if (name == "") {
	            var z = listeners,
	                i = -1,
	                n = z.length;
	            while (++i < n) {
	                z[i].muted = muted;
	            }
	        } else {
	            var l = listenerByName.get(name),
	                i;
	            if (arguments.length < 2) {
	                return l && l.muted;
	            }
	            if (l) {
	                l.muted = muted;
	            }
	        }
	        return dispatch;
	    };
	
	    return event;
	}
	
	exports.createUUID = createUUID;
	exports.gcd = gcd;
	exports.lcm = lcm;
	exports.combinations = combinations;
	exports.rectOverlap = rectOverlap;
	exports.pointDistance = pointDistance;
	exports.isArray = isArray;
	exports.isObject = isObject;
	exports.isFunction = isFunction;
	exports.Events = Events;
	exports.mutable_dispatch = mutable_dispatch;
	exports.mutable_dispatch_event = mutable_dispatch_event;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PixelLayer = undefined;
	
	var _plugins = __webpack_require__(14);
	
	var _datastructs = __webpack_require__(13);
	
	/**
	## BandScale
	Produces a scale that can be used to draw a band of items, much like
	d3.scale.ordinal().rangeBands(), but with fixed pixel padding.
	**/
	/*
	    TODO Add clipping mask to labels
	    TODO Document the events from PixelLayer
	    TODO Hide/Show labels depth > 1 with mouseover
	    FIXME Labels w/ depth > 1 don't have gap
	*/
	
	function BandScale() {
	    var _padding = 0;
	    var _outerPadding = 0;
	    var _domain = [];
	    var _range = [0, 1];
	    var _bandCache = null;
	
	    var _scale = function _scale(e) {
	        var index = _domain.indexOf(e);
	        if (index == 0) {
	            return _outerPadding;
	        } else {
	            return index * (_scale.rangeBand() + _padding) + _outerPadding;
	        }
	    };
	
	    /**
	    #### .domain([array])
	    Gets or sets the domain of the scale. Should be a set of ordinal values.
	    **/
	    _scale.domain = function (d) {
	        if (!arguments.length) {
	            return _domain;
	        }
	        _domain = d;
	        _bandCache = null;
	        return _scale;
	    };
	
	    /**
	    #### .rangeBands(interval,[padding],[outerPadding])
	    Sets the output range to the specified interval with the given fixed
	    padding widths.
	    **/
	    _scale.rangeBands = function (r, p, o) {
	        _range = r;
	        _padding = p || 0;
	        _outerPadding = o || 0;
	        _bandCache = null;
	        return _scale;
	    };
	
	    /**
	    #### .rangeBand()
	    Returns the width of a band.
	    **/
	    _scale.rangeBand = function () {
	        if (_bandCache == null) {
	            var width = Math.abs(_range[1] - _range[0]);
	            var bandCount = _domain.length;
	            _bandCache = (width - 2 * _outerPadding - _padding * (bandCount - 1)) / bandCount;
	        }
	        return _bandCache;
	    };
	    return _scale;
	}
	
	/**
	## PixelLayer(anchor, defs)
	Draws a PixelLayer chart in the given SVG or G element.
	**/
	function PixelLayer(anchor) {
	    var _anchor = anchor;
	    var _root = d3.select(_anchor);
	    var _g = null;
	    var _innerG = null;
	    var _outerG = null;
	    var _defs = null;
	    var _uuid = (0, _plugins.createUUID)();
	    var _chart = {};
	
	    var _elements = null;
	    var _expression = null;
	
	    var _width = 184;
	    var _height = 184;
	    var _xPos = 0;
	    var _yPos = 0;
	    var _columns = 15;
	    var _rows = 15;
	
	    var _pixelGap = 3;
	    var _pixelColor = function _pixelColor(d, i) {
	        return d3.rgb(17, 110, 220);
	    };
	    var _labelColor = function _labelColor(d, i) {
	        return d3.rgb(17, 110, 220);
	    };
	    var _borderColor = d3.rgb(255, 255, 255);
	    var _borderWidth = 0.5;
	    var _groupColor = function _groupColor(d, i) {
	        return d3.rgb(255, 248, 191);
	    };
	    var _groupWidth = 1;
	
	    var _valueAccessor = function _valueAccessor(d, i) {
	        return d.value;
	    };
	    var _groupAccessor = function _groupAccessor(d, i) {
	        return d.class;
	    };
	
	    var _faded = false;
	    var _simple = false;
	    var _highlight = true;
	    var _highlightGroups = true;
	
	    // The event listeners available for this chart
	    var _listeners = {
	        'dragstart': [],
	        'drag': [],
	        'dragend': [],
	        'mouseenter': [],
	        'mouseleave': [],
	        'mousedown': [],
	        'mouseup': [],
	        'click': [],
	        'mouseenter.pixel': [],
	        'mouseleave.pixel': [],
	        'mousedown.pixel': [],
	        'mouseup.pixel': [],
	        'click.pixel': [],
	        'mouseenter.group': [],
	        'mouseleave.group': [],
	        'click.split': [],
	        'drag.label': [],
	        'change.operator': []
	    };
	
	    // The drag behavior
	    var _dragging = false;
	    var _label = null;
	    var _drag = d3.behavior.drag().origin(function () {
	        return {
	            'x': _chart.x(),
	            'y': _chart.y()
	        };
	    }).on('dragstart', function () {
	        _dragging = true;
	        // Cancel propogation so that the zoom behavior doesn't kick in
	        d3.event.sourceEvent.stopPropagation();
	        callListeners('dragstart', _chart);
	    }).on('drag', function (d, i) {
	        _chart.x(d3.event.x);
	        _chart.y(d3.event.y);
	        _g.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
	        d3.event.sourceEvent.stopPropagation();
	        callListeners('drag', _chart);
	        // If the drag originated with a label, we need to fire the "drag.label"
	        // event.
	        if (_label) {
	            var data = {
	                parent: _label.parent,
	                node: _label.node,
	                depth: _label.depth
	            };
	            callListeners('drag.label', _chart, data);
	            _label = null;
	        }
	    }).on('dragend', function () {
	        _dragging = false;
	        d3.event.sourceEvent.stopPropagation();
	        callListeners('dragend', _chart);
	    });
	
	    /**
	    #### reset()
	    Resets the chart, clearing its main elements.
	    **/
	    function reset() {
	        if (_g) {
	            _g.remove();
	        }
	
	        _g = _root.append('svg:g').classed('pl', true);
	        _outerG = _g.append('svg:g').classed('outer', true);
	        _innerG = _outerG.append('svg:g').classed('inner', true);
	
	        // Move to the x and y position
	        _g.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
	
	        // Create the labels at the top of the PixelLayer. They do not change.
	        drawCompositeLabels();
	
	        // Create the border
	        var borderWidth = _chart.borderWidth();
	        _innerG.append('svg:rect').classed('pl-box', true).attr('width', _chart.width()).attr('height', _chart.height()).style('fill-opacity', 0.5).style('stroke', _chart.borderColor()).style('stroke-width', _chart.borderWidth());
	
	        // Create the area for pixels
	        _innerG.append('svg:g').classed('pl-pixels', true).attr('transform', "translate(0,0)");
	
	        // Create the area for expression labels
	        _innerG.append('svg:g').classed('pl-labels', true).attr('transform', "translate(" + (0 - borderWidth) + "," + (_chart.height() - borderWidth) + ")");
	
	        // Hook up the events
	        _g.on('mouseenter', function () {
	            if (!_dragging) {
	                callListeners('mouseenter', _chart);
	            }
	        }).on('mouseleave', function () {
	            if (!_dragging) {
	                callListeners('mouseleave', _chart);
	            }
	        }).on('mousedown', function () {
	            callListeners('mousedown', _chart);
	        }).on('mouseup', function () {
	            callListeners('mouseup', _chart);
	        }).on('click', function () {
	            callListeners('click', _chart);
	        }).call(_drag);
	    }
	
	    /**
	    #### createPixelGroups()
	    Creates the data of the pixel groups.
	    **/
	    function createPixelGroups() {
	        var columnCount = _chart.columns();
	        var rowCount = _chart.rows();
	        var total = rowCount * columnCount;
	
	        // Calculate the values of the pixels
	        var expression = _chart.expression();
	        var valueAccessor = _chart.valueAccessor();
	        var groupAccessor = _chart.groupAccessor();
	        var data = _chart.elements().slice(0, total).map(function (d, i) {
	            var row = parseInt(i / rowCount);
	            var col = i - row * rowCount;
	            return {
	                value: valueAccessor(d),
	                pixelValue: expression.value(d),
	                group: groupAccessor(d),
	                element: d,
	                row: row,
	                column: col,
	                index: i
	            };
	        });
	
	        var count = data.length;
	        if (count < total) {
	            var pad = Array.apply(null, new Array(total - data.length)).map(function (d, i) {
	                var row = parseInt((i + count) / rowCount);
	                var col = i + count - row * rowCount;
	                return {
	                    value: null,
	                    pixelValue: null,
	                    group: "",
	                    element: null,
	                    row: row,
	                    column: col,
	                    index: i + count
	                };
	            });
	            data = data.concat(pad);
	        }
	
	        // Nest by groups, calculating the top right and bottom left pixels that
	        // belong to each group.
	        var groupRectDict = {};
	        var pixelsByGroup = d3.nest().key(function (d) {
	            return d.group;
	        }).sortValues(function (a, b) {
	            return d3.ascending(a.index, b.index);
	        }).entries(data).map(function (g) {
	            g.tl = g.values[0];
	            g.br = g.values[g.values.length - 1];
	            return g;
	        });
	
	        return pixelsByGroup;
	    }
	
	    /**
	    #### drawPixelGroups()
	    Draws the groups of pixels of the chart.
	    **/
	    function drawPixelGroups() {
	        var data = createPixelGroups();
	
	        // Create the svg groups
	        var pixelG = _innerG.select('g.pl-pixels');
	        var groups = pixelG.selectAll('g.pixel').data(data, function (d) {
	            return d.key;
	        });
	
	        // ENTER GROUPS
	        groups.enter().append('svg:g').classed('pixel', true).on('mouseenter', function (d) {
	            // Ignore the "null" group or when we are dragging
	            if (d.key.trim() === "" || _dragging) {
	                return;
	            }
	
	            if (_highlightGroups) {
	                d3.select(this).select('rect.pixel-border').classed('invisible', false);
	            }
	            callListeners('mouseenter.group', this, d.key, _chart);
	        }).on('mouseleave', function (d) {
	            if (d.key.trim() === "" || _dragging) {
	                return;
	            }
	            if (_highlightGroups) {
	                d3.select(this).select('rect.pixel-border').classed('invisible', true);
	            }
	            callListeners('mouseleave.group', this, d.key, _chart);
	        }).each(function (d) {
	            // Create a border if the group is not null
	            if (d.key.trim() != "") {
	                d3.select(this).append('svg:rect').datum(d).classed('pixel-border', true).classed('invisible', true);
	            }
	        });
	
	        // ENTER + UPDATE GROUPS
	        drawGroupBorders(groups);
	        drawPixels(groups);
	
	        // EXIT GROUPS
	        groups.exit().remove();
	    }
	
	    /**
	    #### drawPixels(selection)
	    Draws the pixels within their groups.
	    **/
	    function drawPixels(groups) {
	        var width = _chart.width() - _chart.borderWidth();
	        var height = _chart.height() - _chart.borderWidth();
	        var columnCount = _chart.columns();
	        var rowCount = _chart.rows();
	        var pixelGap = _chart.pixelGap();
	        var pixelColor = _chart.pixelColor();
	        var xScale = BandScale().domain(d3.range(columnCount)).rangeBands([0, width], pixelGap, 4);
	        var yScale = BandScale().domain(d3.range(rowCount)).rangeBands([0, height], pixelGap, 4);
	
	        var pixels = groups.selectAll('rect.pixel').data(function (d) {
	            return d.values;
	        });
	
	        // ENTER
	        pixels.enter().append('svg:rect').classed('pixel', true).classed('null', function (d) {
	            return d.value == null;
	        }).on('mouseenter', function (d, i) {
	            if (_dragging || d.value == null) {
	                return;
	            }
	            if (_highlight) {
	                d3.select(this).classed('hover', true);
	            }
	            callListeners('mouseenter.pixel', this, d.element, i, _chart);
	        }).on('mouseleave', function (d, i) {
	            if (_dragging || d.value == null) {
	                return;
	            }
	            if (_highlight) {
	                d3.select(this).classed('hover', false);
	            }
	            callListeners('mouseleave.pixel', this, d.element, i, _chart);
	        }).on('mousedown', function (d, i) {
	            if (d.value == null) {
	                return;
	            }
	            callListeners('mousedown.pixel', this, d.element, i, _chart);
	        }).on('mouseup', function (d, i) {
	            if (d.value == null) {
	                return;
	            }
	            callListeners('mouseup.pixel', this, d.element, i, _chart);
	        }).on('click', function (d, i) {
	            if (d.value == null) {
	                return;
	            }
	            callListeners('click.pixel', this, d.element, i, _chart);
	        });
	
	        // ENTER + UPDATE
	        pixels.classed('empty', function (d) {
	            return d.pixelValue == 0;
	        }).attr('width', xScale.rangeBand()).attr('height', yScale.rangeBand()).attr('transform', function (d, i) {
	            return "translate(" + xScale(d.column) + "," + yScale(d.row) + ")";
	        }).style('fill-opacity', function (d) {
	            return d.pixelValue > 0 ? 1 : 0;
	        }).style('fill', function (d, i) {
	            var color = pixelColor.call(_chart, d, i);
	            return d3.interpolateRgb(d3.rgb(0, 0, 0), color)(d.pixelValue);
	        });
	
	        // EXIT
	        pixels.exit().remove();
	    }
	
	    /**
	    #### drawGroups(selection)
	    Draws the group borders around the pixels. This assumes that the pixels are
	    ordered such that each group has arectangular area.
	    **/
	    function drawGroupBorders(groups) {
	        var width = _chart.width() - _chart.borderWidth();
	        var height = _chart.height() - _chart.borderWidth();
	        var columnCount = _chart.columns();
	        var rowCount = _chart.rows();
	        var pixelGap = _chart.pixelGap();
	        var groupWidth = _chart.groupWidth();
	        var groupColor = _chart.groupColor();
	        var xScale = BandScale().domain(d3.range(columnCount)).rangeBands([0, width], pixelGap, 4);
	        var yScale = BandScale().domain(d3.range(rowCount)).rangeBands([0, height], pixelGap, 4);
	
	        groups.select('rect.pixel-border').attr('x', function (d) {
	            return xScale(d.tl.column) - pixelGap / 2;
	        }).attr('y', function (d) {
	            return yScale(d.tl.row) - pixelGap / 2;
	        }).attr('width', function (d) {
	            return xScale(d.br.column) - xScale(d.tl.column) + pixelGap + xScale.rangeBand();
	        }).attr('height', function (d) {
	            return yScale(d.br.row) - yScale(d.tl.row) + pixelGap + yScale.rangeBand();
	        }).style('stroke', groupColor).style('stroke-width', groupWidth).style('fill-opacity', 0);
	    }
	
	    /**
	    #### drawLabels()
	    Draws the labels around the chart.
	    **/
	    function drawLabels() {
	        drawDataLabels();
	        updateCompositeLabels();
	    }
	
	    /**
	    #### drawDataLabels()
	    Draws the labels at the bottom of the PixelLayer showing the structure.
	    **/
	    function drawDataLabels() {
	        var width = _chart.width() + 2 * _chart.borderWidth();
	        var margin = _chart.borderWidth() + _chart.pixelGap();
	        var color = _chart.labelColor();
	        var generator = LabelGenerator().width(width).labelHeight(20).gap(2);
	
	        var data = generator(_chart.expression().root());
	        var count = data.length;
	        var labelG = _innerG.select('g.pl-labels');
	        var labels = labelG.selectAll('g.label').data(data);
	
	        // ENTER
	        var newLabels = labels.enter().append('svg:g').classed('label', true).on('mousedown', function (d) {
	            _label = d;
	        });
	        newLabels.append('svg:rect').classed('label', true);
	        newLabels.append('svg:text').classed('label', true);
	        newLabels.append('svg:text').classed('count', true);
	        newLabels.append('svg:title').text(function (d) {
	            return (_expression.not() ? "NOT " : "") + d.label;
	        });
	
	        // ENTER + UPDATE
	        labels.attr('transform', function (d) {
	            return "translate(" + d.x + "," + d.y + ")";
	        });
	        labels.select('rect').attr('width', function (d) {
	            return d.dx;
	        }).attr('height', function (d) {
	            return d.dy;
	        }).attr('fill', function (d, i) {
	            return color.call(_chart, d, i);
	        });
	        labels.select('text.label').attr('text-anchor', function (d) {
	            //Can use 'this.getComputedTextLength()' to check if size of label is less than surrounding box.
	            if (count == 1) {
	                return "start";
	            } else {
	                return "middle";
	            }
	        }).attr('x', function (d) {
	            if (count == 1) {
	                return margin;
	            } else {
	                return d.dx / 2;
	            }
	        }).attr('y', 15).attr('width', function (d) {
	            return d.dx * 0.8;
	        }).text(function (d) {
	            return d.label;
	        });
	        labels.select('text.count').attr('text-anchor', "end").attr('x', width - margin).attr('y', 15).text(function (d) {
	            return d.count;
	        }).classed('hidden', function (d) {
	            return count > 1;
	        });
	        labels.select('title').text(function (d) {
	            return (_expression.not() ? "NOT " : "") + d.label;
	        });
	
	        // EXIT
	        labels.exit().remove();
	    }
	
	    /**
	    ## LabelGenerator
	    Creates a layout generator for the data labels. It functions similarly to
	    d3.layout.partition, recursing a hierarchy to position nodes. The call
	    to generate the labels returns an array of nodes to be drawn.
	    **/
	    var LabelGenerator = function LabelGenerator() {
	        var _gap;
	        var _width;
	        var _labelHeight;
	
	        function recurse(node, parent, depth, x, dx, nodes) {
	            var children = (0, _datastructs.isOperatorNode)(node) ? node.children() : null;
	            var siblingCount = parent ? parent.children().length - 1 : null;
	            var count = (0, _datastructs.isOperatorNode)(node) ? null : node.data().set().count();
	            var label = (0, _datastructs.isOperatorNode)(node) ? node.operator() : (node.not() && siblingCount > 0 ? "NOT " : "") + node.data().label();
	            var nodeObj = {
	                depth: depth,
	                node: node,
	                parent: parent,
	                label: label,
	                count: count,
	                x: x,
	                y: depth * _labelHeight,
	                dx: dx,
	                dy: _labelHeight
	            };
	            if (depth > 0) {
	                nodeObj.y += _gap;
	            } // FIXME
	            nodes.push(nodeObj);
	
	            if (children) {
	                var scale = BandScale().domain(d3.range(children.length)).rangeBands([0, dx], _gap, 0);
	                children.forEach(function (c, i) {
	                    recurse(c, node, depth + 1, scale(i) + x, scale.rangeBand(), nodes);
	                });
	            }
	        }
	
	        var _obj = function _obj(root) {
	            var nodes = [];
	            recurse(root, null, -1, 0, _width, nodes);
	            nodes.shift();
	            return nodes;
	        };
	
	        _obj.gap = function (g) {
	            if (!arguments.length) {
	                return _gap;
	            }
	            _gap = g;
	            return _obj;
	        };
	
	        _obj.width = function (w) {
	            if (!arguments.length) {
	                return _width;
	            }
	            _width = w;
	            return _obj;
	        };
	
	        _obj.labelHeight = function (h) {
	            if (!arguments.length) {
	                return _labelHeight;
	            }
	            _labelHeight = h;
	            return _obj;
	        };
	
	        return _obj;
	    };
	
	    /**
	    #### drawCompositeLabels
	    Creates the labels for information about the PixelLayer if it is a composite
	    of multiple data sets.
	    **/
	    function drawCompositeLabels() {
	        var width = _chart.width() + 2 * _chart.borderWidth();
	        var borderWidth = _chart.borderWidth();
	
	        var cLabels = _outerG.append('svg:g').classed('pl-composite-labels', true).attr('transform', "translate(" + (0 - borderWidth) + "," + (borderWidth - 20) + ")");
	
	        var opLabel = cLabels.append('svg:g').classed('operator', true).classed('hidden', true).on('click', function () {
	            var not = _chart.expression().not();
	            if (_chart.expression().count() == 1) {
	                _chart.expression().not(!not);
	                _chart.redraw();
	                callListeners('change.operator', _chart, "NOT");
	            } else {
	                _chart.operator(_chart.operator() == "AND" ? "OR" : "AND");
	                _chart.redraw();
	                callListeners('change.operator', _chart, _chart.operator());
	            }
	        });
	        opLabel.append('svg:rect').classed('operator', true).attr('width', 40).attr('height', 20);
	        opLabel.append('svg:text').classed('operator', true).attr('text-anchor', "middle").attr('x', 20).attr('y', 15);
	
	        var countLabel = cLabels.append('svg:g').classed('count', true).classed('hidden', true).attr('transform', "translate(" + (width - 20) + ",0)");
	        countLabel.append('svg:rect').classed('count', true).attr('width', 20).attr('height', 20);
	        countLabel.append('svg:text').classed('count', true).attr('text-anchor', "middle").attr('x', 10).attr('y', 15);
	
	        var xLabel = cLabels.append('svg:g').classed('x', true).classed('hidden', true).attr('transform', "translate(" + (width - borderWidth) + "," + 20 + ")").on('click', function (d) {
	            callListeners('click.split', _chart);
	        });
	        xLabel.append('svg:rect').classed('x', true).attr('width', 20).attr('height', 20);
	        xLabel.append('svg:text').classed('x', true).attr('text-anchor', "middle").attr('x', 10).attr('y', 15).text('X');
	    }
	
	    /**
	    #### updateCompositeLabels
	    Updates the labels found at the top of the PixelLayer if it is a composite.
	    **/
	    function updateCompositeLabels() {
	        var operator = _chart.expression().root().operator();
	        var count = _chart.expression().count();
	        var color = _chart.labelColor();
	
	        if (count == 1) {
	            var opLabel = _outerG.select('g.operator').classed('hidden', false);
	            opLabel.select('text').text("NOT");
	
	            if (_chart.expression().not()) {
	                opLabel.select('rect').style('fill', function (d, i) {
	                    return color.call(_chart, d, i);
	                }).style('stroke', "none").style('fill-opacity', 1).attr('x', 0).attr('y', 0);
	
	                opLabel.select('text').style('fill', "black");
	            } else {
	                opLabel.select('rect').style('stroke', _chart.borderColor()).style('stroke-width', 0.5).style('fill', "black").style('fill-opacity', 0.5).attr('x', 0.5).attr('y', -0.5);
	
	                opLabel.select('text').style('fill', function (d, i) {
	                    return color.call(_chart, d, i);
	                });
	            }
	
	            _outerG.select('g.count').classed('hidden', true);
	
	            _outerG.select('g.x').classed('hidden', true);
	        } else {
	            var opLabel = _outerG.select('g.operator').classed('hidden', function () {
	                return count <= 1;
	            });
	            opLabel.select('rect').style('stroke', "none").style('fill', function (d, i) {
	                return color.call(_chart, d, i);
	            }).style('fill-opacity', 1).attr('x', 0).attr('y', 0);
	            opLabel.select('text').style('fill', "black").text(operator);
	
	            var countLabel = _outerG.select('g.count').classed("hidden", false);
	            countLabel.select('rect').style('fill', function (d, i) {
	                return color.call(_chart, d, i);
	            });
	            countLabel.select('text').text(count);
	
	            var splitLabel = _outerG.select('g.x').classed("hidden", false);
	            splitLabel.select('rect').attr('fill', function (d, i) {
	                return color.call(_chart, d, i);
	            });
	        }
	    }
	
	    /**
	    #### callListeners(event, this, [arg], ...)
	    Calls the listeners of an event. Follows the same format as function.call().
	    **/
	    function callListeners(evt, thisObj) {
	        var args = Array.prototype.slice.call(arguments, 2);
	        for (var i = 0; i < _listeners[evt].length; i++) {
	            _listeners[evt][i].apply(thisObj, args);
	        }
	    }
	
	    /**
	    #### applyListeners(event, this, [arg, ...])
	    Calls the listeners of an event, except it takes an array of arguments
	    instead of positional arguments, like function.apply()
	    **/
	    function applyListeners(evt, thisObj, args) {
	        for (var i = 0; i < _listeners[evt].length; i++) {
	            _listeners[evt][i].apply(thisObj, args);
	        }
	    }
	
	    /**
	    #### .select(selection)
	    Executes a d3.select() within the context of this PixelLayer.
	    **/
	    _chart.select = function (s) {
	        return _g.select(s);
	    };
	
	    /**
	    #### .selectAll(selection)
	    Executes a d3.selectAll() within the context of this PixelLayer.
	    **/
	    _chart.selectAll = function (s) {
	        return _g.selectAll(s);
	    };
	
	    /**
	    #### .render()
	    Renders the chart from scratch.
	    **/
	    _chart.render = function () {
	        reset();
	        drawPixelGroups();
	        drawLabels();
	        return _chart;
	    };
	
	    /**
	    #### .redraw()
	    Redraws the chart in place.
	    **/
	    _chart.redraw = function () {
	        drawPixelGroups();
	        drawLabels();
	        return _chart;
	    };
	
	    /**
	    #### .preview()
	    Redraws the chart pixels, but does not update the labels.
	    **/
	    _chart.preview = function () {
	        drawPixelGroups();
	        return _chart;
	    };
	
	    /**
	    #### .remove()
	    Removes the chart from the canvas.
	    **/
	    _chart.remove = function () {
	        if (_g) {
	            _g.remove();
	        }
	    };
	
	    /**
	    #### .moveToFront()
	    Moves the chart to the front of the canvas.
	    **/
	    _chart.moveToFront = function () {
	        if (_g) {
	            _g.moveToFront();
	        }
	    };
	
	    /**
	    #### .moveToBack()
	    Moves the chart to the back of the canvas.
	    **/
	    _chart.moveToBack = function () {
	        if (_g) {
	            _g.moveToBack();
	        }
	    };
	
	    /**
	    #### fadeIn(duration[,delay])
	    Fades in this pixel layer
	    **/
	    _chart.fadeIn = function (dur, del) {
	        var dur = dur != undefined ? dur : 500;
	        var del = del != undefined ? del : 0;
	        if (_g) {
	            _g.transition().duration(dur).delay(del).style('opacity', 1);
	            _faded = false;
	        }
	    };
	
	    /**
	    #### .fadeOut(opacity[,duration][,delay])
	    Fades out this pixel layer
	    **/
	    _chart.fadeOut = function (op, dur, del) {
	        var op = op != undefined ? op : 0.5;
	        var dur = dur != undefined ? dur : 500;
	        var del = del != undefined ? del : 0;
	        if (_g) {
	            _g.transition().duration(dur).delay(del).style('opacity', op);
	            _faded = true;
	        }
	    };
	
	    /**
	    #### .faded()
	    Returns true if this chart is faded.
	    **/
	    _chart.faded = function () {
	        return _faded;
	    };
	
	    /**
	    #### .highlight([boolean])
	    Turns on or off automatic pixel highlighting
	    **/
	    _chart.highlight = function (b) {
	        if (!arguments.length) {
	            return _highlight;
	        }
	        _highlight = b;
	        return _chart;
	    };
	
	    /**
	    #### .highlight([boolean])
	    Turns on or off automatic pixel group highlighting
	    **/
	    _chart.highlightGroups = function (b) {
	        if (!arguments.length) {
	            return _highlightGroups;
	        }
	        _highlightGroups = b;
	        return _chart;
	    };
	
	    /**
	    #### .elements([array])
	    Gets or sets the elements represented by pixels. The input should be an
	    array of SetElement objects. They will fill the pixel grid from left to
	    right and top to bottom.
	    **/
	    _chart.elements = function (e) {
	        if (!arguments.length) {
	            return _elements;
	        }
	        _elements = e;
	        return _chart;
	    };
	
	    /**
	    #### .expression([SetExpression])
	    Gets or sets the SetExpression drawn by this PixelLayer.
	    **/
	    _chart.expression = function (e) {
	        if (!arguments.length) {
	            return _expression;
	        }
	        _expression = e;
	        return _chart;
	    };
	
	    /**
	    #### .asSet()
	    Returns the elements of the calculated expression as a set, i.e., the
	    elements that are being drawn on the screen will be returned as a set. If
	    an element has a pixel value greater than 0, it is considered to be in the 
	    set.
	    **/
	    _chart.asSet = function () {
	        var elements = _chart.elements();
	        var expression = _chart.expression();
	        var set = (0, _datastructs.Set)({}, _chart.valueAccessor());
	        elements.forEach(function (e) {
	            if (expression.value(e) > 0) {
	                set.add(e);
	            }
	        });
	        return set;
	    };
	
	    /**
	    #### .uuid()
	    Returns the universally unique identifier for this PixelLayer. Useful for
	    determining if two objects are equal.
	    **/
	    _chart.uuid = function () {
	        return _uuid;
	    };
	
	    /**
	    #### .operator([value])
	    Gets or sets the root operator for this PixelLayer.
	    **/
	    _chart.operator = function (o) {
	        if (!arguments.length) {
	            return _chart.expression().root().operator();
	        }
	        _chart.expression().root().operator(o);
	        return _chart;
	    };
	
	    /**
	    #### .width([value])
	    Gets or sets the width of the PixelLayer, in pixels.
	    **/
	    _chart.width = function (w) {
	        if (!arguments.length) {
	            return _width;
	        }
	        _width = w;
	        return _chart;
	    };
	
	    /**
	    #### .height([value])
	    Gets or sets the height of the PixelLayer, in pixels.
	    **/
	    _chart.height = function (h) {
	        if (!arguments.length) {
	            return _height;
	        }
	        _height = h;
	        return _chart;
	    };
	
	    /**
	    #### .x([value])
	    Gets or sets the x posiiton of the top left corner of the chart
	    **/
	    _chart.x = function (x) {
	        if (!arguments.length) {
	            return _xPos;
	        }
	        _xPos = x;
	        return _chart;
	    };
	
	    /**
	    #### .y([value])
	    Gets or sets the y posiiton of the top left corner of the chart
	    **/
	    _chart.y = function (y) {
	        if (!arguments.length) {
	            return _yPos;
	        }
	        _yPos = y;
	        return _chart;
	    };
	
	    /**
	    #### .rows([value])
	    Gets or sets the number of rows in the chart. Default is 15.
	    **/
	    _chart.rows = function (n) {
	        if (!arguments.length) {
	            return _rows;
	        }
	        _rows = n;
	        return _chart;
	    };
	
	    /**
	    #### .columns([value])
	    Gets or sets the number of columns in the chart. Default is 15.
	    **/
	    _chart.columns = function (n) {
	        if (!arguments.length) {
	            return _columns;
	        }
	        _columns = n;
	        return _chart;
	    };
	
	    /**
	    #### .borderWidth([value])
	    Gets or sets the border thickness. Default is 0.5px
	    **/
	    _chart.borderWidth = function (w) {
	        if (!arguments.length) {
	            return _borderWidth;
	        }
	        _borderWidth = w;
	        return _chart;
	    };
	
	    /**
	    #### .borderColor([color])
	    Gets or sets the border color. It can be a d3.color object (like d3.rgb())
	    or a hex string
	    **/
	    _chart.borderColor = function (c) {
	        if (!arguments.length) {
	            return _borderColor;
	        }
	        _borderColor = c;
	        return _chart;
	    };
	
	    /**
	    #### .groupWidth([value])
	    Gets or sets the group outline thickness. Default is 1px.
	    **/
	    _chart.groupWidth = function (w) {
	        if (!arguments.length) {
	            return _groupWidth;
	        }
	        _groupWidth = w;
	        return _chart;
	    };
	
	    /**
	    #### .groupColor([color])
	    Gets or sets the group outline color. It can be a d3.color object or a hex 
	    string
	    **/
	    _chart.groupColor = function (c) {
	        if (!arguments.length) {
	            return _groupColor;
	        }
	        _groupColor = c;
	        return _chart;
	    };
	
	    /**
	    #### .pixelGap([value])
	    Gets or sets the width of the gap between pixels in the pixel layer. Default
	    is 3px.
	    **/
	    _chart.pixelGap = function (v) {
	        if (!arguments.length) {
	            return _pixelGap;
	        }
	        _pixelGap = v;
	        return _chart;
	    };
	
	    /**
	    #### .pixelColor([function])
	    Gets or sets function used to color pixels in the PixelLayer. The function
	    will be passed the data and index of the pixel, i.e., compound, being
	    colored and should return a color - either a d3.color object, like d3.rgb(),
	    or a hex string. The context (i.e. 'this') is set to be this PixelLayer.
	    **/
	    _chart.pixelColor = function (f) {
	        if (!arguments.length) {
	            return _pixelColor;
	        }
	        _pixelColor = f;
	        return _chart;
	    };
	
	    /**
	    #### .labelColor([function])
	    Gets or sets the function used to color the labels of the PixelLayer. The
	    function will be passed the label object and index and should return a
	    color - either a d3.color object, like d3.rgb(), or a hex string. Like
	    .pixelColor(), the context of the function is set to be this PixelLayer
	    object.
	    **/
	    _chart.labelColor = function (f) {
	        if (!arguments.length) {
	            return _labelColor;
	        }
	        _labelColor = f;
	        return _chart;
	    };
	
	    /**
	    #### .valueAccessor([function])
	    Gets or sets the function used to examine an element's value. The default
	    accessor looks for a .value property on the element.
	    **/
	    _chart.valueAccessor = function (f) {
	        if (!arguments.length) {
	            return _valueAccessor;
	        }
	        _valueAccessor = f;
	        return _chart;
	    };
	
	    /**
	    #### .groupAccessor([function])
	    Gets or sets the function used to examine an element's group or hierarchy.
	    For example, the AquaViz data set has elements such as Trigonelline, with
	    a class of Amino Acid. The default accessor looks for a .class property.
	    **/
	    _chart.groupAccessor = function (f) {
	        if (!arguments.length) {
	            return _groupAccessor;
	        }
	        _groupAccessor = f;
	        return _chart;
	    };
	
	    /**
	    #### .composite()
	    Returns true if this chart is a composite, meaning it has more than one
	    data set.
	    **/
	    _chart.composite = function () {
	        return _chart.expression().count() > 1;
	    };
	
	    /**
	    #### .boundingRect([scale][,translation])
	    Returns the bounding rectangle for this PixelLayer, relative to the parent
	    container. An optional scale can be passed which will scale the values and
	    an optional translate will translate them.
	    **/
	    _chart.boundingRect = function (s, t) {
	        var scale = s == undefined ? 1 : s;
	        var pan = t == undefined ? [0, 0] : t;
	        var x = _chart.x() * scale + pan[0];
	        var y = _chart.y() * scale + pan[1];
	        var width = _chart.width() * scale;
	        var height = _chart.height() * scale;
	        return {
	            'top': y,
	            'left': x,
	            'bottom': y + height,
	            'right': x + width,
	            'height': height,
	            'width': width
	        };
	    };
	
	    /**
	    #### .on(event,function)
	    Attaches an event listener for events from this PixelLayer chart.
	    **/
	    _chart.on = function (e, _) {
	        _listeners[e].push(_);
	        return _chart;
	    };
	
	    return _chart;
	}
	exports.PixelLayer = PixelLayer;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	!function () {
	  function a(b, c, d) {
	    var e = a.resolve(b);if (null == e) {
	      d = d || b, c = c || "root";var f = new Error('Failed to require "' + d + '" from "' + c + '"');throw f.path = d, f.parent = c, f.require = !0, f;
	    }var g = a.modules[e];if (!g._resolving && !g.exports) {
	      var h = {};h.exports = {}, h.client = h.component = !0, g._resolving = !0, g.call(this, h.exports, a.relative(e), h), delete g._resolving, g.exports = h.exports;
	    }return g.exports;
	  }a.modules = {}, a.aliases = {}, a.resolve = function (b) {
	    "/" === b.charAt(0) && (b = b.slice(1));for (var c = [b, b + ".js", b + ".json", b + "/index.js", b + "/index.json"], d = 0; d < c.length; d++) {
	      var b = c[d];if (a.modules.hasOwnProperty(b)) return b;if (a.aliases.hasOwnProperty(b)) return a.aliases[b];
	    }
	  }, a.normalize = function (a, b) {
	    var c = [];if ("." != b.charAt(0)) return b;a = a.split("/"), b = b.split("/");for (var d = 0; d < b.length; ++d) {
	      ".." == b[d] ? a.pop() : "." != b[d] && "" != b[d] && c.push(b[d]);
	    }return a.concat(c).join("/");
	  }, a.register = function (b, c) {
	    a.modules[b] = c;
	  }, a.alias = function (b, c) {
	    if (!a.modules.hasOwnProperty(b)) throw new Error('Failed to alias "' + b + '", it does not exist');a.aliases[c] = b;
	  }, a.relative = function (b) {
	    function c(a, b) {
	      for (var c = a.length; c--;) {
	        if (a[c] === b) return c;
	      }return -1;
	    }function d(c) {
	      var e = d.resolve(c);return a(e, b, c);
	    }var e = a.normalize(b, "..");return d.resolve = function (d) {
	      var f = d.charAt(0);if ("/" == f) return d.slice(1);if ("." == f) return a.normalize(e, d);var g = b.split("/"),
	          h = c(g, "deps") + 1;return h || (h = 0), d = g.slice(0, h + 1).join("/") + "/deps/" + d;
	    }, d.exists = function (b) {
	      return a.modules.hasOwnProperty(d.resolve(b));
	    }, d;
	  }, a.register("component-classes/index.js", function (a, b, c) {
	    function d(a) {
	      if (!a) throw new Error("A DOM element reference is required");this.el = a, this.list = a.classList;
	    }var e = b("indexof"),
	        f = /\s+/,
	        g = Object.prototype.toString;c.exports = function (a) {
	      return new d(a);
	    }, d.prototype.add = function (a) {
	      if (this.list) return this.list.add(a), this;var b = this.array(),
	          c = e(b, a);return ~c || b.push(a), this.el.className = b.join(" "), this;
	    }, d.prototype.remove = function (a) {
	      if ("[object RegExp]" == g.call(a)) return this.removeMatching(a);if (this.list) return this.list.remove(a), this;var b = this.array(),
	          c = e(b, a);return ~c && b.splice(c, 1), this.el.className = b.join(" "), this;
	    }, d.prototype.removeMatching = function (a) {
	      for (var b = this.array(), c = 0; c < b.length; c++) {
	        a.test(b[c]) && this.remove(b[c]);
	      }return this;
	    }, d.prototype.toggle = function (a) {
	      return this.list ? (this.list.toggle(a), this) : (this.has(a) ? this.remove(a) : this.add(a), this);
	    }, d.prototype.array = function () {
	      var a = this.el.className.replace(/^\s+|\s+$/g, ""),
	          b = a.split(f);return "" === b[0] && b.shift(), b;
	    }, d.prototype.has = d.prototype.contains = function (a) {
	      return this.list ? this.list.contains(a) : !!~e(this.array(), a);
	    };
	  }), a.register("segmentio-extend/index.js", function (a, b, c) {
	    c.exports = function (a) {
	      for (var b, c = Array.prototype.slice.call(arguments, 1), d = 0; b = c[d]; d++) {
	        if (b) for (var e in b) {
	          a[e] = b[e];
	        }
	      }return a;
	    };
	  }), a.register("component-indexof/index.js", function (a, b, c) {
	    c.exports = function (a, b) {
	      if (a.indexOf) return a.indexOf(b);for (var c = 0; c < a.length; ++c) {
	        if (a[c] === b) return c;
	      }return -1;
	    };
	  }), a.register("component-event/index.js", function (a) {
	    var b = void 0 !== window.addEventListener ? "addEventListener" : "attachEvent",
	        c = void 0 !== window.removeEventListener ? "removeEventListener" : "detachEvent",
	        d = "addEventListener" !== b ? "on" : "";a.bind = function (a, c, e, f) {
	      return a[b](d + c, e, f || !1), e;
	    }, a.unbind = function (a, b, e, f) {
	      return a[c](d + b, e, f || !1), e;
	    };
	  }), a.register("timoxley-is-collection/index.js", function (a, b, c) {
	    function d(a) {
	      return "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && /^\[object (NodeList)\]$/.test(Object.prototype.toString.call(a)) && a.hasOwnProperty("length") && (0 == a.length || "object" == _typeof(a[0]) && a[0].nodeType > 0);
	    }var e = b("type");c.exports = function (a) {
	      var b = e(a);if ("array" === b) return 1;switch (b) {case "arguments":
	          return 2;case "object":
	          if (d(a)) return 2;try {
	            if ("length" in a && !a.tagName && (!a.scrollTo || !a.document) && !a.apply) return 2;
	          } catch (c) {}default:
	          return 0;}
	    };
	  }), a.register("javve-events/index.js", function (a, b) {
	    var c = b("event"),
	        d = b("is-collection");a.bind = function (a, b, e, f) {
	      if (d(a)) {
	        if (a && void 0 !== a[0]) for (var g = 0; g < a.length; g++) {
	          c.bind(a[g], b, e, f);
	        }
	      } else c.bind(a, b, e, f);
	    }, a.unbind = function (a, b, e, f) {
	      if (d(a)) {
	        if (a && void 0 !== a[0]) for (var g = 0; g < a.length; g++) {
	          c.unbind(a[g], b, e, f);
	        }
	      } else c.unbind(a, b, e, f);
	    };
	  }), a.register("javve-get-by-class/index.js", function (a, b, c) {
	    c.exports = function () {
	      return document.getElementsByClassName ? function (a, b, c) {
	        return c ? a.getElementsByClassName(b)[0] : a.getElementsByClassName(b);
	      } : document.querySelector ? function (a, b, c) {
	        return c ? a.querySelector(b) : a.querySelectorAll(b);
	      } : function (a, b, c) {
	        var d = [],
	            e = "*";null == a && (a = document);for (var f = a.getElementsByTagName(e), g = f.length, h = new RegExp("(^|\\s)" + b + "(\\s|$)"), i = 0, j = 0; g > i; i++) {
	          if (h.test(f[i].className)) {
	            if (c) return f[i];d[j] = f[i], j++;
	          }
	        }return d;
	      };
	    }();
	  }), a.register("javve-get-attribute/index.js", function (a, b, c) {
	    c.exports = function (a, b) {
	      var c = a.getAttribute && a.getAttribute(b) || null;if (!c) for (var d = a.attributes, e = d.length, f = 0; e > f; f++) {
	        void 0 !== b[f] && b[f].nodeName === b && (c = b[f].nodeValue);
	      }return c;
	    };
	  }), a.register("javve-natural-sort/index.js", function (a, b, c) {
	    c.exports = function (a, b, c) {
	      var d,
	          e,
	          f = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
	          g = /(^[ ]*|[ ]*$)/g,
	          h = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
	          i = /^0x[0-9a-f]+$/i,
	          j = /^0/,
	          c = c || {},
	          k = function k(a) {
	        return c.insensitive && ("" + a).toLowerCase() || "" + a;
	      },
	          l = k(a).replace(g, "") || "",
	          m = k(b).replace(g, "") || "",
	          n = l.replace(f, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
	          o = m.replace(f, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
	          p = parseInt(l.match(i)) || 1 != n.length && l.match(h) && Date.parse(l),
	          q = parseInt(m.match(i)) || p && m.match(h) && Date.parse(m) || null,
	          r = c.desc ? -1 : 1;if (q) {
	        if (q > p) return -1 * r;if (p > q) return 1 * r;
	      }for (var s = 0, t = Math.max(n.length, o.length); t > s; s++) {
	        if (d = !(n[s] || "").match(j) && parseFloat(n[s]) || n[s] || 0, e = !(o[s] || "").match(j) && parseFloat(o[s]) || o[s] || 0, isNaN(d) !== isNaN(e)) return isNaN(d) ? 1 : -1;if ((typeof d === 'undefined' ? 'undefined' : _typeof(d)) != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && (d += "", e += ""), e > d) return -1 * r;if (d > e) return 1 * r;
	      }return 0;
	    };
	  }), a.register("javve-to-string/index.js", function (a, b, c) {
	    c.exports = function (a) {
	      return a = void 0 === a ? "" : a, a = null === a ? "" : a, a = a.toString();
	    };
	  }), a.register("component-type/index.js", function (a, b, c) {
	    var d = Object.prototype.toString;c.exports = function (a) {
	      switch (d.call(a)) {case "[object Function]":
	          return "function";case "[object Date]":
	          return "date";case "[object RegExp]":
	          return "regexp";case "[object Arguments]":
	          return "arguments";case "[object Array]":
	          return "array";case "[object String]":
	          return "string";}return null === a ? "null" : void 0 === a ? "undefined" : a && 1 === a.nodeType ? "element" : a === Object(a) ? "object" : typeof a === 'undefined' ? 'undefined' : _typeof(a);
	    };
	  }), a.register("list.js/index.js", function (a, b, c) {
	    !function (a, d) {
	      "use strict";
	      var e = a.document,
	          f = (b("events"), b("get-by-class")),
	          g = b("extend"),
	          h = b("indexof"),
	          i = function i(a, c, _i) {
	        var j,
	            k = this,
	            l = b("./src/item")(k),
	            m = b("./src/add-async")(k),
	            n = b("./src/parse")(k);this.listClass = "list", this.searchClass = "search", this.sortClass = "sort", this.page = 200, this.i = 1, this.items = [], this.visibleItems = [], this.matchingItems = [], this.searched = !1, this.filtered = !1, this.handlers = { updated: [] }, this.plugins = {}, g(this, c), this.listContainer = "string" == typeof a ? e.getElementById(a) : a, this.listContainer && (this.list = f(this.listContainer, this.listClass, !0), this.templater = b("./src/templater")(k), this.sort = b("./src/sort")(k), this.search = b("./src/search")(k), this.filter = b("./src/filter")(k), j = { start: function start(a) {
	            n(k.list), a !== d && k.add(a), k.update(), this.plugins();
	          }, plugins: function plugins() {
	            for (var a = 0; a < k.plugins.length; a++) {
	              var b = k.plugins[a];k[b.name] = b, b.init(k);
	            }
	          } }, this.add = function (a, b) {
	          if (b) return m(a, b), void 0;var c = [],
	              e = !1;a[0] === d && (a = [a]);for (var f = 0, g = a.length; g > f; f++) {
	            var h = null;a[f] instanceof l ? (h = a[f], h.reload()) : (e = k.items.length > k.page ? !0 : !1, h = new l(a[f], d, e)), k.items.push(h), c.push(h);
	          }return k.update(), c;
	        }, this.show = function (a, b) {
	          return this.i = a, this.page = b, k.update(), k;
	        }, this.remove = function (a, b, c) {
	          for (var d = 0, e = 0, f = k.items.length; f > e; e++) {
	            k.items[e].values()[a] == b && (k.templater.remove(k.items[e], c), k.items.splice(e, 1), f--, e--, d++);
	          }return k.update(), d;
	        }, this.get = function (a, b) {
	          for (var c = [], d = 0, e = k.items.length; e > d; d++) {
	            var f = k.items[d];f.values()[a] == b && c.push(f);
	          }return c;
	        }, this.size = function () {
	          return k.items.length;
	        }, this.clear = function () {
	          return k.templater.clear(), k.items = [], k;
	        }, this.on = function (a, b) {
	          return k.handlers[a].push(b), k;
	        }, this.off = function (a, b) {
	          var c = k.handlers[a],
	              d = h(c, b);return d > -1 && c.splice(d, 1), k;
	        }, this.trigger = function (a) {
	          for (var b = k.handlers[a].length; b--;) {
	            k.handlers[a][b](k);
	          }return k;
	        }, this.reset = { filter: function filter() {
	            for (var a = k.items, b = a.length; b--;) {
	              a[b].filtered = !1;
	            }return k;
	          }, search: function search() {
	            for (var a = k.items, b = a.length; b--;) {
	              a[b].found = !1;
	            }return k;
	          } }, this.update = function () {
	          var a = k.items,
	              b = a.length;k.visibleItems = [], k.matchingItems = [], k.templater.clear();for (var c = 0; b > c; c++) {
	            a[c].matching() && k.matchingItems.length + 1 >= k.i && k.visibleItems.length < k.page ? (a[c].show(), k.visibleItems.push(a[c]), k.matchingItems.push(a[c])) : a[c].matching() ? (k.matchingItems.push(a[c]), a[c].hide()) : a[c].hide();
	          }return k.trigger("updated"), k;
	        }, j.start(_i));
	      };c.exports = i;
	    }(window);
	  }), a.register("list.js/src/search.js", function (a, b, c) {
	    var d = b("events"),
	        e = b("get-by-class"),
	        f = b("to-string");c.exports = function (a) {
	      var b,
	          c,
	          g,
	          h,
	          i = { resetList: function resetList() {
	          a.i = 1, a.templater.clear(), h = void 0;
	        }, setOptions: function setOptions(a) {
	          2 == a.length && a[1] instanceof Array ? c = a[1] : 2 == a.length && "function" == typeof a[1] ? h = a[1] : 3 == a.length && (c = a[1], h = a[2]);
	        }, setColumns: function setColumns() {
	          c = void 0 === c ? i.toArray(a.items[0].values()) : c;
	        }, setSearchString: function setSearchString(a) {
	          a = f(a).toLowerCase(), a = a.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), g = a;
	        }, toArray: function toArray(a) {
	          var b = [];for (var c in a) {
	            b.push(c);
	          }return b;
	        } },
	          j = { list: function list() {
	          for (var b = 0, c = a.items.length; c > b; b++) {
	            j.item(a.items[b]);
	          }
	        }, item: function item(a) {
	          a.found = !1;for (var b = 0, d = c.length; d > b; b++) {
	            if (j.values(a.values(), c[b])) return a.found = !0, void 0;
	          }
	        }, values: function values(a, c) {
	          return a.hasOwnProperty(c) && (b = f(a[c]).toLowerCase(), "" !== g && b.search(g) > -1) ? !0 : !1;
	        }, reset: function reset() {
	          a.reset.search(), a.searched = !1;
	        } },
	          k = function k(b) {
	        return a.trigger("searchStart"), i.resetList(), i.setSearchString(b), i.setOptions(arguments), i.setColumns(), "" === g ? j.reset() : (a.searched = !0, h ? h(g, c) : j.list()), a.update(), a.trigger("searchComplete"), a.visibleItems;
	      };return a.handlers.searchStart = a.handlers.searchStart || [], a.handlers.searchComplete = a.handlers.searchComplete || [], d.bind(e(a.listContainer, a.searchClass), "keyup", function (a) {
	        var b = a.target || a.srcElement;k(b.value);
	      }), k;
	    };
	  }), a.register("list.js/src/sort.js", function (a, b, c) {
	    var d,
	        e = b("natural-sort"),
	        f = b("classes"),
	        g = b("events"),
	        h = b("get-by-class"),
	        i = b("get-attribute"),
	        j = function j() {
	      for (var a = 0, b = d.length; b > a; a++) {
	        f(d[a]).remove("asc"), f(d[a]).remove("desc");
	      }
	    };c.exports = function (a) {
	      var b = function b() {
	        var b,
	            c = {};if (arguments[0].currentTarget || arguments[0].srcElement) {
	          var d,
	              g = arguments[0],
	              h = g.currentTarget || g.srcElement;b = i(h, "data-sort"), f(h).has("desc") ? (c.desc = !1, d = "asc") : f(h).has("asc") ? (c.desc = !0, d = "desc") : (c.desc = !1, d = "asc"), j(), f(h).add(d);
	        } else b = arguments[0], c = arguments[1] || c;c.insensitive = "undefined" == typeof c.insensitive ? !0 : c.insensitive, c.sortFunction = c.sortFunction || function (a, d) {
	          return e(a.values()[b], d.values()[b], c);
	        }, a.trigger("sortStart"), a.items.sort(c.sortFunction), a.update(), a.trigger("sortComplete");
	      };return a.handlers.sortStart = a.handlers.sortStart || [], a.handlers.sortComplete = a.handlers.sortComplete || [], d = h(a.listContainer, a.sortClass), g.bind(d, "click", b), b;
	    };
	  }), a.register("list.js/src/item.js", function (a, b, c) {
	    c.exports = function (a) {
	      return function (b, c, d) {
	        var e = this;this._values = {}, this.found = !1, this.filtered = !1;var f = function f(b, c, d) {
	          if (void 0 === c) d ? e.values(b, d) : e.values(b);else {
	            e.elm = c;var f = a.templater.get(e, b);e.values(f);
	          }
	        };this.values = function (b, c) {
	          if (void 0 === b) return e._values;for (var d in b) {
	            e._values[d] = b[d];
	          }c !== !0 && a.templater.set(e, e.values());
	        }, this.show = function () {
	          a.templater.show(e);
	        }, this.hide = function () {
	          a.templater.hide(e);
	        }, this.matching = function () {
	          return a.filtered && a.searched && e.found && e.filtered || a.filtered && !a.searched && e.filtered || !a.filtered && a.searched && e.found || !a.filtered && !a.searched;
	        }, this.visible = function () {
	          return e.elm.parentNode == a.list ? !0 : !1;
	        }, f(b, c, d);
	      };
	    };
	  }), a.register("list.js/src/templater.js", function (a, b, c) {
	    var d = b("get-by-class"),
	        e = function e(a) {
	      function b(b) {
	        if (void 0 === b) {
	          for (var c = a.list.childNodes, d = 0, e = c.length; e > d; d++) {
	            if (void 0 === c[d].data) return c[d];
	          }return null;
	        }if (-1 !== b.indexOf("<")) {
	          var f = document.createElement("div");return f.innerHTML = b, f.firstChild;
	        }return document.getElementById(a.item);
	      }var c = b(a.item),
	          e = this;this.get = function (a, b) {
	        e.create(a);for (var c = {}, f = 0, g = b.length; g > f; f++) {
	          var h = d(a.elm, b[f], !0);c[b[f]] = h ? h.innerHTML : "";
	        }return c;
	      }, this.set = function (a, b) {
	        if (!e.create(a)) for (var c in b) {
	          if (b.hasOwnProperty(c)) {
	            var f = d(a.elm, c, !0);f && ("IMG" === f.tagName && "" !== b[c] ? f.src = b[c] : f.innerHTML = b[c]);
	          }
	        }
	      }, this.create = function (a) {
	        if (void 0 !== a.elm) return !1;var b = c.cloneNode(!0);return b.removeAttribute("id"), a.elm = b, e.set(a, a.values()), !0;
	      }, this.remove = function (b) {
	        a.list.removeChild(b.elm);
	      }, this.show = function (b) {
	        e.create(b), a.list.appendChild(b.elm);
	      }, this.hide = function (b) {
	        void 0 !== b.elm && b.elm.parentNode === a.list && a.list.removeChild(b.elm);
	      }, this.clear = function () {
	        if (a.list.hasChildNodes()) for (; a.list.childNodes.length >= 1;) {
	          a.list.removeChild(a.list.firstChild);
	        }
	      };
	    };c.exports = function (a) {
	      return new e(a);
	    };
	  }), a.register("list.js/src/filter.js", function (a, b, c) {
	    c.exports = function (a) {
	      return a.handlers.filterStart = a.handlers.filterStart || [], a.handlers.filterComplete = a.handlers.filterComplete || [], function (b) {
	        if (a.trigger("filterStart"), a.i = 1, a.reset.filter(), void 0 === b) a.filtered = !1;else {
	          a.filtered = !0;for (var c = a.items, d = 0, e = c.length; e > d; d++) {
	            var f = c[d];f.filtered = b(f) ? !0 : !1;
	          }
	        }return a.update(), a.trigger("filterComplete"), a.visibleItems;
	      };
	    };
	  }), a.register("list.js/src/add-async.js", function (a, b, c) {
	    c.exports = function (a) {
	      return function (b, c, d) {
	        var e = b.splice(0, 100);d = d || [], d = d.concat(a.add(e)), b.length > 0 ? setTimeout(function () {
	          addAsync(b, c, d);
	        }, 10) : (a.update(), c(d));
	      };
	    };
	  }), a.register("list.js/src/parse.js", function (a, b, c) {
	    c.exports = function (a) {
	      var c = b("./item")(a),
	          d = function d(a) {
	        for (var b = a.childNodes, c = [], d = 0, e = b.length; e > d; d++) {
	          void 0 === b[d].data && c.push(b[d]);
	        }return c;
	      },
	          e = function e(b, d) {
	        for (var e = 0, f = b.length; f > e; e++) {
	          a.items.push(new c(d, b[e]));
	        }
	      },
	          f = function f(b, c) {
	        var d = b.splice(0, 100);e(d, c), b.length > 0 ? setTimeout(function () {
	          init.items.indexAsync(b, c);
	        }, 10) : a.update();
	      };return function () {
	        var b = d(a.list),
	            c = a.valueNames;a.indexAsync ? f(b, c) : e(b, c);
	      };
	    };
	  }), a.alias("component-classes/index.js", "list.js/deps/classes/index.js"), a.alias("component-classes/index.js", "classes/index.js"), a.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js"), a.alias("segmentio-extend/index.js", "list.js/deps/extend/index.js"), a.alias("segmentio-extend/index.js", "extend/index.js"), a.alias("component-indexof/index.js", "list.js/deps/indexof/index.js"), a.alias("component-indexof/index.js", "indexof/index.js"), a.alias("javve-events/index.js", "list.js/deps/events/index.js"), a.alias("javve-events/index.js", "events/index.js"), a.alias("component-event/index.js", "javve-events/deps/event/index.js"), a.alias("timoxley-is-collection/index.js", "javve-events/deps/is-collection/index.js"), a.alias("component-type/index.js", "timoxley-is-collection/deps/type/index.js"), a.alias("javve-get-by-class/index.js", "list.js/deps/get-by-class/index.js"), a.alias("javve-get-by-class/index.js", "get-by-class/index.js"), a.alias("javve-get-attribute/index.js", "list.js/deps/get-attribute/index.js"), a.alias("javve-get-attribute/index.js", "get-attribute/index.js"), a.alias("javve-natural-sort/index.js", "list.js/deps/natural-sort/index.js"), a.alias("javve-natural-sort/index.js", "natural-sort/index.js"), a.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js"), a.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js"), a.alias("javve-to-string/index.js", "to-string/index.js"), a.alias("javve-to-string/index.js", "javve-to-string/index.js"), a.alias("component-type/index.js", "list.js/deps/type/index.js"), a.alias("component-type/index.js", "type/index.js"), "object" == ( false ? 'undefined' : _typeof(exports)) ? module.exports = a("list.js") :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return a("list.js");
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : window.List = a("list.js");
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=onset.js.map
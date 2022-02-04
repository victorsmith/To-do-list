/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n\t\t'Lucida Sans', Arial, sans-serif;\n\tcolor: #fefefe;\n}\n\nbody {\n\tmargin: 0;\n}\n\n\n#main {\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.block {\n\tdisplay: block;\n}\n\n.sidebar {\n\theight: 100vh;\n\twidth: 30%;\n\tpadding: 1em;\n\tflex-direction: column;\n\tbackground-color: #2f5ab8;\n\tscroll-behavior: smooth;\n\tmargin-right: -7px;\n\tz-index: 1;\n\tborder-radius: 0 10px 10px 0;\n}\n\n.scrollable {\n\tflex-direction: column;\n\tpadding: 1em;\n\twidth: 70%;\n\tpadding-left: 25px;\n\tbackground-color: #708fd0;\n}\n\n#tasks {\n\theight: fit-content;\n\twidth: 100%;\n\t/* row-gap: 5px; */\n\t/* outline: 3px solid black; */\n}\n\n.taskContainer {\n\tpadding: 0.2em 0;\n\tmargin: 0.5em 0;\n\theight: fit-content;\n\twidth: 100%;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tborder-radius: 10px;\n\tbackground-color: hsl(226, 61%, 35%);\n}\n\ninput {\n\tcolor: #010101;\n\twidth: 15em;\n}\n\n.taskContainer input {\n\tmargin: 0.6em;\n}\n\n.taskContainer button {\n\tmargin: 0.6em;\n}\n\n.projectContainer {\n\tmargin: 1em 0;\n\theight: fit-content;\n\twidth: 100%;\n\t\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: left;\n\talign-items: center;\n\t\n\tborder-radius: 10px;\n\tbackground-color: hsl(226, 61%, 35%);\n\tborder: 1px solid rgba(0, 0, 0, 0);\n}\n\n.selected {\n\tmargin: 1em 0;\n\theight: fit-content;\n\twidth: 100%;\n\t\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: left;\n\talign-items: center;\n\t\n\tborder-radius: 10px;\n\t/* background-color: hsl(186, 100%, 27%) !important; */\n\tborder: 1px solid rgba(0, 0, 0, 0) !important;\n}\n\n.projectContainer:hover {\n\tmargin: 1em 0;\n\theight: fit-content;\n\twidth: 100%;\n\t\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: left;\n\talign-items: center;\n\t\n\tborder-radius: 10px;\n\tbackground-color: hsl(226, 70%, 22%);\n\tborder: 1px solid rgb(255, 255, 0);\n\t/* box-shadow: inset; */\n}\n\n\n\n.projectContainer h3 {\n\tpadding-left: 0.5em;\n}\n\n/* Modal */\n\n.modal-background {\n\tdisplay: none; /* Hidden by default */\n\tposition: fixed; /* Stay in place */\n\tz-index: 3; /* Sit on top */\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%; /* Full width */\n\theight: 100%; /* Full height */\n\toverflow: auto; /* Enable scroll if needed */\n\tbackground-color: rgb(0, 0, 0); /* Fallback color */\n\tbackground-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n\tbackground-color: #710000;\n\tmargin: 15% auto; /* 15% from the top and centered */\n\tpadding: 20px;\n\tborder: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n    /* height: 80%; */\n\tborder-radius: 10px;\n}\n\n\n.modal-content input {\n\tmargin-right: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder-radius: 10px;\n}\n\n.modal-content button {\n\tmargin-right: 0.5em;\n}\n\n\n/* The Close Button */\n.close {\n    position: relative;\n    top: 0;\n    right: 0;\n\tcolor: #aaa;\n\tfloat: right;\n\tfont-size: 28px;\n\tfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n\n/* buttons */\n\n.major {\n\tcolor: rgb(223, 223, 223);\n\tbackground-color: rgb(184, 148, 3);\n}\n\n.minor {\n\tcolor: rgb(223, 223, 223);\n\tbackground-color: rgb(208, 144, 5);\t\n}\n\nbutton {\n\tborder-radius: 10px;\n\tcolor: rgb(223, 223, 223);\n\tborder: none;\n\tpadding: 0.5em 1em;\n}\n\nbutton:hover {\n\tborder-radius: 10px;\n\tcolor: rgb(223, 223, 223);\n\tbackground-color: rgb(82, 89, 3);\n\tborder: none;\n\tpadding: 0.5em 1em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC;kCACiC;CACjC,cAAc;AACf;;AAEA;CACC,SAAS;AACV;;;AAGA;CACC,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;CACb,UAAU;CACV,YAAY;CACZ,sBAAsB;CACtB,yBAAyB;CACzB,uBAAuB;CACvB,kBAAkB;CAClB,UAAU;CACV,4BAA4B;AAC7B;;AAEA;CACC,sBAAsB;CACtB,YAAY;CACZ,UAAU;CACV,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,kBAAkB;CAClB,8BAA8B;AAC/B;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,mBAAmB;CACnB,WAAW;;CAEX,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,mBAAmB;;CAEnB,mBAAmB;CACnB,oCAAoC;AACrC;;AAEA;CACC,cAAc;CACd,WAAW;AACZ;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;;CAEX,aAAa;CACb,mBAAmB;CACnB,qBAAqB;CACrB,mBAAmB;;CAEnB,mBAAmB;CACnB,oCAAoC;CACpC,kCAAkC;AACnC;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;;CAEX,aAAa;CACb,mBAAmB;CACnB,qBAAqB;CACrB,mBAAmB;;CAEnB,mBAAmB;CACnB,sDAAsD;CACtD,6CAA6C;AAC9C;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;;CAEX,aAAa;CACb,mBAAmB;CACnB,qBAAqB;CACrB,mBAAmB;;CAEnB,mBAAmB;CACnB,oCAAoC;CACpC,kCAAkC;CAClC,uBAAuB;AACxB;;;;AAIA;CACC,mBAAmB;AACpB;;AAEA,UAAU;;AAEV;CACC,aAAa,EAAE,sBAAsB;CACrC,eAAe,EAAE,kBAAkB;CACnC,UAAU,EAAE,eAAe;CAC3B,OAAO;CACP,MAAM;CACN,WAAW,EAAE,eAAe;CAC5B,YAAY,EAAE,gBAAgB;CAC9B,cAAc,EAAE,4BAA4B;CAC5C,8BAA8B,EAAE,mBAAmB;CACnD,oCAAoC,EAAE,qBAAqB;AAC5D;;AAEA;CACC,yBAAyB;CACzB,gBAAgB,EAAE,kCAAkC;CACpD,aAAa;CACb,sBAAsB;IACnB,UAAU,EAAE,oDAAoD;IAChE,iBAAiB;CACpB,mBAAmB;AACpB;;;AAGA;CACC,mBAAmB;CACnB,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;;AAGA,qBAAqB;AACrB;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;CACX,WAAW;CACX,YAAY;CACZ,eAAe;CACf,iBAAiB;AAClB;;AAEA;;CAEC,YAAY;CACZ,qBAAqB;CACrB,eAAe;AAChB;;;AAGA,YAAY;;AAEZ;CACC,yBAAyB;CACzB,kCAAkC;AACnC;;AAEA;CACC,yBAAyB;CACzB,kCAAkC;AACnC;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;CACzB,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;CACzB,gCAAgC;CAChC,YAAY;CACZ,kBAAkB;AACnB","sourcesContent":["* {\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n\t\t'Lucida Sans', Arial, sans-serif;\n\tcolor: #fefefe;\n}\n\nbody {\n\tmargin: 0;\n}\n\n\n#main {\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.block {\n\tdisplay: block;\n}\n\n.sidebar {\n\theight: 100vh;\n\twidth: 30%;\n\tpadding: 1em;\n\tflex-direction: column;\n\tbackground-color: #2f5ab8;\n\tscroll-behavior: smooth;\n\tmargin-right: -7px;\n\tz-index: 1;\n\tborder-radius: 0 10px 10px 0;\n}\n\n.scrollable {\n\tflex-direction: column;\n\tpadding: 1em;\n\twidth: 70%;\n\tpadding-left: 25px;\n\tbackground-color: #708fd0;\n}\n\n#tasks {\n\theight: fit-content;\n\twidth: 100%;\n\t/* row-gap: 5px; */\n\t/* outline: 3px solid black; */\n}\n\n.taskContainer {\n\tpadding: 0.2em 0;\n\tmargin: 0.5em 0;\n\theight: fit-content;\n\twidth: 100%;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tborder-radius: 10px;\n\tbackground-color: hsl(226, 61%, 35%);\n}\n\ninput {\n\tcolor: #010101;\n\twidth: 15em;\n}\n\n.taskContainer input {\n\tmargin: 0.6em;\n}\n\n.taskContainer button {\n\tmargin: 0.6em;\n}\n\n.projectContainer {\n\tmargin: 1em 0;\n\theight: fit-content;\n\twidth: 100%;\n\t\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: left;\n\talign-items: center;\n\t\n\tborder-radius: 10px;\n\tbackground-color: hsl(226, 61%, 35%);\n\tborder: 1px solid rgba(0, 0, 0, 0);\n}\n\n.selected {\n\tmargin: 1em 0;\n\theight: fit-content;\n\twidth: 100%;\n\t\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: left;\n\talign-items: center;\n\t\n\tborder-radius: 10px;\n\t/* background-color: hsl(186, 100%, 27%) !important; */\n\tborder: 1px solid rgba(0, 0, 0, 0) !important;\n}\n\n.projectContainer:hover {\n\tmargin: 1em 0;\n\theight: fit-content;\n\twidth: 100%;\n\t\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: left;\n\talign-items: center;\n\t\n\tborder-radius: 10px;\n\tbackground-color: hsl(226, 70%, 22%);\n\tborder: 1px solid rgb(255, 255, 0);\n\t/* box-shadow: inset; */\n}\n\n\n\n.projectContainer h3 {\n\tpadding-left: 0.5em;\n}\n\n/* Modal */\n\n.modal-background {\n\tdisplay: none; /* Hidden by default */\n\tposition: fixed; /* Stay in place */\n\tz-index: 3; /* Sit on top */\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%; /* Full width */\n\theight: 100%; /* Full height */\n\toverflow: auto; /* Enable scroll if needed */\n\tbackground-color: rgb(0, 0, 0); /* Fallback color */\n\tbackground-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n\tbackground-color: #710000;\n\tmargin: 15% auto; /* 15% from the top and centered */\n\tpadding: 20px;\n\tborder: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n    /* height: 80%; */\n\tborder-radius: 10px;\n}\n\n\n.modal-content input {\n\tmargin-right: 0.5em;\n\tpadding: 0.5em 1em;\n\tborder-radius: 10px;\n}\n\n.modal-content button {\n\tmargin-right: 0.5em;\n}\n\n\n/* The Close Button */\n.close {\n    position: relative;\n    top: 0;\n    right: 0;\n\tcolor: #aaa;\n\tfloat: right;\n\tfont-size: 28px;\n\tfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n\n/* buttons */\n\n.major {\n\tcolor: rgb(223, 223, 223);\n\tbackground-color: rgb(184, 148, 3);\n}\n\n.minor {\n\tcolor: rgb(223, 223, 223);\n\tbackground-color: rgb(208, 144, 5);\t\n}\n\nbutton {\n\tborder-radius: 10px;\n\tcolor: rgb(223, 223, 223);\n\tborder: none;\n\tpadding: 0.5em 1em;\n}\n\nbutton:hover {\n\tborder-radius: 10px;\n\tcolor: rgb(223, 223, 223);\n\tbackground-color: rgb(82, 89, 3);\n\tborder: none;\n\tpadding: 0.5em 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
	
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.tasks = [];
	}

	addTask (task) {
		this.tasks.push(task)
	}

}


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    }

    toggleDone () {
        this.done = !this.done;
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");




let projects = [];
let currentProjectIndex = 0;

const newProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](
	'Example Project',
	'A Project Showcasing the layout of todo.io'
);

const exampleTask0 = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
	'Laundry',
	'Clean up your nasty clothes.',
	new Date('2015-03-01'),
	'High'
);
const exampleTask1 = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
	'Gym',
	"Lift some heavy stuff every now and then so you don't die at 28",
	new Date('2015-03-25'),
	'High'
);
const exampleTask2 = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
	'Finish the Odin Project',
	'Finish the wonderful Odin Project before April 2022',
	new Date('2022-04-30'),
	'High'
);
const exampleTask3 = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
	'Finish One Piece',
	'Finish the anime One Piece before the end of 2022',
	new Date('2023-01-01'),
	'Medium'
);

newProject.addTask(exampleTask0);
newProject.addTask(exampleTask1);
newProject.addTask(exampleTask2);
newProject.addTask(exampleTask3);

projects.push(newProject);

// const test = initUI()
// console.log(typeof test);
document.body.appendChild(initUI());

// Global UI Components
const projectTable = document.getElementById('projects');
const taskTable = document.getElementById('tasks');
const addProjectButton = document.getElementById('addTask');
const addTaskButton = document.getElementById('addTask');

const modal = createModal();
document.body.appendChild(modal);

updateUI();

function initUI() {
	const main = document.createElement('div');
	main.id = 'main';

	// LEFT COL UI => Projects Section
	const leftCol = document.createElement('div');
	leftCol.classList.add('sidebar');
	main.appendChild(leftCol);

	const projectHeading = document.createElement('h1');
	projectHeading.textContent = 'Projects';
	leftCol.appendChild(projectHeading);

	const projects = document.createElement('projects');
	projects.id = 'projects';
	leftCol.appendChild(projects);

	const addProjectButton = document.createElement('button');
	addProjectButton.classList.add('major');
	addProjectButton.textContent = 'Add Project';
	addProjectButton.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	leftCol.appendChild(addProjectButton);

	// RIGHT COL UI => Tasks Section
	const rightCol = document.createElement('div');
	rightCol.classList.add('scrollable');
	main.appendChild(rightCol);

	const todoHeading = document.createElement('h1');
	todoHeading.textContent = 'Tasks';
	rightCol.appendChild(todoHeading);

	const tasks = document.createElement('tasks');
	tasks.id = 'tasks';
	rightCol.appendChild(tasks);

	const addTaskButton = document.createElement('button');
	addTaskButton.classList.add('major');
	addTaskButton.id = 'addTask';
	addTaskButton.textContent = 'Add Task';
	addTaskButton.addEventListener('click', () => {
		addTaskButton.hidden = true;
		taskTable.appendChild(createTaskContainerForm());
		// add task
		console.log('Event');
		// addTask();
	});

	rightCol.appendChild(addTaskButton);
	return main;
}

function updateUI() {
	// reset table
	projectTable.innerHTML = '';
	taskTable.innerHTML = '';

	// 1) create container for each project
	// 2) populate container with project attribute values
	// 3) publish to projectTable
	projects.forEach((project, i) => {
		const projectContainer = createProjectContainer(project);
		projectTable.appendChild(projectContainer);

		// console.log(i);
		if (i == currentProjectIndex) {
			projectContainer.classList.remove('projectContainer');
			projectContainer.classList.add('selected');
		}
	});

	// 1) create container for each task
	// 2) populate container with task attribute values
	// 3) publish to taskTable
	projects[currentProjectIndex].tasks.forEach((task) => {
		taskTable.appendChild(createTaskContainer(task));
	});
}

// Create project container
function createProjectContainer(project) {
	const projectContainer = document.createElement('div');
	projectContainer.classList.add('projectContainer');
	projectContainer.addEventListener('click', (e) => {
		for (let x = 0; x < projects.length; x++) {
			if (projects[x].name == projectContainer.textContent) {
				currentProjectIndex = x;
				updateUI();
				return;
			}
		}
	});

	const projectName = document.createElement('h3');
	projectName.textContent = project.name;

	projectContainer.appendChild(projectName);
	console.log(projectContainer);

	return projectContainer;
}

// const task = new Task()

function createTaskContainer(taskObject) {
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('taskContainer');

	const taskTitle = document.createElement('div');
	taskTitle.textContent = taskObject.title;

	const taskDate = document.createElement('div');
	taskDate.textContent = taskObject.dueDate;

	const taskDone = document.createElement('input');
	taskDone.type = 'checkbox';

	taskContainer.appendChild(taskTitle);
	taskContainer.appendChild(taskDate);
	taskContainer.appendChild(taskDone);

	return taskContainer;
}

function createTaskContainerForm(task) {
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('taskContainer');

	// const form = document.createElement('form');
	// Task form
	const inputName = document.createElement('input');
	inputName.placeholder = 'Enter project name here';
	inputName.type = 'text';

	const inputDate = document.createElement('input');
	inputDate.type = 'date';

	const submitBtn = document.createElement('button');
	submitBtn.classList.add('minor');

	submitBtn.textContent = 'Submit';
	submitBtn.addEventListener('click', () => {
		// taskContainer.innerHTML = '';
		const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
			inputName.value,
			inputName.value,
			inputDate.value
		);
		projects[currentProjectIndex].tasks.push(newTask);
		addTaskButton.hidden = false;

		updateUI();
		// return;
	});

	const cancelBtn = document.createElement('button');
	cancelBtn.classList.add('minor');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		addTaskButton.hidden = false;
		updateUI();
	});

	taskContainer.appendChild(inputName);
	taskContainer.appendChild(inputDate);
	taskContainer.appendChild(submitBtn);
	taskContainer.appendChild(cancelBtn);
	return taskContainer;
}

// Creates modal which collects data for the creation of a new project
function createModal() {
	const modal = document.createElement('div');
	modal.classList.add('modal-background');

	const modalBody = document.createElement('div');
	modalBody.classList.add('modal-content');

	const closeButton = document.createElement('span');
	closeButton.textContent = 'x';
	closeButton.classList.add('close');
	closeButton.addEventListener('click', () => {
		modal.style.display = 'none';
		projectNameInput.value = '';
		projectDescriptionInput.value = '';
	});
	modalBody.appendChild(closeButton);

	const modalHeader = document.createElement('h1');
	modalHeader.textContent = 'Create a Project';
	modalBody.appendChild(modalHeader);

	// // Form for project creation modal
	// const form = document.createElement('form');

	const projectNameInput = document.createElement('input');
	projectNameInput.id = 'projectNameField';
	projectNameInput.type = 'text';
	projectNameInput.placeholder = 'Project Name';
	modalBody.appendChild(projectNameInput);

	const projectDescriptionInput = document.createElement('input');
	projectDescriptionInput.id = 'projectDescription';
	projectDescriptionInput.type = 'text';
	projectDescriptionInput.placeholder = 'Project Description';
	modalBody.appendChild(projectDescriptionInput);

	const submitBtn = document.createElement('button');
	submitBtn.classList.add('minor');

	submitBtn.textContent = 'Create';
	submitBtn.addEventListener('click', () => {
		const newProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](
			projectNameInput.value,
			projectDescriptionInput.value
		);
		projects.push(newProject);
		updateUI();
		modal.style.display = 'none';
	});
	modalBody.appendChild(submitBtn);

	const cancelBtn = document.createElement('button');
	cancelBtn.classList.add('minor');
	cancelBtn.textContent = 'Cancel';

	modalBody.appendChild(cancelBtn);
	modal.appendChild(modalBody);

	return modal;
}

function switchProject() {}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixnREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJyxcXG5cXHRcXHQnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRjb2xvcjogI2ZlZmVmZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4jbWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJsb2NrIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGViYXIge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDMwJTtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmY1YWI4O1xcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcblxcdG1hcmdpbi1yaWdodDogLTdweDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5zY3JvbGxhYmxlIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHR3aWR0aDogNzAlO1xcblxcdHBhZGRpbmctbGVmdDogMjVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4ZmQwO1xcbn1cXG5cXG4jdGFza3Mge1xcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Lyogcm93LWdhcDogNXB4OyAqL1xcblxcdC8qIG91dGxpbmU6IDNweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcblxcdHBhZGRpbmc6IDAuMmVtIDA7XFxuXFx0bWFyZ2luOiAwLjVlbSAwO1xcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDIyNiwgNjElLCAzNSUpO1xcbn1cXG5cXG5pbnB1dCB7XFxuXFx0Y29sb3I6ICMwMTAxMDE7XFxuXFx0d2lkdGg6IDE1ZW07XFxufVxcblxcbi50YXNrQ29udGFpbmVyIGlucHV0IHtcXG5cXHRtYXJnaW46IDAuNmVtO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciBidXR0b24ge1xcblxcdG1hcmdpbjogMC42ZW07XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDFlbSAwO1xcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogbGVmdDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDIyNiwgNjElLCAzNSUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuXFx0bWFyZ2luOiAxZW0gMDtcXG5cXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdFxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODYsIDEwMCUsIDI3JSkgIWltcG9ydGFudDsgKi9cXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyOmhvdmVyIHtcXG5cXHRtYXJnaW46IDFlbSAwO1xcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogbGVmdDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDIyNiwgNzAlLCAyMiUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMCk7XFxuXFx0LyogYm94LXNoYWRvdzogaW5zZXQ7ICovXFxufVxcblxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIGgzIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcblxcbi5tb2RhbC1iYWNrZ3JvdW5kIHtcXG5cXHRkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcblxcdHotaW5kZXg6IDM7IC8qIFNpdCBvbiB0b3AgKi9cXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcblxcdGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG5cXHRvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzEwMDAwO1xcblxcdG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICAvKiBoZWlnaHQ6IDgwJTsgKi9cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4ubW9kYWwtY29udGVudCBpbnB1dCB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBidXR0b25zICovXFxuXFxuLm1ham9yIHtcXG5cXHRjb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDE0OCwgMyk7XFxufVxcblxcbi5taW5vciB7XFxuXFx0Y29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxNDQsIDUpO1xcdFxcbn1cXG5cXG5idXR0b24ge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Y29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDg5LCAzKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0M7a0NBQ2lDO0NBQ2pDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7O0FBR0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsVUFBVTtDQUNWLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osVUFBVTtDQUNWLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixXQUFXOztDQUVYLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLG1CQUFtQjs7Q0FFbkIsbUJBQW1CO0NBQ25CLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7O0NBRVgsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsbUJBQW1COztDQUVuQixtQkFBbUI7Q0FDbkIsb0NBQW9DO0NBQ3BDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVzs7Q0FFWCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixtQkFBbUI7O0NBRW5CLG1CQUFtQjtDQUNuQixzREFBc0Q7Q0FDdEQsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixXQUFXOztDQUVYLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLG1CQUFtQjs7Q0FFbkIsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyxrQ0FBa0M7Q0FDbEMsdUJBQXVCO0FBQ3hCOzs7O0FBSUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUEsVUFBVTs7QUFFVjtDQUNDLGFBQWEsRUFBRSxzQkFBc0I7Q0FDckMsZUFBZSxFQUFFLGtCQUFrQjtDQUNuQyxVQUFVLEVBQUUsZUFBZTtDQUMzQixPQUFPO0NBQ1AsTUFBTTtDQUNOLFdBQVcsRUFBRSxlQUFlO0NBQzVCLFlBQVksRUFBRSxnQkFBZ0I7Q0FDOUIsY0FBYyxFQUFFLDRCQUE0QjtDQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7Q0FDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzVEOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztDQUNwRCxhQUFhO0NBQ2Isc0JBQXNCO0lBQ25CLFVBQVUsRUFBRSxvREFBb0Q7SUFDaEUsaUJBQWlCO0NBQ3BCLG1CQUFtQjtBQUNwQjs7O0FBR0E7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBR0EscUJBQXFCO0FBQ3JCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0NBQ1gsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7O0FBR0EsWUFBWTs7QUFFWjtDQUNDLHlCQUF5QjtDQUN6QixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixnQ0FBZ0M7Q0FDaEMsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLFxcblxcdFxcdCdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGNvbG9yOiAjZmVmZWZlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcblxcbiNtYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYmxvY2sge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMzAlO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZjVhYjg7XFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAtN3B4O1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcXG59XFxuXFxuLnNjcm9sbGFibGUge1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3MDhmZDA7XFxufVxcblxcbiN0YXNrcyB7XFxuXFx0aGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHQvKiByb3ctZ2FwOiA1cHg7ICovXFxuXFx0Lyogb3V0bGluZTogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogMC4yZW0gMDtcXG5cXHRtYXJnaW46IDAuNWVtIDA7XFxuXFx0aGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI2LCA2MSUsIDM1JSk7XFxufVxcblxcbmlucHV0IHtcXG5cXHRjb2xvcjogIzAxMDEwMTtcXG5cXHR3aWR0aDogMTVlbTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIgaW5wdXQge1xcblxcdG1hcmdpbjogMC42ZW07XFxufVxcblxcbi50YXNrQ29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0bWFyZ2luOiAwLjZlbTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcblxcdG1hcmdpbjogMWVtIDA7XFxuXFx0aGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI2LCA2MSUsIDM1JSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRtYXJnaW46IDFlbSAwO1xcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogbGVmdDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NiwgMTAwJSwgMjclKSAhaW1wb3J0YW50OyAqL1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXI6aG92ZXIge1xcblxcdG1hcmdpbjogMWVtIDA7XFxuXFx0aGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI2LCA3MCUsIDIyJSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAwKTtcXG5cXHQvKiBib3gtc2hhZG93OiBpbnNldDsgKi9cXG59XFxuXFxuXFxuXFxuLnByb2plY3RDb250YWluZXIgaDMge1xcblxcdHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbi8qIE1vZGFsICovXFxuXFxuLm1vZGFsLWJhY2tncm91bmQge1xcblxcdGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuXFx0cG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuXFx0ei1pbmRleDogMzsgLyogU2l0IG9uIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcblxcdG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3MTAwMDA7XFxuXFx0bWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIC8qIGhlaWdodDogODAlOyAqL1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi5tb2RhbC1jb250ZW50IGlucHV0IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xcblxcdG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIGJ1dHRvbnMgKi9cXG5cXG4ubWFqb3Ige1xcblxcdGNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTQ4LCAzKTtcXG59XFxuXFxuLm1pbm9yIHtcXG5cXHRjb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDE0NCwgNSk7XFx0XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRjb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRjb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODksIDMpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG5cdFxuXHRjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0fVxuXG5cdGFkZFRhc2sgKHRhc2spIHtcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzaylcblx0fVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGVEb25lICgpIHtcbiAgICAgICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZTtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcblxubGV0IHByb2plY3RzID0gW107XG5sZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcblx0J0V4YW1wbGUgUHJvamVjdCcsXG5cdCdBIFByb2plY3QgU2hvd2Nhc2luZyB0aGUgbGF5b3V0IG9mIHRvZG8uaW8nXG4pO1xuXG5jb25zdCBleGFtcGxlVGFzazAgPSBuZXcgVGFzayhcblx0J0xhdW5kcnknLFxuXHQnQ2xlYW4gdXAgeW91ciBuYXN0eSBjbG90aGVzLicsXG5cdG5ldyBEYXRlKCcyMDE1LTAzLTAxJyksXG5cdCdIaWdoJ1xuKTtcbmNvbnN0IGV4YW1wbGVUYXNrMSA9IG5ldyBUYXNrKFxuXHQnR3ltJyxcblx0XCJMaWZ0IHNvbWUgaGVhdnkgc3R1ZmYgZXZlcnkgbm93IGFuZCB0aGVuIHNvIHlvdSBkb24ndCBkaWUgYXQgMjhcIixcblx0bmV3IERhdGUoJzIwMTUtMDMtMjUnKSxcblx0J0hpZ2gnXG4pO1xuY29uc3QgZXhhbXBsZVRhc2syID0gbmV3IFRhc2soXG5cdCdGaW5pc2ggdGhlIE9kaW4gUHJvamVjdCcsXG5cdCdGaW5pc2ggdGhlIHdvbmRlcmZ1bCBPZGluIFByb2plY3QgYmVmb3JlIEFwcmlsIDIwMjInLFxuXHRuZXcgRGF0ZSgnMjAyMi0wNC0zMCcpLFxuXHQnSGlnaCdcbik7XG5jb25zdCBleGFtcGxlVGFzazMgPSBuZXcgVGFzayhcblx0J0ZpbmlzaCBPbmUgUGllY2UnLFxuXHQnRmluaXNoIHRoZSBhbmltZSBPbmUgUGllY2UgYmVmb3JlIHRoZSBlbmQgb2YgMjAyMicsXG5cdG5ldyBEYXRlKCcyMDIzLTAxLTAxJyksXG5cdCdNZWRpdW0nXG4pO1xuXG5uZXdQcm9qZWN0LmFkZFRhc2soZXhhbXBsZVRhc2swKTtcbm5ld1Byb2plY3QuYWRkVGFzayhleGFtcGxlVGFzazEpO1xubmV3UHJvamVjdC5hZGRUYXNrKGV4YW1wbGVUYXNrMik7XG5uZXdQcm9qZWN0LmFkZFRhc2soZXhhbXBsZVRhc2szKTtcblxucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuLy8gY29uc3QgdGVzdCA9IGluaXRVSSgpXG4vLyBjb25zb2xlLmxvZyh0eXBlb2YgdGVzdCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluaXRVSSgpKTtcblxuLy8gR2xvYmFsIFVJIENvbXBvbmVudHNcbmNvbnN0IHByb2plY3RUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJyk7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2snKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpO1xuXG5jb25zdCBtb2RhbCA9IGNyZWF0ZU1vZGFsKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxudXBkYXRlVUkoKTtcblxuZnVuY3Rpb24gaW5pdFVJKCkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1haW4uaWQgPSAnbWFpbic7XG5cblx0Ly8gTEVGVCBDT0wgVUkgPT4gUHJvamVjdHMgU2VjdGlvblxuXHRjb25zdCBsZWZ0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGxlZnRDb2wuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXHRtYWluLmFwcGVuZENoaWxkKGxlZnRDb2wpO1xuXG5cdGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0cHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXHRsZWZ0Q29sLmFwcGVuZENoaWxkKHByb2plY3RIZWFkaW5nKTtcblxuXHRjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Byb2plY3RzJyk7XG5cdHByb2plY3RzLmlkID0gJ3Byb2plY3RzJztcblx0bGVmdENvbC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cblx0Y29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21ham9yJyk7XG5cdGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXHRhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9KTtcblxuXHRsZWZ0Q29sLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG5cdC8vIFJJR0hUIENPTCBVSSA9PiBUYXNrcyBTZWN0aW9uXG5cdGNvbnN0IHJpZ2h0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHJpZ2h0Q29sLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUnKTtcblx0bWFpbi5hcHBlbmRDaGlsZChyaWdodENvbCk7XG5cblx0Y29uc3QgdG9kb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0b2RvSGVhZGluZy50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG5cdHJpZ2h0Q29sLmFwcGVuZENoaWxkKHRvZG9IZWFkaW5nKTtcblxuXHRjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rhc2tzJyk7XG5cdHRhc2tzLmlkID0gJ3Rhc2tzJztcblx0cmlnaHRDb2wuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG5cdGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdtYWpvcicpO1xuXHRhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZFRhc2snO1xuXHRhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblx0YWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRhZGRUYXNrQnV0dG9uLmhpZGRlbiA9IHRydWU7XG5cdFx0dGFza1RhYmxlLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDb250YWluZXJGb3JtKCkpO1xuXHRcdC8vIGFkZCB0YXNrXG5cdFx0Y29uc29sZS5sb2coJ0V2ZW50Jyk7XG5cdFx0Ly8gYWRkVGFzaygpO1xuXHR9KTtcblxuXHRyaWdodENvbC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblx0cmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xuXHQvLyByZXNldCB0YWJsZVxuXHRwcm9qZWN0VGFibGUuaW5uZXJIVE1MID0gJyc7XG5cdHRhc2tUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXHQvLyAxKSBjcmVhdGUgY29udGFpbmVyIGZvciBlYWNoIHByb2plY3Rcblx0Ly8gMikgcG9wdWxhdGUgY29udGFpbmVyIHdpdGggcHJvamVjdCBhdHRyaWJ1dGUgdmFsdWVzXG5cdC8vIDMpIHB1Ymxpc2ggdG8gcHJvamVjdFRhYmxlXG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcblx0XHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KTtcblx0XHRwcm9qZWN0VGFibGUuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cblx0XHQvLyBjb25zb2xlLmxvZyhpKTtcblx0XHRpZiAoaSA9PSBjdXJyZW50UHJvamVjdEluZGV4KSB7XG5cdFx0XHRwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3RDb250YWluZXInKTtcblx0XHRcdHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIDEpIGNyZWF0ZSBjb250YWluZXIgZm9yIGVhY2ggdGFza1xuXHQvLyAyKSBwb3B1bGF0ZSBjb250YWluZXIgd2l0aCB0YXNrIGF0dHJpYnV0ZSB2YWx1ZXNcblx0Ly8gMykgcHVibGlzaCB0byB0YXNrVGFibGVcblx0cHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdHRhc2tUYWJsZS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2spKTtcblx0fSk7XG59XG5cbi8vIENyZWF0ZSBwcm9qZWN0IGNvbnRhaW5lclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG5cdHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgcHJvamVjdHMubGVuZ3RoOyB4KyspIHtcblx0XHRcdGlmIChwcm9qZWN0c1t4XS5uYW1lID09IHByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQpIHtcblx0XHRcdFx0Y3VycmVudFByb2plY3RJbmRleCA9IHg7XG5cdFx0XHRcdHVwZGF0ZVVJKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0cHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cdGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXIpO1xuXG5cdHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG4vLyBjb25zdCB0YXNrID0gbmV3IFRhc2soKVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2tPYmplY3QpIHtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKTtcblxuXHRjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza09iamVjdC50aXRsZTtcblxuXHRjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZHVlRGF0ZTtcblxuXHRjb25zdCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdHRhc2tEb25lLnR5cGUgPSAnY2hlY2tib3gnO1xuXG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG5cdHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyRm9ybSh0YXNrKSB7XG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrQ29udGFpbmVyJyk7XG5cblx0Ly8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0Ly8gVGFzayBmb3JtXG5cdGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0TmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciBwcm9qZWN0IG5hbWUgaGVyZSc7XG5cdGlucHV0TmFtZS50eXBlID0gJ3RleHQnO1xuXG5cdGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0RGF0ZS50eXBlID0gJ2RhdGUnO1xuXG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnbWlub3InKTtcblxuXHRzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0Jztcblx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdC8vIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0Y29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuXHRcdFx0aW5wdXROYW1lLnZhbHVlLFxuXHRcdFx0aW5wdXROYW1lLnZhbHVlLFxuXHRcdFx0aW5wdXREYXRlLnZhbHVlXG5cdFx0KTtcblx0XHRwcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXHRcdGFkZFRhc2tCdXR0b24uaGlkZGVuID0gZmFsc2U7XG5cblx0XHR1cGRhdGVVSSgpO1xuXHRcdC8vIHJldHVybjtcblx0fSk7XG5cblx0Y29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdtaW5vcicpO1xuXHRjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblx0Y2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGFkZFRhc2tCdXR0b24uaGlkZGVuID0gZmFsc2U7XG5cdFx0dXBkYXRlVUkoKTtcblx0fSk7XG5cblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXHRyZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlcyBtb2RhbCB3aGljaCBjb2xsZWN0cyBkYXRhIGZvciB0aGUgY3JlYXRpb24gb2YgYSBuZXcgcHJvamVjdFxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcblxuXHRjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bW9kYWxCb2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuXHRjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0Y2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG5cdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG5cdGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuXHRcdHByb2plY3REZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG5cdH0pO1xuXHRtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG5cdGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0bW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgUHJvamVjdCc7XG5cdG1vZGFsQm9keS5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG5cblx0Ly8gLy8gRm9ybSBmb3IgcHJvamVjdCBjcmVhdGlvbiBtb2RhbFxuXHQvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lRmllbGQnO1xuXHRwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG5cdHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcblx0bW9kYWxCb2R5LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG5cdGNvbnN0IHByb2plY3REZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0cHJvamVjdERlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJztcblx0cHJvamVjdERlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0Jztcblx0cHJvamVjdERlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cdG1vZGFsQm9keS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCk7XG5cblx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdtaW5vcicpO1xuXG5cdHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuXHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuXHRcdFx0cHJvamVjdE5hbWVJbnB1dC52YWx1ZSxcblx0XHRcdHByb2plY3REZXNjcmlwdGlvbklucHV0LnZhbHVlXG5cdFx0KTtcblx0XHRwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXHRcdHVwZGF0ZVVJKCk7XG5cdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fSk7XG5cdG1vZGFsQm9keS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG5cdGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbWlub3InKTtcblx0Y2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cblx0bW9kYWxCb2R5LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cdG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQm9keSk7XG5cblx0cmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KCkge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
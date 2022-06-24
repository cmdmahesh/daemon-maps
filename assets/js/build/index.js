/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/markers/MarkersList.js":
/*!******************************************!*\
  !*** ./src/admin/markers/MarkersList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkersList)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class MarkersList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let markers = this.props.list;

    if (typeof markers === typeof null) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    } else {
      let marker_list = markers.map(mkr => {
        if (!mkr.hasOwnPropery('unique_id')) {
          mkr.unique_id = '';
        }

        if (!mkr.hasOwnPropery('title')) {
          mkr.title = '';
        }

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "",
          "data-id": mkr.unique_id
        }, mkr.title);
      });
    }
  }

}

/***/ }),

/***/ "./src/tailwind.css":
/*!**************************!*\
  !*** ./src/tailwind.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DaemonMaps)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_markers_MarkersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/markers/MarkersList */ "./src/admin/markers/MarkersList.js");
/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tailwind.css */ "./src/tailwind.css");




class DaemonMaps extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      zoom: 3,
      lat: 0,
      lng: 0,
      map: null,
      markers: null,
      polylines: null
    };
    this.add_marker = this.add_marker.bind(this);
    this.add_polyline = this.add_polyline.bind(this);
  }

  add_marker() {
    let marker = new google.maps.Marker({
      map: this.state.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {
        lat: 0,
        lng: 0
      }
      /* results[0].geometry.location */

    });
    let markers = this.state.markers;

    if (typeof markers === typeof null) {
      markers = Array();
    }

    let unique_id = "#" + parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(10).toString().replace(".", "")).toString();
    marker.unique_id = unique_id;
    markers[unique_id] = marker;
    this.setState({
      'markers': markers
    });
  }

  add_polyline() {}

  componentDidMount() {
    window.daemond_map = new google.maps.Map(document.getElementById("daemon_map_container"), {
      center: {
        lat: Number(window.daemon_maps._lat),
        lng: Number(window.daemon_maps._lng)
      },
      zoom: Number(window.daemon_maps._zoom)
    });
    this.setState({
      map: window.daemond_map
    });
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "hidden",
      name: "_zoom",
      value: window.daemon_maps._zoom
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "hidden",
      name: "_lat",
      value: window.daemon_maps._lat
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "hidden",
      name: "_lng",
      value: window.daemon_maps._lng
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full h-96",
      id: "daemon_map_container"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full inline-flex items-baseline",
      id: "daemon_mop_tools"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-1/3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-black"
    }, "Markers"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "daemon_trackers"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_admin_markers_MarkersList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      list: this.state.markers
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-1/3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-black"
    }, "Polylines"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "daemon_polylines"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-1/3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-black"
    }, "Actions"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "inline-flex space-x-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "bg-green-400 p-3 cursor-pointer",
      onClick: this.add_polyline
    }, "Add Polyline")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-96",
      id: "daemon_add_marker_form"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h-3 pt-4 pb-4 text-left mb-4 font-black"
    }, "Add Marker"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: "marker_label",
      class: "marker_label flex space-x-2 items-center mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "w-32"
    }, "Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      class: "block w-full text-sm",
      id: "marker_label",
      name: "marker_label"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: "marker_desc",
      class: "marker_desc flex space-x-2 items-center mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "w-32"
    }, "Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      class: "block w-full text-sm",
      id: "marker_desc",
      name: "marker_desc"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      class: "flex space-x-2 items-center mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "bg-green-400 p-3 cursor-pointer",
      onClick: this.add_marker
    }, "Add Marker"))));
  }

}
/*  */

function daemond_map_init() {
  ReactDOM.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DaemonMaps, null), document.getElementById("daemon_maps_meta_container"));
}

window.daemond_map_init = daemond_map_init;
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
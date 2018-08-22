/******/ (function(modules) { // webpackBootstrap
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
	
	var _mdSidemenu = __webpack_require__(1);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(4);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(6);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(10);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(3);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      locked: '@?mdLocked'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenu',
	  directive: directive
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-sidemenu-locked';
	
	  return '<div class="md-sidemenu ' + locked + '" ng-transclude></div>';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  $scope.$watch(function () {
	    return $attributes.locked;
	  }, function (locked) {
	    if (locked) {
	      $element[0].classList.add('md-sidemenu-locked');
	    } else {
	      $element[0].classList.remove('md-sidemenu-locked');
	    }
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    template: _template2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuGroup',
	  directive: directive
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(7);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(9);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      heading: '@mdHeading',
	      icon: '@?mdIcon',
	      svgIcon: '@?mdSvgIcon',
	      arrow: '@?mdArrow',
	      collapseOther: '@?collapseOther',
	      onHover: '@onHover'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuContent',
	    bindToController: true,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuContent',
	  directive: directive
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  this.visible = false;
	
	  this.changeState = function () {
	
	    if (!this.visible && this.collapseOther) {
	      var allmenu = document.querySelectorAll('.md-sidemenu-toggle');
	      for (var i = 0; i < allmenu.length; i++) {
	
	        angular.element(allmenu[i]).scope().$parent.$mdSidemenuContent.visible = false;
	      }
	    }
	    this.visible = !this.visible;
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\">\n      <md-button class=\"md-sidemenu-toggle\" ng-if=\"$mdSidemenuContent.heading\" ng-click=\"$mdSidemenuContent.changeState();\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.svgIcon\" md-svg-icon=\"$mdSidemenuContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n          <md-icon ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n      </md-button>\n\n      <div class=\"md-sidemenu-wrapper\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	  Loop in the wrapper element searching for wrapper childrens
	  and increase the size
	*/
	
	var getTheChildrensLength = function getTheChildrensLength(wrapper) {
	  var size = 0;
	
	  for (var i = 0; i < wrapper.length; i++) {
	    size += 48;
	    if (wrapper[i].id) {
	      size += getTheChildrensLength(wrapper.children());
	      continue;
	    }
	  }
	
	  return size;
	};
	
	exports.default = function (scope, element, attrs) {
	  /*
	  Check if the container exists an id, if haven't,
	  we'll create.
	  */
	  if (!attrs.id) {
	    element.attr("id", new Date().getTime());
	  }
	
	  /*
	  Get the wrapper content, Calc the childrens buttons and
	  set the margin top property with the length buttons.
	  The number 48 is fixed because the css file is fixed.
	  */
	
	  var wrapper = angular.element(element.children());
	  wrapper.css('marginTop', -getTheChildrensLength(wrapper.children()) + 'px');
	
	  if (attrs.onHover) {
	    /*
	      Active or disable the menu on hover event.
	      @status: Boolean
	     */
	    var showOrHideMenu = function showOrHideMenu(status) {
	      scope.$apply(function () {
	        return scope.$mdSidemenuContent.visible = status;
	      });
	    };
	
	    element.on("mouseenter", function () {
	      showOrHideMenu(true);
	    });
	    element.on("mouseleave", function () {
	      showOrHideMenu(false);
	    });
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(11);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(12);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      uiSref: '@?',
	      uiSrefActive: '@?',
	      href: '@?',
	      target: '@?'
	    },
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuButton',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuButton',
	  directive: directive
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-sidemenu-button\"\n      layout=\"column\"\n      href=\"{{ $mdSidemenuButton.href }}\"\n      ui-sref=\"{{ $mdSidemenuButton.uiSref }}\"\n      ui-sref-active=\"{{ $mdSidemenuButton.uiSrefActive }}\"\n      target=\"{{ $mdSidemenuButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWFjODViMGRmNTNkNGMyYjYxNmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJuYW1lIiwicmVzdHJpY3QiLCJzY29wZSIsImxvY2tlZCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cmlidXRlcyIsIiRzY29wZSIsIiR3YXRjaCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhlYWRpbmciLCJpY29uIiwic3ZnSWNvbiIsImFycm93IiwiY29sbGFwc2VPdGhlciIsIm9uSG92ZXIiLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiYmluZFRvQ29udHJvbGxlciIsInZpc2libGUiLCJjaGFuZ2VTdGF0ZSIsImFsbG1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsIiRwYXJlbnQiLCIkbWRTaWRlbWVudUNvbnRlbnQiLCJnZXRUaGVDaGlsZHJlbnNMZW5ndGgiLCJzaXplIiwid3JhcHBlciIsImlkIiwiY2hpbGRyZW4iLCJhdHRycyIsImF0dHIiLCJEYXRlIiwiZ2V0VGltZSIsImNzcyIsInNob3dPckhpZGVNZW51IiwiJGFwcGx5Iiwic3RhdHVzIiwib24iLCJ1aVNyZWYiLCJ1aVNyZWZBY3RpdmUiLCJocmVmIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFBQTs7QUFJQSxLQUFJLGVBQWUsdUJBQXVCOztBQUgxQzs7QUFPQSxLQUFJLG9CQUFvQix1QkFBdUI7O0FBTi9DOztBQVVBLEtBQUksc0JBQXNCLHVCQUF1Qjs7QUFUakQ7O0FBYUEsS0FBSSxxQkFBcUIsdUJBQXVCOztBQUVoRCxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUFidkYsRUFBQyxVQUFDQSxTQUFZOztHQUVaQSxRQUNHQyxPQUFPLHNCQUFzQixDQUM1QixlQUVEQyxVQUFVLHFCQUFXQyxNQUFNLHFCQUFXRCxXQUN0Q0EsVUFBVSww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O0FBV0EsS0FBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FBWHZGLEtBQUk3QyxZQUFZLFNBQVpBLFlBQWtCOztHQUVwQixPQUFPO0tBQ0xFLFVBQVU7S0FDVkMsT0FBTztPQUNMOEMsUUFBUTtPQUNSQyxjQUFjO09BQ2RDLE1BQU07T0FDTkMsUUFBUTs7S0FFVjlDLFlBQVk7S0FDWkM7S0FDQWU7S0FDQUMsY0FBYztLQUNkQyxrQkFBa0I7Ozs7QUFpQnRCLFNBQVEsVUFaTztHQUNidkIsTUFBTTtHQUNORDs7Ozs7OztBQ3hCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXLEc7Ozs7OztBQ0ExQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXOztHQUV4QiIsImZpbGUiOiJhbmd1bGFyLW1hdGVyaWFsLXNpZGVtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlYWM4NWIwZGY1M2Q0YzJiNjE2Y1xuICoqLyIsImltcG9ydCBtZFNpZGVtZW51IGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51JztcbmltcG9ydCBtZFNpZGVtZW51R3JvdXAgZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnVHcm91cCc7XG5pbXBvcnQgbWRTaWRlbWVudUNvbnRlbnQgZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50JztcbmltcG9ydCBtZFNpZGVtZW51QnV0dG9uIGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uJztcblxuKChhbmd1bGFyKSA9PiB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ25nTWF0ZXJpYWxTaWRlbWVudScsIFtcbiAgICAgICduZ01hdGVyaWFsJ1xuICAgIF0pXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51Lm5hbWUsIG1kU2lkZW1lbnUuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUdyb3VwLm5hbWUsIG1kU2lkZW1lbnVHcm91cC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51Q29udGVudC5uYW1lLCBtZFNpZGVtZW51Q29udGVudC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51QnV0dG9uLm5hbWUsIG1kU2lkZW1lbnVCdXR0b24uZGlyZWN0aXZlKTtcblxufSkoYW5ndWxhcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzXG4gKiovIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGxvY2tlZDogJ0A/bWRMb2NrZWQnXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgbGlua1xuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtc2lkZW1lbnUtbG9ja2VkJztcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudSAkeyBsb2NrZWQgfVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+YDtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkYXR0cmlidXRlcy5sb2NrZWQ7XG4gIH0sIGZ1bmN0aW9uKGxvY2tlZCkge1xuICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ21kLXNpZGVtZW51LWxvY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QucmVtb3ZlKCdtZC1zaWRlbWVudS1sb2NrZWQnKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qc1xuICoqLyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVHcm91cCcsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtZ3JvdXBcIiBmbGV4IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC90ZW1wbGF0ZS5qc1xuICoqLyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgaGVhZGluZzogJ0BtZEhlYWRpbmcnLFxuICAgICAgaWNvbjogJ0A/bWRJY29uJyxcbiAgICAgIHN2Z0ljb246ICdAP21kU3ZnSWNvbicsXG4gICAgICBhcnJvdzogJ0A/bWRBcnJvdycsXG4gICAgICBjb2xsYXBzZU90aGVyOiAnQD9jb2xsYXBzZU90aGVyJyxcbiAgICAgIG9uSG92ZXI6ICdAb25Ib3ZlcidcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBjb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJyRtZFNpZGVtZW51Q29udGVudCcsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBsaW5rXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVDb250ZW50JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBpZiAoIXRoaXMudmlzaWJsZSAmJiB0aGlzLmNvbGxhcHNlT3RoZXIpe1xuICAgICAgICB2YXIgYWxsbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZC1zaWRlbWVudS10b2dnbGUnKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGFsbG1lbnUubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChhbGxtZW51W2ldKS5zY29wZSgpLiRwYXJlbnQuJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgPSBmYWxzZVxuICAgICAgICB9IFxuICAgIH1cbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICB9O1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudS1jb250ZW50XCIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtc2lkZW1lbnUtdG9nZ2xlXCIgbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuaGVhZGluZ1wiIG5nLWNsaWNrPVwiJG1kU2lkZW1lbnVDb250ZW50LmNoYW5nZVN0YXRlKCk7XCIgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZSB9XCI+XG4gICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuc3ZnSWNvblwiIG1kLXN2Zy1pY29uPVwiJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb25cIj48L21kLWljb24+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuaWNvblwiPnt7ICRtZFNpZGVtZW51Q29udGVudC5pY29uIH19PC9tZC1pY29uPlxuICAgICAgICAgIDxzcGFuIGZsZXg+e3sgJG1kU2lkZW1lbnVDb250ZW50LmhlYWRpbmcgfX08L3NwYW4+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuYXJyb3dcIj5rZXlib2FyZF9hcnJvd19kb3duPC9tZC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWQtYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtd3JhcHBlclwiIG1kLXNpZGVtZW51LWRpc2FibGUtYW5pbWF0ZSBuZy1jbGFzcz1cInsgJ21kLWFjdGl2ZSc6ICRtZFNpZGVtZW51Q29udGVudC52aXNpYmxlLCAnbWQtc2lkZW1lbnUtd3JhcHBlci1pY29ucyc6ICAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9XCIgbGF5b3V0PVwiY29sdW1uXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC90ZW1wbGF0ZS5qc1xuICoqLyIsIi8qXG4gIExvb3AgaW4gdGhlIHdyYXBwZXIgZWxlbWVudCBzZWFyY2hpbmcgZm9yIHdyYXBwZXIgY2hpbGRyZW5zXG4gIGFuZCBpbmNyZWFzZSB0aGUgc2l6ZVxuKi9cblxuY29uc3QgZ2V0VGhlQ2hpbGRyZW5zTGVuZ3RoID0gd3JhcHBlciA9PiB7XG4gIGxldCBzaXplID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdyYXBwZXIubGVuZ3RoOyBpKyspIHtcbiAgICBzaXplICs9IDQ4O1xuICAgIGlmICh3cmFwcGVyW2ldLmlkKSB7XG4gICAgICBzaXplICs9IGdldFRoZUNoaWxkcmVuc0xlbmd0aCh3cmFwcGVyLmNoaWxkcmVuKCkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNpemU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gIC8qXG4gIENoZWNrIGlmIHRoZSBjb250YWluZXIgZXhpc3RzIGFuIGlkLCBpZiBoYXZlbid0LFxuICB3ZSdsbCBjcmVhdGUuXG4qL1xuICBpZiAoIWF0dHJzLmlkKSB7XG4gICAgZWxlbWVudC5hdHRyKFwiaWRcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgLypcbiAgR2V0IHRoZSB3cmFwcGVyIGNvbnRlbnQsIENhbGMgdGhlIGNoaWxkcmVucyBidXR0b25zIGFuZFxuICBzZXQgdGhlIG1hcmdpbiB0b3AgcHJvcGVydHkgd2l0aCB0aGUgbGVuZ3RoIGJ1dHRvbnMuXG4gIFRoZSBudW1iZXIgNDggaXMgZml4ZWQgYmVjYXVzZSB0aGUgY3NzIGZpbGUgaXMgZml4ZWQuXG4gKi9cblxuICBsZXQgd3JhcHBlciA9IGFuZ3VsYXIuZWxlbWVudChlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB3cmFwcGVyLmNzcygnbWFyZ2luVG9wJywgLSggZ2V0VGhlQ2hpbGRyZW5zTGVuZ3RoKCB3cmFwcGVyLmNoaWxkcmVuKCkgKSApICsgJ3B4Jyk7XG5cbiAgaWYgKGF0dHJzLm9uSG92ZXIpIHtcbiAgICAvKlxuICAgICAgQWN0aXZlIG9yIGRpc2FibGUgdGhlIG1lbnUgb24gaG92ZXIgZXZlbnQuXG4gICAgICBAc3RhdHVzOiBCb29sZWFuXG4gICAgICovXG4gICAgbGV0IHNob3dPckhpZGVNZW51ID0gc3RhdHVzID0+IHtcbiAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiAoc2NvcGUuJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgPSBzdGF0dXMpKTtcbiAgICB9O1xuXG4gICAgZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgc2hvd09ySGlkZU1lbnUodHJ1ZSk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgc2hvd09ySGlkZU1lbnUoZmFsc2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9saW5rLmpzXG4gKiovIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIHVpU3JlZjogJ0A/JyxcbiAgICAgIHVpU3JlZkFjdGl2ZTogJ0A/JyxcbiAgICAgIGhyZWY6ICdAPycsXG4gICAgICB0YXJnZXQ6ICdAPydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUJ1dHRvbicsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51QnV0dG9uJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8bWQtYnV0dG9uXG4gICAgICBjbGFzcz1cIm1kLXNpZGVtZW51LWJ1dHRvblwiXG4gICAgICBsYXlvdXQ9XCJjb2x1bW5cIlxuICAgICAgaHJlZj1cInt7ICRtZFNpZGVtZW51QnV0dG9uLmhyZWYgfX1cIlxuICAgICAgdWktc3JlZj1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZiB9fVwiXG4gICAgICB1aS1zcmVmLWFjdGl2ZT1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZkFjdGl2ZSB9fVwiXG4gICAgICB0YXJnZXQ9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi50YXJnZXQgfX1cIj5cbiAgICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWZpbGwgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cbiAgICA8L21kLWJ1dHRvbj5cbiAgYDtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
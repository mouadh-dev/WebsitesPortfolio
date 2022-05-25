/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./custom */ "./resources/js/custom.js");

__webpack_require__(/*! ./mixitup.min.js */ "./resources/js/mixitup.min.js");

__webpack_require__(/*! ./swiper.min.js */ "./resources/js/swiper.min.js");

/***/ }),

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/***/ (() => {

(function ($) {
  "use strict"; // Nav Menu Hover Script

  $('ul.nav li.dropdown').on('hover', function () {
    $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
  }, function () {
    $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
  }); // hamburger menu icons

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/mixitup.min.js":
/*!*************************************!*\
  !*** ./resources/js/mixitup.min.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**!
 * MixItUp v3.3.0
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 0be05511-2264-4384-8e31-c75554304cd0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function (t) {
  "use strict";

  var _e = null,
      n = null;
  !function () {
    var e = ["webkit", "moz", "o", "ms"],
        n = t.document.createElement("div"),
        a = -1;

    for (a = 0; a < e.length && !t.requestAnimationFrame; a++) {
      t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
    }

    "undefined" == typeof n.nextElementSibling && Object.defineProperty(t.Element.prototype, "nextElementSibling", {
      get: function get() {
        for (var t = this.nextSibling; t;) {
          if (1 === t.nodeType) return t;
          t = t.nextSibling;
        }

        return null;
      }
    }), function (t) {
      t.matches = t.matches || t.machesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector || function (t) {
        return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t), this) > -1;
      };
    }(t.Element.prototype), Object.keys || (Object.keys = function () {
      var t = Object.prototype.hasOwnProperty,
          e = !1,
          n = [],
          a = -1;
      return e = !{
        toString: null
      }.propertyIsEnumerable("toString"), n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], a = n.length, function (i) {
        var o = [],
            r = "",
            s = -1;
        if ("object" != _typeof(i) && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");

        for (r in i) {
          t.call(i, r) && o.push(r);
        }

        if (e) for (s = 0; s < a; s++) {
          t.call(i, n[s]) && o.push(n[s]);
        }
        return o;
      };
    }()), Array.isArray || (Array.isArray = function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }), "function" != typeof Object.create && (Object.create = function (t) {
      var e = function e() {};

      return function (n, a) {
        if (n !== Object(n) && null !== n) throw TypeError("Argument must be an object, or null");
        e.prototype = n || {};
        var i = new e();
        return e.prototype = null, a !== t && Object.defineProperties(i, a), null === n && (i.__proto__ = null), i;
      };
    }()), String.prototype.trim || (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
      var e, n, a, i;
      if (null === this) throw new TypeError();
      if (a = Object(this), i = a.length >>> 0, 0 === i) return -1;
      if (e = 0, arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))), e >= i) return -1;

      for (n = e >= 0 ? e : Math.max(i - Math.abs(e), 0); n < i; n++) {
        if (n in a && a[n] === t) return n;
      }

      return -1;
    }), Function.prototype.bind || (Function.prototype.bind = function (t) {
      var e, n, a, i;
      if ("function" != typeof this) throw new TypeError();
      return e = Array.prototype.slice.call(arguments, 1), n = this, a = function a() {}, i = function i() {
        return n.apply(this instanceof a ? this : t, e.concat(Array.prototype.slice.call(arguments)));
      }, this.prototype && (a.prototype = this.prototype), i.prototype = new a(), i;
    }), t.Element.prototype.dispatchEvent || (t.Element.prototype.dispatchEvent = function (t) {
      try {
        return this.fireEvent("on" + t.type, t);
      } catch (e) {}
    });
  }(), _e = function e(a, i, o) {
    var r = null,
        s = !1,
        l = null,
        c = null,
        u = null,
        f = null,
        h = [],
        d = "",
        m = [],
        g = -1;
    if (u = o || t.document, (s = arguments[3]) && (s = "boolean" == typeof s), "string" == typeof a) m = u.querySelectorAll(a);else if (a && "object" == _typeof(a) && n.isElement(a, u)) m = [a];else {
      if (!a || "object" != _typeof(a) || !a.length) throw new Error(_e.messages.errorFactoryInvalidContainer());
      m = a;
    }
    if (m.length < 1) throw new Error(_e.messages.errorFactoryContainerNotFound());

    for (g = 0; (r = m[g]) && (!(g > 0) || s); g++) {
      r.id ? d = r.id : (d = "MixItUp" + n.randomHex(), r.id = d), _e.instances[d] instanceof _e.Mixer ? (l = _e.instances[d], (!i || i && i.debug && i.debug.showWarnings !== !1) && console.warn(_e.messages.warningFactoryPreexistingInstance())) : (l = new _e.Mixer(), l.attach(r, u, d, i), _e.instances[d] = l), c = new _e.Facade(l), i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
    }

    return f = s ? new _e.Collection(h) : h[0];
  }, _e.use = function (t) {
    _e.Base.prototype.callActions.call(_e, "beforeUse", arguments), "function" == typeof t && "mixitup-extension" === t.TYPE ? "undefined" == typeof _e.extensions[t.NAME] && (t(_e), _e.extensions[t.NAME] = t) : t.fn && t.fn.jquery && (_e.libraries.$ = t), _e.Base.prototype.callActions.call(_e, "afterUse", arguments);
  }, _e.instances = {}, _e.extensions = {}, _e.libraries = {}, n = {
    hasClass: function hasClass(t, e) {
      return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
    },
    addClass: function addClass(t, e) {
      this.hasClass(t, e) || (t.className += t.className ? " " + e : e);
    },
    removeClass: function removeClass(t, e) {
      if (this.hasClass(t, e)) {
        var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
        t.className = t.className.replace(n, " ").trim();
      }
    },
    extend: function extend(t, e, n, a) {
      var i = [],
          o = "",
          r = -1;
      n = n || !1, a = a || !1;

      try {
        if (Array.isArray(e)) for (r = 0; r < e.length; r++) {
          i.push(r);
        } else e && (i = Object.keys(e));

        for (r = 0; r < i.length; r++) {
          o = i[r], !n || "object" != _typeof(e[o]) || this.isElement(e[o]) ? t[o] = e[o] : Array.isArray(e[o]) ? (t[o] || (t[o] = []), this.extend(t[o], e[o], n, a)) : (t[o] || (t[o] = {}), this.extend(t[o], e[o], n, a));
        }
      } catch (s) {
        if (!a) throw s;
        this.handleExtendError(s, t);
      }

      return t;
    },
    handleExtendError: function handleExtendError(t, n) {
      var a = /property "?(\w*)"?[,:] object/i,
          i = null,
          o = "",
          r = "",
          s = "",
          l = "",
          c = "",
          u = -1,
          f = -1;

      if (t instanceof TypeError && (i = a.exec(t.message))) {
        o = i[1];

        for (c in n) {
          for (f = 0; f < o.length && o.charAt(f) === c.charAt(f);) {
            f++;
          }

          f > u && (u = f, l = c);
        }

        throw u > 1 && (s = _e.messages.errorConfigInvalidPropertySuggestion({
          probableMatch: l
        })), r = _e.messages.errorConfigInvalidProperty({
          erroneous: o,
          suggestion: s
        }), new TypeError(r);
      }

      throw t;
    },
    template: function template(t) {
      for (var e = /\${([\w]*)}/g, n = {}, a = null; a = e.exec(t);) {
        n[a[1]] = new RegExp("\\${" + a[1] + "}", "g");
      }

      return function (e) {
        var a = "",
            i = t;
        e = e || {};

        for (a in n) {
          i = i.replace(n[a], "undefined" != typeof e[a] ? e[a] : "");
        }

        return i;
      };
    },
    on: function on(e, n, a, i) {
      e && (e.addEventListener ? e.addEventListener(n, a, i) : e.attachEvent && (e["e" + n + a] = a, e[n + a] = function () {
        e["e" + n + a](t.event);
      }, e.attachEvent("on" + n, e[n + a])));
    },
    off: function off(t, e, n) {
      t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && (t.detachEvent("on" + e, t[e + n]), t[e + n] = null));
    },
    getCustomEvent: function getCustomEvent(e, n, a) {
      var i = null;
      return a = a || t.document, "function" == typeof t.CustomEvent ? i = new t.CustomEvent(e, {
        detail: n,
        bubbles: !0,
        cancelable: !0
      }) : "function" == typeof a.createEvent ? (i = a.createEvent("CustomEvent"), i.initCustomEvent(e, !0, !0, n)) : (i = a.createEventObject(), i.type = e, i.returnValue = !1, i.cancelBubble = !1, i.detail = n), i;
    },
    getOriginalEvent: function getOriginalEvent(t) {
      return t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
    },
    index: function index(t, e) {
      for (var n = 0; null !== (t = t.previousElementSibling);) {
        e && !t.matches(e) || ++n;
      }

      return n;
    },
    camelCase: function camelCase(t) {
      return t.toLowerCase().replace(/([_-][a-z])/g, function (t) {
        return t.toUpperCase().replace(/[_-]/, "");
      });
    },
    pascalCase: function pascalCase(t) {
      return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1);
    },
    dashCase: function dashCase(t) {
      return t.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
    },
    isElement: function isElement(e, n) {
      return n = n || t.document, !!(t.HTMLElement && e instanceof t.HTMLElement) || !!(n.defaultView && n.defaultView.HTMLElement && e instanceof n.defaultView.HTMLElement) || null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    },
    createElement: function createElement(e, n) {
      var a = null,
          i = null;

      for (n = n || t.document, a = n.createDocumentFragment(), i = n.createElement("div"), i.innerHTML = e.trim(); i.firstChild;) {
        a.appendChild(i.firstChild);
      }

      return a;
    },
    removeWhitespace: function removeWhitespace(t) {
      for (var e; t && "#text" === t.nodeName;) {
        e = t, t = t.previousSibling, e.parentElement && e.parentElement.removeChild(e);
      }
    },
    isEqualArray: function isEqualArray(t, e) {
      var n = t.length;
      if (n !== e.length) return !1;

      for (; n--;) {
        if (t[n] !== e[n]) return !1;
      }

      return !0;
    },
    deepEquals: function deepEquals(t, e) {
      var n;

      if ("object" == _typeof(t) && t && "object" == _typeof(e) && e) {
        if (Object.keys(t).length !== Object.keys(e).length) return !1;

        for (n in t) {
          if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n])) return !1;
        }
      } else if (t !== e) return !1;

      return !0;
    },
    arrayShuffle: function arrayShuffle(t) {
      for (var e = t.slice(), n = e.length, a = n, i = -1, o = []; a--;) {
        i = ~~(Math.random() * n), o = e[a], e[a] = e[i], e[i] = o;
      }

      return e;
    },
    arrayFromList: function arrayFromList(t) {
      var e, n;

      try {
        return Array.prototype.slice.call(t);
      } catch (a) {
        for (e = [], n = 0; n < t.length; n++) {
          e.push(t[n]);
        }

        return e;
      }
    },
    debounce: function debounce(t, e, n) {
      var a;
      return function () {
        var i = this,
            o = arguments,
            r = n && !a,
            s = null;
        s = function s() {
          a = null, n || t.apply(i, o);
        }, clearTimeout(a), a = setTimeout(s, e), r && t.apply(i, o);
      };
    },
    position: function position(t) {
      for (var e = 0, n = 0, a = t; t;) {
        e -= t.scrollLeft, n -= t.scrollTop, t === a && (e += t.offsetLeft, n += t.offsetTop, a = t.offsetParent), t = t.parentElement;
      }

      return {
        x: e,
        y: n
      };
    },
    getHypotenuse: function getHypotenuse(t, e) {
      var n = t.x - e.x,
          a = t.y - e.y;
      return n = n < 0 ? n * -1 : n, a = a < 0 ? a * -1 : a, Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
    },
    getIntersectionRatio: function getIntersectionRatio(t, e) {
      var n = t.width * t.height,
          a = -1,
          i = -1,
          o = -1,
          r = -1;
      return a = Math.max(0, Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left)), i = Math.max(0, Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top)), o = i * a, r = o / n;
    },
    closestParent: function closestParent(e, n, a, i) {
      var o = e.parentNode;
      if (i = i || t.document, a && e.matches(n)) return e;

      for (; o && o != i.body;) {
        if (o.matches && o.matches(n)) return o;
        if (!o.parentNode) return null;
        o = o.parentNode;
      }

      return null;
    },
    children: function children(e, n, a) {
      var i = [],
          o = "";
      return a = a || t.doc, e && (e.id || (o = "Temp" + this.randomHexKey(), e.id = o), i = a.querySelectorAll("#" + e.id + " > " + n), o && e.removeAttribute("id")), i;
    },
    clean: function clean(t) {
      var e = [],
          n = -1;

      for (n = 0; n < t.length; n++) {
        "" !== t[n] && e.push(t[n]);
      }

      return e;
    },
    defer: function defer(n) {
      var a = null,
          i = null,
          o = null;
      return i = new this.Deferred(), _e.features.has.promises ? i.promise = new Promise(function (t, e) {
        i.resolve = t, i.reject = e;
      }) : (o = t.jQuery || n.$) && "function" == typeof o.Deferred ? (a = o.Deferred(), i.promise = a.promise(), i.resolve = a.resolve, i.reject = a.reject) : t.console && console.warn(_e.messages.warningNoPromiseImplementation()), i;
    },
    all: function all(n, a) {
      var i = null;
      return _e.features.has.promises ? Promise.all(n) : (i = t.jQuery || a.$) && "function" == typeof i.when ? i.when.apply(i, n).done(function () {
        return arguments;
      }) : (t.console && console.warn(_e.messages.warningNoPromiseImplementation()), []);
    },
    getPrefix: function getPrefix(t, e, a) {
      var i = -1,
          o = "";
      if (n.dashCase(e) in t.style) return "";

      for (i = 0; o = a[i]; i++) {
        if (o + e in t.style) return o.toLowerCase();
      }

      return "unsupported";
    },
    randomHex: function randomHex() {
      return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase();
    },
    getDocumentState: function getDocumentState(e) {
      return e = "object" == _typeof(e.body) ? e : t.document, {
        scrollTop: t.pageYOffset,
        scrollLeft: t.pageXOffset,
        docHeight: e.documentElement.scrollHeight,
        docWidth: e.documentElement.scrollWidth,
        viewportHeight: e.documentElement.clientHeight,
        viewportWidth: e.documentElement.clientWidth
      };
    },
    bind: function bind(t, e) {
      return function () {
        return e.apply(t, arguments);
      };
    },
    isVisible: function isVisible(e) {
      var n = null;
      return !!e.offsetParent || (n = t.getComputedStyle(e), "fixed" === n.position && "hidden" !== n.visibility && "0" !== n.opacity);
    },
    seal: function seal(t) {
      "function" == typeof Object.seal && Object.seal(t);
    },
    freeze: function freeze(t) {
      "function" == typeof Object.freeze && Object.freeze(t);
    },
    compareVersions: function compareVersions(t, e) {
      var n = t.split("."),
          a = e.split("."),
          i = -1,
          o = -1,
          r = -1;

      for (r = 0; r < n.length; r++) {
        if (i = parseInt(n[r].replace(/[^\d.]/g, "")), o = parseInt(a[r].replace(/[^\d.]/g, "") || 0), o < i) return !1;
        if (o > i) return !0;
      }

      return !0;
    },
    Deferred: function Deferred() {
      this.promise = null, this.resolve = null, this.reject = null, this.id = n.randomHex();
    },
    isEmptyObject: function isEmptyObject(t) {
      var e = "";
      if ("function" == typeof Object.keys) return 0 === Object.keys(t).length;

      for (e in t) {
        if (t.hasOwnProperty(e)) return !1;
      }

      return !0;
    },
    getClassname: function getClassname(t, e, n) {
      var a = "";
      return a += t.block, a.length && (a += t.delineatorElement), a += t["element" + this.pascalCase(e)], n ? (a.length && (a += t.delineatorModifier), a += n) : a;
    },
    getProperty: function getProperty(t, e) {
      var n = e.split("."),
          a = null,
          i = "",
          o = 0;
      if (!e) return t;

      for (a = function a(t) {
        return t ? t[i] : null;
      }; o < n.length;) {
        i = n[o], t = a(t), o++;
      }

      return "undefined" != typeof t ? t : null;
    }
  }, _e.h = n, _e.Base = function () {}, _e.Base.prototype = {
    constructor: _e.Base,
    callActions: function callActions(t, e) {
      var a = this,
          i = a.constructor.actions[t],
          o = "";
      if (i && !n.isEmptyObject(i)) for (o in i) {
        i[o].apply(a, e);
      }
    },
    callFilters: function callFilters(t, e, a) {
      var i = this,
          o = i.constructor.filters[t],
          r = e,
          s = "";
      if (!o || n.isEmptyObject(o)) return r;
      a = a || [];

      for (s in o) {
        a = n.arrayFromList(a), a.unshift(r), r = o[s].apply(i, a);
      }

      return r;
    }
  }, _e.BaseStatic = function () {
    this.actions = {}, this.filters = {}, this.extend = function (t) {
      n.extend(this.prototype, t);
    }, this.registerAction = function (t, e, n) {
      (this.actions[t] = this.actions[t] || {})[e] = n;
    }, this.registerFilter = function (t, e, n) {
      (this.filters[t] = this.filters[t] || {})[e] = n;
    };
  }, _e.Features = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.boxSizingPrefix = "", this.transformPrefix = "", this.transitionPrefix = "", this.boxSizingPrefix = "", this.transformProp = "", this.transformRule = "", this.transitionProp = "", this.perspectiveProp = "", this.perspectiveOriginProp = "", this.has = new _e.Has(), this.canary = null, this.BOX_SIZING_PROP = "boxSizing", this.TRANSITION_PROP = "transition", this.TRANSFORM_PROP = "transform", this.PERSPECTIVE_PROP = "perspective", this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin", this.VENDORS = ["Webkit", "moz", "O", "ms"], this.TWEENABLE = ["opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"], this.callActions("afterConstruct");
  }, _e.BaseStatic.call(_e.Features), _e.Features.prototype = Object.create(_e.Base.prototype), n.extend(_e.Features.prototype, {
    constructor: _e.Features,
    init: function init() {
      var t = this;
      t.callActions("beforeInit", arguments), t.canary = document.createElement("div"), t.setPrefixes(), t.runTests(), t.callActions("beforeInit", arguments);
    },
    runTests: function runTests() {
      var e = this;
      e.callActions("beforeRunTests", arguments), e.has.promises = "function" == typeof t.Promise, e.has.transitions = "unsupported" !== e.transitionPrefix, e.callActions("afterRunTests", arguments), n.freeze(e.has);
    },
    setPrefixes: function setPrefixes() {
      var t = this;
      t.callActions("beforeSetPrefixes", arguments), t.transitionPrefix = n.getPrefix(t.canary, "Transition", t.VENDORS), t.transformPrefix = n.getPrefix(t.canary, "Transform", t.VENDORS), t.boxSizingPrefix = n.getPrefix(t.canary, "BoxSizing", t.VENDORS), t.boxSizingProp = t.boxSizingPrefix ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP) : t.BOX_SIZING_PROP, t.transitionProp = t.transitionPrefix ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP) : t.TRANSITION_PROP, t.transformProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP) : t.TRANSFORM_PROP, t.transformRule = t.transformPrefix ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP : t.TRANSFORM_PROP, t.perspectiveProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP) : t.PERSPECTIVE_PROP, t.perspectiveOriginProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP) : t.PERSPECTIVE_ORIGIN_PROP, t.callActions("afterSetPrefixes", arguments);
    }
  }), _e.Has = function () {
    this.transitions = !1, this.promises = !1, n.seal(this);
  }, _e.features = new _e.Features(), _e.features.init(), _e.ConfigAnimation = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.effects = "fade scale", this.effectsIn = "", this.effectsOut = "", this.duration = 600, this.easing = "ease", this.applyPerspective = !0, this.perspectiveDistance = "3000px", this.perspectiveOrigin = "50% 50%", this.queue = !0, this.queueLimit = 3, this.animateResizeContainer = !0, this.animateResizeTargets = !1, this.staggerSequence = null, this.reverseOut = !1, this.nudge = !0, this.clampHeight = !0, this.clampWidth = !0, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigAnimation), _e.ConfigAnimation.prototype = Object.create(_e.Base.prototype), _e.ConfigAnimation.prototype.constructor = _e.ConfigAnimation, _e.ConfigBehavior = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.liveSort = !1, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigBehavior), _e.ConfigBehavior.prototype = Object.create(_e.Base.prototype), _e.ConfigBehavior.prototype.constructor = _e.ConfigBehavior, _e.ConfigCallbacks = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.onMixStart = null, this.onMixBusy = null, this.onMixEnd = null, this.onMixFail = null, this.onMixClick = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigCallbacks), _e.ConfigCallbacks.prototype = Object.create(_e.Base.prototype), _e.ConfigCallbacks.prototype.constructor = _e.ConfigCallbacks, _e.ConfigControls = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.live = !1, this.scope = "global", this.toggleLogic = "or", this.toggleDefault = "all", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigControls), _e.ConfigControls.prototype = Object.create(_e.Base.prototype), _e.ConfigControls.prototype.constructor = _e.ConfigControls, _e.ConfigClassNames = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.block = "mixitup", this.elementContainer = "container", this.elementFilter = "control", this.elementSort = "control", this.elementMultimix = "control", this.elementToggle = "control", this.modifierActive = "active", this.modifierDisabled = "disabled", this.modifierFailed = "failed", this.delineatorElement = "-", this.delineatorModifier = "-", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigClassNames), _e.ConfigClassNames.prototype = Object.create(_e.Base.prototype), _e.ConfigClassNames.prototype.constructor = _e.ConfigClassNames, _e.ConfigData = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.uidKey = "", this.dirtyCheck = !1, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigData), _e.ConfigData.prototype = Object.create(_e.Base.prototype), _e.ConfigData.prototype.constructor = _e.ConfigData, _e.ConfigDebug = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !1, this.showWarnings = !0, this.fauxAsync = !1, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigDebug), _e.ConfigDebug.prototype = Object.create(_e.Base.prototype), _e.ConfigDebug.prototype.constructor = _e.ConfigDebug, _e.ConfigLayout = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.allowNestedTargets = !0, this.containerClassName = "", this.siblingBefore = null, this.siblingAfter = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigLayout), _e.ConfigLayout.prototype = Object.create(_e.Base.prototype), _e.ConfigLayout.prototype.constructor = _e.ConfigLayout, _e.ConfigLoad = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.filter = "all", this.sort = "default:asc", this.dataset = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigLoad), _e.ConfigLoad.prototype = Object.create(_e.Base.prototype), _e.ConfigLoad.prototype.constructor = _e.ConfigLoad, _e.ConfigSelectors = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.target = ".mix", this.control = "", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigSelectors), _e.ConfigSelectors.prototype = Object.create(_e.Base.prototype), _e.ConfigSelectors.prototype.constructor = _e.ConfigSelectors, _e.ConfigRender = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.target = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigRender), _e.ConfigRender.prototype = Object.create(_e.Base.prototype), _e.ConfigRender.prototype.constructor = _e.ConfigRender, _e.ConfigTemplates = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.ConfigTemplates), _e.ConfigTemplates.prototype = Object.create(_e.Base.prototype), _e.ConfigTemplates.prototype.constructor = _e.ConfigTemplates, _e.Config = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.animation = new _e.ConfigAnimation(), this.behavior = new _e.ConfigBehavior(), this.callbacks = new _e.ConfigCallbacks(), this.controls = new _e.ConfigControls(), this.classNames = new _e.ConfigClassNames(), this.data = new _e.ConfigData(), this.debug = new _e.ConfigDebug(), this.layout = new _e.ConfigLayout(), this.load = new _e.ConfigLoad(), this.selectors = new _e.ConfigSelectors(), this.render = new _e.ConfigRender(), this.templates = new _e.ConfigTemplates(), this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.Config), _e.Config.prototype = Object.create(_e.Base.prototype), _e.Config.prototype.constructor = _e.Config, _e.MixerDom = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.document = null, this.body = null, this.container = null, this.parent = null, this.targets = [], this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.MixerDom), _e.MixerDom.prototype = Object.create(_e.Base.prototype), _e.MixerDom.prototype.constructor = _e.MixerDom, _e.UiClassNames = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.base = "", this.active = "", this.disabled = "", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.UiClassNames), _e.UiClassNames.prototype = Object.create(_e.Base.prototype), _e.UiClassNames.prototype.constructor = _e.UiClassNames, _e.CommandDataset = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.dataset = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandDataset), _e.CommandDataset.prototype = Object.create(_e.Base.prototype), _e.CommandDataset.prototype.constructor = _e.CommandDataset, _e.CommandMultimix = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.filter = null, this.sort = null, this.insert = null, this.remove = null, this.changeLayout = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandMultimix), _e.CommandMultimix.prototype = Object.create(_e.Base.prototype), _e.CommandMultimix.prototype.constructor = _e.CommandMultimix, _e.CommandFilter = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.selector = "", this.collection = null, this.action = "show", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandFilter), _e.CommandFilter.prototype = Object.create(_e.Base.prototype), _e.CommandFilter.prototype.constructor = _e.CommandFilter, _e.CommandSort = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.sortString = "", this.attribute = "", this.order = "asc", this.collection = null, this.next = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandSort), _e.CommandSort.prototype = Object.create(_e.Base.prototype), _e.CommandSort.prototype.constructor = _e.CommandSort, _e.CommandInsert = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.index = 0, this.collection = [], this.position = "before", this.sibling = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandInsert), _e.CommandInsert.prototype = Object.create(_e.Base.prototype), _e.CommandInsert.prototype.constructor = _e.CommandInsert, _e.CommandRemove = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.targets = [], this.collection = [], this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandRemove), _e.CommandRemove.prototype = Object.create(_e.Base.prototype), _e.CommandRemove.prototype.constructor = _e.CommandRemove, _e.CommandChangeLayout = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.containerClassName = "", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.CommandChangeLayout), _e.CommandChangeLayout.prototype = Object.create(_e.Base.prototype), _e.CommandChangeLayout.prototype.constructor = _e.CommandChangeLayout, _e.ControlDefinition = function (t, a, i, o) {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.type = t, this.selector = a, this.live = i || !1, this.parent = o || "", this.callActions("afterConstruct"), n.freeze(this), n.seal(this);
  }, _e.BaseStatic.call(_e.ControlDefinition), _e.ControlDefinition.prototype = Object.create(_e.Base.prototype), _e.ControlDefinition.prototype.constructor = _e.ControlDefinition, _e.controlDefinitions = [], _e.controlDefinitions.push(new _e.ControlDefinition("multimix", "[data-filter][data-sort]")), _e.controlDefinitions.push(new _e.ControlDefinition("filter", "[data-filter]")), _e.controlDefinitions.push(new _e.ControlDefinition("sort", "[data-sort]")), _e.controlDefinitions.push(new _e.ControlDefinition("toggle", "[data-toggle]")), _e.Control = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.selector = "", this.bound = [], this.pending = -1, this.type = "", this.status = "inactive", this.filter = "", this.sort = "", this.canDisable = !1, this.handler = null, this.classNames = new _e.UiClassNames(), this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.Control), _e.Control.prototype = Object.create(_e.Base.prototype), n.extend(_e.Control.prototype, {
    constructor: _e.Control,
    init: function init(t, n, a) {
      var i = this;
      if (this.callActions("beforeInit", arguments), i.el = t, i.type = n, i.selector = a, i.selector) i.status = "live";else switch (i.canDisable = "boolean" == typeof i.el.disable, i.type) {
        case "filter":
          i.filter = i.el.getAttribute("data-filter");
          break;

        case "toggle":
          i.filter = i.el.getAttribute("data-toggle");
          break;

        case "sort":
          i.sort = i.el.getAttribute("data-sort");
          break;

        case "multimix":
          i.filter = i.el.getAttribute("data-filter"), i.sort = i.el.getAttribute("data-sort");
      }
      i.bindClick(), _e.controls.push(i), this.callActions("afterInit", arguments);
    },
    isBound: function isBound(t) {
      var e = this,
          n = !1;
      return this.callActions("beforeIsBound", arguments), n = e.bound.indexOf(t) > -1, e.callFilters("afterIsBound", n, arguments);
    },
    addBinding: function addBinding(t) {
      var e = this;
      this.callActions("beforeAddBinding", arguments), e.isBound() || e.bound.push(t), this.callActions("afterAddBinding", arguments);
    },
    removeBinding: function removeBinding(t) {
      var n = this,
          a = -1;
      this.callActions("beforeRemoveBinding", arguments), (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1), n.bound.length < 1 && (n.unbindClick(), a = _e.controls.indexOf(n), _e.controls.splice(a, 1), "active" === n.status && n.renderStatus(n.el, "inactive")), this.callActions("afterRemoveBinding", arguments);
    },
    bindClick: function bindClick() {
      var t = this;
      this.callActions("beforeBindClick", arguments), t.handler = function (e) {
        t.handleClick(e);
      }, n.on(t.el, "click", t.handler), this.callActions("afterBindClick", arguments);
    },
    unbindClick: function unbindClick() {
      var t = this;
      this.callActions("beforeUnbindClick", arguments), n.off(t.el, "click", t.handler), t.handler = null, this.callActions("afterUnbindClick", arguments);
    },
    handleClick: function handleClick(t) {
      var a = this,
          i = null,
          o = null,
          r = !1,
          s = void 0,
          l = {},
          c = null,
          u = [],
          f = -1;
      if (this.callActions("beforeHandleClick", arguments), this.pending = 0, o = a.bound[0], i = a.selector ? n.closestParent(t.target, o.config.selectors.control + a.selector, !0, o.dom.document) : a.el, !i) return void a.callActions("afterHandleClick", arguments);

      switch (a.type) {
        case "filter":
          l.filter = a.filter || i.getAttribute("data-filter");
          break;

        case "sort":
          l.sort = a.sort || i.getAttribute("data-sort");
          break;

        case "multimix":
          l.filter = a.filter || i.getAttribute("data-filter"), l.sort = a.sort || i.getAttribute("data-sort");
          break;

        case "toggle":
          l.filter = a.filter || i.getAttribute("data-toggle"), r = "live" === a.status ? n.hasClass(i, a.classNames.active) : "active" === a.status;
      }

      for (f = 0; f < a.bound.length; f++) {
        c = new _e.CommandMultimix(), n.extend(c, l), u.push(c);
      }

      for (u = a.callFilters("commandsHandleClick", u, arguments), a.pending = a.bound.length, f = 0; o = a.bound[f]; f++) {
        l = u[f], l && (o.lastClicked || (o.lastClicked = i), _e.events.fire("mixClick", o.dom.container, {
          state: o.state,
          instance: o,
          originalEvent: t,
          control: o.lastClicked
        }, o.dom.document), "function" == typeof o.config.callbacks.onMixClick && (s = o.config.callbacks.onMixClick.call(o.lastClicked, o.state, t, o), s === !1) || ("toggle" === a.type ? r ? o.toggleOff(l.filter) : o.toggleOn(l.filter) : o.multimix(l)));
      }

      this.callActions("afterHandleClick", arguments);
    },
    update: function update(t, n) {
      var a = this,
          i = new _e.CommandMultimix();
      a.callActions("beforeUpdate", arguments), a.pending--, a.pending = Math.max(0, a.pending), a.pending > 0 || ("live" === a.status ? a.updateLive(t, n) : (i.sort = a.sort, i.filter = a.filter, a.callFilters("actionsUpdate", i, arguments), a.parseStatusChange(a.el, t, i, n)), a.callActions("afterUpdate", arguments));
    },
    updateLive: function updateLive(t, n) {
      var a = this,
          i = null,
          o = null,
          r = null,
          s = -1;

      if (a.callActions("beforeUpdateLive", arguments), a.el) {
        for (i = a.el.querySelectorAll(a.selector), s = 0; r = i[s]; s++) {
          switch (o = new _e.CommandMultimix(), a.type) {
            case "filter":
              o.filter = r.getAttribute("data-filter");
              break;

            case "sort":
              o.sort = r.getAttribute("data-sort");
              break;

            case "multimix":
              o.filter = r.getAttribute("data-filter"), o.sort = r.getAttribute("data-sort");
              break;

            case "toggle":
              o.filter = r.getAttribute("data-toggle");
          }

          o = a.callFilters("actionsUpdateLive", o, arguments), a.parseStatusChange(r, t, o, n);
        }

        a.callActions("afterUpdateLive", arguments);
      }
    },
    parseStatusChange: function parseStatusChange(t, e, n, a) {
      var i = this,
          o = "",
          r = "",
          s = -1;

      switch (i.callActions("beforeParseStatusChange", arguments), i.type) {
        case "filter":
          e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
          break;

        case "multimix":
          e.sort === n.sort && e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
          break;

        case "sort":
          e.sort.match(/:asc/g) && (o = e.sort.replace(/:asc/g, "")), e.sort === n.sort || o === n.sort ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
          break;

        case "toggle":
          for (a.length < 1 && i.renderStatus(t, "inactive"), e.filter === n.filter && i.renderStatus(t, "active"), s = 0; s < a.length; s++) {
            if (r = a[s], r === n.filter) {
              i.renderStatus(t, "active");
              break;
            }

            i.renderStatus(t, "inactive");
          }

      }

      i.callActions("afterParseStatusChange", arguments);
    },
    renderStatus: function renderStatus(t, e) {
      var a = this;

      switch (a.callActions("beforeRenderStatus", arguments), e) {
        case "active":
          n.addClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
          break;

        case "inactive":
          n.removeClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
          break;

        case "disabled":
          a.canDisable && (a.el.disabled = !0), n.addClass(t, a.classNames.disabled), n.removeClass(t, a.classNames.active);
      }

      "live" !== a.status && (a.status = e), a.callActions("afterRenderStatus", arguments);
    }
  }), _e.controls = [], _e.StyleData = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.x = 0, this.y = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.marginRight = 0, this.marginBottom = 0, this.opacity = 0, this.scale = new _e.TransformData(), this.translateX = new _e.TransformData(), this.translateY = new _e.TransformData(), this.translateZ = new _e.TransformData(), this.rotateX = new _e.TransformData(), this.rotateY = new _e.TransformData(), this.rotateZ = new _e.TransformData(), this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.StyleData), _e.StyleData.prototype = Object.create(_e.Base.prototype), _e.StyleData.prototype.constructor = _e.StyleData, _e.TransformData = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.value = 0, this.unit = "", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.TransformData), _e.TransformData.prototype = Object.create(_e.Base.prototype), _e.TransformData.prototype.constructor = _e.TransformData, _e.TransformDefaults = function () {
    _e.StyleData.apply(this), this.callActions("beforeConstruct"), this.scale.value = .01, this.scale.unit = "", this.translateX.value = 20, this.translateX.unit = "px", this.translateY.value = 20, this.translateY.unit = "px", this.translateZ.value = 20, this.translateZ.unit = "px", this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateY.value = 90, this.rotateY.unit = "deg", this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateZ.value = 180, this.rotateZ.unit = "deg", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.TransformDefaults), _e.TransformDefaults.prototype = Object.create(_e.StyleData.prototype), _e.TransformDefaults.prototype.constructor = _e.TransformDefaults, _e.transformDefaults = new _e.TransformDefaults(), _e.EventDetail = function () {
    this.state = null, this.futureState = null, this.instance = null, this.originalEvent = null;
  }, _e.Events = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.mixStart = null, this.mixBusy = null, this.mixEnd = null, this.mixFail = null, this.mixClick = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.Events), _e.Events.prototype = Object.create(_e.Base.prototype), _e.Events.prototype.constructor = _e.Events, _e.Events.prototype.fire = function (t, a, i, o) {
    var r = this,
        s = null,
        l = new _e.EventDetail();
    if (r.callActions("beforeFire", arguments), "undefined" == typeof r[t]) throw new Error('Event type "' + t + '" not found.');
    l.state = new _e.State(), n.extend(l.state, i.state), i.futureState && (l.futureState = new _e.State(), n.extend(l.futureState, i.futureState)), l.instance = i.instance, i.originalEvent && (l.originalEvent = i.originalEvent), s = n.getCustomEvent(t, l, o), r.callFilters("eventFire", s, arguments), a.dispatchEvent(s);
  }, _e.events = new _e.Events(), _e.QueueItem = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.args = [], this.instruction = null, this.triggerElement = null, this.deferred = null, this.isToggling = !1, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.QueueItem), _e.QueueItem.prototype = Object.create(_e.Base.prototype), _e.QueueItem.prototype.constructor = _e.QueueItem, _e.Mixer = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.config = new _e.Config(), this.id = "", this.isBusy = !1, this.isToggling = !1, this.incPadding = !0, this.controls = [], this.targets = [], this.origOrder = [], this.cache = {}, this.toggleArray = [], this.targetsMoved = 0, this.targetsImmovable = 0, this.targetsBound = 0, this.targetsDone = 0, this.staggerDuration = 0, this.effectsIn = null, this.effectsOut = null, this.transformIn = [], this.transformOut = [], this.queue = [], this.state = null, this.lastOperation = null, this.lastClicked = null, this.userCallback = null, this.userDeferred = null, this.dom = new _e.MixerDom(), this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.Mixer), _e.Mixer.prototype = Object.create(_e.Base.prototype), n.extend(_e.Mixer.prototype, {
    constructor: _e.Mixer,
    attach: function attach(a, i, o, r) {
      var s = this,
          l = null,
          c = -1;

      for (s.callActions("beforeAttach", arguments), s.id = o, r && n.extend(s.config, r, !0, !0), s.sanitizeConfig(), s.cacheDom(a, i), s.config.layout.containerClassName && n.addClass(s.dom.container, s.config.layout.containerClassName), _e.features.has.transitions || (s.config.animation.enable = !1), "undefined" == typeof t.console && (s.config.debug.showWarnings = !1), s.config.data.uidKey && (s.config.controls.enable = !1), s.indexTargets(), s.state = s.getInitialState(), c = 0; l = s.lastOperation.toHide[c]; c++) {
        l.hide();
      }

      s.config.controls.enable && (s.initControls(), s.buildToggleArray(null, s.state), s.updateControls({
        filter: s.state.activeFilter,
        sort: s.state.activeSort
      })), s.parseEffects(), s.callActions("afterAttach", arguments);
    },
    sanitizeConfig: function sanitizeConfig() {
      var t = this;
      t.callActions("beforeSanitizeConfig", arguments), t.config.controls.scope = t.config.controls.scope.toLowerCase().trim(), t.config.controls.toggleLogic = t.config.controls.toggleLogic.toLowerCase().trim(), t.config.controls.toggleDefault = t.config.controls.toggleDefault.toLowerCase().trim(), t.config.animation.effects = t.config.animation.effects.trim(), t.callActions("afterSanitizeConfig", arguments);
    },
    getInitialState: function getInitialState() {
      var t = this,
          n = new _e.State(),
          a = new _e.Operation();

      if (t.callActions("beforeGetInitialState", arguments), n.activeContainerClassName = t.config.layout.containerClassName, t.config.load.dataset) {
        if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey) throw new TypeError(_e.messages.errorConfigDataUidKeyNotSet());
        a.startDataset = a.newDataset = n.activeDataset = t.config.load.dataset.slice(), a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName, a.show = t.targets.slice(), n = t.callFilters("stateGetInitialState", n, arguments);
      } else n.activeFilter = t.parseFilterArgs([t.config.load.filter]).command, n.activeSort = t.parseSortArgs([t.config.load.sort]).command, n.totalTargets = t.targets.length, n = t.callFilters("stateGetInitialState", n, arguments), n.activeSort.collection || n.activeSort.attribute || "random" === n.activeSort.order || "desc" === n.activeSort.order ? (a.newSort = n.activeSort, t.sortOperation(a), t.printSort(!1, a), t.targets = a.newOrder) : a.startOrder = a.newOrder = t.targets, a.startFilter = a.newFilter = n.activeFilter, a.startSort = a.newSort = n.activeSort, a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName, "all" === a.newFilter.selector ? a.newFilter.selector = t.config.selectors.target : "none" === a.newFilter.selector && (a.newFilter.selector = "");

      return a = t.callFilters("operationGetInitialState", a, [n]), t.lastOperation = a, a.newFilter && t.filterOperation(a), n = t.buildState(a);
    },
    cacheDom: function cacheDom(t, e) {
      var n = this;
      n.callActions("beforeCacheDom", arguments), n.dom.document = e, n.dom.body = n.dom.document.querySelector("body"), n.dom.container = t, n.dom.parent = t, n.callActions("afterCacheDom", arguments);
    },
    indexTargets: function indexTargets() {
      var t = this,
          a = null,
          i = null,
          o = null,
          r = -1;
      if (t.callActions("beforeIndexTargets", arguments), t.dom.targets = t.config.layout.allowNestedTargets ? t.dom.container.querySelectorAll(t.config.selectors.target) : n.children(t.dom.container, t.config.selectors.target, t.dom.document), t.dom.targets = n.arrayFromList(t.dom.targets), t.targets = [], (o = t.config.load.dataset) && o.length !== t.dom.targets.length) throw new Error(_e.messages.errorDatasetPrerenderedMismatch());

      if (t.dom.targets.length) {
        for (r = 0; i = t.dom.targets[r]; r++) {
          a = new _e.Target(), a.init(i, t, o ? o[r] : void 0), a.isInDom = !0, t.targets.push(a);
        }

        t.dom.parent = t.dom.targets[0].parentElement === t.dom.container ? t.dom.container : t.dom.targets[0].parentElement;
      }

      t.origOrder = t.targets, t.callActions("afterIndexTargets", arguments);
    },
    initControls: function initControls() {
      var t = this,
          n = "",
          a = null,
          i = null,
          o = null,
          r = null,
          s = null,
          l = -1,
          c = -1;

      switch (t.callActions("beforeInitControls", arguments), t.config.controls.scope) {
        case "local":
          o = t.dom.container;
          break;

        case "global":
          o = t.dom.document;
          break;

        default:
          throw new Error(_e.messages.errorConfigInvalidControlsScope());
      }

      for (l = 0; n = _e.controlDefinitions[l]; l++) {
        if (t.config.controls.live || n.live) {
          if (n.parent) {
            if (r = t.dom[n.parent], !r || r.length < 0) continue;
            "number" != typeof r.length && (r = [r]);
          } else r = [o];

          for (c = 0; i = r[c]; c++) {
            s = t.getControl(i, n.type, n.selector), t.controls.push(s);
          }
        } else for (a = o.querySelectorAll(t.config.selectors.control + n.selector), c = 0; i = a[c]; c++) {
          s = t.getControl(i, n.type, ""), s && t.controls.push(s);
        }
      }

      t.callActions("afterInitControls", arguments);
    },
    getControl: function getControl(t, a, i) {
      var o = this,
          r = null,
          s = -1;
      if (o.callActions("beforeGetControl", arguments), !i) for (s = 0; r = _e.controls[s]; s++) {
        if (r.el === t && r.isBound(o)) return o.callFilters("controlGetControl", null, arguments);
        if (r.el === t && r.type === a && r.selector === i) return r.addBinding(o), o.callFilters("controlGetControl", r, arguments);
      }
      return r = new _e.Control(), r.init(t, a, i), r.classNames.base = n.getClassname(o.config.classNames, a), r.classNames.active = n.getClassname(o.config.classNames, a, o.config.classNames.modifierActive), r.classNames.disabled = n.getClassname(o.config.classNames, a, o.config.classNames.modifierDisabled), r.addBinding(o), o.callFilters("controlGetControl", r, arguments);
    },
    getToggleSelector: function getToggleSelector() {
      var t = this,
          e = "or" === t.config.controls.toggleLogic ? ", " : "",
          a = "";
      return t.callActions("beforeGetToggleSelector", arguments), t.toggleArray = n.clean(t.toggleArray), a = t.toggleArray.join(e), "" === a && (a = t.config.controls.toggleDefault), t.callFilters("selectorGetToggleSelector", a, arguments);
    },
    buildToggleArray: function buildToggleArray(t, e) {
      var a = this,
          i = "";
      if (a.callActions("beforeBuildToggleArray", arguments), t && t.filter) i = t.filter.selector.replace(/\s/g, "");else {
        if (!e) return;
        i = e.activeFilter.selector.replace(/\s/g, "");
      }
      i !== a.config.selectors.target && "all" !== i || (i = ""), "or" === a.config.controls.toggleLogic ? a.toggleArray = i.split(",") : a.toggleArray = a.splitCompoundSelector(i), a.toggleArray = n.clean(a.toggleArray), a.callActions("afterBuildToggleArray", arguments);
    },
    splitCompoundSelector: function splitCompoundSelector(t) {
      var e = t.split(/([\.\[])/g),
          n = [],
          a = "",
          i = -1;

      for ("" === e[0] && e.shift(), i = 0; i < e.length; i++) {
        i % 2 === 0 && (a = ""), a += e[i], i % 2 !== 0 && n.push(a);
      }

      return n;
    },
    updateControls: function updateControls(t) {
      var a = this,
          i = null,
          o = new _e.CommandMultimix(),
          r = -1;

      for (a.callActions("beforeUpdateControls", arguments), t.filter ? o.filter = t.filter.selector : o.filter = a.state.activeFilter.selector, t.sort ? o.sort = a.buildSortString(t.sort) : o.sort = a.buildSortString(a.state.activeSort), o.filter === a.config.selectors.target && (o.filter = "all"), "" === o.filter && (o.filter = "none"), n.freeze(o), r = 0; i = a.controls[r]; r++) {
        i.update(o, a.toggleArray);
      }

      a.callActions("afterUpdateControls", arguments);
    },
    buildSortString: function buildSortString(t) {
      var e = this,
          n = "";
      return n += t.sortString, t.next && (n += " " + e.buildSortString(t.next)), n;
    },
    insertTargets: function insertTargets(t, a) {
      var i = this,
          o = null,
          r = -1,
          s = null,
          l = null,
          c = null,
          u = -1;

      if (i.callActions("beforeInsertTargets", arguments), "undefined" == typeof t.index && (t.index = 0), o = i.getNextSibling(t.index, t.sibling, t.position), s = i.dom.document.createDocumentFragment(), r = o ? n.index(o, i.config.selectors.target) : i.targets.length, t.collection) {
        for (u = 0; c = t.collection[u]; u++) {
          if (i.dom.targets.indexOf(c) > -1) throw new Error(_e.messages.errorInsertPreexistingElement());
          c.style.display = "none", s.appendChild(c), s.appendChild(i.dom.document.createTextNode(" ")), n.isElement(c, i.dom.document) && c.matches(i.config.selectors.target) && (l = new _e.Target(), l.init(c, i), l.isInDom = !0, i.targets.splice(r, 0, l), r++);
        }

        i.dom.parent.insertBefore(s, o);
      }

      a.startOrder = i.origOrder = i.targets, i.callActions("afterInsertTargets", arguments);
    },
    getNextSibling: function getNextSibling(t, e, n) {
      var a = this,
          i = null;
      return t = Math.max(t, 0), e && "before" === n ? i = e : e && "after" === n ? i = e.nextElementSibling || null : a.targets.length > 0 && "undefined" != typeof t ? i = t < a.targets.length || !a.targets.length ? a.targets[t].dom.el : a.targets[a.targets.length - 1].dom.el.nextElementSibling : 0 === a.targets.length && a.dom.parent.children.length > 0 && (a.config.layout.siblingAfter ? i = a.config.layout.siblingAfter : a.config.layout.siblingBefore ? i = a.config.layout.siblingBefore.nextElementSibling : a.dom.parent.children[0]), a.callFilters("elementGetNextSibling", i, arguments);
    },
    filterOperation: function filterOperation(t) {
      var e = this,
          n = !1,
          a = -1,
          i = "",
          o = null,
          r = -1;

      for (e.callActions("beforeFilterOperation", arguments), i = t.newFilter.action, r = 0; o = t.newOrder[r]; r++) {
        n = t.newFilter.collection ? t.newFilter.collection.indexOf(o.dom.el) > -1 : "" !== t.newFilter.selector && o.dom.el.matches(t.newFilter.selector), e.evaluateHideShow(n, o, i, t);
      }

      if (t.toRemove.length) for (r = 0; o = t.show[r]; r++) {
        t.toRemove.indexOf(o) > -1 && (t.show.splice(r, 1), (a = t.toShow.indexOf(o)) > -1 && t.toShow.splice(a, 1), t.toHide.push(o), t.hide.push(o), r--);
      }
      t.matching = t.show.slice(), 0 === t.show.length && "" !== t.newFilter.selector && 0 !== e.targets.length && (t.hasFailed = !0), e.callActions("afterFilterOperation", arguments);
    },
    evaluateHideShow: function evaluateHideShow(t, e, n, a) {
      var i = this,
          o = !1,
          r = Array.prototype.slice.call(arguments, 1);
      o = i.callFilters("testResultEvaluateHideShow", t, r), i.callActions("beforeEvaluateHideShow", arguments), o === !0 && "show" === n || o === !1 && "hide" === n ? (a.show.push(e), !e.isShown && a.toShow.push(e)) : (a.hide.push(e), e.isShown && a.toHide.push(e)), i.callActions("afterEvaluateHideShow", arguments);
    },
    sortOperation: function sortOperation(t) {
      var e = this;
      e.callActions("beforeSortOperation", arguments), t.startOrder = e.targets, t.newSort.collection ? t.newOrder = t.newSort.collection : "random" === t.newSort.order ? t.newOrder = n.arrayShuffle(t.startOrder) : "" === t.newSort.attribute ? (t.newOrder = e.origOrder.slice(), "desc" === t.newSort.order && t.newOrder.reverse()) : (t.newOrder = t.startOrder.slice(), t.newOrder.sort(function (n, a) {
        return e.compare(n, a, t.newSort);
      })), n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1), e.callActions("afterSortOperation", arguments);
    },
    compare: function compare(t, e, n) {
      var a = this,
          i = n.order,
          o = a.getAttributeValue(t, n.attribute),
          r = a.getAttributeValue(e, n.attribute);
      return isNaN(1 * o) || isNaN(1 * r) ? (o = o.toLowerCase(), r = r.toLowerCase()) : (o = 1 * o, r = 1 * r), o < r ? "asc" === i ? -1 : 1 : o > r ? "asc" === i ? 1 : -1 : o === r && n.next ? a.compare(t, e, n.next) : 0;
    },
    getAttributeValue: function getAttributeValue(t, n) {
      var a = this,
          i = "";
      return i = t.dom.el.getAttribute("data-" + n), null === i && a.config.debug.showWarnings && console.warn(_e.messages.warningInconsistentSortingAttributes({
        attribute: "data-" + n
      })), a.callFilters("valueGetAttributeValue", i || 0, arguments);
    },
    printSort: function printSort(e, a) {
      var i = this,
          o = e ? a.newOrder : a.startOrder,
          r = e ? a.startOrder : a.newOrder,
          s = o.length ? o[o.length - 1].dom.el.nextElementSibling : null,
          l = t.document.createDocumentFragment(),
          c = null,
          u = null,
          f = null,
          h = -1;

      for (i.callActions("beforePrintSort", arguments), h = 0; u = o[h]; h++) {
        f = u.dom.el, "absolute" !== f.style.position && (n.removeWhitespace(f.previousSibling), f.parentElement.removeChild(f));
      }

      for (c = s ? s.previousSibling : i.dom.parent.lastChild, c && "#text" === c.nodeName && n.removeWhitespace(c), h = 0; u = r[h]; h++) {
        f = u.dom.el, n.isElement(l.lastChild) && l.appendChild(t.document.createTextNode(" ")), l.appendChild(f);
      }

      i.dom.parent.firstChild && i.dom.parent.firstChild !== s && l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]), s ? (l.appendChild(t.document.createTextNode(" ")), i.dom.parent.insertBefore(l, s)) : i.dom.parent.appendChild(l), i.callActions("afterPrintSort", arguments);
    },
    parseSortString: function parseSortString(t, a) {
      var i = this,
          o = t.split(" "),
          r = a,
          s = [],
          l = -1;

      for (l = 0; l < o.length; l++) {
        switch (s = o[l].split(":"), r.sortString = o[l], r.attribute = n.dashCase(s[0]), r.order = s[1] || "asc", r.attribute) {
          case "default":
            r.attribute = "";
            break;

          case "random":
            r.attribute = "", r.order = "random";
        }

        if (!r.attribute || "random" === r.order) break;
        l < o.length - 1 && (r.next = new _e.CommandSort(), n.freeze(r), r = r.next);
      }

      return i.callFilters("commandsParseSort", a, arguments);
    },
    parseEffects: function parseEffects() {
      var t = this,
          n = "",
          a = t.config.animation.effectsIn || t.config.animation.effects,
          i = t.config.animation.effectsOut || t.config.animation.effects;
      t.callActions("beforeParseEffects", arguments), t.effectsIn = new _e.StyleData(), t.effectsOut = new _e.StyleData(), t.transformIn = [], t.transformOut = [], t.effectsIn.opacity = t.effectsOut.opacity = 1, t.parseEffect("fade", a, t.effectsIn, t.transformIn), t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);

      for (n in _e.transformDefaults) {
        _e.transformDefaults[n] instanceof _e.TransformData && (t.parseEffect(n, a, t.effectsIn, t.transformIn), t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
      }

      t.parseEffect("stagger", a, t.effectsIn, t.transformIn), t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0), t.callActions("afterParseEffects", arguments);
    },
    parseEffect: function parseEffect(t, n, a, i, o) {
      var r = this,
          s = /\(([^)]+)\)/,
          l = -1,
          c = "",
          u = [],
          f = "",
          h = ["%", "px", "em", "rem", "vh", "vw", "deg"],
          d = "",
          m = -1;
      if (r.callActions("beforeParseEffect", arguments), "string" != typeof n) throw new TypeError(_e.messages.errorConfigInvalidAnimationEffects());
      if (n.indexOf(t) < 0) return void ("stagger" === t && (r.staggerDuration = 0));

      switch (l = n.indexOf(t + "("), l > -1 && (c = n.substring(l), u = s.exec(c), f = u[1]), t) {
        case "fade":
          a.opacity = f ? parseFloat(f) : 0;
          break;

        case "stagger":
          r.staggerDuration = f ? parseFloat(f) : 100;
          break;

        default:
          if (o && r.config.animation.reverseOut && "scale" !== t ? a[t].value = (f ? parseFloat(f) : _e.transformDefaults[t].value) * -1 : a[t].value = f ? parseFloat(f) : _e.transformDefaults[t].value, f) {
            for (m = 0; d = h[m]; m++) {
              if (f.indexOf(d) > -1) {
                a[t].unit = d;
                break;
              }
            }
          } else a[t].unit = _e.transformDefaults[t].unit;

          i.push(t + "(" + a[t].value + a[t].unit + ")");
      }

      r.callActions("afterParseEffect", arguments);
    },
    buildState: function buildState(t) {
      var n = this,
          a = new _e.State(),
          i = null,
          o = -1;

      for (n.callActions("beforeBuildState", arguments), o = 0; i = n.targets[o]; o++) {
        (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.targets.push(i.dom.el);
      }

      for (o = 0; i = t.matching[o]; o++) {
        a.matching.push(i.dom.el);
      }

      for (o = 0; i = t.show[o]; o++) {
        a.show.push(i.dom.el);
      }

      for (o = 0; i = t.hide[o]; o++) {
        (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.hide.push(i.dom.el);
      }

      return a.id = n.id, a.container = n.dom.container, a.activeFilter = t.newFilter, a.activeSort = t.newSort, a.activeDataset = t.newDataset, a.activeContainerClassName = t.newContainerClassName, a.hasFailed = t.hasFailed, a.totalTargets = n.targets.length, a.totalShow = t.show.length, a.totalHide = t.hide.length, a.totalMatching = t.matching.length, a.triggerElement = t.triggerElement, n.callFilters("stateBuildState", a, arguments);
    },
    goMix: function goMix(a, i) {
      var o = this,
          r = null;
      return o.callActions("beforeGoMix", arguments), o.config.animation.duration && o.config.animation.effects && n.isVisible(o.dom.container) || (a = !1), i.toShow.length || i.toHide.length || i.willSort || i.willChangeLayout || (a = !1), i.startState.show.length || i.show.length || (a = !1), _e.events.fire("mixStart", o.dom.container, {
        state: i.startState,
        futureState: i.newState,
        instance: o
      }, o.dom.document), "function" == typeof o.config.callbacks.onMixStart && o.config.callbacks.onMixStart.call(o.dom.container, i.startState, i.newState, o), n.removeClass(o.dom.container, n.getClassname(o.config.classNames, "container", o.config.classNames.modifierFailed)), r = o.userDeferred ? o.userDeferred : o.userDeferred = n.defer(_e.libraries), o.isBusy = !0, a && _e.features.has.transitions ? (t.pageYOffset !== i.docState.scrollTop && t.scrollTo(i.docState.scrollLeft, i.docState.scrollTop), o.config.animation.applyPerspective && (o.dom.parent.style[_e.features.perspectiveProp] = o.config.animation.perspectiveDistance, o.dom.parent.style[_e.features.perspectiveOriginProp] = o.config.animation.perspectiveOrigin), o.config.animation.animateResizeContainer && i.startHeight !== i.newHeight && i.viewportDeltaY !== i.startHeight - i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"), o.config.animation.animateResizeContainer && i.startWidth !== i.newWidth && i.viewportDeltaX !== i.startWidth - i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"), i.startHeight === i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"), i.startWidth === i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"), i.startHeight === i.newHeight && i.startWidth === i.newWidth && (o.dom.parent.style.overflow = "hidden"), requestAnimationFrame(function () {
        o.moveTargets(i);
      }), o.callFilters("promiseGoMix", r.promise, arguments)) : (o.config.debug.fauxAsync ? setTimeout(function () {
        o.cleanUp(i);
      }, o.config.animation.duration) : o.cleanUp(i), o.callFilters("promiseGoMix", r.promise, arguments));
    },
    getStartMixData: function getStartMixData(n) {
      var a = this,
          i = t.getComputedStyle(a.dom.parent),
          o = a.dom.parent.getBoundingClientRect(),
          r = null,
          s = {},
          l = -1,
          c = i[_e.features.boxSizingProp];

      for (a.incPadding = "border-box" === c, a.callActions("beforeGetStartMixData", arguments), l = 0; r = n.show[l]; l++) {
        s = r.getPosData(), n.showPosData[l] = {
          startPosData: s
        };
      }

      for (l = 0; r = n.toHide[l]; l++) {
        s = r.getPosData(), n.toHidePosData[l] = {
          startPosData: s
        };
      }

      n.startX = o.left, n.startY = o.top, n.startHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom), n.startWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight), a.callActions("afterGetStartMixData", arguments);
    },
    setInter: function setInter(t) {
      var e = this,
          a = null,
          i = -1;

      for (e.callActions("beforeSetInter", arguments), e.config.animation.clampHeight && (e.dom.parent.style.height = t.startHeight + "px", e.dom.parent.style.overflow = "hidden"), e.config.animation.clampWidth && (e.dom.parent.style.width = t.startWidth + "px", e.dom.parent.style.overflow = "hidden"), i = 0; a = t.toShow[i]; i++) {
        a.show();
      }

      t.willChangeLayout && (n.removeClass(e.dom.container, t.startContainerClassName), n.addClass(e.dom.container, t.newContainerClassName)), e.callActions("afterSetInter", arguments);
    },
    getInterMixData: function getInterMixData(t) {
      var e = this,
          n = null,
          a = -1;

      for (e.callActions("beforeGetInterMixData", arguments), a = 0; n = t.show[a]; a++) {
        t.showPosData[a].interPosData = n.getPosData();
      }

      for (a = 0; n = t.toHide[a]; a++) {
        t.toHidePosData[a].interPosData = n.getPosData();
      }

      e.callActions("afterGetInterMixData", arguments);
    },
    setFinal: function setFinal(t) {
      var e = this,
          n = null,
          a = -1;

      for (e.callActions("beforeSetFinal", arguments), t.willSort && e.printSort(!1, t), a = 0; n = t.toHide[a]; a++) {
        n.hide();
      }

      e.callActions("afterSetFinal", arguments);
    },
    getFinalMixData: function getFinalMixData(e) {
      var a = this,
          i = null,
          o = null,
          r = null,
          s = -1;

      for (a.callActions("beforeGetFinalMixData", arguments), s = 0; r = e.show[s]; s++) {
        e.showPosData[s].finalPosData = r.getPosData();
      }

      for (s = 0; r = e.toHide[s]; s++) {
        e.toHidePosData[s].finalPosData = r.getPosData();
      }

      for ((a.config.animation.clampHeight || a.config.animation.clampWidth) && (a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = ""), a.incPadding || (i = t.getComputedStyle(a.dom.parent)), o = a.dom.parent.getBoundingClientRect(), e.newX = o.left, e.newY = o.top, e.newHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom), e.newWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight), e.viewportDeltaX = e.docState.viewportWidth - this.dom.document.documentElement.clientWidth, e.viewportDeltaY = e.docState.viewportHeight - this.dom.document.documentElement.clientHeight, e.willSort && a.printSort(!0, e), s = 0; r = e.toShow[s]; s++) {
        r.hide();
      }

      for (s = 0; r = e.toHide[s]; s++) {
        r.show();
      }

      e.willChangeLayout && (n.removeClass(a.dom.container, e.newContainerClassName), n.addClass(a.dom.container, a.config.layout.containerClassName)), a.callActions("afterGetFinalMixData", arguments);
    },
    getTweenData: function getTweenData(t) {
      var n = this,
          a = null,
          i = null,
          o = Object.getOwnPropertyNames(n.effectsIn),
          r = "",
          s = null,
          l = -1,
          c = -1,
          u = -1,
          f = -1;

      for (n.callActions("beforeGetTweenData", arguments), u = 0; a = t.show[u]; u++) {
        for (i = t.showPosData[u], i.posIn = new _e.StyleData(), i.posOut = new _e.StyleData(), i.tweenData = new _e.StyleData(), a.isShown ? (i.posIn.x = i.startPosData.x - i.interPosData.x, i.posIn.y = i.startPosData.y - i.interPosData.y) : i.posIn.x = i.posIn.y = 0, i.posOut.x = i.finalPosData.x - i.interPosData.x, i.posOut.y = i.finalPosData.y - i.interPosData.y, i.posIn.opacity = a.isShown ? 1 : n.effectsIn.opacity, i.posOut.opacity = 1, i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity, a.isShown || n.config.animation.nudge || (i.posIn.x = i.posOut.x, i.posIn.y = i.posOut.y), i.tweenData.x = i.posOut.x - i.posIn.x, i.tweenData.y = i.posOut.y - i.posIn.y, n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width, i.posIn.height = i.startPosData.height, l = (i.startPosData.width || i.finalPosData.width) - i.interPosData.width, i.posIn.marginRight = i.startPosData.marginRight - l, c = (i.startPosData.height || i.finalPosData.height) - i.interPosData.height, i.posIn.marginBottom = i.startPosData.marginBottom - c, i.posOut.width = i.finalPosData.width, i.posOut.height = i.finalPosData.height, l = (i.finalPosData.width || i.startPosData.width) - i.interPosData.width, i.posOut.marginRight = i.finalPosData.marginRight - l, c = (i.finalPosData.height || i.startPosData.height) - i.interPosData.height, i.posOut.marginBottom = i.finalPosData.marginBottom - c, i.tweenData.width = i.posOut.width - i.posIn.width, i.tweenData.height = i.posOut.height - i.posIn.height, i.tweenData.marginRight = i.posOut.marginRight - i.posIn.marginRight, i.tweenData.marginBottom = i.posOut.marginBottom - i.posIn.marginBottom), f = 0; r = o[f]; f++) {
          s = n.effectsIn[r], s instanceof _e.TransformData && s.value && (i.posIn[r].value = s.value, i.posOut[r].value = 0, i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value, i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
        }
      }

      for (u = 0; a = t.toHide[u]; u++) {
        for (i = t.toHidePosData[u], i.posIn = new _e.StyleData(), i.posOut = new _e.StyleData(), i.tweenData = new _e.StyleData(), i.posIn.x = a.isShown ? i.startPosData.x - i.interPosData.x : 0, i.posIn.y = a.isShown ? i.startPosData.y - i.interPosData.y : 0, i.posOut.x = n.config.animation.nudge ? 0 : i.posIn.x, i.posOut.y = n.config.animation.nudge ? 0 : i.posIn.y, i.tweenData.x = i.posOut.x - i.posIn.x, i.tweenData.y = i.posOut.y - i.posIn.y, n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width, i.posIn.height = i.startPosData.height, l = i.startPosData.width - i.interPosData.width, i.posIn.marginRight = i.startPosData.marginRight - l, c = i.startPosData.height - i.interPosData.height, i.posIn.marginBottom = i.startPosData.marginBottom - c), i.posIn.opacity = 1, i.posOut.opacity = n.effectsOut.opacity, i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity, f = 0; r = o[f]; f++) {
          s = n.effectsOut[r], s instanceof _e.TransformData && s.value && (i.posIn[r].value = 0, i.posOut[r].value = s.value, i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value, i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
        }
      }

      n.callActions("afterGetTweenData", arguments);
    },
    moveTargets: function moveTargets(t) {
      var a = this,
          i = null,
          o = null,
          r = null,
          s = "",
          l = !1,
          c = -1,
          u = -1,
          f = a.checkProgress.bind(a);

      for (a.callActions("beforeMoveTargets", arguments), u = 0; i = t.show[u]; u++) {
        o = new _e.IMoveData(), r = t.showPosData[u], s = i.isShown ? "none" : "show", l = a.willTransition(s, t.hasEffect, r.posIn, r.posOut), l && c++, i.show(), o.posIn = r.posIn, o.posOut = r.posOut, o.statusChange = s, o.staggerIndex = c, o.operation = t, o.callback = l ? f : null, i.move(o);
      }

      for (u = 0; i = t.toHide[u]; u++) {
        r = t.toHidePosData[u], o = new _e.IMoveData(), s = "hide", l = a.willTransition(s, r.posIn, r.posOut), o.posIn = r.posIn, o.posOut = r.posOut, o.statusChange = s, o.staggerIndex = u, o.operation = t, o.callback = l ? f : null, i.move(o);
      }

      a.config.animation.animateResizeContainer && (a.dom.parent.style[_e.features.transitionProp] = "height " + a.config.animation.duration + "ms ease, width " + a.config.animation.duration + "ms ease ", requestAnimationFrame(function () {
        t.startHeight !== t.newHeight && t.viewportDeltaY !== t.startHeight - t.newHeight && (a.dom.parent.style.height = t.newHeight + "px"), t.startWidth !== t.newWidth && t.viewportDeltaX !== t.startWidth - t.newWidth && (a.dom.parent.style.width = t.newWidth + "px");
      })), t.willChangeLayout && (n.removeClass(a.dom.container, a.config.layout.ContainerClassName), n.addClass(a.dom.container, t.newContainerClassName)), a.callActions("afterMoveTargets", arguments);
    },
    hasEffect: function hasEffect() {
      var t = this,
          e = ["scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"],
          n = "",
          a = null,
          i = !1,
          o = -1,
          r = -1;
      if (1 !== t.effectsIn.opacity) return t.callFilters("resultHasEffect", !0, arguments);

      for (r = 0; n = e[r]; r++) {
        if (a = t.effectsIn[n], o = "undefined" !== a.value ? a.value : a, 0 !== o) {
          i = !0;
          break;
        }
      }

      return t.callFilters("resultHasEffect", i, arguments);
    },
    willTransition: function willTransition(t, e, a, i) {
      var o = this,
          r = !1;
      return r = !!n.isVisible(o.dom.container) && (!!("none" !== t && e || a.x !== i.x || a.y !== i.y) || !!o.config.animation.animateResizeTargets && (a.width !== i.width || a.height !== i.height || a.marginRight !== i.marginRight || a.marginTop !== i.marginTop)), o.callFilters("resultWillTransition", r, arguments);
    },
    checkProgress: function checkProgress(t) {
      var e = this;
      e.targetsDone++, e.targetsBound === e.targetsDone && e.cleanUp(t);
    },
    cleanUp: function cleanUp(t) {
      var a = this,
          i = null,
          o = null,
          r = null,
          s = null,
          l = -1;

      for (a.callActions("beforeCleanUp", arguments), a.targetsMoved = a.targetsImmovable = a.targetsBound = a.targetsDone = 0, l = 0; i = t.show[l]; l++) {
        i.cleanUp(), i.show();
      }

      for (l = 0; i = t.toHide[l]; l++) {
        i.cleanUp(), i.hide();
      }

      if (t.willSort && a.printSort(!1, t), a.dom.parent.style[_e.features.transitionProp] = a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = a.dom.parent.style[_e.features.perspectiveProp] = a.dom.parent.style[_e.features.perspectiveOriginProp] = "", t.willChangeLayout && (n.removeClass(a.dom.container, t.startContainerClassName), n.addClass(a.dom.container, t.newContainerClassName)), t.toRemove.length) {
        for (l = 0; i = a.targets[l]; l++) {
          t.toRemove.indexOf(i) > -1 && ((o = i.dom.el.previousSibling) && "#text" === o.nodeName && (r = i.dom.el.nextSibling) && "#text" === r.nodeName && n.removeWhitespace(o), t.willSort || a.dom.parent.removeChild(i.dom.el), a.targets.splice(l, 1), i.isInDom = !1, l--);
        }

        a.origOrder = a.targets;
      }

      t.willSort && (a.targets = t.newOrder), a.state = t.newState, a.lastOperation = t, a.dom.targets = a.state.targets, _e.events.fire("mixEnd", a.dom.container, {
        state: a.state,
        instance: a
      }, a.dom.document), "function" == typeof a.config.callbacks.onMixEnd && a.config.callbacks.onMixEnd.call(a.dom.container, a.state, a), t.hasFailed && (_e.events.fire("mixFail", a.dom.container, {
        state: a.state,
        instance: a
      }, a.dom.document), "function" == typeof a.config.callbacks.onMixFail && a.config.callbacks.onMixFail.call(a.dom.container, a.state, a), n.addClass(a.dom.container, n.getClassname(a.config.classNames, "container", a.config.classNames.modifierFailed))), "function" == typeof a.userCallback && a.userCallback.call(a.dom.container, a.state, a), "function" == typeof a.userDeferred.resolve && a.userDeferred.resolve(a.state), a.userCallback = null, a.userDeferred = null, a.lastClicked = null, a.isToggling = !1, a.isBusy = !1, a.queue.length && (a.callActions("beforeReadQueueCleanUp", arguments), s = a.queue.shift(), a.userDeferred = s.deferred, a.isToggling = s.isToggling, a.lastClicked = s.triggerElement, s.instruction.command instanceof _e.CommandMultimix ? a.multimix.apply(a, s.args) : a.dataset.apply(a, s.args)), a.callActions("afterCleanUp", arguments);
    },
    parseMultimixArgs: function parseMultimixArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandMultimix(), r = 0; r < t.length; r++) {
        o = t[r], null !== o && ("object" == _typeof(o) ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
      }

      return !i.command.insert || i.command.insert instanceof _e.CommandInsert || (i.command.insert = a.parseInsertArgs([i.command.insert]).command), !i.command.remove || i.command.remove instanceof _e.CommandRemove || (i.command.remove = a.parseRemoveArgs([i.command.remove]).command), !i.command.filter || i.command.filter instanceof _e.CommandFilter || (i.command.filter = a.parseFilterArgs([i.command.filter]).command), !i.command.sort || i.command.sort instanceof _e.CommandSort || (i.command.sort = a.parseSortArgs([i.command.sort]).command), !i.command.changeLayout || i.command.changeLayout instanceof _e.CommandChangeLayout || (i.command.changeLayout = a.parseChangeLayoutArgs([i.command.changeLayout]).command), i = a.callFilters("instructionParseMultimixArgs", i, arguments), n.freeze(i), i;
    },
    parseFilterArgs: function parseFilterArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandFilter(), r = 0; r < t.length; r++) {
        o = t[r], "string" == typeof o ? i.command.selector = o : null === o ? i.command.collection = [] : "object" == _typeof(o) && n.isElement(o, a.dom.document) ? i.command.collection = [o] : "object" == _typeof(o) && "undefined" != typeof o.length ? i.command.collection = n.arrayFromList(o) : "object" == _typeof(o) ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o);
      }

      if (i.command.selector && i.command.collection) throw new Error(_e.messages.errorFilterInvalidArguments());
      return i = a.callFilters("instructionParseFilterArgs", i, arguments), n.freeze(i), i;
    },
    parseSortArgs: function parseSortArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = "",
          s = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandSort(), s = 0; s < t.length; s++) {
        if (o = t[s], null !== o) switch (_typeof(o)) {
          case "string":
            r = o;
            break;

          case "object":
            o.length && (i.command.collection = n.arrayFromList(o));
            break;

          case "boolean":
            i.animate = o;
            break;

          case "function":
            i.callback = o;
        }
      }

      return r && (i.command = a.parseSortString(r, i.command)), i = a.callFilters("instructionParseSortArgs", i, arguments), n.freeze(i), i;
    },
    parseInsertArgs: function parseInsertArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandInsert(), r = 0; r < t.length; r++) {
        o = t[r], null !== o && ("number" == typeof o ? i.command.index = o : "string" == typeof o && ["before", "after"].indexOf(o) > -1 ? i.command.position = o : "string" == typeof o ? i.command.collection = n.arrayFromList(n.createElement(o).childNodes) : "object" == _typeof(o) && n.isElement(o, a.dom.document) ? i.command.collection.length ? i.command.sibling = o : i.command.collection = [o] : "object" == _typeof(o) && o.length ? i.command.collection.length ? i.command.sibling = o[0] : i.command.collection = o : "object" == _typeof(o) && o.childNodes && o.childNodes.length ? i.command.collection.length ? i.command.sibling = o.childNodes[0] : i.command.collection = n.arrayFromList(o.childNodes) : "object" == _typeof(o) ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
      }

      if (i.command.index && i.command.sibling) throw new Error(_e.messages.errorInsertInvalidArguments());
      return !i.command.collection.length && a.config.debug.showWarnings && console.warn(_e.messages.warningInsertNoElements()), i = a.callFilters("instructionParseInsertArgs", i, arguments), n.freeze(i), i;
    },
    parseRemoveArgs: function parseRemoveArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = null,
          s = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandRemove(), s = 0; s < t.length; s++) {
        if (r = t[s], null !== r) switch (_typeof(r)) {
          case "number":
            a.targets[r] && (i.command.targets[0] = a.targets[r]);
            break;

          case "string":
            i.command.collection = n.arrayFromList(a.dom.parent.querySelectorAll(r));
            break;

          case "object":
            r && r.length ? i.command.collection = r : n.isElement(r, a.dom.document) ? i.command.collection = [r] : n.extend(i.command, r);
            break;

          case "boolean":
            i.animate = r;
            break;

          case "function":
            i.callback = r;
        }
      }

      if (i.command.collection.length) for (s = 0; o = a.targets[s]; s++) {
        i.command.collection.indexOf(o.dom.el) > -1 && i.command.targets.push(o);
      }
      return !i.command.targets.length && a.config.debug.showWarnings && console.warn(_e.messages.warningRemoveNoElements()), n.freeze(i), i;
    },
    parseDatasetArgs: function parseDatasetArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandDataset(), r = 0; r < t.length; r++) {
        if (o = t[r], null !== o) switch (_typeof(o)) {
          case "object":
            Array.isArray(o) || "number" == typeof o.length ? i.command.dataset = o : n.extend(i.command, o);
            break;

          case "boolean":
            i.animate = o;
            break;

          case "function":
            i.callback = o;
        }
      }

      return n.freeze(i), i;
    },
    parseChangeLayoutArgs: function parseChangeLayoutArgs(t) {
      var a = this,
          i = new _e.UserInstruction(),
          o = null,
          r = -1;

      for (i.animate = a.config.animation.enable, i.command = new _e.CommandChangeLayout(), r = 0; r < t.length; r++) {
        if (o = t[r], null !== o) switch (_typeof(o)) {
          case "string":
            i.command.containerClassName = o;
            break;

          case "object":
            n.extend(i.command, o);
            break;

          case "boolean":
            i.animate = o;
            break;

          case "function":
            i.callback = o;
        }
      }

      return n.freeze(i), i;
    },
    queueMix: function queueMix(t) {
      var a = this,
          i = null,
          o = "";
      return a.callActions("beforeQueueMix", arguments), i = n.defer(_e.libraries), a.config.animation.queue && a.queue.length < a.config.animation.queueLimit ? (t.deferred = i, a.queue.push(t), a.config.controls.enable && (a.isToggling ? (a.buildToggleArray(t.instruction.command), o = a.getToggleSelector(), a.updateControls({
        filter: {
          selector: o
        }
      })) : a.updateControls(t.instruction.command))) : (a.config.debug.showWarnings && console.warn(_e.messages.warningMultimixInstanceQueueFull()), i.resolve(a.state), _e.events.fire("mixBusy", a.dom.container, {
        state: a.state,
        instance: a
      }, a.dom.document), "function" == typeof a.config.callbacks.onMixBusy && a.config.callbacks.onMixBusy.call(a.dom.container, a.state, a)), a.callFilters("promiseQueueMix", i.promise, arguments);
    },
    getDataOperation: function getDataOperation(t) {
      var a = this,
          i = new _e.Operation(),
          o = [];
      if (i = a.callFilters("operationUnmappedGetDataOperation", i, arguments), a.dom.targets.length && !(o = a.state.activeDataset || []).length) throw new Error(_e.messages.errorDatasetNotSet());
      return i.id = n.randomHex(), i.startState = a.state, i.startDataset = o, i.newDataset = t.slice(), a.diffDatasets(i), i.startOrder = a.targets, i.newOrder = i.show, a.config.animation.enable && (a.getStartMixData(i), a.setInter(i), i.docState = n.getDocumentState(a.dom.document), a.getInterMixData(i), a.setFinal(i), a.getFinalMixData(i), a.parseEffects(), i.hasEffect = a.hasEffect(), a.getTweenData(i)), a.targets = i.show.slice(), i.newState = a.buildState(i), Array.prototype.push.apply(a.targets, i.toRemove), i = a.callFilters("operationMappedGetDataOperation", i, arguments);
    },
    diffDatasets: function diffDatasets(t) {
      var a = this,
          i = [],
          o = [],
          r = [],
          s = null,
          l = null,
          c = null,
          u = null,
          f = null,
          h = {},
          d = "",
          m = -1;

      for (a.callActions("beforeDiffDatasets", arguments), m = 0; s = t.newDataset[m]; m++) {
        if ("undefined" == typeof (d = s[a.config.data.uidKey]) || d.toString().length < 1) throw new TypeError(_e.messages.errorDatasetInvalidUidKey({
          uidKey: a.config.data.uidKey
        }));
        if (h[d]) throw new Error(_e.messages.errorDatasetDuplicateUid({
          uid: d
        }));
        h[d] = !0, (l = a.cache[d]) instanceof _e.Target ? (a.config.data.dirtyCheck && !n.deepEquals(s, l.data) && (c = l.render(s), l.data = s, c !== l.dom.el && (l.isInDom && (l.unbindEvents(), a.dom.parent.replaceChild(c, l.dom.el)), l.isShown || (c.style.display = "none"), l.dom.el = c, l.isInDom && l.bindEvents())), c = l.dom.el) : (l = new _e.Target(), l.init(null, a, s), l.hide()), l.isInDom ? (f = l.dom.el.nextElementSibling, o.push(d), u && (u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), a.insertDatasetFrag(u, l.dom.el, r), u = null)) : (u || (u = a.dom.document.createDocumentFragment()), u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), u.appendChild(l.dom.el), l.isInDom = !0, l.unbindEvents(), l.bindEvents(), l.hide(), t.toShow.push(l), r.push(l)), t.show.push(l);
      }

      for (u && (f = f || a.config.layout.siblingAfter, f && u.appendChild(a.dom.document.createTextNode(" ")), a.insertDatasetFrag(u, f, r)), m = 0; s = t.startDataset[m]; m++) {
        d = s[a.config.data.uidKey], l = a.cache[d], t.show.indexOf(l) < 0 ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l)) : i.push(d);
      }

      n.isEqualArray(i, o) || (t.willSort = !0), a.callActions("afterDiffDatasets", arguments);
    },
    insertDatasetFrag: function insertDatasetFrag(t, e, n) {
      var a = this,
          i = e ? Array.from(a.dom.parent.children).indexOf(e) : a.targets.length;

      for (a.dom.parent.insertBefore(t, e); n.length;) {
        a.targets.splice(i, 0, n.shift()), i++;
      }
    },
    willSort: function willSort(t, e) {
      var n = this,
          a = !1;
      return a = !!(n.config.behavior.liveSort || "random" === t.order || t.attribute !== e.attribute || t.order !== e.order || t.collection !== e.collection || null === t.next && e.next || t.next && null === e.next) || !(!t.next || !e.next) && n.willSort(t.next, e.next), n.callFilters("resultWillSort", a, arguments);
    },
    show: function show() {
      var t = this;
      return t.filter("all");
    },
    hide: function hide() {
      var t = this;
      return t.filter("none");
    },
    isMixing: function isMixing() {
      var t = this;
      return t.isBusy;
    },
    filter: function filter() {
      var t = this,
          e = t.parseFilterArgs(arguments);
      return t.multimix({
        filter: e.command
      }, e.animate, e.callback);
    },
    toggleOn: function toggleOn() {
      var t = this,
          e = t.parseFilterArgs(arguments),
          n = e.command.selector,
          a = "";
      return t.isToggling = !0, t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n), a = t.getToggleSelector(), t.multimix({
        filter: a
      }, e.animate, e.callback);
    },
    toggleOff: function toggleOff() {
      var t = this,
          e = t.parseFilterArgs(arguments),
          n = e.command.selector,
          a = t.toggleArray.indexOf(n),
          i = "";
      return t.isToggling = !0, a > -1 && t.toggleArray.splice(a, 1), i = t.getToggleSelector(), t.multimix({
        filter: i
      }, e.animate, e.callback);
    },
    sort: function sort() {
      var t = this,
          e = t.parseSortArgs(arguments);
      return t.multimix({
        sort: e.command
      }, e.animate, e.callback);
    },
    changeLayout: function changeLayout() {
      var t = this,
          e = t.parseChangeLayoutArgs(arguments);
      return t.multimix({
        changeLayout: e.command
      }, e.animate, e.callback);
    },
    dataset: function dataset() {
      var t = this,
          n = t.parseDatasetArgs(arguments),
          a = null,
          i = null,
          o = !1;
      return t.callActions("beforeDataset", arguments), t.isBusy ? (i = new _e.QueueItem(), i.args = arguments, i.instruction = n, t.queueMix(i)) : (n.callback && (t.userCallback = n.callback), o = n.animate ^ t.config.animation.enable ? n.animate : t.config.animation.enable, a = t.getDataOperation(n.command.dataset), t.goMix(o, a));
    },
    multimix: function multimix() {
      var t = this,
          n = null,
          a = !1,
          i = null,
          o = t.parseMultimixArgs(arguments);
      return t.callActions("beforeMultimix", arguments), t.isBusy ? (i = new _e.QueueItem(), i.args = arguments, i.instruction = o, i.triggerElement = t.lastClicked, i.isToggling = t.isToggling, t.queueMix(i)) : (n = t.getOperation(o.command), t.config.controls.enable && (o.command.filter && !t.isToggling && (t.toggleArray.length = 0, t.buildToggleArray(n.command)), t.queue.length < 1 && t.updateControls(n.command)), o.callback && (t.userCallback = o.callback), a = o.animate ^ t.config.animation.enable ? o.animate : t.config.animation.enable, t.callFilters("operationMultimix", n, arguments), t.goMix(a, n));
    },
    getOperation: function getOperation(t) {
      var a = this,
          i = t.sort,
          o = t.filter,
          r = t.changeLayout,
          s = t.remove,
          l = t.insert,
          c = new _e.Operation();
      return c = a.callFilters("operationUnmappedGetOperation", c, arguments), c.id = n.randomHex(), c.command = t, c.startState = a.state, c.triggerElement = a.lastClicked, a.isBusy ? (a.config.debug.showWarnings && console.warn(_e.messages.warningGetOperationInstanceBusy()), null) : (l && a.insertTargets(l, c), s && (c.toRemove = s.targets), c.startSort = c.newSort = c.startState.activeSort, c.startOrder = c.newOrder = a.targets, i && (c.startSort = c.startState.activeSort, c.newSort = i, c.willSort = a.willSort(i, c.startState.activeSort), c.willSort && a.sortOperation(c)), c.startFilter = c.startState.activeFilter, o ? c.newFilter = o : c.newFilter = n.extend(new _e.CommandFilter(), c.startFilter), "all" === c.newFilter.selector ? c.newFilter.selector = a.config.selectors.target : "none" === c.newFilter.selector && (c.newFilter.selector = ""), a.filterOperation(c), c.startContainerClassName = c.startState.activeContainerClassName, r ? (c.newContainerClassName = r.containerClassName, c.newContainerClassName !== c.startContainerClassName && (c.willChangeLayout = !0)) : c.newContainerClassName = c.startContainerClassName, a.config.animation.enable && (a.getStartMixData(c), a.setInter(c), c.docState = n.getDocumentState(a.dom.document), a.getInterMixData(c), a.setFinal(c), a.getFinalMixData(c), a.parseEffects(), c.hasEffect = a.hasEffect(), a.getTweenData(c)), c.willSort && (a.targets = c.newOrder), c.newState = a.buildState(c), a.callFilters("operationMappedGetOperation", c, arguments));
    },
    tween: function tween(t, e) {
      var n = null,
          a = null,
          i = -1,
          o = -1;

      for (e = Math.min(e, 1), e = Math.max(e, 0), o = 0; n = t.show[o]; o++) {
        a = t.showPosData[o], n.applyTween(a, e);
      }

      for (o = 0; n = t.hide[o]; o++) {
        n.isShown && n.hide(), (i = t.toHide.indexOf(n)) > -1 && (a = t.toHidePosData[i], n.isShown || n.show(), n.applyTween(a, e));
      }
    },
    insert: function insert() {
      var t = this,
          e = t.parseInsertArgs(arguments);
      return t.multimix({
        insert: e.command
      }, e.animate, e.callback);
    },
    insertBefore: function insertBefore() {
      var t = this,
          e = t.parseInsertArgs(arguments);
      return t.insert(e.command.collection, "before", e.command.sibling, e.animate, e.callback);
    },
    insertAfter: function insertAfter() {
      var t = this,
          e = t.parseInsertArgs(arguments);
      return t.insert(e.command.collection, "after", e.command.sibling, e.animate, e.callback);
    },
    prepend: function prepend() {
      var t = this,
          e = t.parseInsertArgs(arguments);
      return t.insert(0, e.command.collection, e.animate, e.callback);
    },
    append: function append() {
      var t = this,
          e = t.parseInsertArgs(arguments);
      return t.insert(t.state.totalTargets, e.command.collection, e.animate, e.callback);
    },
    remove: function remove() {
      var t = this,
          e = t.parseRemoveArgs(arguments);
      return t.multimix({
        remove: e.command
      }, e.animate, e.callback);
    },
    getConfig: function getConfig(t) {
      var e = this,
          a = null;
      return a = t ? n.getProperty(e.config, t) : e.config, e.callFilters("valueGetConfig", a, arguments);
    },
    configure: function configure(t) {
      var e = this;
      e.callActions("beforeConfigure", arguments), n.extend(e.config, t, !0, !0), e.callActions("afterConfigure", arguments);
    },
    getState: function getState() {
      var t = this,
          a = null;
      return a = new _e.State(), n.extend(a, t.state), n.freeze(a), t.callFilters("stateGetState", a, arguments);
    },
    forceRefresh: function forceRefresh() {
      var t = this;
      t.indexTargets();
    },
    forceRender: function forceRender() {
      var t = this,
          e = null,
          n = null,
          a = "";

      for (a in t.cache) {
        e = t.cache[a], n = e.render(e.data), n !== e.dom.el && (e.isInDom && (e.unbindEvents(), t.dom.parent.replaceChild(n, e.dom.el)), e.isShown || (n.style.display = "none"), e.dom.el = n, e.isInDom && e.bindEvents());
      }

      t.state = t.buildState(t.lastOperation);
    },
    destroy: function destroy(t) {
      var n = this,
          a = null,
          i = null,
          o = 0;

      for (n.callActions("beforeDestroy", arguments), o = 0; a = n.controls[o]; o++) {
        a.removeBinding(n);
      }

      for (o = 0; i = n.targets[o]; o++) {
        t && i.show(), i.unbindEvents();
      }

      n.dom.container.id.match(/^MixItUp/) && n.dom.container.removeAttribute("id"), delete _e.instances[n.id], n.callActions("afterDestroy", arguments);
    }
  }), _e.IMoveData = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.posIn = null, this.posOut = null, this.operation = null, this.callback = null, this.statusChange = "", this.duration = -1, this.staggerIndex = -1, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.IMoveData), _e.IMoveData.prototype = Object.create(_e.Base.prototype), _e.IMoveData.prototype.constructor = _e.IMoveData, _e.TargetDom = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.TargetDom), _e.TargetDom.prototype = Object.create(_e.Base.prototype), _e.TargetDom.prototype.constructor = _e.TargetDom, _e.Target = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.sortString = "", this.mixer = null, this.callback = null, this.isShown = !1, this.isBound = !1, this.isExcluded = !1, this.isInDom = !1, this.handler = null, this.operation = null, this.data = null, this.dom = new _e.TargetDom(), this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.Target), _e.Target.prototype = Object.create(_e.Base.prototype), n.extend(_e.Target.prototype, {
    constructor: _e.Target,
    init: function init(t, n, a) {
      var i = this,
          o = "";

      if (i.callActions("beforeInit", arguments), i.mixer = n, t || (t = i.render(a)), i.cacheDom(t), i.bindEvents(), "none" !== i.dom.el.style.display && (i.isShown = !0), a && n.config.data.uidKey) {
        if ("undefined" == typeof (o = a[n.config.data.uidKey]) || o.toString().length < 1) throw new TypeError(_e.messages.errorDatasetInvalidUidKey({
          uidKey: n.config.data.uidKey
        }));
        i.id = o, i.data = a, n.cache[o] = i;
      }

      i.callActions("afterInit", arguments);
    },
    render: function render(t) {
      var a = this,
          i = null,
          o = null,
          r = null,
          s = "";
      if (a.callActions("beforeRender", arguments), i = a.callFilters("renderRender", a.mixer.config.render.target, arguments), "function" != typeof i) throw new TypeError(_e.messages.errorDatasetRendererNotSet());
      return s = i(t), s && "object" == _typeof(s) && n.isElement(s) ? o = s : "string" == typeof s && (r = document.createElement("div"), r.innerHTML = s, o = r.firstElementChild), a.callFilters("elRender", o, arguments);
    },
    cacheDom: function cacheDom(t) {
      var e = this;
      e.callActions("beforeCacheDom", arguments), e.dom.el = t, e.callActions("afterCacheDom", arguments);
    },
    getSortString: function getSortString(t) {
      var e = this,
          n = e.dom.el.getAttribute("data-" + t) || "";
      e.callActions("beforeGetSortString", arguments), n = isNaN(1 * n) ? n.toLowerCase() : 1 * n, e.sortString = n, e.callActions("afterGetSortString", arguments);
    },
    show: function show() {
      var t = this;
      t.callActions("beforeShow", arguments), t.isShown || (t.dom.el.style.display = "", t.isShown = !0), t.callActions("afterShow", arguments);
    },
    hide: function hide() {
      var t = this;
      t.callActions("beforeHide", arguments), t.isShown && (t.dom.el.style.display = "none", t.isShown = !1), t.callActions("afterHide", arguments);
    },
    move: function move(t) {
      var e = this;
      e.callActions("beforeMove", arguments), e.isExcluded || e.mixer.targetsMoved++, e.applyStylesIn(t), requestAnimationFrame(function () {
        e.applyStylesOut(t);
      }), e.callActions("afterMove", arguments);
    },
    applyTween: function applyTween(t, n) {
      var a = this,
          i = "",
          o = null,
          r = t.posIn,
          s = [],
          l = new _e.StyleData(),
          c = -1;

      for (a.callActions("beforeApplyTween", arguments), l.x = r.x, l.y = r.y, 0 === n ? a.hide() : a.isShown || a.show(), c = 0; i = _e.features.TWEENABLE[c]; c++) {
        if (o = t.tweenData[i], "x" === i) {
          if (!o) continue;
          l.x = r.x + o * n;
        } else if ("y" === i) {
          if (!o) continue;
          l.y = r.y + o * n;
        } else if (o instanceof _e.TransformData) {
          if (!o.value) continue;
          l[i].value = r[i].value + o.value * n, l[i].unit = o.unit, s.push(i + "(" + l[i].value + o.unit + ")");
        } else {
          if (!o) continue;
          l[i] = r[i] + o * n, a.dom.el.style[i] = l[i];
        }
      }

      (l.x || l.y) && s.unshift("translate(" + l.x + "px, " + l.y + "px)"), s.length && (a.dom.el.style[_e.features.transformProp] = s.join(" ")), a.callActions("afterApplyTween", arguments);
    },
    applyStylesIn: function applyStylesIn(t) {
      var n = this,
          a = t.posIn,
          i = 1 !== n.mixer.effectsIn.opacity,
          o = [];
      n.callActions("beforeApplyStylesIn", arguments), o.push("translate(" + a.x + "px, " + a.y + "px)"), n.mixer.config.animation.animateResizeTargets && ("show" !== t.statusChange && (n.dom.el.style.width = a.width + "px", n.dom.el.style.height = a.height + "px"), n.dom.el.style.marginRight = a.marginRight + "px", n.dom.el.style.marginBottom = a.marginBottom + "px"), i && (n.dom.el.style.opacity = a.opacity), "show" === t.statusChange && (o = o.concat(n.mixer.transformIn)), n.dom.el.style[_e.features.transformProp] = o.join(" "), n.callActions("afterApplyStylesIn", arguments);
    },
    applyStylesOut: function applyStylesOut(t) {
      var n = this,
          a = [],
          i = [],
          o = n.mixer.config.animation.animateResizeTargets,
          r = "undefined" != typeof n.mixer.effectsIn.opacity;
      if (n.callActions("beforeApplyStylesOut", arguments), a.push(n.writeTransitionRule(_e.features.transformRule, t.staggerIndex)), "none" !== t.statusChange && a.push(n.writeTransitionRule("opacity", t.staggerIndex, t.duration)), o && (a.push(n.writeTransitionRule("width", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("height", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("margin", t.staggerIndex, t.duration))), !t.callback) return n.mixer.targetsImmovable++, void (n.mixer.targetsMoved === n.mixer.targetsImmovable && n.mixer.cleanUp(t.operation));

      switch (n.operation = t.operation, n.callback = t.callback, !n.isExcluded && n.mixer.targetsBound++, n.isBound = !0, n.applyTransition(a), o && t.posOut.width > 0 && t.posOut.height > 0 && (n.dom.el.style.width = t.posOut.width + "px", n.dom.el.style.height = t.posOut.height + "px", n.dom.el.style.marginRight = t.posOut.marginRight + "px", n.dom.el.style.marginBottom = t.posOut.marginBottom + "px"), n.mixer.config.animation.nudge || "hide" !== t.statusChange || i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), t.statusChange) {
        case "hide":
          r && (n.dom.el.style.opacity = n.mixer.effectsOut.opacity), i = i.concat(n.mixer.transformOut);
          break;

        case "show":
          r && (n.dom.el.style.opacity = 1);
      }

      (n.mixer.config.animation.nudge || !n.mixer.config.animation.nudge && "hide" !== t.statusChange) && i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), n.dom.el.style[_e.features.transformProp] = i.join(" "), n.callActions("afterApplyStylesOut", arguments);
    },
    writeTransitionRule: function writeTransitionRule(t, e, n) {
      var a = this,
          i = a.getDelay(e),
          o = "";
      return o = t + " " + (n > 0 ? n : a.mixer.config.animation.duration) + "ms " + i + "ms " + ("opacity" === t ? "linear" : a.mixer.config.animation.easing), a.callFilters("ruleWriteTransitionRule", o, arguments);
    },
    getDelay: function getDelay(t) {
      var e = this,
          n = -1;
      return "function" == typeof e.mixer.config.animation.staggerSequence && (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)), n = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0, e.callFilters("delayGetDelay", n, arguments);
    },
    applyTransition: function applyTransition(t) {
      var n = this,
          a = t.join(", ");
      n.callActions("beforeApplyTransition", arguments), n.dom.el.style[_e.features.transitionProp] = a, n.callActions("afterApplyTransition", arguments);
    },
    handleTransitionEnd: function handleTransitionEnd(t) {
      var e = this,
          n = t.propertyName,
          a = e.mixer.config.animation.animateResizeTargets;
      e.callActions("beforeHandleTransitionEnd", arguments), e.isBound && t.target.matches(e.mixer.config.selectors.target) && (n.indexOf("transform") > -1 || n.indexOf("opacity") > -1 || a && n.indexOf("height") > -1 || a && n.indexOf("width") > -1 || a && n.indexOf("margin") > -1) && (e.callback.call(e, e.operation), e.isBound = !1, e.callback = null, e.operation = null), e.callActions("afterHandleTransitionEnd", arguments);
    },
    eventBus: function eventBus(t) {
      var e = this;

      switch (e.callActions("beforeEventBus", arguments), t.type) {
        case "webkitTransitionEnd":
        case "transitionend":
          e.handleTransitionEnd(t);
      }

      e.callActions("afterEventBus", arguments);
    },
    unbindEvents: function unbindEvents() {
      var t = this;
      t.callActions("beforeUnbindEvents", arguments), n.off(t.dom.el, "webkitTransitionEnd", t.handler), n.off(t.dom.el, "transitionend", t.handler), t.callActions("afterUnbindEvents", arguments);
    },
    bindEvents: function bindEvents() {
      var t = this,
          a = "";
      t.callActions("beforeBindEvents", arguments), a = "webkit" === _e.features.transitionPrefix ? "webkitTransitionEnd" : "transitionend", t.handler = function (e) {
        return t.eventBus(e);
      }, n.on(t.dom.el, a, t.handler), t.callActions("afterBindEvents", arguments);
    },
    getPosData: function getPosData(n) {
      var a = this,
          i = {},
          o = null,
          r = new _e.StyleData();
      return a.callActions("beforeGetPosData", arguments), r.x = a.dom.el.offsetLeft, r.y = a.dom.el.offsetTop, (a.mixer.config.animation.animateResizeTargets || n) && (o = a.dom.el.getBoundingClientRect(), r.top = o.top, r.right = o.right, r.bottom = o.bottom, r.left = o.left, r.width = o.width, r.height = o.height), a.mixer.config.animation.animateResizeTargets && (i = t.getComputedStyle(a.dom.el), r.marginBottom = parseFloat(i.marginBottom), r.marginRight = parseFloat(i.marginRight)), a.callFilters("posDataGetPosData", r, arguments);
    },
    cleanUp: function cleanUp() {
      var t = this;
      t.callActions("beforeCleanUp", arguments), t.dom.el.style[_e.features.transformProp] = "", t.dom.el.style[_e.features.transitionProp] = "", t.dom.el.style.opacity = "", t.mixer.config.animation.animateResizeTargets && (t.dom.el.style.width = "", t.dom.el.style.height = "", t.dom.el.style.marginRight = "", t.dom.el.style.marginBottom = ""), t.callActions("afterCleanUp", arguments);
    }
  }), _e.Collection = function (t) {
    var e = null,
        a = -1;

    for (this.callActions("beforeConstruct"), a = 0; e = t[a]; a++) {
      this[a] = e;
    }

    this.length = t.length, this.callActions("afterConstruct"), n.freeze(this);
  }, _e.BaseStatic.call(_e.Collection), _e.Collection.prototype = Object.create(_e.Base.prototype), n.extend(_e.Collection.prototype, {
    constructor: _e.Collection,
    mixitup: function mixitup(t) {
      var a = this,
          i = null,
          o = Array.prototype.slice.call(arguments),
          r = [],
          s = -1;

      for (this.callActions("beforeMixitup"), o.shift(), s = 0; i = a[s]; s++) {
        r.push(i[t].apply(i, o));
      }

      return a.callFilters("promiseMixitup", n.all(r, _e.libraries), arguments);
    }
  }), _e.Operation = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.args = [], this.command = null, this.showPosData = [], this.toHidePosData = [], this.startState = null, this.newState = null, this.docState = null, this.willSort = !1, this.willChangeLayout = !1, this.hasEffect = !1, this.hasFailed = !1, this.triggerElement = null, this.show = [], this.hide = [], this.matching = [], this.toShow = [], this.toHide = [], this.toMove = [], this.toRemove = [], this.startOrder = [], this.newOrder = [], this.startSort = null, this.newSort = null, this.startFilter = null, this.newFilter = null, this.startDataset = null, this.newDataset = null, this.viewportDeltaX = 0, this.viewportDeltaY = 0, this.startX = 0, this.startY = 0, this.startHeight = 0, this.startWidth = 0, this.newX = 0, this.newY = 0, this.newHeight = 0, this.newWidth = 0, this.startContainerClassName = "", this.startDisplay = "", this.newContainerClassName = "", this.newDisplay = "", this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.Operation), _e.Operation.prototype = Object.create(_e.Base.prototype), _e.Operation.prototype.constructor = _e.Operation, _e.State = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.activeFilter = null, this.activeSort = null, this.activeContainerClassName = "", this.container = null, this.targets = [], this.hide = [], this.show = [], this.matching = [], this.totalTargets = -1, this.totalShow = -1, this.totalHide = -1, this.totalMatching = -1, this.hasFailed = !1, this.triggerElement = null, this.activeDataset = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.State), _e.State.prototype = Object.create(_e.Base.prototype), _e.State.prototype.constructor = _e.State, _e.UserInstruction = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.command = {}, this.animate = !1, this.callback = null, this.callActions("afterConstruct"), n.seal(this);
  }, _e.BaseStatic.call(_e.UserInstruction), _e.UserInstruction.prototype = Object.create(_e.Base.prototype), _e.UserInstruction.prototype.constructor = _e.UserInstruction, _e.Messages = function () {
    _e.Base.call(this), this.callActions("beforeConstruct"), this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function", this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element", this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`", this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`", this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}', this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?', this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`", this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items', this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.', this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both", this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container", this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both", this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`", this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets", this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`", this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.", this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`", this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`", this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.", this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.", this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.", this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output', this.callActions("afterConstruct"), this.compileTemplates(), n.seal(this);
  }, _e.BaseStatic.call(_e.Messages), _e.Messages.prototype = Object.create(_e.Base.prototype), _e.Messages.prototype.constructor = _e.Messages, _e.Messages.prototype.compileTemplates = function () {
    var t = "",
        e = "";

    for (t in this) {
      "string" == typeof (e = this[t]) && (this[n.camelCase(t)] = n.template(e));
    }
  }, _e.messages = new _e.Messages(), _e.Facade = function (t) {
    _e.Base.call(this), this.callActions("beforeConstruct", arguments), this.configure = t.configure.bind(t), this.show = t.show.bind(t), this.hide = t.hide.bind(t), this.filter = t.filter.bind(t), this.toggleOn = t.toggleOn.bind(t), this.toggleOff = t.toggleOff.bind(t), this.sort = t.sort.bind(t), this.changeLayout = t.changeLayout.bind(t), this.multimix = t.multimix.bind(t), this.dataset = t.dataset.bind(t), this.tween = t.tween.bind(t), this.insert = t.insert.bind(t), this.insertBefore = t.insertBefore.bind(t), this.insertAfter = t.insertAfter.bind(t), this.prepend = t.prepend.bind(t), this.append = t.append.bind(t), this.remove = t.remove.bind(t), this.destroy = t.destroy.bind(t), this.forceRefresh = t.forceRefresh.bind(t), this.forceRender = t.forceRender.bind(t), this.isMixing = t.isMixing.bind(t), this.getOperation = t.getOperation.bind(t), this.getConfig = t.getConfig.bind(t), this.getState = t.getState.bind(t), this.callActions("afterConstruct", arguments), n.freeze(this), n.seal(this);
  }, _e.BaseStatic.call(_e.Facade), _e.Facade.prototype = Object.create(_e.Base.prototype), _e.Facade.prototype.constructor = _e.Facade, "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = _e :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return _e;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0, _e.BaseStatic.call(_e.constructor), _e.NAME = "mixitup", _e.CORE_VERSION = "3.3.0";
}(window);

/***/ }),

/***/ "./resources/js/swiper.min.js":
/*!************************************!*\
  !*** ./resources/js/swiper.min.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Swiper 4.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 1, 2018
 */
!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var e = "undefined" == typeof document ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: {
      hash: ""
    }
  } : document,
      t = "undefined" == typeof window ? {
    document: e,
    navigator: {
      userAgent: ""
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  } : window,
      i = function i(e) {
    for (var t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }

    return this.length = e.length, this;
  };

  function s(s, a) {
    var r = [],
        n = 0;
    if (s && !a && s instanceof i) return s;
    if (s) if ("string" == typeof s) {
      var o,
          l,
          d = s.trim();

      if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";

        for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) {
          r.push(l.childNodes[n]);
        }
      } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) {
        o[n] && r.push(o[n]);
      }
    } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) {
      r.push(s[n]);
    }
    return new i(r);
  }

  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) {
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    }

    return t;
  }

  s.fn = i.prototype, s.Class = i, s.Dom7 = i;
  var r = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;

      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.add(t[i]);
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.remove(t[i]);
        }
      }

      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
        }
      }

      return this;
    },
    attr: function attr(e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var s = 0; s < this.length; s += 1) {
        if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) {
          this[s][a] = e[a], this[s].setAttribute(a, e[a]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    data: function data(e, t) {
      var i;

      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) {
          (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        }

        return this;
      }

      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransform = e, i.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e += "ms");

      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e;
      }

      return this;
    },
    on: function on() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }

      var a = t[0],
          r = t[1],
          n = t[2],
          o = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) {
            s(a[o]).is(r) && n.apply(a[o], i);
          }
        }
      }

      function d(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }

      "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);

      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (h = 0; h < p.length; h += 1) {
          var v = p[h];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, o);
        } else for (h = 0; h < p.length; h += 1) {
          var f = p[h];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
            listener: n,
            proxyListener: d
          }), u.addEventListener(f, d, o);
        }
      }

      return this;
    },
    off: function off() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);

      for (var o = s.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
              c = void 0;
          !a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]);

          for (var u = c.length - 1; u >= 0; u -= 1) {
            var v = c[u];
            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var i = [], s = arguments.length; s--;) {
        i[s] = arguments[s];
      }

      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
              h = void 0;

          try {
            h = new t.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
          } catch (t) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
          }

          d.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;

      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) {
          s.off(i[t], a);
        }
      }

      if (e) for (t = 0; t < i.length; t += 1) {
        s.on(i[t], a);
      }
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    offset: function offset() {
      if (this.length > 0) {
        var i = this[0],
            s = i.getBoundingClientRect(),
            a = e.body,
            r = i.clientTop || a.clientTop || 0,
            n = i.clientLeft || a.clientLeft || 0,
            o = i === t ? t.scrollY : i.scrollTop,
            l = i === t ? t.scrollX : i.scrollLeft;
        return {
          top: s.top + o - r,
          left: s.left + l - n
        };
      }

      return null;
    },
    css: function css(e, i) {
      var s;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) {
            for (var a in e) {
              this[s].style[a] = e[a];
            }
          }

          return this;
        }

        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) {
          this[s].style[e] = i;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      if (!e) return this;

      for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }

      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(a) {
      var r,
          n,
          o = this[0];
      if (!o || void 0 === a) return !1;

      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);

        for (r = s(a), n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }

        return !1;
      }

      if (a === e) return o === e;
      if (a === t) return o === t;

      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t,
          s = this.length;
      return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function append() {
      for (var t, s = [], a = arguments.length; a--;) {
        s[a] = arguments[a];
      }

      for (var r = 0; r < s.length; r += 1) {
        t = s[r];

        for (var n = 0; n < this.length; n += 1) {
          if ("string" == typeof t) {
            var o = e.createElement("div");

            for (o.innerHTML = t; o.firstChild;) {
              this[n].appendChild(o.firstChild);
            }
          } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) {
            this[n].appendChild(t[l]);
          } else this[n].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(t) {
      var s, a;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof t) {
          var r = e.createElement("div");

          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) {
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
          }
        } else if (t instanceof i) for (a = 0; a < t.length; a += 1) {
          this[s].insertBefore(t[a], this[s].childNodes[0]);
        } else this[s].insertBefore(t, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          a = this[0];
      if (!a) return new i([]);

      for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }

      return new i(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
      }

      return new i([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          a = this[0];
      if (!a) return new i([]);

      for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }

      return new i(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return s(a(t));
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var r = this[i].parentNode; r;) {
          e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
        }
      }

      return s(a(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], s = 0; s < this.length; s += 1) {
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) {
          t.push(a[r]);
        }
      }

      return new i(t);
    },
    children: function children(e) {
      for (var t = [], r = 0; r < this.length; r += 1) {
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) {
          e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
        }
      }

      return new i(a(t));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    },
    add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      var i, a;

      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);

        for (a = 0; a < r.length; a += 1) {
          this[this.length] = r[a], this.length += 1;
        }
      }

      return this;
    },
    styles: function styles() {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = r[e];
  });

  var n,
      o,
      l,
      d = {
    deleteProps: function deleteProps(e) {
      var t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}

        try {
          delete t[e];
        } catch (e) {}
      });
    },
    nextTick: function nextTick(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(e, i) {
      var s, a, r;
      void 0 === i && (i = "x");
      var n = t.getComputedStyle(e, null);
      return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
    },
    parseUrlQuery: function parseUrlQuery(e) {
      var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
      if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, i = 0; i < r; i += 1) {
        a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
      }
      return n;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];
        if (void 0 !== a && null !== a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              h = Object.getOwnPropertyDescriptor(a, l);
          void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]);
        }
      }

      return i;
    }
  },
      h = (l = e.createElement("div"), {
    touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
    pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
    prefixedPointerEvents: !!t.navigator.msPointerEnabled,
    transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
    transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
    flexbox: function () {
      for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) {
        if (t[i] in e) return !0;
      }

      return !1;
    }(),
    observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
    passiveListener: function () {
      var e = !1;

      try {
        var i = Object.defineProperty({}, "passive", {
          get: function get() {
            e = !0;
          }
        });
        t.addEventListener("testPassiveListener", null, i);
      } catch (e) {}

      return e;
    }(),
    gestures: "ongesturestart" in t
  }),
      p = function p(e) {
    void 0 === e && (e = {});
    var t = this;
    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      c = {
    components: {
      configurable: !0
    }
  };

  p.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, p.prototype.once = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    return s.on(e, function i() {
      for (var a = [], r = arguments.length; r--;) {
        a[r] = arguments[r];
      }

      t.apply(s, a), s.off(e, i);
    }, i);
  }, p.prototype.off = function (e, t) {
    var i = this;
    return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (s, a) {
        s === t && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, p.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }

    var i,
        s,
        a,
        r = this;
    return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r) : r;
  }, p.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];
      s.params && d.extend(e, s.params);
    });
  }, p.prototype.useModules = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
          a = e[i] || {};
      s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];
        t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, c.components.set = function (e) {
    this.use && this.use(e);
  }, p.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }

    var s = this;
    s.prototype.modules || (s.prototype.modules = {});
    var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
      s[t] = e["static"][t];
    }), e.install && e.install.apply(s, t), s;
  }, p.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }

    var s = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(p, c);
  var u = {
    updateSize: function updateSize() {
      var e,
          t,
          i = this.$el;
      e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
        width: e,
        height: t,
        size: this.isHorizontal() ? e : t
      }));
    },
    updateSlides: function updateSlides() {
      var e = this.params,
          i = this.$wrapperEl,
          s = this.size,
          a = this.rtlTranslate,
          r = this.wrongRTL,
          n = i.children("." + this.params.slideClass),
          o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length,
          l = [],
          p = [],
          c = [],
          u = e.slidesOffsetBefore;
      "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
      var v = e.slidesOffsetAfter;
      "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
      var f = o,
          m = this.snapGrid.length,
          g = this.snapGrid.length,
          b = e.spaceBetween,
          w = -u,
          y = 0,
          x = 0;

      if (void 0 !== s) {
        var E, T;
        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({
          marginLeft: "",
          marginTop: ""
        }) : n.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));

        for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
          T = 0;
          var P = n.eq(k);

          if (e.slidesPerColumn > 1) {
            var $ = void 0,
                L = void 0,
                I = void 0;
            "column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({
              "-webkit-box-ordinal-group": $,
              "-moz-box-ordinal-group": $,
              "-ms-flex-order": $,
              "-webkit-order": $,
              order: $
            })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I);
          }

          if ("none" !== P.css("display")) {
            if ("auto" === e.slidesPerView) {
              var D = t.getComputedStyle(P[0], null),
                  O = P[0].style.transform;
              O && (P[0].style.transform = "none"), T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), O && (P[0].style.transform = O), e.roundLengths && (T = Math.floor(T));
            } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px");

            n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1;
          }
        }

        if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        }), e.centeredSlides)) {
          S = [];

          for (var A = 0; A < l.length; A += 1) {
            l[A] < this.virtualSize + l[0] && S.push(l[A]);
          }

          l = S;
        }

        if (!e.centeredSlides) {
          S = [];

          for (var G = 0; G < l.length; G += 1) {
            l[G] <= this.virtualSize - s && S.push(l[G]);
          }

          l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s);
        }

        0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({
          marginLeft: b + "px"
        }) : n.css({
          marginRight: b + "px"
        }) : n.css({
          marginBottom: b + "px"
        })), d.extend(this, {
          slides: n,
          snapGrid: l,
          slidesGrid: p,
          slidesSizesGrid: c
        }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t,
          i = [],
          s = 0;
      if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
        var a = this.activeIndex + t;
        if (a > this.slides.length) break;
        i.push(this.slides.eq(a)[0]);
      } else i.push(this.slides.eq(this.activeIndex)[0]);

      for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }
      }

      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
          i = this.slides,
          s = this.rtlTranslate;

      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var a = -e;
        s && (a = e), i.removeClass(t.slideVisibleClass);

        for (var r = 0; r < i.length; r += 1) {
          var n = i[r],
              o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

          if (t.watchSlidesVisibility) {
            var l = -(a - n.swiperSlideOffset),
                d = l + this.slidesSizesGrid[r];
            (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass);
          }

          n.progress = s ? -o : o;
        }
      }
    },
    updateProgress: function updateProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
          i = this.maxTranslate() - this.minTranslate(),
          s = this.progress,
          a = this.isBeginning,
          r = this.isEnd,
          n = a,
          o = r;
      0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
        progress: s,
        isBeginning: a,
        isEnd: r
      }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e,
          t = this.slides,
          i = this.params,
          s = this.$wrapperEl,
          a = this.activeIndex,
          r = this.realIndex,
          n = this.virtual && i.virtual.enabled;
      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
      var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t,
          i = this.rtlTranslate ? this.translate : -this.translate,
          s = this.slidesGrid,
          a = this.snapGrid,
          r = this.params,
          n = this.activeIndex,
          o = this.realIndex,
          l = this.snapIndex,
          h = e;

      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) {
          void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
        }

        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }

      if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
        var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
        d.extend(this, {
          snapIndex: t,
          realIndex: c,
          previousIndex: n,
          activeIndex: h
        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange");
      } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this.params,
          i = s(e.target).closest("." + t.slideClass)[0],
          a = !1;
      if (i) for (var r = 0; r < this.slides.length; r += 1) {
        this.slides[r] === i && (a = !0);
      }
      if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
      this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    }
  };
  var v = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      var r = d.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var i = this.rtlTranslate,
          s = this.params,
          a = this.$wrapperEl,
          r = this.progress,
          n = 0,
          o = 0;
      this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
      var l = this.maxTranslate() - this.minTranslate();
      (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var f = {
    setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
          s = this.params,
          a = this.previousIndex;
      s.autoHeight && this.updateAutoHeight();
      var r = t;

      if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
        if ("reset" === r) return void this.emit("slideResetTransitionStart");
        this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
          s = this.previousIndex;
      this.animating = !1, this.setTransition(0);
      var a = t;

      if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
        if ("reset" === a) return void this.emit("slideResetTransitionEnd");
        this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
      }
    }
  };
  var m = {
    slideTo: function slideTo(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = this,
          r = e;
      r < 0 && (r = 0);
      var n = a.params,
          o = a.snapGrid,
          l = a.slidesGrid,
          d = a.previousIndex,
          p = a.activeIndex,
          c = a.rtlTranslate;
      if (a.animating && n.preventIntercationOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
      var v,
          f = -o[u];
      if (a.updateProgress(f), n.normalizeSlideIndex) for (var m = 0; m < l.length; m += 1) {
        -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
      }

      if (a.initialized && r !== p) {
        if (!a.allowSlideNext && f < a.translate && f < a.minTranslate()) return !1;
        if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== r) return !1;
      }

      return v = r > p ? "next" : r < p ? "prev" : "reset", c && -f === a.translate || !c && f === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(f), "reset" !== v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.transitionEnd(i, v));
      }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.transitionEnd(i, v)), !0);
    },
    slideToLoop: function slideToLoop(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = e;
      return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    },
    slideNext: function slideNext(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
          a = this.animating;
      return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
    },
    slidePrev: function slidePrev(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
          a = this.animating,
          r = this.snapGrid,
          n = this.slidesGrid,
          o = this.rtlTranslate;

      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }

      var l,
          d = o ? this.translate : -this.translate,
          h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);
      return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i);
    },
    slideReset: function slideReset(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function slideToClosest(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.activeIndex,
          a = Math.floor(s / this.params.slidesPerGroup);

      if (a < this.snapGrid.length - 1) {
        var r = this.rtlTranslate ? this.translate : -this.translate,
            n = this.snapGrid[a];
        r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup);
      }

      return this.slideTo(s, e, t, i);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e,
          t = this,
          i = t.params,
          a = t.$wrapperEl,
          r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          n = t.clickedIndex;

      if (i.loop) {
        if (t.animating) return;
        e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(n);
        })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(n);
        })) : t.slideTo(n);
      } else t.slideTo(n);
    }
  };
  var g = {
    loopCreate: function loopCreate() {
      var t = this,
          i = t.params,
          a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);

      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;

        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
            a.append(l);
          }

          r = a.children("." + i.slideClass);
        }
      }

      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
          h = [];
      r.each(function (e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
      });

      for (var p = 0; p < h.length; p += 1) {
        a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }

      for (var c = d.length - 1; c >= 0; c -= 1) {
        a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e,
          t = this.params,
          i = this.activeIndex,
          s = this.slides,
          a = this.loopedSlides,
          r = this.allowSlidePrev,
          n = this.allowSlideNext,
          o = this.snapGrid,
          l = this.rtlTranslate;
      this.allowSlidePrev = !0, this.allowSlideNext = !0;
      var d = -o[i] - this.getTranslate();
      i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
      this.allowSlidePrev = r, this.allowSlideNext = n;
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var b = {
    setGrabCursor: function setGrabCursor(e) {
      if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function unsetGrabCursor() {
      h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };

  var w = {
    appendSlide: function appendSlide(e) {
      var t = this.$wrapperEl,
          i = this.params;
      if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
        e[s] && t.append(e[s]);
      } else t.append(e);
      i.loop && this.loopCreate(), i.observer && h.observer || this.update();
    },
    prependSlide: function prependSlide(e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
      t.loop && this.loopDestroy();
      var a = s + 1;

      if ("object" == _typeof(e) && "length" in e) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && i.prepend(e[r]);
        }

        a = s + e.length;
      } else i.prepend(e);

      t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1);
    },
    removeSlide: function removeSlide(e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
      t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
      var a,
          r = s;

      if ("object" == _typeof(e) && "length" in e) {
        for (var n = 0; n < e.length; n += 1) {
          a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
        }

        r = Math.max(r, 0);
      } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

      t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
    },
    removeAllSlides: function removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }

      this.removeSlide(e);
    }
  },
      y = function () {
    var i = t.navigator.userAgent,
        s = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: t.cordova || t.phonegap,
      phonegap: t.cordova || t.phonegap
    },
        a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
        n = i.match(/(iPad).*OS\s([\d_]+)/),
        o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
      var d = s.osVersion.split("."),
          h = e.querySelector('meta[name="viewport"]');
      s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0;
    }

    return s.pixelRatio = t.devicePixelRatio || 1, s;
  }();

  function x() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;

      if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
        var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
        this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
      } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);

      this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  var E = {
    attachEvents: function attachEvents() {
      var i = this.params,
          a = this.touchEvents,
          r = this.el,
          n = this.wrapperEl;
      this.onTouchStart = function (i) {
        var a = this.touchEventsData,
            r = this.params,
            n = this.touches;

        if (!this.animating || !r.preventIntercationOnTransition) {
          var o = i;
          if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
            var l = n.currentX,
                h = n.currentY;

            if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
              if (d.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                var p = !0;
                s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault();
              }

              this.emit("touchStart", o);
            }
          }
        }
      }.bind(this), this.onTouchMove = function (t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            n = this.rtlTranslate,
            o = t;

        if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "mousemove" !== o.type) {
            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = h);
            if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(r, {
              startX: l,
              startY: h,
              currentX: l,
              currentY: h
            }), i.touchStartTime = d.now()));
            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
              if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
            if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

            if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
              r.currentX = l, r.currentY = h;
              var p,
                  c = r.currentX - r.startX,
                  u = r.currentY - r.startY;
              if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                var v = this.isHorizontal() ? c : u;
                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                var f = !0,
                    m = a.resistanceRatio;

                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                  if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                }

                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: r[this.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: r[this.isHorizontal() ? "currentX" : "currentY"],
                  time: d.now()
                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
              }
            }
          }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
      }.bind(this), this.onTouchEnd = function (e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p,
            c = d.now(),
            u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () {
          t && !t.destroyed && t.emit("click", h);
        }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () {
          t.destroyed || (t.allowClick = !0);
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);

        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

          if (s.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var v = i.velocities.pop(),
                  f = i.velocities.pop(),
                  m = v.position - f.position,
                  g = v.time - f.time;
              t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;

            t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
            var b = 1e3 * s.freeModeMomentumRatio,
                w = t.velocity * b,
                y = t.translate + w;
            r && (y = -y);
            var x,
                E,
                T = !1,
                S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);else if (s.freeModeSticky) {
              for (var C, M = 0; M < l.length; M += 1) {
                if (l[M] > -y) {
                  C = M;
                  break;
                }
              }

              y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
            }
            if (E && t.once("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);else if (s.freeModeSticky) return void t.slideToClosest();
            s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }));
            })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
          } else if (s.freeModeSticky) return void t.slideToClosest();

          (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        } else {
          for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) {
            void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
          }

          var $ = (p - o[z]) / k;

          if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z);
          }
        }
      }.bind(this), this.onClick = function (e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }.bind(this);
      var o = "container" === i.touchEventsTarget ? r : n,
          l = !!i.nested;

      if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
            passive: !1,
            capture: l
          } : l), o.addEventListener(a.end, this.onTouchEnd, p);
        }

        (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
      } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);

      (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0);
    },
    detachEvents: function detachEvents() {
      var t = this.params,
          i = this.touchEvents,
          s = this.el,
          a = this.wrapperEl,
          r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;

      if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o);
        }

        (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1));
      } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);

      (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x);
    }
  };

  var T = {
    setBreakpoint: function setBreakpoint() {
      var e = this.activeIndex,
          t = this.initialized,
          i = this.loopedSlides;
      void 0 === i && (i = 0);
      var s = this.params,
          a = s.breakpoints;

      if (a && (!a || 0 !== Object.keys(a).length)) {
        var r = this.getBreakpoint(a);

        if (r && this.currentBreakpoint !== r) {
          var n = r in a ? a[r] : this.originalParams,
              o = s.loop && n.slidesPerView !== s.slidesPerView;
          d.extend(this.params, n), d.extend(this, {
            allowTouchMove: this.params.allowTouchMove,
            allowSlideNext: this.params.allowSlideNext,
            allowSlidePrev: this.params.allowSlidePrev
          }), this.currentBreakpoint = r, o && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", n);
        }
      }
    },
    getBreakpoint: function getBreakpoint(e) {
      if (e) {
        var i = !1,
            s = [];
        Object.keys(e).forEach(function (e) {
          s.push(e);
        }), s.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });

        for (var a = 0; a < s.length; a += 1) {
          var r = s[a];
          r >= t.innerWidth && !i && (i = r);
        }

        return i || "max";
      }
    }
  },
      S = function () {
    return {
      isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
      isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    };
    var e;
  }();

  var C = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    preventIntercationOnTransition: !1,
    iOSEdgeSwipeDetection: !1,
    iOSEdgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !0,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0
  },
      M = {
    update: u,
    translate: v,
    transition: f,
    slide: m,
    loop: g,
    grabCursor: b,
    manipulation: w,
    events: E,
    breakpoints: T,
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.isLocked;
        this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
        a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" "));
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" "));
      }
    },
    images: {
      loadImage: function loadImage(e, i, s, a, r, n) {
        var o;

        function l() {
          n && n();
        }

        e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      z = {},
      k = function (e) {
    function t() {
      for (var i, a, r, n = [], o = arguments.length; o--;) {
        n[o] = arguments[o];
      }

      1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function (e) {
        Object.keys(M[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = M[e][i]);
        });
      });
      var l = this;
      void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];

        if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];
          if ("object" != _typeof(s)) return;
          if (!(i in r && "enabled" in s)) return;
          !0 === r[i] && (r[i] = {
            enabled: !0
          }), "object" != _typeof(r[i]) || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
            enabled: !1
          });
        }
      });
      var p = d.extend({}, C);
      l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
      var c = s(l.params.el);

      if (a = c[0]) {
        if (c.length > 1) {
          var u = [];
          return c.each(function (e, i) {
            var s = d.extend({}, r, {
              el: i
            });
            u.push(new t(s));
          }), u;
        }

        a.swiper = l, c.data("swiper", l);
        var v,
            f,
            m = c.children("." + l.params.wrapperClass);
        return d.extend(l, {
          $el: c,
          el: a,
          $wrapperEl: m,
          wrapperEl: m[0],
          classNames: [],
          slides: s(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === l.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === l.params.direction;
          },
          rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
          rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
          wrongRTL: "-webkit-box" === m.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
            start: v[0],
            move: v[1],
            end: v[2]
          }, l.touchEventsDesktop = {
            start: f[0],
            move: f[1],
            end: f[2]
          }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video",
            lastClickTime: d.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), l.useModules(), l.params.init && l.init(), l;
      }
    }

    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
    var i = {
      extendedDefaults: {
        configurable: !0
      },
      defaults: {
        configurable: !0
      },
      Class: {
        configurable: !0
      },
      $: {
        configurable: !0
      }
    };
    return t.prototype.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) {
          t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
        }

        for (var d = a - 1; d >= 0; d -= 1) {
          t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
        }
      } else for (var h = a + 1; h < t.length; h += 1) {
        i[h] - i[a] < s && (r += 1);
      }

      return r;
    }, t.prototype.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, t.prototype.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, t.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          n = i.slides;
      return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null);
    }, t.extendDefaults = function (e) {
      d.extend(z, e);
    }, i.extendedDefaults.get = function () {
      return z;
    }, i.defaults.get = function () {
      return C;
    }, i.Class.get = function () {
      return e;
    }, i.$.get = function () {
      return s;
    }, Object.defineProperties(t, i), t;
  }(p),
      P = {
    name: "device",
    proto: {
      device: y
    },
    "static": {
      device: y
    }
  },
      $ = {
    name: "support",
    proto: {
      support: h
    },
    "static": {
      support: h
    }
  },
      L = {
    name: "browser",
    proto: {
      browser: S
    },
    "static": {
      browser: S
    }
  },
      I = {
    name: "resize",
    create: function create() {
      var e = this;
      d.extend(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init() {
        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  },
      D = {
    func: t.MutationObserver || t.WebkitMutationObserver,
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = this,
          s = new (0, D.func)(function (e) {
        e.forEach(function (e) {
          i.emit("observerUpdate", e);
        });
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(s);
    },
    init: function init() {
      if (h.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: !1
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      O = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1
    },
    create: function create() {
      d.extend(this, {
        observer: {
          init: D.init.bind(this),
          attach: D.attach.bind(this),
          destroy: D.destroy.bind(this),
          observers: []
        }
      });
    },
    on: {
      init: function init() {
        this.observer.init();
      },
      destroy: function destroy() {
        this.observer.destroy();
      }
    }
  },
      A = {
    update: function update(e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.virtual,
          o = n.from,
          l = n.to,
          h = n.slides,
          p = n.slidesGrid,
          c = n.renderSlide,
          u = n.offset;
      t.updateActiveIndex();
      var v,
          f,
          m,
          g = t.activeIndex || 0;
      v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
      var b = Math.max((g || 0) - m, 0),
          w = Math.min((g || 0) + f, h.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

      function x() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (d.extend(t.virtual, {
        from: b,
        to: w,
        offset: y,
        slidesGrid: t.slidesGrid
      }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: y,
        from: b,
        to: w,
        slides: function () {
          for (var e = [], t = b; t <= w; t += 1) {
            e.push(h[t]);
          }

          return e;
        }()
      }), void x();
      var E = [],
          T = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var S = o; S <= l; S += 1) {
        (S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
      }

      for (var C = 0; C < h.length; C += 1) {
        C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
      }

      T.forEach(function (e) {
        t.$wrapperEl.append(c(h[e], e));
      }), E.sort(function (e, t) {
        return e < t;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(c(h[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
    },
    appendSlide: function appendSlide(e) {
      this.virtual.slides.push(e), this.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
        var t = this.virtual.cache,
            i = {};
        Object.keys(t).forEach(function (e) {
          i[e + 1] = t[e];
        }), this.virtual.cache = i;
      }

      this.virtual.update(!0), this.slideNext(0);
    }
  },
      G = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null
      }
    },
    create: function create() {
      d.extend(this, {
        virtual: {
          update: A.update.bind(this),
          appendSlide: A.appendSlide.bind(this),
          prependSlide: A.prependSlide.bind(this),
          renderSlide: A.renderSlide.bind(this),
          slides: this.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if (this.params.virtual.enabled) {
          this.classNames.push(this.params.containerModifierClass + "virtual");
          var e = {
            watchSlidesProgress: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  },
      H = {
    handle: function handle(i) {
      var s = this.rtlTranslate,
          a = i;
      a.originalEvent && (a = a.originalEvent);
      var r = a.keyCode || a.charCode;
      if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
          var n = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
          s && (d.left -= this.$el[0].scrollLeft);

          for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
            var c = h[p];
            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
          }

          if (!n) return;
        }

        this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r);
      }
    },
    enable: function enable() {
      this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      N = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function create() {
      d.extend(this, {
        keyboard: {
          enabled: !1,
          enable: H.enable.bind(this),
          disable: H.disable.bind(this),
          handle: H.handle.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.keyboard.enabled && this.keyboard.enable();
      },
      destroy: function destroy() {
        this.keyboard.enabled && this.keyboard.disable();
      }
    }
  };

  var B = {
    lastScrollTime: d.now(),
    event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
      var t = ("onwheel" in e);

      if (!t) {
        var i = e.createElement("div");
        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
      }

      return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
    }() ? "wheel" : "mousewheel",
    normalize: function normalize(e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var i = e,
          s = this,
          a = s.params.mousewheel;
      if (!s.mouseEntered && !a.releaseOnEdges) return !0;
      i.originalEvent && (i = i.originalEvent);
      var r = 0,
          n = s.rtlTranslate ? -1 : 1,
          o = B.normalize(i);
      if (a.forceToAxis) {
        if (s.isHorizontal()) {
          if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
          r = o.pixelX * n;
        } else {
          if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
          r = o.pixelY;
        }
      } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
      if (0 === r) return !0;

      if (a.invert && (r = -r), s.params.freeMode) {
        s.params.loop && s.loopFix();
        var l = s.getTranslate() + r * a.sensitivity,
            h = s.isBeginning,
            p = s.isEnd;
        if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () {
          s.slideToClosest();
        }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0;
      } else {
        if (d.now() - s.mousewheel.lastScrollTime > 60) if (r < 0) {
          if (s.isEnd && !s.params.loop || s.animating) {
            if (a.releaseOnEdges) return !0;
          } else s.slideNext(), s.emit("scroll", i);
        } else if (s.isBeginning && !s.params.loop || s.animating) {
          if (a.releaseOnEdges) return !0;
        } else s.slidePrev(), s.emit("scroll", i);
        s.mousewheel.lastScrollTime = new t.Date().getTime();
      }

      return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1;
    },
    enable: function enable() {
      if (!B.event) return !1;
      if (this.mousewheel.enabled) return !1;
      var e = this.$el;
      return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      if (!B.event) return !1;
      if (!this.mousewheel.enabled) return !1;
      var e = this.$el;
      return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      X = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    init: function init() {
      var e,
          t,
          i = this,
          a = i.params.navigation;
      (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function (e) {
        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext();
      }), t && t.length > 0 && t.on("click", function (e) {
        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev();
      }), d.extend(i.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Y = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var o,
              l,
              d,
              h = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
            var r = s(a),
                n = r.index();
            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
            for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) {
              h.eq(u).addClass(t.bulletActiveClass + "-main");
            }

            p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
          }

          if (t.dynamicBullets) {
            var v = Math.min(h.length, t.dynamicMainBullets + 4),
                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                m = e ? "right" : "left";
            h.css(this.isHorizontal() ? m : "top", f + "px");
          }
        }

        if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
          var g;
          g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var b = (i + 1) / n,
              w = 1,
              y = 1;
          "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = s(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = s(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), d.extend(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      V = {
    setTranslate: function setTranslate() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize;
      t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
        i.css("opacity", 0), i.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && {
          passive: !1,
          capture: !1
        },
            o = !(!h.passiveListener || !a.passiveListener) && {
          passive: !0,
          capture: !1
        };
        h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    },
    disableDraggable: function disableDraggable() {
      if (this.params.scrollbar.el) {
        var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && {
          passive: !1,
          capture: !1
        },
            o = !(!h.passiveListener || !a.passiveListener) && {
          passive: !0,
          capture: !1
        };
        h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    },
    init: function init() {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
        var r = a.find("." + this.params.scrollbar.dragClass);
        0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
          $el: a,
          el: a[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      R = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");

      if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
        var p = h - (h - 1) * (1 - Math.abs(t));
        a[0].style.opacity = p;
      }

      if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
        var c = d - (d - 1) * (1 - Math.abs(t));
        a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        e.parallax.setTransform(i, a);
      }), i.each(function (t, i) {
        var n = i.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
          e.parallax.setTransform(i, n);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (r = 0), a.transition(r);
      });
    }
  },
      F = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;

      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (!h.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e);
      }

      s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (!h.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }

      s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image;
      i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
        0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = o, i.currentY = d;
        var p = i.width * e.scale,
            c = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;
      (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
    },
    out: function out() {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    enable: function enable() {
      var e = this.zoom;

      if (!e.enabled) {
        e.enabled = !0;
        var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
      }
    },
    disable: function disable() {
      var e = this.zoom;

      if (e.enabled) {
        this.zoom.enabled = !1;
        var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
      }
    }
  },
      W = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var i = this,
          a = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
        !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
          var o = s(n);
          o.addClass(a.loadingClass);
          var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");
          i.loadImage(o[0], d || l, h, p, !1, function () {
            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
              if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                var e = r.attr("data-swiper-slide-index");

                if (r.hasClass(i.params.slideDuplicateClass)) {
                  var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(s.index(), !1);
                } else {
                  var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(n.index(), !1);
                }
              }

              i.emit("lazyImageReady", r[0], o[0]);
            }
          }), i.emit("lazyImageLoad", r[0], o[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;

      function d(e) {
        if (n) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (a[e]) return !0;

        return !1;
      }

      function h(e) {
        return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
        var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
        e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = r; p < r + l; p += 1) {
        d(p) && e.lazy.loadInSlide(p);
      } else e.lazy.loadInSlide(r);
      if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) {
          d(m) && e.lazy.loadInSlide(m);
        }

        for (var g = f; g < r; g += 1) {
          d(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var b = t.children("." + i.slideNextClass);
        b.length > 0 && e.lazy.loadInSlide(h(b));
        var w = t.children("." + i.slidePrevClass);
        w.length > 0 && e.lazy.loadInSlide(h(w));
      }
    }
  },
      q = {
    LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          o = function o(e, t) {
        for (s = -1, i = e.length; i - s > 1;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control;

      function n(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof k && n(r[o]);
      } else r instanceof k && t !== r && n(r);
    },
    setTransition: function setTransition(e, t) {
      var i,
          s = this,
          a = s.controller.control;

      function r(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
          a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) {
        a[i] !== t && a[i] instanceof k && r(a[i]);
      } else a instanceof k && t !== a && r(a);
    }
  },
      j = {
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = s(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      if (!this.params.loop) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
        var r = s(a);
        e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
      });
    },
    init: function init() {
      this.$el.append(this.a11y.liveRegion);
      var e,
          t,
          i = this.params.a11y;
      this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      K = {
    init: function init() {
      if (this.params.history) {
        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var e = this.history;
        e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues() {
      var e = t.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = e.length;
      return {
        key: e[i - 2],
        value: e[i - 1]
      };
    },
    setHistory: function setHistory(e, i) {
      if (this.history.initialized && this.params.history.enabled) {
        var s = this.slides.eq(i),
            a = K.slugify(s.attr("data-history"));
        t.location.pathname.includes(e) || (a = e + "/" + a);
        var r = t.history.state;
        r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
          value: a
        }, null, a) : t.history.pushState({
          value: a
        }, null, a));
      }
    },
    slugify: function slugify(e) {
      return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      U = {
    onHashCange: function onHashCange() {
      var t = e.location.hash.replace("#", "");
      t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
    },
    setHash: function setHash() {
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || 0);else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        e.location.hash = s || "";
      }
    },
    init: function init() {
      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var i = e.location.hash.replace("#", "");
        if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
          var n = this.slides.eq(a);

          if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      _ = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, i);
    },
    start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function stop() {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    }
  },
      Z = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              s.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      Q = {
    setTranslate: function setTranslate() {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: r + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var u = 0; u < a.length; u += 1) {
        var v = a.eq(u),
            f = u;
        p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var m = 90 * f,
            g = Math.floor(m / 360);
        o && (m = -m, g = Math.floor(-m / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
        f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
        var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";

        if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
          var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            k = d.shadowScale,
            P = d.shadowScale / z,
            $ = d.shadowOffset;
        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
      }
      var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      J = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var a = e.eq(i),
            r = a[0].progress;
        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
        var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;

        if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
          var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
          0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
        }

        a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              a.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      ee = {
    setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
        var f = i.eq(u),
            m = r[u],
            g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = o ? 0 : n.stretch * g,
            E = o ? n.stretch * g : 0;
        Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
        var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";

        if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
          var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
        }
      }

      (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      te = [P, $, L, I, O, G, N, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarged: "container"
      }
    },
    create: function create() {
      d.extend(this, {
        mousewheel: {
          enabled: !1,
          enable: B.enable.bind(this),
          disable: B.disable.bind(this),
          handle: B.handle.bind(this),
          handleMouseEnter: B.handleMouseEnter.bind(this),
          handleMouseLeave: B.handleMouseLeave.bind(this),
          lastScrollTime: d.now()
        }
      });
    },
    on: {
      init: function init() {
        this.params.mousewheel.enabled && this.mousewheel.enable();
      },
      destroy: function destroy() {
        this.mousewheel.enabled && this.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      d.extend(this, {
        navigation: {
          init: X.init.bind(this),
          update: X.update.bind(this),
          destroy: X.destroy.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.navigation.init(), this.navigation.update();
      },
      toEdge: function toEdge() {
        this.navigation.update();
      },
      fromEdge: function fromEdge() {
        this.navigation.update();
      },
      destroy: function destroy() {
        this.navigation.destroy();
      },
      click: function click(e) {
        var t = this.navigation,
            i = t.$nextEl,
            a = t.$prevEl;
        !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      d.extend(this, {
        pagination: {
          init: Y.init.bind(this),
          render: Y.render.bind(this),
          update: Y.update.bind(this),
          destroy: Y.destroy.bind(this),
          dynamicBulletIndex: 0
        }
      });
    },
    on: {
      init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      },
      snapIndexChange: function snapIndexChange() {
        this.params.loop || this.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange() {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange() {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      },
      destroy: function destroy() {
        this.pagination.destroy();
      },
      click: function click(e) {
        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      d.extend(this, {
        scrollbar: {
          init: V.init.bind(this),
          destroy: V.destroy.bind(this),
          updateSize: V.updateSize.bind(this),
          setTranslate: V.setTranslate.bind(this),
          setTransition: V.setTransition.bind(this),
          enableDraggable: V.enableDraggable.bind(this),
          disableDraggable: V.disableDraggable.bind(this),
          setDragPosition: V.setDragPosition.bind(this),
          onDragStart: V.onDragStart.bind(this),
          onDragMove: V.onDragMove.bind(this),
          onDragEnd: V.onDragEnd.bind(this),
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }
      });
    },
    on: {
      init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      },
      update: function update() {
        this.scrollbar.updateSize();
      },
      resize: function resize() {
        this.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      },
      destroy: function destroy() {
        this.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      d.extend(this, {
        parallax: {
          setTransform: R.setTransform.bind(this),
          setTranslate: R.setTranslate.bind(this),
          setTransition: R.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
      },
      init: function init() {
        this.params.parallax && this.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        this.params.parallax && this.parallax.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.params.parallax && this.parallax.setTransition(e);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this,
          t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
        t[i] = F[i].bind(e);
      }), d.extend(e, {
        zoom: t
      });
    },
    on: {
      init: function init() {
        this.params.zoom.enabled && this.zoom.enable();
      },
      destroy: function destroy() {
        this.zoom.disable();
      },
      touchStart: function touchStart(e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      },
      transitionEnd: function transitionEnd() {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      d.extend(this, {
        lazy: {
          initialImageLoaded: !1,
          load: W.load.bind(this),
          loadInSlide: W.loadInSlide.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      },
      init: function init() {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      },
      scroll: function scroll() {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      },
      resize: function resize() {
        this.params.lazy.enabled && this.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove() {
        this.params.lazy.enabled && this.lazy.load();
      },
      transitionStart: function transitionStart() {
        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
      },
      transitionEnd: function transitionEnd() {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      d.extend(this, {
        controller: {
          control: this.params.controller.control,
          getInterpolateFunction: q.getInterpolateFunction.bind(this),
          setTranslate: q.setTranslate.bind(this),
          setTransition: q.setTransition.bind(this)
        }
      });
    },
    on: {
      update: function update() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      resize: function resize() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      observerUpdate: function observerUpdate() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      },
      setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function create() {
      var e = this;
      d.extend(e, {
        a11y: {
          liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        }
      }), Object.keys(j).forEach(function (t) {
        e.a11y[t] = j[t].bind(e);
      });
    },
    on: {
      init: function init() {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      },
      toEdge: function toEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        this.params.a11y.enabled && this.a11y.updatePagination();
      },
      destroy: function destroy() {
        this.params.a11y.enabled && this.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      d.extend(this, {
        history: {
          init: K.init.bind(this),
          setHistory: K.setHistory.bind(this),
          setHistoryPopState: K.setHistoryPopState.bind(this),
          scrollToSlide: K.scrollToSlide.bind(this),
          destroy: K.destroy.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.history.enabled && this.history.init();
      },
      destroy: function destroy() {
        this.params.history.enabled && this.history.destroy();
      },
      transitionEnd: function transitionEnd() {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      d.extend(this, {
        hashNavigation: {
          initialized: !1,
          init: U.init.bind(this),
          destroy: U.destroy.bind(this),
          setHash: U.setHash.bind(this),
          onHashCange: U.onHashCange.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      },
      destroy: function destroy() {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd() {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      var e = this;
      d.extend(e, {
        autoplay: {
          running: !1,
          paused: !1,
          run: _.run.bind(e),
          start: _.start.bind(e),
          stop: _.stop.bind(e),
          pause: _.pause.bind(e),
          onTransitionEnd: function onTransitionEnd(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
          }
        }
      });
    },
    on: {
      init: function init() {
        this.params.autoplay.enabled && this.autoplay.start();
      },
      beforeTransitionStart: function beforeTransitionStart(e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove() {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      },
      destroy: function destroy() {
        this.autoplay.running && this.autoplay.stop();
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      d.extend(this, {
        fadeEffect: {
          setTranslate: Z.setTranslate.bind(this),
          setTransition: Z.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("fade" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "fade");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      d.extend(this, {
        cubeEffect: {
          setTranslate: Q.setTranslate.bind(this),
          setTransition: Q.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("cube" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function setTranslate() {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      d.extend(this, {
        flipEffect: {
          setTranslate: J.setTranslate.bind(this),
          setTransition: J.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("flip" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function setTranslate() {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      d.extend(this, {
        coverflowEffect: {
          setTranslate: ee.setTranslate.bind(this),
          setTransition: ee.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate() {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      }
    }
  }];
  return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k;
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
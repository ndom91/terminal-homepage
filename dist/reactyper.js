"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonjsHelpersD7ac2f = require("./common/_commonjsHelpers-d7ac2f15.js");

var _preactCompat = _interopRequireWildcard(require("/web_modules/preact-compat.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var lodash_split = (0, _commonjsHelpersD7ac2f.c)(function (module, exports) {
  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;
  /** Used as references for the maximum length and index of an array. */

  var MAX_ARRAY_LENGTH = 4294967295;
  /** `Object#toString` result references. */

  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      regexpTag = '[object RegExp]',
      symbolTag = '[object Symbol]';
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /** Used to compose unicode character classes. */

  var rsAstralRange = "\\ud800-\\udfff",
      rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
      rsComboSymbolsRange = "\\u20d0-\\u20f0",
      rsVarRange = "\\ufe0e\\ufe0f";
  /** Used to compose unicode capture groups. */

  var rsAstral = '[' + rsAstralRange + ']',
      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
      rsFitz = "\\ud83c[\\udffb-\\udfff]",
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      rsZWJ = "\\u200d";
  /** Used to compose unicode regexes. */

  var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = _typeof(_commonjsHelpersD7ac2f.a) == 'object' && _commonjsHelpersD7ac2f.a && _commonjsHelpersD7ac2f.a.Object === Object && _commonjsHelpersD7ac2f.a;
  /** Detect free variable `self`. */


  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /** Detect free variable `exports`. */

  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      return freeProcess && freeProcess.binding('util');
    } catch (e) {}
  }();
  /* Node.js helper references. */


  var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function asciiToArray(string) {
    return string.split('');
  }
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */


  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }
  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */


  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString = objectProto.toString;
  /** Built-in value references. */

  var _Symbol = root.Symbol;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  /**
   * The base implementation of `_.isRegExp` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   */

  function baseIsRegExp(value) {
    return isObject(value) && objectToString.call(value) == regexpTag;
  }
  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */


  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }

    end = end > length ? length : end;

    if (end < 0) {
      end += length;
    }

    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);

    while (++index < length) {
      result[index] = array[index + start];
    }

    return result;
  }
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */


  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }
  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */


  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */


  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */


  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }

    var type = _typeof(index);

    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }

    return false;
  }
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */


  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */


  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */


  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */


  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject(value) {
    var type = _typeof(value);

    return !!value && (type == 'object' || type == 'function');
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return !!value && _typeof(value) == 'object';
  }
  /**
   * Checks if `value` is classified as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */


  var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */


  function toString(value) {
    return value == null ? '' : baseToString(value);
  }
  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */


  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }

    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;

    if (!limit) {
      return [];
    }

    string = toString(string);

    if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
      separator = baseToString(separator);

      if (!separator && hasUnicode(string)) {
        return castSlice(stringToArray(string), 0, limit);
      }
    }

    return string.split(separator, limit);
  }

  module.exports = split;
});

var _r = function r(t, e) {
  return (_r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }
  })(t, e);
};

function i(t, e, n, r) {
  return new (n || (n = Promise))(function (i, s) {
    function a(t) {
      try {
        c(r.next(t));
      } catch (t) {
        s(t);
      }
    }

    function o(t) {
      try {
        c(r["throw"](t));
      } catch (t) {
        s(t);
      }
    }

    function c(t) {
      t.done ? i(t.value) : new n(function (e) {
        e(t.value);
      }).then(a, o);
    }

    c((r = r.apply(t, e || [])).next());
  });
}

function s(t, e) {
  var n,
      r,
      i,
      s,
      a = {
    label: 0,
    sent: function sent() {
      if (1 & i[0]) throw i[1];
      return i[1];
    },
    trys: [],
    ops: []
  };
  return s = {
    next: o(0),
    "throw": o(1),
    "return": o(2)
  }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
    return this;
  }), s;

  function o(s) {
    return function (o) {
      return function (s) {
        if (n) throw new TypeError("Generator is already executing.");

        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & s[0] ? r["return"] : s[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;

            switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
              case 0:
              case 1:
                i = s;
                break;

              case 4:
                return a.label++, {
                  value: s[1],
                  done: !1
                };

              case 5:
                a.label++, r = s[1], s = [0];
                continue;

              case 7:
                s = a.ops.pop(), a.trys.pop();
                continue;

              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  a = 0;
                  continue;
                }

                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                  a.label = s[1];
                  break;
                }

                if (6 === s[0] && a.label < i[1]) {
                  a.label = i[1], i = s;
                  break;
                }

                if (i && a.label < i[2]) {
                  a.label = i[2], a.ops.push(s);
                  break;
                }

                i[2] && a.ops.pop(), a.trys.pop();
                continue;
            }

            s = e.call(t, a);
          } catch (t) {
            s = [6, t], r = 0;
          } finally {
            n = i = 0;
          }
        }

        if (5 & s[0]) throw s[1];
        return {
          value: s[0] ? s[1] : void 0,
          done: !0
        };
      }([s, o]);
    };
  }
}

function a(t, e) {
  void 0 === e && (e = {});
  var n = e.insertAt;

  if (t && "undefined" != typeof document) {
    var r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
    i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
}

function Caret(e) {
  var n = e.animation;
  return _preactCompat["default"].createElement("span", {
    className: "reactyper-caret " + n
  });
}

a("@-webkit-keyframes blink {\n  50% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes blink {\n  50% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@-webkit-keyframes smooth {\n  0%, 20% { opacity: 1; }\n  60%, 100% { opacity: 0; }\n}\n\n@keyframes smooth {\n  0%, 20% { opacity: 1; }\n  60%, 100% { opacity: 0; }\n}\n\n.reactyper-caret {\n  display: inline-block;\n  width: 1px;\n  background-color: black;\n}\n\n.reactyper-caret:empty:before {\n  content: '\\200b';\n}\n\n.blink {\n  -webkit-animation: blink 1s step-start 0s infinite;\n          animation: blink 1s step-start 0s infinite;\n}\n\n.smooth {\n  -webkit-animation: smooth 0.5s ease-in-out 0s infinite alternate;\n          animation: smooth 0.5s ease-in-out 0s infinite alternate;\n}");

function Character(e) {
  var n = e.value,
      r = e.status;
  return _preactCompat["default"].createElement("span", {
    className: "reactyper-char " + r
  }, n);
}

function o(t) {
  var e;

  if (t.length > 1) {
    for (var n = t.slice(), r = n.length - 1; r > 0; r--) {
      var i = Math.floor(Math.random() * (r + 1));
      e = [n[i], n[r]], n[r] = e[0], n[i] = e[1];
    }

    return n;
  }

  return t;
}

a(".reactyper-char {\n  display: inline-block;\n  white-space: pre-wrap;\n}\n\n.typed {\n  color: black;\n}\n\n.untyped, .erased {\n  display: none;\n}\n\n.selected {\n  display: inline-block;\n  background-color: #ACCEF7;\n  color: black;\n}");
a(".reactyper {\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 1.1;\n}");

var index_es = function (e) {
  function Typer(t) {
    var r = e.call(this, t) || this;
    r.safeSetState = function (t) {
      return new Promise(function (e) {
        return r.setState(t, e);
      });
    }, r.advanceSpool = function () {
      return i(r, void 0, void 0, function () {
        return s(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.safeSetState(function (t) {
                var e = t.spool,
                    r = t.spoolIndex + 1,
                    i = e[r];
                return {
                  spoolIndex: r,
                  currentWord: i,
                  currentChars: lodash_split(i, "")
                };
              })];

            case 1:
              return t.sent(), [2];
          }
        });
      });
    }, r.resetSpool = function () {
      return i(r, void 0, void 0, function () {
        return s(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.safeSetState(function (t, e) {
                var r = t.repeatCount,
                    i = e.shuffle,
                    s = e.spool,
                    a = i ? o(s) : s,
                    c = a[0];
                return {
                  repeatCount: r + 1,
                  spool: a,
                  spoolIndex: 0,
                  currentWord: c,
                  currentChars: lodash_split(c, "")
                };
              })];

            case 1:
              return t.sent(), [2];
          }
        });
      });
    }, r.shiftCaret = function (t) {
      return i(r, void 0, void 0, function () {
        return s(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.safeSetState(function (e) {
                return {
                  wordIndex: e.wordIndex + t
                };
              })];

            case 1:
              return e.sent(), [2];
          }
        });
      });
    }, r.startTyping = function (t) {
      void 0 === t && (t = !1);
      var e = r.props,
          n = e.preTypeDelay,
          a = e.typeDelay,
          o = window.setTimeout(function () {
        return i(r, void 0, void 0, function () {
          var e;
          return s(this, function (n) {
            switch (n.label) {
              case 0:
                return t ? [4, this.resetSpool()] : [3, 2];

              case 1:
                return n.sent(), [3, 4];

              case 2:
                return [4, this.advanceSpool()];

              case 3:
                n.sent(), n.label = 4;

              case 4:
                return [4, this.safeSetState({
                  typerState: "typing"
                })];

              case 5:
                return n.sent(), [4, this.typeStep()];

              case 6:
                return n.sent(), this.state.currentChars.length > 1 && (e = window.setInterval(this.typeStep, a), this.setState({
                  typerInterval: e
                })), [2];
            }
          });
        });
      }, n);
      r.setState({
        typerTimeout: o
      });
    }, r.typeStep = function () {
      return i(r, void 0, void 0, function () {
        var t, e, n, r, i;
        return s(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, this.shiftCaret(1)];

            case 1:
              return s.sent(), t = this.state, e = t.wordIndex, n = t.currentChars, r = e === n.length, i = n.slice(0, e).join(""), this.props.onType(i), r && this.finishTyping(), [2];
          }
        });
      });
    }, r.finishTyping = function () {
      return i(r, void 0, void 0, function () {
        var t, e, n, r, i, a, o, c, u, l, p, h;
        return s(this, function (s) {
          switch (s.label) {
            case 0:
              return t = this.props, e = t.onTyped, n = t.eraseOnComplete, r = t.repeats, i = this.state, a = i.spoolIndex, o = i.spool, c = i.currentWord, u = i.repeatCount, l = i.typerInterval, p = a === o.length - 1, h = u < r, clearInterval(l), e(c), [4, this.safeSetState({
                typerState: "idle"
              })];

            case 1:
              return s.sent(), p ? n || h ? [2, this.startErasing()] : [2, this.finish()] : (this.startErasing(), [2]);
          }
        });
      });
    }, r.startErasing = function () {
      return i(r, void 0, void 0, function () {
        var t,
            e,
            n,
            r,
            a,
            o = this;
        return s(this, function (c) {
          return t = this.props, e = t.preEraseDelay, n = t.eraseDelay, r = t.eraseStyle, a = window.setTimeout(function () {
            return i(o, void 0, void 0, function () {
              var t;
              return s(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.safeSetState({
                      typerState: "erasing"
                    })];

                  case 1:
                    return e.sent(), [4, this.eraseStep()];

                  case 2:
                    return e.sent(), !("select-all" === r || "clear" === r) && this.state.currentChars.length > 1 && (t = window.setInterval(this.eraseStep, n), this.setState({
                      typerInterval: t
                    })), [2];
                }
              });
            });
          }, e), this.setState({
            typerTimeout: a
          }), [2];
        });
      });
    }, r.eraseStep = function () {
      return i(r, void 0, void 0, function () {
        var t, e, n, r, i, a, o;
        return s(this, function (s) {
          switch (s.label) {
            case 0:
              return t = this.props.eraseStyle, e = "select-all" === t || "clear" === t, [4, this.shiftCaret(e ? -this.state.wordIndex : -1)];

            case 1:
              return s.sent(), n = this.state, r = n.wordIndex, i = n.currentChars, a = 0 === r, o = i.slice(0, r).join(""), this.props.onErase(o), a && this.finishErasing(), [2];
          }
        });
      });
    }, r.finishErasing = function () {
      return i(r, void 0, void 0, function () {
        var t, e, n, r, i, a, o, c, u, l, p;
        return s(this, function (s) {
          switch (s.label) {
            case 0:
              return t = this.props, e = t.repeats, n = t.onErased, r = this.state, i = r.spool, a = r.spoolIndex, o = r.currentWord, c = r.repeatCount, u = r.typerInterval, l = a === i.length - 1, p = c < e, clearInterval(u), n(o), [4, this.safeSetState({
                typerState: "idle"
              })];

            case 1:
              return s.sent(), l ? p ? [2, this.startTyping(!0)] : [2, this.finish()] : (this.startTyping(), [2]);
          }
        });
      });
    }, r.finish = function () {
      return i(r, void 0, void 0, function () {
        return s(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.safeSetState({
                typerState: "complete"
              })];

            case 1:
              return t.sent(), this.props.onFinish(), [2];
          }
        });
      });
    };
    var a = r.props,
        c = a.shuffle,
        u = a.spool,
        l = c ? o(u) : u;
    return r.state = {
      repeatCount: 0,
      spool: l.filter(function (t) {
        return 0 !== t.length;
      }),
      spoolIndex: -1,
      wordIndex: 0,
      currentWord: "",
      currentChars: [],
      typerState: "idle",
      typerTimeout: 0,
      typerInterval: 0
    }, r;
  }

  return function (t, e) {
    function n() {
      this.constructor = t;
    }

    _r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
  }(Typer, e), Typer.prototype.componentDidMount = function () {
    return i(this, void 0, void 0, function () {
      var t;
      return s(this, function (e) {
        switch (e.label) {
          case 0:
            return "typing" !== (t = this.props.initialAction) ? [3, 1] : (this.startTyping(), [3, 4]);

          case 1:
            return "erasing" !== t ? [3, 4] : [4, this.advanceSpool()];

          case 2:
            return e.sent(), [4, this.shiftCaret(this.state.currentWord.length)];

          case 3:
            e.sent(), this.startErasing(), e.label = 4;

          case 4:
            return [2];
        }
      });
    });
  }, Typer.prototype.componentWillUnmount = function () {
    var t = this.state,
        e = t.typerTimeout,
        n = t.typerInterval;
    clearInterval(e), clearInterval(n);
  }, Typer.prototype.render = function () {
    var e = this.state,
        n = e.currentChars,
        r = e.wordIndex,
        i = e.typerState,
        s = this.props.eraseStyle,
        a = n.slice(0, r),
        o = n.slice(r),
        c = "typing" === i,
        u = "complete" === i,
        l = "select" === s || "select-all" === s,
        p = l ? "selected" : "erased",
        h = "erasing" === i && l;
    return _preactCompat["default"].createElement("span", {
      className: "reactyper"
    }, a.map(function (e, n) {
      return _preactCompat["default"].createElement(Character, {
        key: n,
        value: e,
        status: "typed"
      });
    }), !(u || h) && _preactCompat["default"].createElement(Caret, {
      animation: this.props.caretAnimationStyle
    }), o.map(function (e, n) {
      return _preactCompat["default"].createElement(Character, {
        key: n,
        value: e,
        status: c ? "untyped" : p
      });
    }));
  }, Typer.defaultProps = {
    spool: ["React Typer"],
    repeats: 1 / 0,
    shuffle: !1,
    preTypeDelay: 70,
    typeDelay: 70,
    preEraseDelay: 2e3,
    eraseDelay: 250,
    initialAction: "typing",
    eraseOnComplete: !1,
    eraseStyle: "backspace",
    caretAnimationStyle: "blink",
    onType: function onType() {},
    onTyped: function onTyped() {},
    onErase: function onErase() {},
    onErased: function onErased() {},
    onFinish: function onFinish() {}
  }, Typer;
}(_preactCompat.Component);

var _default = index_es;
exports["default"] = _default;
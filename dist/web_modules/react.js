"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useDebugValue = exports.useContext = exports.useCallback = exports.unstable_Profiler = exports.unstable_ConcurrentMode = exports.memo = exports.lazy = exports.isValidElement = exports.forwardRef = exports.createRef = exports.createFactory = exports.createElement = exports.createContext = exports.cloneElement = exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = exports.Suspense = exports.StrictMode = exports.PureComponent = exports.Fragment = exports.Component = exports.Children = exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = function () {
  function N(a, b, d, g, p, c, e, h) {
    if (!a) {
      a = void 0;
      if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        var n = [d, g, p, c, e, h],
            f = 0;
        a = Error(b.replace(/%s/g, function () {
          return n[f++];
        }));
        a.name = "Invariant Violation";
      }
      a.framesToPop = 1;
      throw a;
    }
  }

  function q(a) {
    for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 0; g < b; g++) {
      d += "&args[]=" + encodeURIComponent(arguments[g + 1]);
    }

    N(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
  }

  function t(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = ba;
    this.updater = d || ca;
  }

  function da() {}

  function O(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = ba;
    this.updater = d || ca;
  }

  function u() {
    if (!x) {
      var a = c.expirationTime;
      C ? P() : C = !0;

      _D(ta, a);
    }
  }

  function Q() {
    var a = c,
        b = c.next;
    if (c === b) c = null;else {
      var d = c.previous;
      c = d.next = b;
      b.previous = d;
    }
    a.next = a.previous = null;
    d = a.callback;
    b = a.expirationTime;
    a = a.priorityLevel;
    var g = f,
        p = E;
    f = a;
    E = b;

    try {
      var n = d();
    } finally {
      f = g, E = p;
    }

    if ("function" === typeof n) if (n = {
      callback: n,
      priorityLevel: a,
      expirationTime: b,
      next: null,
      previous: null
    }, null === c) c = n.next = n.previous = n;else {
      d = null;
      a = c;

      do {
        if (a.expirationTime >= b) {
          d = a;
          break;
        }

        a = a.next;
      } while (a !== c);

      null === d ? d = c : d === c && (c = n, u());
      b = d.previous;
      b.next = d.previous = n;
      n.next = d;
      n.previous = b;
    }
  }

  function F() {
    if (-1 === k && null !== c && 1 === c.priorityLevel) {
      x = !0;

      try {
        do {
          Q();
        } while (null !== c && 1 === c.priorityLevel);
      } finally {
        x = !1, null !== c ? u() : C = !1;
      }
    }
  }

  function ta(a) {
    x = !0;
    var b = G;
    G = a;

    try {
      if (a) for (; null !== c;) {
        var d = l();

        if (c.expirationTime <= d) {
          do {
            Q();
          } while (null !== c && c.expirationTime <= d);
        } else break;
      } else if (null !== c) {
        do {
          Q();
        } while (null !== c && !H());
      }
    } finally {
      x = !1, G = b, null !== c ? u() : C = !1, F();
    }
  }

  function ea(a, b, d) {
    var g = void 0,
        p = {},
        c = null,
        e = null;
    if (null != b) for (g in void 0 !== b.ref && (e = b.ref), void 0 !== b.key && (c = "" + b.key), b) {
      fa.call(b, g) && !ha.hasOwnProperty(g) && (p[g] = b[g]);
    }
    var h = arguments.length - 2;
    if (1 === h) p.children = d;else if (1 < h) {
      for (var f = Array(h), k = 0; k < h; k++) {
        f[k] = arguments[k + 2];
      }

      p.children = f;
    }
    if (a && a.defaultProps) for (g in h = a.defaultProps, h) {
      void 0 === p[g] && (p[g] = h[g]);
    }
    return {
      $$typeof: y,
      type: a,
      key: c,
      ref: e,
      props: p,
      _owner: R.current
    };
  }

  function ua(a, b) {
    return {
      $$typeof: y,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }

  function S(a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === y;
  }

  function va(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + ("" + a).replace(/[=:]/g, function (a) {
      return b[a];
    });
  }

  function ia(a, b, d, g) {
    if (I.length) {
      var c = I.pop();
      c.result = a;
      c.keyPrefix = b;
      c.func = d;
      c.context = g;
      c.count = 0;
      return c;
    }

    return {
      result: a,
      keyPrefix: b,
      func: d,
      context: g,
      count: 0
    };
  }

  function ja(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > I.length && I.push(a);
  }

  function T(a, b, d, g) {
    var c = _typeof(a);

    if ("undefined" === c || "boolean" === c) a = null;
    var e = !1;
    if (null === a) e = !0;else switch (c) {
      case "string":
      case "number":
        e = !0;
        break;

      case "object":
        switch (a.$$typeof) {
          case y:
          case wa:
            e = !0;
        }

    }
    if (e) return d(g, a, "" === b ? "." + U(a, 0) : b), 1;
    e = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a)) for (var f = 0; f < a.length; f++) {
      c = a[f];
      var h = b + U(c, f);
      e += T(c, h, d, g);
    } else if (null === a || "object" !== _typeof(a) ? h = null : (h = ka && a[ka] || a["@@iterator"], h = "function" === typeof h ? h : null), "function" === typeof h) for (a = h.call(a), f = 0; !(c = a.next()).done;) {
      c = c.value, h = b + U(c, f++), e += T(c, h, d, g);
    } else "object" === c && (d = "" + a, q("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
    return e;
  }

  function V(a, b, d) {
    return null == a ? 0 : T(a, "", b, d);
  }

  function U(a, b) {
    return "object" === _typeof(a) && null !== a && null != a.key ? va(a.key) : b.toString(36);
  }

  function xa(a, b, d) {
    a.func.call(a.context, b, a.count++);
  }

  function ya(a, b, d) {
    var g = a.result,
        c = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a) ? W(a, g, d, function (a) {
      return a;
    }) : null != a && (S(a) && (a = ua(a, c + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(la, "$&/") + "/") + d)), g.push(a));
  }

  function W(a, b, d, g, c) {
    var e = "";
    null != d && (e = ("" + d).replace(la, "$&/") + "/");
    b = ia(b, e, g, c);
    V(a, ya, b);
    ja(b);
  }

  function m() {
    var a = ma.current;
    null === a ? q("321") : void 0;
    return a;
  }

  var e = "function" === typeof Symbol && Symbol["for"],
      y = e ? Symbol["for"]("react.element") : 60103,
      wa = e ? Symbol["for"]("react.portal") : 60106,
      r = e ? Symbol["for"]("react.fragment") : 60107,
      X = e ? Symbol["for"]("react.strict_mode") : 60108,
      za = e ? Symbol["for"]("react.profiler") : 60114,
      Aa = e ? Symbol["for"]("react.provider") : 60109,
      Ba = e ? Symbol["for"]("react.context") : 60110,
      Ca = e ? Symbol["for"]("react.concurrent_mode") : 60111,
      Da = e ? Symbol["for"]("react.forward_ref") : 60112,
      Ea = e ? Symbol["for"]("react.suspense") : 60113,
      Fa = e ? Symbol["for"]("react.memo") : 60115,
      Ga = e ? Symbol["for"]("react.lazy") : 60116,
      ka = "function" === typeof Symbol && Symbol.iterator,
      na = Object.getOwnPropertySymbols,
      Ha = Object.prototype.hasOwnProperty,
      Ia = Object.prototype.propertyIsEnumerable,
      J = function () {
    try {
      if (!Object.assign) return !1;
      var a = new String("abc");
      a[5] = "de";
      if ("5" === Object.getOwnPropertyNames(a)[0]) return !1;
      var b = {};

      for (a = 0; 10 > a; a++) {
        b["_" + String.fromCharCode(a)] = a;
      }

      if ("0123456789" !== Object.getOwnPropertyNames(b).map(function (a) {
        return b[a];
      }).join("")) return !1;
      var d = {};
      "abcdefghijklmnopqrst".split("").forEach(function (a) {
        d[a] = a;
      });
      return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, d)).join("") ? !1 : !0;
    } catch (g) {
      return !1;
    }
  }() ? Object.assign : function (a, b) {
    if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
    var d = Object(a);

    for (var c, e = 1; e < arguments.length; e++) {
      var f = Object(arguments[e]);

      for (var k in f) {
        Ha.call(f, k) && (d[k] = f[k]);
      }

      if (na) {
        c = na(f);

        for (var h = 0; h < c.length; h++) {
          Ia.call(f, c[h]) && (d[c[h]] = f[c[h]]);
        }
      }
    }

    return d;
  },
      ca = {
    isMounted: function isMounted(a) {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b, d) {},
    enqueueReplaceState: function enqueueReplaceState(a, b, d, c) {},
    enqueueSetState: function enqueueSetState(a, b, d, c) {}
  },
      ba = {};
  t.prototype.isReactComponent = {};

  t.prototype.setState = function (a, b) {
    "object" !== _typeof(a) && "function" !== typeof a && null != a ? q("85") : void 0;
    this.updater.enqueueSetState(this, a, b, "setState");
  };

  t.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };

  da.prototype = t.prototype;
  e = O.prototype = new da();
  e.constructor = O;
  J(e, t.prototype);
  e.isPureReactComponent = !0;

  var c = null,
      G = !1,
      f = 3,
      k = -1,
      E = -1,
      x = !1,
      C = !1,
      Ja = Date,
      Ka = "function" === typeof setTimeout ? setTimeout : void 0,
      La = "function" === typeof clearTimeout ? clearTimeout : void 0,
      oa = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
      pa = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0,
      qa,
      ra,
      Y = function Y(a) {
    qa = oa(function (b) {
      La(ra);
      a(b);
    });
    ra = Ka(function () {
      pa(qa);
      a(l());
    }, 100);
  };

  if ("object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now) {
    var Ma = performance;

    var l = function l() {
      return Ma.now();
    };
  } else l = function l() {
    return Ja.now();
  };

  e = null;
  "undefined" !== typeof window ? e = window : "undefined" !== typeof global && (e = global);

  if (e && e._schedMock) {
    e = e._schedMock;
    var _D = e[0];
    var P = e[1];
    var H = e[2];
    l = e[3];
  } else if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var v = null,
        Na = function Na(a) {
      if (null !== v) try {
        v(a);
      } finally {
        v = null;
      }
    };

    _D = function D(a, b) {
      null !== v ? setTimeout(_D, 0, a) : (v = a, setTimeout(Na, 0, !1));
    };

    P = function P() {
      v = null;
    };

    H = function H() {
      return !1;
    };
  } else {
    "undefined" !== typeof console && ("function" !== typeof oa && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof pa && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
    var w = null,
        K = !1,
        z = -1,
        A = !1,
        Z = !1,
        L = 0,
        M = 33,
        B = 33;

    H = function H() {
      return L <= l();
    };

    e = new MessageChannel();
    var sa = e.port2;

    e.port1.onmessage = function (a) {
      K = !1;
      a = w;
      var b = z;
      w = null;
      z = -1;
      var d = l(),
          c = !1;
      if (0 >= L - d) if (-1 !== b && b <= d) c = !0;else {
        A || (A = !0, Y(aa));
        w = a;
        z = b;
        return;
      }

      if (null !== a) {
        Z = !0;

        try {
          a(c);
        } finally {
          Z = !1;
        }
      }
    };

    var aa = function aa(a) {
      if (null !== w) {
        Y(aa);
        var b = a - L + B;
        b < B && M < B ? (8 > b && (b = 8), B = b < M ? M : b) : M = b;
        L = a + B;
        K || (K = !0, sa.postMessage(void 0));
      } else A = !1;
    };

    _D = function _D(a, b) {
      w = a;
      z = b;
      Z || 0 > b ? sa.postMessage(void 0) : A || (A = !0, Y(aa));
    };

    P = function P() {
      w = null;
      K = !1;
      z = -1;
    };
  }

  var Oa = 0,
      ma = {
    current: null
  },
      R = {
    current: null
  };
  e = {
    ReactCurrentDispatcher: ma,
    ReactCurrentOwner: R,
    assign: J
  };
  J(e, {
    Scheduler: {
      unstable_cancelCallback: function unstable_cancelCallback(a) {
        var b = a.next;

        if (null !== b) {
          if (b === a) c = null;else {
            a === c && (c = b);
            var d = a.previous;
            d.next = b;
            b.previous = d;
          }
          a.next = a.previous = null;
        }
      },
      unstable_shouldYield: function unstable_shouldYield() {
        return !G && (null !== c && c.expirationTime < E || H());
      },
      unstable_now: l,
      unstable_scheduleCallback: function unstable_scheduleCallback(a, b) {
        var d = -1 !== k ? k : l();
        if ("object" === _typeof(b) && null !== b && "number" === typeof b.timeout) b = d + b.timeout;else switch (f) {
          case 1:
            b = d + -1;
            break;

          case 2:
            b = d + 250;
            break;

          case 5:
            b = d + 1073741823;
            break;

          case 4:
            b = d + 1E4;
            break;

          default:
            b = d + 5E3;
        }
        a = {
          callback: a,
          priorityLevel: f,
          expirationTime: b,
          next: null,
          previous: null
        };
        if (null === c) c = a.next = a.previous = a, u();else {
          d = null;
          var g = c;

          do {
            if (g.expirationTime > b) {
              d = g;
              break;
            }

            g = g.next;
          } while (g !== c);

          null === d ? d = c : d === c && (c = a, u());
          b = d.previous;
          b.next = d.previous = a;
          a.next = d;
          a.previous = b;
        }
        return a;
      },
      unstable_runWithPriority: function unstable_runWithPriority(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;

          default:
            a = 3;
        }

        var d = f,
            c = k;
        f = a;
        k = l();

        try {
          return b();
        } finally {
          f = d, k = c, F();
        }
      },
      unstable_next: function unstable_next(a) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;

          default:
            b = f;
        }

        var d = f,
            c = k;
        f = b;
        k = l();

        try {
          return a();
        } finally {
          f = d, k = c, F();
        }
      },
      unstable_wrapCallback: function unstable_wrapCallback(a) {
        var b = f;
        return function () {
          var d = f,
              c = k;
          f = b;
          k = l();

          try {
            return a.apply(this, arguments);
          } finally {
            f = d, k = c, F();
          }
        };
      },
      unstable_getFirstCallbackNode: function unstable_getFirstCallbackNode() {
        return c;
      },
      unstable_pauseExecution: function unstable_pauseExecution() {},
      unstable_continueExecution: function unstable_continueExecution() {
        null !== c && u();
      },
      unstable_getCurrentPriorityLevel: function unstable_getCurrentPriorityLevel() {
        return f;
      },
      unstable_IdlePriority: 5,
      unstable_ImmediatePriority: 1,
      unstable_LowPriority: 4,
      unstable_NormalPriority: 3,
      unstable_UserBlockingPriority: 2
    },
    SchedulerTracing: {
      __interactionsRef: null,
      __subscriberRef: null,
      unstable_clear: function unstable_clear(a) {
        return a();
      },
      unstable_getCurrent: function unstable_getCurrent() {
        return null;
      },
      unstable_getThreadID: function unstable_getThreadID() {
        return ++Oa;
      },
      unstable_subscribe: function unstable_subscribe(a) {},
      unstable_trace: function unstable_trace(a, b, d) {
        return d();
      },
      unstable_unsubscribe: function unstable_unsubscribe(a) {},
      unstable_wrap: function unstable_wrap(a) {
        return a;
      }
    }
  });
  var fa = Object.prototype.hasOwnProperty,
      ha = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  },
      la = /\/+/g,
      I = [];
  r = {
    Children: {
      map: function map(a, b, d) {
        if (null == a) return a;
        var c = [];
        W(a, c, null, b, d);
        return c;
      },
      forEach: function forEach(a, b, d) {
        if (null == a) return a;
        b = ia(null, null, b, d);
        V(a, xa, b);
        ja(b);
      },
      count: function count(a) {
        return V(a, function () {
          return null;
        }, null);
      },
      toArray: function toArray(a) {
        var b = [];
        W(a, b, null, function (a) {
          return a;
        });
        return b;
      },
      only: function only(a) {
        S(a) ? void 0 : q("143");
        return a;
      }
    },
    createRef: function createRef() {
      return {
        current: null
      };
    },
    Component: t,
    PureComponent: O,
    createContext: function createContext(a, b) {
      void 0 === b && (b = null);
      a = {
        $$typeof: Ba,
        _calculateChangedBits: b,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      a.Provider = {
        $$typeof: Aa,
        _context: a
      };
      return a.Consumer = a;
    },
    forwardRef: function forwardRef(a) {
      return {
        $$typeof: Da,
        render: a
      };
    },
    lazy: function lazy(a) {
      return {
        $$typeof: Ga,
        _ctor: a,
        _status: -1,
        _result: null
      };
    },
    memo: function memo(a, b) {
      return {
        $$typeof: Fa,
        type: a,
        compare: void 0 === b ? null : b
      };
    },
    useCallback: function useCallback(a, b) {
      return m().useCallback(a, b);
    },
    useContext: function useContext(a, b) {
      return m().useContext(a, b);
    },
    useEffect: function useEffect(a, b) {
      return m().useEffect(a, b);
    },
    useImperativeHandle: function useImperativeHandle(a, b, d) {
      return m().useImperativeHandle(a, b, d);
    },
    useDebugValue: function useDebugValue(a, b) {},
    useLayoutEffect: function useLayoutEffect(a, b) {
      return m().useLayoutEffect(a, b);
    },
    useMemo: function useMemo(a, b) {
      return m().useMemo(a, b);
    },
    useReducer: function useReducer(a, b, d) {
      return m().useReducer(a, b, d);
    },
    useRef: function useRef(a) {
      return m().useRef(a);
    },
    useState: function useState(a) {
      return m().useState(a);
    },
    Fragment: r,
    StrictMode: X,
    Suspense: Ea,
    createElement: ea,
    cloneElement: function cloneElement(a, b, d) {
      null === a || void 0 === a ? q("267", a) : void 0;
      var c = void 0,
          e = J({}, a.props),
          f = a.key,
          k = a.ref,
          h = a._owner;

      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = R.current);
        void 0 !== b.key && (f = "" + b.key);
        var l = void 0;
        a.type && a.type.defaultProps && (l = a.type.defaultProps);

        for (c in b) {
          fa.call(b, c) && !ha.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
        }
      }

      c = arguments.length - 2;
      if (1 === c) e.children = d;else if (1 < c) {
        l = Array(c);

        for (var m = 0; m < c; m++) {
          l[m] = arguments[m + 2];
        }

        e.children = l;
      }
      return {
        $$typeof: y,
        type: a.type,
        key: f,
        ref: k,
        props: e,
        _owner: h
      };
    },
    createFactory: function createFactory(a) {
      var b = ea.bind(null, a);
      b.type = a;
      return b;
    },
    isValidElement: S,
    version: "16.8.6",
    unstable_ConcurrentMode: Ca,
    unstable_Profiler: za,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: e
  };
  r = (X = {
    "default": r
  }, r) || X;
  return r["default"] || r;
}();

var Children = React.Children,
    createRef = React.createRef,
    Component = React.Component,
    PureComponent = React.PureComponent,
    createContext = React.createContext,
    forwardRef = React.forwardRef,
    lazy = React.lazy,
    memo = React.memo,
    useCallback = React.useCallback,
    useContext = React.useContext,
    useEffect = React.useEffect,
    useImperativeHandle = React.useImperativeHandle,
    useDebugValue = React.useDebugValue,
    useLayoutEffect = React.useLayoutEffect,
    useMemo = React.useMemo,
    useReducer = React.useReducer,
    useRef = React.useRef,
    useState = React.useState,
    Fragment = React.Fragment,
    StrictMode = React.StrictMode,
    Suspense = React.Suspense,
    createElement = React.createElement,
    cloneElement = React.cloneElement,
    createFactory = React.createFactory,
    isValidElement = React.isValidElement,
    version = React.version,
    unstable_ConcurrentMode = React.unstable_ConcurrentMode,
    unstable_Profiler = React.unstable_Profiler,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
exports.unstable_Profiler = unstable_Profiler;
exports.unstable_ConcurrentMode = unstable_ConcurrentMode;
exports.version = version;
exports.isValidElement = isValidElement;
exports.createFactory = createFactory;
exports.cloneElement = cloneElement;
exports.createElement = createElement;
exports.Suspense = Suspense;
exports.StrictMode = StrictMode;
exports.Fragment = Fragment;
exports.useState = useState;
exports.useRef = useRef;
exports.useReducer = useReducer;
exports.useMemo = useMemo;
exports.useLayoutEffect = useLayoutEffect;
exports.useDebugValue = useDebugValue;
exports.useImperativeHandle = useImperativeHandle;
exports.useEffect = useEffect;
exports.useContext = useContext;
exports.useCallback = useCallback;
exports.memo = memo;
exports.lazy = lazy;
exports.forwardRef = forwardRef;
exports.createContext = createContext;
exports.PureComponent = PureComponent;
exports.Component = Component;
exports.createRef = createRef;
exports.Children = Children;
var _default = React;
exports["default"] = _default;
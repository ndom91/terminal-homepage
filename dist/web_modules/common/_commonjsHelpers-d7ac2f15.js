"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.c = createCommonjsModule;
exports.u = unwrapExports;
exports.a = void 0;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
exports.a = commonjsGlobal;

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
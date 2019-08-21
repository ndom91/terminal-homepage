var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // @ts-ignore


import { Component, h } from "../web_modules/preact.js"; // @ts-ignore

import picostyle from "../web_modules/picostyle.js"; // @ts-ignore

import Typer from "../web_modules/reactyper.js"; // @ts-ignore

var ps = picostyle(h);
var Container = ps('div')({
  display: 'flex'
});

var App =
/** @class */
function (_super) {
  __extends(App, _super);

  function App() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  App.prototype.render = function () {
    return h("div", null, h(Container, {
      id: "console"
    }, h(Typer, {
      spool: ['🎉 ReacTyper']
    })));
  };

  return App;
}(Component);

export default App;
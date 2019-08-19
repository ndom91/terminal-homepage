// @ts-ignore
import { Component, h } from '/web_modules/preact.js';
// @ts-ignore
// import picostyle from '/web_modules/picostyle.js'
import Console from './Console.js';
export default class App extends Component {
    render() {
        return (h("div", { className: "terminal-window" },
            h("header", null,
                h("div", { className: "button red" }),
                h("div", { className: "button yellow" }),
                h("div", { className: "button green" })),
            h(Console, null)));
    }
}
//# sourceMappingURL=Terminal.js.map
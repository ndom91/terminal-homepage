// @ts-ignore
import { Component, h } from '/web_modules/preact.js';
// @ts-ignore
import picostyle from '/web_modules/picostyle.js';
// @ts-ignore
import Typer from '/web_modules/reactyper.js';
const ps = picostyle(h);
const Container = ps('div')({
    display: 'flex'
});
export default class App extends Component {
    render() {
        return (h("div", null,
            h(Container, { id: "console" },
                h(Typer, { spool: ['etsttttt!'] }))));
    }
}
//# sourceMappingURL=Console.js.map
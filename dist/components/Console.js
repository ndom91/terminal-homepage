// @ts-ignore
import { Component, h } from '/web_modules/preact.js';
// @ts-ignore
import picostyle from '/web_modules/picostyle.js';
const ps = picostyle(h);
const Container = ps('div')({
    display: 'flex'
});
export default class App extends Component {
    render() {
        return h(Container, { id: "console" });
    }
}
//# sourceMappingURL=Console.js.map
// @ts-ignore
import { Component, h } from '/web_modules/preact.js';
// @ts-ignore
import picostyle from '/web_modules/picostyle.js';
// import Terminal from './Terminal'
const ps = picostyle(h);
const Wrapper = ps('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
});
export default class App extends Component {
    render() {
        return (h(Wrapper, null,
            h("div", { className: "app" },
                h(Header, { name: `ToDo` }),
                h("button", { className: "btn" }, "\u2728 Add Item"),
                h(Footer, null, "footer content here"))));
    }
}
const Header = ({ name = '' }) => (h("header", null,
    h("h2", null,
        name,
        " List")));
const Footer = props => h("footer", Object.assign({}, props));
//# sourceMappingURL=App.js.map
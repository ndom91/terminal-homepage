// @ts-ignore
import { Component, render, h } from '/web_modules/preact.js';
// @ts-ignore
import picostyle from '/web_modules/picostyle.js';
import Terminal from './components/Terminal.js';
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
            h(Terminal, null)));
    }
}
// @ts-ignore
render(h(App, null), document.querySelector('#app'));
//# sourceMappingURL=App.js.map
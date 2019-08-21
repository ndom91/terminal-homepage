import { h, render } from 'preact';
import App from './components/App';
var appMount = document.querySelector('#app');
// @ts-ignore
if (appMount)
    render(h(App, null), appMount);
export default App;
//# sourceMappingURL=index.js.map
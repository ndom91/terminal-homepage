import { h, render } from "./web_modules/preact.js";
import App from "./components/App.js";
var appMount = document.querySelector('#app'); // @ts-ignore

if (appMount) render(h(App, null), appMount);
export default App;
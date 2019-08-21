import { h, render } from './web_modules/preact.js'
import App from './components/App.js'
const appMount = document.querySelector('#app')
if (appMount) render(h(App, null), appMount)
export default App

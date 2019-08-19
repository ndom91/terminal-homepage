// @ts-ignore
import { Component, h } from '/web_modules/preact.js'
// @ts-ignore
// import picostyle from '/web_modules/picostyle.js'
import Console from './Console.js'

export interface Props {
  value?: string
}

export interface State {
  useOptional?: boolean
}

export default class App extends Component<any, any> {
  render() {
    return (
      <div className="terminal-window">
        <header>
          <div className="button red" />
          <div className="button yellow" />
          <div className="button green" />
        </header>
        {/* 
          // @ts-ignore */}
        <Console />
      </div>
    )
  }
}

// @ts-ignore
import { Component, render, h } from '/web_modules/preact.js'
// @ts-ignore
import picostyle from '/web_modules/picostyle.js'
import Terminal from './components/Terminal.js'

const ps = picostyle(h)

const Wrapper = ps('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
})

export interface Props {
  value?: string
}

export interface State {
  useOptional?: boolean
}

export default class App extends Component<any, any> {
  render() {
    return (
      <Wrapper>
        {/* 
          // @ts-ignore */}
        <Terminal />
      </Wrapper>
    )
  }
}

// @ts-ignore
render(<App />, document.querySelector('#app'))

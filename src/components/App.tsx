// @ts-ignore
import { Component, render, h } from 'preact'
// @ts-ignore
import picostyle, { createNode } from 'picostyle'
import Terminal from './Terminal'

const ps = picostyle(h as createNode)

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
      // @ts-ignore */
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

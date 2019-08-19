// @ts-ignore
import { Component, h } from '/web_modules/preact.js'
// @ts-ignore
import picostyle from '/web_modules/picostyle.js'

const ps = picostyle(h)

const Container = ps('div')({
  display: 'flex'
})

export interface Props {
  value?: string
}

export interface State {
  useOptional?: boolean
}

export default class App extends Component<any, any> {
  render() {
    return <Container id="console" />
  }
}

// @ts-ignore
import { Component, h } from '/web_modules/preact.js'
// @ts-ignore
import picostyle from '/web_modules/picostyle.js'
// @ts-ignore
import Typer from '/web_modules/reactyper.js'

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
    return (
      <div>
        <Container id="console">
          <Typer spool={['etsttttt!']} />
        </Container>
      </div>
    )
  }
}

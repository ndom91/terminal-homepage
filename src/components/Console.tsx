// @ts-ignore
import { Component, h } from 'preact'
// @ts-ignore
import picostyle, { createNode } from 'picostyle'
// @ts-ignore
import Typer from 'reactyper'

// @ts-ignore
const ps = picostyle(h as createNode)

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
        {/* 
          // @ts-ignore */}
        <Container id="console">
          {/* 
          // @ts-ignore */}
          <Typer spool={['🎉 ReacTyper']} />
        </Container>
      </div>
    )
  }
}

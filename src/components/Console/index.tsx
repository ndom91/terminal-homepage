import { h } from 'preact'
import styled from 'preact-emotion'
// import Typer from 'reactyper'

const Container = styled('div')`
  display: 'flex';
`

const Console: preact.FunctionalComponent = () => (
  <div>
    {/*
    // @ts-ignore */}
    <Container id="console">
      {/* <Typer spool={['🎉 ReacTyper']} /> */}
    </Container>
  </div>
)

export default Console

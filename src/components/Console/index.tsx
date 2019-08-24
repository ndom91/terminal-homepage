import { h } from 'preact'
import styled from 'preact-emotion'
import Typist from '../Typist'

const Container = styled('div')`
  display: 'flex';
  width: '750px';
`

const Console: preact.FunctionalComponent = () => (
  <div>
    <Container id="console">
      <Typist
        accessCountimer={ 0 }
        speed={ 9 }
        file='ndo.txt'
       />
    </Container>
  </div>
)

export default Console

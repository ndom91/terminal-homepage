import { h, Component } from 'preact'

type TypistType = {
  file: string
}

type TypistState ={
  renderText: string
  index: number
}

class Typist extends Component<TypistType, TypistState> {
  constructor (props:TypistType) {
    super(props)

    this.state = {
      renderText: '',
      index: 2
    }
  }

  componentDidMount() {
    const {
      file
    } = this.props

    const {
      index
    } = this.state 

    let intervalId: NodeJS.Timeout

    if (index < file.length) {
      intervalId = setInterval(() => { this.write() }, 10)
    } else {
      clearInterval(intervalId)
    }

  }

  write = () => {
    const {
      file
    } = this.props

    const {
      index
    } = this.state 

    const intermediateText = file.slice(0, file.length - (file.length - index))

    console.log(index)

    const newIndex = index + 1
    this.setState({ 
      renderText: intermediateText,
      index: newIndex
    })

  }

  render () {
    const {
      renderText
    } = this.state

    return (
      <div 
        dangerouslySetInnerHTML={{ __html: renderText.replace(/\n/g, '<br />')}} className="terminal-body"
        ></div>
    )
  }
}

export default Typist
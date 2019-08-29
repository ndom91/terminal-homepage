import { h, Component } from 'preact'

type TypistType = {
  file: string
}

type TypistState ={
  renderText: string
  index: number
}

class Typist extends Component<TypistType, TypistState> {
  timeoutId:number = 0

  constructor (props:TypistType) {
    super(props)

    this.state = {
      renderText: '',
      index: 2
    }
  }


  componentDidMount() {
    this.timeoutId = window.setInterval(() => { this.write() }, 20)
  }

  write = () => {
    const {
      file
    } = this.props

    const {
      index
    } = this.state 

    const intermediateText = file.slice(0, file.length - (file.length - index))

    const newIndex = index + 1
    this.setState({ 
      renderText: intermediateText,
      index: newIndex
    })

    const body = document.querySelector('body')

    if (body && body.scrollHeight > window.innerHeight) {
      window.scrollBy({
        top: 50,
        behavior: 'auto'
      });
    }


    if (index >= file.length) {
      clearInterval(this.timeoutId)
    }
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
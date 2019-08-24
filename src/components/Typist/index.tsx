import { h, Component } from 'preact'

type TypistType = {
  accessCountimer: number | null
  speed: number
  file: string
}

type TypistState ={
  renderText: string
  accessCount: number
  index: number
  deniedCount: number
}

class Typist extends Component<TypistType, TypistState> {
  constructor (props:TypistType) {
    super(props)

    this.state = {
      renderText: '',
      accessCount: 0,
      deniedCount: 0,
      index: 0
    }
  }

  // content = () => {
  //   const console = document.getElementById('console')
  //   return console
  // }
  componentDidMount() {
    const {
      file
    } = this.props

    setInterval(() => { this.updLstChr() }, 500)
    fetch(file)
    .then(data => data.text())
    .then(text => {
      const intermediateText = text.slice(0, text.length - 1)
      this.setState({ renderText: intermediateText })
    })
  }

  write = (str:string) => {
    this.setState((prevState: TypistState) => ({ 
      renderText: `${prevState.renderText} + ${str}`
    }))
    return false
  }

  addText = (key: KeyboardEvent) => {
    const {
      speed
    } = this.props

    const {
      accessCount,
      index,
      deniedCount,
      renderText
    } = this.state

    // const console = document.getElementById('console')
    if (key.keyCode === 18) {
      const newAccessCount = accessCount + 1
      this.setState({ accessCount: newAccessCount})
    } else if (key.keyCode === 20) {
      const newDeniedCount = deniedCount + 1
      this.setState({ deniedCount: newDeniedCount})
    } else if (renderText) {
      if (renderText.substring(renderText.length - 1, renderText.length) === '|') { 
        const newText = renderText.substring(0, renderText.length - 1) 
        this.setState({ renderText: newText })
      }
      if (key.keyCode !== 8) {
        const newIndex = index + speed
        this.setState({ index: newIndex })
      } else if (index > 0) { 
        const newIndex = index - speed
        this.setState({ index: newIndex })
      }
      // const text = text.substring(0, index)
      // const rtn = new RegExp('\n', 'g')

      // const console = document.getElementById('console')
      // console.innerHTML(text.replace(rtn, '<br/>'))
      window.scrollBy(0, 50)
    }

    if (key.preventDefault && key.keyCode !== 122) {
      key.preventDefault()
    };

    if (key.keyCode !== 122) { // otherway prevent keys default behavior
      key.preventDefault()
    }
  }

  updLstChr = () => {
    const {
      renderText
    } = this.state

    if (renderText.substring(renderText.length - 1, renderText.length) === '|') { 
      const newText = renderText.substring(0, renderText.length - 1) 
      this.setState({ renderText: newText })
    }
  }

  render () {
    return (
      <div className="terminal-body"></div>
    )
  }
}

Typist.defaultProps = {
  accessCountimer: null,
  index: 0,
  speed: 9,
  file: 'ndo.txt'
}

// function replaceUrls (text) {
//   const http = text.indexOf('http://')
//   const space = text.indexOf('.me ', http)

//   if (space !== -1) {
//     const url = text.slice(http, space - 1)
//     return text.replace(url, `<a href="${  url  }">${  url  }</a>`)
//   } 
//   return text
// // }

// const timer = setInterval('t()', 30)
// function t () {
//   addText({ keyCode: 123748 })

//   if (index > text.length) {
//     clearInterval(timer)
//   }
// }

export default Typist
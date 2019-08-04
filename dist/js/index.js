const Typer = {
  text: null,
  accessCountimer: null,
  index: 0,
  speed: 2,
  file: '',
  accessCount: 0,
  deniedCount: 0,
  init: function () {
    accessCountimer = setInterval(function () { Typer.updLstChr() }, 500)
    $.get(Typer.file, function (data) {
      Typer.text = data
      Typer.text = Typer.text.slice(0, Typer.text.length - 1)
    })
  },

  content: function () {
    return $('#console').html()
  },

  write: function (str) {
    $('#console').append(str)
    return false
  },

  addText: function (key) {
    if (key.keyCode === 18) {
      Typer.accessCount++

      if (Typer.accessCount >= 3) {
        Typer.makeAccess()
      }
    } else if (key.keyCode === 20) {
      Typer.deniedCount++

      if (Typer.deniedCount >= 3) {
        Typer.makeDenied()
      }
    } else if (key.keyCode === 27) {
      Typer.hidepop()
    } else if (Typer.text) {
      const cont = Typer.content()
      if (cont.substring(cont.length - 1, cont.length) === '|') { $('#console').html($('#console').html().substring(0, cont.length - 1)) }
      if (key.keyCode !== 8) {
        Typer.index += Typer.speed
      } else {
        if (Typer.index > 0) { Typer.index -= Typer.speed }
      }
      const text = Typer.text.substring(0, Typer.index)
      const rtn = new RegExp('\n', 'g')

      $('#console').html(text.replace(rtn, '<br/>'))
      window.scrollBy(0, 50)
    }

    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault()
    };

    if (key.keyCode != 122) { // otherway prevent keys default behavior
      key.returnValue = false
    }
  },

  updLstChr: function () {
    const cont = this.content()

    if (cont.substring(cont.length - 1, cont.length) == '|') { $('#console').html($('#console').html().substring(0, cont.length - 1)) } else { this.write('|') } // else write it
  }
}

function replaceUrls (text) {
  const http = text.indexOf('http://')
  const space = text.indexOf('.me ', http)

  if (space !== -1) {
    const url = text.slice(http, space - 1)
    return text.replace(url, '<a href="' + url + '">' + url + '</a>')
  } else {
    return text
  }
}

Typer.speed = 9
Typer.file = 'ndo.txt' // add your own name here
// Typer.init()

// const timer = setInterval('t();', 30)
function t () {
  Typer.addText({ keyCode: 123748 })

  if (Typer.index > Typer.text.length) {
    clearInterval(timer)
  }
}

const initCurtains = () => {
  const curtain = new Curtains('canvas')

  // handling errors
  curtain.onError(function () {
    // we will add a class to the document body to display original canvas
    document.body.classList.add('no-curtains')

    // handle canvas here
    function animate () {
      // animate our texture canvas
      animateTextureCanvas()

      window.requestAnimationFrame(animate)
    }

    animate()
  })

  const root = document.getElementById('curtain')

  const pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1.0

  var mousePosition = {
    x: 0,
    y: 0
  }

  var mouseLastPosition = {
    x: 0,
    y: 0
  }

  var mouseDelta = 0

  const params = {
    widthSegments: 20,
    heightSegments: 20,
    uniforms: {
      resolution: { // resolution of our plane
        name: 'uResolution',
        type: '2f', // notice this is an length 2 array of floats
        value: [pixelRatio * root.clientWidth, pixelRatio * root.clientHeight]
      },
      time: { // time uniform that will be updated at each draw call
        name: 'uTime',
        type: '1f',
        value: 0
      },
      mousePosition: { // our mouse position
        name: 'uMousePosition',
        type: '2f', // again an array of floats
        value: [mousePosition.x, mousePosition.y]
      },
      mouseMoveStrength: { // the mouse move strength
        name: 'uMouseMoveStrength',
        type: '1f',
        value: 0
      }
    }
  }

  // our texture canvas
  const simpleCanvas = document.getElementById('canvas-texture')
  const simpleCanvasContext = simpleCanvas.getContext('2d')

  const plane = curtain.addPlane(root, params)

  if (plane) {
    // get our plane dimensions
    var planeBoundingRect = plane.getBoundingRect()

    // size our canvas
    // we are dividing it by the pixel ratio value to gain performance
    simpleCanvas.width = planeBoundingRect.width / curtain.pixelRatio
    simpleCanvas.height = planeBoundingRect.height / curtain.pixelRatio

    // const myTexture = plane.createTexture('myTexture')
    plane.onReady(() => {
    // now that our plane is ready we can listen to mouse move event
      var wrapper = document.getElementById('canvasWrapper')

      wrapper.addEventListener('mousemove', function (e) {
        handleMovement(e, plane)
      })

      wrapper.addEventListener('touchmove', function (e) {
        handleMovement(e, plane)
      })

      // on resize, update the resolution uniform
      window.addEventListener('resize', function () {
        plane.uniforms.resolution.value = [pixelRatio * root.clientWidth, pixelRatio * root.clientHeight]

        // resize our canvas
        simpleCanvas.width = root.clientWidth
        simpleCanvas.height = root.clientHeight
      })

      console.log('plane ready')
    }).onRender(function () {
    // increment our time uniform
      plane.uniforms.time.value++

      // send the new mouse move strength value
      plane.uniforms.mouseMoveStrength.value = mouseDelta
      // decrease the mouse move strenght a bit : if the user doesn't move the mouse, effect will fade away
      mouseDelta = Math.max(0, mouseDelta * 0.995)

      // animate our texture canvas
      animateTextureCanvas()
    })
  }

  function animateTextureCanvas () {
    // here we will handle our canvas texture animation

    // clear scene
    simpleCanvasContext.clearRect(0, 0, simpleCanvas.width, simpleCanvas.height)

    // continuously rotate the canvas
    simpleCanvasContext.translate(simpleCanvas.width / 2, simpleCanvas.height / 2)
    simpleCanvasContext.rotate(Math.PI / 360)
    simpleCanvasContext.translate(-simpleCanvas.width / 2, -simpleCanvas.height / 2)

    // draw a red rectangle
    simpleCanvasContext.fillStyle = '#ff0000'
    simpleCanvasContext.fillRect(simpleCanvas.width / 2 - simpleCanvas.width / 8, simpleCanvas.height / 2 - simpleCanvas.height / 8, simpleCanvas.width / 4, simpleCanvas.height / 4)
  }

  function handleMovement (e, plane) {
    if (mousePosition.x !== -100000 && mousePosition.y !== -100000) {
    // if mouse position is defined, set mouse last position
      mouseLastPosition.x = mousePosition.x
      mouseLastPosition.y = mousePosition.y
    }

    // touch event
    if (e.targetTouches) {
      mousePosition.x = e.targetTouches[0].clientX
      mousePosition.y = e.targetTouches[0].clientY
    }

    // mouse event
    else {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    }

    // convert our mouse/touch position to coordinates relative to the vertices of the plane
    var mouseCoords = plane.mouseToPlaneCoords(mousePosition.x, mousePosition.y)
    // update our mouse position uniform
    plane.uniforms.mousePosition.value = [mouseCoords.x, mouseCoords.y]

    // calculate the mouse move strength
    if (mouseLastPosition.x && mouseLastPosition.y) {
      var delta = Math.sqrt(Math.pow(mousePosition.x - mouseLastPosition.x, 2) + Math.pow(mousePosition.y - mouseLastPosition.y, 2)) / 30
      delta = Math.min(4, delta)
      // update mouseDelta only if it increased
      if (delta >= mouseDelta) {
        mouseDelta = delta
        // reset our time uniform
        plane.uniforms.time.value = 0
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', function () {
  initCurtains()
})

var canvas = document.getElementById("screen")
var c = canvas.getContext("2d")

function drawCube() {
  c.moveTo(200, 400)
  c.lineTo(350, 400)
  c.stroke()
  c.moveTo(250, 300)
  c.lineTo(400, 300)
  c.stroke()
  c.moveTo(200, 400)
  c.lineTo(250, 300)
  c.stroke()
  c.moveTo(400, 300)
  c.lineTo(350, 400)
  c.stroke()

  c.moveTo(200, 400)
  c.lineTo(200, 250)
  c.stroke()
  c.moveTo(250, 300)
  c.lineTo(250, 150)
  c.stroke()
  c.moveTo(400, 300)
  c.lineTo(400, 150)
  c.stroke()
  c.moveTo(350, 400)
  c.lineTo(350, 250)
  c.stroke()

  c.moveTo(350, 250)
  c.lineTo(400, 150)
  c.stroke()
  c.moveTo(400, 150)
  c.lineTo(250, 150)
  c.stroke()
  c.moveTo(350, 250)
  c.lineTo(200, 250)
  c.stroke()
  c.moveTo(200, 250)
  c.lineTo(250, 150)
  c.stroke()
}

drawCube()


// This project will be in my github. Link will be in the description. How this was made: I drew a cube on a paper and just put lines on the canvas to make a cube. usually, you would use WebGL to make cubes, but it is really difficult to learn how to do it, so i made it easier and you dont need to know about linear algebra, well... A little. Make sure you like and subscribe to this channel, and comment down below what you want me to make in the next video... See ya!

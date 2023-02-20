const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')
canvas.width = (window.innerWidth / 2)
canvas.height = (window.innerHeight / 2)

// Rectangle
const x = 10
const y = 10
const width = 30
const height = 30
c.fillStyle = 'rgba(0, 150, 0, 1)'
c.fillRect(x, y, width, height)

//Line
c.beginPath()
c.moveTo(50, 50)
c.lineTo(100, 100)
c.lineTo(150, 50)
c.lineTo(50, 50)
c.strokeStyle = 'red'
c.stroke()

//Arc
c.beginPath()
c.arc(50, 150, 30, 0, (Math.PI * 2), false)
c.strokeStyle = 'blue'
c.stroke()
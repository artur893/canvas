const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')
canvas.width = (window.innerWidth / 2)
canvas.height = (window.innerHeight / 2)

console.log(canvas)

let width = canvas.width
let height = canvas.height

const mouse = {
    x: null,
    y: null
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x - (width / 2)
    mouse.y = e.y - (height / 2)
    console.log(mouse)
})

window.addEventListener('resize', () => {
    canvas.width = (window.innerWidth / 2)
    canvas.height = (window.innerHeight / 2)
    width = canvas.width
    height = canvas.height
    init()
})

const colors = ['#AAE3E2', '#D9ACF5', '#FFCEFE', '#FDEBED']

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.draw = () => {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false)
            // c.strokeStyle = 'red'
            c.fillStyle = this.color
            c.fill()
        }

        this.update = () => {
            this.draw()
            this.x += this.dx
            this.y += this.dy
            if (this.x >= (width - this.radius) || this.x <= this.radius) {
                this.dx = -this.dx
            }
            if (this.y >= (height - this.radius) || this.y <= this.radius) {
                this.dy = -this.dy
            }
            //interactivity

            if (((mouse.x - this.x < 50) && (mouse.x - this.x > -50) &&
                ((mouse.y - this.y < 50) && (mouse.y - this.y > -50)))) {
                if (this.radius < 20) {
                    this.radius += 1
                }
            } else if (this.radius > radius) {
                this.radius -= 1
            }
        }
    }
}

let circles = []

function createCircles() {
    for (let i = 0; i < 1000; i++) {
        const radius = 4
        const x = Math.random() * (width - radius * 2) + radius
        const dx = (Math.random() - 0.5) * 2
        const y = Math.random() * (height - radius * 2) + radius
        const dy = (Math.random() - 0.5) * 2
        const circle = new Circle(x, y, dx, dy, radius)
        circles.push(circle)
    }
}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, width, height)
    circles.forEach(circle => circle.update())
}

function init() {
    circles = []
    createCircles()
}

createCircles()
animate()
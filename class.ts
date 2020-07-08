class Point{
    x : number
    y : number
    drawLine(){
        console.log(this.x)
        console.log(this.y)
    }
}

// object1
let points = new Point
points.x = 10
points.y = 20
points.drawLine()

// object2
let points2 = new Point
points2.x = 100
points2.y = 200
points2.drawLine()
class Paperball{
    constructor(x, y, radius){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        this.image = loadImage("sprites/paper.png")
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position
        imageMode(CENTER)
        //fill("white")
        image(this.image, pos.x, pos.y, this.radius, this.radius)
    }
}
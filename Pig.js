class Pig{
    constructor(x,y,w,h){
        var opt={

            restitution:0.5
        }
        this.body=bodies.rectangle(x,y,w,h,opt)
        this.widht=w
        this.height=h
        world.add(wr,this.body)
    }
    displays(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.widht,this.height)
        pop()
    }

}
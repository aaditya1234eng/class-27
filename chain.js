class Chain{
    constructor(BodyA,BodyB){
        var opction={
            bodyA:BodyA,
            bodyB:BodyB,
            stiffness:0.3,
            length :10
        }
            this.chain=Constraint.create(opction)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    
}
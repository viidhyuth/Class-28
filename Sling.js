class Sling {
    constructor(a,b){
        var  option={
            bodyA:a,
            pointB:b,
            length:10,
            stiffness:0.04
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
        }   
fly (){
    this.sling.bodyA=null
}
    display(){
       if(this.sling.bodyA!==null){
        var pointA=this.sling.bodyA.position
        var pointB=this.sling.pointB
        push()
        strokeWeight(15)
        stroke("brown")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
       }
        }
     }

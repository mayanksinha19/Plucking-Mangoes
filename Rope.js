class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03  ,
            length: 30
        }
        this.point=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
      fly(){
          this.chain.bodyA=null;
      }
    display(){
        if (this.chain.bodyA){

        var pointA = this.chain.bodyA.position;
        var pointB = this.point;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }}
    
}
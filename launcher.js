class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.01,
            langht: 10 
        }
        //create launcher constraint
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    //create display
    var pointA = this.launch.bodyA.position;
    var pointB = this.launch.bodyB.position;
    strokeweight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
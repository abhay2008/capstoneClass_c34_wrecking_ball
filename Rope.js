class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stifness: 0.003,
      length: 380
    }
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(6);
    stroke("yellow");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
  }
}
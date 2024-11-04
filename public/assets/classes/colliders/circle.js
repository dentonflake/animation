class Circle {
    constructor(pos, radius) {
        this.pos = pos;
        this.radius = radius;
    }

    top() { return this.pos.y - this.radius }

    right() { return this.pos.x + this.radius }

    bottom() { return this.pos.y + this.radius }

    left() { return this.pos.x - this.radius }
}
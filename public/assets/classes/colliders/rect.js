class Rect {
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;

        this.center = new Vector2D(
            this.width * 0.5,
            this.height * 0.5
        )
    }

    top() { return this.pos.y }

    right() { return this.pos.x + this.width }

    bottom() { return this.pos.y + this.height }

    left() { return this.pos.x }
}
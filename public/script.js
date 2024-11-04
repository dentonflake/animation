// Canvas object
let canvas = new Canvas(
    {
        // Rectangle collider
        collider: new Rect(
            new Vector2D(
                0, // X position
                0 // Y position
            ),
            innerWidth * 0.5, // Width
            innerWidth * 0.3 // Height
        )
    }
);

let circle = new Circle(
    new Vector2D(
        0,
        0
    ),
    50
)

function loop() {
    // Drawing the canvas
    canvas.rect(
        canvas.collider,
        new Color(0, 0, 0, 1)
    );

    circle.pos.x += 1;


    canvas.circle(
        circle,
        new Color(255, 0, 0, 1)
    );

    canvas.camera.set(
        new Vector3D(
            100, 100, 1
        )
    )

    requestAnimationFrame(loop);
}

loop();
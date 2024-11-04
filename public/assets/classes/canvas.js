class Canvas {
  constructor({ canvas, collider, camera } = {}) {
    this.canvas = (canvas) ? canvas : document.querySelector('canvas');

    this.context = this.canvas.getContext('2d');

    this.collider = collider ? collider : new Rect(
      new Vector2D(
        0,
        0
      ),
      window.innerWidth,
      window.innerHeight
    );

    this.camera = camera ? camera : new Camera(
      new Vector3D(
        this.collider.width * 0.5,
        this.collider.height * 0.5,
        1
      )
    );

    this.init();
  }

  init() {
    this.context.canvas.width = this.collider.width;
    this.context.canvas.height = this.collider.height;
  }

  loop(loop) {
    function gameLoop() {
      loop();
      window.requestAnimationFrame(gameLoop);
    }
    gameLoop();
  }

  rect(collider, color, camera = this.camera) {
    this.context.beginPath();

    this.context.fillStyle = 'rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + ')';

    this.context.rect(
      collider.pos.x / camera.z - (camera.x / camera.z - this.collider.width * 0.5),
      collider.pos.y / camera.z - (camera.y / camera.z - this.collider.height * 0.5),
      collider.width / camera.z,
      collider.height / camera.z
    );

    this.context.fill();
  }

  circle(collider, color, camera = this.camera) {
    this.context.beginPath();

    this.context.fillStyle = 'rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + ')';

    this.context.arc(
      collider.pos.x / camera.z - (camera.x / camera.z - this.collider.width * 0.5),
      collider.pos.y / camera.z - (camera.y / camera.z - this.collider.height * 0.5),
      collider.radius / camera.z,
      Math.PI * 0,
      Math.PI * 2
    );

    this.context.fill();
  }

  line(posA, posB, color, weight) {
    this.context.beginPath();

    this.context.moveTo(posA.x, posA.y);
    this.context.lineTo(posB.x, posB.y);

    this.context.lineWidth = weight;

    this.context.strokeStyle = 'rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + ')';
    this.context.stroke();
  }

  stroke(color, weight) {
    this.context.lineWidth = weight;
    this.context.strokeStyle = 'rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + ')';
    this.context.stroke();
  }
}
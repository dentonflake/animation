class Camera {
  constructor({ x, y, z } = { x: 0, y: 0, z: 0 }) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set({ x, y, z }) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
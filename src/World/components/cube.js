import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube() {
  // Create a cube
  const geometry = new BoxGeometry(1, 1, 1);
  // Create a default (white) material
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  // Create a mesh using the geometry and material
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };

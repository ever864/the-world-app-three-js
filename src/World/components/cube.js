import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube(width, height, depth) {
  // Create a cube
  const geometry = new BoxGeometry(width, height, depth);

  // Create a default (white) material
  const material = new MeshBasicMaterial({ color: "white" });
  // Create a mesh using the geometry and material
  const cube = new Mesh(geometry, material);
  cube.position.set(0, 1, 0);
  return cube;
}

export { createCube };

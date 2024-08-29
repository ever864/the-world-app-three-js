import { BoxGeometry, Mesh, MeshBasicMaterial, SphereGeometry } from "three";

function createFigure(figure, width, height, depth, x, y, z) {
 
  if (figure === "cube") {
    const geometry = new BoxGeometry(width, height, depth);
    const material = new MeshBasicMaterial({ color: "yellow" });
    const cube = new Mesh(geometry, material);
    cube.position.set(x, y, z);
    
    return cube;
  } else if (figure === "sphere") {
    const geometry = new SphereGeometry(width, height, depth);
    const material = new MeshBasicMaterial({ color: "blue" });
    const sphere = new Mesh(geometry, material);
    sphere.position.set(x, y, z);
    return sphere;
  }

}

export { createFigure };

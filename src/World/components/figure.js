import { BoxGeometry, Mesh, MeshStandardMaterial, SphereGeometry } from "three";

function createFigure(figure, width, height, depth, x, y, z) {
 
  if (figure === "cube") {
    const geometry = new BoxGeometry(width, height, depth);
    const material = new MeshStandardMaterial({ color: "peachpuff" });
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -1.1, 0.8);

    cube.position.set(x, y, z);
    
    return cube;
  } else if (figure === "sphere") {
    const geometry = new SphereGeometry(width, height, depth);
    const material = new MeshStandardMaterial({ color: "red" });
    const sphere = new Mesh(geometry, material);
    sphere.position.set(x, y, z);
    return sphere;
  }

}

export { createFigure };

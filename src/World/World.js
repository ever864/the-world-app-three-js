import { createCamera } from "./components/camera.js";
import { createFigure } from "./components/figure.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

let camera, scene, renderer;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createFigure("cube", 1, 4, 2, 1, 1, 3);
    const sphere = createFigure("sphere", 1, 2, 2, 1, 2, 3);
 
    scene.add(cube);
    scene.add(sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };

import { createCamera } from "./components/camera.js";
import { createFigure } from "./components/figure.js";
import { createScene } from "./components/scene.js";
import { createLights, pointLight, spotLight, rectAreaLight } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

let camera, scene, renderer;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);


    camera.aspect = container.clientWidth / container.clientHeight;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const cube = createFigure("cube", 2, 4, 2, 3, 0, 3);
    const sphere = createFigure("sphere", 3, 2, 3, -3, 0, 3);
    const light = createLights();
    const pLight = pointLight();
    const sLight = spotLight();
    const rLight = rectAreaLight();

    scene.add(cube, light, pLight, sLight, rLight);
    scene.add(sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };

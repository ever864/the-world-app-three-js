import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

class World {
  constructor() {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
  }

  render() {}
}

export { World };

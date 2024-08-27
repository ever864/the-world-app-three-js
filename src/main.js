import { World } from "./World/World.js";

function main() {
  const container = document.querySelector("#scene-container");

  const world = new World(container);

  world.render();


  console.log("test")
  console.log(world.camera);
  console.log(world.scene);
}
main();

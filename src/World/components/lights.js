import { TextureLoader, DirectionalLight, PointLight, SpotLight, RectAreaLight } from "three";

function createLights() {
  const light = new DirectionalLight("purple", 1);
  light.position.set(4, 4, 40);

  return light;
}
function pointLight() {
  const light = new PointLight( 0xffffff, 1000, 1000);
  light.position.set(10, 1, 50);

  return light;
}

function spotLight() {
  const spotLight = new SpotLight(0xffffff, 1000, 1000);
  spotLight.position.set(10, 1, 50);
  spotLight.map = new TextureLoader().load("https://img.freepik.com/free-vector/characters-people-holding-internet-search-icons_53876-26817.jpg");
  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;

  spotLight.shadow.camera.near = 0.1;
  spotLight.shadow.camera.far = 500;
  spotLight.shadow.camera.fov = 50;

  return spotLight;
}

function rectAreaLight() {
  const light = new RectAreaLight("black", 1);
  light.position.set(4, 4, 40);

  return light;
}

export { createLights, pointLight, spotLight, rectAreaLight };

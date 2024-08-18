class Resizer {
  constructor(container, camera, renderer) {
    //Set the camera aspect ratio to match the container's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;

    //Update the camera's projection matrix
    camera.updateProjectionMatrix();

    //Update the size of the renderer AND the camera
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };

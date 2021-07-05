let goPAGE=function() {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    /*window.location.href="你的手机版地址";*/
    return "phone";
  } else {
    /*window.location.href="你的电脑版地址";    */
    return "pc";
  }
}
if (goPAGE() === "pc") {
  
} else{
   console.log('nonPC!');
    if (BABYLON.Engine.isSupported()) {

      var VJC = new BABYLON.VirtualJoysticksCamera(
        "VJC",
        scene.activeCamera.position,
        scene
      );
      VJC.rotation = scene.activeCamera.rotation;
      VJC.checkCollisions = scene.activeCamera.checkCollisions;
      VJC.applyGravity = scene.activeCamera.applyGravity;
      //scene.activeCamera = VJC;
      scene.executeWhenReady(function () {
        console.log(scene);
        scene.activeCamera = VJC;
        scene.activeCamera.attachControl(canvas);
        camera.dispose();
        engine.runRenderLoop(function () {
          scene.render();
        });
      });
    }
  
}

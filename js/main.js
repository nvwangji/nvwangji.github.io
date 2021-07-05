var canvas = document.getElementById("renderCanvas"); // 得到canvas对象的引用
var engine = new BABYLON.Engine(canvas, true); // 初始化 BABYLON 3D engine
var Meshs = [];
var player = {
  weapons: [],
  name: "h",
  mesh: null,
  hp: 100,
};
/******* Add the create scene function ******/
var createScene = function () {
  // 创建一个场景scene
  var scene = new BABYLON.Scene(engine);

  // 添加一个相机，并绑定鼠标事件
  var camera = new BABYLON.FreeCamera(
    "FreeCamera",
    new BABYLON.Vector3(-20, 12, -30),
    scene
  );
  camera.attachControl(canvas, true);
  camera.setTarget(new BABYLON.Vector3(0, 13, 8));
  camera.keysUp.push(87);
  camera.keysDown.push(83);
  camera.keysLeft.push(65);
  camera.keysRight.push(68);
  scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
  // 开启碰撞
  scene.collisionsEnabled = true;
  camera.checkCollisions = true;
  //重力相机。
  camera.applyGravity = true;
  //摄像机上的椭球属性
  camera.ellipsoid = new BABYLON.Vector3(2, 5, 2);

  // 添加一组灯光到场景
  var light1 = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );
  //  var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
  light1.diffuseColor = new BABYLON.Vector3(1, 1, 1);
  //skyBox
  var skybox = BABYLON.Mesh.CreateBox(
    "BackgroundSkybox",
    1500,
    scene,
    undefined,
    BABYLON.Mesh.BACKSIDE
  );
  var backgroundMaterial = new BABYLON.BackgroundMaterial(
    "backgroundMaterial",
    scene
  );
  backgroundMaterial.reflectionTexture = new BABYLON.CubeTexture(
    "./img/skybox/TropicalSunnyDay",
    scene
  );
  backgroundMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  skybox.material = backgroundMaterial;

  //ground
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 100,
    height: 100,
  });
  var defaultMaterial = new BABYLON.StandardMaterial("defaultMaterial", scene);
  defaultMaterial.diffuseTexture = new BABYLON.Texture(
    "./img/grass.png",
    scene
  );
  defaultMaterial.diffuseTexture.uScale = 10;
  defaultMaterial.diffuseTexture.vScale = 10;
  defaultMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  ground.material = defaultMaterial;
  ground.checkCollisions = true;
  //snow mat
  const snowMat = new BABYLON.StandardMaterial("snowMat", scene);
  snowMat.diffuseTexture = new BABYLON.Texture("./img/snow.jpg", scene);
  //wall
  let wallf = BABYLON.MeshBuilder.CreateBox(
    "wallf",
    {
      width: 80,
      height: 20,
      depth: 3,
    },
    scene
  );
  let wallMatf = new BABYLON.StandardMaterial("wallMatf", scene);
  wallMatf.diffuseColor = new BABYLON.Vector3(1, 1, 1);
  let wallMatl = wallMatf.clone("wallMatl");
  let wallMatr = wallMatf.clone("wallMatl");
  let wallMatb = wallMatf.clone("wallMatl");

  wallf.material = snowMat;
  let walll = wallf.clone("walll"),
    wallr = wallf.clone("wallr"),
    wallb = wallf.clone("wallb");
  walll.rotation.y = Math.PI / 2;
  wallr.rotation.y = Math.PI / 2;
  wallf.position = new BABYLON.Vector3(0, 10, -40);
  walll.position = new BABYLON.Vector3(-40, 10, 0); //
  wallr.position = new BABYLON.Vector3(40, 10, 0); //
  wallb.position = new BABYLON.Vector3(0, 10, 40);
  walll.checkCollisions = true;
  wallr.checkCollisions = true;
  wallf.checkCollisions = true;
  wallb.checkCollisions = true;

  //build
  let build1 = BABYLON.MeshBuilder.CreateBox(
    "build1",
    {
      width: 20,
      height: 16,
      depth: 16,
    },
    scene
  );
  build1.material = snowMat;
  let build2 = build1.clone("build2");
  let build3 = build1.clone("build3");
  let build4 = build1.clone("build4");
  build1.position = new BABYLON.Vector3(-13, 8, -13);
  build2.position = new BABYLON.Vector3(-13, 8, 13);
  build3.position = new BABYLON.Vector3(13, 8, -13);
  build4.position = new BABYLON.Vector3(13, 8, 13);
  build1.checkCollisions = true;
  build2.checkCollisions = true;
  build3.checkCollisions = true;
  build4.checkCollisions = true;
  // cylinder
  const cylinder1 = BABYLON.Mesh.CreateCylinder(
    "cylinder1",
    16,
    8,
    8,
    3,
    1,
    scene
  );
  cylinder1.position = new BABYLON.Vector3(0, 8, -36.5);
  cylinder1.rotation.y = -Math.PI / 2;
  cylinder1.scaling.x = 2;
  let cylinder2 = cylinder1.clone("cylinder2");
  cylinder1.position = new BABYLON.Vector3(0, 8, 36.5);
  cylinder1.rotation.y = Math.PI / 2;
  cylinder1.checkCollisions = true;
  cylinder2.checkCollisions = true;
  //smallwall
  let swMat = new BABYLON.StandardMaterial("swMat", scene);
  swMat.diffuseTexture = new BABYLON.Texture("./img/zhuan.jpg", scene);
  let swall1 = BABYLON.MeshBuilder.CreateBox(
    "swall1",
    {
      width: 8,
      height: 6,
      depth: 1.4,
    },
    scene
  );
  swall1.material = swMat;
  let swall2 = swall1.clone("swall2");
  let swall3 = swall1.clone("swall3");
  let swall4 = swall1.clone("swall4");
  let swall5 = swall1.clone("swall5");
  let swall6 = swall1.clone("swall6");

  swall1.position = new BABYLON.Vector3(-34.5, 3, 0);
  swall2.position = new BABYLON.Vector3(34.5, 3, 0);
  swall3.position = new BABYLON.Vector3(-27, 3, 20.3);
  swall4.position = new BABYLON.Vector3(27, 3, 20.3);
  swall5.position = new BABYLON.Vector3(-27, 3, -20.3);
  swall6.position = new BABYLON.Vector3(27, 3, -20.3);
  swall1.checkCollisions = true;
  swall2.checkCollisions = true;
  swall3.checkCollisions = true;
  swall4.checkCollisions = true;
  swall5.checkCollisions = true;
  swall6.checkCollisions = true;
  //gun

  var assetsManager = new BABYLON.AssetsManager(scene);
  var awp1, awp2, awp4, awp4, awp5, snowman;
  BABYLON.SceneLoader.ImportMeshAsync(
    "",
    "./assert/MODEL/awp/",
    "AWPv2.obj"
  ).then((res) => {
    console.log(res);
    let mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseColor = new BABYLON.Color4(66 / 256, 69 / 256, 52 / 256, 0.1);
    let matPink = new BABYLON.StandardMaterial("matPink", scene);
    matPink.diffuseColor = new BABYLON.Color4(1, 192 / 256, 203 / 256, 0.6);
    awp = BABYLON.Mesh.MergeMeshes(res.meshes);
    awp.position = new BABYLON.Vector3(0, 0.2, -25);
    awp.material = mat;
    awp.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
    awp.rotation.y = Math.PI;
    awp1 = awp.clone("awp1");
    awp2 = awp.clone("awp2");
    awp3 = awp.clone("awp3");
    awp4 = awp.clone("awp4");
    awp1.position.x = -25;
    awp1.position.y = 1;
    awp1.material = matPink;
    awp2.position.x = -15;
    awp3.position.x = 15;
    awp4.position.x = 25;

    adjustWep(player, awp);
  });
  player.mesh = BABYLON.MeshBuilder.CreateBox(
    "player",
    {
      width: 2,
      height: 8,
      depth: 1,
    },
    scene
  );
  player.mesh.parent = camera;
  player.mesh.position = new BABYLON.Vector3(0.5, 0, 10);
  player.mesh.isVisible = false;

  //3D GUI
  //  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
  //  var keyboard = new BABYLON.GUI.VirtualKeyboard.CreateDefaultLayout();
  //  advancedTexture.addControl(keyboard);
  //  player.parent = camera;
  // var jinxM = new BABYLON.StandardMaterial("jinxM", scene); //创建一个材质
  // jinxM.diffuseTexture = new BABYLON.Texture("./assert/Jinx__/Jinx_Base_TX_CM_1.png", scene);
  // var meshTask3 = assetsManager.addMeshTask("jinx task", "", "assert/Jinx__/", "jinx_obj_.obj");
  // meshTask3.onSuccess = function (task) {
  //   console.log(task.loadedMeshes);
  //   task.loadedMeshes[0].material = jinxM;
  // }
  //snow animation
  let frameRate = 30;
  const snowAnimation = new BABYLON.Animation(
    "snowAnimation",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  );
  const keyFrames = [];
  keyFrames.push({
    frame: 0,
    value: -30,
  });

  keyFrames.push({
    frame: 1 * frameRate,
    value: 0,
  });

  keyFrames.push({
    frame: 2 * frameRate,
    value: 30,
  });
  keyFrames.push({
    frame: 3 * frameRate,
    value: 0,
  });
  keyFrames.push({
    frame: 4 * frameRate,
    value: -30,
  });

  snowAnimation.setKeys(keyFrames);
  //gen snow
  var snowTask = assetsManager.addMeshTask(
    "snow task",
    "",
    "./assert/MODEL/",
    "snow.glb"
  );
  snowTask.onSuccess = (task) => {
    let meshes = task.loadedMeshes;
    //  snowman = BABYLON.Mesh.MergeMeshes(meshes);

    meshes.forEach((el, index) => {
      el.name = "snowman" + index;
    });
    meshes[0].scaling = new BABYLON.Vector3(20, 20, 20);
    meshes[0].position = new BABYLON.Vector3(0, 3.2, 1);
    meshes[0].animations.push(snowAnimation);
    snowman = meshes;
    scene.beginAnimation(meshes[0], 0, 4 * frameRate, true);
  };
  assetsManager.load();
  const adjustWep = function (player, awp) {
    player.weapons[0] = null;
    player.weapons[0] = awp.createInstance("myAwp");

    player.weapons[0].parent = camera;
    player.weapons[0].position = new BABYLON.Vector3(4, -3, 8);
    player.weapons[0].isVisible = true;
    player.weapons[0].addRotation(Math.PI / 6, 0, 0); //x
    player.weapons[0].addRotation(0, 0, -Math.PI / 2); //z
    player.weapons[0].addRotation(0, Math.PI / 3, 0); //y
    player.weapons[0].scaling = new BABYLON.Vector3(0.45, 0.45, 0.45);
    // player.weapons[0].checkCollisions =true;
  };
  scene.onBeforeRenderObservable.add(function () {
    if (awp1) {
      awp1.rotation.y += 0.03;
      // if (player.mesh) {
      //   if (player.mesh.intersectsMesh(awp1))
      //     console.log(111);
      //     player.weapons[0]=(awp1.createInstance("awp1p"));
      //     player.weapons[0].parent =camera;
      //     player.weapons[0].position =new BABYLON.Vector3(0,3,6);
      // }
      if (!player.weapons[0]) {
        adjustWep(player, awp1);
      } else {
        if (player.weapons[0].intersectsPoint(awp1.position)) {
          console.log("yes!");
        }
      }
    }
  });
  scene.onPointerDown = function (info) {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    console.log(pickResult);
    if (pickResult.hit) {
      if (pickResult.pickedMesh.name.includes("snowman")) {
        // pickResult.pickedMesh.isVisible =false;
        snowman.forEach((el) => {
          el.dispose();
        });
      }
    }
  };
  return scene;
};
/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function
//onPointerObservabl
scene.onKeyboardObservable.add((kbInfo) => {
  if (false) {
    switch (kbInfo.type) {
      case BABYLON.KeyboardEventTypes.KEYDOWN:
        console.log("按键: ", kbInfo.event.key);
        switch (kbInfo.event.key) {
          case "w":
            player.position.z += 0.5;
            break;
          case "a":
            player.position.x -= 0.5;
            break;
          case "s":
            player.position.z -= 0.5;
            break;
          case "d":
            player.position.x += 0.5;
            break;
          default:
            break;
        }
        break;
      case BABYLON.KeyboardEventTypes.KEYUP:
        console.log("抬起按键: ", kbInfo.event.keyCode);
        break;
    }
  }
});

// window.addEventListener("click", function () {
//   var pickResult = scene.pick(scene.pointerX, scene.pointerY);
//   console.log(pickResult);
//   if (pickResult.hit) {
//     pickResult.pickedMesh.isVisible =false;
//   }
// });
// 最后一步调用engine的runRenderLoop方案，执行scene.render()，让我们的3d场景渲染起来
engine.runRenderLoop(function () {
  scene.render();
});

// 监听浏览器改变大小的事件，通过调用engine.resize()来自适应窗口大小
window.addEventListener("resize", function () {
  engine.resize();
});

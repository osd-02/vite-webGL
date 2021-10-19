import * as THREE from "three";

class Demo {
  constructor() {
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.directionalLight = null;
    this.axes = null;

    this.size = {
      windowW: null,
      windowH: null,
    };
  }

  init($canvas) {
    // サイズを指定
    this.setSize();

    // シーンを作成
    this.scene = new THREE.Scene();

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.size.windowW / this.size.windowH,
      1,
      10000
    );
    this.camera.position.set(100, 100, 100);
    this.camera.lookAt(this.scene.position);

    // レンダラーを作成
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
    });
    this.renderer.setClearColor(new THREE.Color(0xeeffff));
    this.renderer.setSize(this.size.windowW, this.size.windowH);

    //光源の追加
    this.directionalLight = new THREE.DirectionalLight(0xffffff);
    this.directionalLight.position.set(1000, 100, 100);
    this.scene.add(this.directionalLight);

    //座標軸ヘルパーの追加
    this.axes = new THREE.AxesHelper(100);
    // this.scene.add(this.axes);
  }

  setSize() {
    this.size = {
      windowW: window.innerWidth,
      windowH: window.innerHeight,
    };
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default new Demo();

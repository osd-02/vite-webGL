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
    this.camera.position.set(1000, 1000, 1000);
    this.camera.lookAt(this.scene.position);

    // レンダラーを作成
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(new THREE.Color(0xbdd3e2));
    this.renderer.setSize(this.size.windowW, this.size.windowH);

    //光源の追加
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(0, 0, 0);
    this.scene.add(this.light);
    
    //座標軸ヘルパーの追加
    // this.axes = new THREE.AxesHelper(100);
    // this.scene.add(this.axes);
    
    //フォグの追加
    this.scene.fog = new THREE.Fog(0x000000, 50, 200000);

  }
  //リサイズイベントを設定
  resize() {
    this.setSize();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect = this.size.windowW / this.size.windowH;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.size.windowW, this.size.windowH);
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

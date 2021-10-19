import * as THREE from "three";
import Demo from "./Demo";
export default class MatcapKnot {
  constructor() {
    this.init();
  }

  init() {
    // 箱を作成
    this.geometry = new THREE.TorusKnotGeometry( 240, 50, 500, 60 );
    this.material = new THREE.MeshMatcapMaterial({color: 0xd9dbde});
    // this.material.matcap = "porcelainWhite"
    this.sphere = new THREE.Mesh(this.geometry, this.material);

    Demo.scene.add(this.sphere);

    console.log(Demo.scene.children);
  }

  update() {
    this.sphere.rotation.y += 0.003;
    this.sphere.rotation.x += 0.005;
    this.sphere.rotation.z += 0.001;
  }
}

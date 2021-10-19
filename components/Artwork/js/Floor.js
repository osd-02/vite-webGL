import * as THREE from "three";
import Demo from "./Demo";
export default class Floor {
  constructor() {
    this.init();
  }

  init() {
    this.meshFloor = new THREE.Mesh(
      new THREE.BoxGeometry(2000, 0.1, 2000),
      new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.0 })
    );
    this.meshFloor.position.set(0, -300, 0);
    Demo.scene.add(this.meshFloor);
  }
}

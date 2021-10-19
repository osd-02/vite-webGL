import * as THREE from "three";
import Demo from "./Demo";
export default class Particles {
  constructor() {
    this.init();
  }

  init() {
    // 使用する変数を設定
    this.SIZE_X = window.innerWidth * 10;
    this.SIZE_Y = window.innerHeight * 10;
    this.SIZE_Z = 100000;

    this.COUNT = 100000;

    this.vertices = [];
    for (let i = 0; i < this.COUNT; i++) {
      this.x = this.SIZE_X * (Math.random() - 0.5);
      this.y = this.SIZE_Y * (Math.random() - 0.5);
      this.z = this.SIZE_Z * (Math.random() - 0.5);
    
      this.vertices.push(this.x, this.y, this.z);
    }
    
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices, 3));

    this.material = new THREE.PointsMaterial({
      // 一つ一つのサイズ
      size: 10,
      // 色
      color: 0xffffff,
      sizeAttenuation: true
    });
    this.particles = new THREE.Points(this.geometry, this.material);

    Demo.scene.add(this.particles);
  }

  update() {
    this.particles.rotation.y -= 0.0007;
    this.particles.rotation.x -= 0.0007;
    this.particles.rotation.z -= 0.0007;
  }
}

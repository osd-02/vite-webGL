import Demo from "./Demo"
import ParticlesWhite from "./ParticlesWhite"
import ParticlesBlack from "./ParticlesBlack"
// three.jsの処理を書いていく
export default class ArtworkGL{
  constructor(props){
    this.props = props;
    this.init();
  }

  init(){
    Demo.init(this.props.$canvas);
    this.particlesWhite = new ParticlesWhite();
    this.particlesBlack = new ParticlesBlack();
    window.addEventListener("resize", this.resize.bind(this));
    this.loop();
  }

  resize(){
    Demo.resize();
  }

  loop() {
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  render(){
    this.particlesWhite.update();
    this.particlesBlack.update();
    Demo.render();
  }
}
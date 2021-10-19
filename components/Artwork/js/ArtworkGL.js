import Demo from "./Demo"
import Shape from "./Shape"
import Floor from "./Floor"
import MatcapKnot from "./MatcapKnot"
import Particles from "./Particles"
// three.jsの処理を書いていく
export default class ArtworkGL{
  constructor(props){
    this.props = props;
    this.init();
  }

  init(){
    Demo.init(this.props.$canvas);
    this.shape = new MatcapKnot();
    // this.shape = new Shape();
    // this.particles = new Particles();
    // this.floor = new Floor();
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
    this.shape.update();
    // this.particles.update();

    Demo.render();
  }
}
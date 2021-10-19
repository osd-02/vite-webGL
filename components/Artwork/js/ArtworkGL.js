import Demo from "./Demo"
import Shape from "./Shape"
// three.jsの処理を書いていく
export default class ArtworkGL{
  constructor(props){
    this.props = props;
    this.init();
  }

  init(){
    Demo.init(this.props.$canvas);
    this.shape = new Shape();
    this.loop();
  }

  loop() {
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  render(){
    this.shape.update();
    Demo.render();
  }
}
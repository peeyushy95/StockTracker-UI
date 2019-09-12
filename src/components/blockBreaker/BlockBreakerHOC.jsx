import React from "react";
import {Header} from '../componentsInterface';

class BlockBreakerHOC extends React.Component {
  constructor(props) {
    super(props);
  }

  fullScreen(){
    window.gameInstance.SetFullscreen(1);
  }

  componentDidMount(){
    window.gameInstance = window.UnityLoader.instantiate("gameContainer", "Build/block breaker.json", {onProgress: window.UnityProgress});
  }
  render() {

    // Finally render the Unity component and pass
    // the Unity content through the props.

    //return <Unity unityContent={this.unityContent} />;

    return (
      <React.Fragment>
        <Header />
        <div className="webgl-content">
          <div id="gameContainer" style={{width: "800px", height: "600px"}}></div>
          <div className="footer">
            <div className="webgl-logo"></div>
            <div className="fullscreen" onClick={this.fullScreen}></div>
            <div className="title">Block Breaker</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BlockBreakerHOC;

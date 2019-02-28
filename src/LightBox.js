import React from "react";
import Draggable from "react-draggable";
import { backgroundDimmer, lightBox, close } from "./style.js";

class LightBox extends React.Component {
  render() {
    var transparency = "";
    if (typeof this.props.transparency !== "undefined") {
      transparency = this.props.transparency;
    } else {
      transparency = "0.2";
    }

    return (
      <>
        <div id="_lb-background" style={backgroundDimmer(transparency)}>
          {/*this div intentionally empty. Allows the light box content to scroll */}
        </div>
        <Draggable>
          <div id="_lb-body" style={lightBox}>
            <span style={close} onClick={this.props.close}>
              x
            </span>
            {this.props.children}{" "}
            {/*there must be nested markup components passed in*/}
          </div>
        </Draggable>
      </>
    );
  }
}

export default LightBox;

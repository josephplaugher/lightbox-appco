import React from "react";
import Draggable from "react-draggable";
import { backgroundDimmer, lightBox, close } from "./style.js";

class LightBox extends React.Component {
  render() {
    // if this.prop.backgroundDimmer is not specified, set the default of 0.2
    var transparency = "";
    if (typeof this.props.backgroundDimmer !== "undefined") {
      transparency = this.props.backgroundDimmer;
    } else {
      transparency = "0.2";
    }

    return (
      <>
        <div id="_lb-background" style={backgroundDimmer(transparency)}>
          {/*this div intentionally empty. Sets the background dimm level*/}
        </div>

        {/*makes the lightbox draggable*/}
        <Draggable>
          <div id="_lb-body" style={lightBox(this.props.style)}>
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

import React from "react";
import "./lightbox.css";

class LightBox extends React.Component {
  render() {
    return (
      <div className="lightbox-background">
        <div className="lightbox">
          <span className="close" onClick={this.props.close}>
            x
          </span>
          {this.props.children}{" "}
          {/*there must be nested markup components passed in*/}
        </div>
      </div>
    );
  }
}

export default LightBox;

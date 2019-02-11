import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  var ImageStyles = {
    height: '5%',
    width: '5%'
  }
    return(
    <div style={ImageStyles}>
      <img alt="logo" src={props.src}/>
    </div>
   );
}

Image.propTypes = {
    src: PropTypes.string.isRequired
};

export default Image;

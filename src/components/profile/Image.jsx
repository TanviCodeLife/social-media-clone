import React from "react";
import PropTypes from "prop-types";

function Image({src}) {
  var ImageStyles = {
    position: 'absolute',
    left: '20',
    top: '165',
    height: '50',
    width: '50',
    border: '2px solid white',
    borderRadius: '15',
    backgroundColor: 'white'
  }

    return(
      <img style={ImageStyles} alt="logo" src={src}/>
   );
}

Image.propTypes = {
    src: PropTypes.string.isRequired
};

export default Image;

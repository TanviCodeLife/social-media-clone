import React from "react";
import PropTypes from "prop-types";

function Image({src}) {
  var ImageStyles = {
    position: 'relative',
    top: '-25px',
    left: '20px',
    height: '50px',
    width: '50px',
    border: '2px solid white',
    borderRadius: '15px',
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

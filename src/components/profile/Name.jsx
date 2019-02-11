import React from "react";
import PropTypes from "prop-types";

function Name({name}){
  var NameStyles = {
    textAlign: 'right',
    marginRight: '10',
    font: 'bold',
    letterSpacing: '1',
  }
    return(
      <div style={NameStyles}>
        <p>{name}</p>
      </div>
    );
}

Name.propTypes = {
    src: PropTypes.string.isRequired
};

export default Name;

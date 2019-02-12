import React from "react";
import PropTypes from "prop-types";

function Name({name}){
  var NameStyles = {
    textAlign: 'right',
    marginRight: '10px',
    font: 'bold',
    letterSpacing: '1px'
  }
    return(
      <div style={NameStyles}>
        <p>{name}</p>
      </div>
    );
}

Name.propTypes = {
    name: PropTypes.string.isRequired
};

export default Name;

import React from "react";

function Box({src}) {
  var BoxStyles = {
    backgroundColor: '#3494d8',
    height: '60',
    width: '100%',
    boxShadow: '1px 3px 3px rgb(117, 121, 127, .5)'
  }
  return(
    <div style={BoxStyles}>
    </div>
   );
}

export default Box;

import React from "react";
import Name from "./Name";
import Stats from "./Stats";
import Image from "./Image";

function Self(){
  var  SelfStyles = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginRight: '50%',
  marginTop: '5%',
  textAlign: 'justify',
  backgroundColor: '#ecf0f1',
  }

  return (
      <div style={SelfStyles}>
        <Name/>
        <Image
        src="https://pngimage.net/wp-content/uploads/2018/06/user-login-images-png-5.png"/>
        <Stats/>
      </div>
  );
}

export default Self;

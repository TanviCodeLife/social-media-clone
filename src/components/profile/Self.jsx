import React from "react";
import Name from "./Name";
import Stats from "./Stats";
import Image from "./Image";
import Box from "./Box";
import About from "./About";

function Self(){
  var  SelfStyles = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginRight: '5%',
  marginTop: '5%',
  textAlign: 'justify',
  backgroundColor: 'white',

  }

  return (
      <div style={SelfStyles}>
        <Box/>
        <Image
          src="https://pngimage.net/wp-content/uploads/2018/06/user-login-images-png-5.png"/>
        <Name
          name="Marie Claire"/>
        <Stats/>
        <About/>
      </div>
  );
}

export default Self;

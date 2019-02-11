import React from "react";
import Header from "./header/Header";
import About from "./About";
import Self from "./profile/Self";

function App(){
  var AppStyles = {
  fontFamily: 'Arial'
  }
    return (
        <div style={AppStyles}>
            <Header/>
            <Self/>
            <About/>
        </div>
    );
}

export default App;

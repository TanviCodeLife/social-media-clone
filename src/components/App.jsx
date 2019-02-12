import React from "react";
import Header from "./header/Header";
import Self from "./profile/Self";
import UserList from "./list-users/UserList";

function App(){
  var AppStyles = {
  fontFamily: 'Arial',
  }

  var FlexStyles = {
    fontFamily: 'Arial',
    display: 'flex',
    flexDirection: 'row',
    marginRight: '40%'
  }
    return (
        <div style={AppStyles}>
            <Header/>
            <div style={FlexStyles}>
              <Self/>
              <UserList/>
            </div>
        </div>
    );
}

export default App;

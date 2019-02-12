import React from "react";
import SearchList from "./SearchList";
import User from "./User";

var masterUserList = [
  {
    name: 'user 1',
    source: 'https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png',
    message: 'Message 1'
  },
  {
  name: 'user 2',
  source: 'https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png',
  message: 'Message 2'
  },
  {
  name: 'user 3',
  source: 'https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png',
  message: 'Message 3'
  }
];

function UserList(){
  var UserListStyles = {
  marginTop: '5%'
  }
  return (
      <div style={UserListStyles}>
      <SearchList/>
      {masterUserList.map((user, index) =>
      <User name = { user.name}
            source = { user.source}
            message = { user.message}
            key={index}/>
      )}
      </div>
  );
}

export default UserList;

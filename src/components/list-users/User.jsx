import React from "react";
import PropTypes from 'prop-types';

function User({name, source, message}){
  var UserStyles = {
    marginTop: '10%',
    width: '200px',
    display: 'flex',
    justifyContent: 'stretch',
    backgroundColor: '#ecf0f1'
  }

var ImageStyles = {
  marginTop: '2%',
  height: '70px',
  width: '70px',
  marginLeft: '10%',
  marginRight: '10%',
  border: '2px solid white',
  backgroundColor: 'white',
  borderRadius: '15px'
}



    return(
      <div style = {UserStyles}>
        <img style={ImageStyles} alt="userPic" src={source}/>
        <div>
          <p>{name}</p>
          <p>{message}</p>
        </div>
      </div>
    );
}

User.propTypes = {
name: PropTypes.string.isRequired,
source: PropTypes.string.isRequired,
message: PropTypes.string.isRequired
}
export default User;

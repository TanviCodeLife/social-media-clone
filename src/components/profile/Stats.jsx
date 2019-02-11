import React from "react";


function Stats(){
  var  StatsStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    letterSpacing: '1'
  }
  return(
    <div style={StatsStyles}>
      <p>TWEETS</p>
      <p>FOLLOWING</p>
      <p>FOLLOWERS</p>
    </div>
  );

}

export default Stats;

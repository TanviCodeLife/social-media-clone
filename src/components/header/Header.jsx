import React from "react";
import Link from "./Link";
import Search from "./Search";
import Tweet from "./Tweet";

function Header() {
    var  HeaderStyles = {
    display: 'flex',
    backgroundColor: '#ecf0f1',
    justifyContent: 'space-evenly'
    }

    return (
        <div style={HeaderStyles}>
        <Link/>
        <Search/>
        <Tweet/>
        </div>
    );
}

export default Header;

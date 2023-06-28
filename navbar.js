import React from "react";

function Navbar(){

return(

    <div className="navbar">
       <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#register">Register</a></li>
        </ul>
    </div>
)

}

export default Navbar;
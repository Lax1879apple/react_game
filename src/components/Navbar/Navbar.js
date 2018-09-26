import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    <nav className="navbar">
        
        <div>
            Clicky Game
        </div>
        <div>
            Score: {props.score} | Top Score: {props.topScore}
        </div>
    </nav>
);

export default Navbar;
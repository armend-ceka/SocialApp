import React, { useState } from "react";
import { Link , useLocation} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [current,setCurrent] = useState(location.pathname)
  const white = {
    width: "150px",
    height: "3px",
    background: "white",
    float:"left"
  };
  const blue = {
    width: "150px",
    height: "3px",
    background: "transparent",
    float:"left"
  };
  return (
    <nav className="navbar">
      <div className="top">
        <ul>
          <Link to="/">
            <div className="navitem" onClick={()=> setCurrent("/")}>
              Home
            </div>
          </Link>
          <Link to="/users">
            <div className="navitem" onClick={()=> setCurrent("/users")}>
              Users
            </div>
          </Link>
          <Link to="/profile">
            <div className="navitem" onClick={()=> setCurrent("/profile")}>Profile</div>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div style={current==="/"?white:blue}></div>
        <div style={current==="/users"?white:blue}></div>
        <div style={current==="/profile"?white:blue}></div>
      </div>
    </nav>
  );
}

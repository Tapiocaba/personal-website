import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect, useRef } from "react";

function NavBar() {
    return (
        <div>
            <nav>
                <NavLink to="/">home</NavLink> <br />
                <NavLink to="/about">about</NavLink> <br />
                <NavLink to="/projects">projects</NavLink> <br />
                <NavLink to="/journal">journal</NavLink> <br />
                <NavLink to="/resume">resume</NavLink> <br />
            </nav>
        </div>
    );
}

export default NavBar;
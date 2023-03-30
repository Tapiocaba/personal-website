import React from 'react'
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h1>oops! you're lost :( </h1>
        
        <p style={{ textDecoration: 'none' }}>
            let's get you back {" "}
            <NavLink to="/" class="clickable">
                <u>
                    <b> home</b>
                </u>
            </NavLink>!
        </p>
    </div>
    
    )
}

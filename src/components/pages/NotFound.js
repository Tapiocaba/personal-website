import React from 'react'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'

export default function NotFound() {
    useEffect(() => {
        document.title = "not found :(";
    }, []);

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

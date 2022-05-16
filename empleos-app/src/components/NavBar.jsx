import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {authContext} from "../context/AuthContext"

export default function NavBar(){

    const context = useContext(authContext)

    return(
        <nav>
            {console.log("Render..")}

            <ul>
                <li><Link to="/">Home</Link></li>
                {!context.auth.logged&&<li><Link to="/login">Login</Link></li>}
                {!context.auth.logged&&<li><Link to="/signup">Sign Up</Link></li>}
                {context.auth.logged&&<li>{context.auth.name}</li>}
            </ul>
        </nav>
    )
}
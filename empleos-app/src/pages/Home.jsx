import React from "react";
import { Link } from "react-router-dom";

export default function Home(){

    return(
        <div>
    <h1>WELCOME!</h1>
    <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link>
    </div>
    )
}
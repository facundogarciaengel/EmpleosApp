import React, {useRef} from "react";

export default function SignUp(){
    const email = useRef()
    const password = useRef()
    const name = useRef()

    const signup = (event) => {
        fetch("http://localhost:4000/api/signup",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.current.value,
                password: password.current.value,
                email: email.current.value
            })
        })
        .then(res => res,json())
        .then(data => console.log(data))
        .catch(error=> console.log(error))

    }

    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={signup}>
                <fieldset>
                    <input ref={name} placeholder="Name.." type="text"/>
                    <input ref={email} placeholder="Email.." type="email"/>
                    <input ref={password} placeholder="Password" type="password"/>
                    <button>Signup</button>
                </fieldset>
            </form>
        </div>
    )
}
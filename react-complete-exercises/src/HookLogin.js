import React from "react"
import { useLogin } from "./useLogin"

export function HookLogin({login}){
    const {data, username, password, onInputs} = useLogin({
        username:'',
        password:'',
    })
    return (
        <div>
            <input name="username" value={username} onChange={onInputs}></input>
            <input name="password" type="password" value={password} onChange={onInputs}></input>
            <button name="loginButton" type="submit" onClick={()=>login(data)} disabled={username==="" && password===""}>Login</button>
        </div>
    )
}
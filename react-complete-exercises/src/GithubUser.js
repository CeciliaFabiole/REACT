import React, { useEffect, useState } from "react";

export function GithubUser({username}){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=>response.json())
        .then((json)=>setUser(json))
    },[username])

    return(
        <div>
            <h3>USER</h3>
            {!user && <p>Loading...</p>}
            <p>Nome: {user && user.name}</p>
            <p>Username: {user && user.login}</p>
            <p>ID: {user && user.id}</p>
            <p>Bio: {user && user.bio}</p>
        </div>
    )
}
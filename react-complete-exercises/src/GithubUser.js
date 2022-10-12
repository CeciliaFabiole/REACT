import React, { useEffect, useState } from "react";

export function GithubUser({username}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        setError(null)
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=>{
            if (response.status !== 200){
                setError(new Error('User not found'))
            }
            return response.json()
        })
        .then((json)=>setUser(json))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false))
    },[username])

    return(
        <div>
            <h3>USER</h3>
            {loading && <p>Loading...</p>}
            {error && <h1>There has been an Error</h1>}
            <p>Nome: {user && user.name}</p>
            <p>Username: {user && user.login}</p>
            <p>ID: {user && user.id}</p>
            <p>Bio: {user && user.bio}</p>
        </div>
    )
}
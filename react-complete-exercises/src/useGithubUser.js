import { useState, useEffect } from "react";

export function useGithubUser(username){
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

    return{
        user : user,
        loading : loading,
        error: error,
    }
}
import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}){
    const {user, error, loading} = useGithubUser(username)

    return(
        <div>
            <h3>USER</h3>
            {loading && <p>Loading...</p>}
            {error && <h1>There has been an Error</h1>}
            {user && <p>Nome: {user.name}</p>}
            {user && <p>Username: {user.login}</p>}
            {user && <p>ID: {user.id}</p>}
            {user && <p>Bio: {user.bio}</p>}
        </div>
    )
}
import React from "react";
import { GithubUser } from './GithubUser'
import { Link, useParams } from "react-router-dom";

export function ShowGithubUser(){
    const {username} = useParams()
    return(
        <div>
            <GithubUser username={username}/>
            <Link to='/users'>Back</Link>
        </div>
    )
}
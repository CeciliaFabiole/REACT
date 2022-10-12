import  React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList(){
    const [usernames, setUsernames] = useState([])
    const [username, setUsername] = useState('')

    function handleChange(event){
        setUsername(event.target.value)
    }

    function handleFetch(){
        setUsernames([...usernames, username])
        return setUsername('')
    }

    return(
        <div>
            <ul>{usernames.map((item, index)=><li key={item + index}><GithubUser username={item}/></li>)}</ul>
            <input name='username' value={username} onChange={handleChange}/>
            <button onClick={handleFetch}>Ottieni</button>
        </div>
    )
}
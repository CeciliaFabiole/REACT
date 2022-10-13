import  React, { useState } from "react";
import { Link, Outlet, } from "react-router-dom";

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
            <ul>{usernames.map((item, index)=><li key={item + index}><Link to={item}>{item}</Link></li>)}</ul>
            <input name='username' value={username} onChange={handleChange}/>
            <button onClick={handleFetch}>Ottieni</button>
            <Outlet/>
        </div>
    )
}
//Come faccio ad aggiungere la mia value dell'input al path del link?
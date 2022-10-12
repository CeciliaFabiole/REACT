import { useState } from "react";

export function useLogin(){
    const [data, setData] = useState({
        username:'',
        password:'',
    })

    function handleInputs(event){
        event.preventDefault()
        const {name, value} = event.target
        setData(()=>{
            return {
                ...data,
                [name] : value,
            }
        })
    }

    return{
        data : data,
        username : data.username,
        password: data.password,
        onInputs: handleInputs,
    }
}
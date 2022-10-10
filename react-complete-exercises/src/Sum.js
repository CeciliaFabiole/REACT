import React from "react";

export function Sum({numbers}){
    const numberSum= numbers.reduce((sum, current)=> sum + current, 0)
    return(
        <div>
            <h1>{numberSum}</h1>
        </div>
    )
}
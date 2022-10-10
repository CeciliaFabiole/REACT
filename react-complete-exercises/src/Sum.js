import React from "react";

export function Sum({numbers=[1,2,3]}){
    const numberSum= numbers.reduce((sum, current)=> sum + current, 0)
    return(
        <div>
            <h1>La somma è : {numberSum}</h1>
        </div>
    )
}
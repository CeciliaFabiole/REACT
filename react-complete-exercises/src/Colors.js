import React from "react";

export function Colors({items}){
    return(
        <div>
            <h3>Lista dei colori</h3>
            <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
    )
}
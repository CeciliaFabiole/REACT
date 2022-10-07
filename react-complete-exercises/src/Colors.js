import React from "react";

export function Colors({items}){
    return(
        <div>
            <h3>Lista dei colori</h3>
            <ul>{items.map(item => <li key={item.id}>{item.colore}</li>)}</ul>
        </div>
    )
}
import React, { useEffect, useState, useMemo } from "react";

const completeList = [
    {id: 1, name: 'Marta', age: 22},
    {id: 2, name: 'Luca', age: 17},
    {id: 3, name: 'Cecilia', age: 30},
    {id: 4, name: 'Mario', age: 14},
    {id: 5, name: 'Veronica', age: 13},
    {id: 6, name: 'Simone', age: 25},
    {id: 7, name: 'Serena', age: 34},
    {id: 8, name: 'Marco', age: 36}
]
export function FilteredList(){
    const [list, setList] = useState(completeList)

    const adults = useMemo(()=> list.filter((item)=> item.age>18), [list])

    useEffect(()=>setList(list),[list])

    return(
        <div>
            <h3>Adults list:</h3>
            <ul>{adults && adults.map((item)=><li key={item.id}>{item.name}, {item.age}</li>)}</ul>
        </div>
    )
}
import React, { useRef, useState, useEffect } from "react";

export function CarDetailsForm({initialData={model:'Lancia', year:2000, color:'red'}}){
    const inputRef = useRef()
    const [value, setValue] = useState(false)

    useEffect(()=>{
        inputRef.current.elements.model.value = initialData.model
        inputRef.current.elements.year.value = initialData.year
        inputRef.current.elements.color.value = initialData.color
    }, [initialData])

    useEffect(()=>{
        if (value===true) {
            inputRef.current.reset()
        }
    })

    const handleInputChange = ()=>setValue(true)

    return (
        <form ref={inputRef} onChange={handleInputChange}>
            <h2>My Car</h2>
            <input name="model" placeholder="Model"/>
            <input name="year" placeholder="Year"/>
            <input name="color" placeholder="Color"/>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
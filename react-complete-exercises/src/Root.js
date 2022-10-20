import React from "react";
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'
import { SWRConfig } from "swr";

const fetcher = url => fetch(url).then((response)=>{
    if (response.status !== 200){
        const error = new Error('An error occurred while fetching the data.')
        throw error
    }
    return response.json()
})

export function Root(){
    return (
        <SWRConfig value={{fetcher}}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SWRConfig>
    )
}
import React from "react";
import {Hello} from './Hello'
import { Welcome } from "./Welcome";

//CLASS COMPONENT
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Hello/>
//             </div>
//         )
//     }
// }
//FUNCTION COMPONENT
export function App(){
    return(
        <div>
            <Hello/>
            <Welcome name={<strong>John</strong>} age={28}/>
            <Welcome name={'John'} age={17}/>
            <Welcome name={'John'} age={65}/>
            <Welcome name={'John'} age={28}/>
        </div>
    )
}
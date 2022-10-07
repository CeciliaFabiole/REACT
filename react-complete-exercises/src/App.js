import React from "react";
import {Hello} from './Hello'
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";

//CLASS COMPONENT
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Hello/>
//                 <Welcome name={'John'} age={18}/>
//                 <Counter initialValue={0} incrementInterval={1} incrementAmount={1000}/>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function App(){
    return(
        <div>
            <Hello/>
            <Welcome name={'John'} age={18}/>
            <Counter initialValue={0} incrementInterval={1} incrementAmount={1000}/>
            <ClickCounter/>
        </div>
    )
}
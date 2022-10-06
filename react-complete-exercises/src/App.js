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
            <Welcome name={<strong>Dimitri</strong>} age={28}/>
        </div>
    )
}
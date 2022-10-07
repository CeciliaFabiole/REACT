import React from "react";
import { Colors } from "./Colors";
import { Hello } from './Hello'
import { UncontrolledLogin } from "./UncontrolledLogin";

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
let colorsList = ['rosso', 'giallo', 'verde', 'blu', 'viola']
export function App(){
    return(
        <div>
            <Hello/>
            <UncontrolledLogin/>
            <Colors items={colorsList}/>
        </div>
    )
}
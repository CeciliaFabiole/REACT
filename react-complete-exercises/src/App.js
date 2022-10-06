import React from "react";
import {Hello} from './Hello'

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
        </div>
    )
}
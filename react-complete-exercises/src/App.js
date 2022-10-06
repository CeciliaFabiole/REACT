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
            <Welcome name={<strong>Dimitri</strong>} age={22}/>
            {/* Il mio tutor mi aveva consigliato di scriverla così:
            <Welcome name={()=><strong>Dimitri</strong>} age={22}/>
            ma non funziona. Come faccio a farla funzionare? Dove
            la richiamo? */}
        </div>
    )
}
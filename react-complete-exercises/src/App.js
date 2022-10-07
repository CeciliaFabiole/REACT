import React from "react";
// import { Colors } from "./Colors";
// import { Hello } from './Hello'
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"

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
let colorsList = [
    {id:1, colore:'rosso'},
    {id:2, colore:'giallo'},
    {id:3, colore:'verde'},
    {id:4, colore:'blu'},
    {id:5, colore:'viola'},
]

export function App(){
    return(
        <div>
            {/* <Hello/> */}
            <Welcome/>
            {/* <UncontrolledLogin/> */}
            {/* <Colors items={colorsList}/> */}
            {/* <TodoList/> */}
            <Counter/>
        </div>
    )
}
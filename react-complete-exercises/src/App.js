import React from "react";
import { Hello } from './Hello'
// import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";

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
            {/* <Counter initialValue={0} incrementInterval={1} incrementAmount={1000}/> */}
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
        </div>
    )
}
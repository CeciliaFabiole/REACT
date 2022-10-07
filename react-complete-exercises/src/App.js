import React from "react";
import { Hello } from './Hello'
// import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
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
export function App(){
    function onLogin(data){
        console.log('delle info sono state inviate: ' + data.username, data.password, data.remember)
    }
    // function onLogin(state){
    //     console.log('delle info sono state inviate: ' + state.username, state.password, state.remember)
    // }
    return(
        <div>
            <Hello/>
            {/* <Counter initialValue={0} incrementInterval={1} incrementAmount={1000}/> */}
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
            {/* <Login login={(data)=>onLogin(data)}/> */}
            <UncontrolledLogin/>
        </div>
    )
}
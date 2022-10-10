import React from "react";
import { Colors } from "./Colors";
// import { Hello } from './Hello'
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { Login } from "./Login";
import { Container } from "./Container";
// import { Language } from './Language'
// import { Sum } from "./Sum";
import { ClickCounter } from "./ClickCounter";

//CLASS COMPONENT
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Hello/>
//                 <Welcome name={'John'} age={18}/>
//                 <Counter initialValue={0} incrementInterval={1} incrementAmount={1000}/>
//                  <Container>
//                      <Welcome name="Dimitri"/>
//                      <p>Paragraph</p>
//                  </Container>
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
    function onLogin(data){
        console.log('delle info sono state inviate: ' + data.username, data.password, data.remember)
    }
    function onCounterChange(count){
        console.log(`The counter is now ${count}`)
    }
    return(
        <Container title='My App'>
            {/* <Hello/> */}
            {/* <Welcome age={22} name="Cecilia"/> */}
            {/* <UncontrolledLogin/> */}
            <Colors items={colorsList}/>
            {/* <TodoList>{(items, removeItem)=> items.map((item, index) => <li key={index}>{item}<button onClick={()=>removeItem(index)}>x</button></li>)}</TodoList> */}
            <Login login={(data)=>onLogin(data)}/>
            <Counter/>
            {/* <Language/> */}
            {/* <Sum/> */}
            <ClickCounter onCounterChange={(count)=>onCounterChange(count)}/>
        </Container>
    )
}
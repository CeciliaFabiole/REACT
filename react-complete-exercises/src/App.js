import React from "react";
// import { Colors } from "./Colors";
// import { Hello } from './Hello'
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
// import { Login } from "./Login";
import { Container } from "./Container";
// import { Language } from './Language'
// import { Sum } from "./Sum";
// import { ClickCounter } from "./ClickCounter";
// import { GithubUserList } from "./GithubUserList";
// import { HookCounter } from "./HookCounter";
// import { HookLogin } from "./HookLogin";
// import { FilteredList } from "./FilteredList";
// import { CarDetailsForm } from "./CarDetailsForm";
import { Route, Routes, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

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
// let colorsList = [
//     {id:1, colore:'rosso'},
//     {id:2, colore:'giallo'},
//     {id:3, colore:'verde'},
//     {id:4, colore:'blu'},
//     {id:5, colore:'viola'},
// ]

export function App(){
    // function onLogin(data){
    //     console.log('delle info sono state inviate: ' + data.username, data.password, data.remember)
    // }
    // function onCounterChange(count){
    //     console.log(`The counter is now ${count}`)
    // }
    return(
        <Container title='My App'>
            {/* <Hello/> */}
            {/* <Welcome age={22} name="Cecilia"/> */}
            {/* <UncontrolledLogin/> */}
            {/* <Colors items={colorsList}/> */}
            {/* <TodoList>{(items, removeItem)=> items.map((item, index) => <li key={index}>{item}<button onClick={()=>removeItem(index)}>x</button></li>)}</TodoList> */}
            {/* <Login login={(data)=>onLogin(data)}/> */}
            {/* <Counter/> */}
            {/* <Language/> */}
            {/* <Sum/> */}
            {/* <ClickCounter onCounterChange={(count)=>onCounterChange(count)}/> */}
            {/* <GithubUserList/> */}
            {/* <HookCounter/> */}
            {/* <HookLogin login={(data)=>onLogin(data)}/> */}
            {/* <FilteredList/> */}
            {/* <CarDetailsForm/> */}
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/counter'>Counter</Link>
            </div>
            <div>
                <Link to='/users'>Users</Link>
            </div>
            <Routes>
                <Route path='/' element={<Welcome name='Dimitri'/>}/>

                <Route path='/counter' element={<Counter/>}/>

                <Route path="*" element={
                    <div>
                        <p>Page Not Found</p>
                        <Link to="/">Go Home</Link>
                    </div>}>
                </Route>

                <Route path='users' element={<GithubUserList/>}>
                    <Route path=':username' element={<ShowGithubUser/>}/>
                </Route>

            </Routes>
        </Container>
    )
}
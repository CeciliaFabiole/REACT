import React, { useState } from "react";

//CLASS COMPONENT
// export class Login extends React.Component {
//     state = {
//         username:"",
//         password:"",
//         remember: false,
//     }
//     handleInputs = (event) => {
//         event.preventDefault()
//         const value = event.target.value;
//         const name = event.target.name;
//         const checked = event.target.checked;
//         const type = event.target.type;
//         this.setState ({
//             [name] : type === 'checkbox' ? checked : value
//         })
//         console.log(event.target.checked)
//     }
    
//     componentDidUpdate(){
//         console.log(this.state)
//     }
//     handleReset = () => {
//         this.setState({
//             username:'',
//             password:'',
//             remember: false,
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input name="username" value={this.state.username} onChange={this.handleInputs}></input>
//                 <input name="password" type="password" value={this.state.password} onChange={this.handleInputs}></input>
//                 <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputs}></input>
//                 <button name="loginButton" type="submit" onClick={()=>this.props.login(this.state)} disabled={this.state.username==="" && this.state.password===""}>Login</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function Login({login}){
    const [data, setData] = useState({
        username:'',
        password:'',
        remember:false,
    })

    function handleInputs(event){
        event.preventDefault()
        const {name, type, checked, value} = event.target
        setData(()=>{
            return {
                ...data,
                [name] : type==='checkbox' ? checked : value,
            }
        })
    }
    function handleReset(){
        setData(()=> {
            return {
                username:'',
                password:'',
                remember:false,
            }
        })
    }

    return (
        <div>
            <input name="username" value={data.username} onChange={(e)=>handleInputs(e)}></input>
            <input name="password" type="password" value={data.password} onChange={(e)=>handleInputs(e)}></input>
            <input name="remember" type="checkbox" checked={data.remember} onChange={(e)=>handleInputs(e)}></input>
            <button name="loginButton" type="submit" onClick={()=>login(data)} disabled={data.username==="" && data.password===""}>Login</button>
            <button onClick={()=>handleReset()}>Reset</button>
        </div>
    )
}
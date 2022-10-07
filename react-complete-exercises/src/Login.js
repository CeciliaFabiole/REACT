import React, { useState } from "react";

//CLASS COMPONENT
// export class Login extends React.Component {
//     state = {
//         username:"",
//         password:"",
//         rememberCheckbox: false,
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
//     render() {
//         return (
//             <div>
//                 <input name="username" value={this.state.username} onChange={this.handleInputs}></input>
//                 <input name="password" type="password" value={this.state.password} onChange={this.handleInputs}></input>
//                 <input name="rememberCheckbox" type="checkbox" checked={this.state.rememberCheckbox} onChange={this.handleInputs}></input>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function Login(){
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

    return (
        <div>
            <input name="username" value={data.username} onChange={(e)=>handleInputs(e)}></input>
            <input name="password" type="password" value={data.password} onChange={(e)=>handleInputs(e)}></input>
            <input name="remember" type="checkbox" checked={data.remember} onChange={(e)=>handleInputs(e)}></input>
        </div>
    )
}
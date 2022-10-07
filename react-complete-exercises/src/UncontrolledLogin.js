import React from "react";

//CLASS COMPONENT
// export class UncontrolledLogin extends React.Component {
//     handleInputs = (event) => {
//         event.preventDefault()
//         const username = event.target.elements.username.value;
//         const password = event.target.elements.password.value;
//         const remember = event.target.elements.remember.checked;
//         console.log({
//             username,
//             password,
//             remember,
//         })
//     }
//     render() {
//         return (
//             <form onSubmit ={this.handleInputs}>
//                 <input name="username"></input>
//                 <input name="password" type="password"></input>
//                 <input name="remember" type="checkbox"></input>
//                 <button type="submit">Login</button>
//                 <button type="reset">Reset</button>
//             </form>
//         )
//     }
// }

//FUNCTION COMPONENT
export function UncontrolledLogin(){
    function handleInputs(event){
        event.preventDefault()
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;
        console.log({
            username,
            password,
            remember,
        })
    }
    return (
        <form onSubmit ={(e)=>handleInputs(e)}>
            <input name="username"></input>
            <input name="password" type="password"></input>
            <input name="remember" type="checkbox"></input>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
import React from "react";

//CLASS COMPONENT
// export class Welcome extends React.Component {
//     render() {
//         return <p>Welcome, {this.props.name}!</p>
//     }
// }
//FUNCTION COMPONENT
export function Welcome({name}){
    return <p>Welcome, {name}!</p>
}
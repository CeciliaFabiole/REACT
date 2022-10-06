import React from "react";

//CLASS COMPONENT
// export class Welcome extends React.Component {
//     render() {
//         return <p>Welcome, {this.props.name  ?? 'friend'}!</p>
//     }
// }
//static property
// Welcome.defaultProps = {
//     name: 'my friend',
// }
//If no name is passed just the props is undefined, I can give one default value by the double question mark
//or by creating a static property

//FUNCTION COMPONENT
export function Welcome({name='new friend'}){
    return <p>Welcome, {name}!</p>
}
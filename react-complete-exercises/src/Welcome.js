import React from "react";

//CLASS COMPONENT
// export class Welcome extends React.Component {
//     render() {
//         return (
//              <div>
//                  <p>Welcome, {this.props.name ?? 'friend'}!</p>
//                  <p>Your age is {this.props.age}.</p>
//              </div>
// )
//     }
// }
//static property
// Welcome.defaultProps = {
//     name: 'my friend',
// }
//If no name is passed just the props is undefined, I can give one default value by the double question mark
//or by creating a static property

//FUNCTION COMPONENT
export function Welcome({name='new friend', age}){
    return (
    <div>
        <p>Welcome, {name}!</p>
        <p>Your age is {age}.</p>
    </div>
    )
}
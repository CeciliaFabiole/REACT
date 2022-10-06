import React from "react";
import { Age } from "./Age";

//CLASS COMPONENT
// export class Welcome extends React.Component {
//     render() {
//         return (
//              <div>
//                  <p>Welcome, {this.props.name ?? 'friend'}!</p>
//                  {this.props.age > 18 && this.props.age < 65 && this.props.name==='John' && <Age age={this.props.age}/>}
//              </div>
//          )
//     }
// }

//FUNCTION COMPONENT
export function Welcome({name='new friend', age}){
    return (
    <div>
        <p>Welcome, {name}!</p>
        {age>18 && age<65 && name==='John' && <Age age={age}/>}
    </div>
    )
}
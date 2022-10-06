import React from "react";

//CLASS COMPONENT
// export class Age extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.age > 18
//                 ? <p>Your age is {this.props.age}.</p>
//                 : <p>You are very young!</p>
//                 }    
//             </div>
// )}
// }

//FUNCTION COMPONENT
export function Age({age=18}){
    return (
        <div>
            {age > 18
            ? <p>Your age is {age}.</p>
            : <p>You are very young!</p>
            }
        </div>
    )
}
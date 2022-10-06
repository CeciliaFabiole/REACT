import React from "react";

//CLASS COMPONENT
// export class Age extends React.Component {
//     render() {
//         return <p>Your age is {this.props.age ?? 18}.</p>
//     }
// }
export function Age({age=18}){
    return (
        <div>
            <p>Your age is {age}.</p>
        </div>
    )
}
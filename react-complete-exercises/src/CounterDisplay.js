import React from "react";

//CLASS COMPONENT
// export class CounterDisplay extends React.Component {
//     render() {
//         return <h1>Count: {this.props.count}</h1>
//     }
// }

//FUNCTION COMPONENT
export function CounterDisplay({count}){
    return <h1>Count: {count}</h1>
}
import React from "react";
import { useState } from "react";

//CLASS COMPONENT
// export class Counter extends React.Component {
//     render() {
//         return <h1>Count: {this.state.count}</h1>
//     }
//     state = {
//         count : this.props.initialValue,
//     }
//     constructor(props) {
//         super (props)
//         setInterval(() => 
//             {this.setState((state) => {
//                 return {count: state.count + this.props.incrementInterval}
//                 })
//          }, this.props.incrementAmount)
//     }
// }

//ESERCIZIO state-02
//Should be an object, state is an object which can be filled with any kind of data, I can also insert a function
//and I have access to it by the class instance itself

//FUNCTION COMPONENT
export function Counter({initialValue, incrementInterval, incrementAmount}){
    const [count, setCount] = useState(initialValue)

    setInterval(()=> setCount(count + incrementInterval), incrementAmount)

    return <h1>Count: {count}</h1>
}
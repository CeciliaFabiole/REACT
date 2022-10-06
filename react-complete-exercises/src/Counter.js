import React from "react";
import { useState } from "react";

//CLASS COMPONENT
// export class Counter extends React.Component {
//     state = {
//         count : 0,
//     }

//     constructor(props) {
//         super (props)
//         setInterval(() => {this.setState((state) => {
//             return {count: state.count + 1}
//         })
//         }, 1000)
//     }
    
//     render() {
//         return <h1>Count: {this.state.count}</h1>
//     }
// }

//ESERCIZIO state-02
//Should be an object, state is an object which can be filled with any kind of data, I can also insert a function
//and I have access to it by the class instance itself

//FUNCTION COMPONENT
export function Counter(){
    const [count, setCount] = useState(0)

    setInterval(()=> setCount(count + 1),1000)

    return <h1>Count: {count}</h1>
}
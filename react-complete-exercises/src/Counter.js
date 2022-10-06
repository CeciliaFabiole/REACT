import React from "react";
import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

//CLASS COMPONENT
// export class Counter extends React.Component {
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
//
//     ESERCIZIO state-05
//     reset(){
//         if (this.state.count===10) {
//             this.setState(()=>{
//                 return {count: this.props.initialValue}
//             })
//         }
//     }

//     render() {
//         return <CounterDisplay count={this.state.count}/>
//     }
// }

//ESERCIZIO state-02
//Should be an object, state is an object which can be filled with any kind of data, I can also insert a function
//and I have access to it by the class instance itself

//FUNCTION COMPONENT
export function Counter({initialValue, incrementInterval, incrementAmount}){
    const [count, setCount] = useState(initialValue)

    setInterval(()=> setCount(count + incrementInterval), incrementAmount)

    // ESERCIZIO state-05
    function reset(){
        if (count>10) {
            return setCount(initialValue)
        }
    }
    reset()

    return <CounterDisplay count={count}/>
}
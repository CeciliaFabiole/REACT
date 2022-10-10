import React, { useEffect, useState } from "react";
import { CounterButton } from './CounterButton';

//CLASS COMPONENT
// export class ClickCounter extends React.Component {
//     state = {
//         count : 0,
//     }
//     handleCounterIncrement = () => {
//             this.setState((state) => {
//                 return {count: state.count + 1}
//             })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleCounterIncrement}>Increment</button>
//             </div>
//     )}
// }

//FUNCTION COMPONENT
export function ClickCounter({onCounterChange}){
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        return onCounterChange(counter)
    }, [counter])

    function handleCounterIncrement(){
        setCounter(() => counter + 1)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <CounterButton click={()=>handleCounterIncrement()}/>
            {/* <button onClick={()=>handleCounterIncrement()}>Increment</button> */}
        </div>
    )
}
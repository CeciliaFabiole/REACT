import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

//CLASS COMPONENT
// export class Counter extends React.Component {
//     state = {
//         count : this.props.initialValue,
//     }
    
//     componentDidMount() {
//         setInterval(() => 
//             {this.setState((state) => {
//                 return {count: state.count + this.props.incrementInterval}
//                 })
//          }, this.props.incrementAmount)
//     }
//     //ESERCIZIO Component Lifecycle - 02
//     componentWillUnmount(){

//     }
        //se voglio pulire l'intervallo ogni volta che il
        //componente è nella fase di unmounting devo
        //utilizzare componentWillUnmount, ma come funziona?

//     //ESERCIZIO state-05 non funzionaaa!!!
//     // reset(){
//     //     if (this.state.count===10) {
//     //         this.setState(()=>{
//     //             return {count: this.props.initialValue}
//     //         })
//     //     }
//     // }
//     //ESERCIZIO Component Lifecycle - 03
//     //Posso farlo con ComponentDidUpdate method

//     render() {
//         return <CounterDisplay count={this.state.count}/>
//     }
// }

//FUNCTION COMPONENT
export function Counter({initialValue=0, incrementInterval=1, incrementAmount=1000}){
    const [count, setCount] = useState(initialValue)

    useEffect(()=>{
        setInterval(()=> setCount(() => count + incrementInterval), incrementAmount)
        console.log('I have mounted')
        return ()=>{
            console.log('I have unmounted')
        }
    }, [count, incrementAmount, incrementInterval])

    return (
        <div style={{background:'yellow'}}>
            <CounterDisplay count={count}/>
        </div>
    )
}

// Perché ogni volta che aumenta di uno ricomincia dall'initialValue, 
// invece di prendere il valore precedente?
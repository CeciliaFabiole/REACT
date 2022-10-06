import React from 'react';
import { Message } from './Message';

//CLASS COMPONENT
// export class Hello extends React.Component {
//     render() {
//         return <h1>Hello, World!</h1>
//     }
// }

//FUNCTION COMPONENT
export function Hello(){
    return (
        <div>
            <h1>Hello,World!</h1>
            <Message/>
        </div>
    )
}

// ESERCIZIO components-08
// Si posso usarlo più di una volta, 
// si renderizzerà il numero di volte che lo
// inserisco
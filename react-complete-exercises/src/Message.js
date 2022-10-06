import React from "react";

//CLASS COMPONENT
// export class Message extends React.Component {
//     render() {
//         return <p>What a beautiful day!</p>
//     }
// }
//FUNCTION COMPONENT
export function Message(){
    return <p>What a beautiful day!</p>
}

// ESERCIZIO components-09
//Si basta che importo Message in App e non
//in Hello e a quel punto Message diventerà
//figlio di App e non più di Hello
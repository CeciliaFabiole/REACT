import React from "react";
import { useState } from "react";

//CLASS COMPONENT
// export class ClickTracker extends React.Component {
//     state = {
//         buttonName:''
//     }
//     handleButtonsTrackings = (event) => {
//         this.setState({
//             buttonName : event.target.name,
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>L'ultimo bottone cliccato è : {this.state.buttonName}</h1>
//                 <button name="bottone1" onClick={(e)=>this.handleButtonsTrackings(e)}>Bottone 1</button>
//                 <button name="bottone2" onClick={(e)=>this.handleButtonsTrackings(e)}>Bottone 2</button>
//                 <button name="bottone3" onClick={(e)=>this.handleButtonsTrackings(e)}>Bottone 3</button>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function ClickTracker(){
    const [buttonName, setButtonName] = useState('')

    function handleButtonsTrackings(event){
        setButtonName(event.target.name)
    }

    return (
        <div>
            <h1>L'ultimo bottone cliccato è : {buttonName}</h1>
            <button name="bottone 1" onClick={(e)=>handleButtonsTrackings(e)}>Bottone 1</button>
            <button name="bottone 2" onClick={(e)=>handleButtonsTrackings(e)}>Bottone 2</button>
            <button name="bottone 3" onClick={(e)=>handleButtonsTrackings(e)}>Bottone 3</button>
        </div>
    )
}

//ESERCIZIO events-04 
//Se io pongo un'immagine al posto del testo nel bottone,
//e quindi senza eventhandler collegata ad essa, quando
//clicco sull'icona si attiverà l'onClick del bottone che la contiene
//perciò avrò l'event.target settato sull'immagine e 
//l'event.currentTarget sul bottone che contiene l'origine dell'evento
//tutto questo perché l'immagine è un altro node element del dom
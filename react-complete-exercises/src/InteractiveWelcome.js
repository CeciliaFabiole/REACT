import React, { useState } from "react";
import { Welcome } from './Welcome'

// export class InteractiveWelcome extends React.Component {
//     state = {
//         inputContent : '',
//     }
//     handleInput = (event) => {
//         this.setState ({
//             inputContent : event.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input name="inputContent" value={this.state.inputContent} onChange={this.handleInput}></input>
//                 <Welcome name={this.state.inputContent}/>
//             </div>
//         )
//     }
// }

export function InteractiveWelcome(){
    const [inputContent, setInputContent] = useState('')

    function handleInput(event){
        setInputContent(event.target.value)
    }

    return (
        <div>
            <input name="inputContent" value={inputContent} onChange={(e)=>handleInput(e)}></input>
            <Welcome name={inputContent}/>
        </div>
    )
}
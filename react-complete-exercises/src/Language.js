import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage"
import { languageContext } from "./LanguageContext";

//CLASS COMPONENT
// export class Language extends React.Component {
//     state= {
//         language:"en",
//     }
//     handleLanguage=(event)=>{
//         this.setState({
//             language:event.target.value,
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <select value={this.state.language} onChange={(e)=>this.handleLanguage(e)}>
//                     <option value="en">ENGLISH</option>
//                     <option value="it">ITALIANO</option>
//                 </select>
//                 <languageContext.Provider value={this.state.language}>
//                     <DisplayLanguage/>
//                 </languageContext.Provider>
//             </div>
//         )
//     }
// }
//FUNCTION COMPONENT
export function Language(){
    const [language, setLanguage] = useState('en')

    function handleLanguage(event){
        setLanguage(event.target.value)
    }
    return (
        <div>
            <select value={language} onChange={(e)=>handleLanguage(e)}>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIANO</option>
            </select>
            <languageContext.Provider value={language}>
                <DisplayLanguage/>
            </languageContext.Provider>
        </div>
    )
}
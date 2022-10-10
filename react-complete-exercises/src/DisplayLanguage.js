import React from "react";
import { languageContext } from "./LanguageContext";

//CLASS COMPONENT
// export class DisplayLanguage extends React.Component {
//     render() {
//         return (
//             <div>
//                 <languageContext.Consumer>
//                     {
//                         (language) => {
//                             return (
//                                 <h1>
//                                     La lingua selezionata è : {language}
//                                 </h1>
//                             )
//                         }
//                     }
//                 </languageContext.Consumer>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function DisplayLanguage(){
    return(
        <languageContext.Consumer>
            {(language)=> <h1>La lingua selzionata è : {language}</h1>}
        </languageContext.Consumer>
    )
}
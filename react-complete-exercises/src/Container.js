import React from 'react';

//CLASS COMPONENT
// export class Container extends React.Component {
//     render() {
//         return (
//             <div className='container'>
//                 <div className="container-content">{this.props.children}</div>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function Container(props){
    return (
        <div className='container'>
            <div className='container-title'>{props.title}</div>
            <div className="container-content">{props.children}</div>
        </div>
    )
}
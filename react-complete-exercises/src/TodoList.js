import React, { useState } from "react"

//CLASS COMPONENT
// export class TodoList extends React.Component {
//     state = {
//         items : ['Fare la spesa','Bagnare le piante', 'Dormire'],
//         newItem : '',
//     }
//     saveValue = (event)=>{
//         const value = event.target.value
//         this.setState(()=> {
//             return {newItem : value,}
//         })
//     }
//     addItem = ()=>{
//         this.setState(()=> {
//             let items = this.state.items
//             items.push(this.state.newItem)
//             return {items : items, newItem: ''}
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <ul>{this.state.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
//                 <input name="newItem" value={this.state.newItem} onChange={(e)=> this.saveValue(e)}></input>
//                 <button onClick={() => this.addItem()}>Add</button>
//             </div>
//         )
//     }
// }

//FUNCTION COMPONENT
export function TodoList(){
    const [items, setItems] = useState(['Fare la spesa', 'Guardare il cane', 'Raccogliere le zucchine',])
    const [newItem, setNewItem] = useState('')

    function saveValue(event){
        setNewItem(()=>event.target.value)
    }

    function addItem(){
        setItems(()=>[...items, newItem,])
        setNewItem('')
    }

    return(
        <div>
            <h3>Todo List</h3>
            <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
            <input name='newItem' value={newItem} onChange={(e)=>saveValue(e)}/>
            <button onClick={()=>addItem()}>Add</button>
        </div>
    )
}
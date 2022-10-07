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
//     resetItem = ()=>{
//         this.setState(()=> {
//             let items = this.state.items
//             items.length = 0
//             // items.pop() per cancellarne uno alla volta
//             return {items:items, newItem: ''}
//         })
//     }
//     removeItem = (index)=>{
//         this.setState(()=>{
//             let items=this.state.items
//             items.splice(index, 1)
//             return {items:items}
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <ul>{this.state.items.map((item, index) => <li key={index}>{item}<button onClick={()=>this.removeItem(index)}>x</button></li>)}</ul>
//                 <input name="newItem" value={this.state.newItem} onChange={(e)=> this.saveValue(e)}></input>
//                 <button onClick={() => this.addItem()}>Add</button>
//                 <button onClick={()=> this.resetItem()}>Reset</button>
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
        setItems(()=>[...items, newItem])
        setNewItem('')
    }

    function clearItem(){
        setItems([])
    }

    function removeItem(index){
        let list = [...items]
        list.splice(index,1)
        setItems(()=>{
            return [...list]
        })
    }

    return(
        <div>
            <h3>Todo List</h3>
            <ul>{items.map((item, index) => <li key={index}>{item}<button onClick={()=>removeItem(index)}>x</button></li>)}</ul>
            <input name='newItem' value={newItem} onChange={(e)=>saveValue(e)}/>
            <button onClick={()=>addItem()}>Add</button>
            <button onClick={()=>clearItem()}>Reset</button>
        </div>
    )
}
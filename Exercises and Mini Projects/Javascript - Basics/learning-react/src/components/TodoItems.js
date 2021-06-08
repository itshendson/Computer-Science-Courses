import React from "react"
import './TodoItems.css'

function TodoItems(props) {
    return (
        <div className="todo-container">
            <input className="todo-item" type="checkbox" />
            <p>{props.itemName}</p>
            <p>{props.itemPrice}</p>
            <a href={props.itemURL}>Amazon</a>
        </div>
    )
}

// class TodoItems extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             itemName: "name",
//             itemPrice: "price",
//             itemURL: "www.google.com",
//         }
//     }

//     render() {
//         return (
//             <div className="todo-container">
//                 <input 
//                     className="todo-item" 
//                     type="checkbox" 
//                 />
//                 <p>{this.props.itemName}</p>
//                 <p>{this.props.itemPrice}</p>
//                 <a href={this.props.itemURL}>Amazon</a>
//             </div>
//         )
//     }
// }

export default TodoItems;
import React from "react"
import TodoItems from "./TodoItems";
import itemsData from "./itemsData";

//Props is essentially when you pass data from one component to another. The problem with props
//is that the receiving component CANNOT modify the prop. Props are IMMUTABLE. 
//...this is where State comes in. State CAN change data.

class ShoppingList extends React.Component {
    constructor() {
        super()
        this.state = {
            items: itemsData,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        console.log("Changed", id)
    }

    render() {
        const itemArray = this.state.items.map(ele => {
            return <TodoItems 
                        key={ele.id} 
                        itemName={ele.itemName} 
                        itemPrice={ele.itemPrice} 
                        itemURL={ele.itemURL}
                        handleChange={this.handleChange}
                    />
        })

        return (
            <div>
                {itemArray}
            </div>
        )
    }
}

export default ShoppingList;
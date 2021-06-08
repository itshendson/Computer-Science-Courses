import React from "react"
import TodoItems from "./TodoItems"
import ShoppingList from "./ShoppingList"
import itemsData from "./itemsData"

//Props is essentially when you pass data from one component to another. The problem with props
//is that the receiving component CANNOT modify the prop. Props are IMMUTABLE. 
//...this is where State comes in. State CAN change data.

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            // items: itemsData,
            isLoading: true,
            swCharacter: {}
        }
    }

    componentDidMount() {
        //Pretend loading screen
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 1500 )

        //API 
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    swCharacter: data
                })
            })
    }

    render() { 
        return (
            <div>
                {
                    this.state.isLoading ?
                    <h1>Loading shopping list...</h1> 
                    : <ShoppingList />
                }

                <br></br>

                {this.state.swCharacter.name}
                
            </div>
        )
    }
}

export default Body;
import React from "react"
import './Header.css'
import Form from './Form'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            fullName: "Barney the Dinosaur"
        }
    }

    render() {

        //This is called an Inline Styles. We are making a css style into a js object because it lets our hard code change the styles
        const date = new Date();
        const styles = {
            fontSize: 20
        }
        if (this.state.fullName.charAt(0).toUpperCase() === "B") {
            styles.color = "red"
        }
        return (
            <div>
                <header className="navbar">
                    Totally Not An eCommerce Site, nor is it a secret Header
                </header>

                <Form />
                
                <p style={styles}>
                    Hi {this.state.fullName}, it is currently {date.getHours() % 12 + ":" + date.getMinutes()}.
                </p> 
            </div>
        )
    }
}

export default Header;
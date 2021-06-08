import React, { Component } from "react"
import FormChild from "./FormChild"
import FormChild2 from "./FormChild2"

class FormIndex extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            highSchool: "",
            gpa: "",
            graduation: "",
            major: "",
            isComply: false,
            essay: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                [name]: checked
            }
        })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <FormChild 
                    handleChange={this.handleChange}
                    data={this.state} /* Instead of passing all the states like firstName, lastName, highSchool, etc, we can just pass data */
                />
                <FormChild2
                    handleChange={this.handleChange}
                    data={this.state}
                />
            </div>
        )
    }
}

export default FormIndex
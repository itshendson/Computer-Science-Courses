function FormChild2(props) {
    return (
        <div className="warning-container">
            <h2>Please carefully review the information you have provided regarding your academic history for accuracy and completeness. Failure to disclose your attendance at any school or academic establishment is considered misconduct and may result in the withdrawl of any offer of admission, whether accepted or not.</h2>
            <br />
            <div className="verify">First Name: </div>
            <div className="verified">{props.data.firstName}</div>
            <br />

            <div className="verify">Last Name: </div>
            <div className="verified">{props.data.lastName}</div>
            <br />

            <div className="verify">High School: </div>
            <div className="verified">{props.data.highSchool}</div>
            <br />

            <div className="verify">Grade Point Average: </div>
            <div className="verified">{props.data.gpa}</div>
            <br />

            <div className="verify">Will you be graduating by May of 2022? </div>
            <div className="verified">{props.data.graduation}</div>
            <br />

            <div className="verify">You are submiting your application to: </div>
            <div className="verified">{props.data.major}</div>
            <br />

            <h4>Do you verify that all the information provided above is accurate and complete?</h4>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="isComply"
                    onChange={props.handleChange}
                    checked={props.handleChange.isComply}
                /> I verify that all the information provided are true, accurate, and complete.
            </label>
            <br />
                
            <button>Submit</button>
        </div>
    )
}

export default FormChild2
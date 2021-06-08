function FormChild(props) {
    return (
        <div className="application-container">
            <main>
                <form className="application-forms">
                    <h4>First Name:</h4>
                    <input 
                        value={props.data.firstName} 
                        name="firstName" 
                        onChange={props.handleChange}
                    />
                    <br />

                    <h4>Last Name:</h4>
                    <input 
                        value={props.data.lastName} 
                        name="lastName" 
                        onChange={props.handleChange}
                    />
                    <br />

                    <h4>High School:</h4>
                    <input 
                        value={props.data.highSchool} 
                        name="highSchool" 
                        onChange={props.handleChange}
                    />
                    <br />

                    <h4>Grade Point Average (Out of 4.33):</h4>
                    <input 
                        value={props.data.gpa} 
                        name="gpa" 
                        onChange={props.handleChange}
                    />
                    <br />

                    <h4>Will you be graduating by May of 2022?</h4>
                    <label>
                        <input 
                            type="radio"
                            name="graduation"
                            value="Yes"
                            checked={props.data.graduation === "Yes"}
                            onChange={props.handleChange}
                        /> Yes  
                    </label>

                    <label>
                        <input 
                            type="radio"
                            name="graduation"
                            value="No"
                            checked={props.data.graduation === "No"}
                            onChange={props.handleChange}
                        /> No 
                    </label>
                    <br />

                    <h4>Which Faculty do you wish to submit your application to?</h4>
                    <select 
                        value={props.data.major} 
                        name="major" 
                        onChange={props.handleChange}
                    >
                        <option value="">--- Pick a Faculty ---</option>
                        <option value="Faculty of Applied Science">The Faculty of Applied Science</option>
                        <option value="Faculty of Arts">The Faculty of Arts</option>
                        <option value="Faculty of Business">The Faculty of Business</option>
                        <option value="Faculty of Dentistry">The Faculty of Dentistry</option>
                        <option value="Faculty of Law">The Faculty of Law</option>
                        <option value="Faculty of Medicine">The Faculty of Medicine</option>
                        <option value="Faculty of Nursing">The Faculty of Nursing</option>
                        <option value="Faculty of Science">The Faculty of Science</option>
                        <option value="Faculty of Public Policy and global Affairs">The Faculty of Public Policy and global Affairs</option>
                    </select>

                </form>
                
                <hr />
            </main>
        </div>
    )
}

export default FormChild
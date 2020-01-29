import React, { useState } from 'react';
import './Form.css';

function Form(){

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        role: ''
    });




    const changeHandler = event => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        event.persist();
        const initialState = {
            name: '',
            email: '',
            role: ''
        }
        setFormData(initialState);
    };

    

    return(
        <div className="InputForm">
            <h1>Please submit your data:</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <label>Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                onChange={changeHandler}
                value={formData.name}
                /> 

                <label>Email:</label>
                <input 
                type="text"
                id="email"
                name="email"
                onChange={changeHandler}
                value={formData.email}
                />

                <label>Role:</label>
                <select 
                type="text"
                id="role"
                name="role"
                onChange={changeHandler}
                value={formData.role}
                >
                <option value="">Select a Role:</option>
                <option value="backend">Backend Engineer</option>
                <option value="frontend">FrontEnd Engineer</option>
                <option value="designer">Designer</option>
                <option value="sales">Sales</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
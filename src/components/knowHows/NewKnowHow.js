import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

// Purpose
    // Form for adding a new know how

// Status
    // Form has been made
    // months is currently a local string. Need to access server side enums, then convert them to strings, for the <options>
    // the user also has to put in the date manually as a string right now
        // we want our server knowHows to take in date objects
        // can then just make the date equal to todays date here. User doesn't need to do anything

const NewKnowHow = ({currentUser, postKnowHow, monthOptions}) =>{

    const [formData, setFormData] = useState({})
    const [formCheck, setFormCheck] = useState();

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData['user'] = currentUser; 
        postKnowHow(formData);
        setFormCheck(1);
    }

    // Date string, User object, Title string, Body string, Month ENUM (currently string made here)

    return(
        <>
            <h3>Enter your new Know How here!</h3>
            <form onSubmit={handleSubmit}>
                <label name='date'>Enter the Date:</label>
                <input type='date' name='date' id='date' onChange={handleChange} required/>

                <label name='title'>Title:</label>
                <input type='text' name='title' id='title' onChange={handleChange} required />

                <label name='body'>Your Know How:</label>
                <input type='text' name='body' id='body' onChange={handleChange} required /> 

                <label name='month'>Month your knowhow applies to:</label>
                <select name='month' id='month' onChange={handleChange}>
                    <option value='' defaultValue='selected' disabled>Month</option>
                    {monthOptions}

                </select>

                <button type='submit' >Login</button>
            </form>

            {formCheck ? <Redirect to="/knowhows" />:null}

        </>
    )

}

export default NewKnowHow;
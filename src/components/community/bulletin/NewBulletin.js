import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';


// The purpose of this file is to render a new bulletin form


const NewBulletin = ({currentUser, postBulletin}) => {

    const [formData, setFormData] = useState({})
    const [formCheck, setFormCheck] = useState(null);

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData['user'] = currentUser; 
        postBulletin(formData);
        setFormCheck(1);
    }

    // Date, User, Title, Body
    return(
    <>
         <h3>Enter your new Bulletin here!</h3>
            <form onSubmit={handleSubmit}>
                <label name='date'>Enter the Date:</label>
                <input type='date' name='date' id='date' onChange={handleChange} required/>

                <label name='title'>Title:</label>
                <input type='text' name='title' id='title' onChange={handleChange} required />

                <label name='body'>Your Bulletin:</label>
                <input type='text' name='body' id='body' onChange={handleChange} required /> 

                <button type='submit'>Submit New Bulletin</button>
            </form>

            {formCheck ? <Redirect to="/community" />:null}
    </>
    )
}

export default NewBulletin;
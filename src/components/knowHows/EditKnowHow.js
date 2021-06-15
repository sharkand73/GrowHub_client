import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import '../../css/Knowhow.css';
import '../../css/NewUser.css';

const EditKnowHow = ({currentUser, knowHow, months, date, editKnowHow, setEditButtonClicked, removeEdit}) => {
    

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: "",
        month: "",
        id: knowHow.id
    })


    const monthOptions = months.map((month, index) => {
        return <option value={index} key={index}>{month}</option>
    });

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleMonth = (e) => {
        formData['month'] = months[e.target.value].toUpperCase();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        editKnowHow(knowHow, formData);
    }

    return(
        <>
        <div class="edit-form">
        <p class="kHw-edit">Edit your knowhow below</p>

        <div id="form-grid">
        <form onSubmit={handleSubmit}>

            <div class="form-wrapper">

                <div class="form_field form_input">
                    <label class="form_text" name='title'>Title:</label>
                    <input class="field_size" type='text' name='title' id='title' onChange={handleChange} placeholder={knowHow.title} required />
                </div>

                <div class="form_field form_input">
                    <label class="form_text" name='body'>Your Knowhow:</label>
                    <input class="field_size3" type='text' name='body' id='body' onChange={handleChange} placeholder={knowHow.body} required /> 
                </div>

                <div class="form_field form_input">
                    <label class="form_text" name='month'>Month your knowhow applies to:</label>
                    <select class="field_size" name='month' id='month' onChange={handleMonth}>
                        <option selected disabled>Month</option>
                        {monthOptions}
                    </select>
                </div>

                <div>
                    <br /> <button class="edit-button" type='submit'>Update Knowhow</button>
                </div>

                <div>
                    <button class="delete-button" onClick={removeEdit}>Delete knowhow</button>
                </div>

            </div>
        </form>
        </div>
        </div>
        </>
    )
    
}

export default EditKnowHow;
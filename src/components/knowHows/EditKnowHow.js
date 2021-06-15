import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

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
        <h3>Edit your knowhow here!</h3>
        <form onSubmit={handleSubmit}>
                <label name='title'>Title:</label>
                <input type='text' name='title' id='title' onChange={handleChange} placeholder={knowHow.title} required />

                <label name='body'>Your Know How:</label>
                <input type='text' name='body' id='body' onChange={handleChange} placeholder={knowHow.body} required /> 

                <label name='month'>Month your knowhow applies to:</label>
                <select name='month' id='month' onChange={handleMonth}>
                    <option selected disabled>Month</option>
                    {monthOptions}
                </select>

                <button type='submit'>Update Know How</button>
            </form>
            <div>
                <button onClick={removeEdit}>X</button>
            </div>
        </>
    )
    
}

export default EditKnowHow;
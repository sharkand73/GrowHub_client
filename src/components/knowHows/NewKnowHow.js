import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const NewKnowHow = ({currentUser, postKnowHow, months, getDate}) =>{

    const [formData, setFormData] = useState({
        date: "",
        author: null,
        title: "",
        body: "",
        month: ""
    })
    const [formCheck, setFormCheck] = useState(null);

    const date = getDate();

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
        formData['date'] = date;
        formData['author'] = currentUser;
        e.preventDefault();
        postKnowHow(formData);
        setFormCheck(1);
    }

    // Date string, User object, Title string, Body string, Month ENUM (currently string made here)

    return(
        <>
            <h3>Enter your new Know How here!</h3>
            <form onSubmit={handleSubmit}>
                <label name='title'>Title:</label>
                <input type='text' name='title' id='title' onChange={handleChange} required />

                <label name='body'>Your Know How:</label>
                <input type='text' name='body' id='body' onChange={handleChange} required /> 

                <label name='month'>Month your knowhow applies to:</label>
                <select name='month' id='month' onChange={handleMonth}>
                    <option selected disabled>Month</option>
                    {monthOptions}
                </select>

                <button type='submit'>Submit New Know How</button>
            </form>

            {formCheck ? <Redirect to="/knowhows" />:null}

        </>
    )

}

export default NewKnowHow;
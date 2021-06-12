import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';


// The purpose of this file is to render a new job form

// TO DO
    // Import all the areas (plots and communal) 
        // either by a new db route for /areas
        // or by combining the arrays here
    // map through the areas, print an option? (but 70+ plots.. thats a lot of areas)

const NewJob = ({currentUser, postJob, communalAreas, getDate}) => {

    const [formData, setFormData] = useState({
        date: "",
        author: null,
        title: "",
        body: "",
        area: null,
        deadline: "",
        difficulty: 0
    })

    const [formCheck, setFormCheck] = useState(null);

    const communalAreaOptions = communalAreas.map((communalArea, index) => {
        return <option value={index} key={index}>{communalArea.areaName}</option>
    });

    const date = getDate();

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
      }

    const handleArea = (e) => {
        formData['area'] = communalAreas[e.target.value];
        setFormData(formData);
    }

    const handleDifficulty = (e) => {
        formData['difficulty'] = parseInt(e.target.value)
        setFormData(formData);
    }

    const handleSubmit = (e) => {
        formData['date'] = date;
        formData['author'] = currentUser;
        e.preventDefault();
        console.log("Handle submit of formdata:")
        console.log(formData);

        postJob(formData);

        // setFormCheck(1);
    }

    return(
    <>
        <h3>Use this form to enter a new job needing doing</h3>

       {/* Job(String date, User author, String title, String body, Area area, String deadline, int difficulty) */}


        <form onSubmit={handleSubmit}>
            <label name='title'>Title:</label>
            <input type='text' name='title' id='title' onChange={handleChange} required />

            <label name='body'>The Job:</label>
            <input type='text' name='body' id='body' onChange={handleChange} required /> 

            <label name='area'>Area it applies to:</label>
            <select name='area' id='area' onChange={handleArea}>
                <option selected disabled>Area</option>
                {communalAreaOptions}
            </select>
            
            <label name='deadline'>Due Date:</label>
            <input type='text' name='deadline' id='deadline' placeholder={date} onChange={handleChange} required />

            <label name='difficulty'>Difficulty:</label>
            <input type='number' name='difficulty' id='difficulty' min='1' max='5' onChange={handleDifficulty} required />

            <button type='submit'>Submit New Job</button>
        </form>

        {formCheck ? <Redirect to="/community" />:null}

    </>
    )
}

export default NewJob;
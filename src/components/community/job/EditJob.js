import React, {useState} from 'react';

const EditJob = ({job, setJobStatus, communalAreas, currentUser, editJob}) => {

    const [formData, setFormData] = useState({
        date: job.date,
        author: currentUser,
        title: "",
        body: "",
        communal: {},
        deadline: "",
        difficulty: 0
    })

    const communalAreaOptions = communalAreas.map((communalArea, index) => {
        return <option value={index} key={index}>{communalArea.areaName}</option>
    });

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleArea = (e) => {
        formData.communal = communalAreas[e.target.value];
        setFormData(formData);
    }

    const handleDeadline = () => {
        const stringDate = formData.deadline
        const dd = stringDate.slice(8, 10);
        const mm = stringDate.slice(5, 7);
        const yyyy = stringDate.slice(0, 4);
        const newDeadline = `${dd}/${mm}/${yyyy}`
        console.log(newDeadline)
        formData.deadline = newDeadline;
        setFormData(formData);
    }

    const handleDifficulty = (e) => {
        formData['difficulty'] = parseInt(e.target.value)
        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDeadline();
        editJob(job, formData);
        setJobStatus('all');
    }

    return(
        <>
            <h1>Edit Job</h1>

            <form onSubmit={handleSubmit}>
            <label name='title'>Title:</label>
            <br></br>
            <input type='text' name='title' id='title' onChange={handleChange} defaultValue={job.title} required />
            <br></br>
            <label name='body'>The Job:</label>
            <br></br>
            <input type='text' name='body' id='body' onChange={handleChange} defaultValue={job.body} required /> 
            <br></br>
            <label name='area'>Area it applies to:</label>
            <br></br>
            <select name='area' id='area' onChange={handleArea}>
                <option selected disabled>Area</option>
                {communalAreaOptions}
            </select>
            <br></br>
            <label name='deadline'>Due Date:</label>
            <br></br>
            <input type='date' name='deadline' id='deadline' min={job.date} defaultValue={job.date} onChange={handleChange} required />
            <br></br>
            <label name='difficulty'>Difficulty:</label>
            <br></br>
            <input type='number' name='difficulty' id='difficulty' min='1' max='5' onChange={handleDifficulty} defaultValue={job.difficulty} required />
            <br></br>
            <button type='submit'>Edit Job</button>
        </form>

        <h3 className="link-job" onClick = {()=>setJobStatus('show')}>
            Back
        </h3>
        </>
    )
}

export default EditJob;
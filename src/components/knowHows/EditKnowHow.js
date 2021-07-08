import React, {useState} from 'react';
import '../../css/Knowhow.css';
import '../../css/NewUser.css';

const EditKnowHow = ({currentUser, knowHow, months, date, editKnowHow, setEditButtonClicked, removeEdit}) => {
    

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: knowHow.title,
        body: knowHow.body,
        month: knowHow.month,
        id: knowHow.id
    })

    let shuffledMonths = months.map((month) => month.toUpperCase());
    // console.log(knowHow.month);
    // console.log(shuffledMonths.indexOf(knowHow.month));
    shuffledMonths.splice(shuffledMonths.indexOf(knowHow.month), 1);
    shuffledMonths.unshift(knowHow.month.toString());

    const monthOptions = shuffledMonths.map((month, index) => {
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
        <div className="edit-form">
        <p className="kHw-edit">Edit your knowhow below</p>

        <div id="form-grid">
        <form onSubmit={handleSubmit}>

            <div className="form-wrapper">

                <div className="form_field form_input">
                    <label className="form_text" name='title'>Title:</label>
                    <input className="field_size" type='text' name='title' id='title' onChange={handleChange} defaultValue={knowHow.title} required />
                </div>

                <div className="form_field form_input">
                    <label className="form_text" name='body'>Your Knowhow:</label>
                    <input className="field_size3" type='text' name='body' id='body' onChange={handleChange} defaultValue={knowHow.body} required /> 
                </div>

                <div className="form_field form_input">
                    <label className="form_text" name='month'>Month your knowhow applies to:</label>
                    <select className="field_size" name='month' id='month' onChange={handleMonth} required>
                        {monthOptions}
                    </select>
                </div>

                <div>
                    <br /> <button className="edit-button" type='submit'>Update Knowhow</button>
                </div>

                <div>
                    <button className="delete-button" onClick={removeEdit}>Delete Knowhow</button>
                </div>

            </div>
        </form>
        </div>
        </div>
        </>
    )
    
}

export default EditKnowHow;
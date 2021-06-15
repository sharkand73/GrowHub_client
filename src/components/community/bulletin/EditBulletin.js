import React, {useState} from 'react';

const EditBulletin = ({currentUser, bulletin, editBulletin, getDate, reverseEditClick}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: "",
        id: bulletin.id
    })


    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        editBulletin(bulletin, formData);
        reverseEditClick();
    }
    
    return(
        <>
            <h3>Edit your Bulletin here!</h3>
                <form onSubmit={handleSubmit}>
    
                    <label name='title'>Title:</label>
                    <input type='text' name='title' id='title' onChange={handleChange} defaultValue={bulletin.title} required />
    
                    <label name='body'>Your Bulletin:</label>
                    <input type='text' name='body' id='body' onChange={handleChange} defaultValue={bulletin.body} required /> 
    
                    <button type='submit'>Submit New Bulletin</button>
                </form>
        </>
        )

}

export default EditBulletin;
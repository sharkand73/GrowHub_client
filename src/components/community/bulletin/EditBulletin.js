import React, {useState} from 'react';

import '../../../css/Bulletin.css';

const EditBulletin = ({currentUser, bulletin, editBulletin, getDate, reverseEditClick}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: bulletin.title,
        body: bulletin.body,
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
            <h2>Edit your Bulletin here!</h2>
                <form onSubmit={handleSubmit}>
                    <div id="edit-bulletin-inner">
                        <div>
                            <label name='title' className="bulletin-label">Title: </label>
                            <input class="field_size1" type='text' name='title' id='title' onChange={handleChange} defaultValue={bulletin.title} required />
                        </div>
                        <div>
                            <label name='body' className="bulletin-label">Your Bulletin: </label>
                            <input class="field_size1" type='text' name='body' id='body' onChange={handleChange} defaultValue={bulletin.body} required /> 
                        </div>
                    </div>
                    <div className="flex-two">
                        <button className="bulletin-button" type="button" onClick={()=>reverseEditClick()}>Back</button>
                        <button className="bulletin-button" type='submit'>Submit Changes</button>
                    </div>
                </form>
        </>
        )

}

export default EditBulletin;
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../css/Knowhow.css';

const Reply = ({knowHow, getDate, currentUser,  postReply}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        body: "",
        date: date,
        author: currentUser,
        knowhow: knowHow,
    })

    const [formCheck, setFormCheck] = useState(null);

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postReply(formData);
        setFormCheck(1);
    }

    // String body, String date, User author, TextContent textContent

    const url = "/knowHows/" + knowHow.id;

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input class="field_size3" type='text' name='body' id='body' onChange={handleChange} required /> 

        <br />

        <div class="submit-button">
        <button class="submit-button" type='submit'>Submit reply</button>
        </div>
        </form>

        {formCheck ? <Redirect to={url} />:null}
    </>
    )
}
export default Reply;
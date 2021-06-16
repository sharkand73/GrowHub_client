import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const NewPlotComment = ({plot, getDate, currentUser,  postComment}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: "",
        plot: plot
    })

    const [formCheck, setFormCheck] = useState(null);

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postComment(formData);
        setFormCheck(1);
    }

    // String body, String date, User author, TextContent textContent

    const url = "/plots/" + plot.id;

    return(
        <>
        <p>Add New:</p>

        <form onSubmit={handleSubmit}>

            <div class="form_field form_input">
                <label class="form_text" name='title'>Title:</label>
                <input class="field_size" type='text' name='title' id='title' onChange={handleChange} required /> 
            </div>

            <div class="form_field form_input">
                <label class="form_text" name='body'>Comment:</label>
                <input class="field_size3" type='text' name='body' id='body' maxLength="255" onChange={handleChange} required /> 
            </div>

            <div id="form-button2">
                <button class="edit-button2" type='submit'>Submit Comment</button>
                </div>
        </form>

        {formCheck ? <Redirect to={url} />:null}

    </>
    )
}
export default NewPlotComment;
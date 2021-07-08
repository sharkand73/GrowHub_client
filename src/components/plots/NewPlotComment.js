import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../css/Plots.css';

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
        document.querySelector('form').reset();
    }

    // String body, String date, User author, TextContent textContent

    const url = "/plots/" + plot.id;

    return(
        <>
        <p  className="plot-detail1">Add New:</p>

        <form onSubmit={handleSubmit}>

            <div className="plot_form_field plot_form_input">
                <label className="form_text" name='title'>Title:</label>
                <br />
                <input className="field_size" type='text' name='title' id='title' onChange={handleChange} required /> 
            </div>

            <div className="plot_form_field plot_form_input">
                <label className="form_text" name='body'>Comment:</label>
                <br />
                <input className="field_size3" type='text' name='body' id='body' maxLength="255" onChange={handleChange} required /> 
            </div>

            <div id="form-button">
                <button className="edit-button4" type='submit'>Submit Comment</button>
                </div>
        </form>

        {formCheck ? <Redirect to={url} />:null}

    </>
    )
}
export default NewPlotComment;
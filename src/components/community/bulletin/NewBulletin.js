import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../../css/Bulletin.css';
import LogoSmall from '../../../css/LogoSmall.png';
import '../../../css/NewUser.css';

const NewBulletin = ({currentUser, postBulletin, getDate}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: ""
    })
    const [formCheck, setFormCheck] = useState(null);


    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postBulletin(formData);
        setFormCheck(1);
    }

    return(
    <>
    <div id="newBulletin-container">

        <div id="logo-grid2">
            <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
        </div>

        <div id="header-grid">
            <p className="new-kHw">Enter your new Bulletin here!</p>
        </div>

        <div id="form-grid2">

            <form onSubmit={handleSubmit}>

            <div className="form-wrapper">

                <div className="form_field form_input">
                    <label className="form_text" name='title'>Title:</label>
                    <input className="field_size" type='text' name='title' id='title' onChange={handleChange} required />
                </div>

                <div className="form_field form_input">
                    <label className="form_text" name='body'>Your Bulletin:</label>
                    <input className="field_size3" type='text' name='body' id='body' onChange={handleChange} required /> 
                </div>

                <div id="form-button2">           
                <button className="edit-button3" type='submit'>Submit New Bulletin</button>
                </div>

            </div>
            </form>

            {formCheck ? <Redirect to="/community" />:null}
        </div>

    </div>
    </>
    )
}

export default NewBulletin;
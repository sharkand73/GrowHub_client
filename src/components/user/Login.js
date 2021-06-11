import React, {useEffect, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';


const Login = ({users, setCurrentUser, handleLogin, currentUser}) => {

    const [formData, setFormData] = useState({})


    // Handler to update formData with the user input of 'username' and 'password'
    // We may want two handlers when we come to encrypting the password. One for username, one for pw
    const handleChange = (e) => {
      formData[e.target.id] = e.target.value;
      setFormData(formData)
    }

    // When we click submit for form, run findUser function
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(formData.username, formData.password); 
    }

    const refreshPage = () => {
        window.location.reload();
    }



    return(
        <>
            <h4>Please Login to Continue.</h4>

            <form onSubmit={handleSubmit}>
                <label name='username'>Enter your username:</label>
                <input type='text' placeholder='Username' name='username' id='username' onChange={handleChange} required/>

                <label name='password'>Enter your password:</label>
                <input type='password' placeholder='******' name='password' id='password' onChange={handleChange} required/>

                <button type='submit' >Login</button>

                {currentUser ? <Redirect to="/" /> : null}
            </form>
        </>
    )
}

export default Login;
import React, {useEffect, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Logo from '../../css/Logo.png';
import '../../css/Login.css';



const Login = ({users, setCurrentUser, currentUser}) => {

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
        handleLogin();
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const handleLogin = () => {
        console.log("findUser function starting to run")

        // Find the user in the database with the same username
        const foundUser = users.find((user) => user.shortName === formData.username)

        // If a user has been found
        if (foundUser){
            console.log("user has been found")

            // And if the password is the same as the one entered:
            if (foundUser.password === formData.password){
                console.log("user found, password matched")
                setCurrentUser(foundUser);
            } 
            // Otherwise reload the login page (Would like some kind of rendered error here, probably another component at /login/fail route)
            else {
                console.log("user password not match")
                refreshPage();
            }
        }
        // If the user has not been found
        else {
            console.log("user not found")
            refreshPage();
        }
    }

    return(
        <>
        {/* <div class="background"> */}
        <div class="background" id="login-grid-container">
            {/* <h1 class="welcome">GrowHub</h1> */}
            <img id="logo-grid" class="logo" src={Logo} alt="Logo" />;
            
            <div id="login-grid" class="polytunnel" >

            <form onSubmit={handleSubmit}>
                {/* <p class="slogan form-inner">Grow, Share, Enjoy!</p> */}
                <div class="form-inner">
                <label class="label" name='username'>Username:</label>
                <input class="input" type='text' placeholder='Username' name='username' id='username' onChange={handleChange} required/>
                </div>
                <div class="form-inner">
                <label class="label" name='password'>Password:</label>
                <input class="input" type='password' placeholder='******' name='password' id='password' onChange={handleChange} required/>
                </div>
                <div class="form-inner">
                <button class="loginbutton" type='submit' >Login</button>
                </div>
                {currentUser ? <Redirect to="/" /> : null}
            </form>

            </div>
        </div>


            <button>
                <Link to="/users/new">Create Account</Link>
            </button>

        </>
    )
}

export default Login;
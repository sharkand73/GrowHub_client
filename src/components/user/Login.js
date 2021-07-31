import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Logo from '../../css/Logo.png';
import '../../css/Login.css';



const Login = ({users, setCurrentUser, currentUser}) => {

    const bcrypt = require('bcryptjs');

    const [formData, setFormData] = useState({})

    const [loginCheck, setLoginCheck] = useState(0)

    // Handler to update formData with the user input of 'username' and 'password'
    // We may want two handlers when we come to encrypting the password. One for username, one for pw
    const handleChange = (e) => {
      formData[e.target.id] = e.target.value;
      setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {

        // Re-initialise the state that provides us with the conditional render errors for wrong username/password
        setLoginCheck(0)

        // Find the user in the database with the same username
        const foundUser = users.find((user) => user.shortName === formData.username)

        // If a user has been found
        if (foundUser){

            // And if the password is the same as the one entered, allow login, else return an error:        
            bcrypt.compare(formData.password, foundUser.password)
            .then(result => result ? setCurrentUser(foundUser) : setLoginCheck(1));
            }               
                            
        // If the user has not been found, return an error
        else {
            setLoginCheck(2);
        }
    }

    return(
        <>

        <div className="background" id="login-grid-container">

            <div id="logo-grid">
                <img className="logo" src={Logo} alt="Logo" />
            </div>

            <div id="polytunnel-grid" className="polytunnel" >
                <div id="poly-grid-container">
                    <form id="poly1" onSubmit={handleSubmit}>

                        <div className="form-inner">
                            <label className="label" name='username'>Username:</label>
                            <input className="input" type='text' placeholder='Username' name='username' id='username' onChange={handleChange} required/>
                        </div>
                        <div className="form-inner">
                            <label className="label" name='password'>Password:</label>
                            <input className="input" type='password' placeholder='******' name='password' id='password' onChange={handleChange} required/>
                        </div>
                        
                        <div className="form-inner">
                            <button className="loginPageButton" type='submit' >Login</button>
                        </div>
                        <div className="form-inner">
                            {loginCheck === 1 ? <h3 className="no-margin">Incorrect Password</h3> :null}
                            {loginCheck === 2 ? <h3 className="no-margin">User does not exist</h3> :null}
                        </div>
                        {(currentUser && (currentUser.shortName === 'Admin')) && <Redirect to="/admin" /> }
                        {(currentUser && (currentUser.shortName !== 'Admin')) && <Redirect to="/" /> }
                    </form>

                    <div id="poly2" className="form-inner">
                        <button  className="createAccountButton">
                            <Link className="create-account" to="/users/new">Create Account</Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div id="account-grid" className="create-background">
              <button  className="createAccountButton">
                    <Link className="create-account" to="/users/new">Create Account</Link>
              </button>
            </div> */}  
        </div>
        </>
    )
}

export default Login;
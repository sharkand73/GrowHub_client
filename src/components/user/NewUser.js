import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewUser = ({postUser, getDate}) => {

    // public User(String shortName, String email, String password, PositionType position, int yearJoined) {

    const year = getDate().slice(6, 11)

    const [formData, setFormData] = useState({
            shortName: "",
            email: "",
            password: "",
            position: "ORDINARY",
            yearJoined: year
    })
    const [formCheck, setFormCheck] = useState(null);

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleYear = (e) => {
        formData['year'] = parseInt(e.target.value);
        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postUser(formData);
        setFormCheck(1);
    }

    return(
        <>
            <h3>Enter your info here to create an account</h3>
            <p>If you require admin account functionality, please contact the site administrator</p>

                <form onSubmit={handleSubmit}>
                    <label name='shortName'>Username:</label>
                    <input type='text' name='shortName' id='shortName' placeholder='Sharkanator' onChange={handleChange} required />

                    <label name='email'>Email Address:</label>
                    <input type='text' name='email' id='email' placeholder='soilmuncher96@yipee.com' onChange={handleChange} required /> 

                    <label name='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={handleChange} required /> 

                    <label name='yearJoined'>Year you first got your plot (yyyy)</label>
                    <input type='number' name='yearJoined' id='yearJoined' min='1990' max={year} defaultValue={year} onChange={handleYear} required /> 

                    <button type='submit'>Create Account</button>
                </form>

                {formCheck ? 
                    <div>
                        <h3>Account successfully created. Click here to go back to the login screen</h3>
                        <button>
                        <Link to='/login'>Login</Link>
                        </button>
                    </div>
                    : null}
        </>
    )

}

export default NewUser;
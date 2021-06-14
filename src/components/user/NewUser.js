import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewUser = ({postUser, getDate, newUserCheck}) => {

    const year = getDate().slice(6, 11)

    const [formData, setFormData] = useState({
            shortName: "",
            email: "",
            password: "",
            position: "ORDINARY",
            yearJoined: year
    })

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
    }

    // Conditional renders set by state in MainContainer/postUser() for 'newUserCheck'
    const submitResponse = () => {
        if (newUserCheck === 1){
            console.log("login for submitresponse")
            return <h4>That username already exists. Please try another</h4>
        }
        if (newUserCheck === 2){
            return <h4>That email address already exists. Please try another or contact administrator</h4>
        }
        if (newUserCheck === 3){
            return <div>
                        <h4>Account created successfully. Click 'Login' to be redirected to the login page</h4>
                        <button>
                        <Link to='/login'>Login</Link>
                        </button>
                    </div>
        }
        if (newUserCheck === 4){
            return <h4>Max number of users allowed has been reached. Contact administrator</h4>
        }
    }

    return(
        <>
            <h3>Enter your info here to create an account</h3>
            <p>If you require administrator account functionality, please contact the site administrator at admin@allotmentplots.co.uk</p>

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

                {submitResponse()}
        </>
    )

}

export default NewUser;
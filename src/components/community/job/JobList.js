import React from 'react';
import Job from './Job.js';
import {Link} from 'react-router-dom';

// The purpose of this file is to render a list of jobbies and also render the 
// new jobbie file

// Inward props = user & Jobs & onClick for new jobs and edit jobs

// Outgoing props = user

const JobList = ({jobs, currentUser, deleteJob}) =>{

// map through Jobs prop and render a Job.js for each job it comes across
const jobArray = jobs.map((job, index) => {
    return(
        <li key={index}><Job job={job} currentUser={currentUser} deleteJob={deleteJob}/></li>
    )
})

return (
    <>
        <h1>This is the list of jobbies</h1>
        <ul>
            {jobArray}
        </ul>

        <button>
                <Link to='/jobs/new'>
                    New Job
                </Link>
            </button>
    </>
);
}


export default JobList;
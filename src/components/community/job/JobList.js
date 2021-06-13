import React from 'react';
import Job from './Job.js';
import {Link} from 'react-router-dom';

const JobList = ({jobs, currentUser}) =>{

// Sort jobs into reverse date order (newest up top)
const jobsInDateOrder = jobs.sort((a, b) => {
    a = a.date.split('/').reverse().join('');
    b = b.date.split('/').reverse().join('');
    return a > b ? -1 : a < b ? 1 : 0;
});

const jobArray = jobsInDateOrder.map((job, index) => {
    return(
        <li key={index}><Job job={job} currentUser={currentUser}/></li>
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
import React from 'react';
import Job from './Job.js';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

const JobList = ({jobs, currentUser, displayJob, getCarrots}) =>{

// Sorts jobs by deadline date, most urgent at top
const jobsByDeadline = jobs.sort((a, b) => {
    a = a.deadline.split('/').reverse().join('');
    b = b.deadline.split('/').reverse().join('');
    return a < b ? -1 : a > b ? 1 : 0;
});


const jobsRenderedByDeadline = jobsByDeadline.map((job, index) => {

    return(
        <li key={index}><Job job={job} currentUser={currentUser} displayJob={displayJob} getCarrots={getCarrots}/></li>
    )
});

return (
    <>    
        <h2>Job List</h2>
        <ul>
            {jobsRenderedByDeadline}
        </ul>
        <h3>
            <Link to='/jobs/new' className="link-job">
                New Job
            </Link>
        </h3>
</>
);
}


export default JobList;
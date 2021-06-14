import React from 'react';
import Job from './Job.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

const JobList = ({jobs, currentUser, deleteJob}) =>{

// Sorts jobs by deadline date, most urgent at top
jobs.sort((a, b) => {
    a = a.deadline.split('/').reverse().join('');
    b = b.deadline.split('/').reverse().join('');
    return a < b ? -1 : a > b ? 1 : 0;
});

jobs.forEach((job) => {
    job.carrots = [];
    for(let i=1; i<=job.difficulty; i++){
        job.carrots.push(<FontAwesomeIcon icon={faCarrot} className="carrot"/>)
    }    
});

const jobsRenderedByDeadline = jobs.map((job, index) => {
    return(
        <li key={index}><Job job={job} currentUser={currentUser} deleteJob={deleteJob}/></li>
    )
});

return (
    <>    
        <ul>
            {jobsRenderedByDeadline}
        </ul>
    </>
);
}


export default JobList;
import React from 'react';
import Job from './Job.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

const JobList = ({jobs, currentUser, deleteJob}) =>{

// Sorts jobs by deadline date, most urgent at top
const jobsByDeadline = jobs.sort((a, b) => {
    a = a.deadline.split('/').reverse().join('');
    b = b.deadline.split('/').reverse().join('');
    return a < b ? -1 : a > b ? 1 : 0;
});


const jobsRenderedByDeadline = jobsByDeadline.map((job, index) => {

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
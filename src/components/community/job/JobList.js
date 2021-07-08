import React from 'react';
import Job from './Job.js';

const JobList = ({jobs, currentUser, displayJob, getCarrots, setJobStatus}) =>{

// Sorts jobs by deadline date, most urgent at top
const jobsByDeadline = jobs.sort((a, b) => {
    a = a.deadline.split('/').reverse().join('');
    b = b.deadline.split('/').reverse().join('');
    return a < b ? -1 : a > b ? 1 : 0;
});


const jobsRenderedByDeadline = jobsByDeadline.map((job, index) => {

    return(
        <li key={index}><Job key={index} job={job} currentUser={currentUser} displayJob={displayJob} getCarrots={getCarrots}/></li>
    )
});

return (
    <>    
        <h2>Job List</h2>
        <ul>
            {jobsRenderedByDeadline}
        </ul>
        <h3 className="link-job" onClick={()=> setJobStatus('new')}>
            New Job
        </h3>
</>
);
}


export default JobList;
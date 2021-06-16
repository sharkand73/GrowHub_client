import React from 'react';
import EditJob from './EditJob.js';
import JobDetails from './JobDetails.js';

const JobSelected = ({job, getCarrots, jobClickAway, currentUser, deleteJob, jobStatus, setJobStatus}) => {

    const jobEditDelete = () => {
        if (currentUser.id === job.author.id) {
            return(        
                <div className = "edit-delete">
                    <span className="job-edit-text" onClick={() => setJobStatus('edit')}>Edit</span> 
                    <span className="job-delete-text" onClick={() => deleteJob(job)}>Delete</span>
                </div>              
            )}
    }

    if (jobStatus === 'edit') {
        return <EditJob job={job} setJobStatus={setJobStatus}/>;
    }
    return (
    <>
        <JobDetails job={job} getCarrots={getCarrots} jobClickAway={jobClickAway} currentUser={currentUser} deleteJob={deleteJob} jobStatus={jobStatus} />
        {jobEditDelete()}
        <h3 className="link-job" onClick = {()=>jobClickAway()}>
            Back
        </h3>
    </>
    )
        
}

export default JobSelected;
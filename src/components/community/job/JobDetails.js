import React from 'react';
import EditJob from './EditJob.js';

const JobDetails = ({job, getCarrots, jobClickAway, currentUser, deleteJob, jobStatus, setJobStatus}) => {

    const jobEditDelete = () => {
        if (currentUser.id === job.author.id) {
            return(        
                <div className = "edit-delete">
                    <span className="job-edit-text">Edit</span> 
                    <span className="job-delete-text" onClick={() => deleteJob(job)}>Delete</span>
                </div>
                
            )
        }
    }


    return (
        <>
            <h1 id="job-details-heading">Job Details</h1>
            <ul>
                <li>{job.title}</li>
                <li>Due date: {job.deadline}</li>
                <li>Description:</li>
                <li>{job.body}</li>
                <li>Area: {job.communal.areaName}</li>
                <li>Difficulty: {getCarrots(job)}</li>
                <li>Author: {job.author.shortName}</li>
            </ul>
            
        </>
    )
}

export default JobDetails;
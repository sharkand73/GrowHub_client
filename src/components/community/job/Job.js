import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


const Job = ({job, currentUser, deleteJob}) =>{

    const jobEditDelete = () => {
        if (currentUser.email === job.author.email) {
            return(
                <>
                <div>
                    <button type='button' onClick={() => deleteJob(job)}>Delete</button>
                </div>
                <div>
                    <button type='button'>Edit</button>
                </div>
                </>
            )
        }
    }
    
    return (
        <div>
            <span id="job-item">{job.title}</span> 
            {job.carrots}
            <>{jobEditDelete()}</>
        </div>
    );
    }

export default Job;

{/* old version
    <ul>
        <li>{job.body}</li>
        <li>Area: {job.area.areaName}</li>
        <li>Deadline: {job.deadline}</li>
        <li>Difficulty: {job.difficulty} carrots</li>
        <li>Posted by {job.author.shortName} - <i>{job.date}</i></li>
    </ul> */}
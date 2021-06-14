import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


const Job = ({job, currentUser, deleteJob}) =>{

    const jobEditDelete = () => {
        if (currentUser.email === job.author.email) {
            return(
                <>
                <div className="">       
                    <span className='edit'>Edit</span>
                    <span className='delete' onClick={() => deleteJob(job)}>Delete</span>
                </div>
                </>
            )
        }
    }
    
    return (
        <div>
            <div id="job-item">{job.title}</div> 
            <div>{job.carrots}</div>
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
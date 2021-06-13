import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


const Job = ({job, currentUser}) =>{
    
    return (
        <div>
            <span id="job-item">{job.title}</span> 
            <FontAwesomeIcon icon={faCarrot} id="carrot"/>
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
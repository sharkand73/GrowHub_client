import React from 'react';



const Job = ({job, currentUser}) =>{
    
    return (
        <div>
            <h3>{job.title}</h3>
            <ul>
                <li>{job.body}</li>
                <li>Area: {job.area.areaName}</li>
                <li>Deadline: {job.deadline}</li>
                <li>Difficulty: {job.difficulty} carrots</li>
                <li>Posted by {job.author.shortName} - <i>{job.date}</i></li>
            </ul>
        </div>
    );
    }

export default Job;
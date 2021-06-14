import React from 'react';



const Job = ({job, currentUser, userEditDelete}) =>{
    
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
            <>{userEditDelete}</>
        </div>
    );
    }

export default Job;
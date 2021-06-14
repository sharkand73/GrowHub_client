import React from 'react';



const Job = ({job, currentUser, deleteClick, editClick}) =>{

    const jobEditDelete = () => {
        if (currentUser.email === job.author.email) {
            return(
                <>
                <div>
                    <button type='button' onClick={deleteClick}>Delete</button>
                </div>
                <div>
                    <button type='button' onclick={editClick}>Edit</button>
                </div>
                </>
            )
        }
    }
    
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
            <>{jobEditDelete()}</>
        </div>
    );
    }

export default Job;
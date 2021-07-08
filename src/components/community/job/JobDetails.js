import React from 'react';

const JobDetails = ({job, getCarrots}) => {


    return (
        <>
            <h1 id="job-details-heading">Job Details</h1>
            <ul>
                <li key={1}>{job.title}</li>
                <li key={2}>Due date: {job.deadline}</li>
                <li key={3}>Description:</li>
                <li key={4}>{job.body}</li>
                <li key={5}>Area: {job.communal.areaName}</li>
                <li key={6}>Difficulty: {getCarrots(job)}</li>
                <li key={7}>Author: {job.author.shortName}</li>
            </ul>
            
        </>
    )
}

export default JobDetails;
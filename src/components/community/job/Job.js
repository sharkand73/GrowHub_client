import React from 'react';


const Job = ({job, currentUser, displayJob, getCarrots}) =>{

    // function getCarrots(job){
    //     let carrots = [];
    //     for(let i=1; i<=job.difficulty; i++){
    //         carrots.push(<FontAwesomeIcon icon={faCarrot} className="carrot"/>)
    //     }    
    // return carrots;
    // }

    // const jobEditDelete = () => {
    //     if (currentUser.email === job.author.email) {
    //         return(
    //             <>
    //             <div className="">       
    //                 <span className='edit'>Edit</span>
    //                 <span className='delete' onClick={() => deleteJob(job)}>Delete</span>
    //             </div>
    //             </>
    //         )
    //     }
    // }
    
    return (
        <div onClick={()=>displayJob(job)} className = "job-item-container">
            <div id="job-item" onClick={()=>displayJob(job)}>{job.title}</div> 
            <div>{getCarrots(job)}</div>
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
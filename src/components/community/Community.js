import React, {useState} from 'react';
import BulletinList from './bulletin/BulletinList.js';
import BulletinDetails from './bulletin/BulletinDetails.js';
import JobList from './job/JobList.js';
import JobDetails from './job/JobDetails.js';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import '../../css/Community.css';


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit


const Community = ({currentUser, sortedBulletins, jobs, deleteBulletin, deleteJob, getDate, editBulletin}) => {

    const [selectedBulletin, setSelectedBulletin] = useState();
    const [selectedJob, setSelectedJob] = useState();

    const displayBulletin = (result) => {
        setSelectedBulletin(result);
    }

    const clickAway = () => {
        setSelectedBulletin(null);
    }

    const displayJob = (result) => {
        setSelectedJob(result);
        console.log(selectedJob);
    }

    const jobClickAway = () => {
        setSelectedJob(null);
    }

    function getCarrots(job){
        let carrots = [];
        for(let i=1; i<=job.difficulty; i++){
            carrots.push(<FontAwesomeIcon icon={faCarrot} className="carrot"/>)
        }    
    return carrots;
    }

    return(
        <>
        <div id="community-container">
            <div id="noticeboard">
                <h1>Bulletin Board</h1>
                
                <div id="noticeboard-inner">
                    {selectedBulletin? <BulletinDetails bulletin={selectedBulletin} clickAway={clickAway} deleteBulletin={deleteBulletin} currentUser={currentUser} getDate={getDate} editBulletin={editBulletin} />:
                    <BulletinList sortedBulletins={sortedBulletins} currentUser={currentUser} displayBulletin={displayBulletin} getDate={getDate} selectedBulletin={selectedBulletin} />}
                </div>
                <h2>
                <Link to='/bulletins/new' id="new-bulletin">
                    New Bulletin
                </Link>
                </h2>
            
            </div>
                <div id="jobs-container">
                    {selectedJob? <JobDetails job = {selectedJob} currentUser={currentUser} deleteJob={deleteJob} getCarrots={getCarrots} jobClickAway={jobClickAway}/>:
                    <JobList jobs={jobs} currentUser={currentUser} displayJob={displayJob} getCarrots = {getCarrots}/>}
                </div>
        </div>    
        </>
    )
}

export default Community;
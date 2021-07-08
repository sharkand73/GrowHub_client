import React, {useState} from 'react';
import BulletinList from './bulletin/BulletinList.js';
import BulletinDetails from './bulletin/BulletinDetails.js';
import JobList from './job/JobList.js';
import JobSelected from './job/JobSelected.js';
import NewJob from './job/NewJob.js';
import EditJob from './job/EditJob.js';
//import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import '../../css/Community.css';


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit


const Community = ({currentUser, sortedBulletins, jobs, deleteBulletin, deleteJob, getDate, editBulletin, postJob, communalAreas, editJob}) => {

    const [selectedBulletin, setSelectedBulletin] = useState();
    const [selectedJob, setSelectedJob] = useState();
    const [jobStatus, setJobStatus] = useState('all');

    const displayBulletin = (result) => {
        setSelectedBulletin(result);
    }

    const clickAway = () => {
        setSelectedBulletin(null);
    }

    const displayJob = (result) => {
        setSelectedJob(result);
    }

    const jobClickAway = () => {
        setSelectedJob(null);
        setJobStatus("all");
    }

    function getCarrots(job){
        let carrots = [];
        for(let i=1; i<=job.difficulty; i++){
            carrots.push(<FontAwesomeIcon icon={faCarrot} className="carrot" key={i}/>)
        }    
    return carrots;
    }

    const crudRoutes = {'all': <JobList jobs={jobs} 
                            currentUser={currentUser} 
                            displayJob={displayJob} 
                            getCarrots = {getCarrots} 
                            setJobStatus={setJobStatus}/>,
                        'show': <JobSelected 
                            job={selectedJob} 
                            currentUser={currentUser} 
                            deleteJob={deleteJob} 
                            getCarrots={getCarrots} 
                            jobClickAway={jobClickAway} 
                            jobStatus={jobStatus} 
                            setJobStatus={setJobStatus} 
                            communalAreas={communalAreas} 
                            editJob={editJob} />,
                        'new':  <NewJob 
                            setJobStatus={setJobStatus} 
                            currentUser={currentUser} 
                            postJob={postJob} 
                            communalAreas={communalAreas} 
                            getDate={getDate} 
                            />,
                        'edit': <EditJob setJobStatus={setJobStatus}/>
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
            
            </div>
                <div id="jobs-container">
                    {selectedJob? crudRoutes['show']:
                    ( (jobStatus==='new')? crudRoutes['new']: crudRoutes['all'])}
                </div>
        </div>    
        </>
    )
}

export default Community;
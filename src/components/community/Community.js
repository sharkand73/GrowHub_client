import React, {useState} from 'react';
import BulletinList from './bulletin/BulletinList.js'
import BulletinDetails from './bulletin/BulletinDetails.js'
import JobList from './job/JobList.js'
import {Link} from 'react-router-dom';
import '../../css/Community.css';


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit


const Community = ({currentUser, sortedBulletins, jobs, deleteBulletin, deleteJob}) => {

    const [selectedBulletin, setSelectedBulletin] = useState(null);

    const displayBulletin = (result) => {
        setSelectedBulletin(result);
        console.log(selectedBulletin);
    }

    const clickAway = () => {
        setSelectedBulletin(null);
    }

    return(
        <>
        <div id="community-container">
            <div id="noticeboard">
                <h1>Bulletin Board</h1>
                
                <div id="noticeboard-inner">
                    {selectedBulletin? <BulletinDetails bulletin={selectedBulletin} clickAway={clickAway}/>:
                    <BulletinList sortedBulletins={sortedBulletins} currentUser={currentUser} deleteBulletin={deleteBulletin} displayBulletin={displayBulletin}/>}
                </div>
                <h2>
                <Link to='/bulletins/new' id="new-bulletin">
                    New Bulletin
                </Link>
                </h2>
            
            </div>
                <div id="jobs-container">
                    <h2>Job List</h2>
                    <JobList jobs={jobs} currentUser={currentUser} deleteJob={deleteJob}/>
                    <h3>
                    <Link to='/jobs/new' id="new-job">
                        New Job
                    </Link>
                    </h3>
                </div>
        </div>    
        </>
    )
}

export default Community;
import React from 'react';
import BulletinList from './bulletin/BulletinList.js'
import JobList from './job/JobList.js'
import {Link} from 'react-router-dom';
import '../../css/Community.css';


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit

const Community = ({currentUser, sortedBulletins, jobs}) => {


    return(
        <>
            <div id="noticeboard">
                <h1>Bulletin Board</h1>
                <div id="noticeboard-inner">
                    <BulletinList sortedBulletins={sortedBulletins} currentUser={currentUser} />
                </div>
                <h2>
                <Link to='/bulletins/new' id="new-bulletin">
                    New Bulletin
                </Link>
                </h2>
            
            </div>
                    <div id="jobs-container">
                <JobList jobs={jobs} currentUser={currentUser} />
            </div>
        </>
    )
}

export default Community;
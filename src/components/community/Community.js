import React from 'react';
import BulletinList from './bulletin/BulletinList.js'
import JobList from './job/JobList.js'
import '../../css/Community.css';


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit

const Community = ({currentUser, sortedBulletins, jobs}) => {


    return(
        <>
        <div id="noticeboard">
        <BulletinList sortedBulletins={sortedBulletins} currentUser={currentUser} />
        </div>
        <div id="jobs-container">
        <JobList jobs={jobs} currentUser={currentUser} />
       </div>
        </>
    )
}

export default Community;
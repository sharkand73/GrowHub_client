import React from 'react';
import BulletinList from './bulletin/BulletinList.js'
import JobList from './job/JobList.js'


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit

const Community = ({currentUser, bulletins, jobs, userEditDelete}) => {


    return(
        <>
        <BulletinList bulletins={bulletins} currentUser={currentUser} userEditDelete={userEditDelete} />

        <JobList jobs={jobs} currentUser={currentUser} userEditDelete={userEditDelete}/>
        </>
    )
}

export default Community;
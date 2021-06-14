import React from 'react';

// The purpose of this file is to render one bulletin item

// Incoming props = BulletinItem

const Bulletin = ({bulletin, currentUser, userEditDelete}) =>{

    
    
    return (
        <>
            <h1>{bulletin.title}</h1>
            <h3><span>{bulletin.author.shortName}</span> <span>{bulletin.date}</span></h3>
            <p>{bulletin.body}</p>
            <>{userEditDelete(currentUser, bulletin)}</>
        </>
    );
    }

export default Bulletin;
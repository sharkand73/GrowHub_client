import React from 'react';

// The purpose of this file is to render one bulletin item

// Incoming props = BulletinItem

const Bulletin = ({bulletin, currentUser}) =>{
    
    return (
        <div className="post-it-container">
            <h2>{bulletin.title}</h2>
            <h3><span>{bulletin.author.shortName}</span> <span>{bulletin.date}</span></h3>
            <p>{bulletin.body}</p>
        </div >
    );
    }

export default Bulletin;
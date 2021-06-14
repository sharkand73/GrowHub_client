import React from 'react';

// The purpose of this file is to render one bulletin item

// Incoming props = BulletinItem

const Bulletin = ({bulletin, currentUser, deleteBulletin}) =>{

    const bulletinEditDelete = () => {
        if (currentUser.email === bulletin.author.email) {
            return(
                <>
                <div>
                    <button type='button' onClick={() => deleteBulletin(bulletin)}>Delete</button>
                </div>
                <div>
                    <button type='button'>Edit</button>
                </div>
                </>
            )
        }
    }
    
    return (
        <>
            <h1>{bulletin.title}</h1>
            <h3><span>{bulletin.author.shortName}</span> <span>{bulletin.date}</span></h3>
            <p>{bulletin.body}</p>
            <>{bulletinEditDelete()}</>
        </>
    );
    }

export default Bulletin;
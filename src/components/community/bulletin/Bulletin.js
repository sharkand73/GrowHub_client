import React from 'react';

// The purpose of this file is to render one bulletin item

// Incoming props = BulletinItem

const Bulletin = ({bulletin, currentUser, deleteBulletin}) =>{

    const bulletinEditDelete = () => {
        if (currentUser.email === bulletin.author.email) {
            return(
                <>
                <div>
                    <span className="edit">Edit</span>
                    <span className="delete" onClick={() => deleteBulletin(bulletin)}>Delete</span>
                </div>
                </>
            )
        }
    }
    
    return (
        <button id="post-it">
            <h2>{bulletin.title}</h2>
            <h3><span id="bulletin-author">{bulletin.author.shortName}</span> <span value={bulletin.id} id="bulletin-date">{bulletin.date}</span></h3>
            {/* <p>{bulletin.body}</p> */}
            <>{bulletinEditDelete()}</>
        </button>
    );
    }

export default Bulletin;
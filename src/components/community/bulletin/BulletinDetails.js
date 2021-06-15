import React from 'react';

const BulletinDetails = ({bulletin, clickAway, deleteBulletin, currentUser}) => {
    
    const bulletinEditDelete = () => {
        // console.log(`Current user: ${currentUser.id}`);
        // console.log(`Bulletin author ${bulletin.author.id}`);
        if (currentUser.email === bulletin.author.email) {
            return(
            
                <div className = "edit-delete">
                    <span className="edit-text">Edit</span>
                    <span className="delete-text" onClick={() => deleteBulletin(bulletin)}>Delete</span>
                </div>
                
            )
        }
    }
    return(
        <div>
            <div id = "large-post-it" onClick = {clickAway}>
                <h2>{bulletin.title}</h2>
                <h3>{bulletin.author.shortName}</h3>
                <h3>{bulletin.date}</h3>
                <div>
                <p>{bulletin.body}</p>
                </div>
            </div>
            {bulletinEditDelete}
        </div>
    )
}

export default BulletinDetails;
import React from 'react';

const BulletinDetails = ({bulletin, clickAway}) => {

    return(
        <div id = "large-post-it" onClick = {clickAway}>
            <h2>{bulletin.title}</h2>
            <h3>{bulletin.author.shortName}</h3>
            <h3>{bulletin.date}</h3>
            <div>
            <p>{bulletin.body}</p>
            </div>
        </div>
    )
}

export default BulletinDetails;
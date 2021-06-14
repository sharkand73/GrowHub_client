import React from 'react';

const BulletinDetails = ({bulletin, clickAway}) => {

    return(
        <div id = "large-post-it">
            <h1>{bulletin.title}</h1>
            <h2>{bulletin.author.shortName}</h2>
            <h3>{bulletin.date}</h3>
            <p>{bulletin.body}</p>
        </div>
    )
}

export default BulletinDetails;
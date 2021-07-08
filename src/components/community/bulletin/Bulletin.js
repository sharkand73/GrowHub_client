import React from 'react';

// The purpose of this file is to render one bulletin item

// Incoming props = BulletinItem

const Bulletin = ({bulletin, displayBulletin}) =>{

    const onClick = (item) => {
        displayBulletin(item);
    }
    
    return (
        <>
        <button type="button" className="post-it" onClick={()=> onClick(bulletin)} value={bulletin}>
                <h2>{bulletin.title}</h2>
                <h3>{bulletin.author.shortName}</h3>
                <h4>{bulletin.date}</h4>
        </button>
        </>
    );
    }

export default Bulletin;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// The purpose of this file is to render one bulletin item

// Incoming props = BulletinItem

const Bulletin = ({bulletin, displayBulletin}) =>{

    const onClick = (item) => {
        displayBulletin(item);
    }
    
    return (
        <>
        <button type="button" class="post-it" onClick={()=> onClick(bulletin)} value={bulletin}>
                <h2>{bulletin.title}</h2>
                <h3>{bulletin.author.shortName}</h3>
                <h4>{bulletin.date}</h4>
        </button>
        </>
    );
    }

export default Bulletin;


import React, { useState } from 'react';
import Bulletin from './Bulletin.js';
import EditBulletin from './EditBulletin.js';
import {Link} from 'react-router-dom';

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = ({currentUser, sortedBulletins, deleteBulletin, displayBulletin, editBulletin}) =>{


// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = sortedBulletins.map((bulletin, index) => {
    return(
        
        <li className="postit" key={index}><Bulletin bulletin={bulletin} currentUser={currentUser} deleteBulletin={deleteBulletin} displayBulletin={displayBulletin} editBulletin={editBulletin} /></li>
    )
})



return (
<>
    <div id = "noticeboard-list">
        <ul>
            {bulletinArray}
        </ul>
        <h2>
            <Link to='/bulletins/new' id="new-bulletin">
                New Bulletin
            </Link>
        </h2>
    </div>
    
</>
);
}


export default BulletinList;
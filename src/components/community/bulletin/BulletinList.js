import React, { useState } from 'react';
import Bulletin from './Bulletin.js';
import EditBulletin from './EditBulletin.js';

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = ({currentUser, sortedBulletins, deleteBulletin, displayBulletin, editBulletin, getDate}) =>{

    const [selectedBulletin, setSelectedBulletin] = useState(null);

    const editClick = (item) => {
        setSelectedBulletin(item);
    }

    const removeEdit = () => {
        setSelectedBulletin(null)
    }

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = sortedBulletins.map((bulletin, index) => {
    return(
        
        <li className="bulletin-postit" key={index}><Bulletin bulletin={bulletin} currentUser={currentUser} deleteBulletin={deleteBulletin} displayBulletin={displayBulletin} editClick={editClick} /></li>
    )
})



return (
    <div id = "noticeboard-list">
        <ul>
            {bulletinArray}
        </ul>
        <div>
            {selectedBulletin ? <EditBulletin currentUser={currentUser} bulletin={selectedBulletin} editBulletin={editBulletin} removeEdit={removeEdit} getDate={getDate} /> : null}
        </div>

    </div>
);
}


export default BulletinList;
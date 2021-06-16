import React from 'react';
import Bulletin from './Bulletin.js';

const BulletinList = ({currentUser, sortedBulletins, deleteBulletin, displayBulletin, editBulletin}) =>{

const bulletinArray = sortedBulletins.map((bulletin, index) => {
    return(
        
        <li className="bulletin-postit" key={index}><Bulletin bulletin={bulletin} currentUser={currentUser} deleteBulletin={deleteBulletin} displayBulletin={displayBulletin} editBulletin={editBulletin} /></li>
    )
})

return (
    <div id = "noticeboard-list">
        <ul>
            {bulletinArray}
        </ul>
    </div>
);
}


export default BulletinList;
import React from 'react';
import Bulletin from './Bulletin.js';

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = ({currentUser, sortedBulletins}) =>{

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = sortedBulletins.map((bulletin, index) => {
    return(
        <li className="bulletin-postit" key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
    )
})

return (
    <>
        <ul>
            {bulletinArray}
        </ul>

    </>
);
}


export default BulletinList;
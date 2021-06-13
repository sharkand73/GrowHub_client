import React from 'react';
import Bulletin from './Bulletin.js';
import {Link} from 'react-router-dom';

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
        <h1>Bulletin Board</h1>
        <ul>
            {bulletinArray}
        </ul>

        <button>
                <Link to='/bulletins/new'>
                    New Bulletin
                </Link>
            </button>
    </>
);
}


export default BulletinList;
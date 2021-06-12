import React from 'react';
import Bulletin from './Bulletin.js';
import {Link} from 'react-router-dom';

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = ({bulletins, currentUser}) =>{

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = bulletins.map((bulletin, index) => {
    return(
        <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
    )
})
//will need to reverse this ^ array to put it into descending date order. 

return (
    <>
        <h3>This is the list of bulletin items</h3>
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
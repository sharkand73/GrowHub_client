import React from 'react';
import Bulletin from './Bulletin.js';
import {Link} from 'react-router-dom';

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = ({bulletins, currentUser}) =>{

// Sort the bulletins via reverse date order
const bulletinsInDateOrder = bulletins.sort((a, b) => {
    a = a.date.split('/').reverse().join('');
    b = b.date.split('/').reverse().join('');
    return a > b ? -1 : a < b ? 1 : 0;
});

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = bulletinsInDateOrder.map((bulletin, index) => {
    return(
        <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
    )
})

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
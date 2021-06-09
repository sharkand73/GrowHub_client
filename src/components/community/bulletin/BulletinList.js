import React from 'react';

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = () =>{

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across

return (
    <>
        <h1>This is the list of bulletin items</h1>
        <p>Also have a button to add a new bulletin item</p>
    </>
);
}


export default BulletinList;
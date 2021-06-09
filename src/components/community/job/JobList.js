import React from 'react';

// The purpose of this file is to render a list of jobbies and also render the 
// new jobbie file

// Inward props = user & Jobs & onClick for new jobs and edit jobs

// Outgoing props = user

const BulletinList = () =>{

// map through Jobs prop and render a Job.js for each job it comes across

return (
    <>
        <h1>This is the list of jobbies</h1>
        <p>Also have a button to add a new jobbie</p>
    </>
);
}


export default JobList;
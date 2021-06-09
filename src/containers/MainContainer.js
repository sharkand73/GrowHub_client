import React, { useState, useEffect } from 'react';
import HomePageContainer from './HomePageContainer';
import Request from '../helpers/request';



// Responsible for State and RequestAlls from DB

// Renders HomePageContainer once user is logged in

// Props passed down: all, to HomePageContainer (we also pass 1 user here. The currentUser who has logged in, methodology TBC..)

const MainContainer = () =>{
    const [currentUser, setCurrentUser] = useState([]);
    const [plots, setPlots] = useState([]);
    const [knowHows, setKnowHows] = useState([]);
    const [bulletins, setBulletins] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [tips, setTips] = useState([]);


    // This function makes an instance of the helpers/Request.js class, and GETS all our required state objects from DB, from localhost:8080/api
    const requestAll = function(){
        const request = new Request();
        // May need another promise here once we have logged in sorted, for currentUserPromise = request.get('/user/:id')...ish
        const plotsPromise = request.get('/plots');
        const knowHowsPromise = request.get('/knowHows');
        const bulletinsPromise = request.get('/bulletins');
        const jobsPromise = request.get('/jobs');
        const tipsPromise = request.get('/tips');

        // Completing the operation^
        Promise.all([plotsPromise, knowHowsPromise, bulletinsPromise, jobsPromise, tipsPromise])
            .then((data) => {
                setPlots(data[0]);
                setKnowHows(data[1]);
                setBulletins(data[2]);
                setJobs(data[3]);
                setTips(data[4]);
                // Likewise as above, may need one for currentUser
            })}

    useEffect(()=>{requestAll()}, [])

    return(
        <>
            <h1>This is the Main Container</h1>
            {/* If user logged in, render HomePageContainer. Else render Login screen */}

        </>
    )

}

export default MainContainer;
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from '../components/user/Login';
import HomePageContainer from './HomePageContainer';
import Request from '../helpers/request';
import NavBar from '../components/NavBar';

// This container is responsible for State, initial requests to DB to GET, and other requests (post new etc.)
// Renders HomePageContainer once user is logged in
// Props passed down: all, to HomePageContainer (we also pass 1 user here. The currentUser who has logged in, methodology TBC..)

const MainContainer = () =>{
    const [currentUser, setCurrentUser] = useState([]); // Currently no user is set. Our Login function should setCurrentUser
    const [plots, setPlots] = useState([]);
    const [knowHows, setKnowHows] = useState([]);
    const [bulletins, setBulletins] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [tips, setTips] = useState([]);


    // This function makes an instance of the helpers/Request.js class, and GETS all our required state objects from DB, from localhost:8080/api
    const requestAll = function(){
        const request = new Request();
        const plotsPromise = request.get('/plots');
        const knowHowsPromise = request.get('/knowHows');
        const bulletinsPromise = request.get('/bulletins');
        const jobsPromise = request.get('/jobs');
        const tipsPromise = request.get('/tips');
        // May need another promise here once we have logged in sorted
        const currentUserPromise = request.get('/user/:id');

        // Completing the operation^
        Promise.all([plotsPromise, knowHowsPromise, bulletinsPromise, jobsPromise, tipsPromise, currentUserPromise])
            .then((data) => {
                setPlots(data[0]);
                setKnowHows(data[1]);
                setBulletins(data[2]);
                setJobs(data[3]);
                setTips(data[4]);
                // Likewise as above, may need one of these for currentUser if promised
                setCurrentUser(data[5]);
            })}

    useEffect(()=>{requestAll()}, [])


    // We currently need this handlePost for knowHow, Jobs, Bulletins etc. Can we condense it to one, via object type?
            // Means we only need to pass ONE prop down instead of 3. As posters should go in main container
    // Also could just have them in their relevant files, but requests SHOULD go in main container
    const handlePostKnowHow = (knowHow) => {
        const request = new Request();
        request.post("/knowHow", knowHow)
        .then(() => window.location = '/knowHows') //Not reaally sure what this does
    }

    const handlePostBulletin = (bulletin) => {
        const request = new Request();
        request.post("/bulletin", bulletin)
        .then(() => window.location = '/bulletins') 
    }

    const handlePostJob = (job) => {
        const request = new Request();
        request.post("/job", job)
        .then(() => window.location = '/jobs')
    }

    // Trialling what the above refactor would look like:
        // Problem is, we don't have an Object to compare it to
        // so can't do "if newObject is instance of knowHow"
        // Trying: "if new Object is instance of knowHows[0]" ?? 

    const handlePost = (newObject) => {
        const request = new Request();
        if (newObject instanceof knowHows[0]){
            request.post("/knowHow", newObject)
            .then(() => window.location = '/knowHows')
        }
        if (newObject instanceof jobs[0]){
            request.post("/job", newObject)
            .then(() => window.location = '/jobs')
        }
        if (newObject instanceof bulletins[0]){
            request.post("/bulletin", newObject)
            .then(() => window.location = '/bulletins') 
        }
    }


    return(
        <Router>
        <> 
            <NavBar/> 

            <h1>This is the Main Container</h1>


             {/*    If user logged in, set Route to /home. 
                    Else set route to /login
                    Probably don't need the Switch for this. Just a conditional render based on currentUser state?
                        *****Currently could not get it to work with an if statement ****
                        The routes set up ok, no errors, but it wasn't going to the routes when we open up localhost:3000
                        I'd expect it to open up, go "oh, no user logged in, let me route to /login"
            */}

        <Switch>
            
                <Route path="/home" render={() => {
                    return(
                        <HomePageContainer 
                            currentUser = {currentUser}
                            plots = {plots}
                            knowHows = {knowHows}
                            bulletins = {bulletins}
                            jobs = {jobs}
                            tips = {tips}
                            // also pass in the handlePost method once working. 
                            // And handleEdit and handleDelete once onto extensions
                        />)
                }}/>

                <Route render={() => {
                    // This is the default render, till we set the Route to /home once we have logged in
                    return(
                        <>
                            <h3>Please login to continue</h3>
                            <Login/>
                        </>
                    )
                }}/>

        </Switch>
        </>
        </Router>
    )

}

export default MainContainer;
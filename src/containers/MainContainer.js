import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect, Link} from 'react-router-dom';

import Login from '../components/user/Login';
import HomePageContainer from './HomePageContainer';
import Request from '../helpers/request';
import NavBar from '../components/NavBar';
import PrivateRoute from '../components/user/PrivateRoute';
import PlotList from '../components/plots/PlotList';
import KnowHowList from '../components/knowHows/KnowHowList';
import NewKnowHow from '../components/knowHows/NewKnowHow';
import Community from '../components/community/Community';
import PlotDetail from '../components/plots/PlotDetail';

// This container is responsible for State, initial requests to DB to GET, and other requests (post new etc.)
// Renders HomePageContainer once user is logged in
// Props passed down: all, to HomePageContainer (we also pass 1 user here. The currentUser who has logged in, methodology TBC..)

const MainContainer = () =>{
    const [currentUser, setCurrentUser] = useState(null); // Currently no user is set. Our Login function should setCurrentUser
    const [plots, setPlots] = useState([]);
    const [knowHows, setKnowHows] = useState([]);
    const [bulletins, setBulletins] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [tips, setTips] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    // const [months, setMonths] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const plotsPromise = request.get('/api/plots');
        const knowHowsPromise = request.get('/api/knowhows');
        const bulletinsPromise = request.get('/api/bulletins');
        const jobsPromise = request.get('/api/jobs');
        const tipsPromise = request.get('/api/tips');
        const allUsersPromise = request.get('/api/users');
        // const monthsPromise = request.get('/api/months');

        Promise.all([plotsPromise, knowHowsPromise, bulletinsPromise, jobsPromise, tipsPromise, allUsersPromise])
            .then((data) => {
                setPlots(data[0]);
                setKnowHows(data[1]);
                setBulletins(data[2]);
                setJobs(data[3]);
                setTips(data[4]);
                setAllUsers(data[5]);
                // setMonths(data[6]);
            })}

    useEffect(()=>{requestAll()}, [])

    const postKnowHow = (knowHow) => {
        const request = new Request();
        request.post("/knowHow", knowHow)
        .then(() => window.location = '/knowHows')
    }

    const postBulletin = (bulletin) => {
        const request = new Request();
        request.post("/bulletin", bulletin)
        .then(() => window.location = '/bulletins') 
    }

    const postJob = (job) => {
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

    const findPlotById = (plotId) => {
        return plots.find((plot) => {
            return plot.id === parseInt(plotId)
            }
        )
    }

    return(

        <Router>

        <> 
            <NavBar/> 

            <h1>Villcumin to GrowHub</h1>

            <Switch>
                <PrivateRoute exact path="/" component={() => {
                    return (
                        <HomePageContainer 
                            currentUser = {currentUser}
                            bulletins = {bulletins}
                            tips = {tips}
  
                        />)
                    }} currentUser={currentUser} /> 

                <PrivateRoute exact path = '/plots' component = {() =>{
                    return <PlotList currentUser={currentUser} plots={plots} />
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/plots/:id' component = {(props) => {
                    const id = props.match.params.id;
                    const foundPlot = findPlotById(id);
                    return <PlotDetail currentUser={currentUser} plot={foundPlot} />
                }} currentUser={currentUser} />

                <PrivateRoute exact path = '/community' component = {() =>{
                    return <Community currentUser={currentUser} bulletins={bulletins} jobs={jobs}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/knowhows' component = {() =>{
                    return <KnowHowList currentUser={currentUser} knowHows={knowHows}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/knowhows/new' component = {() =>{
                    return <NewKnowHow currentUser={currentUser}  postKnowHow={postKnowHow} />
                }} currentUser={currentUser}/>

                <Route path = "/login" render={() => {
                    return(
                        <>
                            <h3>Please login to continue</h3>
                            <Login users={allUsers} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                        </>
                    )
                }}/>

                <Route render={() => {
                    return(
                        <>
                            <h1>DIS PAGE NO EXIST</h1> 
                        </>
                    )
                }} />

            </Switch>
        </>
        </Router>
    )

}

export default MainContainer;
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

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
import NewJob from '../components/community/job/NewJob';
import NewBulletin from '../components/community/bulletin/NewBulletin';

const MainContainer = () =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [plots, setPlots] = useState([]);
    const [knowHows, setKnowHows] = useState([]);
    const [bulletins, setBulletins] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [tips, setTips] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [communalAreas, setCommunalAreas] = useState([]);
    // const [months, setMonths] = useState([]);

    // temporary array of months till we hook up enums somehow
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const requestAll = function(){
        const request = new Request();
        const plotsPromise = request.get('/api/plots');
        const knowHowsPromise = request.get('/api/knowhows');
        const bulletinsPromise = request.get('/api/bulletins');
        const jobsPromise = request.get('/api/jobs');
        const tipsPromise = request.get('/api/tips');
        const allUsersPromise = request.get('/api/users');
        const communalAreasPromise = request.get('/api/communals');

        Promise.all([plotsPromise, knowHowsPromise, bulletinsPromise, jobsPromise, tipsPromise, allUsersPromise, communalAreasPromise])
            .then((data) => {
                setPlots(data[0]);
                setKnowHows(data[1]);
                setBulletins(data[2]);
                setJobs(data[3]);
                setTips(data[4]);
                setAllUsers(data[5]);
                setCommunalAreas(data[6]);
            })}

    useEffect(()=>{requestAll()}, [])



    const postKnowHow = (knowHow) => {
        knowHows.push(knowHow);
        const request = new Request();
        request.post("/api/knowhows", knowHow);
    }

    const postBulletin = (bulletin) => {
        bulletins.push(bulletin);
        const request = new Request();
        request.post("/api/bulletins", bulletin);
    }

    const postJob = (job) => {
        jobs.push(job);
        console.log("postJob, job:")
        console.log(job);
        const request = new Request();
        request.post("/api/jobs", job);
    }

    const findPlotById = (plotId) => {
        return plots.find((plot) => {
            return plot.id === parseInt(plotId)
            }
        )
    }

    const getDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`
    }


// weather data and api fetch
    
    const nullData = {
        "coord": {
        "lon": 0,
        "lat": 0
        },
        "weather": [
        {
        "id": 0,
        "main": "",
        "description": "",
        "icon": ""
        }
        ],
        "base": "",
        "main": {
        "temp": 0,
        "feels_like": 0,
        "temp_min": 0,
        "temp_max": 0,
        "pressure": 0,
        "humidity": 0
        },
        "visibility": 0,
        "wind": {
        "speed": 0,
        "deg": 0
        },
        "clouds": {
        "all": 0
        },
        "dt": 1623496264,
        "sys": {
        "type": 1,
        "id": 1441,
        "country": "GB",
        "sunrise": 0,
        "sunset": 0
        },
        "timezone": 3600,
        "id": 2648579,
        "name": "Glasgow",
        "cod": 200
        }
    const [weatherData, setWeatherData] = useState(nullData);
    const APIKey = "0d820993802bd0122435be9caac2043d";
    const location = "Glasgow";

    const getData = function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`)
            .then(results => results.json() )
            .then(data => {setWeatherData(data)})
        };
    
    useEffect(() => getData(), []);




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
                            weatherData = {weatherData}
  
                        />)
                    }} currentUser={currentUser} /> 

                <PrivateRoute exact path = '/plots' component = {() =>{
                    return <PlotList currentUser={currentUser} plots={plots} />
                }} currentUser={currentUser}/>



                <Route exact path = "/plots/:id" render = {(props) => {
                    const id = props.match.params.id;
                    const foundPlot = findPlotById(id);
                    return foundPlot ? <PlotDetail currentUser={currentUser} plot={foundPlot} />: <Redirect to="/plots" />
                }} currentUser={currentUser} /> 

                <PrivateRoute exact path = '/community' component = {() =>{
                    return <Community currentUser={currentUser} bulletins={bulletins} jobs={jobs}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/jobs/new' component = {() =>{
                    return <NewJob currentUser={currentUser}  postJob={postJob} communalAreas={communalAreas} getDate={getDate}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/bulletins/new' component = {() =>{
                    return <NewBulletin currentUser={currentUser}  postBulletin={postBulletin} getDate={getDate}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/knowhows' component = {() =>{
                    return <KnowHowList currentUser={currentUser} knowHows={knowHows}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/knowhows/new' component = {() =>{
                    return <NewKnowHow currentUser={currentUser}  postKnowHow={postKnowHow} months={months} getDate={getDate}/>
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
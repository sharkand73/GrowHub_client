import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

import Login from '../components/user/Login';
import HomePageContainer from './HomePageContainer';
import Request from '../helpers/request';
import NavBar from '../components/NavBar';
import PrivateRoute from '../components/user/PrivateRoute';

import Admin from '../components/admin/Admin';
import AdminUsers from '../components/admin/AdminUsers';

import KnowHowList from '../components/knowHows/KnowHowList';
import KnowHowDetail from '../components/knowHows/KnowHowDetail';
import NewKnowHow from '../components/knowHows/NewKnowHow';

import Community from '../components/community/Community';

import PlotsHome from '../components/plots/PlotsHome';
import PlotDetail from '../components/plots/PlotDetail';

import NewJob from '../components/community/job/NewJob';
import NewBulletin from '../components/community/bulletin/NewBulletin';
import NewUser from '../components/user/NewUser.js';


const MainContainer = ({allotmentSettings}) =>{

    const [currentUser, setCurrentUser] = useState(null);
    const [plots, setPlots] = useState([]);
    const [knowHows, setKnowHows] = useState([]);
    const [bulletins, setBulletins] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [tips, setTips] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [communalAreas, setCommunalAreas] = useState([]);
    const [newUserCheck, setNewUserCheck] = useState(0);
    const [replies, setReplies] = useState([]);
    const [comments, setComments] = useState([]);

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
        const repliesPromise = request.get('/api/replies');
        const commentsPromise = request.get('/api/comments');

        

        Promise.all([plotsPromise, knowHowsPromise, bulletinsPromise, jobsPromise, tipsPromise, allUsersPromise, communalAreasPromise, repliesPromise, commentsPromise])
            .then((data) => {
                setPlots(data[0]);
                setKnowHows(data[1]);
                setBulletins(data[2]);
                setJobs(data[3]);
                setTips(data[4]);
                setAllUsers(data[5]);
                setCommunalAreas(data[6]);
                setReplies(data[7]);
                setComments(data[8]);
            })}

    useEffect(()=>{requestAll()}, [])



    const postKnowHow = (knowHow) => {
        // knowHows.push(knowHow);
        const request = new Request();
        request.post("/api/knowhows", knowHow)
        .then(res => res.json())
        .then((data) => {
            console.log('data back from db', data)
            setKnowHows([...knowHows, data])
        })
    }

    const findKnowHowById = (knowHowId) => {
        return knowHows.find((knowHow) => {
            return knowHow.id === parseInt(knowHowId)
            }
        )
    }

    const deleteKnowhow = (knowHow) => {
        const newKnowHowList = [...knowHows];
        const index = newKnowHowList.indexOf(knowHow);
        newKnowHowList.splice(index, 1);
        const request = new Request();
        request.delete("/api/knowhows/" + knowHow.id);
        setKnowHows(newKnowHowList);
    }

    const editKnowHow = (oldKnowhow, newKnowhow) => {
        const url = "/api/knowhows/" + oldKnowhow.id
        const tempKnowhowList = [...knowHows];
        const index = tempKnowhowList.indexOf(oldKnowhow);
        tempKnowhowList.splice(index, 1);
        tempKnowhowList.push(newKnowhow);
        setKnowHows(tempKnowhowList);
        const request = new Request();
        request.put(url, newKnowhow);
    }

    const postBulletin = (bulletin) => {
        const request = new Request();
        request.post("/api/bulletins", bulletin)
        .then(res => res.json())
        .then((data) => setBulletins([...bulletins, data]));
    }

    const editBulletin = (oldBulletin, newBulletin) => {
        const url = "/api/bulletins/" + oldBulletin.id
        const tempBulletinList = [...bulletins];
        const index = tempBulletinList.indexOf(oldBulletin);
        tempBulletinList.splice(index, 1);
        tempBulletinList.push(newBulletin);
        setBulletins(tempBulletinList);
        const request = new Request();
        request.put(url, newBulletin);
    }

    // const findBulletinById = (bulletinId) => {
    //     return bulletins.find((bulletin) => {
    //         return bulletin.id === parseInt(bulletinId)
    //         }
    //     )
    // }

    const deleteBulletin = (bulletin) => {
        const newBulletinList = [...bulletins];
        const index = newBulletinList.indexOf(bulletin);
        newBulletinList.splice(index, 1);
        const request = new Request();
        request.delete("/api/bulletins/" + bulletin.id)
        setBulletins(newBulletinList);
    } 

    const postJob = (job) => {
        const request = new Request();
        request.post("/api/jobs", job)
        .then(res => res.json())
        .then((data) => setJobs([...jobs, data]));
    }
    
    // const findJobById = (jobId) => {
    //     return jobs.find((job) => {
    //         return job.id === parseInt(jobId)
    //         }
    //     )
    // }

    const deleteJob = (job) => {
        const newJobList = [...jobs];
        const index = newJobList.indexOf(job);
        newJobList.splice(index, 1);
        const request = new Request();
        request.delete("/api/jobs/" + job.id)
        setJobs(newJobList);
    }

    const editJob = (oldJob, newJob) => {
        const url = "/api/jobs/" + oldJob.id;
        //newJob.id = oldJob.id;
        const tempJobList = [...jobs];
        const index = tempJobList.indexOf(oldJob);
        tempJobList.splice(index, 1);
        tempJobList.push(newJob);
        setJobs(tempJobList);
        const request = new Request();
        request.put(url, newJob);
    }

    const postUser = (newUser) => {
        // Re-initialize the newUserCheck state
        setNewUserCheck(0);
        // Sets a maximum number of users allowed
        if (allUsers.length > 100){
            return setNewUserCheck(4)
        }
        for (let i in allUsers){
            // Checks to see if username matches any existing in DB
            if (allUsers[i].shortName === newUser.shortName){
                return setNewUserCheck(1)
            }
            // Checks to see if email matches any existing in DB
            if (allUsers[i].email === newUser.email){
                return setNewUserCheck(2)
            }
        }
    
        const request = new Request();
        request.post("/api/users", newUser)
        .then(res => res.json())
        .then((data) => setAllUsers([...allUsers, data]));
        return setNewUserCheck(3);
    }

    const adminPostUser = (newUser) => {
        const allUserNames = allUsers.map((user) => (user.shortName));
        if (allUserNames.contains(newUser.shortname)) {
            return null;
        }
        const request = new Request();
        request.post("/api/users", newUser)
        .then(res => res.json())
        .then((data) => setAllUsers([...allUsers, data]));
        return newUser;
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

    const sortByReverseDate = (array) => {
        const sortedArray = array.sort((a, b) => {
            a = a.date.split('/').reverse().join('');
            b = b.date.split('/').reverse().join('');
            return a > b ? -1 : a < b ? 1 : 0;
        });
        return sortedArray
    }

    const sortedBulletins = sortByReverseDate(bulletins);


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

    const getData = function(){
        if (allotmentSettings){
        const APIKey = allotmentSettings.apikey;
        const location = allotmentSettings.location;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`)
            .then(results => results.json() )
            .then(data => {setWeatherData(data)})
        }
        };
    
    useEffect(() => getData(), [allotmentSettings]);

    const postKnowHowReply = (reply) => {
        setKnowHows(knowHows);
        const request = new Request();
        request.post("/api/replies", reply)
        .then(res => res.json())
        .then((data) => setReplies([...replies, data]));
    }

    const postComment = (comment) => {
        setPlots(plots);
        const request = new Request();
        request.post("/api/comments", comment)
        .then(res => res.json())
        .then((data) => setComments([...comments, data]));
    }

    return(
        <Router>

        <> 
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/> 

            <Switch>
                <PrivateRoute exact path="/" component={() => {
                    return (
                        <HomePageContainer 
                            currentUser = {currentUser}
                            tips = {tips}
                            weatherData = {weatherData}
                            getDate = {getDate}
                            sortedBulletins = {sortedBulletins}
                        />)
                    }} currentUser={currentUser} /> 

                <PrivateRoute exact path='/admin' component = {() => {
                    return <AdminUsers 
                        currentUser={currentUser} 
                        plots={plots} 
                        users={allUsers} 
                        getDate={getDate} />
                    }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/plots' component = {() =>{
                    return <PlotsHome 
                    currentUser={currentUser} 
                    plots={plots} 
                    mapExists={allotmentSettings.hasMap} 
                    getDate={getDate} 
                    postComment={postComment}/>
                }} currentUser={currentUser}/>

                <Route exact path = "/plots/:id" render = {(props) => {
                    const id = props.match.params.id;
                    const foundPlot = findPlotById(id);
                    return foundPlot ? <PlotDetail 
                    currentUser={currentUser} 
                    plot={foundPlot} 
                    plots={plots} 
                    getDate={getDate}
                    postComment={postComment}
                    comments={comments}
                    />: <Redirect to="/plots" />
                }} currentUser={currentUser} /> 

                <PrivateRoute exact path = '/community' component = {() =>{
                    return <Community 
                    currentUser={currentUser} 
                    sortedBulletins={sortedBulletins} 
                    jobs={jobs} 
                    deleteBulletin={deleteBulletin} 
                    deleteJob={deleteJob} 
                    editBulletin={editBulletin} 
                    getDate={getDate}
                    postJob={postJob}
                    communalAreas={communalAreas}
                    editJob={editJob}
                    />
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/jobs/new' component = {() =>{
                    return <NewJob 
                    currentUser={currentUser}  
                    postJob={postJob} 
                    communalAreas={communalAreas} 
                    getDate={getDate}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/bulletins/new' component = {() =>{
                    return <NewBulletin 
                    currentUser={currentUser}  
                    postBulletin={postBulletin} 
                    getDate={getDate} />
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/knowhows' component = {() =>{
                    return <KnowHowList 
                    currentUser={currentUser} 
                    knowHows={knowHows} 
                    deleteKnowhow={deleteKnowhow} 
                    getDate={getDate} 
                    editKnowHow={editKnowHow}/>
                }} currentUser={currentUser}/>

                <PrivateRoute exact path = '/knowhows/new' component = {() =>{
                    return <NewKnowHow 
                    currentUser={currentUser}  
                    postKnowHow={postKnowHow} 
                    months={months} 
                    getDate={getDate}/>
                }} currentUser={currentUser}/>

                <Route exact path = "/knowhows/:id" render = {(props) => {
                    const id = props.match.params.id;
                    const foundKnowHow = findKnowHowById(id);
                    return foundKnowHow? <KnowHowDetail 
                    currentUser={currentUser}
                    knowHow={foundKnowHow} 
                    getDate={getDate} 
                    postReply={postKnowHowReply} 
                    replies={replies}/>: <Redirect to="/knowhows" />
                }} currentUser={currentUser} />                 

                <Route path = "/login" render={() => {
                    return(
                        <>
                            <Login users={allUsers} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                        </>
                    )
                }}/>

                <Route exact path = '/users/new' render = {() =>{
                    return <NewUser postUser={postUser} getDate={getDate} newUserCheck={newUserCheck}/>
                }}/>

                <Route render={() => {
                    return(
                        <div>
                            <h2>This page does not exist.</h2>
                            <p>If you encountered this error unexpectedly, please contact Andy S.</p>
                        </div>
                    )
                }} />

            </Switch>
        </>
        </Router>
    )
}

export default MainContainer;
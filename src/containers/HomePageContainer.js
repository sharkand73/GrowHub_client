import React from 'react';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';


import PlotList from '../components/plots/PlotList';
import KnowHowList from '../components/knowHows/KnowHowList';
import Community from '../components/community/Community'




// Renders weather widgets etc
// Renders buttons for areas of the site
// Renders some recent news bulletins (requires loop, find 3 most recent from bulletins prop, or something)
// Renders tip of the month
// Renders "hello {user}" message


// Props to pass down:
    // Plots = Plots & User
    // KnowHows = KnowsHows & User
    // Community = Bulletins, Jobs, User

const HomePageContainer = ({currentUser, plots, knowHows, bulletins, jobs, tips}) =>{

    return(
        <>
        <h1>This is our home page container</h1>
        {/* Not sure what order these should be in, till we trial it out */}

        <Link to="/plots">
            <button>Plots</button>
        </Link>

        <Link to="/knowhows">
            <button>Know Hows</button>
        </Link>
        
        <Link to="/community">
            <button>Community</button>
        </Link>

        <Switch>

            <Route exact path = '/plots' render = {() =>{
                return <PlotList currentUser={currentUser} plots={plots} />
            }}/>

            <Route exact path = '/community' render = {() =>{
                return <Community currentUser={currentUser} bulletins={bulletins} jobs={jobs}/>
            }}/>

            <Route exact path = '/knowhows' render = {() =>{
                return <KnowHowList currentUser={currentUser} knowHows={knowHows}/>
            }}/>

        </Switch>

        </>
    )

}

export default HomePageContainer;
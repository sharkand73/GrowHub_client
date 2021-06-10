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


// OTHER INFO:
    // It will probably be easier to actually make separate components for weather widgets, quick bulletins, tips etc
    // Makes the Rendering a bit simpler. Don't need to have all the HTML here under one giant conditional render

const HomePageContainer = ({currentUser, plots, knowHows, bulletins, jobs, tips}) =>{

    // Conditional to prevent access to /Home without logging in
    if (!currentUser){
        return (<p>Loading Home...</p>)
    }

    return(
        <>
        <h2>This is our home page container</h2>

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
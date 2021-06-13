import React from 'react';
import {Link} from 'react-router-dom';

import Bulletin from '../components/community/bulletin/Bulletin';
import Tip from '../components/community/tip/Tip';
import Weather from '../components/community/weather';

import '../css/Dash.css';
import LogoSmall from '../css/LogoSmall.png';


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

const HomePageContainer = ({currentUser, bulletins, tips, weatherData, getDate}) =>{

    const committeeBulletins = bulletins.map((bulletin, index) => {
            if (bulletin.author.position !== "NONE" || "INACTIVE"){
                return(
                    <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
                )
            }
            return null;
        })

    return(
        <>
        <div id="dash-grid-container" >

                 <div id="logo-grid2">
                 <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
                 </div>

                 <div id="paths-grid">
                    <Link to="/plots">
                        <button class="path-button">Plots</button>
                    </Link>

                    <Link to="/knowhows">
                        <button class="path-button">Know Hows</button>
                    </Link>

                    <Link to="/community">
                        <button class="path-button">Community</button>
                    </Link>
                </div>

                <div  id="weather-grid" class="weather-text">
                    <h3>Todays date:</h3>
                    {getDate()}

                    <Weather weatherData={weatherData}/>
                </div>
                

                <div class="fixedHeightContainer" id="news-grid">
                    <ul class="content news-text">
                    {committeeBulletins}
                    </ul>
                </div>


                <div id="tips-grid" class="tip-text">
                    <Tip tips = {tips} />
                </div>

        </div>

        </>
    )

}

export default HomePageContainer;
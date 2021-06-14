import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import Bulletin from '../components/community/bulletin/Bulletin';
import Tip from '../components/community/tip/Tip';
import Weather from '../components/community/weather';

import '../css/Dash.css';
import LogoSmall from '../css/LogoSmall.png';


const HomePageContainer = ({currentUser, tips, weatherData, getDate, sortedBulletins}) =>{
    
    // Filter out non-committee member posts
    const committeeBulletins = sortedBulletins.filter(bulletin => bulletin.author.position !== "NONE" || "INACTIVE");


    // Slice the most recent 3
    const threeBulletins = committeeBulletins.slice(0,3);

    // Map through the threeBulletins to create an li element
    const bulletinsForRender = threeBulletins.map((bulletin, index) => {
        return <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
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

                <div  id="weather-grid" class="dash-text">
                    <h3>Todays date:</h3>
                    {moment().format('DD MMMM YYYY')}

                    <Weather weatherData={weatherData}/>
                </div>
                

                <div class="fixedHeightContainer" id="news-grid">
                    <p class="news-header">Latest News</p>
                    <ul class="content news-text">
                    {bulletinsForRender}
                    </ul>
                </div>


                <div id="tips-grid"  class="tip-text" >
                    <Tip tips = {tips} />
                </div>

        </div>
        </>
    )

}

export default HomePageContainer;
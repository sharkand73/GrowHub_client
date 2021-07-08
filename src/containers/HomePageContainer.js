import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import NewsItem from '../components/community/bulletin/NewsItem';
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
        return <li key={index}><NewsItem bulletin={bulletin} currentUser={currentUser}/></li>
    })
    
    return(
        <>
        <div id="dash-grid-container" >

                <div id="logo-grid2">
                <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
                </div>

                <div id="paths-grid">
                    <Link to="/plots">
                        <button className="path-button">Plots</button>
                    </Link>

                    <Link to="/knowhows">
                        <button className="path-button">Know Hows</button>
                    </Link>

                    <Link to="/community">
                        <button className="path-button">Community</button>
                    </Link>
                </div>

                <div  id="weather-grid" className="text3">
                    <p className="header">Today's date</p>
                    {moment().format('DD MMMM YYYY')}

                    <Weather className="header" weatherData={weatherData}/>
                </div>
                

                <div className="fixedHeightContainer" id="news-grid">
                    <p className="news-header">Latest News</p>
                    <ul className="content news-text">
                    {bulletinsForRender}
                    </ul>
                </div>


                <div id="tips-grid" >
                    <Tip tips = {tips} />
                </div>
        </div>
        </>
    )
}

export default HomePageContainer;
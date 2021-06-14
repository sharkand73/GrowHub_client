import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import Bulletin from '../components/community/bulletin/Bulletin';
import Tip from '../components/community/tip/Tip';
import Weather from '../components/community/weather';

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
        <h2>This is our home page container</h2>

        <div>
            <ul>
                {bulletinsForRender}
            </ul>

            <div>
                <Tip tips = {tips} />
            </div>
            <div>
                <h3>Todays date:</h3>
                {moment().format('DD MMMM YYYY')}
            </div>
            <div><Weather weatherData={weatherData}/></div>
        
        </div>

        <Link to="/plots">
            <button>Plots</button>
        </Link>

        <Link to="/knowhows">
            <button>Know Hows</button>
        </Link>

        <Link to="/community">
            <button>Community</button>
        </Link>
        
        </>
    )

}

export default HomePageContainer;
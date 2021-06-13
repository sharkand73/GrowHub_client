import React from 'react';
import {Link} from 'react-router-dom';

import Bulletin from '../components/community/bulletin/Bulletin';
import Tip from '../components/community/tip/Tip';
import Weather from '../components/community/weather';

const HomePageContainer = ({currentUser, bulletins, tips, weatherData, getDate}) =>{
    
    // Sort the bulletins via reverse date order
    const bulletinsInDateOrder = bulletins.sort((a, b) => {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return a > b ? -1 : a < b ? 1 : 0;
    });

    // Filter out non-committee member posts
    const committeeBulletins = bulletinsInDateOrder.filter(bulletin => bulletin.author.position !== "NONE" || "INACTIVE");

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
                {getDate()}
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
import React from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';

// Props Incoming:
    // knowHows & user

// Props Outgoing:
    // KnowHow - knowHow, user

// Functions:
    // Map through all the prop knowHows and render a KnowHow, passing in the knowHow object

// Purpose:
    // Render a list of all KnowHows
    // Allow us in the future to then click on a KnowHow to edit etc
    // Also renders the form for a NewKnowHow

const KnowHowList = ({currentUser, knowHows}) =>{

    const knowHowArray = knowHows.map((knowHow, index) => {
        return(
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser}/></li>
        )
    })

    return(
        <>
            <h3>Here are all the Know Hows</h3>
            <ul>
                {knowHowArray}
            </ul>

            <button>
                <Link to='/knowhows/new'>
                    New KnowHow
                </Link>
            </button>

        </>
    )
}

export default KnowHowList;
import React, { useEffect } from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';

// Purpose:
    // Render a list of all KnowHows
    
const KnowHowList = ({currentUser, knowHows, userEditDelete}) =>{

    const knowHowArray = knowHows.map((knowHow, index) => {
        return(
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser} userEditDelete={userEditDelete}/></li>
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
                    New Know How
                </Link>
            </button>

        </>
    )
}

export default KnowHowList;
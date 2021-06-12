import React from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';

// Purpose:
    // Render a list of all KnowHows
    
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
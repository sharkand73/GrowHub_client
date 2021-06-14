import React, {useState} from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';

// Purpose:
    // Render a list of all KnowHows
    
const KnowHowList = ({currentUser, knowHows}) =>{

    const [filteredKnowhow, setFilteredKnowhow] = useState(KnowHow);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthOptions = months.map((month, index) => 
    (<select key={index} value={month.toUpperCase()}>{month}</select>)
    )


    const knowHowArray = knowHows.map((knowHow, index) => {
        return(
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser}/></li>
        )
    })

    return(
        <>
            <h3>Month-related gardening advice:</h3>
            <form>
                <select>
                    <option value='All'>All</option>
                    {monthOptions}
                </select>
            </form>
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
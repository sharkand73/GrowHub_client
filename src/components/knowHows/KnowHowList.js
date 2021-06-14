import React, {useState} from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';

// Purpose:
    // Render a list of all KnowHows
    
const KnowHowList = ({currentUser, knowHows}) =>{

    const [filteredKnowhows, setFilteredKnowhows] = useState(knowHows);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthOptions = months.map((month, index) => 
    (<option key={index} value={month.toUpperCase()}>{month}</option>)
    )

    const onChange = (e) => {
        let monthSelected = e.target.value;
        //console.log(monthSelected);
        let tempKnowhows = [];
        if (monthSelected === "All"){monthSelected = ""};
        tempKnowhows = knowHows.filter((item) =>
            (item.month.includes(monthSelected)));
        setFilteredKnowhows(tempKnowhows);
        }
    

    const knowHowArray = filteredKnowhows.map((knowHow, index) => {
        return(
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser}/></li>
        )
    })

    return(
        <>
            <h3>Month-related gardening advice:</h3>
            <form>
                <label htmlFor="month-select">By month</label>
                <select onChange={onChange}>
                    <option value='All'>All</option>
                    {monthOptions}
                </select>
            </form>
            <ul>
                {knowHowArray}
            </ul>

            <button>
                <Link to='/knowhows/new'>
                    Add know-how
                </Link>
            </button>

        </>
    )
}

export default KnowHowList;
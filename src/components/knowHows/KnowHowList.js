import React, {useState} from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';

import '../../css/Knowhow.css';
import '../../css/Dash.css';
import LogoSmall from '../../css/LogoSmall.png';

// Purpose:
    // Render a list of all KnowHows
    
const KnowHowList = ({currentUser, knowHows, deleteKnowhow}) => {

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
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser} deleteKnowhow={deleteKnowhow}/></li>
        )
    })

    return(
        <>
        <div id="knowledge-container">

            <div id="logo-grid2">
                 <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="header-grid">
                <p class="header">Month-related gardening advice:</p>
            </div>

            <div id="filter-grid" class="intro-flex">

                <form>
                    <label htmlFor="month-select">By month</label>
                    <select onChange={onChange}>
                        <option value='All'>All</option>
                        {monthOptions}
                    </select>
                </form>
                
                <button class="flex-button-right">
                    <Link to='/knowhows/new'>
                        Add know-how
                    </Link>
                </button>

            </div>

            <div id="body-grid">
                <ul>
                    {knowHowArray}
                </ul>
            </div>

            {/* <div id="buttons-grid">
                <button>
                    <Link to='/knowhows/new'>
                        Add know-how
                    </Link>
                </button>
            </div> */}

        </div>
        </>
    )
}

export default KnowHowList;
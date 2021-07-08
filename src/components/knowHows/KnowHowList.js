import React, {useState} from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';
import EditKnowHow from './EditKnowHow.js';

import '../../css/Knowhow.css';
import '../../css/Dash.css';
import LogoSmall from '../../css/LogoSmall.png';

// Purpose:
    // Render a list of all KnowHows
    
const KnowHowList = ({currentUser, knowHows, deleteKnowhow, getDate, editKnowHow}) => {

    const [selectedKnowhow, setSelectedKnowhow] = useState(null);

    const date = getDate();

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

    const editClick = (item) => {
        setSelectedKnowhow(item);
    }

    const removeEdit = () => {
        setSelectedKnowhow(null)
    }
    

    const knowHowArray = filteredKnowhows.map((knowHow, index) => {
        return(
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser} deleteKnowhow={deleteKnowhow} editClick={editClick} />
            <hr/>
            </li>
        )
    })

    return(
        <>

        <div id="knowledge-container">

            <div id="logo-grid2">
                <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="header-grid">
                <p className="kWh-header">Share your knowledge and learn in the knowhows bank!</p>
            </div>

            <div id="filter-grid" className="intro-flex">

                <form>
                    <label className="kHw-filter" htmlFor="month-select">Search by month</label>
                    <select className="filter-box" onChange={onChange}>
                        <option value='All'>All</option>
                        {monthOptions}
                    </select>
                </form>
                
                <button className="flex-button-right button">
                    <Link className="cleanLink kHw-filter" to='/knowhows/new'>
                        Add Knowhow
                    </Link>
                </button>

            </div>

            <div id="body-grid">
                <ul>
                    {knowHowArray}
                </ul>

                <div>
                    {selectedKnowhow ? <EditKnowHow currentUser={currentUser} knowHow={selectedKnowhow} months={months} date={date} editKnowHow={editKnowHow} removeEdit={removeEdit}/> : null}
                </div>
            </div>

        </div>
        </>
    )
}

export default KnowHowList;
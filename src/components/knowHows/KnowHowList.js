import React, {useState} from 'react';
import KnowHow from './KnowHow.js';
import {Link} from 'react-router-dom';
import EditKnowHow from './EditKnowHow.js';

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
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser} deleteKnowhow={deleteKnowhow} editClick={editClick} /></li>
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
                <div>
                    {selectedKnowhow ? <EditKnowHow currentUser={currentUser} knowHow={selectedKnowhow} months={months} date={date} editKnowHow={editKnowHow} removeEdit={removeEdit}/> : null}
                </div>

            <button>
                <Link to='/knowhows/new'>
                    Add know-how
                </Link>
            </button>

        </>
    )
}

export default KnowHowList;
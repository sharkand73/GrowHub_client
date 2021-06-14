import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import EditKnowHow from './EditKnowHow.js'

const KnowHow = ({knowHow, currentUser, deleteKnowhow, months, getDate, editKnowHow}) =>{

    // const [editButtonClicked, setEditButtonClicked] = useState(false)

    // useEffect(() => {
    //     setEditButtonClicked(false)
    // }, [])

    const knowHowEditDelete = () => {
        if (currentUser.email === knowHow.author.email) {
            return(
                <>
                <div>
                    <button type='button' onClick={() => deleteKnowhow(knowHow)}>Delete</button>
                </div>
                <div>
                    <button type='button'  >Edit</button>
                </div>
                {/* {editButtonClicked ? <EditKnowHow knowHow={knowHow} months={months} getDate={getDate} editKnowHow={editKnowHow} editButtonClicked={editButtonClicked}/> : null} */}
                </>
            )
        }
    }

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    const url = "/knowhows/" + knowHow.id;

    return(
        <div>
            <Link to={url}>
                <h4>{knowHow.title}</h4>
                <ul>
                    <li>{knowHow.body}</li>
                    <li>Applies to month: {month}</li>
                    <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
                </ul>
            </Link>
            <>{knowHowEditDelete()}</>
        </div>
    )

}

export default KnowHow;
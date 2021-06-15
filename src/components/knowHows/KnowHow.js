import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import EditKnowHow from './EditKnowHow.js'

import '../../css/Knowhow.css';
import '../../css/Dash.css';


const KnowHow = ({knowHow, currentUser, deleteKnowhow, editClick}) =>{


    const knowHowEditDelete = () => {
        if (currentUser.email === knowHow.author.email) {
            return(
                <>
                <div>
                    <button class="delete-button"  type='button' onClick={() => deleteKnowhow(knowHow)}>Delete</button>
                </div>
                <div>
                    <button class="edit-button" type='button' onClick={() => editClick(knowHow)} >Edit</button>
                </div>
                </>  
            )
        }
    }

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    const url = "/knowhows/" + knowHow.id;

    return(
        <div>
            <Link class="noLine" to={url}>
                <p class="kHw-title">{knowHow.title}</p>
                <ul>
                    <li class="kHw-month">Applies to month: {month}</li>
                    <li class="kHw-content">{knowHow.body}</li>
                    <li class="kHw-author">Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
                </ul>
            </Link>
            <div>
            <>{knowHowEditDelete()}</>
            </div>
        </div>
    )

}

export default KnowHow;
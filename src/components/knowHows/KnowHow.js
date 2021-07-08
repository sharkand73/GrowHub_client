import React from 'react';
import {Link} from 'react-router-dom'


import '../../css/Knowhow.css';
import '../../css/Dash.css';


const KnowHow = ({knowHow, currentUser, deleteKnowhow, editClick}) =>{


    const knowHowEditDelete = () => {
        if (currentUser.email === knowHow.author.email) {
            return(
                <>
                <div>
                    <button className="delete-button"  type='button' onClick={() => deleteKnowhow(knowHow)}>Delete</button>
                </div>
                <div>
                    <button className="edit-button" type='button' onClick={() => editClick(knowHow)} >Edit</button>
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
            <Link className="noLine" to={url}>
                <p className="kHw-title">{knowHow.title}</p>
                <ul>
                    <li className="kHw-month">Applies to month: {month}</li>
                    <li className="kHw-content">{knowHow.body}</li>
                    <li className="kHw-author">Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
                </ul>
            </Link>
            <div>
            <>{knowHowEditDelete()}</>
            </div>
        </div>
    )

}

export default KnowHow;
import React from 'react';
import {Link} from 'react-router-dom'

const KnowHow = ({knowHow, currentUser}) =>{

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
        </div>
    )

}

export default KnowHow;
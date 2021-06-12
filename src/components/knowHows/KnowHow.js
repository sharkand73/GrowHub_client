import React from 'react';

// Date
// Author
// Title
// body

const KnowHow = ({knowHow, currentUser}) =>{
    return(
        <div>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>
        </div>
    )

}

export default KnowHow;
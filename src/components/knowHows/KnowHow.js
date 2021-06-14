import React from 'react';

// Date
// Author
// Title
// body

const KnowHow = ({knowHow, currentUser}) =>{

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);



    return(
        <div>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Applies to month: {month}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>
        </div>
    )

}

export default KnowHow;